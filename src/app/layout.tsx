export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-900 text-gray-100 font-sans">
        <header className="bg-gray-800 p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold">Oniric Viajes</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:text-blue-400">Inicio</a>
            <a href="#quien-soy" className="hover:text-blue-400">Quién soy</a>
            <a href="#proximos-viajes" className="hover:text-blue-400">Próximos viajes</a>
            <a href="#contacto" className="hover:text-blue-400">Contacto</a>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto p-8">
          {children}
        </main>

        <footer className="bg-gray-800 text-center py-4 mt-12 text-sm text-gray-400">
          © {new Date().getFullYear()} Oniric Viajes · Todos los derechos reservados
        </footer>
      </body>
    </html>
  );
}
