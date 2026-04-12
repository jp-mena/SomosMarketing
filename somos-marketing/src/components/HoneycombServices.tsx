"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import { SERVICES, type Service } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ── Single Hexagon ─────────────────────────────────────────────────────── */
function Hexagon({
  service,
  isActive,
  onClick,
}: {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.97 }}
      aria-label={`Ver servicio ${service.name}`}
      aria-pressed={isActive}
      className={cn(
        "relative w-[130px] h-[150px] md:w-[140px] md:h-[162px] flex items-center justify-center",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
      )}
    >
      {/* Hex shape */}
      <div
        className={cn(
          "hexagon-clip absolute inset-0 transition-all duration-400",
          isActive
            ? "bg-accent shadow-lg shadow-accent/30"
            : "bg-card border-0 hover:bg-accent/10"
        )}
      />

      {/* Glow ring on active */}
      {isActive && (
        <motion.div
          layoutId="hex-glow"
          className="hexagon-clip absolute -inset-1 bg-accent/20 blur-sm"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      <div className="relative z-10 text-center px-3">
        <p
          className={cn(
            "text-xs font-bold tracking-wide leading-tight",
            isActive ? "text-white" : "text-foreground"
          )}
        >
          {service.name}
        </p>
        <p
          className={cn(
            "mt-1 text-[10px] leading-tight",
            isActive ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {service.label}
        </p>
      </div>
    </motion.button>
  );
}

/* ── Service detail panel ───────────────────────────────────────────────── */
const panelContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const panelItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function ServicePanel({ service }: { service: Service }) {
  // Extract the word after "Somos" for the large decorative letter
  const decorLetter = service.name.replace("Somos", "").charAt(0).toUpperCase();

  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative rounded-2xl border border-border bg-card overflow-hidden"
    >
      {/* Top color bar — animates its width on service change */}
      <motion.div
        key={`bar-${service.id}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-1.5 w-full origin-left"
        style={{ backgroundColor: service.color }}
      />

      {/* Content area */}
      <motion.div
        key={`content-${service.id}`}
        variants={panelContainer}
        initial="hidden"
        animate="visible"
        className="relative p-8 md:p-10"
      >
        {/* Decorative background letter */}
        <span
          className="pointer-events-none select-none absolute right-5 top-2 font-black leading-none text-[140px]"
          style={{ color: service.color, opacity: 0.04 }}
          aria-hidden="true"
        >
          {decorLetter}
        </span>

        <div className="relative z-10">
          {/* Label badge */}
          <motion.span
            variants={panelItem}
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white mb-5"
            style={{ backgroundColor: service.color }}
          >
            {service.label}
          </motion.span>

          {/* Service name */}
          <motion.h3
            variants={panelItem}
            className="text-2xl md:text-3xl font-bold tracking-tight mb-4"
          >
            {service.name}
          </motion.h3>

          {/* Description */}
          <motion.p
            variants={panelItem}
            className="text-muted-foreground leading-relaxed text-base"
          >
            {service.description}
          </motion.p>

          {/* Divider + CTA */}
          <motion.div
            variants={panelItem}
            className="mt-8 pt-6 border-t border-border"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
              style={{ color: service.color }}
            >
              Conversemos sobre esto
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main Section ───────────────────────────────────────────────────────── */
export default function HoneycombServices() {
  const [active, setActive] = useState<Service>(SERVICES[0]);

  return (
    <section
      id="servicios"
      className="relative py-28 lg:py-36 overflow-hidden"
      aria-labelledby="services-title"
    >
      {/* Subtle section background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.04),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(220,38,38,0.03),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent-foreground mb-3">
            Nuestros servicios
          </p>
          <h2
            id="services-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Ecosistema integrado
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Seis unidades especializadas que trabajan de forma coordinada para
            cubrir cada dimensión de tu estrategia de marketing.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Honeycomb grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0"
          >
            {/* Desktop honeycomb layout */}
            <div className="hidden md:block">
              {/* Row 1: 2 hexs */}
              <div className="flex justify-center gap-2 ml-[72px]">
                <Hexagon
                  service={SERVICES[0]}
                  isActive={active.id === SERVICES[0].id}
                  onClick={() => setActive(SERVICES[0])}
                />
                <Hexagon
                  service={SERVICES[1]}
                  isActive={active.id === SERVICES[1].id}
                  onClick={() => setActive(SERVICES[1])}
                />
              </div>

              {/* Row 2: service + logo + service */}
              <div className="flex items-center justify-center gap-2 -mt-4">
                <Hexagon
                  service={SERVICES[2]}
                  isActive={active.id === SERVICES[2].id}
                  onClick={() => setActive(SERVICES[2])}
                />
                {/* Center logo */}
                <div className="relative w-[140px] h-[162px] flex items-center justify-center">
                  <div className="hexagon-clip absolute inset-0 bg-gradient-to-br from-accent/20 to-red-400/20" />
                  <div className="relative z-10 p-4">
                    <Image
                      src="/logo-long.png"
                      alt="Somos Marketing"
                      width={100}
                      height={60}
                      className="w-auto h-10 object-contain"
                    />
                  </div>
                </div>
                <Hexagon
                  service={SERVICES[3]}
                  isActive={active.id === SERVICES[3].id}
                  onClick={() => setActive(SERVICES[3])}
                />
              </div>

              {/* Row 3: 2 hexs */}
              <div className="flex justify-center gap-2 ml-[72px] -mt-4">
                <Hexagon
                  service={SERVICES[4]}
                  isActive={active.id === SERVICES[4].id}
                  onClick={() => setActive(SERVICES[4])}
                />
                <Hexagon
                  service={SERVICES[5]}
                  isActive={active.id === SERVICES[5].id}
                  onClick={() => setActive(SERVICES[5])}
                />
              </div>
            </div>

            {/* Mobile grid */}
            <div className="md:hidden grid grid-cols-2 gap-3 place-items-center">
              {/* Logo in center-top */}
              <div className="col-span-2 flex justify-center mb-2">
                <div className="relative w-[130px] h-[150px] flex items-center justify-center">
                  <div className="hexagon-clip absolute inset-0 bg-gradient-to-br from-accent/20 to-red-400/20" />
                  <div className="relative z-10 p-4">
                    <Image
                      src="/logo-long.png"
                      alt="Somos Marketing"
                      width={90}
                      height={50}
                      className="w-auto h-8 object-contain"
                    />
                  </div>
                </div>
              </div>
              {SERVICES.map((s) => (
                <Hexagon
                  key={s.id}
                  service={s}
                  isActive={active.id === s.id}
                  onClick={() => setActive(s)}
                />
              ))}
            </div>
          </motion.div>

          {/* Service detail panel */}
          <div className="flex-1 min-w-0 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <ServicePanel service={active} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
