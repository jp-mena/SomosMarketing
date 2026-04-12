"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { METHODOLOGY_STEPS } from "@/lib/data";
import { METHODOLOGY_ILLUSTRATIONS } from "./MethodologyIllustrations";

export default function Methodology() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="metodologia"
      className="relative py-28 lg:py-36 overflow-hidden"
      aria-labelledby="methodology-title"
    >
      {/* Subtle bg accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(220,38,38,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent-foreground mb-3">
            Modelo EEC
          </p>
          <h2
            id="methodology-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Nuestra metodología
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Un proceso claro desde el brief hasta los resultados, combinando
            Estrategia, Estética y Conocimiento.
          </p>
        </motion.div>

        {/* Timeline with illustration cards */}
        <div ref={ref} className="relative">
          {/* Horizontal connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[100px] left-[10%] right-[10%] h-px bg-border">
            <motion.div
              className="absolute inset-y-0 left-0 bg-accent"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] as const, delay: 0.3 }}
            />
          </div>

          {/* Vertical line (mobile) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[19px] w-px bg-border">
            <motion.div
              className="absolute inset-x-0 top-0 bg-accent"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] as const, delay: 0.3 }}
            />
          </div>

          {/* Steps */}
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-5">
            {METHODOLOGY_STEPS.map((step, i) => {
              const Illustration = METHODOLOGY_ILLUSTRATIONS[i];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.3 + i * 0.2,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  }}
                  className="relative pl-12 lg:pl-0"
                >
                  {/* Mobile dot */}
                  <div className="lg:hidden absolute left-[12px] top-1">
                    <div className="relative">
                      <div className="h-4 w-4 rounded-full border-2 border-accent bg-background" />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-accent/30"
                        animate={isInView ? { scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] } : {}}
                        transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4 }}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20 lg:text-center">
                    {/* Desktop dot */}
                    <div className="hidden lg:flex justify-center -mt-[42px] mb-4">
                      <div className="relative">
                        <div className="h-5 w-5 rounded-full border-2 border-accent bg-background" />
                        <motion.div
                          className="absolute inset-0 rounded-full bg-accent/30"
                          animate={isInView ? { scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] } : {}}
                          transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4 }}
                        />
                      </div>
                    </div>

                    {/* Illustration */}
                    <div className="flex justify-center mb-4">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Illustration className="w-32 h-32 lg:w-36 lg:h-36" />
                      </motion.div>
                    </div>

                    {/* Text */}
                    <span className="inline-block text-xs font-semibold text-accent mb-2 tracking-wider">
                      PASO {step.step}
                    </span>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
