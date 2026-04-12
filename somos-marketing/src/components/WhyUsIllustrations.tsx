"use client";

/* ═══════════════════════════════════════════════════════════════════════════
   Ilustraciones SVG para "Por qué optar por nosotros" (WhyUs)
   Paleta: negro (#111) + rojo (#dc2626) + rojo claro (#fee2e2) + blanco
   ═══════════════════════════════════════════════════════════════════════════ */

const SIZE = 140;

/* ── Socio Estratégico (Handshake) ────────────────────────────────────── */
export function PartnerIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={SIZE} height={SIZE} aria-hidden="true">
      {/* Background circle */}
      <circle cx="70" cy="65" r="48" fill="#fee2e2" opacity="0.5" />
      {/* Handshake */}
      <g transform="translate(28, 40)">
        {/* Left hand */}
        <path d="M5 35 Q 0 30, 0 20 Q 0 10, 12 10 L 30 10" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" />
        {/* Right hand */}
        <path d="M78 35 Q 83 30, 83 20 Q 83 10, 72 10 L 55 10" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" />
        {/* Clasp */}
        <path d="M30 10 Q 35 5, 42 10 Q 49 5, 55 10" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Fingers left */}
        <path d="M28 12 L 22 20 Q 20 24, 24 26 L 36 20" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        <path d="M36 20 L 28 28 Q 26 32, 30 34 L 42 26" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        {/* Fingers right */}
        <path d="M55 12 L 62 20 Q 64 24, 60 26 L 48 20" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        <path d="M48 20 L 56 28 Q 58 32, 54 34 L 42 26" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        {/* Arm sleeves */}
        <rect x="-2" y="30" width="14" height="22" rx="3" fill="#111" opacity="0.15" />
        <rect x="72" y="30" width="14" height="22" rx="3" fill="#dc2626" opacity="0.2" />
      </g>
      {/* Trust symbols: stars */}
      <g fill="#dc2626" opacity="0.6">
        <polygon points="42,28 44,34 50,34 45,38 47,44 42,40 37,44 39,38 34,34 40,34" />
      </g>
      <g fill="#dc2626" opacity="0.4">
        <polygon points="100,28 101.5,32 106,32 102.5,35 103.5,39 100,37 96.5,39 97.5,35 94,32 98.5,32" />
      </g>
      {/* Label */}
      <g transform="translate(30, 108)">
        <rect x="0" y="0" width="80" height="20" rx="10" fill="#dc2626" />
        <text x="40" y="14" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui">SOCIO</text>
      </g>
      {/* Connection nodes */}
      <circle cx="25" cy="100" r="3" fill="#111" opacity="0.2" />
      <circle cx="115" cy="100" r="3" fill="#111" opacity="0.2" />
      <path d="M28 100 L 30 108" stroke="#111" strokeWidth="1" opacity="0.2" />
      <path d="M112 100 L 110 108" stroke="#111" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

/* ── Transparencia Radical ────────────────────────────────────────────── */
export function TransparencyIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={SIZE} height={SIZE} aria-hidden="true">
      {/* Shield outline */}
      <path d="M70 12 L110 30 L110 70 Q 110 105, 70 128 Q 30 105, 30 70 L 30 30 Z" fill="#fee2e2" stroke="#111" strokeWidth="2" />
      {/* Inner shield */}
      <path d="M70 24 L100 38 L100 68 Q 100 96, 70 114 Q 40 96, 40 68 L 40 38 Z" fill="white" stroke="#111" strokeWidth="1.5" />
      {/* Eye (transparency = see through) */}
      <g transform="translate(70, 62)">
        <ellipse cx="0" cy="0" rx="22" ry="14" fill="none" stroke="#111" strokeWidth="2" />
        <circle cx="0" cy="0" r="10" fill="#fee2e2" stroke="#111" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="5" fill="#dc2626" />
        <circle cx="-2" cy="-2" r="2" fill="white" />
      </g>
      {/* Eye lashes / rays */}
      <g stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
        <line x1="70" y1="42" x2="70" y2="36" />
        <line x1="55" y1="46" x2="52" y2="40" />
        <line x1="85" y1="46" x2="88" y2="40" />
        <line x1="48" y1="55" x2="43" y2="52" />
        <line x1="92" y1="55" x2="97" y2="52" />
      </g>
      {/* Checkmark at bottom of shield */}
      <g transform="translate(58, 88)">
        <path d="M4 10 L 10 16 L 22 4" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      {/* Light rays from shield */}
      <g stroke="#dc2626" strokeWidth="1" opacity="0.25">
        <line x1="22" y1="25" x2="14" y2="18" />
        <line x1="118" y1="25" x2="126" y2="18" />
        <line x1="14" y1="75" x2="8" y2="80" />
        <line x1="126" y1="75" x2="132" y2="80" />
      </g>
    </svg>
  );
}

/* ── Resultados con Agilidad ──────────────────────────────────────────── */
export function AgilityIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width={SIZE} height={SIZE} aria-hidden="true">
      {/* Rocket */}
      <g transform="translate(50, 15)">
        {/* Body */}
        <path d="M20 0 Q 35 10, 35 40 L 35 65 Q 27.5 72, 20 65 Q 12.5 72, 5 65 L 5 40 Q 5 10, 20 0 Z" fill="white" stroke="#111" strokeWidth="2" />
        {/* Nose cone */}
        <path d="M20 0 Q 28 8, 30 20 L 10 20 Q 12 8, 20 0 Z" fill="#dc2626" />
        {/* Window */}
        <circle cx="20" cy="32" r="7" fill="#fee2e2" stroke="#111" strokeWidth="1.5" />
        <circle cx="20" cy="32" r="4" fill="#dc2626" opacity="0.3" />
        {/* Fins */}
        <path d="M5 50 L -5 65 L 5 60 Z" fill="#dc2626" stroke="#111" strokeWidth="1" />
        <path d="M35 50 L 45 65 L 35 60 Z" fill="#dc2626" stroke="#111" strokeWidth="1" />
        {/* Detail lines */}
        <line x1="10" y1="48" x2="30" y2="48" stroke="#111" strokeWidth="1" opacity="0.3" />
        <line x1="10" y1="55" x2="30" y2="55" stroke="#111" strokeWidth="1" opacity="0.3" />
      </g>
      {/* Exhaust flames */}
      <g transform="translate(62, 84)">
        <path d="M8 0 Q 12 12, 8 22 Q 4 12, 8 0 Z" fill="#dc2626" opacity="0.8" />
        <path d="M2 0 Q 5 8, 2 15 Q -1 8, 2 0 Z" fill="#dc2626" opacity="0.5" />
        <path d="M14 0 Q 17 8, 14 15 Q 11 8, 14 0 Z" fill="#dc2626" opacity="0.5" />
      </g>
      {/* Speed lines */}
      <g stroke="#111" strokeWidth="1.5" strokeLinecap="round" opacity="0.3">
        <line x1="25" y1="90" x2="25" y2="105" />
        <line x1="35" y1="95" x2="35" y2="108" />
        <line x1="100" y1="90" x2="100" y2="105" />
        <line x1="110" y1="92" x2="110" y2="102" />
      </g>
      {/* Growth chart at bottom */}
      <g transform="translate(15, 105)">
        <line x1="0" y1="30" x2="110" y2="30" stroke="#111" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="0" y2="30" stroke="#111" strokeWidth="1.5" />
        {/* Bars */}
        <rect x="10" y="22" width="12" height="8" rx="1" fill="#111" opacity="0.2" />
        <rect x="28" y="16" width="12" height="14" rx="1" fill="#111" opacity="0.3" />
        <rect x="46" y="10" width="12" height="20" rx="1" fill="#dc2626" opacity="0.5" />
        <rect x="64" y="6" width="12" height="24" rx="1" fill="#dc2626" opacity="0.7" />
        <rect x="82" y="0" width="12" height="30" rx="1" fill="#dc2626" />
        {/* Arrow up */}
        <path d="M8 24 L 50 12 L 90 2" stroke="#dc2626" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
      </g>
      {/* Sparkles */}
      <g fill="#dc2626" opacity="0.4">
        <circle cx="30" cy="30" r="2" />
        <circle cx="115" cy="45" r="2" />
        <circle cx="22" cy="55" r="1.5" />
      </g>
    </svg>
  );
}

/* ── Map ───────────────────────────────────────────────────────────────── */
export const WHYUS_ILLUSTRATIONS = [
  PartnerIllustration,
  TransparencyIllustration,
  AgilityIllustration,
] as const;
