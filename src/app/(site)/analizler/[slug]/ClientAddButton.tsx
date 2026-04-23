"use client";
import { Service } from '@/data/mockData';
import { useQuote } from '@/context/QuoteContext';
import { PlusCircle, CheckCircle2 } from 'lucide-react';
import styles from './service.module.css';

export default function ClientAddButton({ service }: { service: Service }) {
  const { quotes, addQuote } = useQuote();
  const isAdded = quotes.some(q => q.id === service.id);

  return (
    <button 
      className={styles.addBtn}
      onClick={() => addQuote(service)}
      disabled={isAdded}
      style={isAdded ? { background: 'var(--surface-active)', color: 'var(--text-secondary)', cursor: 'default', transform: 'none' } : {}}
    >
      {isAdded ? (
        <><CheckCircle2 size={24} /> Teklif Listesinde</>
      ) : (
        <><PlusCircle size={24} /> Hemen Teklif İste</>
      )}
    </button>
  );
}
