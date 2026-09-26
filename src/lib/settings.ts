import { get, put } from '@vercel/blob';
import { site } from '../data/site';

export const EVENTS = ['PageView', 'ViewContent', 'AddToCart', 'InitiateCheckout', 'Lead', 'Contact', 'Purchase'] as const;
export type EventName = (typeof EVENTS)[number];

export interface Settings {
  pixelId: string;
  whatsapp: string;
  enabled: boolean;
  events: Record<EventName, boolean>;
  passHash?: string;
  updatedAt?: string;
}

const PATH = 'config/settings.json';

export const defaults = (): Settings => ({
  pixelId: '',
  whatsapp: site.whatsapp,
  enabled: false,
  events: Object.fromEntries(EVENTS.map((e) => [e, true])) as Record<EventName, boolean>,
});

export async function readSettings(): Promise<Settings> {
  try {
    const res = await get(PATH, { access: 'private', useCache: false });
    if (!res || res.statusCode !== 200) return defaults();
    const data = JSON.parse(await new Response(res.stream).text());
    const base = defaults();
    return { ...base, ...data, events: { ...base.events, ...(data.events ?? {}) } };
  } catch {
    return defaults();
  }
}

export async function writeSettings(s: Settings) {
  s.updatedAt = new Date().toISOString();
  await put(PATH, JSON.stringify(s), {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
    cacheControlMaxAge: 60,
  });
  return s;
}

/** Lo que ve el sitio público: nunca incluye el hash de la contraseña. */
export const publicView = (s: Settings) => ({ pixelId: s.enabled ? s.pixelId : '', events: s.events, whatsapp: s.whatsapp });
