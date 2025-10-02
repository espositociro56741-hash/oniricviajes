"use client";

import React from "react";

export default function Page() {
  return (
    <main className="px-6 py-12 max-w-5xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Oniric Viajes</h1>
        <p className="text-lg text-gray-600">
          Viajes que exploran cultura, arte, arquitectura y diseño.
        </p>
      </section>

      {/* Quién Soy */}
      <section className="space-y-2">
        <h2 className="text-3xl font-semibold">Quién soy</h2>
        <p className="text-gray-700">
          Soy un apasionado de los viajes con un enfoque en descubrir la riqueza cultural,
          arquitectónica y artística de cada destino.
        </p>
      </section>

      {/* Próximos Viajes */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Próximos viajes</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Roma y Florencia – Arte renacentista y arquitectura</li>
          <li>Tokio – Diseño urbano y cultura contemporánea</li>
          <li>Ciudad de México – Arte prehispánico y modernismo</li>
        </ul>
      </section>

      {/* Testimonios */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Testimonios</h2>
        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600">
          “Una experiencia inolvidable, llena de aprendizajes culturales.” – Ana P.
        </blockquote>
        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600">
          “El viaje estuvo perfectamente organizado, con un enfoque único en arte y diseño.” – Juan M.
        </blockquote>
      </section>

      {/* Contacto */}
      <section className="space-y-2">
        <h2 className="text-3xl font-semibold">Contacto</h2>
        <p className="text-gray-700">
          Si querés sumarte a un próximo viaje o tenés dudas, escribime:
        </p>
        <a
          href="mailto:hola@oniric.viajes"
          className="text-blue-600 underline"
        >
          hola@oniric.viajes
