"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  { value: "+20", label: "Años de experiencia" },
  { value: "MBA", label: "Universidad Católica" },
  { value: "B2B & B2C", label: "Estrategias comerciales" },
  { value: "360°", label: "Marketing estratégico" },
];

export default function AboutDirector() {
  return (
    <section
      id="nosotros"
      className="relative py-28 lg:py-36 bg-card"
      aria-labelledby="about-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(220,38,38,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header: logo-long */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <Image
            src="/logo-long.png"
            alt="SomosMarketing"
            width={320}
            height={80}
            className="h-20 w-auto"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col gap-8 max-w-2xl"
        >
          {/* Name & photo inline */}
          <div className="flex items-center gap-5">
            {/* Circular photo – clipped to circle to remove black background */}
            <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-border">
              <Image
                src="/jpmena.jpg"
                alt="Juan Pablo Mena Rozas"
                fill
                className="object-cover object-center scale-[1.15]"
                sizes="64px"
              />
            </div>

            <div>
              <h3
                id="about-title"
                className="text-2xl sm:text-3xl font-bold tracking-tight"
              >
                Juan Pablo Mena Rozas
              </h3>
              <p className="text-accent-foreground font-medium text-sm tracking-wide uppercase mt-1">
                Director de Marketing · Gerente Comercial · Asesorías en Estrategia
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-muted-foreground leading-relaxed text-base">
            Ingeniero Comercial (UFT) y MBA (UC), con más de 20 años de
            experiencia nacional e internacional. Especializado en diseño e
            implementación de estrategias comerciales y planes de marketing
            estratégico, con foco en rentabilidad, fidelización y lanzamiento
            de nuevos productos en mercados B2B y B2C.
          </p>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-xl border border-border bg-background p-4"
              >
                <p className="text-2xl font-bold text-accent-foreground mb-1">
                  {item.value}
                </p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
