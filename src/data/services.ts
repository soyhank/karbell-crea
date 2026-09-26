export type Tech = 'Sublimación' | 'Vinil textil';

export const services: {
  id: string;
  title: string;
  text: string;
  tech: Tech[];
  ideas: string[];
}[] = [
  {
    id: 'polo',
    title: 'Polos y prendas',
    text: 'Polos, poleras y casacas con tu diseño, frase, logo o foto. Desde una sola prenda para regalo hasta pedidos por docena.',
    tech: ['Sublimación', 'Vinil textil'],
    ideas: ['Cumpleaños', 'Promociones', 'Parejas y familias'],
  },
  {
    id: 'taza',
    title: 'Tazas y termos',
    text: 'Tazas blancas, mágicas o de color y termos sublimados a todo color, con acabado que resiste el uso diario.',
    tech: ['Sublimación'],
    ideas: ['Día de la Madre', 'Recuerdos', 'Regalo corporativo'],
  },
  {
    id: 'gorra',
    title: 'Gorras',
    text: 'Gorras con tu logo, nombre o frase. Ideales para equipos, marcas y uniformes de trabajo.',
    tech: ['Sublimación', 'Vinil textil'],
    ideas: ['Marcas', 'Eventos deportivos', 'Merch'],
  },
  {
    id: 'tote',
    title: 'Tote bags',
    text: 'Bolsas de tela personalizadas, prácticas y reutilizables. Una forma bonita de llevar tu marca a todas partes.',
    tech: ['Vinil textil', 'Sublimación'],
    ideas: ['Emprendimientos', 'Ferias', 'Souvenirs'],
  },
  {
    id: 'cojin',
    title: 'Cojines y hogar',
    text: 'Cojines, individuales y textiles para el hogar con fotos y diseños a todo color.',
    tech: ['Sublimación'],
    ideas: ['Aniversarios', 'Baby shower', 'Decoración'],
  },
  {
    id: 'uniforme',
    title: 'Uniformes y equipos',
    text: 'Camisetas con nombres y números, uniformes para promociones escolares, talleres y empresas.',
    tech: ['Vinil textil', 'Sublimación'],
    ideas: ['Fulbito y vóley', 'Promociones', 'Empresas'],
  },
];

export const techniques = [
  {
    name: 'Sublimación' as Tech,
    lead: 'Color a toda la superficie, que no se siente al tacto.',
    text: 'La tinta pasa a gas con el calor y se funde con la fibra o el recubrimiento del producto. El diseño queda dentro del material: no se agrieta ni se despega.',
    best: ['Fotos y diseños a todo color', 'Prendas de poliéster en colores claros', 'Tazas, termos, cojines y artículos recubiertos'],
  },
  {
    name: 'Vinil textil' as Tech,
    lead: 'Colores sólidos e intensos sobre cualquier color de tela.',
    text: 'Se corta el diseño en una lámina de vinil y se adhiere a la prenda con plancha térmica. Perfecto para textos, logos, nombres y números con bordes nítidos.',
    best: ['Algodón y telas oscuras', 'Nombres, números y logos', 'Acabados especiales: glitter, metálico, reflectivo'],
  },
];

export const steps = [
  { t: 'Nos cuentas tu idea', d: 'Escríbenos qué producto quieres, cuántas unidades y tu diseño o inspiración (una foto, un logo, una frase).' },
  { t: 'Diseñamos tu vista previa', d: 'Preparamos el arte y te enviamos cómo quedará, para que lo revises y pidas ajustes.' },
  { t: 'Aprobación y producción', d: 'Con tu visto bueno elegimos la técnica ideal y personalizamos cada pieza con cuidado.' },
  { t: 'Lista para lucir', d: 'Revisamos el acabado y coordinamos contigo la entrega de tu pedido.' },
];
