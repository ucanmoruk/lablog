"use client";
import { Service } from '@/data/mockData';
import { useQuote } from '@/context/QuoteContext';
import { PlusCircle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import styles from './service.module.css';

export default function ClientAddButton({ service }: { service: Service }) {
  const { quotes, addQuote } = useQuote();
  const [showToast, setShowToast] = useState(false);
  const isAdded = quotes.some(q => q.id === service.id);

  const handleAdd = () => {
    addQuote(service);
    setShowToast(true);
    // Hide toast after 5 seconds
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <>
      <button 
        className={styles.addBtn}
        onClick={handleAdd}
        disabled={isAdded}
        style={isAdded ? { background: 'var(--surface-active)', color: 'var(--text-secondary)', cursor: 'default', transform: 'none' } : {}}
      >
        {isAdded ? (
          <><CheckCircle2 size={24} /> Teklif Listesinde</>
        ) : (
          <><PlusCircle size={24} /> Hemen Teklif İste</>
        )}
      </button>

      {showToast && (
        <div className={styles.cartToast}>
          <span className={styles.cartToastMsg}>Hizmet listeye eklendi.</span>
          <Link href="/teklif-listesi" className={styles.cartToastBtn}>Listeyi Görüntüle</Link>
        </div>
      )}
    </>
  );
}
