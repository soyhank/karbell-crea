import type { APIRoute } from 'astro';
import { adminUser, checkPassword, createSession, json } from '../../../lib/auth';
import { readSettings } from '../../../lib/settings';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  const { user = '', pass = '' } = await request.json().catch(() => ({}));
  const s = await readSettings();
  const okUser = String(user).trim().toLowerCase() === adminUser().toLowerCase();
  if (!okUser || !checkPassword(String(pass), s.passHash)) {
    await new Promise((r) => setTimeout(r, 700)); // frena intentos por fuerza bruta
    return json({ error: 'Usuario o contraseña incorrectos' }, 401);
  }
  createSession(cookies, adminUser());
  return json({ ok: true });
};
