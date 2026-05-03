"use client";
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, FileText, ChevronRight, Star, Phone, Mail, ChevronDown } from 'lucide-react';
import { Sector } from '@/data/sectors';
import { Service } from '@/data/mockData';
import { useState } from 'react';
import styles from './sector.module.css';

interface Props {
  sector: Sector;
  sectorServices: Service[];
  relatedSectors: Sector[];
}

export default function SectorPageContent({ sector, sectorServices, relatedSectors }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className={styles.main}>
      {/* ─── HERO ─── */}
      <section className={styles.hero} style={{ background: `linear-gradient(135deg, ${sector.color} 0%, #fff 60%)` }}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <Link href="/" className={styles.breadcrumb}>
              Ana Sayfa <ChevronRight size={14} /> Sektörler <ChevronRight size={14} /> {sector.shortName}
            </Link>
            <div className={styles.heroBadge} style={{ color: sector.accentColor, background: `${sector.color}` }}>
              <span>{sector.icon}</span> {sector.shortName} Analizleri
            </div>
            <h1 className={styles.heroH1}>{sector.heroTitle}</h1>
            <p className={styles.heroSub}>{sector.heroSubtitle}</p>
            <div className={styles.heroCtas}>
              <a href="https://wa.me/905401068640" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary} style={{ background: sector.accentColor }}>
                <Phone size={18} /> Hemen Teklif Al
              </a>
              <a href="mailto:info@rootlab.tr" className={styles.ctaSecondary}>
                <Mail size={18} /> E-posta Gönder
              </a>
            </div>
            <div className={styles.heroStats}>
              {sector.stats.map(s => (
                <div key={s.label} className={styles.heroStat}>
                  <span className={styles.heroStatVal} style={{ color: sector.accentColor }}>{s.value}</span>
                  <span className={styles.heroStatLbl}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroImgWrap}>
              <img src={sector.image} alt={sector.name} className={styles.heroImg} />
              <div className={styles.heroBadgeFloat} style={{ borderColor: sector.accentColor }}>
                <CheckCircle2 size={16} style={{ color: sector.accentColor }} />
                <span>ISO 17025 Akredite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DESCRIPTION ─── */}
      <section className={styles.descSection}>
        <div className={styles.container}>
          <div className={styles.descGrid}>
            <div>
              <p className={styles.descEyebrow} style={{ color: sector.accentColor }}>Hakkında</p>
              <h2 className={styles.descH2}>Neden {sector.shortName} Analizi?</h2>
              <p className={styles.descText}>{sector.description}</p>
              <div className={styles.certList}>
                {sector.certifications.map(c => (
                  <div key={c} className={styles.certItem}>
                    <CheckCircle2 size={18} style={{ color: sector.accentColor, flexShrink: 0 }} />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.regBox}>
              <h3 className={styles.regTitle}>Yasal Çerçeve</h3>
              <p className={styles.regSub}>Bu sektörde geçerli başlıca mevzuat:</p>
              <ul className={styles.regList}>
                {sector.regulations.map(r => (
                  <li key={r} className={styles.regItem}>
                    <FileText size={15} style={{ color: sector.accentColor, flexShrink: 0 }} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KEY TESTS ─── */}
      <section className={styles.testsSection}>
        <div className={styles.container}>
          <p className={styles.secEyebrow} style={{ color: sector.accentColor }}>Analizlerimiz</p>
          <h2 className={styles.secH2}>Öne Çıkan Testler</h2>
          <p className={styles.secSub}>Sektörünüzün en sık ihtiyaç duyduğu analizler akredite metotlarla gerçekleştirilmektedir.</p>
          <div className={styles.testsGrid}>
            {sector.keyTests.map((t, i) => (
              <div key={i} className={styles.testCard}>
                <div className={styles.testCardTop}>
                  <div className={styles.testNum} style={{ background: sector.accentColor }}>0{i + 1}</div>
                  <div className={styles.testMeta}>
                    <span className={styles.testTime}><Clock size={13} /> {t.time}</span>
                    <span className={styles.testStd}>{t.standard}</span>
                  </div>
                </div>
                <h3 className={styles.testTitle}>{t.title}</h3>
                <p className={styles.testDesc}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALL SERVICES IN SECTOR ─── */}
      {sectorServices.length > 0 && (
        <section className={styles.allTestsSection}>
          <div className={styles.container}>
            <p className={styles.secEyebrow} style={{ color: sector.accentColor }}>Tam Liste</p>
            <h2 className={styles.secH2}>Tüm {sector.shortName} Analizleri</h2>
            <div className={styles.allTestsGrid}>
              {sectorServices.map(s => (
                <Link href={`/analizler/${s.slug || s.id}`} key={s.id} className={styles.allTestCard}>
                  <div className={styles.allTestHeader}>
                    <h3 className={styles.allTestTitle}>{s.title}</h3>
                    {s.popular && <span className={styles.popularBadge}><Star size={11} /> Popüler</span>}
                  </div>
                  <div className={styles.allTestMeta}>
                    {s.turnaroundTime && <span><Clock size={13} /> {s.turnaroundTime}</span>}
                    {s.standards && <span><FileText size={13} /> {s.standards}</span>}
                  </div>
                  <ArrowRight size={16} className={styles.allTestArr} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── FAQ ─── */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqGrid}>
            <div>
              <p className={styles.secEyebrow} style={{ color: sector.accentColor }}>SSS</p>
              <h2 className={styles.secH2}>Sıkça Sorulan Sorular</h2>
              <p className={styles.secSub}>En çok merak edilenlere yanıt veriyoruz.</p>
            </div>
            <div className={styles.faqList}>
              {sector.faq.map((item, i) => (
                <div key={i} className={styles.faqItem}>
                  <button
                    className={styles.faqQ}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={openFaq === i ? { color: sector.accentColor } : {}}
                  >
                    {item.q}
                    <ChevronDown size={18} className={openFaq === i ? styles.faqChevronOpen : styles.faqChevron} />
                  </button>
                  {openFaq === i && <p className={styles.faqA}>{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className={styles.ctaBand} style={{ background: sector.accentColor }}>
        <div className={styles.container}>
          <div className={styles.ctaBandInner}>
            <div>
              <h2 className={styles.ctaBandH2}>{sector.shortName} analizleri için teklif alın</h2>
              <p className={styles.ctaBandP}>Uzman ekibimiz 24 saat içinde size dönecektir.</p>
            </div>
            <div className={styles.ctaBandBtns}>
              <a href="https://wa.me/905401068640" target="_blank" rel="noopener noreferrer" className={styles.ctaBandBtnWhite}>
                <Phone size={18} /> Hemen Ara
              </a>
              <Link href="/blog" className={styles.ctaBandBtnOutline}>Blog & Rehberler</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED SECTORS ─── */}
      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <h2 className={styles.secH2}>Diğer Sektörler</h2>
          <div className={styles.relatedGrid}>
            {relatedSectors.map(s => (
              <Link href={`/sektorel/${s.slug}`} key={s.slug} className={styles.relatedCard}>
                <span className={styles.relatedIcon}>{s.icon}</span>
                <div>
                  <h3 className={styles.relatedName}>{s.name}</h3>
                  <p className={styles.relatedDesc}>{s.heroSubtitle.substring(0, 60)}...</p>
                </div>
                <ArrowRight size={18} className={styles.relatedArr} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
