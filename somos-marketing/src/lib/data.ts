/* ==========================================================================
   DATOS CENTRALIZADOS – Edita aquí los textos, servicios y metodología.
   ========================================================================== */

/* ── Navegación ─────────────────────────────────────────────────────────── */
export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Por qué nosotros", href: "#por-que" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
] as const;

/* ── Hero ───────────────────────────────────────────────────────────────── */
export const HERO = {
  headline: "Potenciamos tu marca con estrategia, estética y conocimiento",
  subheadline:
    "Conectamos empresa, producto y consumidores con nuestro modelo EEC. Alianza win2win, outsourcing inteligente, estrategia 360° con metodología AGILE.",
  cta1: "Ver servicios",
  cta2: "Agendar reunión",
} as const;

/* ── Visión — "Hacia dónde miramos" ─────────────────────────────────────── */
export const VISION_ITEMS = [
  {
    icon: "ShoppingCart",
    title: "Category Management",
    description:
      "Gestión integral en el punto de venta físico y digital para maximizar la experiencia de compra.",
  },
  {
    icon: "Monitor",
    title: "Era Digital",
    description:
      "Innovación y medios digitales como motor de crecimiento y conexión con audiencias.",
  },
  {
    icon: "Palette",
    title: "Diseño que habla",
    description:
      'El diseño como "parlante" de la marca: comunica, diferencia y conecta.',
  },
  {
    icon: "Heart",
    title: "Experiencia de marca",
    description:
      "Creamos experiencias que transforman clientes en fans y embajadores de tu marca.",
  },
  {
    icon: "Target",
    title: "Planificación con KPI",
    description:
      "Estrategia guiada por KPI claros como hoja de ruta hacia resultados medibles.",
  },
] as const;

/* ── Servicios (Panal / Honeycomb) ──────────────────────────────────────── */
export interface Service {
  id: string;
  name: string;
  label: string;
  color: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: "catex",
    name: "SomosCatex",
    label: "Category",
    color: "#dc2626",
    description:
      "Potenciamos la comercialización de tu producto en el punto de venta físico y digital. Estrategias promocionales inbound/outbound con un fuerte componente BTL respaldado por herramientas digitales.",
  },
  {
    id: "image",
    name: "SomosImage",
    label: "Diseño corporativo",
    color: "#b91c1c",
    description:
      "Desarrollo y diseño de imagen corporativa y de producto alineados al negocio. Estrategia de diseño out-of-the-box que diferencia y posiciona tu marca.",
  },
  {
    id: "online",
    name: "SomosOnline",
    label: "Estrategia digital",
    color: "#ef4444",
    description:
      "Estrategias comunicacionales digitales potenciadas por IA y algoritmos. Comunidad en tiempo real y data que alimenta la inteligencia artificial para decisiones ágiles.",
  },
  {
    id: "brand",
    name: "SomosBrand",
    label: "Brand experience",
    color: "#f87171",
    description:
      "Tangibilizamos la personalidad de tu marca: medimos comunicación, identificamos grupo objetivo y construimos fans comprometidos y leales.",
  },
  {
    id: "fidelity",
    name: "SomosFidelity",
    label: "Loyalty programs",
    color: "#991b1b",
    description:
      "Programas de fidelidad a largo plazo que generan beneficios emocionales y convierten clientes en fanáticos y comunicadores de tu marca.",
  },
  {
    id: "intelligence",
    name: "SomosIntelligence",
    label: "Planning",
    color: "#7f1d1d",
    description:
      "Planificación estratégica e investigación de mercado. Análisis de tendencias, visualización de caminos, customización de insights y data para IA.",
  },
];

/* ── Metodología EEC ────────────────────────────────────────────────────── */
export const METHODOLOGY_STEPS = [
  {
    step: 1,
    title: "Brief del cliente",
    description:
      "Recibimos y alineamos los objetivos, desafíos y oportunidades del negocio.",
  },
  {
    step: 2,
    title: "Análisis integral",
    description:
      "Mercado interno/externo, punto de venta, canal, tendencias y análisis 7P.",
  },
  {
    step: 3,
    title: "Propuesta de Valor",
    description:
      "Diseñamos una propuesta diferenciadora basada en Estrategia, Estética y Conocimiento.",
  },
  {
    step: 4,
    title: "Ejecución 360°",
    description:
      "Categories, diseño, canal digital, experiencia de marca y fidelización.",
  },
  {
    step: 5,
    title: "Medición & iteración",
    description:
      "KPI claros, retroalimentación continua y optimización AGILE de cada iniciativa.",
  },
] as const;

/* ── Por qué nosotros ──────────────────────────────────────────────────── */
export const WHY_US = [
  {
    title: "Aliados estratégicos",
    description:
      "No somos proveedores, somos partners. Trabajamos codo a codo con tu equipo como una extensión de tu negocio.",
    icon: "Handshake",
  },
  {
    title: "Confianza y compromiso",
    description:
      "Cada relación se construye sobre confianza, responsabilidad y transparencia total en cada etapa.",
    icon: "Shield",
  },
  {
    title: "Un poco locos",
    description:
      "Nos atrevemos a pensar diferente. Creatividad con propósito, audacia con estrategia.",
    icon: "Zap",
  },
] as const;

/* ── Clientes ────────────────────────────────────────────────────────────── */
export const CLIENT_LOGOS = [
  { id: 1, name: "Nestlé", file: "hd-nestle-black-logo-png-701751694709075ivsyarsumo.png" },
  { id: 2, name: "Arcor", file: "Arcor_logo.svg.png" },
  { id: 3, name: "Costa", file: "Costa_Peru_1999.webp" },
  { id: 4, name: "Energizer", file: "Energizer-logo.png" },
  { id: 5, name: "Super Pollo", file: "Super_Pollo_2010.webp" },
  { id: 6, name: "Tika", file: "Tika.png" },
  { id: 7, name: "Club Amantes del Vino", file: "brand-192x192-ClubAmantesDelVino.png" },
  { id: 8, name: "Frutos del Maipo", file: "frutos-del-maipo.png" },
  { id: 9, name: "Soprole", file: "logo-Soprole.jpg" },
  { id: 10, name: "La Crianza", file: "logo-la-crianza.png" },
  { id: 11, name: "Mchay", file: "mchay.jpeg" },
  { id: 12, name: "Super Cerdo", file: "supercerdo-logo.svg" },
  { id: 13, name: "Ventisquero", file: "ventisquero-logo-clientes.png" },
  { id: 14, name: "Colacao", file: "colacao-logo.jpeg" },
  { id: 15, name: "Mercedes-Benz", file: "mercedes.png" },
  { id: 16, name: "Biotec", file: "biotec-logo.png" },
  { id: 17, name: "Agrosuper", file: "agrosuper-logo.jpg" },
  { id: 18, name: "Agrocommerce", file: "agrocommerce-logo.png" },
  { id: 19, name: "TIM", file: "tim-logo.png" },
  { id: 20, name: "Carozzi", file: "carozzi-logo.png" },
  { id: 21, name: "Precisa Frozen", file: "precisa_frozen.png" },
  { id: 22, name: "Freightliner", file: "freightliner-logo.svg" },
  { id: 23, name: "Twistos", file: "twistos.png" },
  { id: 24, name: "Cristal", file: "cristal-logo.png" },
  { id: 25, name: "Entel", file: "entel-logo.svg" },
  { id: 26, name: "Trendy", file: "trendy-logo.png" },
  { id: 27, name: "Western Star Trucks", file: "western-star-logo.png" },
];

/* ── Contacto ───────────────────────────────────────────────────────────── */
export const CONTACT = {
  headline: "Conversemos",
  subheadline:
    "¿Listo para potenciar tu marca? Escríbenos y diseñemos juntos tu próxima estrategia.",
  // TODO: Reemplazar con datos reales
  email: "contacto@somosmarketing.cl",
  whatsapp: "+56 9 7988 1832",
} as const;

/* ── Footer / Redes ─────────────────────────────────────────────────────── */
// TODO: Reemplazar con links reales de redes sociales
export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/juan-pablo-mena-rozas/" },
  { label: "Instagram", href: "https://www.instagram.com/somosmarketing?igsh=OHM4dWw2dzdzc2p0" },
  { label: "Email", href: "mailto:contacto@somosmarketing.cl" },
] as const;
