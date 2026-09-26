import type { APIRoute } from 'astro';
import { checkPassword, hashPassword, isAuthed, json } from '../../../lib/auth';
import { readSettings, writeSettings } from '../../../lib/settings';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!isAuthed(cookies)) return json({ error: 'No autorizado' }, 401);
  const { current = '', next = '' } = await request.json().catch(() => ({}));
  const s = await readSettings();
  if (!checkPassword(String(current), s.passHash)) return json({ error: 'La contraseña actual no es correcta' }, 400);
  if (String(next).length < 8) return json({ error: 'La nueva contraseña debe tener al menos 8 caracteres' }, 400);
  s.passHash = hashPassword(String(next));
  await writeSettings(s);
  return json({ ok: true });
};
