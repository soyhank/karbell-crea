export type Category = 'Polos' | 'Tazas y termos' | 'Gorras' | 'Bolsas' | 'Hogar' | 'Equipos';

export interface Product {
  id: string;
  name: string;
  category: Category;
  tech: 'Sublimación' | 'Vinil textil';
  price: number;
  /** Precio unitario desde 12 unidades */
  dozen?: number;
  img: string;
  badge?: string;
  desc: string;
  specs: string[];
  options?: { label: string; values: string[] };
}

export const categories: Category[] = ['Polos', 'Tazas y termos', 'Gorras', 'Bolsas', 'Hogar', 'Equipos'];

export const products: Product[] = [
  {
    id: 'taza-11oz',
    name: 'Taza blanca personalizada 11 oz',
    category: 'Tazas y termos',
    tech: 'Sublimación',
    price: 18,
    dozen: 14,
    img: '/img/p-taza-mama.webp',
    badge: 'Más vendido',
    desc: 'Taza de cerámica AAA con tu foto, frase o diseño a todo color. El regalo que nunca falla.',
    specs: ['Cerámica blanca AAA de 11 oz', 'Impresión 360° a todo color', 'Apta para microondas', 'Incluye caja individual'],
  },
  {
    id: 'polo-vinil',
    name: 'Polo algodón con vinil textil',
    category: 'Polos',
    tech: 'Vinil textil',
    price: 30,
    dozen: 25,
    img: '/img/p-polo-vinil.webp',
    desc: 'Polo 100 % algodón peinado 30/1 con frase, nombre o logo en vinil de alta durabilidad.',
    specs: ['Algodón peinado 30/1', 'Vinil textil PU (hasta 2 colores)', 'Resiste más de 50 lavadas', 'Tallas S a XXL'],
    options: { label: 'Talla', values: ['S', 'M', 'L', 'XL', 'XXL'] },
  },
  {
    id: 'polo-full',
    name: 'Polo full print sublimado',
    category: 'Polos',
    tech: 'Sublimación',
    price: 35,
    dozen: 30,
    img: '/img/p-polo-full.webp',
    badge: 'Nuevo',
    desc: 'Diseño a toda la prenda, sin límites de colores. Ideal para promociones, eventos y marcas.',
    specs: ['Tela poliéster tipo algodón (drifit)', 'Impresión de costura a costura', 'No se agrieta ni se despega', 'Tallas S a XXL'],
    options: { label: 'Talla', values: ['S', 'M', 'L', 'XL', 'XXL'] },
  },
  {
    id: 'polo-negro',
    name: 'Polo negro estampado a color',
    category: 'Polos',
    tech: 'Vinil textil',
    price: 38,
    dozen: 32,
    img: '/img/p-polo-negro.webp',
    desc: 'Colores intensos sobre tela oscura con vinil imprimible. Perfecto para bandas, podcasts y marcas.',
    specs: ['Algodón peinado 30/1 negro', 'Vinil imprimible full color', 'Acabado mate', 'Tallas S a XXL'],
    options: { label: 'Talla', values: ['S', 'M', 'L', 'XL', 'XXL'] },
  },
  {
    id: 'polera',
    name: 'Polera con capucha personalizada',
    category: 'Polos',
    tech: 'Vinil textil',
    price: 65,
    dozen: 58,
    img: '/img/p-polera.webp',
    desc: 'Polera franela con capucha y bolsillo canguro, con diseño en espalda y pecho.',
    specs: ['Franela perchada 280 g', 'Diseño en pecho y espalda', 'Varios colores de tela', 'Tallas S a XL'],
    options: { label: 'Talla', values: ['S', 'M', 'L', 'XL'] },
  },
  {
    id: 'termo',
    name: 'Termo de acero 500 ml',
    category: 'Tazas y termos',
    tech: 'Sublimación',
    price: 45,
    dozen: 39,
    img: '/img/p-termo.webp',
    desc: 'Mantiene tus bebidas frías o calientes por horas, con tu diseño o logo sublimado.',
    specs: ['Acero inoxidable doble pared', 'Capacidad 500 ml', 'Tapa hermética', 'Diseño envolvente'],
  },
  {
    id: 'gorra-drill',
    name: 'Gorra drill con vinil',
    category: 'Gorras',
    tech: 'Vinil textil',
    price: 28,
    dozen: 23,
    img: '/img/p-gorra.webp',
    desc: 'Gorra de drill con visera curva y tu logo o frase en vinil textil. Ajuste con hebilla metálica.',
    specs: ['Drill 100 % algodón', 'Vinil textil 1 o 2 colores', 'Talla única ajustable', 'Colores: blanco, negro, azul'],
    options: { label: 'Color', values: ['Blanco', 'Negro', 'Azul marino'] },
  },
  {
    id: 'gorra-trucker',
    name: 'Gorra trucker personalizada',
    category: 'Gorras',
    tech: 'Sublimación',
    price: 25,
    dozen: 20,
    img: '/img/p-trucker.webp',
    desc: 'La clásica gorra con malla, con frente sublimado a todo color. Ideal para merch y eventos.',
    specs: ['Frente de espuma sublimable', 'Malla transpirable', 'Broche ajustable', 'Varios colores'],
    options: { label: 'Color', values: ['Azul', 'Negro', 'Rojo', 'Blanco'] },
  },
  {
    id: 'tote-vinil',
    name: 'Tote bag de lona con frase',
    category: 'Bolsas',
    tech: 'Vinil textil',
    price: 22,
    dozen: 18,
    img: '/img/p-tote.webp',
    desc: 'Bolsa de lona natural resistente con tu frase o logo. Reutilizable y lista para el día a día.',
    specs: ['Lona cruda 38 × 42 cm', 'Asas largas reforzadas', 'Vinil textil 1 o 2 colores', 'Soporta hasta 8 kg'],
  },
  {
    id: 'tote-full',
    name: 'Tote bag diseño de autor',
    category: 'Bolsas',
    tech: 'Vinil textil',
    price: 28,
    dozen: 23,
    img: '/img/p-tote-look.webp',
    desc: 'Tote bag con diseño tipográfico elaborado. Perfecta para emprendimientos, ferias y souvenirs.',
    specs: ['Lona natural 38 × 42 cm', 'Diseño a medida incluido', 'Asas reforzadas', 'Empaque para regalo opcional'],
  },
  {
    id: 'cojin',
    name: 'Cojín personalizado 40 × 40',
    category: 'Hogar',
    tech: 'Sublimación',
    price: 38,
    dozen: 32,
    img: '/img/p-cojin.webp',
    badge: 'Ideal para regalo',
    desc: 'Cojín con relleno siliconado y funda sublimada con tu foto o diseño. Funda removible con cierre.',
    specs: ['Funda de microfibra suave', 'Relleno siliconado incluido', 'Cierre invisible', 'Medida 40 × 40 cm'],
  },
  {
    id: 'camiseta',
    name: 'Camiseta deportiva con nombre y número',
    category: 'Equipos',
    tech: 'Sublimación',
    price: 40,
    dozen: 34,
    img: '/img/p-camisetas.webp',
    desc: 'Camisetas full sublimadas para tu equipo de fulbito, vóley o promoción, con nombre y número de cada jugador.',
    specs: ['Tela deportiva dry fit', 'Diseño completo del uniforme', 'Nombre y número incluidos', 'Tallas niño y adulto'],
    options: { label: 'Talla', values: ['6', '8', '10', '12', '14', 'S', 'M', 'L', 'XL'] },
  },
];

export const soles = (n: number) => `S/ ${n.toFixed(2)}`;
