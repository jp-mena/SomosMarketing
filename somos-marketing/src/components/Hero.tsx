"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { HERO } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
      aria-label="Sección principal"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-accent/8 blur-[130px] animate-float" />
        <div
          className="absolute -bottom-32 -right-40 h-[500px] w-[500px] rounded-full bg-red-400/8 blur-[120px] animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px] animate-float"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Radial overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#ffffff_75%)]" />

        {/* Decorative corner ring top-right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="absolute -top-24 -right-24 h-[350px] w-[350px] rounded-full border border-accent/8"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
          className="absolute -top-16 -right-16 h-[250px] w-[250px] rounded-full border border-accent/5"
        />

        {/* Decorative corner ring bottom-left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          className="absolute -bottom-20 -left-20 h-[280px] w-[280px] rounded-full border border-accent/6"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Tagline with styled separators */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 flex items-center justify-center gap-3"
        >
          {["Estrategia", "Estética", "Conocimiento"].map((word, i) => (
            <span key={word} className="flex items-center gap-3">
              <span className="text-sm font-medium tracking-widest uppercase text-accent-foreground">
                {word}
              </span>
              {i < 2 && (
                <span className="h-1 w-1 rounded-full bg-accent/50 flex-shrink-0" />
              )}
            </span>
          ))}
        </motion.div>

        {/* Logo */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex justify-center"
        >
          <Image
            src="/logo-long.png"
            alt="Somos Marketing"
            width={500}
            height={120}
            priority
            className="h-auto w-[280px] sm:w-[360px] md:w-[440px] lg:w-[500px] object-contain"
          />
        </motion.div>

        {/* Decorative line under logo */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto mt-5 h-px w-24 origin-center bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        />

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-7 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed"
        >
          {HERO.subheadline}
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#servicios"
            className="group relative inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent/85 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {HERO.cta1}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
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
          <a
            href="#contacto"
            className="inline-flex items-center rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {HERO.cta2}
          </a>
        </motion.div>

        {/* Stats / social proof strip */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-14 flex items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { value: "15+", label: "Marcas" },
            { value: "360°", label: "Estrategia" },
            { value: "EEC", label: "Modelo propio" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-0.5 text-xs text-muted-foreground tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="h-8 w-5 rounded-full border border-border flex items-start justify-center p-1"
          >
            <div className="h-1.5 w-1 rounded-full bg-accent" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
