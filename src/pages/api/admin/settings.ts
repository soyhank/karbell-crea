import type { APIRoute } from 'astro';
import { isAuthed, json } from '../../../lib/auth';
import { EVENTS, readSettings, writeSettings } from '../../../lib/settings';

export const prerender = false;

export const GET: APIRoute = async ({ cookies }) => {
  if (!isAuthed(cookies)) return json({ error: 'No autorizado' }, 401);
  const { passHash, ...s } = await readSettings();
  return json(s);
};

export const PUT: APIRoute = async ({ request, cookies }) => {
  if (!isAuthed(cookies)) return json({ error: 'No autorizado' }, 401);
  const body = await request.json().catch(() => null);
  if (!body) return json({ error: 'Datos inválidos' }, 400);
  const pixelId = String(body.pixelId ?? '').replace(/\D/g, '');
  if (pixelId && (pixelId.length < 15 || pixelId.length > 16))
    return json({ error: 'El ID del pixel debe tener 15 o 16 dígitos' }, 400);
  const whatsapp = String(body.whatsapp ?? '').replace(/\D/g, '');
  if (whatsapp.length < 9 || whatsapp.length > 15)
    return json({ error: 'Escribe el WhatsApp con código de país, por ejemplo 51987654321' }, 400);
  const s = await readSettings();
  s.pixelId = pixelId;
  s.whatsapp = whatsapp.length === 9 ? '51' + whatsapp : whatsapp;
  s.enabled = !!body.enabled && !!pixelId;
  for (const e of EVENTS) s.events[e] = e === 'PageView' ? true : !!body.events?.[e];
  const { passHash, ...saved } = await writeSettings(s);
  return json(saved);
};
