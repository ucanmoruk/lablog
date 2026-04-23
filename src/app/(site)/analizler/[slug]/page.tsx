import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import styles from './service.module.css';
import ClientAddButton from './ClientAddButton';
import { Shield, Clock, Beaker, ArrowRight, ChevronLeft, User, Calendar, Award, Share2, Zap } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const services = await prisma.analysis.findMany({ select: { id: true } });
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = await prisma.analysis.findUnique({
    where: { id: resolvedParams.slug }
  });
  if (!service) return { title: 'Bulunamadı' };
  
  return {
    title: `${service.title} | Laboratuvar Analizi`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = await prisma.analysis.findUnique({
    where: { id: resolvedParams.slug }
  });

  if (!service) {
    notFound();
  }

  const popularServices = await prisma.analysis.findMany({
    where: {
      popular: true,
      NOT: { id: service.id }
    },
    take: 5
  });

  return (
    <main className={styles.main}>
      <div className={styles.breadcrumb}>
        <Link href="/search" className={styles.breadcrumbLink}>
          <ChevronLeft size={16} /> Tüm Analizler
        </Link>
      </div>

      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.categoryBadge}>{service.category}</div>
          <h1 className={styles.title}>{service.title}</h1>
          <div className={styles.meta}>
            <div className={styles.metaItem}><User size={18} /> <span>Teknik Uzman Kadro</span></div>
            <div className={styles.metaItem}><Calendar size={18} /> <span>ISO 17025 Akredite</span></div>
            <div className={styles.metaItem}><Clock size={18} /> <span>Hızlı Raporlama</span></div>
          </div>
        </header>

        <div className={styles.heroImageContainer}>
          <img 
            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop" 
            alt={service.title}
            className={styles.heroImage}
          />
        </div>

        <div className={styles.layout}>
          <div className={styles.bodyTextContainer}>
            <div className={styles.editorialFlow}>
              <p className={styles.lead}>{service.description}</p>
              
              <div className={styles.richText}>
                <p>
                  Uluslararası ticarette teknik engellerin aşılması ve ürün güvenliğinin kanıtlanması amacıyla laboratuvarımızda yürütülen bu test süreci, yasal mevzuatlara ve global standartlara tam uyum çerçevesinde raporlanmaktadır. 
                </p>
                
                <div className={styles.techDataSection}>
                  <div className={styles.techItem}>
                    <div className={styles.techIconWrapper}><Shield size={24} /></div>
                    <div className={styles.techLabel}>Referans Standart</div>
                    <div className={styles.techValue}>{service.standards || "İn-house Validasyon"}</div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.techIconWrapper}><Clock size={24} /></div>
                    <div className={styles.techLabel}>Analiz Süresi</div>
                    <div className={styles.techValue}>{service.turnaroundTime || "Spesifikasyona Bağlı"}</div>
                  </div>
                  <div className={styles.techItem}>
                    <div className={styles.techIconWrapper}><Beaker size={24} /></div>
                    <div className={styles.techLabel}>Numune İhtiyacı</div>
                    <div className={styles.techValue}>{service.sampleRequirement || "Ürün bazlı"}</div>
                  </div>
                </div>

                <h2>Analiz Metodolojisi ve Güvence</h2>
                <p>Modern cihaz parkurumuz (LC-MS/MS, ICP-MS, GC-MS vb.) ve alanında uzman analist kadromuz sayesinde ölçüm belirsizliği en aza indirilmiş, kesin ve güvenilir sonuçlar elde edilmektedir.</p>
                
                <div className={styles.highlightCard}>
                  <Award size={24} className={styles.awardIco} />
                  <p>Bu analiz parametresi, uluslararası kabul görmüş metotlar ve ISO 17025 kalite yönetim sistemi güvencesiyle sunulmaktadır.</p>
                </div>
                
                <blockquote>
                  "Doğru analiz, hatalı üretimin maliyetinden her zaman daha ekonomiktir."
                </blockquote>
              </div>

              <div className={styles.actionArea}>
                <h3>Analiz Talebi Oluşturun</h3>
                <p>Bu analiz için numune göndermek veya detaylı fiyat teklifi almak istiyorsanız sepetinize ekleyerek dijital talebinizi saniyeler içinde iletebilirsiniz.</p>
                <ClientAddButton service={service} />
              </div>

              <footer className={styles.articleFooter}>
                <div className={styles.share}>
                  <span>Paylaş:</span>
                  <button className={styles.shareBtn}><Share2 size={16} /></button>
                </div>
                <div className={styles.tags}>
                  {['Analiz', 'Laboratuvar', service.category].map(t => (
                    <span key={t} className={styles.tag}>#{t}</span>
                  ))}
                </div>
              </footer>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <div className={styles.cardIco}><Zap size={20} /></div>
              <h3>Hızlı Destek</h3>
              <p>Analiz süreçleri ve regülasyonlar hakkında teknik ekibimizden destek alın.</p>
              <button className={styles.sidebarCta}>Müşteri Temsilcisine Bağlan</button>
            </div>

            <div className={styles.popularCard}>
              <h3 className={styles.popularTitle}>Diğer Popüler Analizler</h3>
              <div className={styles.popularList}>
                {popularServices.map(pop => (
                  <Link href={`/analizler/${pop.id}`} key={pop.id} className={styles.popularItem}>
                    <span className={styles.popularIco}>🧪</span>
                    <span className={styles.popularName}>{pop.title}</span>
                    <ArrowRight size={14} className={styles.popularArr} />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}

