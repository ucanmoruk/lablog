"use client";
import Link from 'next/link';
import {
  FlaskConical, FileText, CheckCircle2, ChevronRight,
  Plus, Bell, ArrowUpRight, ShoppingBag, Eye
} from 'lucide-react';
import styles from './dashboard.module.css';

const MOCK_QUOTES = [
  {
    id: 'Q-1001',
    date: '10 Nisan 2026',
    items: 'RoHS Testi, Tekstil AZO Boyar Madde Testi',
    status: 'approved' as const,
    price: '₺4.500',
    count: 2,
  },
  {
    id: 'Q-1002',
    date: '18 Nisan 2026',
    items: 'REACH & SVHC Analizi',
    status: 'offered' as const,
    price: '₺3.200',
    count: 1,
  },
  {
    id: 'Q-1003',
    date: '20 Nisan 2026',
    items: 'Mikrobiyolojik Patojen Taraması, Ağır Metal Analizi',
    status: 'pending' as const,
    price: '—',
    count: 3,
  },
];

const STATS = [
  { label: 'Toplam Teklif', value: '3', icon: FileText, color: '#0066cc' },
  { label: 'Analiz Süreçte', value: '1', icon: FlaskConical, color: '#1d7843' },
  { label: 'Tamamlanan', value: '1', icon: CheckCircle2, color: '#b45309' },
];

export default function DashboardPage() {
  return (
    <>
      <header className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <h1 className={styles.pageTitle}>Genel Bakış</h1>
        </div>
        <div className={styles.topBarRight}>
          <button className={styles.iconBtn}><Bell size={20} /></button>
          <Link href="/search" className={styles.newQuoteBtn}><Plus size={16} /> Yeni Talep</Link>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.overviewGrid}>
          <div className={styles.statsRow}>
            {STATS.map(s => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statIco} style={{ background: `${s.color}15`, color: s.color }}><s.icon size={22} /></div>
                <div className={styles.statVal}>{s.value}</div>
                <div className={styles.statLbl}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Son Teklifler</h2>
              <Link href="/dashboard/offers" className={styles.cardAction}>Tümünü Gör <ChevronRight size={16} /></Link>
            </div>
            <QuoteTable quotes={MOCK_QUOTES.slice(0, 3)} />
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}><h2 className={styles.cardTitle}>Hızlı İşlemler</h2></div>
            <div className={styles.quickGrid}>
              <Link href="/search" className={styles.quickCard}><FlaskConical size={20} /><span>Yeni Analiz Talep Et</span><ArrowUpRight size={16} className={styles.quickArr} /></Link>
              <Link href="/blog" className={styles.quickCard}><FileText size={20} /><span>Sektörel Rehberler</span><ArrowUpRight size={16} className={styles.quickArr} /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function QuoteTable({ quotes }: { quotes: any[] }) {
  const statusConfig = {
    approved: { color: '#1d7843', bg: '#f0faf4', label: 'Onaylandı' },
    offered: { color: '#0066cc', bg: '#f0f7ff', label: 'Teklif İletildi' },
    pending: { color: '#b45309', bg: '#fffbf0', label: 'Fiyat Bekleniyor' },
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Talep No</th>
            <th>Tarih</th>
            <th>Analiz İçeriği</th>
            <th>Durum</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map(q => {
            const sc = (statusConfig as any)[q.status] || statusConfig.pending;
            return (
              <tr key={q.id}>
                <td><span className={styles.tableId}>{q.id}</span></td>
                <td><span className={styles.tableDate}>{q.date}</span></td>
                <td>
                  <div className={styles.tableItems}>{q.items}</div>
                  <div className={styles.tableCount}>{q.count} analiz</div>
                </td>
                <td>
                  <div className={styles.statusPill} style={{ background: sc.bg, color: sc.color }}>
                    {sc.label}
                  </div>
                </td>
                <td>
                  {(q.status === 'offered' || q.status === 'approved') && (
                    <Link href={`/dashboard/offers/${q.id}`} className={styles.tableActionBtn}>
                      <Eye size={14} /> Detay
                    </Link>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
