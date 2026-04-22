"use client";
import Link from "next/link";
import { FlaskConical, ShoppingBag, ChevronDown } from "lucide-react";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { useQuote } from "@/context/QuoteContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { quotes } = useQuote();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoMark}>
            <FlaskConical size={18} strokeWidth={2.5} />
          </div>
          <span className={styles.logoText}>LabÇözüm</span>
          <span className={styles.logoSub}>Merkezi</span>
        </Link>

        {/* Nav Links */}
        <nav className={styles.nav}>
          <div className={styles.navGroup}>
            <span className={styles.link}>
              Hizmetler <ChevronDown size={14} />
            </span>
            <div className={styles.megaMenu}>
              <div className={styles.megaCol}>
                <span className={styles.megaLabel}>Sektörler</span>
                <Link href="/search?q=kozmetik" className={styles.megaItem}>Kozmetik & Dermokozmetik</Link>
                <Link href="/search?q=ilaç" className={styles.megaItem}>İlaç & Hammadde</Link>
                <Link href="/search?q=gıda" className={styles.megaItem}>Gıda & Takviye Edici</Link>
                <Link href="/search?q=tekstil" className={styles.megaItem}>Tekstil & Deri</Link>
              </div>
              <div className={styles.megaCol}>
                <span className={styles.megaLabel}>Regülasyon</span>
                <Link href="/search?q=reach" className={styles.megaItem}>REACH & SVHC</Link>
                <Link href="/search?q=rohs" className={styles.megaItem}>RoHS Direktifi</Link>
                <Link href="/search?q=tareks" className={styles.megaItem}>TAREKS Denetimi</Link>
                <Link href="/search?q=çevre" className={styles.megaItem}>Çevre & Su Analizi</Link>
              </div>
              <div className={styles.megaCol}>
                <span className={styles.megaLabel}>Hızlı Bağlantı</span>
                <Link href="/search" className={styles.megaItem}>Tüm Analizler</Link>
                <Link href="/blog" className={styles.megaItem}>Sektörel Yayınlar</Link>
                <Link href="/quote-list" className={styles.megaItem}>Teklif Listesi</Link>
              </div>
            </div>
          </div>
          <Link href="/search" className={styles.link}>Analizler</Link>
          <Link href="/blog" className={styles.link}>Blog</Link>
          <Link href="/about" className={styles.link}>Hakkımızda</Link>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <Link href="/quote-list" className={styles.quoteBtn} title="Teklif Listem">
            <ShoppingBag size={18} strokeWidth={2} />
            {quotes.length > 0 && (
              <span className={styles.quoteCount}>{quotes.length}</span>
            )}
          </Link>
          <Link href="/auth/register" className={styles.loginBtn}>
            Giriş Yap
          </Link>
          <Link href="/auth/register" className={styles.ctaBtn}>
            Ücretsiz Teklif Al
          </Link>
        </div>
      </div>
    </header>
  );
}
