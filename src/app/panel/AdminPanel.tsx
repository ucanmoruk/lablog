"use client";
import { useState } from 'react';
import { PenSquare, FlaskConical, Plus, Save, Eye, Trash2, ChevronRight, BarChart3, FileText, Beaker } from 'lucide-react';
import styles from './panel.module.css';

type Tab = 'dashboard' | 'blog-new' | 'blog-list' | 'analysis-new' | 'analysis-list';

const CATEGORIES = ['Kozmetik', 'İlaç ve Hammadde', 'Tekstil ve Deri', 'Takviye Edici Gıda', 'Belgelendirme', 'Çevre ve Su', 'Ambalaj ve Plastik', 'Mikrobiyoloji'];
const SECTORS = ['Kozmetik', 'İlaç ve Hammadde', 'Tekstil ve Deri', 'Gıda & Takviye Edici Gıda', 'Çevre ve Su', 'Ambalaj ve Plastik', 'Mikrobiyoloji', 'Belgelendirme'];

export default function AdminPanel() {
  const [tab, setTab] = useState<Tab>('dashboard');
  const [saved, setSaved] = useState(false);

  // Blog form state
  const [blogForm, setBlogForm] = useState({
    title: '', category: '', author: 'Uzman Analist Ekibi',
    date: new Date().toISOString().split('T')[0],
    excerpt: '', content: '', tags: '',
  });

  // Analysis form state
  const [analysisForm, setAnalysisForm] = useState({
    title: '', category: '', sector: '', standard: '',
    turnaroundTime: '', sampleRequirement: '', description: '',
    popular: false, price: '',
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarLogo}>
          <Beaker size={24} />
          <span>Yönetim Paneli</span>
        </div>

        <nav className={styles.nav}>
          <div className={styles.navSection}>
            <div className={styles.navLabel}>Genel</div>
            <button onClick={() => setTab('dashboard')} className={`${styles.navBtn} ${tab === 'dashboard' ? styles.active : ''}`}>
              <BarChart3 size={18} /> Gösterge Paneli
            </button>
          </div>
          <div className={styles.navSection}>
            <div className={styles.navLabel}>Blog Yönetimi</div>
            <button onClick={() => setTab('blog-new')} className={`${styles.navBtn} ${tab === 'blog-new' ? styles.active : ''}`}>
              <Plus size={18} /> Yeni Blog Yazısı
            </button>
            <button onClick={() => setTab('blog-list')} className={`${styles.navBtn} ${tab === 'blog-list' ? styles.active : ''}`}>
              <FileText size={18} /> Blog Yazıları
            </button>
          </div>
          <div className={styles.navSection}>
            <div className={styles.navLabel}>Analiz Yönetimi</div>
            <button onClick={() => setTab('analysis-new')} className={`${styles.navBtn} ${tab === 'analysis-new' ? styles.active : ''}`}>
              <FlaskConical size={18} /> Yeni Analiz Ekle
            </button>
            <button onClick={() => setTab('analysis-list')} className={`${styles.navBtn} ${tab === 'analysis-list' ? styles.active : ''}`}>
              <PenSquare size={18} /> Analizler
            </button>
          </div>
        </nav>
      </aside>

      {/* Main */}
      <main className={styles.content}>
        {/* Dashboard */}
        {tab === 'dashboard' && (
          <div>
            <h1 className={styles.pageTitle}>Gösterge Paneli</h1>
            <p className={styles.pageDesc}>Site içeriklerini buradan yönetebilirsiniz.</p>
            <div className={styles.statsGrid}>
              {[
                { label: 'Toplam Blog Yazısı', value: '15', icon: <FileText size={24} />, color: '#0066cc' },
                { label: 'Toplam Analiz', value: '100', icon: <FlaskConical size={24} />, color: '#1d7843' },
                { label: 'Sektör Sayfası', value: '8', icon: <BarChart3 size={24} />, color: '#b45309' },
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
                <button onClick={() => setTab('blog-new')} className={styles.quickCard}>
                  <Plus size={20} /> Yeni Blog Yazısı Ekle <ChevronRight size={16} />
                </button>
                <button onClick={() => setTab('analysis-new')} className={styles.quickCard}>
                  <Plus size={20} /> Yeni Analiz Ekle <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* New Blog Form */}
        {tab === 'blog-new' && (
          <div>
            <div className={styles.pageHeader}>
              <div>
                <h1 className={styles.pageTitle}>Yeni Blog Yazısı</h1>
                <p className={styles.pageDesc}>Blog yazısı oluşturun ve yayına alın.</p>
              </div>
              <div className={styles.headerActions}>
                <button className={styles.previewBtn}><Eye size={16} /> Önizle</button>
                <button className={styles.saveBtn} onClick={handleSave}><Save size={16} /> {saved ? 'Kaydedildi ✓' : 'Kaydet'}</button>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formMain}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Başlık *</label>
                  <input className={styles.input} placeholder="Blog yazısı başlığını girin..." value={blogForm.title} onChange={e => setBlogForm({ ...blogForm, title: e.target.value })} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Özet (Excerpt) *</label>
                  <textarea className={styles.textarea} rows={3} placeholder="Yazının kısa özeti — liste ve arama sonuçlarında görünür" value={blogForm.excerpt} onChange={e => setBlogForm({ ...blogForm, excerpt: e.target.value })} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>İçerik *</label>
                  <div className={styles.editorHint}>Paragrafları boş satırla ayırın. Başlıklar için satır başına ## veya ### kullanın.</div>
                  <textarea className={styles.editor} rows={20} placeholder={`## Giriş\n\nBuraya içeriği yazın...\n\n## Alt Başlık\n\nDevam eden içerik...`} value={blogForm.content} onChange={e => setBlogForm({ ...blogForm, content: e.target.value })} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Etiketler</label>
                  <input className={styles.input} placeholder="analiz, kozmetik, mikrobiyoloji (virgülle ayırın)" value={blogForm.tags} onChange={e => setBlogForm({ ...blogForm, tags: e.target.value })} />
                </div>
              </div>

              <div className={styles.formSide}>
                <div className={styles.sideCard}>
                  <h3 className={styles.sideTitle}>Yayın Bilgileri</h3>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Kategori *</label>
                    <select className={styles.select} value={blogForm.category} onChange={e => setBlogForm({ ...blogForm, category: e.target.value })}>
                      <option value="">Seçin...</option>
                      {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Yazar</label>
                    <input className={styles.input} value={blogForm.author} onChange={e => setBlogForm({ ...blogForm, author: e.target.value })} />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Yayın Tarihi</label>
                    <input type="date" className={styles.input} value={blogForm.date} onChange={e => setBlogForm({ ...blogForm, date: e.target.value })} />
                  </div>
                </div>

                <div className={styles.sideCard}>
                  <h3 className={styles.sideTitle}>SEO</h3>
                  <div className={styles.slugPreview}>
                    <span className={styles.slugLabel}>URL Önizleme:</span>
                    <span className={styles.slugValue}>/blog/{blogForm.title ? blogForm.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').substring(0, 50) : 'yazi-basligi'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* New Analysis Form */}
        {tab === 'analysis-new' && (
          <div>
            <div className={styles.pageHeader}>
              <div>
                <h1 className={styles.pageTitle}>Yeni Analiz Ekle</h1>
                <p className={styles.pageDesc}>Hizmet kataloğuna yeni bir analiz testi ekleyin.</p>
              </div>
              <div className={styles.headerActions}>
                <button className={styles.saveBtn} onClick={handleSave}><Save size={16} /> {saved ? 'Kaydedildi ✓' : 'Kaydet'}</button>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formMain}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Analiz Adı *</label>
                  <input className={styles.input} placeholder="Örn: Mikrobiyolojik Patojen Taraması" value={analysisForm.title} onChange={e => setAnalysisForm({ ...analysisForm, title: e.target.value })} />
                </div>
                <div className={styles.row2}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Kategori *</label>
                    <select className={styles.select} value={analysisForm.category} onChange={e => setAnalysisForm({ ...analysisForm, category: e.target.value })}>
                      <option value="">Seçin...</option>
                      {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Sektör</label>
                    <select className={styles.select} value={analysisForm.sector} onChange={e => setAnalysisForm({ ...analysisForm, sector: e.target.value })}>
                      <option value="">Seçin...</option>
                      {SECTORS.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Açıklama *</label>
                  <textarea className={styles.textarea} rows={5} placeholder="Analizin kapsamını, yöntemini ve uygulama alanlarını açıklayın..." value={analysisForm.description} onChange={e => setAnalysisForm({ ...analysisForm, description: e.target.value })} />
                </div>
                <div className={styles.row3}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Standart</label>
                    <input className={styles.input} placeholder="ISO 21149" value={analysisForm.standard} onChange={e => setAnalysisForm({ ...analysisForm, standard: e.target.value })} />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Süre</label>
                    <input className={styles.input} placeholder="3-5 İş Günü" value={analysisForm.turnaroundTime} onChange={e => setAnalysisForm({ ...analysisForm, turnaroundTime: e.target.value })} />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Numune Miktarı</label>
                    <input className={styles.input} placeholder="Minimum 100 gr" value={analysisForm.sampleRequirement} onChange={e => setAnalysisForm({ ...analysisForm, sampleRequirement: e.target.value })} />
                  </div>
                </div>
              </div>

              <div className={styles.formSide}>
                <div className={styles.sideCard}>
                  <h3 className={styles.sideTitle}>Ayarlar</h3>
                  <div className={styles.formGroup}>
                    <label className={styles.checkLabel}>
                      <input type="checkbox" checked={analysisForm.popular} onChange={e => setAnalysisForm({ ...analysisForm, popular: e.target.checked })} />
                      Popüler Analiz olarak işaretle
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Fiyat Bilgisi</label>
                    <input className={styles.input} placeholder="İstek Üzerine / ₺ 850" value={analysisForm.price} onChange={e => setAnalysisForm({ ...analysisForm, price: e.target.value })} />
                  </div>
                </div>

                <div className={styles.sideCard}>
                  <h3 className={styles.sideTitle}>Önizleme</h3>
                  <div className={styles.previewCard}>
                    <div className={styles.previewTitle}>{analysisForm.title || 'Analiz Adı'}</div>
                    <div className={styles.previewMeta}>
                      {analysisForm.standard && <span>{analysisForm.standard}</span>}
                      {analysisForm.turnaroundTime && <span>{analysisForm.turnaroundTime}</span>}
                    </div>
                    <p className={styles.previewDesc}>{analysisForm.description || 'Açıklama buraya gelecek...'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog List */}
        {tab === 'blog-list' && (
          <div>
            <div className={styles.pageHeader}>
              <div>
                <h1 className={styles.pageTitle}>Blog Yazıları</h1>
                <p className={styles.pageDesc}>Tüm blog yazılarını yönetin.</p>
              </div>
              <button onClick={() => setTab('blog-new')} className={styles.saveBtn}><Plus size={16} /> Yeni Ekle</button>
            </div>
            <div className={styles.listTable}>
              <div className={styles.tableHead}>
                <span>Başlık</span><span>Kategori</span><span>Tarih</span><span>İşlem</span>
              </div>
              {Array.from({length: 5}).map((_, i) => (
                <div key={i} className={styles.tableRow}>
                  <span className={styles.tableTitle}>Örnek Blog Yazısı {i + 1}</span>
                  <span className={styles.tableCat}>Kozmetik</span>
                  <span className={styles.tableDate}>2026-04-{10 + i}</span>
                  <div className={styles.tableActions}>
                    <button className={styles.editBtn}><PenSquare size={14} /></button>
                    <button className={styles.deleteBtn}><Trash2 size={14} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analysis List */}
        {tab === 'analysis-list' && (
          <div>
            <div className={styles.pageHeader}>
              <div>
                <h1 className={styles.pageTitle}>Analizler</h1>
                <p className={styles.pageDesc}>Hizmet kataloğunu yönetin.</p>
              </div>
              <button onClick={() => setTab('analysis-new')} className={styles.saveBtn}><Plus size={16} /> Yeni Ekle</button>
            </div>
            <div className={styles.listTable}>
              <div className={styles.tableHead}>
                <span>Analiz Adı</span><span>Kategori</span><span>Süre</span><span>İşlem</span>
              </div>
              {Array.from({length: 8}).map((_, i) => (
                <div key={i} className={styles.tableRow}>
                  <span className={styles.tableTitle}>Örnek Analiz {i + 1}</span>
                  <span className={styles.tableCat}>{CATEGORIES[i % CATEGORIES.length]}</span>
                  <span className={styles.tableDate}>3-5 İş Günü</span>
                  <div className={styles.tableActions}>
                    <button className={styles.editBtn}><PenSquare size={14} /></button>
                    <button className={styles.deleteBtn}><Trash2 size={14} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
