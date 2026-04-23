"use client";
import Link from 'next/link';
import {
  Bell, Plus, Eye, CheckCircle2, MessageSquare, Clock, AlertCircle
} from 'lucide-react';
import styles from '../dashboard.module.css';

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

export default function OffersPage() {
  return (
    <>
      <header className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <h1 className={styles.pageTitle}>Teklif Taleplerim</h1>
        </div>
        <div className={styles.topBarRight}>
          <button className={styles.iconBtn}><Bell size={20} /></button>
          <Link href="/search" className={styles.newQuoteBtn}><Plus size={16} /> Yeni Talep</Link>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Tüm Teklif Taleplerim</h2>
          </div>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Talep No</th>
                  <th>Tarih</th>
                  <th>Analiz İçeriği</th>
                  <th>Durum</th>
                  <th>Teklif Tutarı</th>
                  <th>İşlem</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_QUOTES.map(q => {
                  const sc = getStatusConfig(q.status);
                  const StatusIcon = sc.icon;
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
                          <StatusIcon size={13} />
                          {sc.label}
                        </div>
                      </td>
                      <td><span className={styles.tablePrice}>{q.price}</span></td>
                      <td>
                        {(q.status === 'offered' || q.status === 'approved') ? (
                          <Link href={`/dashboard/offers/${q.id}`} className={styles.tableActionBtn}>
                            <Eye size={14} /> Detaylar
                          </Link>
                        ) : (
                          <span className={styles.tablePlaceholder}>İşlem Bekleniyor</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

function getStatusConfig(status: string) {
  const configs = {
    approved: { icon: CheckCircle2, color: '#1d7843', bg: '#f0faf4', label: 'Onaylandı' },
    offered: { icon: MessageSquare, color: '#0066cc', bg: '#f0f7ff', label: 'Teklif İletildi' },
    pending: { icon: Clock, color: '#b45309', bg: '#fffbf0', label: 'Fiyat Bekleniyor' },
    inprogress: { icon: AlertCircle, color: '#0066cc', bg: '#f0f7ff', label: 'Analiz Sürüyor' },
  };
  return (configs as any)[status] || configs.pending;
}
