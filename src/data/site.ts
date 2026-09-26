// Datos de ejemplo para la demostración en clase. El número de WhatsApp se cambia desde /admin.
export const site = {
  name: 'Karbell Crea',
  tagline: 'Sublimación y vinil textil personalizado en Lima',
  description:
    'Karbell Crea: polos, tazas, gorras, tote bags, cojines y camisetas deportivas personalizadas con sublimación y vinil textil. Packs de regalo, pedidos por docena y compra fácil por WhatsApp.',
  email: 'karbellcrea@gmail.com',
  whatsapp: '51999999999',
  url: 'https://karbell-crea.vercel.app',
  hours: 'Lunes a sábado, 9:00 a. m. a 7:00 p. m.',
  address: 'Av. Carlos Izaguirre 1245, Los Olivos',
  city: 'Lima, Perú',
  mapQuery: 'Av. Carlos Izaguirre, Los Olivos, Lima',
  instagram: '@karbellcrea',
  founded: 2022,
};

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/tienda', label: 'Tienda' },
  { href: '/packs', label: 'Packs' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/como-comprar', label: 'Cómo comprar' },
  { href: '/opiniones', label: 'Opiniones' },
  { href: '/contacto', label: 'Contacto' },
];

export const waLink = (text: string, phone = site.whatsapp) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
