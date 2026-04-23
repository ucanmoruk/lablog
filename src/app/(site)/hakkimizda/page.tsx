"use client";
import Link from "next/link";
import { CheckCircle2, FlaskConical, Award, Shield, Users } from "lucide-react";
import styles from "./about.module.css";
import MoleculeCanvas from "@/components/MoleculeCanvas";

export default function AboutPage() {
  return (
    <div className={styles.root}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
         <div className={styles.heroMolBg}><MoleculeCanvas /></div>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Hakkımızda
          </div>
          <h1>
            Testten ötesi.<br />
            <span className={styles.accent}>Güven inşa ediyoruz.</span>
          </h1>
          <p className={styles.heroSub}>
            LabÇözüm Merkezi, Türkiye'nin önde gelen akredite laboratuvarlarından biri olarak, sektörlerin küresel standartlara uyumunu sağlamaktadır.
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statVal}>15+</div>
            <div className={styles.statLabel}>Yıllık Tecrübe</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statVal}>1500+</div>
            <div className={styles.statLabel}>Akredite Parametre</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statVal}>10K+</div>
            <div className={styles.statLabel}>Mutlu Müşteri</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statVal}>%99.8</div>
            <div className={styles.statLabel}>Doğruluk Oranı</div>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className={styles.storySection}>
        <div className={styles.storyContent}>
          <h2>Biz Kimiz?</h2>
          <p>
            Kurulduğumuz günden bu yana amacımız sadece numune analiz etmek değil, üreticilerimizin ve ihracatçılarımızın çözüm ortağı olmaktır. LabÇözüm Merkezi olarak teknolojik altyapımız, donanımlı uzman kadromuz ve sürdürülebilirlik odaklı vizyonumuz ile kalitenizi belgelendiriyoruz.
          </p>
          <p>
            Kozmetikten ilaca, gıdadan tekstile kadar birçok alanda Türkiye ve Avrupa regülasyonlarına (REACH, RoHS, TAREKS, vb.) uygun analiz hizmetleri sunuyoruz. 
          </p>
        </div>
        <div className={styles.storyImage}>
          <div className={styles.imgPlaceholder}>Laboratuvar Görseli</div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <h2>Temel Değerlerimiz</h2>
          <p>Her analiz raporunda imzamız, her sonuçta güvenimiz var.</p>
        </div>
        
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
             <div className={styles.vIcon}><Shield size={24}/></div>
             <h3>Tarafsızlık & Gizlilik</h3>
             <p>Bağımsızlığımızı her koşulda korur, müşteri verilerini en yüksek güvenlik standartlarında saklarız.</p>
          </div>
          <div className={styles.valueCard}>
             <div className={styles.vIcon}><Award size={24}/></div>
             <h3>Bilimsel Mükemmellik</h3>
             <p>En güncel uluslararası metodolojileri (ISO, EN, USP) kullanır ve cihaz parkurumuzu sürekli yenileriz.</p>
          </div>
          <div className={styles.valueCard}>
             <div className={styles.vIcon}><CheckCircle2 size={24}/></div>
             <h3>Hız & Güvenilirlik</h3>
             <p>Zamanın ihracat ve üretim süreçlerindeki önemini bilir, taahhüt ettiğimiz sürede kesin sonuç veririz.</p>
          </div>
          <div className={styles.valueCard}>
             <div className={styles.vIcon}><Users size={24}/></div>
             <h3>Çözüm Ortaklığı</h3>
             <p>Analiz raporuyla yetinmez, sonuçların yorumlanması ve iyileştirme süreçlerinde danışmanlık yaparız.</p>
          </div>
        </div>
      </section>

      {/* ── ACCREDITATIONS ── */}
      <section className={styles.accredSection}>
        <div className={styles.accredInner}>
          <div className={styles.accredText}>
            <h2>Yetkinliklerimiz</h2>
            <p>Laboratuvarımız TÜRKAK (Türk Akreditasyon Kurumu) tarafından ISO/IEC 17025:2017 standartlarına göre akreditedir. Raporlarımız ILAC-MRA anlaşması sayesinde tüm dünyada geçerlidir.</p>
            <ul className={styles.checkList}>
               <li><CheckCircle2 size={16} className={styles.checkIcon}/> T.C. Sağlık Bakanlığı Onaylı</li>
               <li><CheckCircle2 size={16} className={styles.checkIcon}/> T.C. Tarım ve Orman Bakanlığı Yetkili</li>
               <li><CheckCircle2 size={16} className={styles.checkIcon}/> T.C. Ticaret Bakanlığı TAREKS Denetimleri Kapsamında</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
         <div className={styles.ctaInner}>
           <h2>Kalitenizi bizimle tescilleyin.</h2>
           <p>Ürünlerinizi küresel pazara hazırlamak için doğru adrestesiniz.</p>
           <Link href="/iletisim" className={styles.ctaBtn}>İletişime Geçin</Link>
         </div>
      </section>

    </div>
  );
}
