import Link from "next/link";
import { FlaskConical, Phone, Mail, MapPin, Share2, Link2, Rss } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.accredBand}>
        <div className={styles.accredInner}>
          <span className={styles.accredItem}><span className={styles.greenDot}/>TÜRKAK — ISO/IEC 17025</span>
          <span className={styles.accredItem}><span className={styles.greenDot}/>ILAC-MRA Tanıma Anlaşması</span>
          <span className={styles.accredItem}><span className={styles.greenDot}/>e-İmzalı Uluslararası Raporlar</span>
          <span className={styles.accredItem}><span className={styles.greenDot}/>48 Saat Ekspres Analiz</span>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoRow}>
              <div className={styles.logoMark}><FlaskConical size={18} strokeWidth={2.5}/></div>
              <span className={styles.logoText}>LabÇözüm Merkezi</span>
            </Link>
            <p className={styles.desc}>1500+ akredite parametre ile kozmetik, ilaç, gıda, tekstil ve daha pek çok alanda test, analiz ve belgelendirme hizmetleri.</p>
            <div className={styles.contact}>
              <a href="https://wa.me/905401068640" target="_blank" rel="noopener noreferrer" className={styles.contactItem} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Phone size={14}/> +90 540 106 86 40
              </a>
              <a href="mailto:info@laboratuvardan.com" className={styles.contactItem} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Mail size={14}/> info@laboratuvardan.com
              </a>
              <div className={styles.contactItem}><MapPin size={14}/> İstanbul, Türkiye</div>
            </div>
          </div>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Hizmet Alanları</h4>
            <ul className={styles.list}>
              <li><Link href="/arama?q=kozmetik" className={styles.footerLink}>Kozmetik Analizleri</Link></li>
              <li><Link href="/arama?q=ilaç" className={styles.footerLink}>İlaç & Hammadde</Link></li>
              <li><Link href="/arama?q=gıda" className={styles.footerLink}>Gıda & Takviye Edici Gıda</Link></li>
              <li><Link href="/arama?q=tekstil" className={styles.footerLink}>Tekstil & Deri</Link></li>
              <li><Link href="/arama?q=çevre" className={styles.footerLink}>Çevre & Su Analizleri</Link></li>
              <li><Link href="/arama?q=ambalaj" className={styles.footerLink}>Ambalaj & Plastik</Link></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Regülasyon & Test</h4>
            <ul className={styles.list}>
              <li><Link href="/arama?q=reach" className={styles.footerLink}>REACH & SVHC Taraması</Link></li>
              <li><Link href="/arama?q=rohs" className={styles.footerLink}>RoHS Uygunluk Analizi</Link></li>
              <li><Link href="/arama?q=tareks" className={styles.footerLink}>TAREKS Denetim Desteği</Link></li>
              <li><Link href="/arama?q=mikrobiyoloji" className={styles.footerLink}>Mikrobiyolojik Testler</Link></li>
              <li><Link href="/arama?q=ağır metal" className={styles.footerLink}>Ağır Metal (ICP-MS)</Link></li>
              <li><Link href="/arama?q=stabilite" className={styles.footerLink}>Stabilite Çalışmaları</Link></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Kurumsal</h4>
            <ul className={styles.list}>
              <li><Link href="/hakkimizda" className={styles.footerLink}>Hakkımızda</Link></li>
              <li><Link href="/blog" className={styles.footerLink}>Blog & Yayınlar</Link></li>
              <li><Link href="/sikca-sorulan-sorular" className={styles.footerLink}>Sıkça Sorulan Sorular</Link></li>
              <li><Link href="/iletisim" className={styles.footerLink}>İletişim</Link></li>
              <li><Link href="/auth/register" className={styles.footerLink}>Müşteri Paneli</Link></li>
              <li><Link href="/teklif-listesi" className={styles.footerLink}>Teklif Listesi</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>© {new Date().getFullYear()} LabÇözüm Merkezi. Tüm hakları saklıdır.</p>
          <div className={styles.legal}>
            <Link href="/privacy" className={styles.legalLink}>Gizlilik Politikası</Link>
            <Link href="/terms" className={styles.legalLink}>Kullanım Koşulları</Link>
            <Link href="/kvkk" className={styles.legalLink}>KVKK</Link>
          </div>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon} title="LinkedIn"><Share2 size={16}/></a>
            <a href="#" className={styles.socialIcon} title="Twitter"><Link2 size={16}/></a>
            <a href="#" className={styles.socialIcon} title="RSS"><Rss size={16}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
