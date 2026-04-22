"use client";
import { useState } from 'react';
import styles from './dashboard.module.css';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('quotes');

  // Mock previous quotes
  const pastQuotes = [
    { id: 'Q-1001', date: '2026-04-10', items: 'RoHS Testi, Tekstil Azo Boyar Madde Testi', status: 'Onaylandı', price: '₺4,500' },
    { id: 'Q-1002', date: '2026-04-18', items: 'REACH & SVHC Analizi', status: 'Beklemede', price: 'Teklif Hazırlanıyor' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Müşteri Paneli</h1>
        <div className={styles.userInfo}>
          <div className={styles.userName}>Ahmet Yılmaz</div>
          <div className={styles.companyName}>Örnek Şirket A.Ş.</div>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.sidebar}>
          <div 
            className={`${styles.navItem} ${activeTab === 'quotes' ? styles.active : ''}`}
            onClick={() => setActiveTab('quotes')}
          >
            Tekliflerim
          </div>
          <div 
            className={`${styles.navItem} ${activeTab === 'profile' ? styles.active : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Firma Bilgileri
          </div>
          <div className={styles.navItem} onClick={() => alert('Çıkış yapılıyor...')}>
            Çıkış Yap
          </div>
        </div>

        <div className={styles.content}>
          {activeTab === 'quotes' && (
            <>
              <h2 className={styles.sectionTitle}>Geçmiş ve Aktif Teklifler</h2>
              {pastQuotes.length > 0 ? (
                <div style={{ overflowX: 'auto' }}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Teklif No</th>
                        <th>Tarih</th>
                        <th>Hizmetler</th>
                        <th>Tutar</th>
                        <th>Durum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pastQuotes.map(q => (
                        <tr key={q.id}>
                          <td>{q.id}</td>
                          <td>{q.date}</td>
                          <td>{q.items}</td>
                          <td>{q.price}</td>
                          <td>
                            <span className={`${styles.status} ${q.status === 'Onaylandı' ? styles.statusApproved : styles.statusPending}`}>
                              {q.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p style={{ color: 'var(--text-secondary)' }}>Henüz bir teklif talebiniz bulunmamaktadır.</p>
              )}
            </>
          )}

          {activeTab === 'profile' && (
            <>
              <h2 className={styles.sectionTitle}>Firma Bilgileri</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Bu alandan firma ve fatura bilgilerinizi güncelleyebilirsiniz.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
