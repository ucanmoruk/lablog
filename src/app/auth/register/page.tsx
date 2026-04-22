"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../auth.module.css';

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Kayıt başarılı! Yönlendiriliyorsunuz...");
    router.push('/dashboard');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Kayıt Ol</h1>
        <p className={styles.subtitle}>Tekliflerinizi takip etmek için firma hesabınızı oluşturun.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Ad Soyad</label>
            <input type="text" className={styles.input} required placeholder="Örn: Ahmet Yılmaz" />
          </div>
          
          <div className={styles.inputGroup}>
            <label className={styles.label}>E-posta</label>
            <input type="email" className={styles.input} required placeholder="ornek@sirket.com" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Şifre</label>
            <input type="password" className={styles.input} required placeholder="••••••••" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Firma Adı</label>
            <input type="text" className={styles.input} required placeholder="Şirket A.Ş." />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Vergi Numarası / TC Kimlik</label>
            <input type="text" className={styles.input} required placeholder="1234567890" />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Hesap Oluştur
          </button>
        </form>

        <div className={styles.link}>
          Zaten hesabınız var mı? <Link href="/auth/login">Giriş Yap</Link>
        </div>
      </div>
    </div>
  );
}
