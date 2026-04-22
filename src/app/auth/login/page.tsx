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
      <div className={styles.card}>
        <h1 className={styles.title}>Giriş Yap</h1>
        <p className={styles.subtitle}>Müşteri paneline erişmek için giriş yapın.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>E-posta</label>
            <input type="email" className={styles.input} required placeholder="ornek@sirket.com" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Şifre</label>
            <input type="password" className={styles.input} required placeholder="••••••••" />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Giriş Yap
          </button>
        </form>

        <div className={styles.link}>
          Hesabınız yok mu? <Link href="/auth/register">Kayıt Ol</Link>
        </div>
      </div>
    </div>
  );
}
