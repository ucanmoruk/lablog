import type { Metadata } from "next";
import "./globals.css";
import { QuoteProvider } from "@/context/QuoteContext";
import { prisma } from "@/lib/prisma";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await (prisma as any).siteSettings.findUnique({
    where: { id: 'default' }
  });

  return {
    title: settings?.title || "Laboratuvar Çözüm Merkezi | Test, Analiz ve Belgelendirme",
    description: settings?.description || "Türkiye'nin En Kapsamlı Laboratuvar Çözüm Merkezi.",
    keywords: settings?.keywords || "laboratuvar, analiz, test",
    icons: {
      icon: settings?.favicon || "/favicon.ico",
    }
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <QuoteProvider>
          {children}
        </QuoteProvider>
      </body>
    </html>
  );
}

