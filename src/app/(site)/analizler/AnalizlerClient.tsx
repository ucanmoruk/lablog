"use client";
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Clock, FileText, ArrowRight, Beaker } from 'lucide-react';
import { Service } from '@/data/mockData';
import styles from './analizler.module.css';

interface Props {
  initialServices: Service[];
}

export default function AnalizlerClient({ initialServices }: Props) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const categories = useMemo(() => {
    const cats = ['Tümü', ...Array.from(new Set(initialServices.map(s => s.category)))];
    return cats;
  }, [initialServices]);

  const filteredServices = useMemo(() => {
    return initialServices.filter(s => {
      const searchLower = search.toLowerCase();
      const matchesSearch = s.title.toLowerCase().includes(searchLower) || 
                           s.description.toLowerCase().includes(searchLower) ||
                           (s.standards && s.standards.toLowerCase().includes(searchLower));
      const matchesCategory = activeCategory === 'Tümü' || s.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [initialServices, search, activeCategory]);

  return (
    <div className={styles.container}>
      {/* ─── CONTROLS ─── */}
      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <Search className={styles.searchIcon} size={20} />
          <input 
            type="text" 
            placeholder="Analiz adı, standart veya metot ara..." 
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ─── GRID ─── */}
      {filteredServices.length > 0 ? (
        <div className={styles.grid}>
          {filteredServices.map(s => (
            <Link href={`/analizler/${s.slug || s.id}`} key={s.id} className={styles.card}>
              <span className={styles.cardCategory}>{s.category}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>
                {s.description.length > 120 ? s.description.substring(0, 120) + '...' : s.description}
              </p>
              
              <div className={styles.cardFooter}>
                <div className={styles.cardMeta}>
                  {s.standards && (
                    <div className={styles.metaItem}>
                      <FileText size={14} /> {s.standards}
                    </div>
                  )}
                  {s.turnaroundTime && (
                    <div className={styles.metaItem}>
                      <Clock size={14} /> {s.turnaroundTime}
                    </div>
                  )}
                </div>
                <ArrowRight className={styles.cardArr} size={18} />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <Beaker size={48} strokeWidth={1.5} style={{marginBottom: '16px', opacity: 0.5}} />
          <p>Aradığınız kriterlere uygun analiz bulunamadı.</p>
        </div>
      )}
    </div>
  );
}
