# Somos Marketing

Sitio web institucional de **Somos Marketing** — agencia de estrategia, estética y conocimiento.

Construido con [Next.js](https://nextjs.org) 16, React 19, Tailwind CSS v4 y Framer Motion.

---

## Requisitos previos

- [Node.js](https://nodejs.org) versión **18.18** o superior  
- npm (viene incluido con Node.js)

---

## Correr en local

**1. Clonar el repositorio**

```bash
git clone <url-del-repo>
cd SomosMarketing
```

**2. Instalar dependencias**

```bash
cd somos-marketing
npm install
```

**3. Iniciar el servidor de desarrollo**

```bash
npm run dev
```

**4. Abrir en el navegador**

```
http://localhost:3000
```

---

## Scripts disponibles

Desde la carpeta `somos-marketing/`:

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con hot-reload |
| `npm run build` | Build de producción optimizado |
| `npm run start` | Inicia el servidor con el build de producción |
| `npm run lint` | Corre el linter (ESLint) |

---

## Estructura del proyecto

```
SomosMarketing/
├── logos/                          # Assets de logos del cliente
└── somos-marketing/                # Aplicación Next.js
    ├── public/
    │   ├── clientes/               # Logos de clientes (15 marcas)
    │   ├── logo-long.png
    │   └── logo-short.png
    └── src/
        ├── app/
        │   ├── layout.tsx          # Layout raíz, fuentes y metadata
        │   ├── page.tsx            # Página principal
        │   └── globals.css         # Estilos globales y animaciones
        ├── components/
        │   ├── Navbar.tsx
        │   ├── Hero.tsx
        │   ├── Vision.tsx
        │   ├── HoneycombServices.tsx   # Panal interactivo de servicios
        │   ├── Methodology.tsx
        │   ├── WhyUs.tsx
        │   ├── Clients.tsx
        │   └── Contact.tsx
        └── lib/
            └── data.ts             # Textos, servicios y contenido centralizado
```

> Para cambiar textos, logos de clientes o información de contacto, editar únicamente `somos-marketing/src/lib/data.ts`.

---

## Tecnologías

- **Next.js 16** — framework React con SSG
- **React 19** — librería de UI
- **Tailwind CSS v4** — estilos utilitarios
- **Framer Motion** — animaciones y transiciones
- **TypeScript** — tipado estático
- **Lucide React** — íconos
