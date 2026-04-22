export interface Sector {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  image: string;
  stats: { value: string; label: string }[];
  keyTests: { title: string; desc: string; time: string; standard: string }[];
  certifications: string[];
  regulations: string[];
  faq: { q: string; a: string }[];
  color: string;
  accentColor: string;
}

export const sectors: Sector[] = [
  {
    slug: 'kozmetik',
    name: 'Kozmetik',
    shortName: 'Kozmetik',
    icon: '💄',
    color: '#f9f0f5',
    accentColor: '#c2185b',
    heroTitle: 'Kozmetik & Kişisel Bakım Analizleri',
    heroSubtitle: 'AB Kozmetik Yönetmeliği (EC 1223/2009) ve CPNP uyumlu akredite testler',
    description: 'Kozmetik ürünlerinizin piyasaya arzından önce yasal gereklilikleri karşıladığını belgeleyin. Mikrobiyolojik güvenlik, koruyucu etkinlik ve ağır metal analizleri başta olmak üzere tüm zorunlu testleri tek çatı altında sunuyoruz.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '14', label: 'Aktif Test Parametresi' },
      { value: '3-5 Gün', label: 'Ortalama Süre' },
      { value: 'ISO 17025', label: 'Akreditasyon' },
      { value: 'AB/TR Uyumlu', label: 'Regülasyon' },
    ],
    keyTests: [
      { title: 'Mikrobiyolojik Güvenlik', desc: 'Toplam canlı sayımı, maya/küf, patojenlerin belirlenmesi', time: '5-7 İş Günü', standard: 'ISO 21149' },
      { title: 'Koruyucu Etkinlik (Challenge Testi)', desc: 'Raf ömrü boyunca mikrobiyal korunma kapasitesi', time: '28 Gün', standard: 'ISO 11930' },
      { title: 'Ağır Metal Analizi', desc: 'Kurşun, arsenik, kadmiyum, cıva ve diğer ağır metaller', time: '3-5 İş Günü', standard: 'EN 14083' },
      { title: 'Nikel Tayini', desc: 'Temas alerjeni nikel içeriğinin belirlenmesi', time: '3-5 İş Günü', standard: 'EN 1811' },
    ],
    certifications: ['ISO 17025 Akreditasyonu', 'GMP Uyumluluk', 'AB CPNP Bildirimi Desteği'],
    regulations: ['EC No 1223/2009 (AB Kozmetik Yönetmeliği)', 'Türkiye Kozmetik Yönetmeliği (TR 22/12/2021)', 'REACH Tüzüğü'],
    faq: [
      { q: 'Hangi ürünler için kozmetik analizi zorunludur?', a: 'AB ve Türkiye pazarına sunulacak tüm kozmetik ürünler için piyasaya arz öncesi güvenlik değerlendirmesi ve mikrobiyolojik testler zorunludur.' },
      { q: 'Ürün güvenlik raporu (PIF) için ne gerekir?', a: 'Mikrobiyolojik test sonuçları, ağır metal analizi ve stabilitenin yanı sıra bir güvenlik değerlendirmesi uzmanı onayı gerekmektedir. Tüm bu süreçlerde danışmanlık sağlıyoruz.' },
    ],
  },
  {
    slug: 'ilac-ve-hammadde',
    name: 'İlaç ve Hammadde',
    shortName: 'İlaç',
    icon: '💊',
    color: '#f0f4ff',
    accentColor: '#1a56db',
    heroTitle: 'İlaç & Hammadde Kalite Kontrol Analizleri',
    heroSubtitle: 'GMP, USP, EP ve ICH Q kılavuzlarına uygun farmasötik testler',
    description: 'Aktif farmasötik ingredientler (API) ve bitmiş ürünlerin kimlik, saflık, miktar tayini ve stabilite testlerini uluslararası farmakopenin öngördüğü metotlarla gerçekleştiriyoruz.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '15', label: 'Aktif Test Parametresi' },
      { value: '5-7 Gün', label: 'Ortalama Süre' },
      { value: 'GMP Uyumlu', label: 'Standart' },
      { value: 'USP/EP/TP', label: 'Farmakope' },
    ],
    keyTests: [
      { title: 'Mikrobiyolojik Patojen Taraması', desc: 'Toplam canlı sayımı ve spesifik patojen izolasyon/identifikasyonu', time: '3-5 İş Günü', standard: 'EN 6450' },
      { title: 'Hızlandırılmış Stabilite Testi', desc: '40°C/%75RH koşullarında bozunma kinetiği hesabı', time: '28-90 Gün', standard: 'ICH Q1A' },
      { title: 'Organik Safsızlık Tayini', desc: 'HPLC/GC-MS ile bozunma ürünleri ve safsızlık profili', time: '5-7 İş Günü', standard: 'USP 4836' },
      { title: 'Endotoksin (LAL) Testi', desc: 'Parenteral ürünlerde bakteri kaynaklı endotoksin tayini', time: '2-3 İş Günü', standard: 'EP 2.6.14' },
    ],
    certifications: ['ISO 17025 Akreditasyonu', 'GMP Sertifikasyonu', 'ICH Uyumluluk'],
    regulations: ['İlaçların Piyasa Gözetimi ve Denetimi Yönetmeliği', 'USP / EP / Türk Farmakopesi', 'ICH Q1A-Q1E Stabilite Kılavuzları'],
    faq: [
      { q: 'İlaç hammaddesi ithalatı için hangi testler gerekir?', a: 'T.C. İlaç ve Tıbbi Cihaz Kurumu (TITCK) düzenlemeleri kapsamında kimlik, saflık ve miktar tayini testleri zorunludur.' },
      { q: 'Stabilite testlerinde ICH kılavuzuna nasıl uyum sağlıyorsunuz?', a: 'Klima odalı stabilite inkübatörlerimiz 25°C, 30°C ve 40°C sıcaklık/nem kombinasyonlarını destekler; raporlama ICH Q1A formatına uygun hazırlanır.' },
    ],
  },
  {
    slug: 'tekstil-ve-deri',
    name: 'Tekstil ve Deri',
    shortName: 'Tekstil',
    icon: '🧵',
    color: '#f0faf4',
    accentColor: '#1d7843',
    heroTitle: 'Tekstil & Deri Ekolojik Test Analizleri',
    heroSubtitle: 'REACH, OEKO-TEX®, ASTM ve ISO standartlarında akredite ekolojik testler',
    description: 'İhracat odaklı firmalar için AZO boyar madde, formaldehit, ağır metal ve pH testlerini gerçekleştiriyoruz. OEKO-TEX® sertifikası sürecinde teknik destek sağlıyoruz.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '15', label: 'Aktif Test Parametresi' },
      { value: '5-21 Gün', label: 'Teste Göre Değişir' },
      { value: 'REACH Uyumlu', label: 'Standart' },
      { value: 'OEKO-TEX®', label: 'Sertifika Desteği' },
    ],
    keyTests: [
      { title: 'AZO Boyar Madde Testi', desc: 'Kanserojen primer aromatik aminler, REACH uyumlu analiz', time: '5-7 İş Günü', standard: 'EN ISO 14362' },
      { title: 'Formaldehit Tayini', desc: 'Serbest ve hidrolize edilebilir formaldehit miktarı', time: '3-5 İş Günü', standard: 'ISO 14184-1/2' },
      { title: 'Fitalat (Plastifiyan) Taraması', desc: 'DEHP, DBP, BBP ve diğer yasaklı fitalat esterleri', time: '5-7 İş Günü', standard: 'EN 15777' },
      { title: 'Ağır Metal Taraması', desc: 'Kurşun, kadmiyum, krom ve diğer ağır metallerin tayini', time: '3-5 İş Günü', standard: 'ISO 105-E04' },
    ],
    certifications: ['ISO 17025 Akreditasyonu', 'OEKO-TEX® Teknik Destek', 'REACH Uyumluluk Raporu'],
    regulations: ['REACH Tüzüğü (EC 1907/2006)', 'Tekstil Ürünlerine İlişkin Yönetmelik', 'OEKO-TEX® Standard 100'],
    faq: [
      { q: 'OEKO-TEX® sertifikası için hangi testler yapılmalı?', a: 'İnsan sağlığına zararlı maddeler (AZO boyar, formaldehit, ağır metaller, pH, koku vb.) OEKO-TEX® parametrelerine göre test edilmelidir.' },
    ],
  },
  {
    slug: 'gida-ve-takviye',
    name: 'Gıda & Takviye Edici Gıda',
    shortName: 'Gıda',
    icon: '🌿',
    color: '#f5fbf0',
    accentColor: '#2e7d32',
    heroTitle: 'Gıda & Takviye Edici Gıda Analizleri',
    heroSubtitle: 'Türk Gıda Kodeksi ve AB 2021/771 yönetmeliğine uygun akredite testler',
    description: 'Pestisit kalıntısı, ağır metal, mikotoksin ve mikrobiyoloji testleriyle ürünlerinizin güvenliğini kanıtlayın. Takviye edici gıdalar için Sağlık Bakanlığı başvuru sürecinde teknik destek sunuyoruz.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '15', label: 'Aktif Test Parametresi' },
      { value: '3-10 Gün', label: 'Ortalama Süre' },
      { value: 'Türk Gıda Kodeksi', label: 'Yasal Çerçeve' },
      { value: '600+', label: 'Pestisit Parametresi' },
    ],
    keyTests: [
      { title: 'Pestisit Kalıntı Analizi', desc: '600+ pestisit etken maddesi QuEChERS metodu ile çoklu tarama', time: '5-7 İş Günü', standard: 'EN 15662' },
      { title: 'Vitamin ve Mineral Profili', desc: 'Suda/yağda çözünen vitaminler LC-MS/MS ile analiz', time: '3-5 İş Günü', standard: 'EN 5980' },
      { title: 'Mikotoksin Taraması', desc: 'Aflatoksin, okratoksin, fumonisin ve diğer mikotoksinler', time: '3-5 İş Günü', standard: 'EN 15791' },
      { title: 'Ağır Metal Analizi', desc: 'ICP-MS ile arsenik, kurşun, kadmiyum, cıva tayini', time: '3-5 İş Günü', standard: 'EN 15763' },
    ],
    certifications: ['ISO 17025 Akreditasyonu', 'Türk Gıda Kodeksi Uyumu', 'Sağlık Bakanlığı Başvuru Desteği'],
    regulations: ['Türk Gıda Kodeksi Yönetmeliği', 'AB No 2021/771 (Takviye Edici Gıdalar)', 'Gıda Güvenliği ve Kalitesi Yönetmeliği'],
    faq: [
      { q: 'Takviye edici gıda izni için hangi analizler gerekli?', a: 'Sağlık Bakanlığı başvurusunda mikrobiyoloji, ağır metal, pestisit ve vitamin/mineral doğrulama analizleri istenmektedir.' },
    ],
  },
  {
    slug: 'cevre-ve-su',
    name: 'Çevre & Su',
    shortName: 'Çevre',
    icon: '💧',
    color: '#f0f8ff',
    accentColor: '#0277bd',
    heroTitle: 'Çevre & Su Kalite Analizleri',
    heroSubtitle: 'ÇED raporları, atık su deşarj izinleri ve içme suyu standartlarına uygun akredite analizler',
    description: 'İçme suyu, atık su, yüzey suyu ve toprak analizlerini TS 266, EPA ve ISO standartlarında gerçekleştiriyoruz. ÇED ve ÇKKD raporları için ihtiyaç duyulan tüm parametreler mevcut.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '14', label: 'Aktif Test Parametresi' },
      { value: '3-7 Gün', label: 'Ortalama Süre' },
      { value: 'TS 266', label: 'İçme Suyu Standardı' },
      { value: 'EPA/ISO', label: 'Metot Referansı' },
    ],
    keyTests: [
      { title: 'İçme Suyu Analizi', desc: 'Kimyasal, mikrobiyolojik ve fiziksel parametrelerin tam paketi', time: '5-7 İş Günü', standard: 'TS 266 / WHO' },
      { title: 'Mikroplastik Analizi', desc: 'Su ve sedimanda mikroplastik partikül tespiti', time: '7-10 İş Günü', standard: 'ISO 24187' },
      { title: 'Fitalat (Plastifiyan) Taraması', desc: 'Su kaynaklarında yasaklı fitalat esterlerinin tespiti', time: '5-7 İş Günü', standard: 'EP 8649' },
      { title: 'Ağır Metal Profili', desc: 'ICP-MS ile 20+ ağır metal parametresi tayini', time: '3-5 İş Günü', standard: 'EPA 200.8' },
    ],
    certifications: ['ISO 17025 Akreditasyonu', 'ÇED Raporu Desteği', 'Çevre İzin Belgesi Desteği'],
    regulations: ['Su Kirliliği Kontrolü Yönetmeliği', 'İçme Suyu Yönetmeliği (TS 266)', 'Atık Su Arıtma Tesis Standartları'],
    faq: [
      { q: 'Atık su deşarj izni için hangi analizler gerekli?', a: 'BOİ, KOİ, ağır metal, pH ve askıda katı madde başta olmak üzere Çevre Bakanlığı yönetmeliğinde belirtilen tüm parametreler analiz edilmelidir.' },
    ],
  },
  {
    slug: 'ambalaj-ve-plastik',
    name: 'Ambalaj & Plastik',
    shortName: 'Ambalaj',
    icon: '📦',
    color: '#fffbf0',
    accentColor: '#e65100',
    heroTitle: 'Ambalaj & Plastik Uygunluk Analizleri',
    heroSubtitle: 'AB 10/2011, REACH ve RoHS direktiflerine uygun göç ve saflık testleri',
    description: 'Gıda temasında kullanılacak plastik ve ambalaj materyallerinin göç testlerini, fitalat ve ağır metal analizlerini gerçekleştiriyoruz. İthalat denetimlerinde geçerli akredite raporlar.',
    image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '14', label: 'Aktif Test Parametresi' },
      { value: '5-10 Gün', label: 'Ortalama Süre' },
      { value: 'AB 10/2011', label: 'Gıda Teması' },
      { value: 'RoHS/REACH', label: 'Uyumluluk' },
    ],
    keyTests: [
      { title: 'Küresel Göç Testi', desc: 'Gıda temasındaki plastikten gıdaya toplam göç miktarı', time: '10-14 İş Günü', standard: 'EN 1186' },
      { title: 'Spesifik Göç Testleri', desc: 'Monomer ve katkı maddelerinin gıda simülatörlerine göçü', time: '10-14 İş Günü', standard: 'AB 10/2011' },
      { title: 'Fitalat (Plastifiyan) Analizi', desc: 'DEHP, DBP ve diğer yasaklı fitalat esterlerinin tespiti', time: '5-7 İş Günü', standard: 'EN 15777' },
      { title: 'RoHS Uyumluluk Testi', desc: 'Kurşun, cıva, kadmiyum ve diğer RoHS maddeleri', time: '5-7 İş Günü', standard: 'IEC 62321' },
    ],
    certifications: ['ISO 17025 Akreditasyonu', 'Gıda Teması Uygunluk Raporu', 'RoHS/REACH Sertifikası'],
    regulations: ['AB Yönetmeliği 10/2011 (Plastik Gıda Teması)', 'REACH Tüzüğü', 'RoHS Direktifi 2011/65/EU'],
    faq: [
      { q: 'Gıda ambalajı için hangi göç testleri zorunlu?', a: 'AB pazarına sunulan gıda temasında plastik için AB 10/2011 kapsamında küresel göç ve spesifik göç testleri zorunludur.' },
    ],
  },
  {
    slug: 'mikrobiyoloji',
    name: 'Mikrobiyoloji',
    shortName: 'Mikrobiyoloji',
    icon: '🔬',
    color: '#f5f0ff',
    accentColor: '#6d28d9',
    heroTitle: 'Mikrobiyolojik Analiz Hizmetleri',
    heroSubtitle: 'Gıda, ilaç, kozmetik ve çevre örneklerinde akredite mikrobiyolojik testler',
    description: 'Toplam aerobik bakteri, maya-küf, koliform, E. coli, Salmonella ve MRSA başta olmak üzere tüm mikrobiyolojik parametreleri ISO 17025 akredite laboratuvarımızda analiz ediyoruz.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '13', label: 'Aktif Test Parametresi' },
      { value: '3-7 Gün', label: 'Ortalama Süre' },
      { value: 'ISO 17025', label: 'Akreditasyon' },
      { value: 'Çoklu Sektör', label: 'Uygulama Alanı' },
    ],
    keyTests: [
      { title: 'Toplam Aerobik Bakteri Sayımı', desc: 'Kültür yöntemiyle toplam canlı mikroorganizma sayımı', time: '2-3 İş Günü', standard: 'ISO 4833' },
      { title: 'Maya ve Küf Sayımı', desc: 'Gıda, kozmetik ve çevre örneklerinde fungal kontaminasyon', time: '3-5 İş Günü', standard: 'ISO 21527' },
      { title: 'Patojen Tarama Paneli', desc: 'Salmonella, E. coli, Listeria, MRSA, Legionella', time: '3-7 İş Günü', standard: 'ISO 6579 / ISO 16649' },
      { title: 'Koruyucu Etkinlik (Challenge)', desc: 'Ürünün koruyucu sistemi etkinliğinin doğrulanması', time: '14-28 Gün', standard: 'ISO 11930' },
    ],
    certifications: ['ISO 17025 Akreditasyonu', 'GMP Uyumlu Laboratuvar', 'Akredite Metot Kullanımı'],
    regulations: ['Türk Gıda Kodeksi Mikrobiyolojik Kriterler Yönetmeliği', 'AB Yönetmeliği 2073/2005', 'Kozmetik Yönetmeliği Mikrobiyoloji Kriterleri'],
    faq: [
      { q: 'Hangi matrislerde mikrobiyoloji testi yapabilirsiniz?', a: 'Gıda, kozmetik, ilaç, su, yüzey sürüntüsü, toprak ve hava numunelerinde mikrobiyolojik analizler yapıyoruz.' },
    ],
  },
  {
    slug: 'belgelendirme',
    name: 'Belgelendirme & Sertifikasyon',
    shortName: 'Belgelendirme',
    icon: '🏆',
    color: '#fffff0',
    accentColor: '#b45309',
    heroTitle: 'Belgelendirme & Sertifikasyon Hizmetleri',
    heroSubtitle: 'ISO, CE, Helal, Organik ve OEKO-TEX® sertifikasyon süreçlerinde teknik destek',
    description: 'Ürünlerinizin uluslararası sertifika süreçlerinde ihtiyaç duyulan tüm teknik testleri akredite laboratuvarımızda gerçekleştiriyor, sertifikasyon kurumlarıyla doğrudan koordinasyon sağlıyoruz.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { value: '15', label: 'Aktif Test Parametresi' },
      { value: '5-21 Gün', label: 'Sertifikaya Göre Değişir' },
      { value: 'Uluslararası', label: 'Geçerlilik' },
      { value: '8 Sektör', label: 'Kapsam' },
    ],
    keyTests: [
      { title: 'Organik Safsızlık Tayini', desc: 'HPLC ve GC-MS ile bozunma ürünleri ve safsızlık profili', time: '5-7 İş Günü', standard: 'USP 4836' },
      { title: 'Vegan/Hayvansal DNA Taraması', desc: 'PCR ile hayvansal köken analizi, vegan/helal doğrulama', time: '5-7 İş Günü', standard: 'ISO 20813' },
      { title: 'CE Teknik Dosya Analizleri', desc: 'Direktif kapsamı ürünler için zorunlu test raporları', time: 'Ürüne Göre', standard: 'İlgili Direktif' },
      { title: 'Helal Sertifika Analizleri', desc: 'Alkol, hayvansal içerik ve yasaklı madde taraması', time: '3-5 İş Günü', standard: 'OIC/SMIIC' },
    ],
    certifications: ['ISO 17025 Akreditasyonu', 'CE Teknik Dosya Desteği', 'Helal ve Organik Sertifika Desteği'],
    regulations: ['CE Direktifleri ve Yönetmelikleri', 'TSE Akreditasyon Şartları', 'Helal Akreditasyon Kriterleri'],
    faq: [
      { q: 'Helal sertifikası için hangi analizler gereklidir?', a: 'Alkol tayini, domuz kaynaklı DNA tespiti ve yasaklı katkı maddesi taraması en temel analizlerdir. Ürün kategorisine göre ek testler gerekebilir.' },
    ],
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find(s => s.slug === slug);
}
