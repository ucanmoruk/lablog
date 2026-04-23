"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X, Mail, Lock, User, Phone, Building2, ChevronRight, CheckCircle2, Eye, EyeOff } from 'lucide-react';
import styles from './AuthModal.module.css';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

// Demo credentials
const DEMO_ADMIN_EMAIL = 'admin@labcozum.com';
const DEMO_USER_EMAIL = 'kullanici@firma.com';
const DEMO_PASSWORD = '123456';

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    company: '',
  });

  // Sync mode when initialMode prop changes
  useEffect(() => {
    setMode(initialMode);
    setError('');
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (mode === 'login') {
      // Demo auth logic
      if (form.password !== DEMO_PASSWORD) {
        setError('E-posta veya şifre hatalı. Demo: admin@labcozum.com / 123456');
        return;
      }
      const adminLogin = form.email === DEMO_ADMIN_EMAIL;
      
      // Persist user for demo
      localStorage.setItem('labUser', JSON.stringify({
        email: form.email,
        name: adminLogin ? 'Admin Uzman' : 'Ahmet Yılmaz',
        role: adminLogin ? 'admin' : 'customer'
      }));

      setIsAdmin(adminLogin);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        router.push(adminLogin ? '/panel' : '/dashboard');
        window.dispatchEvent(new Event('storage')); // Trigger navbar update
      }, 1800);
    } else {
      // Registration — redirect to dashboard
      localStorage.setItem('labUser', JSON.stringify({
        email: form.email,
        name: form.name || 'Yeni Müşteri',
        role: 'customer'
      }));

      setIsAdmin(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        router.push('/dashboard');
        window.dispatchEvent(new Event('storage')); // Trigger navbar update
      }, 1800);
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className={styles.successContent}>
            <div className={styles.successIcon}>
              <CheckCircle2 size={48} />
            </div>
            <h2>Hoş Geldiniz!</h2>
            <p>
              {isAdmin
                ? 'Admin paneline yönlendiriliyorsunuz...'
                : mode === 'login'
                ? 'Müşteri panelinize yönlendiriliyorsunuz...'
                : 'Hesabınız oluşturuldu. Panelinize yönlendiriliyorsunuz...'}
            </p>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <div className={styles.badge}>{mode === 'login' ? 'Müşteri Girişi' : 'Yeni Kayıt'}</div>
              <h1>{mode === 'login' ? 'Hesabınıza giriş yapın' : 'Müşteri hesabı oluşturun'}</h1>
              <p>{mode === 'login' ? 'Analizlerinizi ve tekliflerinizi yönetmek için giriş yapın.' : 'Dijital laboratuvar deneyimine bugün başlayın.'}</p>
            </div>

            {mode === 'login' && (
              <div className={styles.demoHint}>
                <strong>Demo:</strong> admin@labcozum.com <span className={styles.demoDivider}>veya</span> kullanici@firma.com · Şifre: <strong>123456</strong>
              </div>
            )}

            {error && <div className={styles.errorMsg}>{error}</div>}

            <form className={styles.form} onSubmit={handleSubmit}>
              {mode === 'register' && (
                <>
                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label>Ad Soyad</label>
                      <div className={styles.inputWrapper}>
                        <User size={18} className={styles.inputIcon} />
                        <input
                          type="text"
                          placeholder="Ahmet Yılmaz"
                          value={form.name}
                          onChange={e => handleChange('name', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Telefon</label>
                      <div className={styles.inputWrapper}>
                        <Phone size={18} className={styles.inputIcon} />
                        <input
                          type="tel"
                          placeholder="0532 000 00 00"
                          value={form.phone}
                          onChange={e => handleChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Firma Adı</label>
                    <div className={styles.inputWrapper}>
                      <Building2 size={18} className={styles.inputIcon} />
                      <input
                        type="text"
                        placeholder="Şirket Adı Ltd. Şti."
                        value={form.company}
                        onChange={e => handleChange('company', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              <div className={styles.inputGroup}>
                <label>E-posta Adresi</label>
                <div className={styles.inputWrapper}>
                  <Mail size={18} className={styles.inputIcon} />
                  <input
                    type="email"
                    placeholder="adres@firma.com"
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Şifre</label>
                <div className={styles.inputWrapper}>
                  <Lock size={18} className={styles.inputIcon} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={e => handleChange('password', e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className={styles.eyeBtn}
                    onClick={() => setShowPassword(v => !v)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                {mode === 'login' ? 'Giriş Yap' : 'Hesap Oluştur'}
                <ChevronRight size={18} />
              </button>
            </form>

            <div className={styles.footer}>
              {mode === 'login' ? (
                <p>Hesabınız yok mu? <button onClick={() => setMode('register')}>Kayıt Olun</button></p>
              ) : (
                <p>Zaten hesabınız var mı? <button onClick={() => setMode('login')}>Giriş Yapın</button></p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
