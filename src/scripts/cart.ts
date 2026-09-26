// Estado del carrito compartido por todas las páginas (localStorage).
export interface CartItem {
  id: string;
  kind: 'product' | 'pack';
  name: string;
  price: number;
  dozen?: number;
  img: string;
  option?: string;
  qty: number;
}

const KEY = 'kc_cart';

export const soles = (n: number) => `S/ ${n.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
export const unit = (it: CartItem) => (it.dozen && it.qty >= 12 ? it.dozen : it.price);

export function getItems(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

function save(items: CartItem[]) {
  try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  document.dispatchEvent(new CustomEvent('kc:cart', { detail: items }));
}

export function addItem(item: CartItem) {
  const items = getItems();
  const same = items.find((i) => i.id === item.id && i.option === item.option);
  same ? (same.qty += item.qty) : items.push(item);
  save(items);
  window.kcTrack('AddToCart', {
    content_ids: [item.id], content_name: item.name, content_type: 'product',
    value: unit(item) * item.qty, currency: 'PEN', num_items: item.qty,
  });
}

export function setQty(index: number, qty: number) {
  const items = getItems();
  if (!items[index]) return;
  items[index].qty = Math.max(1, qty);
  save(items);
}

export function removeItem(index: number) {
  const items = getItems();
  items.splice(index, 1);
  save(items);
}

export const clearCart = () => save([]);
export const subtotal = (items = getItems()) => items.reduce((s, i) => s + unit(i) * i.qty, 0);
export const count = (items = getItems()) => items.reduce((s, i) => s + i.qty, 0);

export const pixelPayload = (items = getItems()) => ({
  content_ids: items.map((i) => i.id),
  contents: items.map((i) => ({ id: i.id, quantity: i.qty, item_price: unit(i) })),
  content_type: 'product',
  num_items: count(items),
  value: Number(subtotal(items).toFixed(2)),
  currency: 'PEN',
});

export const openDrawer = () => document.dispatchEvent(new CustomEvent('kc:open-cart'));
