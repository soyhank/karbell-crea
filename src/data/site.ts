export const site = {
  name: 'Karbell Crea',
  tagline: 'Sublimación y vinil textil personalizado',
  description:
    'Karbell Crea: personalización con sublimación y vinil textil. Polos, tazas, gorras, tote bags, cojines y pedidos para empresas y eventos. Cuéntanos tu idea y te enviamos una vista previa.',
  email: 'karbellcrea@gmail.com',
  url: 'https://karbell-crea.vercel.app',
};

export const mailto = (subject: string, body = '') =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
