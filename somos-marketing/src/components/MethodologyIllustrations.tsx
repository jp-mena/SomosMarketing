"use client";

/* ═══════════════════════════════════════════════════════════════════════════
   Ilustraciones SVG personalizadas para cada paso de la metodología.
   Paleta: negro (#111) + rojo (#dc2626) + rojo claro (#fee2e2) + blanco
   ═══════════════════════════════════════════════════════════════════════════ */

const SIZE = 160;

/* ── Paso 1: Brief del Cliente ─────────────────────────────────────────── */
export function BriefIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={SIZE}
      height={SIZE}
      aria-hidden="true"
    >
      {/* Clipboard body */}
      <rect x="35" y="28" width="70" height="100" rx="8" fill="#fee2e2" stroke="#111" strokeWidth="2" />
      {/* Clipboard clip */}
      <rect x="55" y="20" width="30" height="16" rx="4" fill="#dc2626" stroke="#111" strokeWidth="2" />
      <circle cx="70" cy="28" r="3" fill="#111" />
      {/* Lines on clipboard */}
      <rect x="50" y="50" width="40" height="3" rx="1.5" fill="#111" opacity="0.7" />
      <rect x="50" y="60" width="35" height="3" rx="1.5" fill="#111" opacity="0.5" />
      <rect x="50" y="70" width="40" height="3" rx="1.5" fill="#111" opacity="0.7" />
      <rect x="50" y="80" width="28" height="3" rx="1.5" fill="#111" opacity="0.5" />
      {/* Check mark */}
      <circle cx="100" cy="100" r="18" fill="#dc2626" />
      <path d="M92 100 L98 106 L110 94" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Decorative dots */}
      <circle cx="28" cy="45" r="3" fill="#dc2626" opacity="0.3" />
      <circle cx="22" cy="60" r="2" fill="#dc2626" opacity="0.2" />
      <circle cx="118" cy="40" r="2.5" fill="#dc2626" opacity="0.25" />
      {/* Pen */}
      <g transform="translate(112, 55) rotate(30)">
        <rect x="0" y="0" width="6" height="35" rx="2" fill="#111" />
        <rect x="0" y="0" width="6" height="8" rx="2" fill="#dc2626" />
        <polygon points="0,35 6,35 3,42" fill="#111" />
      </g>
    </svg>
  );
}

/* ── Paso 2: Análisis Integral ─────────────────────────────────────────── */
export function AnalysisIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={SIZE}
      height={SIZE}
      aria-hidden="true"
    >
      {/* Background chart area */}
      <rect x="25" y="30" width="95" height="90" rx="8" fill="#fee2e2" stroke="#111" strokeWidth="2" />
      {/* Grid lines */}
      <line x1="40" y1="50" x2="110" y2="50" stroke="#111" strokeWidth="0.5" opacity="0.15" />
      <line x1="40" y1="70" x2="110" y2="70" stroke="#111" strokeWidth="0.5" opacity="0.15" />
      <line x1="40" y1="90" x2="110" y2="90" stroke="#111" strokeWidth="0.5" opacity="0.15" />
      {/* Bar chart */}
      <rect x="42" y="72" width="12" height="38" rx="2" fill="#dc2626" opacity="0.6" />
      <rect x="58" y="55" width="12" height="55" rx="2" fill="#dc2626" opacity="0.8" />
      <rect x="74" y="62" width="12" height="48" rx="2" fill="#111" opacity="0.7" />
      <rect x="90" y="45" width="12" height="65" rx="2" fill="#dc2626" />
      {/* Trend line */}
      <path d="M48 70 L64 52 L80 58 L96 42" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="48" cy="70" r="3" fill="#111" />
      <circle cx="64" cy="52" r="3" fill="#111" />
      <circle cx="80" cy="58" r="3" fill="#111" />
      <circle cx="96" cy="42" r="3.5" fill="#dc2626" stroke="#111" strokeWidth="1.5" />
      {/* Magnifying glass */}
      <circle cx="128" cy="42" r="16" fill="white" stroke="#111" strokeWidth="2.5" />
      <circle cx="128" cy="42" r="10" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="140" y1="54" x2="150" y2="64" stroke="#111" strokeWidth="3" strokeLinecap="round" />
      {/* Small decorative elements */}
      <circle cx="20" cy="80" r="2" fill="#dc2626" opacity="0.3" />
      <circle cx="135" cy="95" r="3" fill="#dc2626" opacity="0.2" />
      {/* Arrow up */}
      <g transform="translate(106, 34)">
        <path d="M0 8 L4 0 L8 8" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="4" y1="0" x2="4" y2="14" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/* ── Paso 3: Propuesta de Valor ────────────────────────────────────────── */
export function ProposalIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={SIZE}
      height={SIZE}
      aria-hidden="true"
    >
      {/* Diamond / gem shape */}
      <g transform="translate(80, 75)">
        {/* Outer glow */}
        <polygon points="0,-45 40,-10 25,30 -25,30 -40,-10" fill="#fee2e2" stroke="none" />
        {/* Main diamond */}
        <polygon points="0,-40 35,-10 22,25 -22,25 -35,-10" fill="white" stroke="#111" strokeWidth="2" />
        {/* Top facets */}
        <polygon points="0,-40 -12,-10 12,-10" fill="#dc2626" opacity="0.7" stroke="#111" strokeWidth="1" />
        <polygon points="-35,-10 -12,-10 0,-40" fill="#dc2626" opacity="0.4" stroke="#111" strokeWidth="1" />
        <polygon points="35,-10 12,-10 0,-40" fill="#dc2626" opacity="0.5" stroke="#111" strokeWidth="1" />
        {/* Bottom facets */}
        <line x1="-12" y1="-10" x2="-8" y2="25" stroke="#111" strokeWidth="1" opacity="0.4" />
        <line x1="12" y1="-10" x2="8" y2="25" stroke="#111" strokeWidth="1" opacity="0.4" />
        <line x1="0" y1="-10" x2="0" y2="25" stroke="#111" strokeWidth="1" opacity="0.3" />
        <line x1="-35" y1="-10" x2="35" y2="-10" stroke="#111" strokeWidth="1" opacity="0.5" />
      </g>
      {/* Sparkles */}
      <g stroke="#dc2626" strokeWidth="2" strokeLinecap="round">
        <line x1="30" y1="30" x2="30" y2="22" />
        <line x1="26" y1="26" x2="34" y2="26" />
      </g>
      <g stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round">
        <line x1="125" y1="40" x2="125" y2="34" />
        <line x1="122" y1="37" x2="128" y2="37" />
      </g>
      <g stroke="#111" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
        <line x1="42" y1="55" x2="42" y2="50" />
        <line x1="39.5" y1="52.5" x2="44.5" y2="52.5" />
      </g>
      {/* Rays from top */}
      <line x1="80" y1="20" x2="80" y2="10" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="65" y1="24" x2="60" y2="16" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="95" y1="24" x2="100" y2="16" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      {/* Small circles */}
      <circle cx="135" cy="55" r="2" fill="#dc2626" opacity="0.3" />
      <circle cx="25" cy="80" r="2.5" fill="#dc2626" opacity="0.25" />
      {/* Label ribbon */}
      <g transform="translate(55, 115)">
        <rect x="0" y="0" width="50" height="18" rx="4" fill="#dc2626" />
        <text x="25" y="13" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="system-ui">VALOR</text>
      </g>
    </svg>
  );
}

/* ── Paso 4: Ejecución 360° ────────────────────────────────────────────── */
export function ExecutionIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={SIZE}
      height={SIZE}
      aria-hidden="true"
    >
      {/* Central circle / orbit */}
      <circle cx="80" cy="80" r="45" fill="none" stroke="#fee2e2" strokeWidth="20" />
      <circle cx="80" cy="80" r="45" fill="none" stroke="#111" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />
      {/* Circular arrow - 360° */}
      <path
        d="M 80 35 A 45 45 0 1 1 45 55"
        fill="none"
        stroke="#dc2626"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Arrow head */}
      <polygon points="40,48 46,56 52,50" fill="#dc2626" />
      {/* Center hub */}
      <circle cx="80" cy="80" r="18" fill="white" stroke="#111" strokeWidth="2" />
      <circle cx="80" cy="80" r="8" fill="#dc2626" />
      <circle cx="80" cy="80" r="3" fill="white" />
      {/* Orbiting nodes */}
      {/* Top */}
      <circle cx="80" cy="35" r="10" fill="#dc2626" stroke="#111" strokeWidth="2" />
      <rect x="76" y="31" width="8" height="8" rx="1" fill="white" />
      {/* Right */}
      <circle cx="122" cy="90" r="10" fill="white" stroke="#111" strokeWidth="2" />
      <path d="M118 87 L126 87 L126 93 L122 96 L118 93Z" fill="#dc2626" />
      {/* Bottom */}
      <circle cx="70" cy="123" r="10" fill="#111" stroke="#111" strokeWidth="2" />
      <circle cx="70" cy="123" r="4" fill="#dc2626" />
      {/* Left */}
      <circle cx="38" cy="72" r="10" fill="white" stroke="#111" strokeWidth="2" />
      <path d="M34 72 L38 66 L42 72 L38 78Z" fill="#dc2626" />
      {/* Connection lines */}
      <line x1="80" y1="45" x2="80" y2="62" stroke="#111" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
      <line x1="112" y1="87" x2="98" y2="83" stroke="#111" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
      <line x1="72" y1="113" x2="77" y2="98" stroke="#111" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
      <line x1="48" y1="74" x2="62" y2="78" stroke="#111" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
      {/* 360° label */}
      <text x="80" y="148" textAnchor="middle" fill="#111" fontSize="12" fontWeight="700" fontFamily="system-ui">360°</text>
      {/* Decorative */}
      <circle cx="130" cy="40" r="2" fill="#dc2626" opacity="0.3" />
      <circle cx="25" cy="110" r="2.5" fill="#dc2626" opacity="0.2" />
    </svg>
  );
}

/* ── Paso 5: Medición & Iteración ──────────────────────────────────────── */
export function MeasureIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={SIZE}
      height={SIZE}
      aria-hidden="true"
    >
      {/* Dashboard panel */}
      <rect x="20" y="25" width="120" height="85" rx="10" fill="white" stroke="#111" strokeWidth="2" />
      <rect x="20" y="25" width="120" height="22" rx="10" fill="#111" />
      <rect x="20" y="40" width="120" height="7" fill="#111" />
      {/* Window dots */}
      <circle cx="33" cy="36" r="3" fill="#dc2626" />
      <circle cx="43" cy="36" r="3" fill="#fee2e2" />
      <circle cx="53" cy="36" r="3" fill="#fee2e2" />
      {/* Mini chart 1 - line */}
      <rect x="30" y="55" width="48" height="42" rx="4" fill="#fee2e2" stroke="#111" strokeWidth="1" />
      <path d="M36 85 L46 75 L56 78 L66 62 L72 65" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M36 85 L46 75 L56 78 L66 62 L72 65 L72 90 L36 90Z" fill="#dc2626" opacity="0.1" />
      {/* Mini chart 2 - gauge */}
      <rect x="84" y="55" width="48" height="42" rx="4" fill="#fee2e2" stroke="#111" strokeWidth="1" />
      {/* Gauge arc */}
      <path d="M96 88 A 16 16 0 0 1 124 88" fill="none" stroke="#e5e5e5" strokeWidth="4" strokeLinecap="round" />
      <path d="M96 88 A 16 16 0 0 1 120 76" fill="none" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
      {/* Gauge needle */}
      <line x1="110" y1="88" x2="118" y2="78" stroke="#111" strokeWidth="2" strokeLinecap="round" />
      <circle cx="110" cy="88" r="3" fill="#111" />
      {/* KPI text placeholder */}
      <text x="110" y="68" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="700" fontFamily="system-ui">87%</text>
      {/* Iteration loop arrow below */}
      <g transform="translate(60, 118)">
        <path d="M 0 12 A 20 12 0 1 1 35 8" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
        <polygon points="33,2 40,9 32,12" fill="#dc2626" />
        <text x="18" y="17" textAnchor="middle" fill="#111" fontSize="8" fontWeight="600" fontFamily="system-ui">AGILE</text>
      </g>
      {/* Up arrow with data */}
      <g transform="translate(14, 115)">
        <path d="M8 20 L8 5 L3 10 M8 5 L13 10" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      {/* Decorative */}
      <circle cx="145" cy="120" r="2.5" fill="#dc2626" opacity="0.3" />
      <circle cx="12" cy="50" r="2" fill="#dc2626" opacity="0.2" />
    </svg>
  );
}

/* ── Map de ilustraciones ──────────────────────────────────────────────── */
export const METHODOLOGY_ILLUSTRATIONS = [
  BriefIllustration,
  AnalysisIllustration,
  ProposalIllustration,
  ExecutionIllustration,
  MeasureIllustration,
] as const;
