"use client";
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';
import styles from './blog.module.css';

const ALL_CATS = ['Tümü', 'Kozmetik', 'İlaç ve Hammadde', 'Tekstil ve Deri', 'Takviye Edici Gıda', 'Belgelendirme', 'Çevre ve Su', 'Ambalaj ve Plastik', 'Mikrobiyoloji'];
const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579154235602-3c2c2999d19b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582719471384-894fbb16e024?q=80&w=1200&auto=format&fit=crop',
];

const calculateReadingTime = (text: string) => {
  const wordsPerMinute = 200;
  const wordCount = text?.split(/\s+/).length || 0;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
  featured: boolean;
  coverImage?: string;
}

export default function BlogList({ blogs }: { blogs: BlogPost[] }) {
  const [activeCat, setActiveCat] = useState('Tümü');
  const [search, setSearch] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!blogs || blogs.length === 0) return <div>Yazı bulunamadı.</div>;

  // Find the manually selected featured post, or fallback to the latest one
  const featured = blogs.find(b => b.featured) || blogs[0];
  
  // Only hide the featured post from the grid if NO category/search filter is active
  // This prevents categories with only one post (the featured one) from appearing empty
  const isFiltered = activeCat !== 'Tümü' || search.trim() !== '';
  const displayBlogs = isFiltered ? blogs : blogs.filter(b => b.id !== featured.id);

  const filtered = displayBlogs.filter(b => {
    const matchCat = activeCat === 'Tümü' || b.category?.trim().toLowerCase() === activeCat.trim().toLowerCase();
    const matchSearch = !search || b.title.toLowerCase().includes(search.toLowerCase()) || b.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className={styles.main}>
      {/* ─── HERO: Featured Post ─── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.featuredLabel}>Öne Çıkan Yazı</span>
            <h1 className={styles.heroTitle}>{featured.title}</h1>
            <p className={styles.heroExcerpt}>{featured.excerpt}</p>
            <div className={styles.heroMeta}>
              <span className={styles.heroCat}>{featured.category}</span>
              <span className={styles.heroMetaItem}><Calendar size={15} /> {featured.date}</span>
              <span className={styles.heroMetaItem}><Clock size={15} /> {calculateReadingTime(featured.content)} dk okuma</span>
            </div>
            <Link href={`/blog/${featured.slug}`} className={styles.heroBtn}>
              Yazıyı Oku <ArrowRight size={18} />
            </Link>
          </div>
          <div className={styles.heroImg}>
            <img src={featured.coverImage || HERO_IMAGES[0]} alt={featured.title} />
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterInner}>
          <div>
            <h2 className={styles.newsletterTitle}>Haftalık bültenimize abone olun</h2>
            <p className={styles.newsletterSub}>Sektörel regülasyon güncellemeleri ve analiz rehberleri her hafta gelen kutunuzda.</p>
          </div>
          {subscribed ? (
            <div className={styles.subscribedMsg}>✓ Abone oldunuz! Teşekkürler.</div>
          ) : (
            <form className={styles.newsletterForm} onSubmit={async e => { 
              e.preventDefault(); 
              try {
                const res = await fetch('/api/newsletter', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email })
                });
                if (res.ok) setSubscribed(true);
                else alert('Bir hata oluştu. Lütfen tekrar deneyin.');
              } catch (err) {
                alert('Bağlantı hatası.');
              }
            }}>
              <input type="email" placeholder="E-posta adresiniz" value={email} onChange={e => setEmail(e.target.value)} required className={styles.newsletterInput} />
              <button type="submit" className={styles.newsletterBtn}>Abone Ol</button>
            </form>
          )}
        </div>
      </section>

      {/* ─── FILTER + GRID ─── */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.filterRow}>
            <h2 className={styles.gridTitle}>Son Yazılar</h2>
            <div className={styles.searchWrap}>
              <Search size={16} />
              <input placeholder="Yazılarda ara..." value={search} onChange={e => setSearch(e.target.value)} className={styles.searchInput} />
            </div>
          </div>

          <div className={styles.cats}>
            {ALL_CATS.map(c => (
              <button key={c} onClick={() => setActiveCat(c)} className={`${styles.catBtn} ${activeCat === c ? styles.catBtnActive : ''}`}>
                {c}
              </button>
            ))}
          </div>

          <div className={styles.blogGrid}>
            {filtered.map((blog, i) => (
              <Link href={`/blog/${blog.slug}`} key={blog.id} className={styles.blogCard}>
                <div className={styles.cardImg}>
                  <img src={blog.coverImage || HERO_IMAGES[i % HERO_IMAGES.length]} alt={blog.title} />
                  <span className={styles.cardCat}>{blog.category}</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span><Calendar size={13} /> {blog.date}</span>
                    <span><Clock size={13} /> {calculateReadingTime(blog.content)} dk</span>
                  </div>
                  <h3 className={styles.cardTitle}>{blog.title}</h3>
                  <p className={styles.cardExc}>{blog.excerpt}</p>
                  <span className={styles.cardRead}>Devamını Oku <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className={styles.empty}>
              <p>Bu kategoride yazı bulunamadı.</p>
              <button onClick={() => { setActiveCat('Tümü'); setSearch(''); }} className={styles.emptyBtn}>Tümünü Göster</button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
