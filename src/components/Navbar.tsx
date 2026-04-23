"use client";
import Link from "next/link";
import { FlaskConical, ShoppingBag, ChevronDown, User, LogOut } from "lucide-react";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { useQuote } from "@/context/QuoteContext";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const { quotes } = useQuote();

  const [user, setUser] = useState<{ name: string; role: string } | null>(null);

  useEffect(() => {
    const checkUser = () => {
      const stored = localStorage.getItem('labUser');
      if (stored) setUser(JSON.parse(stored));
      else setUser(null);
    };
    
    checkUser();
    window.addEventListener('storage', checkUser);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('storage', checkUser);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('labUser');
    setUser(null);
    window.dispatchEvent(new Event('storage'));
  };

  const openAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  return (
    <>
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
                Sektörler & Analizler <ChevronDown size={14} />
              </span>
              <div className={styles.megaMenu}>
                <div className={styles.megaCol}>
                  <span className={styles.megaLabel}>Sektörler</span>
                  <Link href="/sektorel/kozmetik" className={styles.megaItem}>Kozmetik & Dermokozmetik</Link>
                  <Link href="/sektorel/ilac-ve-hammadde" className={styles.megaItem}>İlaç & Hammadde</Link>
                  <Link href="/sektorel/gida-ve-takviye" className={styles.megaItem}>Gıda & Takviye Edici</Link>
                  <Link href="/sektorel/tekstil-ve-deri" className={styles.megaItem}>Tekstil & Deri</Link>
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
            
            {user ? (
              <div className={styles.userDropdown}>
                <Link href={user.role === 'admin' ? '/panel' : '/dashboard'} className={styles.userMenuBtn}>
                  <User size={16} />
                  <span>{user.name}</span>
                </Link>
                <button onClick={handleLogout} className={styles.logoutIconBtn} title="Çıkış">
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <button onClick={() => openAuth('login')} className={styles.ctaBtn}>
                Ücretsiz Teklif Al
              </button>
            )}
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        initialMode={authMode} 
      />
    </>
  );
}

