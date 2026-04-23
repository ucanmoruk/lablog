import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Public-facing pages with Navbar and Footer
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 68px)' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
