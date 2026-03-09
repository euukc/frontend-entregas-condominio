import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sistema de Entregas - Condomínio",
  description: "Aplicação acadêmica para gestão de entregas em condomínios, com login de moradores e porteiros, cadastro de entregas e notificações.",
  authors: [
    { name: "Kênia Caroline" },
    { name: "Lucas" },
    { name: "Cauê" }
  ],
  applicationName: "Sistema de Entregas",
  creator: "Equipe de Alunos - Faculdade Senac",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm -z-10"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        />
        {children}
      </body>
    </html>
  );
}
