// trigger redeploy
"use client";

import React from "react";

export default function Page() {
  return (
    <main className="px-6 py-12 max-w-5xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Oniric Viajes &amp; Arte</h1>
        <p className="text-lg text-gray-600">
          Viajes que exploran cultura, arte y dise&ntilde;o.
        </p>
      </section>

      {/* Quién soy */}
      <section className="space-y-2">
        <h2 className="text-3xl font-semibold">Qui&eacute;n soy</h2>
        <p className="text-gray-700">
          Soy un apasionado de los viajes con un enfoque en la exploraci&oacute;n cultural,
          arquitect&oacute;nica y art&iacute;stica de cada destino.
        </p>
      </section>

      {/* Próximos viajes */}
      <section className="space-y-2">
        <h2 className="text-3xl font-semibold">Pr&oacute;ximos viajes</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Barcelona &mdash; arquitectura y dise&ntilde;o</li>
          <li>Roma &mdash; historia y arte</li>
          <li>Tokio &mdash; modernidad y tradici&oacute;n</li>
        </ul>
      </section>

      {/* Contacto */}
      <section className="space-y-2">
        <h2 className="text-3xl font-semibold">Contacto</h2>
        <p className="text-gray-700">
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
