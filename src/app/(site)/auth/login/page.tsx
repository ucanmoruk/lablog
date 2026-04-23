"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../auth.module.css';

export default function LoginPage() {
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
            <div className={styles.badge}>Müşteri Girişi</div>
            <h1 className={styles.title}>Hoş Geldiniz</h1>
            <p className={styles.subtitle}>Tekliflerinizi ve analiz sonuçlarınızı yönetmek için giriş yapın.</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>E-posta Adresi</label>
              <input type="email" className={styles.input} required placeholder="ornek@sirket.com" />
            </div>

            <div className={styles.inputGroup}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label className={styles.label}>Şifre</label>
                <a href="#" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Şifremi Unuttum</a>
              </div>
              <input type="password" className={styles.input} required placeholder="••••••••" />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Giriş Yap
            </button>
          </form>

          <div className={styles.link}>
            Hesabınız yok mu? <Link href="/auth/register">Hesap Oluştur</Link>
          </div>
        </div>
      </div>
      <div className={styles.rightCol}>
         <div className={styles.rightColOrb} />
         <div className={styles.rightColContent}>
           <h2>Laboratuvar Süreçlerinizi Dijitalleştirin.</h2>
           <p>Tüm analiz taleplerinizi, geçmiş raporlarınızı ve tekliflerinizi tek bir ekrandan güvenle yönetin. ISO 17025 güvencesiyle daima yanınızdayız.</p>
         </div>
      </div>
    </div>
  );
}
