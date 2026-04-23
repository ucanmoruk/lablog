"use client";
import { useQuote } from '@/context/QuoteContext';
import { Trash2 } from 'lucide-react';
import Link from 'next/link';
import styles from './quoteList.module.css';

export default function QuoteListPage() {
  const { quotes, removeQuote } = useQuote();

  if (quotes.length === 0) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Teklif Listeniz</h1>
        <div className={styles.empty}>
          <h2>Listeniz şu an boş.</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '16px', marginBottom: '24px' }}>
            Hizmetlerimizi inceleyerek teklif almak istediğiniz analizleri ekleyebilirsiniz.
          </p>
          <Link href="/arama" className={styles.primaryBtn} style={{ display: 'inline-block', padding: '12px 32px' }}>
            Hizmetleri İncele
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Teklif Listeniz</h1>
      
      <div className={styles.content}>
        <div className={styles.list}>
          {quotes.map(service => (
            <div key={service.id} className={styles.item}>
              <div className={styles.itemInfo}>
                <h3>{service.title}</h3>
                <p>{service.category}</p>
              </div>
              <button 
                className={styles.removeBtn}
                onClick={() => removeQuote(service.id)}
                title="Listeden Çıkar"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Özet</h2>
          <div className={styles.summaryRow}>
            <span>Toplam Hizmet:</span>
            <strong>{quotes.length} adet</strong>
          </div>
          
          <div className={styles.actions}>
            <Link href="/auth/register" className={styles.primaryBtn}>
              Üye Ol & Hızlı Teklif Al
            </Link>
            <button className={styles.secondaryBtn} onClick={() => alert("Mail atma formu açılacak.")}>
              Üye Olmadan Mail At
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
