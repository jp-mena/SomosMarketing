"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send, Mail, MessageCircle, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { CONTACT, SOCIAL_LINKS } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
    empresa: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Error desconocido");

      setStatus("success");
      setFormState({ nombre: "", email: "", empresa: "", mensaje: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "No se pudo enviar el mensaje.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:border-accent focus:ring-1 focus:ring-accent transition-colors outline-none";

  return (
    <>
      <section
        id="contacto"
        className="relative py-28 lg:py-36 overflow-hidden"
        aria-labelledby="contact-title"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.05),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
            {/* Left — CTA copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-medium tracking-widest uppercase text-accent-foreground mb-3">
                Contacto
              </p>
              <h2
                id="contact-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
              >
                {CONTACT.headline}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-lg">
                {CONTACT.subheadline}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all hover:border-accent/40 hover:bg-white/5"
                  aria-label="Enviar email"
                >
                  <Mail size={18} />
                  {CONTACT.email}
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/\s/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all hover:border-green-500/40 hover:bg-green-500/5"
                  aria-label="Contactar por WhatsApp"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl border border-border bg-card p-8 md:p-10"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    value={formState.nombre}
                    onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                    className={inputClass}
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className={inputClass}
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium mb-2">
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    type="text"
                    value={formState.empresa}
                    onChange={(e) => setFormState({ ...formState, empresa: e.target.value })}
                    className={inputClass}
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    required
                    rows={4}
                    value={formState.mensaje}
                    onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
              </div>

              {/* Feedback messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700"
                >
                  <CheckCircle size={16} className="flex-shrink-0" />
                  ¡Mensaje enviado! Te responderemos a la brevedad.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
                >
                  <AlertCircle size={16} className="flex-shrink-0" />
                  {errorMsg}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent/80 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Enviando...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={16} />
                    ¡Enviado!
                  </>
                ) : (
                  <>
                    Enviar mensaje <Send size={16} />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="border-t border-border py-10" role="contentinfo">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Image
              src="/logo-short.png"
              alt="Somos Marketing"
              width={100}
              height={32}
              className="h-6 w-auto opacity-60"
            />

            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <p className="text-xs text-muted-foreground/50">
              © {new Date().getFullYear()} Somos Marketing. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
