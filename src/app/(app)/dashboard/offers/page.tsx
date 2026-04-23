"use client";
import { useState, useEffect } from 'react';
import { ShoppingBag, Bell, Search, X, CheckCircle2, Download, Printer, Eye } from 'lucide-react';
import styles from '../dashboard.module.css';

export default function OffersPage() {
  const [myQuotes, setMyQuotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState<any>(null);
  const [rejectReason, setRejectReason] = useState('');
  const [isRejecting, setIsRejecting] = useState(false);
  const [processingAction, setProcessingAction] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('labUser');
    if (stored) {
      const data = JSON.parse(stored);
      fetchQuotes(data.email);
    }
  }, []);

  const fetchQuotes = async (email: string) => {
    try {
      const res = await fetch(`/api/quotes/my?email=${email}`);
      const data = await res.json();
      if (Array.isArray(data)) setMyQuotes(data);
    } catch (err) {
      console.error("Quotes could not be fetched.");
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id: string, action: 'approve' | 'reject') => {
    setProcessingAction(true);
    try {
      const res = await fetch('/api/quotes/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action, reason: action === 'reject' ? rejectReason : '' })
      });
      if (res.ok) {
        alert(action === 'approve' ? "Teklif başarıyla onaylandı!" : "Teklif reddedildi.");
        setSelectedQuote(null);
        setIsRejecting(false);
        setRejectReason('');
        // Refresh local list
        const stored = localStorage.getItem('labUser');
        if (stored) {
          const data = JSON.parse(stored);
          fetchQuotes(data.email);
        }
      }
    } catch (err) {
      alert("İşlem sırasında hata oluştu.");
    } finally {
      setProcessingAction(false);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.headerInfo}>
            <h2 className={styles.cardTitle}>Resmi Teklif Geçmişi</h2>
            <p className={styles.cardDesc}>Tarafınıza iletilen tüm resmi fiyat tekliflerini buradan inceleyebilirsiniz.</p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ position: "relative" }}>
              <Search size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#86868b" }} />
              <input
                className={styles.input}
                style={{ paddingLeft: "36px", height: "38px", fontSize: "13px", width: "200px" }}
                placeholder="Teklif no ara..."
              />
            </div>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Teklif No</th>
                <th>Talep / Analiz Detayı</th>
                <th>Durum</th>
                <th>Toplam Tutar</th>
                <th>Tarih</th>
                <th>İşlem</th>
              </tr>
            </thead>
            <tbody>
              {myQuotes.map((q) => {
                const qData = q.quoteData || {};
                const items = qData.items || [];
                const subtotal = items.reduce((acc: number, it: any) => acc + (it.unitPrice * it.quantity), 0);
                const discount = subtotal * ((qData.discountRate || 0) / 100);
                const vat = (subtotal - discount) * ((qData.vatRate || 20) / 100);
                const total = (subtotal - discount) + vat;

                return (
                  <tr key={q.id}>
                    <td>
                      <span className={styles.tableId}>#{q.id.substring(0, 8).toUpperCase()}</span>
                    </td>
                    <td>
                      <div className={styles.tableItems}>
                        {items.length > 0 ? items[0].title : (q.message?.slice(0, 40) + '...')}
                        {items.length > 1 && <span className={styles.moreTag}>+{items.length - 1} Daha</span>}
                      </div>
                    </td>
                    <td>
                      <div
                        className={styles.statusPill}
                        style={{
                          background: q.status === 'sent' ? '#f0fdf4' : (q.status === 'accepted' ? '#eff6ff' : '#fffbeb'),
                          color: q.status === 'sent' ? '#166534' : (q.status === 'accepted' ? '#1e40af' : '#b45309')
                        }}
                      >
                        {q.status === 'sent' ? 'Teklif İletildi' : (q.status === 'accepted' ? 'Onaylandı' : 'Talep Alındı')}
                      </div>
                    </td>
                    <td>
                      <span className={styles.tablePrice}>
                        {q.status === 'sent' || q.status === 'accepted' ? `${total.toLocaleString('tr-TR')} ₺` : 'Fiyat Bekliyor'}
                      </span>
                    </td>
                    <td className={styles.tableDate}>
                      {new Date(q.createdAt).toLocaleDateString('tr-TR')}
                    </td>
                    <td>
                      <button
                        className={styles.tableActionBtn}
                        disabled={q.status === 'pending'}
                        onClick={() => setSelectedQuote(q)}
                      >
                        <Eye size={14} /> Detayları Gör
                      </button>
                    </td>
                  </tr>
                );
              })}
              {myQuotes.length === 0 && !loading && (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: "60px", color: "#86868b" }}>
                    <div style={{ marginBottom: "15px" }}><ShoppingBag size={40} opacity={0.2} /></div>
                    Henüz tarafınıza iletilmiş bir teklif bulunmuyor.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Detail Modal ── */}
      {selectedQuote && (
        <div className={styles.modalOverlay} onClick={() => setSelectedQuote(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <ShoppingBag size={20} color="var(--primary)" />
                <div>
                  <h3 style={{ margin: 0, fontSize: "15px" }}>Teklif Detayı</h3>
                  <span style={{ fontSize: "12px", color: "#86868b" }}>No: #{selectedQuote.id.substring(0, 8).toUpperCase()}</span>
                </div>
              </div>
              <button className={styles.closeBtn} onClick={() => setSelectedQuote(null)}><X size={20} /></button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.detailMetaGrid}>
                <div className={styles.metaItem}>
                  <label>Durum</label>
                  <div className={styles.statusPill} style={{
                    background: selectedQuote.status === 'sent' ? '#f0fdf4' : '#eff6ff',
                    color: selectedQuote.status === 'sent' ? '#166534' : '#1e40af'
                  }}>
                    {selectedQuote.status === 'sent' ? 'Teklif İletildi' : 'Onaylandı'}
                  </div>
                </div>
                <div className={styles.metaItem}>
                  <label>Tarih</label>
                  <span>{new Date(selectedQuote.createdAt).toLocaleDateString('tr-TR')}</span>
                </div>
              </div>

              <div className={styles.itemizedList}>
                <div className={styles.listHeader}>
                  <span>Hizmet / Analiz</span>
                  <span>Birim</span>
                  <span>Adet</span>
                  <span style={{ textAlign: "right" }}>Toplam</span>
                </div>
                {(selectedQuote.quoteData?.items || []).map((item: any, i: number) => (
                  <div key={i} className={styles.listItem}>
                    <span style={{ fontWeight: 600 }}>{item.title}</span>
                    <span style={{ color: "#86868b" }}>{item.unitPrice.toLocaleString('tr-TR')} ₺</span>
                    <span style={{ color: "#86868b" }}>{item.quantity}</span>
                    <span style={{ textAlign: "right", fontWeight: 700 }}>{(item.unitPrice * item.quantity).toLocaleString('tr-TR')} ₺</span>
                  </div>
                ))}
              </div>

              <div className={styles.modalCalculation}>
                <div className={styles.calcLine}>
                  <span>Ara Toplam</span>
                  <span>{(selectedQuote.quoteData?.items || []).reduce((acc: any, it: any) => acc + (it.unitPrice * it.quantity), 0).toLocaleString('tr-TR')} ₺</span>
                </div>
                {selectedQuote.quoteData?.discountRate > 0 && (
                  <div className={styles.calcLine} style={{ color: "#dc2626" }}>
                    <span>İskonto (%{selectedQuote.quoteData.discountRate})</span>
                    <span>-{(selectedQuote.quoteData.items.reduce((acc: any, it: any) => acc + (it.unitPrice * it.quantity), 0) * (selectedQuote.quoteData.discountRate / 100)).toLocaleString('tr-TR')} ₺</span>
                  </div>
                )}
                <div className={styles.calcLine}>
                  <span>KDV (%{selectedQuote.quoteData?.vatRate || 20})</span>
                  <span>{((selectedQuote.quoteData.items.reduce((acc: any, it: any) => acc + (it.unitPrice * it.quantity), 0) * (1 - (selectedQuote.quoteData.discountRate || 0) / 100)) * ((selectedQuote.quoteData.vatRate || 20) / 100)).toLocaleString('tr-TR')} ₺</span>
                </div>
                <div className={styles.calcTotalLine}>
                  <span>Genel Toplam</span>
                  <span>{
                    ((selectedQuote.quoteData.items.reduce((acc: any, it: any) => acc + (it.unitPrice * it.quantity), 0) * (1 - (selectedQuote.quoteData.discountRate || 0) / 100)) * (1 + (selectedQuote.quoteData.vatRate || 20) / 100)).toLocaleString('tr-TR')
                  } ₺</span>
                </div>
              </div>

              {selectedQuote.quoteData?.notes && (
                <div className={styles.modalNotes}>
                  <label>Yönetici Notu:</label>
                  <p>{selectedQuote.quoteData.notes}</p>
                </div>
              )}

              {isRejecting && (
                <div className={styles.rejectBox} style={{ marginTop: "20px", padding: "20px", background: "#fff5f5", border: "1px solid #feb2b2", borderRadius: "12px" }}>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#c53030" }}>Red Nedeni (Zorunlu)</label>
                  <textarea
                    className={styles.textarea}
                    placeholder="Fiyat yüksek bulundu, analiz süresi yetersiz vb..."
                    value={rejectReason}
                    onChange={e => setRejectReason(e.target.value)}
                    style={{ marginTop: "10px" }}
                  />
                  <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                    <button
                      className={styles.primaryBtn}
                      style={{ background: "#c53030" }}
                      onClick={() => handleAction(selectedQuote.id, 'reject')}
                      disabled={!rejectReason || processingAction}
                    >
                      {processingAction ? 'İşleniyor...' : 'Reddi Onayla'}
                    </button>
                    <button className={styles.secondaryBtn} onClick={() => setIsRejecting(false)}>Vazgeç</button>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.modalFooter}>
              {!isRejecting && selectedQuote.status === 'sent' && (
                <div style={{ display: "flex", gap: "10px", marginRight: "auto" }}>
                  <button
                    className={styles.primaryBtn}
                    style={{ background: "#1d7843" }}
                    onClick={() => handleAction(selectedQuote.id, 'approve')}
                    disabled={processingAction}
                  >
                    <CheckCircle2 size={16} /> {processingAction ? 'İşleniyor...' : 'Teklifi Onayla'}
                  </button>
                  <button
                    className={styles.secondaryBtn}
                    style={{ color: "#c53030", borderColor: "#feb2b2" }}
                    onClick={() => setIsRejecting(true)}
                    disabled={processingAction}
                  >
                    Reddet
                  </button>
                </div>
              )}
              <button className={styles.secondaryBtn} onClick={() => window.print()}>
                <Printer size={16} /> Yazdır
              </button>
              <button className={styles.primaryBtn}>
                <Download size={16} /> PDF İndir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
