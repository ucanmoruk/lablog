import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await (prisma as any).siteSettings.findUnique({
    where: { id: 'default' }
  });

  return (
    <>
      <Navbar serverLogo={settings?.logo} />
      <main style={{ minHeight: '100vh', paddingTop: '120px' }}>
        {children}
      </main>
      <Footer serverLogo={settings?.logo} />
    </>
  );
}
