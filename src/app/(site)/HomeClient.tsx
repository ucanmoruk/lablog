"use client";
import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import MoleculeCanvas from "@/components/MoleculeCanvas";
import { useQuote } from "@/context/QuoteContext";

const CHIPS = ["💄 Kozmetik","⚡ RoHS / TAREKS","🧵 Tekstil","💊 Takviye Gıda","🧪 İlaç","☣️ REACH / SVHC","👜 Deri","📦 Ambalaj"];

export default function HomeClient({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [modal, setModal] = useState<{open:boolean; svc:string; success:boolean}>({ open:false, svc:"", success:false });
  const [form, setForm] = useState({ name:"", phone:"", company:"", email:"", note:"" });
  const [toast, setToast] = useState(false);
  const { addQuote } = useQuote();
  const searchRef = useRef<HTMLDivElement>(null);

  const doSearch = async (q = query) => {
    if (!q.trim()) {
        setResults([]);
        setDropOpen(false);
        return;
    }
    setDropOpen(true);
    setLoading(true);
    try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
        const data = await res.json();
        setResults(data.results || []);
    } catch (err) {
        console.error(err);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) doSearch(query);
      else { setResults([]); setDropOpen(false); }
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const openModal = (svc: string) => {
    setModal({ open:true, svc, success:false });
    setForm({ name:"", phone:"", company:"", email:"", note:"" });
  };

  const submitForm = async () => {
    if (!form.name || !form.email || !form.company) return alert("Lütfen ad, e-posta ve firma bilgilerini doldurun.");
    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...form, message: `Teklif Talebi: ${modal.svc}. Not: ${form.note}` })
        });
        if (res.ok) setModal(m => ({ ...m, success:true }));
    } catch (err) {
        alert("Bağlantı hatası.");
    }
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add(styles.visible); io.unobserve(e.target); }});
    }, { threshold: 0.1 });
    document.querySelectorAll(`.${styles.reveal}`).forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    (window as any).openLabModal = openModal;

    const handleGlobalClick = (e: MouseEvent) => {
      const tile = (e.target as HTMLElement).closest('[data-modal-svc]');
      if (tile) {
        const svc = tile.getAttribute('data-modal-svc');
        if (svc) openModal(svc);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => { 
      delete (window as any).openLabModal; 
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <>
      {/* Search logic integrated into hero */}
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

          <div className={styles.searchWrap} ref={searchRef}>
            <div className={styles.searchBar}>
              <Search size={16} className={styles.searchIco} />
              <input
                type="text"
                className={styles.searchInp}
                placeholder="Kozmetik analizi, RoHS testi, tekstil, ilaç…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key==="Enter" && router.push(`/search?q=${encodeURIComponent(query)}`)}
                autoComplete="off"
              />
              <button className={styles.searchGo} onClick={() => router.push(`/search?q=${encodeURIComponent(query)}`)}>Ara</button>

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
                        <div key={i} className={styles.dRow} onClick={() => router.push(`/analizler/${r.slug || r.id}`)}>
                          <div className={styles.dLeft}>
                            <div className={styles.dIco}>🧪</div>
                            <div>
                              <div className={styles.dName}>{r.title}</div>
                              <div className={styles.dSub}>{r.description.slice(0, 60)}… · {r.turnaroundTime}</div>
                            </div>
                          </div>
                          <div className={styles.dRight}>
                            <span className={styles.dTag}>{r.category}</span>
                            <button 
                                className={styles.dBtn} 
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    addQuote({ id: r.id, title: r.title, category: r.category, price: 'İstek Üzerine' });
                                    setDropOpen(false);
                                    setToast(true);
                                    setTimeout(() => setToast(false), 5000);
                                }}
                            >
                                Sepete Ekle +
                            </button>
                          </div>
                        </div>
                      ))}
                      <div className={styles.dropFoot}>
                        <span className={styles.dropFootTxt}>{results.length} hizmet bulundu</span>
                        <button className={styles.dropFootBtn} onClick={() => router.push(`/search?q=${encodeURIComponent(query)}`)}>Tümünü Gör</button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

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

      {children}



      {/* MODAL */}
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

      {toast && (
        <div className={styles.cartToast}>
          <span className={styles.cartToastMsg}>Hizmet listeye eklendi.</span>
          <Link href="/teklif-iste" className={styles.cartToastBtn}>Listeyi Görüntüle</Link>
        </div>
      )}
    </>
  );
}
