import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oniric Viajes & Arte",
  description: "Viajes que exploran cultura, arte y diseño",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
