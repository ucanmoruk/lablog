"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import styles from "./contact.module.css";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          setSuccess(false);
        }, 6000);
      }
    } catch (err) {
      console.error(err);
      alert("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.root}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            İletişim
          </div>
          <h1>Size nasıl yardımcı<br /><span className={styles.accent}>olabiliriz?</span></h1>
          <p className={styles.heroSub}>
            Sorularınız, analiz talepleriniz veya iş birlikleri için bize ulaşın.<br/>
            Uzman ekibimiz en kısa sürede dönüş yapacaktır.
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className={styles.content}>
        
        <div className={styles.grid}>
          {/* Contact Info */}
          <div className={styles.infoCol}>
            <h2>Bizimle İletişime Geçin</h2>
            <p className={styles.infoDesc}>
              Analiz süreçleri, fiyatlandırma, belgelendirme veya diğer tüm sorularınız için uzman kimyagerlerimiz ve müşteri temsilcilerimiz hizmetinizde.
            </p>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.iconWrap}><Mail size={20} /></div>
                <div>
                  <div className={styles.infoLabel}>E-posta</div>
                  <a href="mailto:info@laboratuvardan.com" className={styles.infoVal}>info@laboratuvardan.com</a>
                  <div className={styles.infoSub}>Genel sorular ve teklif talepleri için</div>
                </div>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.iconWrap}><Phone size={20} /></div>
                <div>
                  <div className={styles.infoLabel}>Telefon & WhatsApp</div>
                  <a href="https://wa.me/905401068640" target="_blank" rel="noopener noreferrer" className={styles.infoVal}>+90 540 106 86 40</a>
                  <div className={styles.infoSub}>Hafta içi 09:00 - 18:00 arası</div>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrap}><MapPin size={20} /></div>
                <div>
                  <div className={styles.infoLabel}>Merkez Laboratuvar</div>
                  <div className={styles.infoVal}>Teknopark İstanbul, Pendik / İstanbul</div>
                  <div className={styles.infoSub}>Numune kabulü bu adrese yapılmaktadır</div>
                </div>
              </div>
            </div>

            <div className={styles.mapWrap}>
               <div className={styles.mapPlaceholder}>
                 <span>Harita Görünümü</span>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h3>Mesaj Gönderin</h3>
              {success ? (
                <div className={styles.successMsg}>
                  <div className={styles.successIcon}>✓</div>
                  <h4>Mesajınız Alındı!</h4>
                  <p>En kısa sürede e-posta veya telefon yoluyla size dönüş yapacağız.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label>Adınız Soyadınız *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Örn: Ahmet Yılmaz" 
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>E-posta Adresiniz *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="ornek@sirket.com" 
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Telefon Numaranız</label>
                      <input 
                        type="tel" 
                        placeholder="0555 000 00 00" 
                        value={form.phone}
                        onChange={e => setForm({...form, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Mesajınız *</label>
                    <textarea 
                      required 
                      rows={5} 
                      placeholder="Size nasıl yardımcı olabiliriz?"
                      value={form.message}
                      onChange={e => setForm({...form, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={loading}>
                    {loading ? "Gönderiliyor..." : "Mesajı Gönder"} <ArrowRight size={16} />
                  </button>
                  <p className={styles.privacyNote}>
                    Göndererek <Link href="/privacy">Gizlilik Politikamızı</Link> kabul etmiş olursunuz.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
