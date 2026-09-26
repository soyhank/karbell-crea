import { products } from './products';

export interface Pack {
  id: string;
  name: string;
  tagline: string;
  price: number;
  img: string;
  badge?: string;
  audience: 'Regalos' | 'Negocios';
  desc: string;
  includes: { id: string; qty: number; unit: number }[];
  extras: string[];
}

// `unit` es el precio que tendría cada producto comprado por separado (unidad o docena).
export const packs: Pack[] = [
  {
    id: 'pack-mama',
    name: 'Pack Día de la Madre',
    tagline: 'Taza + cojín + tote bag con el mismo diseño',
    price: 65,
    img: '/img/pack-mama.webp',
    badge: 'Temporada',
    audience: 'Regalos',
    desc: 'El regalo completo para mamá: una taza, un cojín y una tote bag con su foto o frase favorita, en una caja de regalo con tarjeta.',
    includes: [{ id: 'taza-11oz', qty: 1, unit: 18 }, { id: 'cojin', qty: 1, unit: 38 }, { id: 'tote-vinil', qty: 1, unit: 22 }],
    extras: ['Caja de regalo con lazo', 'Tarjeta con dedicatoria', 'Diseño personalizado incluido'],
  },
  {
    id: 'pack-cumple',
    name: 'Pack Cumpleañero',
    tagline: 'Polo + taza + gorra para el engreído del día',
    price: 64,
    img: '/img/pack-cumple.webp',
    badge: 'Más vendido',
    audience: 'Regalos',
    desc: 'Sorprende con un combo personalizado con nombre, edad o frase divertida. Listo para entregar en 48 horas.',
    includes: [{ id: 'polo-vinil', qty: 1, unit: 30 }, { id: 'taza-11oz', qty: 1, unit: 18 }, { id: 'gorra-drill', qty: 1, unit: 28 }],
    extras: ['Empaque de regalo', 'Diseño con nombre y edad', 'Entrega en 48 h en Lima'],
  },
  {
    id: 'pack-aniversario',
    name: 'Pack Aniversario',
    tagline: '2 polos + 2 tazas + 1 cojín para parejas',
    price: 119,
    img: '/img/pack-aniversario.webp',
    audience: 'Regalos',
    desc: 'Para celebrar juntos: polos a juego, tazas con su foto favorita y un cojín con la fecha especial.',
    includes: [{ id: 'polo-vinil', qty: 2, unit: 30 }, { id: 'taza-11oz', qty: 2, unit: 18 }, { id: 'cojin', qty: 1, unit: 38 }],
    extras: ['Diseños coordinados para pareja', 'Caja de regalo', 'Tarjeta con dedicatoria'],
  },
  {
    id: 'pack-emprendedor',
    name: 'Kit Emprendedor',
    tagline: '12 tote bags + 12 tazas con tu logo',
    price: 349,
    img: '/img/pack-emprendedor.webp',
    badge: 'Ahorra S/ 35',
    audience: 'Negocios',
    desc: 'Lanza tu marca con merch propio: tote bags y tazas con tu logo para vender, regalar a clientes o usar en ferias.',
    includes: [{ id: 'tote-vinil', qty: 12, unit: 18 }, { id: 'taza-11oz', qty: 12, unit: 14 }],
    extras: ['Adaptación de logo incluida', 'Vista previa de cada producto', 'Factura o boleta'],
  },
  {
    id: 'pack-equipo',
    name: 'Pack Equipo Completo',
    tagline: '12 camisetas con nombre y número + gorra del DT',
    price: 399,
    img: '/img/pack-equipo.webp',
    audience: 'Negocios',
    desc: 'Uniforma a todo tu equipo de fulbito, vóley o la promo: 12 camisetas full sublimadas con nombre y número, más la gorra del entrenador de regalo.',
    includes: [{ id: 'camiseta', qty: 12, unit: 34 }, { id: 'gorra-trucker', qty: 1, unit: 25 }],
    extras: ['Diseño del escudo incluido', 'Tallas mixtas niño y adulto', 'Entrega en 5 días hábiles'],
  },
  {
    id: 'pack-corporativo',
    name: 'Pack Corporativo',
    tagline: '20 polos + 20 gorras + 20 termos con tu marca',
    price: 1590,
    img: '/img/pack-corporativo.webp',
    audience: 'Negocios',
    desc: 'Kit de bienvenida o uniforme para tu equipo de trabajo. Ideal para empresas, eventos y activaciones de marca.',
    includes: [{ id: 'polo-vinil', qty: 20, unit: 25 }, { id: 'gorra-drill', qty: 20, unit: 23 }, { id: 'termo', qty: 20, unit: 39 }],
    extras: ['Asesoría de diseño', 'Empaque individual por colaborador', 'Factura electrónica'],
  },
  {
    id: 'pack-promo',
    name: 'Pack Promoción',
    tagline: '25 polos full print + 25 tazas recuerdo',
    price: 990,
    img: '/img/pack-promo.webp',
    badge: 'Ahorra S/ 110',
    audience: 'Negocios',
    desc: 'Para colegios, universidades e institutos: polos full print con el diseño de la promoción y tazas de recuerdo con el nombre de cada alumno.',
    includes: [{ id: 'polo-full', qty: 25, unit: 30 }, { id: 'taza-11oz', qty: 25, unit: 14 }],
    extras: ['Nombre de cada alumno en la taza', 'Diseño de la promo incluido', 'Adelanto del 50 %'],
  },
];

export const regular = (p: Pack) => p.includes.reduce((s, i) => s + i.qty * i.unit, 0);
export const saving = (p: Pack) => regular(p) - p.price;
export const includesText = (p: Pack) =>
  p.includes.map((i) => `${i.qty} × ${products.find((x) => x.id === i.id)?.name ?? i.id}`);
