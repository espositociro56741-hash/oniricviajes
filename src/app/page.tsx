"use client";

import React, { useState, useEffect, useRef } from "react";

// ONIRIC — Viajes & Arte
// Single‑file React component using TailwindCSS.
// Replace placeholder links/images and deploy (see instructions in chat).

export default function OniricSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  // Smooth scroll for hash links
  useEffect(() => {
    const onHashLink = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id) return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        const headerH = headerRef.current?.offsetHeight || 0;
        const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - headerH - 8;
        window.scrollTo({ top, behavior: "smooth" });
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onHashLink);
    return () => document.removeEventListener("click", onHashLink);
  }, []);

  // Brand palette (approx from IG):
  const brand = {
    black: "#0a0a0a",
    neon: "#00F18C", // oniric green
    yellow: "#FFE500",
    gray: "#f4f4f5",
  } as const;

  const trips = [
    {
      slug: "rio",
      title: "Río de Janeiro, Brasil",
      summary:
        "Vamos a redescubrir Río: modernismo, museos, Niemeyer, Burle Marx y esa luz dorada junto al mar.",
      long:
        "Este octubre te invitamos a mirar Río con nuevos ojos. Casa das Canoas, MAM, Palacio Capanema, Museo del Mañana y el MAC Niterói. También el Sitio Burle Marx y tiempo para la brisa y las playas.",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop",
      spots: 10,
    },
    {
      slug: "valle-de-uco",
      title: "Valle de Uco, Mendoza",
      summary:
        "Arquitectura vitivinícola, bodegas de autor, tierra y diseño: el paisaje que abraza el alma.",
      long:
        "Nos alojamos en Casa de Uco. Exploramos Alfa Crux y Riccitelli. Gastronomía de origen y experiencias que celebran el arte en todas sus formas.",
      img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2000&auto=format&fit=crop",
      spots: 12,
    },
    {
      slug: "sao-paulo",
      title: "São Paulo, Brasil",
      summary:
        "Vibra SP: street art, arquitectura y SP‑Arte; MASP, Cidade Matarazzo y la Casa de Vidrio.",
      long:
        "Edición única que fusiona el viaje con SP‑Arte. Visitamos MASP, Cidade Matarazzo, Galería DAN, Casa Salscutin y la Casa de Vidrio de Lina Bo Bardi. Paradas gastro como Vista (MAC). Solo 10 vacantes.",
      img: "https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=2000&auto=format&fit=crop",
      spots: 10,
    },
  ];

  const posts = [
    {
      title: "Arquitectura del vino: cuando el diseño se mezcla con la tierra",
      img: "https://images.unsplash.com/photo-1528825991651-902ea3a0f9ce?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "Street art en São Paulo: un museo a cielo abierto",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "Oscar Niemeyer y el modernismo en Río",
      img: "https://images.unsplash.com/photo-1532678465554-94846274c297?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  const testimonials = [
    {
      quote:
        "Nunca viajé con un grupo tan afinado en intereses. Me llevé amigos y recuerdos para toda la vida.",
      name: "Sofía",
      trip: "Mendoza",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "Descubrir São Paulo desde el arte callejero me voló la cabeza. Todo estaba curado con detalle.",
      name: "Julián",
      trip: "São Paulo",
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "En Río entendí que un viaje cultural no es solo ver museos: es vivir la ciudad desde adentro.",
      name: "Clara",
      trip: "Río de Janeiro",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="font-sans text-slate-900" style={{ backgroundColor: brand.gray }}>
      {/* Header */}
      <header
        ref={headerRef}
        className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/65"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-3 group">
              <span
                className="inline-grid h-8 w-8 place-items-center rounded-full text-xs font-black"
                style={{ backgroundColor: brand.neon, color: brand.black }}
              >
                on
              </span>
              <span className="text-sm font-semibold tracking-wide uppercase group-hover:opacity-80">
                oniric. <span className="font-normal lowercase">viajes & arte</span>
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#viajes" className="hover:text-slate-600">Próximos viajes</a>
              <a href="#blog" className="hover:text-slate-600">Blog</a>
              <a href="#archivo" className="hover:text-slate-600">Destinos pasados</a>
              <a href="#testimonios" className="hover:text-slate-600">Testimonios</a>
              <a href="#quien-soy" className="hover:text-slate-600">Quién soy</a>
              <a
                href="#contacto"
                className="rounded-xl px-3 py-1.5 text-sm font-semibold"
                style={{ backgroundColor: brand.black, color: "white" }}
              >
                Contacto
              </a>
            </nav>
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300"
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Abrir menú"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-2 text-sm">
              <a href="#viajes" className="py-1.5">Próximos viajes</a>
              <a href="#blog" className="py-1.5">Blog</a>
              <a href="#archivo" className="py-1.5">Destinos pasados</a>
              <a href="#testimonios" className="py-1.5">Testimonios</a>
              <a href="#quien-soy" className="py-1.5">Quién soy</a>
              <a href="#contacto" className="py-1.5 font-semibold">Contacto</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative">
        <div className="absolute inset-0" style={{ backgroundColor: brand.black }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex min-h-[64vh] items-end pb-10">
          <div className="grid gap-6 md:grid-cols-2 md:gap-10 w-full items-end">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Viajes que exploran <span className="underline decoration-4 underline-offset-4" style={{ textDecorationColor: brand.neon }}>cultura</span>, arte y diseño
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
                Mirar más allá de lo evidente. Arquitectura, arte y cultura, curados para quienes disfrutan de los detalles.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#viajes" className="rounded-2xl px-5 py-2.5 text-sm font-semibold" style={{ backgroundColor: brand.neon, color: brand.black }}>Ver próximos viajes</a>
                <a href="#quien-soy" className="rounded-2xl border border-white/20 px-5 py-2.5 text-white/90 hover:bg-white/5">Conocer a Coni</a>
              </div>
            </div>
            <div className="hidden md:block justify-self-end">
              <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-white/10">
                <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400&auto=format&fit=crop" alt="Collage urbano" className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold" style={{ backgroundColor: brand.yellow, color: brand.black }}>oniric.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRÓXIMOS VIAJES */}
      <section id="viajes" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Próximos viajes / Experiencias</h2>
            <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: brand.yellow, color: brand.black }}>cupos limitados</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trips.map((t) => (
              <article key={t.slug} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="relative">
                  <img src={t.img} alt={t.title} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold" style={{ backgroundColor: brand.neon, color: brand.black }}>{t.spots} vacantes</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{t.summary}</p>
                  <p className="mt-2 text-sm text-slate-700">{t.long}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <a href="#contacto" className="rounded-xl px-3 py-1.5 text-sm font-semibold" style={{ backgroundColor: brand.black, color: "white" }}>Quiero info</a>
                    <a href="#archivo" className="text-sm underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500">Ver viajes pasados</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG / INSPIRACIÓN */}
      <section id="blog" className="py-16 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Blog / Inspiración</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <article key={i} className="overflow-hidden rounded-3xl border border-slate-200">
                <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-semibold">{p.title}</h3>
                  <a href="#" className="mt-3 inline-block text-sm font-medium underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500">Leer</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINOS PASADOS */}
      <section id="archivo" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Destinos pasados</h2>
          <p className="mt-2 text-slate-700 max-w-2xl">Más de 8 viajes y 60+ viajeros que se enamoraron de la experiencia: personas con los mismos intereses explorando desde un ángulo distinto.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trips.map((t) => (
              <figure key={t.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <img src={t.img} alt={t.title} className="h-48 w-full object-cover" />
                <figcaption className="p-4 text-sm">
                  <strong>{t.title}</strong>
                  <div className="text-slate-600">{t.summary}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-16 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Testimonios</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="rounded-3xl border border-slate-200 p-5">
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div className="text-sm">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-slate-500">{t.trip}</div>
                  </div>
                </div>
                <p className="mt-3 text-slate-700">“{t.quote}”</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* QUIÉN SOY */}
      <section id="quien-soy" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Quién soy</h2>
              <p className="mt-4 text-slate-700">
                <strong>Coni Pereda</strong> — arquitecta y apasionada por los viajes y el arte. A los <strong>50 años</strong> decidí reinventarme y unir mis pasiones. Descubrí algo único en la intersección entre arquitectura, arte y cultura: la posibilidad de mirar el mundo con otros ojos y compartirlo.
              </p>
              <p className="mt-3 text-slate-700">
                Lo que empezó como un fuego interno hoy es una comunidad con <strong>8+ viajes</strong> y <strong>60+ viajeros</strong>, personas curiosas que se encuentran y conectan para explorar destinos desde un ángulo completamente distinto.
              </p>
              <p className="mt-3 text-slate-700">
                Esto no es turismo masivo. Son <strong>viajes curados</strong>: experiencias con profundidad, estética y alma.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold" style={{ backgroundColor: brand.neon, color: brand.black }}>
                oniric. viajes & arte
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop"
                alt="Retrato de Coni"
                className="h-[420px] w-full rounded-3xl object-cover border border-slate-200"
              />
              <span className="absolute -left-3 -top-3 rotate-[-8deg] rounded-2xl px-3 py-1 text-xs font-bold" style={{ backgroundColor: brand.yellow, color: brand.black }}>arquitectura • arte • viajes</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO (no newsletter) */}
      <section id="contacto" className="py-16 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Contacto</h2>
          <p className="mt-2 text-slate-700 max-w-2xl">¿Querés sumarte a los próximos viajes o pedir info? Escribinos por WhatsApp o completá el formulario y te respondemos.</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <form
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              // ACTION OPTION 1 (Formspree): replace with your endpoint
              action="#" // e.g., https://formspree.io/f/xxxxxx
              method="POST"
            >
              <label className="block text-sm font-medium">Nombre</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />

              <label className="mt-4 block text-sm font-medium">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />

              <label className="mt-4 block text-sm font-medium">Mensaje</label>
              <textarea name="message" rows={5} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"></textarea>

              <button
                type="submit"
                className="mt-5 w-full rounded-2xl px-5 py-2.5 font-semibold"
                style={{ backgroundColor: brand.black, color: "white" }}
              >
                Enviar
              </button>
              <p className="mt-3 text-xs text-slate-500">Opción sin backend: usá Formspree / FormSubmit y reemplazá el <code>action</code>.</p>
            </form>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/5491100000000" // TODO: reemplazar por número real
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 font-semibold"
                  style={{ backgroundColor: brand.neon, color: brand.black }}
                >
                  WhatsApp
                </a>
                <a href="https://www.instagram.com/oniric.viaje" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-5 py-2.5 hover:bg-slate-50">
                  Instagram @oniric.viaje
                </a>
                <a href="mailto:hola@oniric.viajes" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-5 py-2.5 hover:bg-slate-50">hola@oniric.viajes</a>
                <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-600">
                  ¿Querés integrar el feed de IG? Podés usar oEmbed o widgets tipo SnapWidget/LightWidget.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (no newsletter) */}
      <footer className="border-t border-slate-200 py-10" style={{ backgroundColor: brand.gray }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-grid h-7 w-7 place-items-center rounded-full text-[10px] font-black" style={{ backgroundColor: brand.neon, color: brand.black }}>on</span>
            <div className="text-sm">© {new Date().getFullYear()} oniric. viajes & arte</div>
          </div>
          <div className="text-sm">
            <a href="#quien-soy" className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500">Quién soy</a>
            <span className="mx-3">•</span>
            <a href="#contacto" className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
