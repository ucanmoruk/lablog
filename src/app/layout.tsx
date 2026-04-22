import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 68px)' }}>
            {children}
          </main>
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}
