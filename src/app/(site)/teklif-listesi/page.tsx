"use client";
import { useQuote } from '@/context/QuoteContext';
import { Trash2, Plus, Minus, Send, ShoppingBag, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './quoteList.module.css';

export default function QuoteListPage() {
  const { quotes, removeQuote, updateQuantity, clearQuotes } = useQuote();
  const [note, setNote] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('labUser');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleRequestQuote = async () => {
    if (!user) {
      router.push('/auth/login?redirect=/teklif-listesi');
      return;
    }

    // Logic for submitting the quote (e.g., API call)
    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                phone: user.phone || 'Girişli Kullanıcı',
                message: `TEKLİF TALEBİ\n\nAnalizler:\n${quotes.map(q => `- ${q.title} (${q.quantity} adet)`).join('\n')}\n\nMüşteri Notu: ${note}`
            })
        });

        if (res.ok) {
            setIsSuccess(true);
            setTimeout(() => {
                clearQuotes();
                setIsSuccess(false);
                router.push('/');
            }, 4000);
        }
    } catch (err) {
        alert("Bağlantı hatası oluştu.");
    }
  };

  if (isSuccess) {
    return (
        <div className={styles.container}>
          <div className={styles.successScreen}>
            <div className={styles.successIcon}><CheckCircle2 size={64} /></div>
            <h1 className={styles.title}>Talebiniz Alındı</h1>
            <p className={styles.successDesc}>
              Teklif talebiniz uzman ekibimize ulaştı. En kısa sürede (en geç 24 saat içinde) 
              belirttiğiniz e-posta ve telefon üzerinden size dönüş yapılacaktır.
            </p>
            <Link href="/" className={styles.backBtn}>
              <ArrowLeft size={18} /> Anasayfaya Dön
            </Link>
          </div>
        </div>
    );
  }

  if (quotes.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <div className={styles.emptyIcon}><ShoppingBag size={80} strokeWidth={1} /></div>
          <h1 className={styles.title}>Teklif Listeniz Boş</h1>
          <p className={styles.emptyText}>
            Henüz sepete bir analiz eklemediniz. Sektörel sayfalarımızdan veya tüm analizler 
            bölümünden ihtiyacınız olan testleri seçebilirsiniz.
          </p>
          <Link href="/analizler" className={styles.primaryBtn}>
            Analizleri İncele
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>Teklif Listeniz</h1>
        <p className={styles.subtitle}>Toplam {quotes.length} farklı analiz parametresi seçildi.</p>
      </header>
      
      <div className={styles.grid}>
        <div className={styles.listSection}>
          <div className={styles.list}>
            {quotes.map(item => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemMain}>
                  <div className={styles.itemInfo}>
                    <span className={styles.itemCat}>{item.category}</span>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                  </div>
                  
                  <div className={styles.itemActions}>
                    <div className={styles.qtyBox}>
                      <button onClick={() => updateQuantity(item.id, -1)} className={styles.qtyBtn}><Minus size={14}/></button>
                      <span className={styles.qtyVal}>{item.quantity} Adet</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className={styles.qtyBtn}><Plus size={14}/></button>
                    </div>
                    
                    <button 
                      className={styles.removeBtn}
                      onClick={() => removeQuote(item.id)}
                      title="Listeden Çıkar"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.noteSection}>
             <h3>Talebinize Not Ekleyin</h3>
             <textarea 
                className={styles.noteArea}
                placeholder="Örn: Analizlerin 5 iş günü içinde tamamlanmasını rica ediyorum, numuneler yarın kurye ile gönderilecek..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
             />
          </div>
        </div>

        <aside className={styles.summarySidebar}>
          <div className={styles.summaryCard}>
            <h2 className={styles.summaryTitle}>Talep Özeti</h2>
            <div className={styles.summaryBody}>
              <div className={styles.sumRow}>
                <span>Seçilen Analizler</span>
                <span>{quotes.length}</span>
              </div>
              <div className={styles.sumRow}>
                <span>Toplam Numune/Adet</span>
                <span>{quotes.reduce((acc, q) => acc + q.quantity, 0)}</span>
              </div>
              <div className={styles.totalRow}>
                 <span>Tahmini Teklif Süresi</span>
                 <span>&lt; 24 Saat</span>
              </div>
            </div>
            
            <button 
              className={styles.submitBtn} 
              onClick={handleRequestQuote}
            >
              <Send size={18} /> Hızlı Teklif Al
            </button>
            
            <p className={styles.privacyNote}>
              Talebiniz uzman temsilcilerimiz tarafından incelenip en uygun fiyatlandırma ile iletilecektir.
            </p>
          </div>
          
          <Link href="/analizler" className={styles.continueLink}>
            <Plus size={16} /> Başka Analizler Ekle
          </Link>
        </aside>
      </div>
    </div>
  );
}
