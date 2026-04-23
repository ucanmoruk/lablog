import { sectors, getSectorBySlug } from '@/data/sectors';
import { services } from '@/data/mockData';
import { notFound } from 'next/navigation';
import SectorPageContent from './SectorPageContent';

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return { title: 'Bulunamadı' };
  return {
    title: `${sector.name} Analizleri | Laboratuvar Çözüm Merkezi`,
    description: sector.description,
  };
}

export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const sectorServices = services.filter(s => s.category === sector.name || s.category.includes(sector.shortName));
  const relatedSectors = sectors.filter(s => s.slug !== sector.slug).slice(0, 3);

  return <SectorPageContent sector={sector} sectorServices={sectorServices} relatedSectors={relatedSectors} />;
}
