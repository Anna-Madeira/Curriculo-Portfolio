import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from 'react';

const Footer = () => (
  <footer className="text-center text-neutral-500 text-sm py-4">
    <p>Desenvolvido com React, TypeScript e Tailwind CSS</p>
  </footer>
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anna Madeira | Currículo",
  description: "Portfólio e currículo online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-900 font-inter text-white min-h-screen flex flex-col`}
      >
        <main className="flex-grow flex items-center justify-center p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
