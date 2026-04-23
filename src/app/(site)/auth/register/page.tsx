"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../auth.module.css';

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftCol}>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.badge}>Yeni Kayıt</div>
            <h1 className={styles.title}>Hesap Oluşturun</h1>
            <p className={styles.subtitle}>Saniyeler içinde kayıt olun ve hemen teklif almaya başlayın.</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
               <div className={styles.inputGroup}>
                 <label className={styles.label}>Adınız Soyadınız</label>
                 <input type="text" className={styles.input} required placeholder="Ahmet Yılmaz" />
               </div>
               <div className={styles.inputGroup}>
                 <label className={styles.label}>Telefon</label>
                 <input type="tel" className={styles.input} required placeholder="0532 000 00 00" />
               </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Firma / Kurum Adı</label>
              <input type="text" className={styles.input} required placeholder="Şirket Adı A.Ş." />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>E-posta Adresi</label>
              <input type="email" className={styles.input} required placeholder="ornek@sirket.com" />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Şifre</label>
              <input type="password" className={styles.input} required placeholder="En az 8 karakter" />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Kayıt Ol ve Devam Et
            </button>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textAlign: 'center', marginTop: '8px' }}>
              Kayıt olarak <Link href="/terms" style={{ color: 'var(--text-secondary)' }}>Kullanıcı Sözleşmesi</Link>'ni kabul etmiş olursunuz.
            </p>
          </form>

          <div className={styles.link}>
            Zaten hesabınız var mı? <Link href="/auth/login">Giriş Yap</Link>
          </div>
        </div>
      </div>
      <div className={styles.rightCol}>
         <div className={styles.rightColOrb} />
         <div className={styles.rightColContent}>
           <h2>Her Sektör İçin Güvenilir Sonuçlar.</h2>
           <p>Kozmetik, ilaç, gıda, tekstil ve daha fazlası. Tüm departmanlarımızdaki uzman kadromuz ve akredite altyapımızla test süreçlerinizi hızlandırıyoruz.</p>
         </div>
      </div>
    </div>
  );
}
