"use client";

import { motion } from "framer-motion";
import { VISION_ITEMS } from "@/lib/data";
import { VISION_ILLUSTRATIONS } from "./VisionIllustrations";

const cardVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Vision() {
  return (
    <section className="relative py-28 lg:py-36" aria-labelledby="vision-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent-foreground mb-3">
            Nuestra mirada
          </p>
          <h2
            id="vision-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Hacia dónde miramos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Cinco pilares que guían cada estrategia que diseñamos.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VISION_ITEMS.map((item, i) => {
            const Illustration = VISION_ILLUSTRATIONS[i];
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20 overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_at_50%_0%,rgba(220,38,38,0.06),transparent)]" />

                {/* Step number — decorative top-right */}
                <span
                  className="absolute top-5 right-6 font-black text-5xl leading-none select-none text-foreground/[0.04] transition-all duration-300 group-hover:text-accent/8"
                  aria-hidden="true"
                >
                  {num}
                </span>

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Small numbered badge */}
                  <div className="mb-5 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-[10px] font-bold text-accent">
                      {num}
                    </span>
                  </div>

                  <div className="mb-6">
                    {Illustration && <Illustration className="w-28 h-28 mx-auto" />}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
