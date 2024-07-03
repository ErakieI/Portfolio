import type { Metadata } from "next";
import React from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio de Mathieu JACQUEMIN",
  description: "Voici mon portfolio de développeur web full-stack, vous y trouverez des informations relatives sur moi ainsi que mon CV.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
