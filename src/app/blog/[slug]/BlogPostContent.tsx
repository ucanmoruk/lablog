"use client";
import { ChevronLeft, Calendar, User, Clock, Award, Share2, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './blog.module.css';

export default function BlogPostContent({ blog, related }: { blog: any; related: any[] }) {
  return (
    <main className={styles.main}>
      <div className={styles.breadcrumb}>
        <Link href="/blog" className={styles.breadcrumbLink}>
          <ChevronLeft size={16} /> Laboratuvar Günlüğü
        </Link>
      </div>

      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.categoryBadge}>{blog.category}</div>
          <h1 className={styles.title}>{blog.title}</h1>
          <div className={styles.meta}>
            <div className={styles.metaItem}><User size={18} /> <span>{blog.author}</span></div>
            <div className={styles.metaItem}><Calendar size={18} /> <span>{blog.date}</span></div>
            <div className={styles.metaItem}><Clock size={18} /> <span>6 dk okuma</span></div>
          </div>
        </header>

        <div className={styles.heroImageContainer}>
          <img 
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e024?q=80&w=2000&auto=format&fit=crop" 
            alt={blog.title}
            className={styles.heroImage}
          />
        </div>

        <div className={styles.layout}>
          <div className={styles.bodyTextContainer}>
            <p className={styles.lead}>{blog.excerpt}</p>
            
            <div className={styles.richText}>
              {blog.content.split('\n').map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}
              
              <h2>Neden Bu Analiz Önemlidir?</h2>
              <p>Uluslararası standartların sürekli güncellendiği bu dönemde, firmaların yasal yaptırımlardan kaçınması ve marka itibarını koruması için akredite laboratuvar hizmetleri vazgeçilmezdir.</p>
              
              <div className={styles.highlightCard}>
                <Award size={24} className={styles.awardIco} />
                <p>Laboratuvarımız, en hassas cihaz parkuru ve ISO 17025 akreditasyonu ile bu ihtiyacınızı karşılar.</p>
              </div>
              
              <blockquote>
                "Kalite kontrol sadece bir maliyet değil, ürününüzün pazardaki geleceğine yapılan en büyük yatırımdır."
              </blockquote>
              
              <h2>Sonuç ve Gelecek Projeksiyonu</h2>
              <p>Yenilikçi teknolojiler ve uzman kadromuzla, test süreçlerinizi hızlandırıyor ve dijital LIMS sistemimizle anlık takip imkanı sunuyoruz.</p>
            </div>

            <footer className={styles.articleFooter}>
              <div className={styles.share}>
                <span>Paylaş:</span>
                <button className={styles.shareBtn} onClick={() => alert("Paylaşım menüsü")}>
                  <Share2 size={16} />
                </button>
              </div>
              <div className={styles.tags}>
                {['Analiz', 'Mevzuat', blog.category].map(t => (
                  <span key={t} className={styles.tag}>#{t}</span>
                ))}
              </div>
            </footer>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <div className={styles.cardIco}><Zap size={20} /></div>
              <h3>Hızlı Teklif Al</h3>
              <p>Bu yazıdaki analizler hakkında detaylı bilgi ve fiyat teklifi alın.</p>
              <button className={styles.sidebarCta} onClick={() => alert("Hızlı teklif formu açılıyor...")}>
                Hemen Teklif İste
              </button>
            </div>

            <div className={styles.popularCard}>
              <h3 className={styles.popularTitle}>En Çok İstenen Analizler</h3>
              <div className={styles.popularList}>
                {[
                  { n: 'Kozmetik Mikrobiyoloji', i: '🧪' },
                  { n: 'Ağır Metal Analizi', i: '⚗️' },
                  { n: 'RoHS / REACH Uyumu', i: '⚡' },
                  { n: 'Tekstil Ekolojik Testleri', i: '🧵' },
                  { n: 'Gıda Pestisit Taraması', i: '💊' }
                ].map(item => (
                  <div key={item.n} className={styles.popularItem} onClick={() => alert(`${item.n} için teklif sayfasına yönlendiriliyorsunuz...`)}>
                    <span className={styles.popularIco}>{item.i}</span>
                    <span className={styles.popularName}>{item.n}</span>
                    <ChevronLeft size={14} className={styles.popularArr} />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className={styles.relatedSection}>
        <div className={styles.relatedInner}>
          <h2 className={styles.relatedTitle}>İlginizi Çekebilir</h2>
          <div className={styles.relatedGrid}>
            {related.map(r => (
              <Link href={`/blog/${r.id}`} key={r.id} className={styles.relatedCard}>
                <div className={styles.relatedThumb}>
                   <img src="https://images.unsplash.com/photo-1579154235602-3c2c2999d19b?q=80&w=800&auto=format&fit=crop" alt={r.title} />
                </div>
                <div className={styles.relatedContent}>
                  <span className={styles.relatedCategory}>{r.category}</span>
                  <h3>{r.title}</h3>
                  <div className={styles.relatedMore}>Okumaya devam et <ArrowRight size={14} /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
