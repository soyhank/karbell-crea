import { createHmac, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import type { AstroCookies } from 'astro';

const COOKIE = 'kc_admin';
const TTL = 60 * 60 * 8; // 8 horas

const secret = () => process.env.SESSION_SECRET || 'dev-secret-change-me';
const sign = (data: string) => createHmac('sha256', secret()).update(data).digest('base64url');

function safeEq(a: string, b: string) {
  const x = Buffer.from(a), y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export function hashPassword(pass: string) {
  const salt = randomBytes(16).toString('hex');
  return salt + ':' + scryptSync(pass, salt, 32).toString('hex');
}

export function verifyPassword(pass: string, stored: string) {
  const [salt, hash] = stored.split(':');
  if (!salt || !hash) return false;
  return safeEq(scryptSync(pass, salt, 32).toString('hex'), hash);
}

/** Valida contra el hash guardado desde el panel o, si nunca se cambió, contra ADMIN_PASSWORD. */
export function checkPassword(pass: string, passHash?: string) {
  if (passHash) return verifyPassword(pass, passHash);
  const env = process.env.ADMIN_PASSWORD;
  return !!env && safeEq(pass, env);
}

export function createSession(cookies: AstroCookies, user: string) {
  const payload = Buffer.from(JSON.stringify({ u: user, exp: Date.now() + TTL * 1000 })).toString('base64url');
  cookies.set(COOKIE, payload + '.' + sign(payload), {
    httpOnly: true, secure: import.meta.env.PROD, sameSite: 'strict', path: '/', maxAge: TTL,
  });
}

export function destroySession(cookies: AstroCookies) {
  cookies.delete(COOKIE, { path: '/' });
}

export function isAuthed(cookies: AstroCookies) {
  const raw = cookies.get(COOKIE)?.value;
  if (!raw) return false;
  const [payload, sig] = raw.split('.');
  if (!payload || !sig || !safeEq(sig, sign(payload))) return false;
  try {
    return JSON.parse(Buffer.from(payload, 'base64url').toString()).exp > Date.now();
  } catch {
    return false;
  }
}

export const adminUser = () => process.env.ADMIN_USER || 'admin';

export const json = (data: unknown, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json', ...headers } });
