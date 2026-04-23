import type { Metadata } from "next";
import "./globals.css";
import { QuoteProvider } from "@/context/QuoteContext";

export const metadata: Metadata = {
  title: "Laboratuvar Çözüm Merkezi | Test, Analiz ve Belgelendirme",
  description: "Türkiye'nin En Kapsamlı Laboratuvar Çözüm Merkezi. Kozmetik, ilaç, hammadde, tekstil, gıda ve daha fazlası için test, analiz ve belgelendirme arama motoru.",
};

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

