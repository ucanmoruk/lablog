import styles from "./page.module.css";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import HomeClient from "./HomeClient";

const TRUST = ["ISO 17025 Akredite Laboratuvar","24 Saatte Teklif Garantisi","Uzman Kimyager Ekibi","Türkiye Geneli Numune Kabulü","Akredite Rapor & Belgelendirme"];

const SECTORS = [
  { e:"💄", n:"Kozmetik & Kişisel Bakım", d:"Mikrobiyoloji, ağır metal, stabilite, güvenlik değerlendirmesi, PIF dosyası", q:"kozmetik" },
  { e:"🧪", n:"İlaç & Hammadde", d:"Saflık, kimlik testi, safsızlık profili, mikrobiyoloji, stabilite çalışması", q:"ilaç" },
  { e:"🧵", n:"Tekstil & Deri", d:"REACH, pH, azo boyar madde, formaldehit, renk haslığı, TAREKS testleri", q:"tekstil" },
  { e:"⚡", n:"RoHS / TAREKS / REACH", d:"6 kısıtlı madde, SVHC tarama, PFAS analizi, ağır metal, ihracat uyumu", q:"rohs" },
  { e:"💊", n:"Takviye Edici Gıda", d:"Etiket doğrulama, aktif madde tayini, mikrobiyoloji, ağır metal", q:"gıda" },
  { e:"👜", n:"Deri & Aksesuar", d:"Krom VI, ftalat, REACH uyumu, boyar madde, TAREKS deri testleri", q:"deri" },
  { e:"☣️", n:"SVHC & Kimyasal Uyum", d:"SVHC liste taraması, yüksek endişe uyandıran maddeler, ECHA uyum raporu", q:"svhc" },
  { e:"📦", n:"Ambalaj & Plastik", d:"Gıda teması uygunluğu, plastik göçü", q:"ambalaj" },
];

const FEATURES = [
  { e:"📋", t:"Belgelendirme", d:"RoHS belgesi, CE uygunluk, SVHC bildirimi, REACH kaydı. İhracattan önce tek adımda belgelerinizi tamamlayın.", accent:false },
  { e:"🎯", t:"Mevzuat Danışmanlığı", d:"Kozmetik PIF, ilaç ruhsat, TAREKS ön hazırlık. Uzman kimyager ekibimizle doğru adımı atın.", accent:false },
  { e:"⚡", t:"24 Saatte Teklif", d:"Ne analiz ettirmek istediğinizi bildirin. Uzman ekibimiz en geç 24 saat içinde detaylı ve fiyatlı teklifinizi iletsin.", accent:true },
  { e:"🔬", t:"Metot Geliştirme & Validasyon", d:"Özel ürünleriniz için metot geliştirilmesi, validasyon çalışması ve aplikasyon notu hazırlanması.", accent:false },
];

const STEPS = [
  { n:"1", t:"Arayın", d:"İhtiyacınızı yazın ya da sektörünüzü seçin. Size özel hizmetleri listeleyelim." },
  { n:"2", t:"Teklif Alın", d:"Bilgilerinizi bırakın. 24 saat içinde detaylı ve fiyatlı teklif e-postanıza gelsin." },
  { n:"3", t:"Numune Gönderin", d:"Anlaştıktan sonra numunenizi adresimize gönderin ya da kurye ile teslim edin." },
  { n:"4", t:"Raporu Alın", d:"Akredite test raporu dijital olarak teslim edilir. Gerekirse ıslak imzalı nüsha." },
];

export const metadata = {
  title: 'LabLog | Profesyonel Laboratuvar Analiz ve Belgelendirme Çözümleri',
  description: 'Kozmetik, ilaç, tekstil, gıda ve elektronik sektörlerine yönelik ISO 17025 akredite laboratuvar analizleri, RoHS, REACH ve TAREKS danışmanlığı.',
};

export default async function Home() {
  const latestBlogs = await prisma.blogPost.findMany({
    orderBy: { date: 'desc' },
    take: 3
  });

  return (
    <main className={styles.root}>
      <HomeClient>
        {/* ══ 2. TRUST BAR ═══════════════════════════════════ */}
        <div className={`${styles.trust} ${styles.reveal}`}>
            {TRUST.map(t => (
            <div key={t} className={styles.tItem}>
                <div className={styles.tDot} />
                {t}
            </div>
            ))}
        </div>

        {/* ══ 3. SECTORS ════════════════════════════════════ */}
        <section className={styles.sec} id="sektorler">
            <div className={`${styles.secTop} ${styles.reveal}`}>
            <div className={styles.secEyebrow}>Sektörler</div>
            <h2 className={styles.secH}>Her sektör için<br/>doğru analiz.</h2>
            <p className={styles.secP}>Kozmetikten ilaçlara, tekstilden elektroniğe. Akredite test ve belgelendirme hizmetleri tek çatı altında.</p>
            </div>
            <div className={`${styles.sectorsGrid} ${styles.reveal}`}>
            {SECTORS.map(s => (
                <div key={s.n} className={styles.sTile} data-modal-svc={s.n + " Analizi"}>
                <span className={styles.sEm}>{s.e}</span>
                <div className={styles.sName}>{s.n}</div>
                <div className={styles.sDesc}>{s.d}</div>
                <div className={styles.sArr}>Teklif al →</div>
                </div>
            ))}
            </div>
        </section>

        <div className={styles.divider} />

        {/* ══ 4. FEATURE CARDS ══════════════════════════════ */}
        <section className={styles.sec} id="hizmetler">
            <div className={`${styles.secTop} ${styles.reveal}`}>
            <div className={styles.secEyebrow}>Öne Çıkan Hizmetler</div>
            <h2 className={styles.secH}>Test'ten ötesi.</h2>
            <p className={styles.secP}>Analiz raporundan öteye geçin. Belgelendirme ve danışmanlık hizmetleriyle pazara hazır olun.</p>
            </div>
            <div className={styles.featureGrid}>
            {FEATURES.map((f,i) => (
                <div key={f.t} className={`${styles.fCard} ${f.accent ? styles.fCardAccent : ""} ${styles.reveal}`}
                style={{ transitionDelay: `${i*0.08}s` }}
                data-modal-svc={f.t}>
                <div className={styles.fIcoWrap}>{f.e}</div>
                <div className={styles.fTitle}>{f.t}</div>
                <div className={styles.fSub}>{f.d}</div>
                <div className={styles.fLink}>Detay ve teklif →</div>
                </div>
            ))}
            </div>
        </section>

        {/* ══ 5. HOW IT WORKS ════════════════════════════════ */}
        <div className={styles.howBg} id="nasil">
            <div className={styles.howInner}>
            <div className={`${styles.secTop} ${styles.reveal}`}>
                <div className={styles.secEyebrow}>Süreç</div>
                <h2 className={styles.secH}>Dört adımda sonuç.</h2>
            </div>
            <div className={styles.stepsGrid}>
                {STEPS.map((s,i) => (
                <div key={s.n} className={`${styles.step} ${styles.reveal}`} style={{ transitionDelay:`${i*0.08}s` }}>
                    <div className={styles.stepN}>{s.n}</div>
                    <div className={styles.stepT}>{s.t}</div>
                    <div className={styles.stepD}>{s.d}</div>
                </div>
                ))}
            </div>
            </div>
        </div>

        {/* ══ 6. BLOG ════════════════════════════════════════ */}
        <section className={styles.sec} id="blog">
            <div className={`${styles.secTop} ${styles.reveal}`}>
            <div className={styles.secEyebrow}>Rehberler & Bilgi</div>
            <h2 className={styles.secH}>Sektörünüzü anlayın.</h2>
            <p className={styles.secP}>Test süreçleri, mevzuat rehberleri, standart değişiklikleri. Karar vermeden önce okuyun.</p>
            </div>
            <div className={`${styles.blogGrid} ${styles.reveal}`}>
            {latestBlogs.map((b,i) => (
                <Link href={`/blog/${b.slug}`} key={b.id} className={styles.bCard}>
                <div className={styles.bTag}>{b.category}</div>
                <div className={styles.bTitle}>{b.title}</div>
                <div className={styles.bExc}>{b.excerpt?.slice(0,120)}…</div>
                <div className={styles.bRead}>Devamını oku →</div>
                </Link>
            ))}
            </div>
        </section>

        {/* ══ 7. CTA ═════════════════════════════════════════ */}
        <div className={`${styles.ctaSection} ${styles.reveal}`}>
            <h2>Hemen başlayalım.</h2>
            <p>24 saatte fiyatlı teklif. Uzman kimyager ekibi. ISO 17025 akredite.</p>
            <div className={styles.ctaBtns}>
            <button className={styles.btnWhite} data-modal-svc="Genel Analiz Talebi">Teklif Al</button>
            <a href="https://wa.me/902120000000" className={styles.btnOutline} target="_blank" rel="noreferrer">WhatsApp ile Yaz</a>
            </div>
        </div>
      </HomeClient>
    </main>
  );
}
