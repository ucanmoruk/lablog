import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
export const dynamic = 'force-dynamic';
import styles from './service.module.css';
import ClientAddButton from './ClientAddButton';
import { Shield, Clock, Beaker, ArrowRight, ChevronLeft, User, Calendar, Award, Share2, Zap } from 'lucide-react';
import Link from 'next/link';


import { services as mockServices } from '@/data/mockData';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let service: any = null;
  
  try {
    // Önce ID ile dene (en güvenli yol)
    service = await prisma.analysis.findUnique({
      where: { id: resolvedParams.slug }
    });
    
    // ID ile bulunamadıysa SLUG ile dene (yeni şema gerektirir)
    if (!service) {
      service = await prisma.analysis.findFirst({
        where: { slug: resolvedParams.slug }
      });
    }
    
    if (!service) {
      service = mockServices.find(s => s.id === resolvedParams.slug || s.slug === resolvedParams.slug);
    }
  } catch (err) {
    service = mockServices.find(s => s.id === resolvedParams.slug || s.slug === resolvedParams.slug);
  }

  if (!service) return { title: 'Bulunamadı' };
  
  return {
    title: `${service.title} | Laboratuvar Analizi`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let service: any = null;
  let popularServices: any[] = [];

  try {
    // Önce ID ile dene
    service = await prisma.analysis.findUnique({
      where: { id: resolvedParams.slug }
    });

    // Bulunamazsa slug ile dene
    if (!service) {
      service = await prisma.analysis.findFirst({
        where: { slug: resolvedParams.slug }
      });
    }

    if (!service) {
      service = mockServices.find(s => s.id === resolvedParams.slug || s.slug === resolvedParams.slug);
    }

    popularServices = await prisma.analysis.findMany({
      where: {
        category: service?.category || undefined,
        popular: true,
        NOT: { id: service?.id || resolvedParams.slug }
      },
      take: 5
    });

    if (popularServices.length === 0) {
      popularServices = mockServices.filter(s => 
        s.category === service?.category && 
        s.popular && 
        s.id !== (service?.id || resolvedParams.slug)
      ).slice(0, 5);
    }
    
    // Eğer hala boşsa genel popülerleri getir
    if (popularServices.length === 0) {
        popularServices = mockServices.filter(s => s.popular && s.id !== (service?.id || resolvedParams.slug)).slice(0, 5);
    }
  } catch (error) {
    console.warn("Analysis DB error, falling back to mock:", error);
    service = mockServices.find(s => s.id === resolvedParams.slug || s.slug === resolvedParams.slug);
    popularServices = mockServices.filter(s => s.category === service?.category && s.popular && s.id !== (service?.id || resolvedParams.slug)).slice(0, 5);
  }

  // Blogları çek
  let latestBlogs = [];
  try {
    latestBlogs = await prisma.blogPost.findMany({
        orderBy: { date: 'desc' },
        take: 3
    });
    if (latestBlogs.length === 0) {
        latestBlogs = require('@/data/mockData').blogs.slice(0, 3);
    }
  } catch (err) {
    latestBlogs = require('@/data/mockData').blogs.slice(0, 3);
  }

  if (!service) {
    notFound();
  }

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
                {/* Prisma'dan gelen null değerlerini Service tipine (undefined) dönüştürerek geçiyoruz */}
                <ClientAddButton service={{
                  ...service,
                  standards: service.standards ?? undefined,
                  turnaroundTime: service.turnaroundTime ?? undefined,
                  sampleRequirement: service.sampleRequirement ?? undefined,
                }} />
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
              <h3 className={styles.popularTitle}>En Popüler Analizler</h3>
              <div className={styles.popularList}>
                {popularServices.map(pop => (
                  <Link href={`/analizler/${pop.slug || pop.id}`} key={pop.id} className={styles.popularItem}>
                    <span className={styles.popularIco}>🧪</span>
                    <span className={styles.popularName}>{pop.title}</span>
                    <ArrowRight size={14} className={styles.popularArr} />
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.blogCard}>
              <h3 className={styles.popularTitle}>Güncel Bloglar</h3>
              <div className={styles.blogList}>
                {latestBlogs.map((b: any) => (
                  <Link href={`/blog/${b.slug || b.id}`} key={b.id} className={styles.blogItem}>
                    <div className={styles.blogItemInfo}>
                        <span className={styles.blogItemCat}>{b.category}</span>
                        <h4 className={styles.blogItemTitle}>{b.title}</h4>
                    </div>
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

