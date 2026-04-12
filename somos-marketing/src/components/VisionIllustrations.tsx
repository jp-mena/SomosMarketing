"use client";

/* ═══════════════════════════════════════════════════════════════════════════
   Ilustraciones SVG para "Hacia dónde miramos" (Visión)
   Paleta: negro (#111) + rojo (#dc2626) + rojo claro (#fee2e2) + blanco
   ═══════════════════════════════════════════════════════════════════════════ */

const SIZE = 140;

/* ── Category Management ──────────────────────────────────────────────── */
export function CategoryIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={SIZE} height={SIZE} aria-hidden="true">
      {/* Store / shelf */}
      <rect x="20" y="30" width="100" height="85" rx="6" fill="#fee2e2" stroke="#111" strokeWidth="2" />
      {/* Awning */}
      <path d="M16 30 L124 30 L120 18 L20 18 Z" fill="#dc2626" stroke="#111" strokeWidth="2" />
      <path d="M25 30 Q 35 22, 45 30" fill="#dc2626" stroke="#111" strokeWidth="1.5" />
      <path d="M45 30 Q 55 22, 65 30" fill="white" stroke="#111" strokeWidth="1.5" />
      <path d="M65 30 Q 75 22, 85 30" fill="#dc2626" stroke="#111" strokeWidth="1.5" />
      <path d="M85 30 Q 95 22, 105 30" fill="white" stroke="#111" strokeWidth="1.5" />
      <path d="M105 30 Q 115 22, 120 30" fill="#dc2626" stroke="#111" strokeWidth="1.5" />
      {/* Shelves */}
      <line x1="28" y1="58" x2="112" y2="58" stroke="#111" strokeWidth="1.5" />
      <line x1="28" y1="82" x2="112" y2="82" stroke="#111" strokeWidth="1.5" />
      {/* Products on shelves */}
      <rect x="34" y="42" width="12" height="16" rx="2" fill="#dc2626" />
      <rect x="50" y="46" width="10" height="12" rx="2" fill="#111" opacity="0.7" />
      <rect x="64" y="44" width="12" height="14" rx="2" fill="#dc2626" opacity="0.6" />
      <rect x="80" y="42" width="14" height="16" rx="2" fill="#111" opacity="0.5" />
      <rect x="98" y="46" width="10" height="12" rx="2" fill="#dc2626" opacity="0.8" />
      {/* Row 2 */}
      <rect x="34" y="64" width="14" height="18" rx="2" fill="#111" opacity="0.6" />
      <rect x="52" y="68" width="10" height="14" rx="2" fill="#dc2626" opacity="0.7" />
      <rect x="66" y="66" width="12" height="16" rx="2" fill="#dc2626" />
      <rect x="82" y="64" width="10" height="18" rx="2" fill="#111" opacity="0.5" />
      <rect x="96" y="68" width="12" height="14" rx="2" fill="#dc2626" opacity="0.6" />
      {/* Shopping cart */}
      <g transform="translate(50, 90)">
        <path d="M0 0 L6 0 L14 18 L38 18 L42 6 L12 6" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="24" r="3" fill="#dc2626" stroke="#111" strokeWidth="1.5" />
        <circle cx="34" cy="24" r="3" fill="#dc2626" stroke="#111" strokeWidth="1.5" />
      </g>
      {/* Price tag */}
      <g transform="translate(105, 88)">
        <circle cx="10" cy="8" r="10" fill="#dc2626" />
        <text x="10" y="11" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui">%</text>
      </g>
    </svg>
  );
}

/* ── Era Digital ──────────────────────────────────────────────────────── */
export function DigitalIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={SIZE} height={SIZE} aria-hidden="true">
      {/* Monitor */}
      <rect x="20" y="18" width="100" height="70" rx="6" fill="white" stroke="#111" strokeWidth="2" />
      <rect x="26" y="24" width="88" height="52" rx="2" fill="#fee2e2" />
      {/* Monitor stand */}
      <rect x="55" y="88" width="30" height="6" rx="1" fill="#111" />
      <rect x="45" y="94" width="50" height="4" rx="2" fill="#111" opacity="0.6" />
      {/* Screen content - code/data */}
      <rect x="32" y="30" width="30" height="3" rx="1.5" fill="#dc2626" opacity="0.6" />
      <rect x="32" y="37" width="42" height="3" rx="1.5" fill="#111" opacity="0.4" />
      <rect x="32" y="44" width="25" height="3" rx="1.5" fill="#dc2626" opacity="0.4" />
      <rect x="32" y="51" width="38" height="3" rx="1.5" fill="#111" opacity="0.3" />
      {/* Binary / data particles */}
      <text x="78" y="36" fill="#dc2626" fontSize="6" fontFamily="monospace" opacity="0.5">01</text>
      <text x="90" y="42" fill="#111" fontSize="6" fontFamily="monospace" opacity="0.3">10</text>
      <text x="82" y="50" fill="#dc2626" fontSize="6" fontFamily="monospace" opacity="0.4">11</text>
      <text x="95" y="55" fill="#111" fontSize="6" fontFamily="monospace" opacity="0.3">01</text>
      {/* Cursor */}
      <polygon points="80,58 80,70 86,66 90,74 93,72 89,64 95,64" fill="#dc2626" stroke="#111" strokeWidth="1" />
      {/* Wifi / signal */}
      <g transform="translate(60, 105)">
        <path d="M10 12 Q 10 2, 0 2" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 12 Q 15 -3, -5 -3" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M20 12 Q 20 -8, -10 -8" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <circle cx="10" cy="14" r="2.5" fill="#dc2626" />
      </g>
      {/* Cloud */}
      <g transform="translate(88, 105)">
        <path d="M8 18 Q 0 18 0 12 Q 0 6 6 6 Q 6 0 14 0 Q 22 0 22 6 Q 28 6 28 12 Q 28 18 20 18 Z" fill="white" stroke="#111" strokeWidth="1.5" />
        <path d="M10 10 L18 10" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 14 L16 14" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Decorative */}
      <circle cx="15" cy="110" r="2" fill="#dc2626" opacity="0.25" />
    </svg>
  );
}

/* ── Diseño que habla ─────────────────────────────────────────────────── */
export function DesignIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={SIZE} height={SIZE} aria-hidden="true">
      {/* Canvas / artboard */}
      <rect x="25" y="20" width="90" height="100" rx="4" fill="white" stroke="#111" strokeWidth="2" />
      {/* Palette splash */}
      <circle cx="55" cy="55" r="22" fill="#fee2e2" />
      <circle cx="48" cy="48" r="8" fill="#dc2626" opacity="0.7" />
      <circle cx="65" cy="50" r="6" fill="#111" opacity="0.5" />
      <circle cx="52" cy="65" r="5" fill="#dc2626" opacity="0.4" />
      {/* Pen tool */}
      <g transform="translate(75, 35) rotate(15)">
        <rect x="0" y="0" width="8" height="45" rx="2" fill="#111" />
        <rect x="0" y="0" width="8" height="12" rx="2" fill="#dc2626" />
        <polygon points="0,45 8,45 4,55" fill="#111" />
        <rect x="2" y="12" width="4" height="3" fill="white" opacity="0.3" />
      </g>
      {/* Typography A */}
      <text x="42" y="105" fill="#111" fontSize="28" fontWeight="800" fontFamily="system-ui">A</text>
      <text x="62" y="105" fill="#dc2626" fontSize="20" fontWeight="700" fontFamily="system-ui">a</text>
      {/* Color dots / palette */}
      <circle cx="85" cy="95" r="6" fill="#dc2626" stroke="#111" strokeWidth="1.5" />
      <circle cx="99" cy="95" r="6" fill="#111" stroke="#111" strokeWidth="1.5" />
      <circle cx="92" cy="107" r="6" fill="#fee2e2" stroke="#111" strokeWidth="1.5" />
      {/* Speech bubble - "habla" */}
      <g transform="translate(88, 18)">
        <path d="M0 0 Q 0 -12 15 -12 Q 30 -12 30 0 Q 30 12 15 12 L 8 12 L 4 18 L 6 12 Q 0 12 0 0 Z" fill="#dc2626" />
        <text x="15" y="4" textAnchor="middle" fill="white" fontSize="7" fontWeight="600" fontFamily="system-ui">Abc</text>
      </g>
      {/* Ruler marks on left */}
      <line x1="25" y1="35" x2="30" y2="35" stroke="#111" strokeWidth="0.8" opacity="0.3" />
      <line x1="25" y1="50" x2="30" y2="50" stroke="#111" strokeWidth="0.8" opacity="0.3" />
      <line x1="25" y1="65" x2="30" y2="65" stroke="#111" strokeWidth="0.8" opacity="0.3" />
      <line x1="25" y1="80" x2="30" y2="80" stroke="#111" strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}

/* ── Experiencia de marca ─────────────────────────────────────────────── */
export function ExperienceIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={SIZE} height={SIZE} aria-hidden="true">
      {/* Heart / love symbol */}
      <g transform="translate(70, 55)">
        <path d="M0 15 C -5 0, -25 -5, -25 -18 C -25 -32, -10 -35, 0 -22 C 10 -35, 25 -32, 25 -18 C 25 -5, 5 0, 0 15 Z" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <path d="M0 8 C -3 0, -15 -3, -15 -12 C -15 -20, -6 -22, 0 -14 C 6 -22, 15 -20, 15 -12 C 15 -3, 3 0, 0 8 Z" fill="#dc2626" opacity="0.5" />
      </g>
      {/* People / fans around */}
      {/* Person left */}
      <g transform="translate(22, 70)">
        <circle cx="10" cy="5" r="7" fill="white" stroke="#111" strokeWidth="1.5" />
        <path d="M2 22 Q 2 12 10 12 Q 18 12 18 22" fill="#111" stroke="#111" strokeWidth="1.5" />
        {/* Raised arm */}
        <line x1="4" y1="16" x2="-2" y2="6" stroke="#111" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* Person right */}
      <g transform="translate(98, 70)">
        <circle cx="10" cy="5" r="7" fill="white" stroke="#111" strokeWidth="1.5" />
        <path d="M2 22 Q 2 12 10 12 Q 18 12 18 22" fill="#dc2626" stroke="#111" strokeWidth="1.5" />
        <line x1="16" y1="16" x2="22" y2="6" stroke="#111" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* Person center bottom */}
      <g transform="translate(58, 85)">
        <circle cx="12" cy="5" r="8" fill="white" stroke="#111" strokeWidth="1.5" />
        <path d="M2 26 Q 2 12 12 12 Q 22 12 22 26" fill="#dc2626" opacity="0.6" stroke="#111" strokeWidth="1.5" />
      </g>
      {/* Stars / sparkles */}
      <g stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round">
        <line x1="30" y1="28" x2="30" y2="20" />
        <line x1="26" y1="24" x2="34" y2="24" />
      </g>
      <g stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
        <line x1="108" y1="30" x2="108" y2="24" />
        <line x1="105" y1="27" x2="111" y2="27" />
      </g>
      <g stroke="#111" strokeWidth="1.5" strokeLinecap="round" opacity="0.4">
        <line x1="55" y1="20" x2="55" y2="15" />
        <line x1="52.5" y1="17.5" x2="57.5" y2="17.5" />
      </g>
      {/* Connection lines (community) */}
      <path d="M38 80 Q 55 70, 70 55" stroke="#dc2626" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" fill="none" />
      <path d="M102 80 Q 85 70, 70 55" stroke="#dc2626" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" fill="none" />
      {/* Medal / badge */}
      <g transform="translate(60, 120)">
        <line x1="10" y1="0" x2="5" y2="-8" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="10" y1="0" x2="15" y2="-8" stroke="#dc2626" strokeWidth="1.5" />
        <circle cx="10" cy="6" r="8" fill="#dc2626" stroke="#111" strokeWidth="1.5" />
        <text x="10" y="10" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui">★</text>
      </g>
    </svg>
  );
}

/* ── Planificación con KPI ────────────────────────────────────────────── */
export function KpiIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={SIZE} height={SIZE} aria-hidden="true">
      {/* Roadmap / path */}
      <path d="M20 120 Q 30 90, 50 85 Q 70 80, 75 60 Q 80 40, 100 35 Q 120 30, 125 18" fill="none" stroke="#fee2e2" strokeWidth="16" strokeLinecap="round" />
      <path d="M20 120 Q 30 90, 50 85 Q 70 80, 75 60 Q 80 40, 100 35 Q 120 30, 125 18" fill="none" stroke="#111" strokeWidth="2" strokeDasharray="8 4" strokeLinecap="round" />
      {/* Milestone nodes */}
      <circle cx="20" cy="120" r="8" fill="white" stroke="#111" strokeWidth="2" />
      <text x="20" y="124" textAnchor="middle" fill="#111" fontSize="8" fontWeight="700" fontFamily="system-ui">1</text>
      <circle cx="50" cy="85" r="8" fill="white" stroke="#dc2626" strokeWidth="2" />
      <text x="50" y="89" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="700" fontFamily="system-ui">2</text>
      <circle cx="75" cy="60" r="8" fill="white" stroke="#111" strokeWidth="2" />
      <text x="75" y="64" textAnchor="middle" fill="#111" fontSize="8" fontWeight="700" fontFamily="system-ui">3</text>
      <circle cx="100" cy="35" r="8" fill="white" stroke="#dc2626" strokeWidth="2" />
      <text x="100" y="39" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="700" fontFamily="system-ui">4</text>
      {/* Flag at top */}
      <g transform="translate(120, 8)">
        <line x1="5" y1="0" x2="5" y2="20" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 0 L22 5 L5 10 Z" fill="#dc2626" stroke="#111" strokeWidth="1" />
      </g>
      {/* KPI badge */}
      <g transform="translate(28, 55)">
        <rect x="0" y="0" width="32" height="18" rx="4" fill="#dc2626" />
        <text x="16" y="13" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui">KPI</text>
      </g>
      {/* Target / bullseye */}
      <g transform="translate(98, 90)">
        <circle cx="14" cy="14" r="14" fill="white" stroke="#111" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="9" fill="none" stroke="#dc2626" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" fill="#dc2626" />
      </g>
      {/* Progress bar */}
      <g transform="translate(20, 130)">
        <rect x="0" y="0" width="100" height="6" rx="3" fill="#fee2e2" stroke="#111" strokeWidth="1" />
        <rect x="0" y="0" width="72" height="6" rx="3" fill="#dc2626" />
        <text x="104" y="6" fill="#111" fontSize="7" fontWeight="600" fontFamily="system-ui">72%</text>
      </g>
      {/* Decorative */}
      <circle cx="12" cy="40" r="2" fill="#dc2626" opacity="0.25" />
    </svg>
  );
}

/* ── Map ───────────────────────────────────────────────────────────────── */
export const VISION_ILLUSTRATIONS = [
  CategoryIllustration,
  DigitalIllustration,
  DesignIllustration,
  ExperienceIllustration,
  KpiIllustration,
] as const;
