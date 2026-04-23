"use client";
import { useState, useRef, useEffect } from "react";
import { Search, ArrowRight, Shield, Clock, Award, CheckCircle, TrendingUp, ChevronRight, X } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import MoleculeCanvas from "@/components/MoleculeCanvas";
import Link from "next/link";
import { blogs } from "@/data/mockData";

// ─── Search DB (deneme.html'den genişletildi) ─────────────
const DB = [
  { i:"🧪", n:"Kozmetik Mikrobiyoloji", d:"Toplam aerob, maya-küf, patojen tarama", t:"Kozmetik", s:"3-5 iş günü" },
  { i:"🧪", n:"Kozmetik Ağır Metal (ICP-MS)", d:"Kurşun, arsenik, cıva, kadmiyum, nikel tayini", t:"Kozmetik", s:"5-7 iş günü" },
  { i:"🧪", n:"Challenge Testi", d:"Kozmetik koruyucu etkinlik testi, ISO 11930", t:"Kozmetik", s:"28+ gün" },
  { i:"⚗️", n:"RoHS Analizi", d:"6 kısıtlı madde — kurşun, cıva, kadmiyum, Cr VI", t:"RoHS", s:"5-7 iş günü" },
  { i:"⚗️", n:"REACH / SVHC Taraması", d:"Yüksek endişe uyandıran madde listesi taraması", t:"REACH", s:"5-10 iş günü" },
  { i:"⚗️", n:"TAREKS Ürün Testi", d:"İthalat uygunluk belgesi kapsamı testleri", t:"TAREKS", s:"7-10 iş günü" },
  { i:"🔬", n:"Tekstil pH Testi", d:"EN ISO 3071 — asidite/bazite tayini", t:"Tekstil", s:"2-3 iş günü" },
  { i:"🔬", n:"Azo Boyar Madde Testi", d:"EN 14362 — kanserojen amin taraması", t:"Tekstil", s:"5-7 iş günü" },
  { i:"💊", n:"Aktif Madde Tayini", d:"Vitamin, mineral, bitki ekstresi doğrulama", t:"Takviye Gıda", s:"7-10 iş günü" },
  { i:"💊", n:"Pestisit Kalıntı Taraması", d:"LC-MS/MS ile 500+ pestisit analizi", t:"Gıda", s:"5-7 iş günü" },
  { i:"🧬", n:"İlaç Saflık Analizi", d:"HPLC/GC — farmasötik standartlara uygun", t:"İlaç", s:"7-14 iş günü" },
  { i:"🧬", n:"Hammadde Kimlik Testi (FTIR)", d:"Madde doğrulama, safsızlık profili", t:"İlaç", s:"3-5 iş günü" },
  { i:"👜", n:"Deri Krom VI Testi", d:"EN ISO 17075 — zararlı krom tayini", t:"Deri", s:"5-7 iş günü" },
  { i:"📦", n:"Ambalaj Migrasyon Testi", d:"Gıda teması uygunluğu, plastik göçü", t:"Ambalaj", s:"7-14 iş günü" },
  { i:"🔬", n:"Nitrozamin Analizi", d:"LC-MS/MS — N-nitrozamin tayini", t:"Kozmetik/İlaç", s:"7-10 iş günü" },
];

const KW: Record<string, number[]> = {
  kozmetik:[0,1,2],makyaj:[0,1],cilt:[0,1],şampuan:[0,1],krem:[0,1],serum:[0,1],
  rohs:[3],reach:[4],svhc:[4],tareks:[5],
  tekstil:[6,7],kumaş:[6,7],deri:[12],
  takviye:[8],gıda:[8,9],vitamin:[8],pestisit:[9],
  ilaç:[10,11],hammadde:[11],saflık:[10],
  ambalaj:[13],plastik:[13],nitrozamin:[14],
  "ağır metal":[1],mikrobiyoloji:[0],challenge:[2],
};

function findResults(q: string) {
  q = q.toLowerCase().trim();
  if (!q) return [];
  const h = new Set<number>();
  Object.entries(KW).forEach(([k,v]) => { if (q.includes(k) || k.includes(q)) v.forEach(i => h.add(i)); });
  if (!h.size) DB.forEach((s,i) => { if ((s.n+s.d+s.t).toLowerCase().includes(q)) h.add(i); });
  return [...h].slice(0,5).map(i => DB[i]);
}

// ─── Static Data ───────────────────────────────────────────
const CHIPS = ["💄 Kozmetik","⚡ RoHS / TAREKS","🧵 Tekstil","💊 Takviye Gıda","🧪 İlaç","☣️ REACH / SVHC","👜 Deri","📦 Ambalaj"];

const TRUST = ["ISO 17025 Akredite Laboratuvar","24 Saatte Teklif Garantisi","Uzman Kimyager Ekibi","Türkiye Geneli Numune Kabulü","Akredite Rapor & Belgelendirme"];

const SECTORS = [
  { e:"💄", n:"Kozmetik & Kişisel Bakım", d:"Mikrobiyoloji, ağır metal, stabilite, güvenlik değerlendirmesi, PIF dosyası", q:"kozmetik" },
  { e:"🧪", n:"İlaç & Hammadde", d:"Saflık, kimlik testi, safsızlık profili, mikrobiyoloji, stabilite çalışması", q:"ilaç" },
  { e:"🧵", n:"Tekstil & Deri", d:"REACH, pH, azo boyar madde, formaldehit, renk haslığı, TAREKS testleri", q:"tekstil" },
  { e:"⚡", n:"RoHS / TAREKS / REACH", d:"6 kısıtlı madde, SVHC tarama, PFAS analizi, ağır metal, ihracat uyumu", q:"rohs" },
  { e:"💊", n:"Takviye Edici Gıda", d:"Etiket doğrulama, aktif madde tayini, mikrobiyoloji, ağır metal", q:"gıda" },
  { e:"👜", n:"Deri & Aksesuar", d:"Krom VI, ftalat, REACH uyumu, boyar madde, TAREKS deri testleri", q:"deri" },
  { e:"☣️", n:"SVHC & Kimyasal Uyum", d:"SVHC liste taraması, yüksek endişe uyandıran maddeler, ECHA uyum raporu", q:"svhc" },
  { e:"📦", n:"Ambalaj & Plastik", d:"Gıda teması uygunluğu, migrasyon testi, plastik tanımlama (FTIR)", q:"ambalaj" },
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

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof DB>([]);
  const [loading, setLoading] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [modal, setModal] = useState<{open:boolean; svc:string; success:boolean}>({ open:false, svc:"", success:false });
  const [form, setForm] = useState({ name:"", phone:"", company:"", email:"", note:"" });
  const searchRef = useRef<HTMLDivElement>(null);
  const latestBlogs = blogs.slice(0,3);

  const doSearch = (q = query) => {
    if (!q.trim()) return;
    setDropOpen(true);
    setLoading(true);
    setResults([]);
    setTimeout(() => {
      setResults(findResults(q));
      setLoading(false);
    }, 500);
  };

  const openModal = (svc: string) => {
    setModal({ open:true, svc, success:false });
    setForm({ name:"", phone:"", company:"", email:"", note:"" });
  };

  const submitForm = () => {
    if (!form.name || !form.email || !form.company) return alert("Lütfen ad, e-posta ve firma bilgilerini doldurun.");
    setModal(m => ({ ...m, success:true }));
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add(styles.visible); io.unobserve(e.target); }});
    }, { threshold: 0.1 });
    document.querySelectorAll(`.${styles.reveal}`).forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className={styles.root}>

      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMolBg}><MoleculeCanvas /></div>
        <div className={styles.heroOrb} />

        <div className={styles.heroInner}>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            ISO 17025 Akredite &nbsp;·&nbsp; Türkiye Geneli
          </div>

          <h1 className={styles.heroH1}>
            Analiz, Belgelendirme<br/>
            <span className={styles.accent}>ve Danışmanlık</span><br/>
            <span className={styles.light}>tek merkezden.</span>
          </h1>

          <p className={styles.heroSub}>
            Ürününüz için doğru testi saniyeler içinde bulun.<br/>
            24 saatte profesyonel teklif, ISO 17025 akredite sonuç.
          </p>

          {/* Search */}
          <div className={styles.searchWrap} ref={searchRef}>
            <div className={styles.searchBar}>
              <Search size={16} className={styles.searchIco} />
              <input
                id="q"
                type="text"
                className={styles.searchInp}
                placeholder="Kozmetik analizi, RoHS testi, tekstil, ilaç…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key==="Enter" && doSearch()}
                autoComplete="off"
              />
              <button className={styles.searchGo} onClick={() => doSearch()}>Ara</button>
            </div>

            {/* Chips */}
            <div className={styles.chips}>
              {CHIPS.map(c => (
                <button key={c} className={styles.chip}
                  onClick={() => { const v = c.replace(/^.+?\s/,""); setQuery(v); doSearch(v); }}>
                  {c}
                </button>
              ))}
            </div>

            {/* Dropdown */}
            {dropOpen && (
              <div className={styles.drop}>
                {loading ? (
                  <div className={styles.dropLoading}><span className={styles.spin}/> Hizmetler aranıyor…</div>
                ) : results.length === 0 ? (
                  <div className={styles.dropEmpty}>
                    Eşleşme bulunamadı. <button onClick={() => openModal("Özel Analiz Talebi")} className={styles.dropEmptyLink}>Uzmanımıza yazın →</button>
                  </div>
                ) : (
                  <>
                    <div className={styles.dropLabel}>Bulunan hizmetler</div>
                    {results.map((r, i) => (
                      <div key={i} className={styles.dRow} onClick={() => openModal(r.n)}>
                        <div className={styles.dLeft}>
                          <div className={styles.dIco}>{r.i}</div>
                          <div>
                            <div className={styles.dName}>{r.n}</div>
                            <div className={styles.dSub}>{r.d} · {r.s}</div>
                          </div>
                        </div>
                        <div className={styles.dRight}>
                          <span className={styles.dTag}>{r.t}</span>
                          <span className={styles.dArr}>Teklif Al →</span>
                        </div>
                      </div>
                    ))}
                    <div className={styles.dropFoot}>
                      <span className={styles.dropFootTxt}>{results.length} hizmet bulundu</span>
                      <button className={styles.dropFootBtn} onClick={() => openModal(results[0].n)}>Hızlı Teklif Al</button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Hero Stats */}
          <div className={styles.heroStats}>
            {[{n:"1.500+",l:"Akredite parametre"},{n:"12",l:"Sektör"},{n:"24s",l:"Teklif garantisi"},{n:"17025",l:"ISO Akreditasyon"}].map(s => (
              <div key={s.l} className={styles.hs}>
                <div className={styles.hsN}>{s.n}</div>
                <div className={styles.hsL}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <div key={s.n} className={styles.sTile} onClick={() => openModal(s.n + " Analizi")}>
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
              onClick={() => openModal(f.t)}>
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
            <Link href={`/blog/${b.id}`} key={b.id} className={styles.bCard}>
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
          <button className={styles.btnWhite} onClick={() => openModal("Genel Analiz Talebi")}>Teklif Al</button>
          <a href="https://wa.me/902120000000" className={styles.btnOutline} target="_blank" rel="noreferrer">WhatsApp ile Yaz</a>
        </div>
      </div>

      {/* ══ MODAL ══════════════════════════════════════════ */}
      {modal.open && (
        <div className={styles.overlay} onClick={e => { if (e.target === e.currentTarget) setModal(m=>({...m,open:false})); }}>
          <div className={styles.modal}>
            {!modal.success ? (
              <>
                <div className={styles.modalTop}>
                  <button className={styles.modalClose} onClick={() => setModal(m=>({...m,open:false}))}><X size={14}/></button>
                  <div className={styles.mTag}>Hızlı Teklif</div>
                  <h2>Teklif talep edin</h2>
                  <p className={styles.mSvc}>Hizmet: <strong>{modal.svc}</strong></p>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.fg2}>
                    <div className={styles.fg}><label>Ad Soyad</label><input placeholder="Ahmet Yılmaz" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}/></div>
                    <div className={styles.fg}><label>Telefon</label><input type="tel" placeholder="0532 000 00 00" value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))}/></div>
                  </div>
                  <div className={styles.fg}><label>Firma Adı</label><input placeholder="Şirket Adı Ltd. Şti." value={form.company} onChange={e=>setForm(f=>({...f,company:e.target.value}))}/></div>
                  <div className={styles.fg}><label>E-posta</label><input type="email" placeholder="adres@firma.com" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))}/></div>
                  <div className={styles.fg}><label>Ürün / Numune <span style={{color:"#999",fontWeight:300}}>(opsiyonel)</span></label><input placeholder="Örn: şampuan, 3 numune, acele rapor" value={form.note} onChange={e=>setForm(f=>({...f,note:e.target.value}))}/></div>
                  <button className={styles.mSubmit} onClick={submitForm}>Teklif Talep Et — 24 Saatte Dönelim</button>
                  <p className={styles.mNote}>Bilgileriniz yalnızca teklif hazırlamak için kullanılır.</p>
                </div>
              </>
            ) : (
              <div className={styles.mSuccess}>
                <div className={styles.successIco}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3>Talebiniz alındı.</h3>
                <p>En geç <strong>24 saat</strong> içinde e-posta ve telefon ile dönüş yapacağız.</p>
              </div>
            )}
          </div>
        </div>
      )}

    </main>
  );
}
