import { services } from '@/data/mockData';
import { notFound } from 'next/navigation';
import styles from './service.module.css';
import ClientAddButton from './ClientAddButton';
import { Shield, Clock, Beaker, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.id === resolvedParams.slug);
  if (!service) return { title: 'Bulunamadı' };
  
  return {
    title: `${service.title} | Laboratuvar Analizi`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.id === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // Get some related or popular services for sidebar
  const popularServices = services.filter(s => s.popular && s.id !== service.id).slice(0, 8);

  return (
    <div className={styles.container}>
      
      <div className={styles.layoutGrid}>
        {/* Sol Ana İçerik (Editorial Fluid Layout) */}
        <div className={styles.mainContent}>
          
          <div className={styles.header}>
            <div className={styles.category}>{service.category}</div>
            <h1 className={styles.title}>{service.title}</h1>
          </div>

          <div className={styles.imagePlaceholder}>
            {/* Profesyonel Laboratuvar Görseli (Minimalist Apple tarzı tam genişlik) */}
            <img 
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop" 
              alt={`${service.title} Laboratuvar Analizi`} 
            />
          </div>

          <div className={styles.editorialFlow}>
            <p>
              {service.description}
            </p>
            <p>
              Uluslararası ticarette teknik engellerin aşılması ve ürün güvenliğinin kanıtlanması amacıyla laboratuvarımızda yürütülen bu test süreci, yasal mevzuatlara ve global standartlara tam uyum çerçevesinde raporlanmaktadır. 
              Modern cihaz parkurumuz (LC-MS/MS, ICP-MS, GC-MS vb.) ve alanında uzman analist kadromuz sayesinde ölçüm belirsizliği en aza indirilmiş, kesin ve güvenilir sonuçlar elde edilmektedir.
            </p>
          </div>

          {/* Minimalist Teknik Veri Alanı */}
          <div className={styles.techDataSection}>
            <div className={styles.techItem}>
              <div className={styles.techIconWrapper}>
                <Shield size={24} />
              </div>
              <div className={styles.techLabel}>Referans Standart</div>
              <div className={styles.techValue}>{service.standards || "İn-house Validasyon"}</div>
            </div>
            
            <div className={styles.techItem}>
              <div className={styles.techIconWrapper}>
                <Clock size={24} />
              </div>
              <div className={styles.techLabel}>Analiz Süresi (TAT)</div>
              <div className={styles.techValue}>{service.turnaroundTime || "Spesifikasyona Bağlı"}</div>
            </div>
            
            <div className={styles.techItem}>
              <div className={styles.techIconWrapper}>
                <Beaker size={24} />
              </div>
              <div className={styles.techLabel}>Numune İhtiyacı</div>
              <div className={styles.techValue}>{service.sampleRequirement || "Ürün bazlı değerlendirilir"}</div>
            </div>
          </div>
          
          <div className={styles.actionArea}>
            <h3 style={{fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px'}}>Analiz Talebi Oluşturun</h3>
            <p style={{color: 'var(--text-secondary)', marginBottom: '16px', maxWidth: '500px'}}>
              Bu analiz için numune göndermek veya detaylı fiyat teklifi almak istiyorsanız sepetinize ekleyerek dijital talebinizi saniyeler içinde iletebilirsiniz.
            </p>
            <ClientAddButton service={service} />
          </div>

        </div>

        {/* Sağ Menü (Minimalist Sidebar) */}
        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>
            Öne Çıkan Analizler
          </h3>
          <ul className={styles.sidebarList}>
            {popularServices.map(popService => (
              <li key={popService.id}>
                <Link href={`/services/${popService.id}`} className={styles.sidebarItem}>
                  <ArrowRight size={18} className={styles.sidebarIcon} />
                  <span>{popService.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
