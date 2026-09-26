import type { APIRoute } from 'astro';
import { readSettings, publicView } from '../../lib/settings';
import { json } from '../../lib/auth';

export const prerender = false;

export const GET: APIRoute = async () => {
  const s = await readSettings();
  return json(publicView(s), 200, { 'cache-control': 'public, max-age=0, s-maxage=30, stale-while-revalidate=60' });
};
