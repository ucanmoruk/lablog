"use client";
import { ChevronLeft, Calendar, User, Clock, Award, Share2, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './blog.module.css';

const calculateReadingTime = (text: string | null | undefined) => {
  if (!text) return 1;
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};

export default function BlogPostContent({ blog, related }: { blog: any; related: any[] }) {
  // --- TOC Logic ---
  const generateTOC = (html: string) => {
    if (!html || html.length < 500) return { toc: [], processedHtml: html };

    const toc: { id: string; text: string; level: number }[] = [];
    let counter = 0;

    // Replace H2 and H3 with version containing IDs and collect TOC items
    const processedHtml = html.replace(/<(h[23])>(.*?)<\/\1>/gi, (match, tag, text) => {
      const id = `heading-${counter++}`;
      const plainText = text.replace(/<[^>]*>?/gm, ''); // Strip any HTML from header text
      toc.push({ id, text: plainText, level: parseInt(tag[1]) });
      return `<${tag} id="${id}">${text}</${tag}>`;
    });

    return { toc, processedHtml };
  };

  const { toc, processedHtml } = generateTOC(blog.content);

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
            <div className={styles.metaItem}><Clock size={18} /> <span>{calculateReadingTime(blog.content)} dk okuma</span></div>
          </div>
        </header>

        <div className={styles.heroImageContainer}>
          <img 
            src={blog.coverImage || "https://images.unsplash.com/photo-1582719471384-894fbb16e024?q=80&w=2000&auto=format&fit=crop"} 
            alt={blog.title}
            className={styles.heroImage}
          />
        </div>

        <div className={styles.layout}>
          <div className={styles.bodyTextContainer}>
            {blog.excerpt && (
              <div 
                className={styles.lead}
                dangerouslySetInnerHTML={{ __html: blog.excerpt }}
              />
            )}

            {toc.length > 0 && (
              <div className={styles.tocContainer}>
                <h4 className={styles.tocTitle}>İçindekiler</h4>
                <ul className={styles.tocList}>
                  {toc.map(item => (
                    <li key={item.id} className={styles.tocItem} style={{ paddingLeft: `${(item.level - 2) * 16}px` }}>
                      <a href={`#${item.id}`}>{item.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div 
              className={styles.richText}
              dangerouslySetInnerHTML={{ __html: processedHtml.includes('<') ? processedHtml : processedHtml.replace(/\n/g, '<br/>') }}
            />

            <footer className={styles.articleFooter}>
              <div className={styles.share}>
                <span>Paylaş:</span>
                <button className={styles.shareBtn} onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: blog.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link kopyalandı!");
                  }
                }}>
                  <Share2 size={16} />
                </button>
              </div>
              <div className={styles.tags}>
                {(blog.keywords || blog.category || '').split(',').map((t: string) => (
                  <span key={t} className={styles.tag}>#{t.trim()}</span>
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
              <Link href={`/blog/${r.slug}`} key={r.id} className={styles.relatedCard}>
                <div className={styles.relatedThumb}>
                   <img src={r.coverImage || "https://images.unsplash.com/photo-1579154235602-3c2c2999d19b?q=80&w=800&auto=format&fit=crop"} alt={r.title} />
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
