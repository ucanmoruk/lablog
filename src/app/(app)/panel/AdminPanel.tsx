"use client";
import { useState } from 'react';
import Link from 'next/link';
import {
  PenSquare, FlaskConical, Plus, Save, Eye, Trash2,
  ChevronRight, BarChart3, FileText, Beaker,
  LogOut, Globe, X, CheckCircle2, XCircle, MessageSquare, Clock, User, Calendar
} from 'lucide-react';
import { services } from '@/data/mockData';
import { blogs as mockBlogs } from '@/data/mockData';
import { useEffect } from 'react';
import styles from './panel.module.css';

type Tab = 'dashboard' | 'blog-new' | 'blog-list' | 'analysis-new' | 'analysis-list' | 'quotes' | 'categories' | 'newsletter';

const CATEGORIES = ['Kozmetik', 'İlaç ve Hammadde', 'Tekstil ve Deri', 'Takviye Edici Gıda', 'Belgelendirme', 'Çevre ve Su', 'Ambalaj ve Plastik', 'Mikrobiyoloji'];
const SECTORS = ['Kozmetik', 'İlaç ve Hammadde', 'Tekstil ve Deri', 'Gıda & Takviye Edici Gıda', 'Çevre ve Su', 'Ambalaj ve Plastik', 'Mikrobiyoloji', 'Belgelendirme'];

const MOCK_QUOTES = [
  { id: 'Q-1001', user: 'Ahmet Yılmaz', company: 'Örnek Şirket A.Ş.', email: 'kullanici@firma.com', date: '10 Nisan 2026', items: ['RoHS Testi', 'Tekstil AZO Boyar Madde Testi'], status: 'pending' as const, price: '₺4.500' },
  { id: 'Q-1002', user: 'Fatma Demir', company: 'Test Gıda Ltd.', email: 'fatma@testgida.com', date: '18 Nisan 2026', items: ['REACH & SVHC Analizi'], status: 'pending' as const, price: '—' },
  { id: 'Q-1003', user: 'Murat Kaya', company: 'BioLab San. Tic.', email: 'murat@biolab.com', date: '20 Nisan 2026', items: ['Mikrobiyolojik Patojen Taraması', 'Ağır Metal Analizi'], status: 'approved' as const, price: '₺7.200' },
];

export default function AdminPanel() {
  const [tab, setTab] = useState<Tab>('dashboard');
  const [saved, setSaved] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<string | null>(null);
  const [quoteAction, setQuoteAction] = useState<{ id: string; type: 'price' } | null>(null);
  const [offerPrice, setOfferPrice] = useState('');
  const [adminResponse, setAdminResponse] = useState('');
  const [sendingResponse, setSendingResponse] = useState(false);
  
  // Formal Quote States
  const [quoteItems, setQuoteItems] = useState<{title: string, unitPrice: number, quantity: number}[]>([]);
  const [vatRate, setVatRate] = useState(20);
  const [quoteNotes, setQuoteNotes] = useState('');

  // Edit states
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [editingAnalysisId, setEditingAnalysisId] = useState<string | null>(null);

  const [blogList, setBlogList] = useState<any[]>([]);
  const [subscriberList, setSubscriberList] = useState<any[]>([]);
  const [quoteList, setQuoteList] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('/api/admin/blog');
      const data = await res.json();
      if (Array.isArray(data)) setBlogList(data);
    };
    const fetchSubscribers = async () => {
      const res = await fetch('/api/admin/newsletter');
      const data = await res.json();
      if (Array.isArray(data)) setSubscriberList(data);
    };
    const fetchQuotes = async () => {
        const res = await fetch('/api/admin/quotes');
        const data = await res.json();
        if (Array.isArray(data)) setQuoteList(data);
    };
    fetchBlogs();
    fetchSubscribers();
    fetchQuotes();
  }, [tab]);
  const [categoryList, setCategoryList] = useState(CATEGORIES);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const [blogForm, setBlogForm] = useState({
    title: '', category: '', author: 'Uzman Analist Ekibi',
    date: new Date().toISOString().split('T')[0],
    excerpt: '', content: '', tags: '', coverImage: '',
    featured: false,
  });

  const [analysisForm, setAnalysisForm] = useState({
    title: '', category: '', sector: '', standard: '',
    turnaroundTime: '', sampleRequirement: '', description: '',
    popular: false, price: '',
  });

  const handleSave = async () => {
    setSaved(true);
    try {
      if (tab === 'blog-new') {
        const method = editingBlogId ? 'PUT' : 'POST';
        const body = editingBlogId ? { id: editingBlogId, ...blogForm } : blogForm;
        
        const res = await fetch('/api/admin/blog', {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });

        if (res.ok) {
          setEditingBlogId(null);
          setTab('blog-list');
        } else {
          alert('Hata oluştu.');
        }
      }
      // Add similar for analysis if needed...
    } catch (err) {
      alert('Bağlantı hatası.');
    } finally {
      setSaved(false);
    }
  };

  const handleDeleteBlog = async (id: string) => {
    if (!confirm('Bu yazıyı silmek istediğinize emin misiniz?')) return;
    const res = await fetch(`/api/admin/blog?id=${id}`, { method: 'DELETE' });
    if (res.ok) {
      setBlogList(blogList.filter(b => b.id !== id));
    }
  };

  const handleEditBlog = (post: any) => {
    setEditingBlogId(post.id);
    setBlogForm({
      title: post.title,
      category: post.category,
      author: post.author || 'Uzman Analist Ekibi',
      date: post.date,
      excerpt: post.excerpt || '',
      content: post.content || '',
      tags: 'analiz, sektör, uzmanlık',
      coverImage: post.coverImage || (post as any).image || '',
      featured: post.featured || false,
    });
    setTab('blog-new');
  };

  const handleEditAnalysis = (service: any) => {
    setEditingAnalysisId(service.id);
    setAnalysisForm({
      title: service.title,
      category: service.category,
      sector: service.category,
      standard: service.standards || '',
      turnaroundTime: service.turnaroundTime || '',
      sampleRequirement: service.sampleRequirement || '',
      description: service.description,
      popular: service.popular || false,
      price: 'İstek Üzerine',
    });
    setTab('analysis-new');
  };

  const handleNewBlog = () => {
    setEditingBlogId(null);
    setBlogForm({
      title: '', category: '', author: 'Uzman Analist Ekibi',
      date: new Date().toISOString().split('T')[0],
      excerpt: '', content: '', tags: '', coverImage: '',
      featured: false,
    });
    setTab('blog-new');
  };

  const handleNewAnalysis = () => {
    setEditingAnalysisId(null);
    setAnalysisForm({
      title: '', category: '', sector: '', standard: '',
      turnaroundTime: '', sampleRequirement: '', description: '',
      popular: false, price: '',
    });
    setTab('analysis-new');
  };

  const handleSaveOffer = () => {
    alert(`Fiyat teklifi (${offerPrice}) başarıyla müşteriye iletildi.`);
    setQuoteAction(null);
    setOfferPrice('');
  };

  const handleSendResponse = async (id: string) => {
    setSendingResponse(true);
    try {
      const res = await fetch('/api/admin/quotes/respond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          id, 
          response: adminResponse,
          quoteData: {
            items: quoteItems,
            vatRate,
            notes: quoteNotes
          }
        })
      });

      if (res.ok) {
        alert("Resmi teklif başarıyla iletildi.");
        setAdminResponse('');
        setQuoteItems([]);
        setQuoteNotes('');
        // Listeyi güncelle
        setQuoteList(quoteList.map(item => item.id === id ? { 
          ...item, 
          status: 'sent', 
          response: adminResponse,
          quoteData: { items: quoteItems, vatRate, notes: quoteNotes }
        } : item));
        setSelectedQuote(null);
      } else {
        alert("Hata oluştu.");
      }
    } catch (err) {
      alert("Bağlantı hatası.");
    } finally {
      setSendingResponse(false);
    }
  };

  const addQuoteItem = () => {
    setQuoteItems([...quoteItems, { title: '', unitPrice: 0, quantity: 1 }]);
  };

  const removeRow = (index: number) => {
    setQuoteItems(quoteItems.filter((_, i) => i !== index));
  };

  const updateRow = (index: number, field: string, value: any) => {
    const newItems = [...quoteItems];
    (newItems[index] as any)[field] = value;
    setQuoteItems(newItems);
  };

  const subtotal = quoteItems.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
  const vatAmount = subtotal * (vatRate / 100);
  const grandTotal = subtotal + vatAmount;

  const liveServices = services.slice(0, 100);
  const liveBlogPosts = blogList;
  const pendingQuotes = MOCK_QUOTES.filter(q => q.price === '—');

  return (
    <div className={styles.shell}>
      {/* ── Top Header ── */}
      <header className={styles.topHeader}>
        <div className={styles.topHeaderLeft}>
          <div className={styles.topLogo}>
            <Beaker size={20} />
            <span>Yönetim Paneli</span>
          </div>
        </div>
        <div className={styles.topHeaderRight}>
          <Link href="/" className={styles.topHeaderBtn} target="_blank">
            <Globe size={16} /> Siteye Git
          </Link>
          <Link href="/" className={styles.topHeaderBtnDanger}>
            <LogOut size={16} /> Çıkış Yap
          </Link>
        </div>
      </header>

      <div className={styles.layout}>
        {/* ── Sidebar ── */}
        <aside className={styles.sidebar}>
          <nav className={styles.nav}>
            <div className={styles.navSection}>
              <div className={styles.navLabel}>Genel</div>
              <button onClick={() => setTab('dashboard')} className={`${styles.navBtn} ${tab === 'dashboard' ? styles.active : ''}`}>
                <BarChart3 size={18} /> Gösterge Paneli
              </button>
              <button onClick={() => setTab('quotes')} className={`${styles.navBtn} ${tab === 'quotes' ? styles.active : ''}`}>
                <MessageSquare size={18} /> Teklif Talepleri
                {quoteList.length > 0 && <span className={styles.navBadge}>{quoteList.length}</span>}
              </button>
              <button onClick={() => setTab('newsletter')} className={`${styles.navBtn} ${tab === 'newsletter' ? styles.active : ''}`}>
                <Globe size={18} /> Bülten Aboneleri
                {subscriberList.length > 0 && <span className={styles.navCount}>{subscriberList.length}</span>}
              </button>
            </div>
            <div className={styles.navSection}>
              <div className={styles.navLabel}>Blog Yönetimi</div>
              <button onClick={handleNewBlog} className={`${styles.navBtn} ${tab === 'blog-new' ? styles.active : ''}`}>
                <Plus size={18} /> Yeni Blog Yazısı
              </button>
              <button onClick={() => setTab('blog-list')} className={`${styles.navBtn} ${tab === 'blog-list' ? styles.active : ''}`}>
                <FileText size={18} /> Blog Yazıları <span className={styles.navCount}>{liveBlogPosts.length}</span>
              </button>
              <button onClick={() => setTab('categories')} className={`${styles.navBtn} ${tab === 'categories' ? styles.active : ''}`}>
                <ChevronRight size={18} /> Kategori Yönetimi
              </button>
            </div>
            <div className={styles.navSection}>
              <div className={styles.navLabel}>Analiz Yönetimi</div>
              <button onClick={handleNewAnalysis} className={`${styles.navBtn} ${tab === 'analysis-new' ? styles.active : ''}`}>
                <FlaskConical size={18} /> Yeni Analiz Ekle
              </button>
              <button onClick={() => setTab('analysis-list')} className={`${styles.navBtn} ${tab === 'analysis-list' ? styles.active : ''}`}>
                <PenSquare size={18} /> Analizler <span className={styles.navCount}>{liveServices.length}</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* ── Main Content ── */}
        <main className={styles.content}>

          {/* Dashboard */}
          {tab === 'dashboard' && (
            <div>
              <h1 className={styles.pageTitle}>Gösterge Paneli</h1>
              <p className={styles.pageDesc}>Site içeriklerini buradan yönetebilirsiniz.</p>
              <div className={styles.statsGrid}>
                {[
                  { label: 'Yayındaki Blog Yazısı', value: String(liveBlogPosts.length), icon: <FileText size={24} />, color: '#0066cc' },
                  { label: 'Yayındaki Analiz', value: String(liveServices.length), icon: <FlaskConical size={24} />, color: '#1d7843' },
                  { label: 'Bekleyen Teklif', value: String(quoteList.length), icon: <MessageSquare size={24} />, color: '#b45309' },
                  { label: 'Bülten Abonesi', value: String(subscriberList.length), icon: <Globe size={24} />, color: '#7c3aed' },
                ].map(s => (
                  <div key={s.label} className={styles.statCard}>
                    <div className={styles.statIco} style={{ background: `${s.color}1a`, color: s.color }}>{s.icon}</div>
                    <div className={styles.statVal}>{s.value}</div>
                    <div className={styles.statLbl}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div className={styles.quickActions}>
                <h2 className={styles.sectionTitle}>Hızlı İşlemler</h2>
                <div className={styles.quickGrid}>
                  <button onClick={handleNewBlog} className={styles.quickCard}><Plus size={20} /> Yeni Blog Yazısı Ekle <ChevronRight size={16} /></button>
                  <button onClick={handleNewAnalysis} className={styles.quickCard}><Plus size={20} /> Yeni Analiz Ekle <ChevronRight size={16} /></button>
                  <button onClick={() => setTab('quotes')} className={styles.quickCard}><MessageSquare size={20} /> Teklif Taleplerini Yönet <ChevronRight size={16} /></button>
                </div>
              </div>
            </div>
          )}

          {/* Quote Management */}
          {tab === 'quotes' && (
            <div>
              <div className={styles.pageHeader}>
                <div>
                  <h1 className={styles.pageTitle}>Teklif Talepleri</h1>
                  <p className={styles.pageDesc}>Müşteri taleplerini inceleyin ve fiyat teklifi hazırlayın.</p>
                </div>
              </div>

              <div className={styles.listTable}>
                <div className={styles.quoteTableHead}>
                  <span>Müşteri</span><span>İletişim / Mesaj</span><span>Tarih</span><span>İşlem</span>
                </div>
                {quoteList.map(q => (
                  <div key={q.id} className={styles.quoteTableRow} onClick={() => {
                    setSelectedQuote(selectedQuote === q.id ? null : q.id);
                    setAdminResponse(q.response || '');
                    if (q.quoteData) {
                        setQuoteItems(q.quoteData.items || []);
                        setVatRate(q.quoteData.vatRate || 20);
                        setQuoteNotes(q.quoteData.notes || '');
                    } else {
                        setQuoteItems([]);
                        setQuoteNotes('');
                    }
                  }}>
                    <div>
                      <div className={styles.tableTitle}>{q.name}</div>
                      <div className={styles.tableSub}>{q.email}</div>
                    </div>
                    <div className={styles.statusCell}>
                      <div className={styles.tableTitle} style={{fontSize:"0.85rem", opacity:0.8}}>{q.message?.slice(0, 50)}...</div>
                      <div className={styles.statusBadge} data-status={q.status || 'pending'}>
                        {q.status === 'sent' ? 'Teklif İletildi' : q.status === 'accepted' ? 'Onaylandı' : 'Yeni Talep'}
                      </div>
                    </div>
                    <div className={styles.tableDate}>{new Date(q.createdAt).toLocaleDateString('tr-TR')}</div>
                    <div className={styles.tableActions} onClick={e => e.stopPropagation()}>
                       <button className={styles.deleteBtn} onClick={async () => {
                           if(confirm('Talebi silmek istediğinize emin misiniz?')) {
                               await fetch(`/api/admin/quotes?id=${q.id}`, { method: 'DELETE' });
                               setQuoteList(quoteList.filter(item => item.id !== q.id));
                           }
                       }}><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
                {quoteList.length === 0 && <div className={styles.empty}>Henüz teklif talebi bulunmuyor.</div>}
              </div>
               {quoteList.map(q => selectedQuote === q.id && (
                  <div key={`detail-${q.id}`} className={styles.quoteDetail}>
                    <div className={styles.quoteDetailGrid}>
                      <div className={styles.quoteDetailLeft}>
                        <h3 className={styles.quoteDetailTitle}>Müşteri Talebi</h3>
                        <div className={styles.quoteDetailMeta}>
                          <span><User size={14} /> {q.name}</span>
                          <span><MessageSquare size={14} /> {q.email}</span>
                          <span>{q.phone && <><Clock size={14} /> {q.phone}</>}</span>
                        </div>
                        <div className={styles.messageBox}>
                            {q.message}
                        </div>
                      </div>
                      
                      <div className={styles.quoteDetailRight}>
                        <h3 className={styles.quoteDetailTitle}>Teklif Hazırla</h3>
                        
                        <div className={styles.builderTable}>
                           <div className={styles.builderHeader}>
                              <span>Hizmet / Analiz</span>
                              <span>BF (₺)</span>
                              <span>Adet</span>
                              <span></span>
                           </div>
                           {quoteItems.map((item, idx) => (
                             <div key={idx} className={styles.builderRow}>
                               <input 
                                 className={styles.builderInput} 
                                 placeholder="Analiz adı..."
                                 value={item.title}
                                 onChange={e => updateRow(idx, 'title', e.target.value)}
                                 disabled={q.status === 'sent'}
                               />
                               <input 
                                 className={styles.builderInput} 
                                 type="number"
                                 placeholder="0"
                                 value={item.unitPrice}
                                 onChange={e => updateRow(idx, 'unitPrice', parseFloat(e.target.value) || 0)}
                                 disabled={q.status === 'sent'}
                               />
                               <input 
                                 className={styles.builderInput}
                                 type="number" 
                                 value={item.quantity}
                                 onChange={e => updateRow(idx, 'quantity', parseInt(e.target.value) || 1)}
                                 disabled={q.status === 'sent'}
                               />
                               {q.status !== 'sent' && (
                                 <button className={styles.rowDelete} onClick={() => removeRow(idx)}><X size={14}/></button>
                               )}
                             </div>
                           ))}
                           {q.status !== 'sent' && (
                             <button className={styles.addRowBtn} onClick={addQuoteItem}><Plus size={14}/> Yeni Satır Ekle</button>
                           )}
                        </div>

                        <div className={styles.calculationBox}>
                           <div className={styles.calcRow}><span>Ara Toplam:</span> <span>{subtotal.toLocaleString('tr-TR')} ₺</span></div>
                           <div className={styles.calcRow}>
                             <span>KDV Oranı:</span> 
                             <select value={vatRate} onChange={e => setVatRate(parseInt(e.target.value))} disabled={q.status === 'sent'} className={styles.tinySelect}>
                               <option value={0}>%0</option>
                               <option value={10}>%10</option>
                               <option value={20}>%20</option>
                             </select>
                           </div>
                           <div className={styles.calcTotal}><span>Genel Toplam:</span> <span>{grandTotal.toLocaleString('tr-TR')} ₺</span></div>
                        </div>

                        <div style={{marginTop:"20px"}}>
                            <label className={styles.label}>Teklif Notları (Müşteriye iletilir)</label>
                            <textarea 
                               className={styles.adminResponseArea}
                               style={{minHeight:"100px"}}
                               placeholder="Örn: Analizler 3 iş günü içinde tamamlanacaktır..."
                               value={quoteNotes}
                               onChange={e => setQuoteNotes(e.target.value)}
                               disabled={q.status === 'sent'}
                            />
                        </div>

                        {q.status !== 'sent' ? (
                          <button 
                            className={styles.sendResponseBtn}
                            onClick={() => handleSendResponse(q.id)}
                            disabled={sendingResponse || quoteItems.length === 0}
                          >
                            {sendingResponse ? 'Gönderiliyor...' : 'Resmi Teklif Oluştur & Mail At'}
                          </button>
                        ) : (
                          <div className={styles.replyNotice}>
                            <CheckCircle2 size={16} /> Bu teklif müşteriye iletildi.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* New/Edit Blog Form */}
          {tab === 'blog-new' && (
            <div>
              <div className={styles.pageHeader}>
                <div>
                  <h1 className={styles.pageTitle}>{editingBlogId ? 'Blog Yazısını Düzenle' : 'Yeni Blog Yazısı'}</h1>
                  <p className={styles.pageDesc}>{editingBlogId ? `${editingBlogId} ID'li yazıyı güncelliyorsunuz.` : 'Blog yazısı oluşturun ve yayına alın.'}</p>
                </div>
                <div className={styles.headerActions}>
                  <button className={styles.previewBtn} onClick={() => setShowPreviewModal(true)}><Eye size={16} /> Önizle</button>
                  <button className={styles.saveBtn} onClick={handleSave}><Save size={16} /> {saved ? 'Kaydedildi ✓' : (editingBlogId ? 'Güncelle' : 'Kaydet')}</button>
                </div>
              </div>
              <div className={styles.formGrid}>
                <div className={styles.formMain}>
                  <div className={styles.formGroup}><label className={styles.label}>Başlık *</label><input className={styles.input} placeholder="Blog yazısı başlığını girin..." value={blogForm.title} onChange={e => setBlogForm({ ...blogForm, title: e.target.value })} /></div>
                  <div className={styles.formGroup}><label className={styles.label}>Özet *</label><textarea className={styles.textarea} rows={3} placeholder="Yazının kısa özeti..." value={blogForm.excerpt} onChange={e => setBlogForm({ ...blogForm, excerpt: e.target.value })} /></div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>İçerik (HTML Destekli) *</label>
                    <div className={styles.editorToolbar} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px', padding: '8px', background: '#f5f5f7', borderRadius: '8px' }}>
                      <button type="button" style={{ background: '#fff', border: '1px solid #ddd', padding: '6px 12px', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }} onClick={() => setBlogForm({...blogForm, content: blogForm.content + '\n<p>Yeni paragraf metni...</p>\n'})}>📝 Paragraf</button>
                      <button type="button" style={{ background: '#fff', border: '1px solid #ddd', padding: '6px 12px', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }} onClick={() => setBlogForm({...blogForm, content: blogForm.content + '\n<h2>Başlık Ekle</h2>\n'})}>T Başlık</button>
                      <button type="button" style={{ background: '#fff', border: '1px solid #ddd', padding: '6px 12px', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }} onClick={() => setBlogForm({...blogForm, content: blogForm.content + '\n<img src="https://..." alt="Görsel" style="width:100%; border-radius:12px; margin:24px 0;" />\n'})}>🖼️ Görsel</button>
                      <button type="button" style={{ background: '#fff', border: '1px solid #ddd', padding: '6px 12px', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }} onClick={() => setBlogForm({...blogForm, content: blogForm.content + '\n<div style="background: #f0f7ff; border-left: 4px solid #0066cc; padding: 20px; border-radius: 8px; margin: 24px 0;"><strong>💡 İpucu:</strong> Buraya dikkat çekici bir metin yazın...</div>\n'})}>💡 Call Out Ekle</button>
                      <button type="button" style={{ background: '#fff', border: '1px solid #ddd', padding: '6px 12px', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }} onClick={() => setBlogForm({...blogForm, content: blogForm.content + '\n<blockquote style="font-style: italic; border-left: 4px solid #ddd; padding-left: 20px; margin: 24px 0; color: #555; font-size: 1.1rem;">"Buraya önemli bir alıntı veya söz yazın..."</blockquote>\n'})}>❝ Alıntı Ekle</button>
                    </div>
                    <textarea className={styles.editor} rows={20} placeholder={`<p>İçeriğinizi buraya yazın...</p>`} value={blogForm.content} onChange={e => setBlogForm({ ...blogForm, content: e.target.value })} />
                  </div>
                  <div className={styles.formGroup}><label className={styles.label}>Etiketler</label><input className={styles.input} placeholder="analiz, kozmetik (virgülle ayırın)" value={blogForm.tags} onChange={e => setBlogForm({ ...blogForm, tags: e.target.value })} /></div>
                </div>
                <div className={styles.formSide}>
                  <div className={styles.sideCard}>
                    <h3 className={styles.sideTitle}>Yayın Bilgileri</h3>
                    <div className={styles.formGroup}><label className={styles.label}>Kategori *</label><select className={styles.select} value={blogForm.category} onChange={e => setBlogForm({ ...blogForm, category: e.target.value })}><option value="">Seçin...</option>{categoryList.map(c => <option key={c}>{c}</option>)}</select></div>
                    <div className={styles.formGroup}><label className={styles.label}>Yazar</label><input className={styles.input} value={blogForm.author} onChange={e => setBlogForm({ ...blogForm, author: e.target.value })} /></div>
                    <div className={styles.formGroup}><label className={styles.label}>Yayın Tarihi</label><input type="date" className={styles.input} value={blogForm.date} onChange={e => setBlogForm({ ...blogForm, date: e.target.value })} /></div>
                    <div className={styles.formGroup} style={{ marginTop: '10px' }}><label className={styles.checkLabel}><input type="checkbox" checked={blogForm.featured} onChange={e => setBlogForm({ ...blogForm, featured: e.target.checked })} /> <strong>Öne Çıkan Yazı</strong></label></div>
                  </div>
                  <div className={styles.sideCard}>
                    <h3 className={styles.sideTitle}>Medya</h3>
                    <div className={styles.formGroup}><label className={styles.label}>Kapak Görseli URL</label><input className={styles.input} placeholder="https://..." value={blogForm.coverImage} onChange={e => setBlogForm({ ...blogForm, coverImage: e.target.value })} /></div>
                    {blogForm.coverImage && <div style={{ marginTop: '12px', borderRadius: '8px', overflow: 'hidden', height: '120px', background: '#eee' }}><img src={blogForm.coverImage} alt="Kapak Önizleme" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => (e.currentTarget.style.display = 'none')} /></div>}
                  </div>
                  <div className={styles.sideCard}>
                    <h3 className={styles.sideTitle}>SEO — URL Önizleme</h3>
                    <div className={styles.slugPreview}><span className={styles.slugLabel}>URL:</span><span className={styles.slugValue}>/blog/{blogForm.title ? blogForm.title.toLowerCase().replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').substring(0, 50) : 'yazi-basligi'}</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* New/Edit Analysis Form */}
          {tab === 'analysis-new' && (
            <div>
              <div className={styles.pageHeader}>
                <div><h1 className={styles.pageTitle}>{editingAnalysisId ? 'Analizi Düzenle' : 'Yeni Analiz Ekle'}</h1><p className={styles.pageDesc}>{editingAnalysisId ? `${editingAnalysisId} ID'li analizi güncelliyorsunuz.` : 'Hizmet kataloğuna yeni bir analiz testi ekleyin.'}</p></div>
                <div className={styles.headerActions}><button className={styles.saveBtn} onClick={handleSave}><Save size={16} /> {saved ? 'Kaydedildi ✓' : (editingAnalysisId ? 'Güncelle' : 'Kaydet')}</button></div>
              </div>
              <div className={styles.formGrid}>
                <div className={styles.formMain}>
                  <div className={styles.formGroup}><label className={styles.label}>Analiz Adı *</label><input className={styles.input} placeholder="Örn: Mikrobiyolojik Patojen Taraması" value={analysisForm.title} onChange={e => setAnalysisForm({ ...analysisForm, title: e.target.value })} /></div>
                  <div className={styles.row2}>
                    <div className={styles.formGroup}><label className={styles.label}>Kategori *</label><select className={styles.select} value={analysisForm.category} onChange={e => setAnalysisForm({ ...analysisForm, category: e.target.value })}><option value="">Seçin...</option>{CATEGORIES.map(c => <option key={c}>{c}</option>)}</select></div>
                    <div className={styles.formGroup}><label className={styles.label}>Sektör</label><select className={styles.select} value={analysisForm.sector} onChange={e => setAnalysisForm({ ...analysisForm, sector: e.target.value })}><option value="">Seçin...</option>{SECTORS.map(s => <option key={s}>{s}</option>)}</select></div>
                  </div>
                  <div className={styles.formGroup}><label className={styles.label}>Açıklama *</label><textarea className={styles.textarea} rows={5} placeholder="Analizin kapsamını açıklayın..." value={analysisForm.description} onChange={e => setAnalysisForm({ ...analysisForm, description: e.target.value })} /></div>
                  <div className={styles.row3}>
                    <div className={styles.formGroup}><label className={styles.label}>Standart</label><input className={styles.input} placeholder="ISO 21149" value={analysisForm.standard} onChange={e => setAnalysisForm({ ...analysisForm, standard: e.target.value })} /></div>
                    <div className={styles.formGroup}><label className={styles.label}>Süre</label><input className={styles.input} placeholder="3-5 İş Günü" value={analysisForm.turnaroundTime} onChange={e => setAnalysisForm({ ...analysisForm, turnaroundTime: e.target.value })} /></div>
                    <div className={styles.formGroup}><label className={styles.label}>Numune Miktarı</label><input className={styles.input} placeholder="Min. 100 gr" value={analysisForm.sampleRequirement} onChange={e => setAnalysisForm({ ...analysisForm, sampleRequirement: e.target.value })} /></div>
                  </div>
                </div>
                <div className={styles.formSide}>
                  <div className={styles.sideCard}>
                    <h3 className={styles.sideTitle}>Ayarlar</h3>
                    <div className={styles.formGroup}><label className={styles.checkLabel}><input type="checkbox" checked={analysisForm.popular} onChange={e => setAnalysisForm({ ...analysisForm, popular: e.target.checked })} /> Popüler Analiz olarak işaretle</label></div>
                    <div className={styles.formGroup}><label className={styles.label}>Fiyat Bilgisi</label><input className={styles.input} placeholder="İstek Üzerine / ₺ 850" value={analysisForm.price} onChange={e => setAnalysisForm({ ...analysisForm, price: e.target.value })} /></div>
                  </div>
                  <div className={styles.sideCard}>
                    <h3 className={styles.sideTitle}>Önizleme</h3>
                    <div className={styles.previewCard}>
                      <div className={styles.previewTitle}>{analysisForm.title || 'Analiz Adı'}</div>
                      <div className={styles.previewMeta}>{analysisForm.standard && <span>{analysisForm.standard}</span>}{analysisForm.turnaroundTime && <span>{analysisForm.turnaroundTime}</span>}</div>
                      <p className={styles.previewDesc}>{analysisForm.description || 'Açıklama buraya gelecek...'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog List — Live Data */}
          {tab === 'blog-list' && (
            <div>
              <div className={styles.pageHeader}>
                <div><h1 className={styles.pageTitle}>Blog Yazıları</h1><p className={styles.pageDesc}>{liveBlogPosts.length} yayındaki yazı.</p></div>
                <button onClick={handleNewBlog} className={styles.saveBtn}><Plus size={16} /> Yeni Ekle</button>
              </div>
              <div className={styles.listTable}>
                <div className={styles.tableHead}><span>Başlık</span><span>Kategori</span><span>Tarih</span><span>İşlem</span></div>
                {liveBlogPosts.map(post => (
                  <div key={post.id} className={styles.tableRow}>
                    <span className={styles.tableTitle}>{post.title}</span>
                    <span className={styles.tableCat}>{post.category}</span>
                    <span className={styles.tableDate}>{post.date}</span>
                    <div className={styles.tableActions}>
                      <button className={styles.editBtn} onClick={() => { setBlogForm({...post, coverImage: (post as any).coverImage || (post as any).image || ''} as any); setShowPreviewModal(true); }}><Eye size={14} /></button>
                      <button className={styles.editBtn} onClick={() => handleEditBlog(post)}><PenSquare size={14} /></button>
                      <button className={styles.deleteBtn} onClick={() => handleDeleteBlog(post.id)}><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analysis List — Live Data */}
          {tab === 'analysis-list' && (
            <div>
              <div className={styles.pageHeader}>
                <div><h1 className={styles.pageTitle}>Analizler</h1><p className={styles.pageDesc}>{liveServices.length} yayındaki analiz.</p></div>
                <button onClick={handleNewAnalysis} className={styles.saveBtn}><Plus size={16} /> Yeni Ekle</button>
              </div>
              <div className={styles.listTable}>
                <div className={styles.tableHead}><span>Analiz Adı</span><span>Kategori</span><span>Süre</span><span>İşlem</span></div>
                {liveServices.map(s => (
                  <div key={s.id} className={styles.tableRow}>
                    <span className={styles.tableTitle}>{s.title}</span>
                    <span className={styles.tableCat}>{s.category}</span>
                    <span className={styles.tableDate}>{s.turnaroundTime}</span>
                    <div className={styles.tableActions}>
                      <Link href={`/analizler/${s.id}`} target="_blank" className={styles.editBtn}><Eye size={14} /></Link>
                      <button className={styles.editBtn} onClick={() => handleEditAnalysis(s)}><PenSquare size={14} /></button>
                      <button className={styles.deleteBtn}><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Category Management */}
          {tab === 'categories' && (
            <div>
              <div className={styles.pageHeader}>
                <div><h1 className={styles.pageTitle}>Kategori Yönetimi</h1><p className={styles.pageDesc}>Blog ve analiz kategorilerini ekleyip çıkarın.</p></div>
              </div>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', maxWidth: '400px' }}>
                <input className={styles.input} value={newCategoryName} onChange={e => setNewCategoryName(e.target.value)} placeholder="Yeni kategori adı..." />
                <button className={styles.saveBtn} onClick={() => { if(newCategoryName.trim() && !categoryList.includes(newCategoryName)) { setCategoryList([...categoryList, newCategoryName.trim()]); setNewCategoryName(''); } }}>Ekle</button>
              </div>
              <div className={styles.listTable} style={{ maxWidth: '600px' }}>
                <div className={styles.tableHead}><span>Kategori Adı</span><span>İşlem</span></div>
                {categoryList.map(c => (
                  <div key={c} className={styles.tableRow}>
                    <span className={styles.tableTitle}>{c}</span>
                    <div className={styles.tableActions}>
                      <button className={styles.deleteBtn} onClick={() => setCategoryList(categoryList.filter(cat => cat !== c))}><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter Subscribers */}
          {tab === 'newsletter' && (
            <div>
              <div className={styles.pageHeader}>
                <div><h1 className={styles.pageTitle}>Bülten Aboneleri</h1><p className={styles.pageDesc}>Haftalık bülteninize kayıt olan kullanıcı listesi.</p></div>
              </div>
              <div className={styles.listTable}>
                <div className={styles.tableHead}><span>E-posta Adresi</span><span>Kayıt Tarihi</span><span>İşlem</span></div>
                {subscriberList?.map(s => (
                  <div key={s.id} className={styles.tableRow}>
                    <span className={styles.tableTitle}>{s.email}</span>
                    <span className={styles.tableDate}>{new Date(s.createdAt).toLocaleDateString('tr-TR')}</span>
                    <div className={styles.tableActions}>
                      <button className={styles.deleteBtn} onClick={async () => {
                         if(confirm('Aboneyi silmek istediğinize emin misiniz?')) {
                           await fetch(`/api/admin/newsletter?id=${s.id}`, { method: 'DELETE' });
                           setSubscriberList(subscriberList.filter(sub => sub.id !== s.id));
                         }
                      }}><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
                {(!subscriberList || subscriberList.length === 0) && <div className={styles.empty}>Henüz abone bulunmuyor.</div>}
              </div>
            </div>
          )}

        </main>
      </div>

      {/* ── Blog Preview Modal ── */}
      {showPreviewModal && (
        <div className={styles.modalOverlay} onClick={() => setShowPreviewModal(false)} style={{ zIndex: 9999 }}>
          <div className={styles.modal} onClick={e => e.stopPropagation()} style={{ maxWidth: '800px', width: '90%', maxHeight: '90vh', overflowY: 'auto' }}>
            <button className={styles.modalClose} onClick={() => setShowPreviewModal(false)}><X size={20} /></button>
            
            {/* Preview Content */}
            <div style={{ padding: '20px' }}>
              <div style={{ display: 'inline-block', background: '#e0f2fe', color: '#0369a1', padding: '4px 12px', borderRadius: '100px', fontSize: '13px', fontWeight: '600', marginBottom: '16px' }}>{blogForm.category || 'Kategori Yok'}</div>
              <h1 style={{ fontSize: '2.4rem', fontWeight: 'bold', color: '#111', marginBottom: '20px', lineHeight: '1.2' }}>{blogForm.title || 'Başlık Girilmedi'}</h1>
              <div style={{ display: 'flex', gap: '24px', color: '#666', borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '30px', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><User size={16} /> {blogForm.author || 'Belirsiz'}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> {blogForm.date || 'Tarih Yok'}</div>
              </div>
              
              {blogForm.coverImage && (
                <div style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', marginBottom: '40px' }}>
                  <img src={blogForm.coverImage} alt="Kapak" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
              
              {blogForm.excerpt && (
                <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.6', marginBottom: '40px', fontWeight: '500' }}>{blogForm.excerpt}</p>
              )}
              
              <div 
                style={{ fontSize: '1.05rem', color: '#333', lineHeight: '1.8' }}
                dangerouslySetInnerHTML={{ __html: blogForm.content || '<p style="color: #999; font-style: italic;">İçerik henüz girilmedi.</p>' }}
              />
            </div>

            <div className={styles.modalActions} style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
              <button className={styles.modalApproveBtn} style={{ background: '#0066cc', width: '100%' }} onClick={() => setShowPreviewModal(false)}>Önizlemeyi Kapat</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Price Offer Modal ── */}
      {quoteAction && (
        <div className={styles.modalOverlay} onClick={() => setQuoteAction(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setQuoteAction(null)}><X size={20} /></button>
            <div className={styles.modalIcon} style={{ background: '#f0f7ff', color: '#0066cc' }}><MessageSquare size={32} /></div>
            <h2 className={styles.modalTitle}>Fiyat Teklifi Hazırla</h2>
            <p className={styles.modalDesc}>{MOCK_QUOTES.find(q => q.id === quoteAction.id)?.id} numaralı talep için toplam tutar belirleyin.</p>
            <div className={styles.formGroup}>
              <label className={styles.label}>Teklif Tutarı (KDV Dahil)</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Örn: ₺5.400"
                value={offerPrice}
                onChange={e => setOfferPrice(e.target.value)}
              />
            </div>
            <textarea
              className={styles.modalTextarea}
              rows={3}
              placeholder="Müşteriye iletilecek ek notlar..."
            />
            <div className={styles.modalActions}>
              <button className={styles.modalCancelBtn} onClick={() => setQuoteAction(null)}>Vazgeç</button>
              <button className={styles.modalApproveBtn} style={{ background: '#0066cc' }} onClick={handleSaveOffer}>Teklifi Gönder</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
