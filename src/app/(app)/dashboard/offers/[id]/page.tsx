"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  FlaskConical, FileText, ArrowLeft, CheckCircle2, XCircle, X, MessageSquare, Bell
} from 'lucide-react';
import styles from '../../dashboard.module.css';

const MOCK_USER = {
  name: 'Ahmet Yılmaz',
  email: 'kullanici@firma.com',
  company: 'Örnek Şirket A.Ş.',
  phone: '0532 000 00 00',
};

const MOCK_QUOTES = [
  {
    id: 'Q-1001',
    date: '10 Nisan 2026',
    items: 'RoHS Testi, Tekstil AZO Boyar Madde Testi',
    status: 'approved' as const,
    price: '₺4.500',
    count: 2,
    details: [
      { name: 'RoHS Testi', price: '₺2.250', description: 'Kurşun, Civa, Kadmiyum ve PBB/PBDE analizi.' },
      { name: 'Tekstil AZO Boyar Madde Testi', price: '₺2.250', description: 'Ek-XVII kapsamında azo renklendirici analizi.' }
    ],
    note: 'Analizler akredite laboratuvarımızda gerçekleştirilecektir.'
  },
  {
    id: 'Q-1002',
    date: '18 Nisan 2026',
    items: 'REACH & SVHC Analizi',
    status: 'offered' as const,
    price: '₺3.200',
    count: 1,
    details: [
      { name: 'REACH & SVHC Analizi', price: '₺3.200', description: '233 maddelik SVHC aday listesi taraması.' }
    ],
    note: 'Teklifimiz 15 gün geçerlidir. Ödeme vadesi 30 gündür.'
  }
];

export default function OfferDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [quote, setQuote] = useState<any>(null);
  const [user, setUser] = useState(MOCK_USER);
  const [rejecting, setRejecting] = useState(false);
  const [rejectReason, setRejectReason] = useState('');

  useEffect(() => {
    const found = MOCK_QUOTES.find(q => q.id === id);
    if (found) {
      setQuote(found);
    }
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  const handleAction = (type: 'approve' | 'reject') => {
    if (type === 'approve') {
      alert(`Teklif onaylandı. Analiz süreci başlatılıyor.`);
      router.push('/dashboard');
    } else {
      alert(`Teklif reddedildi. Neden: ${rejectReason}`);
      router.push('/dashboard');
    }
  };

  if (!quote) return <div className={styles.content}>Yükleniyor...</div>;

  return (
    <>
      <header className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <Link href="/dashboard" className={styles.backBtn}>
            <ArrowLeft size={18} /> Geri Dön
          </Link>
          <h1 className={styles.pageTitle}>{quote.id} Detayı</h1>
        </div>
        <div className={styles.topBarRight}>
          <button className={styles.iconBtn}><Bell size={20} /></button>
          <button className={styles.printBtn} onClick={handlePrint}>
            <FileText size={16} /> PDF / Yazdır
          </button>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.detailPageCard} id="printable-quote">
          <div className={styles.offerHeader}>
            <div className={styles.offerCompany}>
              <div className={styles.offerLogo}><FlaskConical size={24} /> <span>LabÇözüm</span></div>
              <div className={styles.offerCompanyInfo}>
                <p>Teknoloji Geliştirme Bölgesi, No: 42</p>
                <p>Sarıyer / İstanbul</p>
                <p>destek@labcozum.com | 0212 000 00 00</p>
              </div>
            </div>
            <div className={styles.offerMeta}>
              <div className={styles.offerMetaRow}><span>Tarih:</span> <strong>{quote.date}</strong></div>
              <div className={styles.offerMetaRow}><span>Geçerlilik:</span> <strong>15 Gün</strong></div>
              <div className={styles.offerMetaRow}><span>Teklif No:</span> <strong>{quote.id}</strong></div>
            </div>
          </div>

          <div className={styles.customerInfo}>
            <h3>Müşteri Bilgileri</h3>
            <p><strong>{user.company}</strong></p>
            <p>Yetkili: {user.name}</p>
            <p>{user.email}</p>
          </div>

          <div className={styles.analysisTable}>
            <div className={styles.tableHeader}>
              <div className={styles.colDesc}>Analiz / Hizmet Tanımı</div>
              <div className={styles.colPrice}>Birim Fiyat</div>
            </div>
            {quote.details.map((d: any, i: number) => (
              <div key={i} className={styles.tableRow}>
                <div className={styles.colDesc}>
                  <div className={styles.itemName}>{d.name}</div>
                  <div className={styles.itemSub}>{d.description}</div>
                </div>
                <div className={styles.colPrice}>{d.price}</div>
              </div>
            ))}
            <div className={styles.tableFooter}>
              <div className={styles.footerLabel}>TOPLAM (KDV Hariç)</div>
              <div className={styles.footerValue}>{quote.price}</div>
            </div>
          </div>

          {quote.note && (
            <div className={styles.offerNotes}>
              <h4>Teklif Notları</h4>
              <p>{quote.note}</p>
            </div>
          )}

          <div className={styles.offerSignature}>
            <div className={styles.sigBox}>
              <p>Hazırlayan</p>
              <div className={styles.sigLine}></div>
              <p>LabÇözüm Operasyon Merkezi</p>
            </div>
            <div className={styles.sigBox}>
              <p>Onaylayan</p>
              <div className={styles.sigLine}></div>
              <p>{user.company}</p>
            </div>
          </div>
        </div>

        {quote.status === 'offered' && !rejecting && (
          <div className={`${styles.detailActions} ${styles.printHide}`}>
            <button className={styles.rowRejectBtnLarge} onClick={() => setRejecting(true)}>Reddet</button>
            <button className={styles.rowApproveBtnLarge} onClick={() => handleAction('approve')}>Teklifi Onayla</button>
          </div>
        )}

        {rejecting && (
          <div className={`${styles.rejectBox} ${styles.printHide}`}>
            <h3>Red Gerekçesi</h3>
            <textarea 
              className={styles.textarea} 
              placeholder="Neden reddettiğinizi kısaca açıklayın..."
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
            />
            <div className={styles.rejectActions}>
              <button className={styles.cancelBtn} onClick={() => setRejecting(false)}>Vazgeç</button>
              <button className={styles.saveProfileBtn} style={{ background: '#dc2626' }} onClick={() => handleAction('reject')}>Reddet ve Bildir</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
