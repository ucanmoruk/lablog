import { prisma } from '@/lib/prisma';
import { services as mockServices } from '@/data/mockData';
import AnalizlerClient from './AnalizlerClient';
import styles from './analizler.module.css';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Tüm Analiz Parametreleri | Kurumsal Laboratuvar Hizmetleri',
  description: 'Kozmetik, ilaç, gıda ve sanayi sektörlerine yönelik tüm akredite analiz parametreleri, test metotları ve süreleri.',
};

export default async function AnalizlerPage() {
  let allServices = [];

  try {
    allServices = await prisma.analysis.findMany({
      orderBy: { title: 'asc' }
    });

    if (allServices.length === 0) {
      allServices = mockServices;
    }
  } catch (error) {
    console.warn("Analizler DB error, using mock data:", error);
    allServices = mockServices;
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Laboratuvar Hizmetleri</span>
          <h1 className={styles.title}>Analiz Portföyümüz</h1>
          <p className={styles.subtitle}>
            Uluslararası standartlarda, akredite metotlarla gerçekleştirdiğimiz 
            tüm test ve analiz parametrelerini aşağıda inceleyebilirsiniz.
          </p>
        </header>

        <AnalizlerClient initialServices={allServices as any} />
      </div>
    </main>
  );
}
