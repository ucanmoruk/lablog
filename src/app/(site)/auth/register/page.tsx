"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Phone, Building2, Mail, Lock, CheckCircle2 } from 'lucide-react';
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
            <p className={styles.subtitle}>Sektörel analiz taleplerinizi yönetmek için hemen ücretsiz kayıt olun.</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
               <div className={styles.inputWrapper}>
                 <label className={styles.label}>Adınız Soyadınız</label>
                 <div className={styles.inputWithIcon}>
                    <User size={18} className={styles.inputIcon} />
                    <input type="text" className={styles.input} required placeholder="Ahmet Yılmaz" />
                 </div>
               </div>
               <div className={styles.inputWrapper}>
                 <label className={styles.label}>Telefon</label>
                 <div className={styles.inputWithIcon}>
                    <Phone size={18} className={styles.inputIcon} />
                    <input type="tel" className={styles.input} required placeholder="0532 000 00 00" />
                 </div>
               </div>
            </div>

            <div className={styles.inputWrapper}>
              <label className={styles.label}>Firma / Kurum Adı</label>
              <div className={styles.inputWithIcon}>
                 <Building2 size={18} className={styles.inputIcon} />
                 <input type="text" className={styles.input} required placeholder="Şirket Adı A.Ş." />
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <label className={styles.label}>E-posta Adresi</label>
              <div className={styles.inputWithIcon}>
                 <Mail size={18} className={styles.inputIcon} />
                 <input type="email" className={styles.input} required placeholder="ornek@sirket.com" />
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <label className={styles.label}>Şifre</label>
              <div className={styles.inputWithIcon}>
                 <Lock size={18} className={styles.inputIcon} />
                 <input type="password" className={styles.input} required placeholder="En az 8 karakter" />
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Kayıt Ol ve Devam Et
            </button>
            <p className={styles.terms}>
              Kayıt olarak <Link href="/terms">Kullanıcı Sözleşmesi</Link>'ni ve KVKK aydınlatma metnini kabul etmiş olursunuz.
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
           <div className={styles.benefitList}>
             <div className={styles.benefitItem}>
               <CheckCircle2 size={24} className={styles.benefitIcon} />
               <div>
                 <h3>Hızlı Teklif Yönetimi</h3>
                 <p>Tüm analiz taleplerinizi tek panelden takip edin ve anında onaylayın.</p>
               </div>
             </div>
             <div className={styles.benefitItem}>
               <CheckCircle2 size={24} className={styles.benefitIcon} />
               <div>
                 <h3>Dijital Rapor Arşivi</h3>
                 <p>Geçmişe dönük tüm analiz sonuçlarınıza istediğiniz zaman ulaşın.</p>
               </div>
             </div>
             <div className={styles.benefitItem}>
               <CheckCircle2 size={24} className={styles.benefitIcon} />
               <div>
                 <h3>Sektörel Destek</h3>
                 <p>Mevzuat ve regülasyonlar hakkında teknik ekibimizden destek alın.</p>
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
}
