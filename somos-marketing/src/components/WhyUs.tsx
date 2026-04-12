"use client";

import { motion } from "framer-motion";
import { WHY_US } from "@/lib/data";
import { WHYUS_ILLUSTRATIONS } from "./WhyUsIllustrations";

const cardVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function WhyUs() {
  return (
    <section
      id="por-que"
      className="relative py-28 lg:py-36"
      aria-labelledby="whyus-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.05),transparent_60%)]" />

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
            Nuestro diferencial
          </p>
          <h2
            id="whyus-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Por qué optar por nosotros
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {WHY_US.map((item, i) => {
            const Illustration = WHYUS_ILLUSTRATIONS[i];
            return (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl border border-border bg-card p-10 transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(300px_at_50%_0%,rgba(220,38,38,0.08),transparent)]" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6">
                    {Illustration && <Illustration className="w-36 h-36 mx-auto" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
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
