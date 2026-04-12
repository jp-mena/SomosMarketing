"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/data";

/* Logo card used inside each marquee row */
function LogoCard({ client }: { client: (typeof CLIENT_LOGOS)[number] }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center rounded-xl border border-border bg-card h-24 w-44 p-4 mx-2 transition-all duration-300 hover:border-accent/25 hover:bg-accent/5 hover:shadow-md hover:shadow-accent/5">
      <Image
        src={`/clientes/${client.file}`}
        alt={client.name}
        width={120}
        height={48}
        className="max-h-10 w-auto object-contain opacity-65 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
}

export default function Clients() {
  // Split logos into two rows for bidirectional marquee
  const row1 = CLIENT_LOGOS.slice(0, 8);
  const row2 = CLIENT_LOGOS.slice(8);

  // Double arrays for seamless infinite loop
  const row1Doubled = [...row1, ...row1];
  const row2Doubled = [...row2, ...row2];

  return (
    <section
      id="clientes"
      className="relative py-28 lg:py-36 overflow-hidden"
      aria-labelledby="clients-title"
    >
      {/* Subtle bg */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.03),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent-foreground mb-3">
            Nuestros clientes
          </p>
          <h2
            id="clients-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Con quienes hemos trabajado
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Marcas que confían en nosotros para potenciar su estrategia.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows — full bleed, outside the centered container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        {/* Row 1 — left to right */}
        <div className="relative overflow-hidden">
          {/* Fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

          <div className="flex animate-marquee w-max" aria-hidden="true">
            {row1Doubled.map((client, i) => (
              <LogoCard key={`r1-${client.id}-${i}`} client={client} />
            ))}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

          <div className="flex animate-marquee-reverse w-max" aria-hidden="true">
            {row2Doubled.map((client, i) => (
              <LogoCard key={`r2-${client.id}-${i}`} client={client} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Accessible non-animated list for screen readers */}
      <ul className="sr-only">
        {CLIENT_LOGOS.map((client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
    </section>
  );
}
