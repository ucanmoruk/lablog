"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FlaskConical, FileText, ShoppingBag, User, Building2,
  LogOut, BarChart3, Globe
} from 'lucide-react';
import styles from './dashboard.module.css';

const MOCK_USER = {
  name: 'Ahmet Yılmaz',
  email: 'kullanici@firma.com',
  company: 'Örnek Şirket A.Ş.',
  phone: '0532 000 00 00',
  memberSince: 'Nisan 2026',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(MOCK_USER);
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem('labUser');
    if (stored) {
      const data = JSON.parse(stored);
      setUser(prev => ({ ...prev, name: data.name, email: data.email }));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('labUser');
    window.dispatchEvent(new Event('storage'));
    window.location.href = '/';
  };

  const isActive = (path: string) => pathname === path;

  return (
    <div className={styles.shell}>
      {/* ── Sidebar ── */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          <Link href="/" className={styles.sidebarLogo}>
            <div className={styles.sidebarLogoMark}>
              <FlaskConical size={18} strokeWidth={2.5} />
            </div>
            <div>
              <div className={styles.sidebarLogoText}>LabÇözüm</div>
              <div className={styles.sidebarLogoSub}>Müşteri Paneli</div>
            </div>
          </Link>

          <div className={styles.userCard}>
            <div className={styles.userAvatar}>
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className={styles.userInfo}>
              <div className={styles.userName}>{user.name}</div>
              <div className={styles.userCompany}>{user.company}</div>
            </div>
          </div>

          <nav className={styles.nav}>
            <Link href="/dashboard" className={`${styles.navBtn} ${isActive('/dashboard') ? styles.navActive : ''}`}>
              <BarChart3 size={18} /><span>Genel Bakış</span>
            </Link>
            <Link href="/dashboard/offers" className={`${styles.navBtn} ${pathname.includes('/offers') ? styles.navActive : ''}`}>
              <ShoppingBag size={18} /><span>Tekliflerim</span>
            </Link>
            <Link href="/dashboard/profile" className={`${styles.navBtn} ${pathname.includes('/profile') ? styles.navActive : ''}`}>
              <User size={18} /><span>Firma Bilgileri</span>
            </Link>
          </nav>
        </div>

        <div className={styles.sidebarBottom}>
          <Link href="/" className={styles.navBtn}><Globe size={18} /><span>Ana Siteye Git</span></Link>
          <button onClick={handleLogout} className={styles.navBtn}><LogOut size={18} /><span>Çıkış Yap</span></button>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
