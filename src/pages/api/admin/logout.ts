import type { APIRoute } from 'astro';
import { destroySession, json } from '../../../lib/auth';

export const prerender = false;

export const POST: APIRoute = async ({ cookies }) => {
  destroySession(cookies);
  return json({ ok: true });
};
