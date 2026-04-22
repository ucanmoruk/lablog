"use client";
import { useSearchParams } from 'next/navigation';
import { useQuote } from '@/context/QuoteContext';
import styles from './search.module.css';
import { Suspense, useEffect, useState } from 'react';
import { PlusCircle, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import { Service } from '@/data/mockData';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const { quotes, addQuote } = useQuote();
  
  const [results, setResults] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [aiMessage, setAiMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setResults([]);
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data.results);
        setAiMessage(data.aiIntent);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [query]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Arama Sonuçları</h1>
        <p className={styles.subtitle}>
          "{query}" için arama yapılıyor...
        </p>
      </div>

      {loading ? (
        <div className={styles.empty}>
          <Loader2 className={styles.spinner} size={48} />
          <p>Yapay zeka asistanımız analiz ediyor...</p>
        </div>
      ) : (
        <>
          {aiMessage && (
            <div className={styles.aiAlert}>
              <Sparkles className={styles.aiIcon} />
              <span>{aiMessage}</span>
            </div>
          )}
          
          <div className={styles.list}>
            {results.map(service => {
              const isAdded = quotes.some(q => q.id === service.id);
              
              return (
                <div key={service.id} className={styles.card}>
                  <div className={styles.cardInfo}>
                    <span className={styles.category}>{service.category}</span>
                    <h3 className={styles.cardTitle}>
                      <a href={`/services/${service.id}`} style={{textDecoration: 'none', color: 'inherit'}}>{service.title}</a>
                    </h3>
                    <p className={styles.cardDesc}>{service.description}</p>
                    {service.standards && (
                      <div style={{marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-tertiary)', display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
                        <span><strong>Standart:</strong> {service.standards}</span>
                        <span><strong>Süre:</strong> {service.turnaroundTime}</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.cardAction}>
                    <button 
                      className={`${styles.addBtn} ${isAdded ? styles.added : ''}`}
                      onClick={() => addQuote(service)}
                      disabled={isAdded}
                      style={isAdded ? { background: 'var(--surface-active)', color: 'var(--text-secondary)' } : {}}
                    >
                      {isAdded ? (
                        <><CheckCircle2 size={18} /> Eklendi</>
                      ) : (
                        <><PlusCircle size={18} /> Teklif Listesine Ekle</>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
            
            {results.length === 0 && (
              <div className={styles.empty}>
                <p>Aradığınız kritere uygun hizmet bulunamadı. Lütfen başka bir terim deneyin veya müşteri temsilcimizle iletişime geçin.</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div style={{padding: '100px 5%', textAlign: 'center'}}>Yükleniyor...</div>}>
      <SearchResults />
    </Suspense>
  );
}
