"use client";
import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./faq.module.css";

const CATEGORIES = [
  { id: "genel", label: "Genel" },
  { id: "surecler", label: "Süreçler" },
  { id: "teknik", label: "Teknik" },
  { id: "fiyat", label: "Fiyatlandırma" },
];

const FAQS: { id: string; q: string; a: string; cat: string }[] = [
  // Genel
  {
    id: "g1",
    cat: "genel",
    q: "LabÇözüm Merkezi nedir?",
    a: "LabÇözüm Merkezi, TÜRKAK tarafından ISO/IEC 17025 kapsamında akredite edilmiş bir laboratuvar hizmetleri platformudur. Kozmetik, ilaç, gıda, tekstil, elektronik ve daha pek çok sektöre yönelik test, analiz, belgelendirme ve mevzuat danışmanlığı hizmetleri sunmaktayız.",
  },
  {
    id: "g2",
    cat: "genel",
    q: "ISO 17025 akreditasyonu ne anlama gelir?",
    a: "ISO/IEC 17025, test ve kalibrasyon laboratuvarlarının yetkinliğini kanıtlayan uluslararası standarttır. Bu akreditasyon; teknik yeterliliğimizin, ölçüm güvenilirliğimizin ve kalite yönetim sistemimizin bağımsız bir kuruluş tarafından doğrulandığı anlamına gelir. Raporlarımız uluslararası geçerliliğe sahiptir.",
  },
  {
    id: "g3",
    cat: "genel",
    q: "Hangi sektörlere hizmet veriyorsunuz?",
    a: "Kozmetik & Kişisel Bakım, İlaç & Hammadde, Gıda & Takviye Edici Gıda, Tekstil & Deri, RoHS/TAREKS/REACH kapsamı elektronik & oyuncak, Ambalaj & Plastik ve Çevre & Su sektörlerine hizmet vermekteyiz. 1500'den fazla akredite parametre kapsamımız mevcuttur.",
  },
  {
    id: "g4",
    cat: "genel",
    q: "Laboratuvarınız nerede?",
    a: "Merkez laboratuvarımız İstanbul'da yer almaktadır. Türkiye'nin her noktasından numune kabulü yapmaktayız; numunelerinizi kargo ile gönderebilir ya da kurye ile teslim edebilirsiniz. Ayrıca bazı sektörler için yerinde numune alma hizmeti de sunulmaktadır.",
  },
  // Süreçler
  {
    id: "s1",
    cat: "surecler",
    q: "Teklif almak için ne yapmalıyım?",
    a: "Ana sayfadaki arama kutusuna analiz etmek istediğiniz ürünü ya da testi yazarak ilgili hizmetleri bulabilir, ardından 'Teklif Al' butonuna tıklayabilirsiniz. Alternatif olarak bu sayfanın altındaki iletişim formunu doldurabilir ya da bizi doğrudan arayabilirsiniz. En geç 24 saat içinde detaylı ve fiyatlı teklifiniz e-posta adresinize ulaşır.",
  },
  {
    id: "s2",
    cat: "surecler",
    q: "Numunemi nasıl gönderebilirim?",
    a: "Teklifiniz onaylandıktan sonra size numune gönderim talimatlarını içeren bir e-posta iletilir. Numuneleri herhangi bir kargo şirketiyle adresimize gönderebilirsiniz. Hassas, patlayıcı veya kontrollü maddeler için özel taşıma gereksinimleri hakkında sizi önceden bilgilendireceğiz.",
  },
  {
    id: "s3",
    cat: "surecler",
    q: "Analiz raporum ne zaman hazır olur?",
    a: "Analiz süreleri teste göre değişmektedir: Basit kimyasal testler 2-3 iş günü, mikrobiyolojik analizler 5-7 iş günü, stabilite çalışmaları ise 28 gün ve üzeri sürebilmektedir. Teklifinizde tahmini süre belirtilir. Acil durumlarda ekspres analiz hizmeti talep edebilirsiniz.",
  },
  {
    id: "s4",
    cat: "surecler",
    q: "Raporumu nasıl alacağım?",
    a: "Raporunuz tamamlandığında e-posta ile dijital olarak iletilir. Talep etmeniz halinde, müşteri panelinden de indirebilirsiniz. Islak imzalı ve mühürlü baskılı rapor ihtiyacınız varsa bunu teklif aşamasında belirtmeniz yeterlidir; ek bir ücret karşılığında kargoya verilir.",
  },
  // Teknik
  {
    id: "t1",
    cat: "teknik",
    q: "Hangi metodolojileri kullanıyorsunuz?",
    a: "Uluslararası kabul görmüş standartları esas alıyoruz: ISO, EN, ASTM, USP, EP, TSE ve sektöre özgü mevzuat metodları (örneğin kozmetik için EC Regulation 1223/2009, tekstil için EN 14362, RoHS için IEC 62321). Akredite olmayan parametreler için valide edilmiş iç metotlarımız da mevcuttur.",
  },
  {
    id: "t2",
    cat: "teknik",
    q: "Ne kadar numune göndermem gerekiyor?",
    a: "Minimum numune miktarları analize göre değişmektedir. Genel olarak katı maddeler için 50–100 g, sıvılar için 100–200 mL yeterlidir. Birden fazla test yaptıracaksanız daha fazla miktara ihtiyaç duyulabilir. Kesin miktarı teklifinizde veya ön görüşmede netleştireceğiz.",
  },
  {
    id: "t3",
    cat: "teknik",
    q: "REACH/SVHC taramasını hangi liste versiyonuyla yapıyorsunuz?",
    a: "ECHA'nın (Avrupa Kimyasallar Ajansı) yayımladığı güncel SVHC Aday Listesini kullanmaktayız. ECHA her 6 ayda bir listeyi güncellediğinden, analizlerinizin tarihindeki geçerli listeye göre tarama yapılır ve raporunuzda hangi liste versiyonu kullanıldığı belirtilir.",
  },
  {
    id: "t4",
    cat: "teknik",
    q: "Kozmetik Challenge Testi nedir ve ne zaman gereklidir?",
    a: "Challenge Testi (ISO 11930), kozmetik ürünlerin içindeki koruyucu sisteminin mikroorganizmalara karşı etkinliğini ölçen bir testtir. Türkiye'de ve AB'de piyasaya sürülecek kozmetik ürünler için zorunlu olan Kozmetik Güvenlik Raporunun (KGR / PIF) temel bileşenlerinden biridir.",
  },
  // Fiyatlandırma
  {
    id: "f1",
    cat: "fiyat",
    q: "Fiyatlar neden listede belirtilmiyor?",
    a: "Her müşterinin numune türü, test kapsamı, rapor formatı ve teslimat süresi farklıdır. Bu nedenle sabit bir liste fiyatı yerine size özel teklif hazırlıyoruz. Bu yaklaşım hem gereksiz maliyetleri ortadan kaldırır hem de tam ihtiyacınıza yönelik çözüm sunar.",
  },
  {
    id: "f2",
    cat: "fiyat",
    q: "Paket fiyatlandırma mevcut mu?",
    a: "Evet. Birden fazla test yaptıracak ya da düzenli analiz ihtiyacı olan müşterilerimiz için paket teklifleri sunmaktayız. Kurumsal müşteriler, hacme göre özel fiyatlandırma ve öncelikli analiz hizmetinden yararlanabilir.",
  },
  {
    id: "f3",
    cat: "fiyat",
    q: "Teklifi onayladıktan sonra fiyat değişir mi?",
    a: "Onaylanan teklifin tutarı değişmez. Ancak analiz sürecinde kapsam değişikliği (ek test eklenmesi, acele rapor talebi vb.) durumunda revize teklif hazırlanır ve onayınız alınmadan işlem yapılmaz.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("genel");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = FAQS.filter((f) => f.cat === activeCategory);

  return (
    <div className={styles.root}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Destek Merkezi
          </div>
          <h1>Sıkça Sorulan<br /><span className={styles.accent}>Sorular</span></h1>
          <p className={styles.heroSub}>
            En merak edilen konularda hızlı yanıtlar. Bulamadığınız sorunuz için&nbsp;
            <Link href="/contact" className={styles.heroLink}>bizimle iletişime geçin</Link>.
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className={styles.content}>
        {/* Category tabs */}
        <div className={styles.tabs}>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              className={`${styles.tab} ${activeCategory === c.id ? styles.tabActive : ""}`}
              onClick={() => { setActiveCategory(c.id); setOpenId(null); }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className={styles.accordion}>
          {filtered.map((faq) => (
            <div
              key={faq.id}
              className={`${styles.item} ${openId === faq.id ? styles.itemOpen : ""}`}
            >
              <button
                className={styles.question}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span>{faq.q}</span>
                <span className={styles.chevron}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div className={styles.answerWrap}>
                <p className={styles.answer}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <div className={styles.ctaBand}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaText}>
            <h2>Hâlâ sorunuz var mı?</h2>
            <p>Uzman kimyager ekibimiz size yardımcı olmaktan memnuniyet duyar.</p>
          </div>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className={styles.ctaBtn}>İletişime Geç</Link>
            <a href="https://wa.me/902120000000" className={styles.ctaBtnOutline} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}
