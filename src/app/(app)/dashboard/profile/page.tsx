"use client";
import { useState, useEffect } from 'react';
import {
  User, Building2, Mail, Phone, MapPin, Hash, PenSquare, CheckCircle2, FlaskConical, Bell, FileText
} from 'lucide-react';
import styles from '../dashboard.module.css';

const MOCK_USER = {
  name: 'Ahmet Yılmaz',
  email: 'kullanici@firma.com',
  company: 'Örnek Şirket A.Ş.',
  phone: '0532 000 00 00',
  memberSince: 'Nisan 2026',
};

export default function ProfilePage() {
  const [user, setUser] = useState(MOCK_USER);
  const [isEditing, setIsEditing] = useState(false);
  const [profileForm, setProfileForm] = useState(MOCK_USER);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  useEffect(() => {
    const stored = localStorage.getItem('labUser');
    if (stored) {
      const data = JSON.parse(stored);
      const updatedUser = { 
        ...MOCK_USER, 
        name: data.name || MOCK_USER.name, 
        email: data.email || MOCK_USER.email,
        company: data.company || data.firmName || MOCK_USER.company
      };
      setUser(updatedUser);
      setProfileForm(updatedUser);
    }
  }, []);


  const handleSaveProfile = () => {
    setSaveStatus('saving');
    setTimeout(() => {
      // Sync local state
      setUser(profileForm);
      
      // Update data in Storage
      const stored = localStorage.getItem('labUser');
      let newData = {};
      if (stored) {
        newData = JSON.parse(stored);
      }
      const updatedData = { 
        ...newData, 
        name: profileForm.name, 
        company: profileForm.company, 
        firmName: profileForm.company, // Support both keys
        email: profileForm.email,
        phone: profileForm.phone
      };
      
      localStorage.setItem('labUser', JSON.stringify(updatedData));
      
      // Trigger event for layout to re-read
      window.dispatchEvent(new Event('storage'));
      
      setIsEditing(false);
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }, 800);
  };

  return (
    <>
      <div className={styles.content}>
        <div className={styles.profileGrid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.headerInfo}>
                <h2 className={styles.cardTitle}>Kurumsal Kimlik</h2>
                <p className={styles.cardDesc}>Resmi tekliflerinizde ve fatura süreçlerinizde kullanılan bilgileriniz.</p>
              </div>
              {isEditing ? (
                <div className={styles.cardActions}>
                  <button className={styles.cancelBtn} onClick={() => { setIsEditing(false); setProfileForm(user); }}>Vazgeç</button>
                  <button className={styles.saveProfileBtn} onClick={handleSaveProfile}>
                    {saveStatus === 'saving' ? 'Güncelleniyor...' : 'Kaydet'}
                  </button>
                </div>
              ) : (
                <button className={styles.editProfileBtn} onClick={() => setIsEditing(true)}>
                  <PenSquare size={14} /> Bilgileri Düzenle
                </button>
              )}
            </div>

            <div className={styles.profileFields}>
              <div className={styles.profileRow}>
                <div className={styles.formGroup}>
                  <label className={styles.inputLabel}>Yetkili Ad Soyad</label>
                  {isEditing ? (
                    <input className={styles.input} value={profileForm.name} onChange={e => setProfileForm({ ...profileForm, name: e.target.value })} />
                  ) : (
                    <ProfileValue value={user.name} icon={User} />
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.inputLabel}>Firma Ünvanı</label>
                  {isEditing ? (
                    <input className={styles.input} value={profileForm.company} onChange={e => setProfileForm({ ...profileForm, company: e.target.value })} />
                  ) : (
                    <ProfileValue value={user.company} icon={Building2} />
                  )}
                </div>
              </div>

              <div className={styles.profileRow}>
                <div className={styles.formGroup}>
                  <label className={styles.inputLabel}>İletişim E-postası</label>
                  {isEditing ? (
                    <input className={styles.input} value={profileForm.email} onChange={e => setProfileForm({ ...profileForm, email: e.target.value })} />
                  ) : (
                    <ProfileValue value={user.email} icon={Mail} />
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.inputLabel}>İrtibat Telefonu</label>
                  {isEditing ? (
                    <input className={styles.input} value={profileForm.phone} onChange={e => setProfileForm({ ...profileForm, phone: e.target.value })} />
                  ) : (
                    <ProfileValue value={user.phone} icon={Phone} />
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>Merkez Adresi</label>
                {isEditing ? (
                  <textarea className={styles.textarea} rows={3} value="İstanbul, Türkiye" />
                ) : (
                  <ProfileValue value="İstanbul, Türkiye" icon={MapPin} />
                )}
              </div>

              <div className={styles.profileRow}>
                <div className={styles.formGroup}>
                  <label className={styles.inputLabel}>Vergi Dairesi</label>
                  {isEditing ? (
                    <input className={styles.input} placeholder="Örn: Boğaziçi V.D." />
                  ) : (
                    <ProfileValue value="—" icon={FileText} />
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.inputLabel}>Vergi Numarası / Mersis</label>
                  {isEditing ? (
                    <input className={styles.input} placeholder="000 000 0000" />
                  ) : (
                    <ProfileValue value="—" icon={Hash} />
                  )}
                </div>
              </div>

              {!isEditing && saveStatus === 'saved' && (
                <div className={styles.saveNotice}>
                  <CheckCircle2 size={16} /> Profil bilgileriniz başarıyla güncellendi.
                </div>
              )}
            </div>
          </div>

          <div className={styles.card} style={{
            background: 'linear-gradient(145deg, #1d1d1f 0%, #0a0a0b 100%)',
            color: '#fff',
            padding: '48px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: 'none',
            boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
          }}>
            {/* Decorative background blur */}
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: '#0066cc', filter: 'blur(80px)', opacity: 0.3, borderRadius: '50%' }}></div>

            <div style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '32px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <FlaskConical size={26} color="#4da6ff" />
            </div>

            <h2 className={styles.cardTitle} style={{ color: '#fff', marginBottom: '16px', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', zIndex: 1 }}>
              ISO 17025 Uzman Desteği
            </h2>

            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: '40px', zIndex: 1 }}>
              Analiz süreçleriniz, zorunlu regülasyonlar ve akreditasyon gereklilikleri hakkında uzman laboratuvar mühendislerimizden doğrudan teknik destek alın.
            </p>

            <a href="tel:+905401068640" className={styles.newQuoteBtn} style={{
              textDecoration: 'none',
              background: '#fff',
              color: '#1d1d1f',
              width: '100%',
              justifyContent: 'center',
              height: '50px',
              fontSize: '15px',
              zIndex: 1,
              boxShadow: '0 4px 14px rgba(255,255,255,0.25)'
            }}>
              Teknik Danışmanlık Al
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function ProfileValue({ value, icon: Icon }: { value: string; icon: any }) {
  return (
    <div className={styles.profileValWrapper}>
      <div className={styles.profileValIcon}><Icon size={16} /></div>
      <span className={styles.profileValText}>{value}</span>
    </div>
  );
}
