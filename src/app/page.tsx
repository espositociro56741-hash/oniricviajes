"use client";

import React from "react";

export default function Page() {
  return (
    <main className="px-6 py-12 max-w-5xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Oniric Viajes & Arte</h1>
        <p className="text-lg text-gray-600">
          Viajes que exploran cultura, arte y diseño en cada destino.
        </p>
      </section>

      {/* Quién Soy */}
      <section className="space-y-2">
        <h2 className="text-3xl font-semibold">Quién soy</h2>
        <p className="text-gray-700">
          Soy un apasionado de los viajes con un enfoque en la riqueza
          arquitectónica y artística de cada destino.
        </p>
      </section>

      {/* Próximos viajes */}
      <section className="space-y-2">
        <h2 className="text-3xl font-semibold">Próximos viajes</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Barcelona – Explorando Gaudí y el modernismo</li>
          <li>Roma – Arte clásico y renacentista</li>
          <li>Kioto – Tradición y espiritualidad</li>
        </ul>
      </section>

      {/* Testimonios */}
      <section className="space-y-2">
        <h2 className="text-3xl font-semibold">Testimonios</h2>
        <blockquote className="italic text-gray-600">
          "Un viaje único, lleno de inspiración artística." – Ana
        </blockquote>
      </section>

      {/* Contacto */}
      <section className="space-y-2">
        <h2 className="text-3xl font-semibold">Contacto</h2>
        <p>
          Escribime a:{" "}
          <a
            href="mailto:hola@oniric.viajes"
            className="text-blue-600 underline"
          >
            hola@oniric.viajes
          </a>
        </p>
      </section>
    </main>
  );
}
