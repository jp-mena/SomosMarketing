"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  { value: "+20", label: "Años de experiencia" },
  { value: "MBA", label: "Universidad Católica" },
  { value: "B2B & B2C", label: "Estrategias comerciales" },
  { value: "Bilingüe", label: "Inglés avanzado" },
];

const industries = [
  "Automotriz",
  "Consumo masivo",
  "Agroindustrial",
  "Alimentaria",
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent-foreground mb-3">
            Quiénes somos
          </p>
          <h2
            id="about-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            La persona detrás de{" "}
            <span className="text-accent-foreground">Somos</span>
          </h2>
        </motion.div>

        {/* Content: photo + info */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-2xl shadow-accent/5">
              <Image
                src="/juan-pablo.jpg"
                alt="Juan Pablo Mena Rozas – Director de Somos Marketing"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay gradient at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Decorative accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-accent/20 -z-10" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-8"
          >
            {/* Name & title */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Juan Pablo Mena Rozas
              </h3>
              <p className="text-accent-foreground font-medium text-sm tracking-wide uppercase">
                Director de Marketing · Gerente Comercial · Asesorías en Estrategia
              </p>
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
            <div className="grid grid-cols-2 gap-4">
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

            {/* Industries */}
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
                Industrias
              </p>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
