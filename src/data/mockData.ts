
export interface Service {
  id: string;
  slug?: string;
  title: string;
  description: string;
  category: string;
  popular?: boolean | null;
  standards?: string | null;
  turnaroundTime?: string | null;
  sampleRequirement?: string | null;
  price?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
}

export const services: Service[] = [
  {
    "id": "test-1-mob72t1i",
    "slug": "mikrobiyolojik-patojen-taramasi",
    "title": "Mikrobiyolojik Patojen Taraması",
    "description": "İlaç ve Hammadde sektörüne yönelik: Toplam canlı sayımı ve spesifik patojenlerin (E. coli, S. aureus vb.) izolasyon ve identifikasyon işlemleri. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EN 9135",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-2-mob72t1i",
    "slug": "challenge-testi",
    "title": "Koruyucu Etkinlik (Challenge) Testi",
    "description": "Tekstil ve Deri sektörüne yönelik: Ürünün raf ömrü boyunca mikrobiyal kontaminasyona karşı korunma kapasitesinin değerlendirilmesi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "ASTM 1922",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-3-mob72t1i",
    "title": "Hızlandırılmış Stabilite Testi",
    "description": "Takviye Edici Gıda sektörüne yönelik: Farklı sıcaklık ve bağıl nem koşullarında (%75 RH, 40°C) ürünün fizikokimyasal bozunma kinetiğinin hesaplanması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EPA 8995",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-4-mob72t1i",
    "title": "Organik Safsızlık Tayini",
    "description": "Belgelendirme sektörüne yönelik: HPLC ve GC-MS kullanılarak üründeki eser miktardaki bozunma ürünlerinin ve organik safsızlıkların tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "USP 1839",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-5-mob72t1i",
    "title": "Fitalat (Plastifiyan) Taraması",
    "description": "Çevre ve Su sektörüne yönelik: Plastik ve ambalaj materyallerindeki yasaklı fitalat esterlerinin ekstraksiyonu ve GC-MS analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EP 1313",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-6-mob72t1i",
    "title": "Azo Boyar Madde Testi",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Tekstil ve deri ürünlerinde kanserojen primer aromatik aminlerin tespiti (REACH uyumlu). Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "ISO 4363",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-7-mob72t1i",
    "title": "Vitamin ve Mineral Profili",
    "description": "Mikrobiyoloji sektörüne yönelik: Takviye edici gıdalarda etiket beyanını doğrulamak üzere suda/yağda çözünen vitaminlerin LC-MS/MS ile analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EN 5453",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-8-mob72t1i",
    "title": "Pestisit Kalıntı Analizi",
    "description": "Kozmetik sektörüne yönelik: Gıda ve bitkisel ekstraktlarda 600+ pestisit etken maddesinin QuEChERS metodu ile çoklu kalıntı taraması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "ASTM 5991",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-9-mob72t1i",
    "title": "Spesifik Migrasyon Testi",
    "description": "İlaç ve Hammadde sektörüne yönelik: Gıda ile temas eden madde ve malzemelerden gıdaya geçen kimyasalların spesifik simulantlar kullanılarak tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EPA 1846",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-10-mob72t1i",
    "title": "Nitrozamin Safsızlık Tayini",
    "description": "Tekstil ve Deri sektörüne yönelik: İlaç ve kisisel bakim urunlerinde genotoksik NDMA ve türevlerinin ultra hassas LC-MS/MS tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": true,
    "standards": "USP 4882",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-11-mob72t1i",
    "title": "Yırtılma ve Kopma Mukavemeti",
    "description": "Takviye Edici Gıda sektörüne yönelik: Tekstil, plastik ve ambalaj malzemelerinin çekme ve kopma dirençlerinin dinamometrik cihazlarla ölçümü. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EP 4276",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-12-mob72t1i",
    "slug": "rohs-analizi",
    "title": "RoHS Uygunluk Analizi",
    "description": "Belgelendirme sektörüne yönelik: Elektrikli cihazlarda kurşun, cıva, kadmiyum ve alev geciktiricilerin (PBB, PBDE) tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "ISO 8229",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-13-mob72t1i",
    "title": "Dioksin ve PCB Analizi",
    "description": "Çevre ve Su sektörüne yönelik: Çevresel numuneler ve gıdalarda yüksek çözünürlüklü kütle spektrometrisi (HRMS) ile toksik dioksin tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EN 7587",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-14-mob72t1i",
    "title": "VOC (Uçucu Organik Bileşik) Emisyonu",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Kapalı ortam materyallerinden salınan uçucu organik bileşiklerin (formaldehit vb.) Headspace-GC-MS ile tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "ASTM 1777",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-15-mob72t1i",
    "title": "Ağır Metal (Pb, Cd, Hg, As) Tayini",
    "description": "Mikrobiyoloji sektörüne yönelik: ICP-MS cihazı ile eser element ve ağır metallerin ppm/ppb seviyesinde kantitatif tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EPA 8493",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-16-mob72t1i",
    "title": "Kozmetik için Mikrobiyolojik Patojen Taraması - Varyant 1",
    "description": "Kozmetik sektörüne yönelik: Toplam canlı sayımı ve spesifik patojenlerin (E. coli, S. aureus vb.) izolasyon ve identifikasyon işlemleri. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "USP 9929",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-17-mob72t1i",
    "title": "İlaç ve Hammadde için Koruyucu Etkinlik (Challenge) Testi - Varyant 1",
    "description": "İlaç ve Hammadde sektörüne yönelik: Ürünün raf ömrü boyunca mikrobiyal kontaminasyona karşı korunma kapasitesinin değerlendirilmesi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EP 5977",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-18-mob72t1i",
    "title": "Tekstil ve Deri için Hızlandırılmış Stabilite Testi - Varyant 1",
    "description": "Tekstil ve Deri sektörüne yönelik: Farklı sıcaklık ve bağıl nem koşullarında (%75 RH, 40°C) ürünün fizikokimyasal bozunma kinetiğinin hesaplanması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "ISO 4566",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-19-mob72t1i",
    "title": "Takviye Edici Gıda için Organik Safsızlık Tayini - Varyant 1",
    "description": "Takviye Edici Gıda sektörüne yönelik: HPLC ve GC-MS kullanılarak üründeki eser miktardaki bozunma ürünlerinin ve organik safsızlıkların tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EN 6205",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-20-mob72t1i",
    "title": "Belgelendirme için Fitalat (Plastifiyan) Taraması - Varyant 1",
    "description": "Belgelendirme sektörüne yönelik: Plastik ve ambalaj materyallerindeki yasaklı fitalat esterlerinin ekstraksiyonu ve GC-MS analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": true,
    "standards": "ASTM 1052",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-21-mob72t1i",
    "title": "Çevre ve Su için Azo Boyar Madde Testi - Varyant 1",
    "description": "Çevre ve Su sektörüne yönelik: Tekstil ve deri ürünlerinde kanserojen primer aromatik aminlerin tespiti (REACH uyumlu). Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EPA 4458",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-22-mob72t1i",
    "title": "Ambalaj ve Plastik için Vitamin ve Mineral Profili - Varyant 1",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Takviye edici gıdalarda etiket beyanını doğrulamak üzere suda/yağda çözünen vitaminlerin LC-MS/MS ile analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "USP 1292",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-23-mob72t1i",
    "title": "Mikrobiyoloji için Pestisit Kalıntı Analizi - Varyant 1",
    "description": "Mikrobiyoloji sektörüne yönelik: Gıda ve bitkisel ekstraktlarda 600+ pestisit etken maddesinin QuEChERS metodu ile çoklu kalıntı taraması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EP 5719",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-24-mob72t1i",
    "title": "Kozmetik için Spesifik Migrasyon Testi - Varyant 1",
    "description": "Kozmetik sektörüne yönelik: Gıda ile temas eden madde ve malzemelerden gıdaya geçen kimyasalların spesifik simulantlar kullanılarak tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "ISO 2201",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-25-mob72t1i",
    "title": "İlaç ve Hammadde için Nitrozamin Safsızlık Tayini - Varyant 1",
    "description": "İlaç ve Hammadde sektörüne yönelik: İlaç ve kisisel bakim urunlerinde genotoksik NDMA ve türevlerinin ultra hassas LC-MS/MS tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EN 8392",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-26-mob72t1i",
    "title": "Tekstil ve Deri için Yırtılma ve Kopma Mukavemeti - Varyant 1",
    "description": "Tekstil ve Deri sektörüne yönelik: Tekstil, plastik ve ambalaj malzemelerinin çekme ve kopma dirençlerinin dinamometrik cihazlarla ölçümü. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "ASTM 5501",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-27-mob72t1i",
    "title": "Takviye Edici Gıda için RoHS Uygunluk Analizi - Varyant 1",
    "description": "Takviye Edici Gıda sektörüne yönelik: Elektrikli cihazlarda kurşun, cıva, kadmiyum ve alev geciktiricilerin (PBB, PBDE) tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EPA 4655",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-28-mob72t1i",
    "title": "Belgelendirme için Dioksin ve PCB Analizi - Varyant 1",
    "description": "Belgelendirme sektörüne yönelik: Çevresel numuneler ve gıdalarda yüksek çözünürlüklü kütle spektrometrisi (HRMS) ile toksik dioksin tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "USP 2411",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-29-mob72t1i",
    "title": "Çevre ve Su için VOC (Uçucu Organik Bileşik) Emisyonu - Varyant 1",
    "description": "Çevre ve Su sektörüne yönelik: Kapalı ortam materyallerinden salınan uçucu organik bileşiklerin (formaldehit vb.) Headspace-GC-MS ile tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EP 7585",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-30-mob72t1i",
    "title": "Ambalaj ve Plastik için Ağır Metal (Pb, Cd, Hg, As) Tayini - Varyant 2",
    "description": "Ambalaj ve Plastik sektörüne yönelik: ICP-MS cihazı ile eser element ve ağır metallerin ppm/ppb seviyesinde kantitatif tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": true,
    "standards": "ISO 2444",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-31-mob72t1i",
    "title": "Mikrobiyoloji için Mikrobiyolojik Patojen Taraması - Varyant 2",
    "description": "Mikrobiyoloji sektörüne yönelik: Toplam canlı sayımı ve spesifik patojenlerin (E. coli, S. aureus vb.) izolasyon ve identifikasyon işlemleri. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EN 3081",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-32-mob72t1i",
    "title": "Kozmetik için Koruyucu Etkinlik (Challenge) Testi - Varyant 2",
    "description": "Kozmetik sektörüne yönelik: Ürünün raf ömrü boyunca mikrobiyal kontaminasyona karşı korunma kapasitesinin değerlendirilmesi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "ASTM 3990",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-33-mob72t1i",
    "title": "İlaç ve Hammadde için Hızlandırılmış Stabilite Testi - Varyant 2",
    "description": "İlaç ve Hammadde sektörüne yönelik: Farklı sıcaklık ve bağıl nem koşullarında (%75 RH, 40°C) ürünün fizikokimyasal bozunma kinetiğinin hesaplanması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EPA 5075",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-34-mob72t1i",
    "title": "Tekstil ve Deri için Organik Safsızlık Tayini - Varyant 2",
    "description": "Tekstil ve Deri sektörüne yönelik: HPLC ve GC-MS kullanılarak üründeki eser miktardaki bozunma ürünlerinin ve organik safsızlıkların tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "USP 4952",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-35-mob72t1i",
    "title": "Takviye Edici Gıda için Fitalat (Plastifiyan) Taraması - Varyant 2",
    "description": "Takviye Edici Gıda sektörüne yönelik: Plastik ve ambalaj materyallerindeki yasaklı fitalat esterlerinin ekstraksiyonu ve GC-MS analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EP 7826",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-36-mob72t1i",
    "title": "Belgelendirme için Azo Boyar Madde Testi - Varyant 2",
    "description": "Belgelendirme sektörüne yönelik: Tekstil ve deri ürünlerinde kanserojen primer aromatik aminlerin tespiti (REACH uyumlu). Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "ISO 4971",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-37-mob72t1i",
    "title": "Çevre ve Su için Vitamin ve Mineral Profili - Varyant 2",
    "description": "Çevre ve Su sektörüne yönelik: Takviye edici gıdalarda etiket beyanını doğrulamak üzere suda/yağda çözünen vitaminlerin LC-MS/MS ile analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EN 3629",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-38-mob72t1i",
    "title": "Ambalaj ve Plastik için Pestisit Kalıntı Analizi - Varyant 2",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Gıda ve bitkisel ekstraktlarda 600+ pestisit etken maddesinin QuEChERS metodu ile çoklu kalıntı taraması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "ASTM 6364",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-39-mob72t1i",
    "title": "Mikrobiyoloji için Spesifik Migrasyon Testi - Varyant 2",
    "description": "Mikrobiyoloji sektörüne yönelik: Gıda ile temas eden madde ve malzemelerden gıdaya geçen kimyasalların spesifik simulantlar kullanılarak tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EPA 1544",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-40-mob72t1i",
    "title": "Kozmetik için Nitrozamin Safsızlık Tayini - Varyant 2",
    "description": "Kozmetik sektörüne yönelik: İlaç ve kisisel bakim urunlerinde genotoksik NDMA ve türevlerinin ultra hassas LC-MS/MS tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": true,
    "standards": "USP 5525",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-41-mob72t1i",
    "title": "İlaç ve Hammadde için Yırtılma ve Kopma Mukavemeti - Varyant 2",
    "description": "İlaç ve Hammadde sektörüne yönelik: Tekstil, plastik ve ambalaj malzemelerinin çekme ve kopma dirençlerinin dinamometrik cihazlarla ölçümü. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EP 4904",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-42-mob72t1i",
    "title": "Tekstil ve Deri için RoHS Uygunluk Analizi - Varyant 2",
    "description": "Tekstil ve Deri sektörüne yönelik: Elektrikli cihazlarda kurşun, cıva, kadmiyum ve alev geciktiricilerin (PBB, PBDE) tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "ISO 8332",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-43-mob72t1i",
    "title": "Takviye Edici Gıda için Dioksin ve PCB Analizi - Varyant 2",
    "description": "Takviye Edici Gıda sektörüne yönelik: Çevresel numuneler ve gıdalarda yüksek çözünürlüklü kütle spektrometrisi (HRMS) ile toksik dioksin tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EN 1665",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-44-mob72t1i",
    "title": "Belgelendirme için VOC (Uçucu Organik Bileşik) Emisyonu - Varyant 2",
    "description": "Belgelendirme sektörüne yönelik: Kapalı ortam materyallerinden salınan uçucu organik bileşiklerin (formaldehit vb.) Headspace-GC-MS ile tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "ASTM 5531",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-45-mob72t1i",
    "title": "Çevre ve Su için Ağır Metal (Pb, Cd, Hg, As) Tayini - Varyant 3",
    "description": "Çevre ve Su sektörüne yönelik: ICP-MS cihazı ile eser element ve ağır metallerin ppm/ppb seviyesinde kantitatif tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EPA 1129",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-46-mob72t1i",
    "title": "Ambalaj ve Plastik için Mikrobiyolojik Patojen Taraması - Varyant 3",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Toplam canlı sayımı ve spesifik patojenlerin (E. coli, S. aureus vb.) izolasyon ve identifikasyon işlemleri. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "USP 8625",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-47-mob72t1i",
    "title": "Mikrobiyoloji için Koruyucu Etkinlik (Challenge) Testi - Varyant 3",
    "description": "Mikrobiyoloji sektörüne yönelik: Ürünün raf ömrü boyunca mikrobiyal kontaminasyona karşı korunma kapasitesinin değerlendirilmesi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EP 8726",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-48-mob72t1i",
    "title": "Kozmetik için Hızlandırılmış Stabilite Testi - Varyant 3",
    "description": "Kozmetik sektörüne yönelik: Farklı sıcaklık ve bağıl nem koşullarında (%75 RH, 40°C) ürünün fizikokimyasal bozunma kinetiğinin hesaplanması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "ISO 9166",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-49-mob72t1i",
    "title": "İlaç ve Hammadde için Organik Safsızlık Tayini - Varyant 3",
    "description": "İlaç ve Hammadde sektörüne yönelik: HPLC ve GC-MS kullanılarak üründeki eser miktardaki bozunma ürünlerinin ve organik safsızlıkların tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EN 6817",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-50-mob72t1i",
    "title": "Tekstil ve Deri için Fitalat (Plastifiyan) Taraması - Varyant 3",
    "description": "Tekstil ve Deri sektörüne yönelik: Plastik ve ambalaj materyallerindeki yasaklı fitalat esterlerinin ekstraksiyonu ve GC-MS analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": true,
    "standards": "ASTM 6722",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-51-mob72t1i",
    "title": "Takviye Edici Gıda için Azo Boyar Madde Testi - Varyant 3",
    "description": "Takviye Edici Gıda sektörüne yönelik: Tekstil ve deri ürünlerinde kanserojen primer aromatik aminlerin tespiti (REACH uyumlu). Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EPA 6827",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-52-mob72t1i",
    "title": "Belgelendirme için Vitamin ve Mineral Profili - Varyant 3",
    "description": "Belgelendirme sektörüne yönelik: Takviye edici gıdalarda etiket beyanını doğrulamak üzere suda/yağda çözünen vitaminlerin LC-MS/MS ile analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "USP 2620",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-53-mob72t1i",
    "title": "Çevre ve Su için Pestisit Kalıntı Analizi - Varyant 3",
    "description": "Çevre ve Su sektörüne yönelik: Gıda ve bitkisel ekstraktlarda 600+ pestisit etken maddesinin QuEChERS metodu ile çoklu kalıntı taraması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EP 2609",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-54-mob72t1i",
    "title": "Ambalaj ve Plastik için Spesifik Migrasyon Testi - Varyant 3",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Gıda ile temas eden madde ve malzemelerden gıdaya geçen kimyasalların spesifik simulantlar kullanılarak tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "ISO 6628",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-55-mob72t1i",
    "title": "Mikrobiyoloji için Nitrozamin Safsızlık Tayini - Varyant 3",
    "description": "Mikrobiyoloji sektörüne yönelik: İlaç ve kisisel bakim urunlerinde genotoksik NDMA ve türevlerinin ultra hassas LC-MS/MS tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EN 5256",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-56-mob72t1i",
    "title": "Kozmetik için Yırtılma ve Kopma Mukavemeti - Varyant 3",
    "description": "Kozmetik sektörüne yönelik: Tekstil, plastik ve ambalaj malzemelerinin çekme ve kopma dirençlerinin dinamometrik cihazlarla ölçümü. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "ASTM 2002",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-57-mob72t1i",
    "title": "İlaç ve Hammadde için RoHS Uygunluk Analizi - Varyant 3",
    "description": "İlaç ve Hammadde sektörüne yönelik: Elektrikli cihazlarda kurşun, cıva, kadmiyum ve alev geciktiricilerin (PBB, PBDE) tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EPA 1540",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-58-mob72t1i",
    "title": "Tekstil ve Deri için Dioksin ve PCB Analizi - Varyant 3",
    "description": "Tekstil ve Deri sektörüne yönelik: Çevresel numuneler ve gıdalarda yüksek çözünürlüklü kütle spektrometrisi (HRMS) ile toksik dioksin tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "USP 5745",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-59-mob72t1i",
    "title": "Takviye Edici Gıda için VOC (Uçucu Organik Bileşik) Emisyonu - Varyant 3",
    "description": "Takviye Edici Gıda sektörüne yönelik: Kapalı ortam materyallerinden salınan uçucu organik bileşiklerin (formaldehit vb.) Headspace-GC-MS ile tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EP 8252",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-60-mob72t1i",
    "title": "Belgelendirme için Ağır Metal (Pb, Cd, Hg, As) Tayini - Varyant 4",
    "description": "Belgelendirme sektörüne yönelik: ICP-MS cihazı ile eser element ve ağır metallerin ppm/ppb seviyesinde kantitatif tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": true,
    "standards": "ISO 8088",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-61-mob72t1i",
    "title": "Çevre ve Su için Mikrobiyolojik Patojen Taraması - Varyant 4",
    "description": "Çevre ve Su sektörüne yönelik: Toplam canlı sayımı ve spesifik patojenlerin (E. coli, S. aureus vb.) izolasyon ve identifikasyon işlemleri. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EN 6440",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-62-mob72t1i",
    "title": "Ambalaj ve Plastik için Koruyucu Etkinlik (Challenge) Testi - Varyant 4",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Ürünün raf ömrü boyunca mikrobiyal kontaminasyona karşı korunma kapasitesinin değerlendirilmesi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "ASTM 9319",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-63-mob72t1i",
    "title": "Mikrobiyoloji için Hızlandırılmış Stabilite Testi - Varyant 4",
    "description": "Mikrobiyoloji sektörüne yönelik: Farklı sıcaklık ve bağıl nem koşullarında (%75 RH, 40°C) ürünün fizikokimyasal bozunma kinetiğinin hesaplanması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EPA 2770",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-64-mob72t1i",
    "title": "Kozmetik için Organik Safsızlık Tayini - Varyant 4",
    "description": "Kozmetik sektörüne yönelik: HPLC ve GC-MS kullanılarak üründeki eser miktardaki bozunma ürünlerinin ve organik safsızlıkların tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "USP 6503",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-65-mob72t1i",
    "title": "İlaç ve Hammadde için Fitalat (Plastifiyan) Taraması - Varyant 4",
    "description": "İlaç ve Hammadde sektörüne yönelik: Plastik ve ambalaj materyallerindeki yasaklı fitalat esterlerinin ekstraksiyonu ve GC-MS analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EP 3635",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-66-mob72t1i",
    "title": "Tekstil ve Deri için Azo Boyar Madde Testi - Varyant 4",
    "description": "Tekstil ve Deri sektörüne yönelik: Tekstil ve deri ürünlerinde kanserojen primer aromatik aminlerin tespiti (REACH uyumlu). Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "ISO 8405",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-67-mob72t1i",
    "title": "Takviye Edici Gıda için Vitamin ve Mineral Profili - Varyant 4",
    "description": "Takviye Edici Gıda sektörüne yönelik: Takviye edici gıdalarda etiket beyanını doğrulamak üzere suda/yağda çözünen vitaminlerin LC-MS/MS ile analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EN 2307",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-68-mob72t1i",
    "title": "Belgelendirme için Pestisit Kalıntı Analizi - Varyant 4",
    "description": "Belgelendirme sektörüne yönelik: Gıda ve bitkisel ekstraktlarda 600+ pestisit etken maddesinin QuEChERS metodu ile çoklu kalıntı taraması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "ASTM 7721",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-69-mob72t1i",
    "title": "Çevre ve Su için Spesifik Migrasyon Testi - Varyant 4",
    "description": "Çevre ve Su sektörüne yönelik: Gıda ile temas eden madde ve malzemelerden gıdaya geçen kimyasalların spesifik simulantlar kullanılarak tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EPA 1509",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-70-mob72t1i",
    "title": "Ambalaj ve Plastik için Nitrozamin Safsızlık Tayini - Varyant 4",
    "description": "Ambalaj ve Plastik sektörüne yönelik: İlaç ve kisisel bakim urunlerinde genotoksik NDMA ve türevlerinin ultra hassas LC-MS/MS tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": true,
    "standards": "USP 3131",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-71-mob72t1i",
    "title": "Mikrobiyoloji için Yırtılma ve Kopma Mukavemeti - Varyant 4",
    "description": "Mikrobiyoloji sektörüne yönelik: Tekstil, plastik ve ambalaj malzemelerinin çekme ve kopma dirençlerinin dinamometrik cihazlarla ölçümü. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EP 5209",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-72-mob72t1i",
    "title": "Kozmetik için RoHS Uygunluk Analizi - Varyant 4",
    "description": "Kozmetik sektörüne yönelik: Elektrikli cihazlarda kurşun, cıva, kadmiyum ve alev geciktiricilerin (PBB, PBDE) tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "ISO 3825",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-73-mob72t1i",
    "title": "İlaç ve Hammadde için Dioksin ve PCB Analizi - Varyant 4",
    "description": "İlaç ve Hammadde sektörüne yönelik: Çevresel numuneler ve gıdalarda yüksek çözünürlüklü kütle spektrometrisi (HRMS) ile toksik dioksin tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EN 8756",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-74-mob72t1i",
    "title": "Tekstil ve Deri için VOC (Uçucu Organik Bileşik) Emisyonu - Varyant 4",
    "description": "Tekstil ve Deri sektörüne yönelik: Kapalı ortam materyallerinden salınan uçucu organik bileşiklerin (formaldehit vb.) Headspace-GC-MS ile tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "ASTM 3079",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-75-mob72t1i",
    "title": "Takviye Edici Gıda için Ağır Metal (Pb, Cd, Hg, As) Tayini - Varyant 5",
    "description": "Takviye Edici Gıda sektörüne yönelik: ICP-MS cihazı ile eser element ve ağır metallerin ppm/ppb seviyesinde kantitatif tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EPA 2643",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-76-mob72t1i",
    "title": "Belgelendirme için Mikrobiyolojik Patojen Taraması - Varyant 5",
    "description": "Belgelendirme sektörüne yönelik: Toplam canlı sayımı ve spesifik patojenlerin (E. coli, S. aureus vb.) izolasyon ve identifikasyon işlemleri. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "USP 5114",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-77-mob72t1i",
    "title": "Çevre ve Su için Koruyucu Etkinlik (Challenge) Testi - Varyant 5",
    "description": "Çevre ve Su sektörüne yönelik: Ürünün raf ömrü boyunca mikrobiyal kontaminasyona karşı korunma kapasitesinin değerlendirilmesi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EP 8461",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-78-mob72t1i",
    "title": "Ambalaj ve Plastik için Hızlandırılmış Stabilite Testi - Varyant 5",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Farklı sıcaklık ve bağıl nem koşullarında (%75 RH, 40°C) ürünün fizikokimyasal bozunma kinetiğinin hesaplanması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "ISO 6807",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-79-mob72t1i",
    "title": "Mikrobiyoloji için Organik Safsızlık Tayini - Varyant 5",
    "description": "Mikrobiyoloji sektörüne yönelik: HPLC ve GC-MS kullanılarak üründeki eser miktardaki bozunma ürünlerinin ve organik safsızlıkların tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EN 9678",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-80-mob72t1i",
    "title": "Kozmetik için Fitalat (Plastifiyan) Taraması - Varyant 5",
    "description": "Kozmetik sektörüne yönelik: Plastik ve ambalaj materyallerindeki yasaklı fitalat esterlerinin ekstraksiyonu ve GC-MS analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": true,
    "standards": "ASTM 7901",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-81-mob72t1i",
    "title": "İlaç ve Hammadde için Azo Boyar Madde Testi - Varyant 5",
    "description": "İlaç ve Hammadde sektörüne yönelik: Tekstil ve deri ürünlerinde kanserojen primer aromatik aminlerin tespiti (REACH uyumlu). Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EPA 3878",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-82-mob72t1i",
    "title": "Tekstil ve Deri için Vitamin ve Mineral Profili - Varyant 5",
    "description": "Tekstil ve Deri sektörüne yönelik: Takviye edici gıdalarda etiket beyanını doğrulamak üzere suda/yağda çözünen vitaminlerin LC-MS/MS ile analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "USP 8550",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-83-mob72t1i",
    "title": "Takviye Edici Gıda için Pestisit Kalıntı Analizi - Varyant 5",
    "description": "Takviye Edici Gıda sektörüne yönelik: Gıda ve bitkisel ekstraktlarda 600+ pestisit etken maddesinin QuEChERS metodu ile çoklu kalıntı taraması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EP 9229",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-84-mob72t1i",
    "title": "Belgelendirme için Spesifik Migrasyon Testi - Varyant 5",
    "description": "Belgelendirme sektörüne yönelik: Gıda ile temas eden madde ve malzemelerden gıdaya geçen kimyasalların spesifik simulantlar kullanılarak tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "ISO 8184",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-85-mob72t1i",
    "title": "Çevre ve Su için Nitrozamin Safsızlık Tayini - Varyant 5",
    "description": "Çevre ve Su sektörüne yönelik: İlaç ve kisisel bakim urunlerinde genotoksik NDMA ve türevlerinin ultra hassas LC-MS/MS tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EN 9435",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-86-mob72t1i",
    "title": "Ambalaj ve Plastik için Yırtılma ve Kopma Mukavemeti - Varyant 5",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Tekstil, plastik ve ambalaj malzemelerinin çekme ve kopma dirençlerinin dinamometrik cihazlarla ölçümü. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "ASTM 4391",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-87-mob72t1i",
    "title": "Mikrobiyoloji için RoHS Uygunluk Analizi - Varyant 5",
    "description": "Mikrobiyoloji sektörüne yönelik: Elektrikli cihazlarda kurşun, cıva, kadmiyum ve alev geciktiricilerin (PBB, PBDE) tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EPA 2781",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-88-mob72t1i",
    "title": "Kozmetik için Dioksin ve PCB Analizi - Varyant 5",
    "description": "Kozmetik sektörüne yönelik: Çevresel numuneler ve gıdalarda yüksek çözünürlüklü kütle spektrometrisi (HRMS) ile toksik dioksin tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "USP 5460",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-89-mob72t1i",
    "title": "İlaç ve Hammadde için VOC (Uçucu Organik Bileşik) Emisyonu - Varyant 5",
    "description": "İlaç ve Hammadde sektörüne yönelik: Kapalı ortam materyallerinden salınan uçucu organik bileşiklerin (formaldehit vb.) Headspace-GC-MS ile tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EP 2465",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-90-mob72t1i",
    "title": "Tekstil ve Deri için Ağır Metal (Pb, Cd, Hg, As) Tayini - Varyant 6",
    "description": "Tekstil ve Deri sektörüne yönelik: ICP-MS cihazı ile eser element ve ağır metallerin ppm/ppb seviyesinde kantitatif tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": true,
    "standards": "ISO 6892",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-91-mob72t1i",
    "title": "Takviye Edici Gıda için Mikrobiyolojik Patojen Taraması - Varyant 6",
    "description": "Takviye Edici Gıda sektörüne yönelik: Toplam canlı sayımı ve spesifik patojenlerin (E. coli, S. aureus vb.) izolasyon ve identifikasyon işlemleri. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EN 4885",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-92-mob72t1i",
    "title": "Belgelendirme için Koruyucu Etkinlik (Challenge) Testi - Varyant 6",
    "description": "Belgelendirme sektörüne yönelik: Ürünün raf ömrü boyunca mikrobiyal kontaminasyona karşı korunma kapasitesinin değerlendirilmesi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "ASTM 2140",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-93-mob72t1i",
    "title": "Çevre ve Su için Hızlandırılmış Stabilite Testi - Varyant 6",
    "description": "Çevre ve Su sektörüne yönelik: Farklı sıcaklık ve bağıl nem koşullarında (%75 RH, 40°C) ürünün fizikokimyasal bozunma kinetiğinin hesaplanması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EPA 5346",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-94-mob72t1i",
    "title": "Ambalaj ve Plastik için Organik Safsızlık Tayini - Varyant 6",
    "description": "Ambalaj ve Plastik sektörüne yönelik: HPLC ve GC-MS kullanılarak üründeki eser miktardaki bozunma ürünlerinin ve organik safsızlıkların tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "USP 5151",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-95-mob72t1i",
    "title": "Mikrobiyoloji için Fitalat (Plastifiyan) Taraması - Varyant 6",
    "description": "Mikrobiyoloji sektörüne yönelik: Plastik ve ambalaj materyallerindeki yasaklı fitalat esterlerinin ekstraksiyonu ve GC-MS analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EP 3493",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-96-mob72t1i",
    "title": "Kozmetik için Azo Boyar Madde Testi - Varyant 6",
    "description": "Kozmetik sektörüne yönelik: Tekstil ve deri ürünlerinde kanserojen primer aromatik aminlerin tespiti (REACH uyumlu). Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "ISO 9535",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-97-mob72t1i",
    "title": "İlaç ve Hammadde için Vitamin ve Mineral Profili - Varyant 6",
    "description": "İlaç ve Hammadde sektörüne yönelik: Takviye edici gıdalarda etiket beyanını doğrulamak üzere suda/yağda çözünen vitaminlerin LC-MS/MS ile analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EN 9718",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-98-mob72t1i",
    "title": "Tekstil ve Deri için Pestisit Kalıntı Analizi - Varyant 6",
    "description": "Tekstil ve Deri sektörüne yönelik: Gıda ve bitkisel ekstraktlarda 600+ pestisit etken maddesinin QuEChERS metodu ile çoklu kalıntı taraması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "ASTM 4676",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-99-mob72t1i",
    "title": "Takviye Edici Gıda için Spesifik Migrasyon Testi - Varyant 6",
    "description": "Takviye Edici Gıda sektörüne yönelik: Gıda ile temas eden madde ve malzemelerden gıdaya geçen kimyasalların spesifik simulantlar kullanılarak tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EPA 6263",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-100-mob72t1i",
    "title": "Belgelendirme için Nitrozamin Safsızlık Tayini - Varyant 6",
    "description": "Belgelendirme sektörüne yönelik: İlaç ve kisisel bakim urunlerinde genotoksik NDMA ve türevlerinin ultra hassas LC-MS/MS tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": true,
    "standards": "USP 6479",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  }
];
export const blogs: BlogPost[] = [
  {
    "id": "kozmetik-r-nlerde-challenge-testi-neden-zorunludur",
    "title": "Kozmetik Ürünlerde Challenge Testi Neden Zorunludur?",
    "date": "2026-04-17",
    "author": "Oğuzhan EKER",
    "category": "Kozmetik",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "iso-17025-akreditasyonu-laboratuvar-se-iminde-neden-nemlidir",
    "title": "ISO 17025 Akreditasyonu Laboratuvar Seçiminde Neden Önemlidir?",
    "date": "2026-01-12",
    "author": "Uzman Analist Ekibi",
    "category": "İlaç ve Hammadde",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "tekstil-sekt-r-nde-reach-reg-lasyonu-ve-azo-boyar-maddeler",
    "title": "Tekstil Sektöründe REACH Regülasyonu ve Azo Boyar Maddeler",
    "date": "2026-02-16",
    "author": "Uzman Analist Ekibi",
    "category": "Tekstil ve Deri",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "g-da-takviyelerinde-a-r-metal-ve-pestisit-tehlikesi",
    "title": "Gıda Takviyelerinde Ağır Metal ve Pestisit Tehlikesi",
    "date": "2026-03-22",
    "author": "Uzman Analist Ekibi",
    "category": "Takviye Edici Gıda",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "ambalajlarda-spesifik-migrasyon-g-da-g-venli-inin-g-r-nmez-tehdidi",
    "title": "Ambalajlarda Spesifik Migrasyon: Gıda Güvenliğinin Görünmez Tehdidi",
    "date": "2026-02-20",
    "author": "Uzman Analist Ekibi",
    "category": "Belgelendirme",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "i-la-sekt-r-nde-nitrozamin-krizi-ve-yeni-analitik-yakla-mlar",
    "title": "İlaç Sektöründe Nitrozamin Krizi ve Yeni Analitik Yaklaşımlar",
    "date": "2026-03-12",
    "author": "Uzman Analist Ekibi",
    "category": "Çevre ve Su",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "rohs-direktifi-elektronik-r-n-i-hracat-nda-bilinmesi-gerekenler",
    "title": "RoHS Direktifi: Elektronik Ürün İhracatında Bilinmesi Gerekenler",
    "date": "2026-01-04",
    "author": "Uzman Analist Ekibi",
    "category": "Ambalaj ve Plastik",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "su-analizlerinde-legionella-pn-mofila-riski",
    "title": "Su Analizlerinde Legionella Pnömofila Riski",
    "date": "2026-02-16",
    "author": "Uzman Analist Ekibi",
    "category": "Mikrobiyoloji",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "kozmetikte-koruyucu-i-ermeyen-preservative-free-r-n-i-ddialar-n-n-kan-tlanmas",
    "title": "Kozmetikte Koruyucu İçermeyen (Preservative-Free) Ürün İddialarının Kanıtlanması",
    "date": "2026-02-14",
    "author": "Uzman Analist Ekibi",
    "category": "Kozmetik",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "laboratuvarlarda-dijital-raporlama-lims-sisteminin-m-teriye-faydalar",
    "title": "Laboratuvarlarda Dijital Raporlama (LIMS) Sisteminin Müşteriye Faydaları",
    "date": "2026-03-26",
    "author": "Uzman Analist Ekibi",
    "category": "İlaç ve Hammadde",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "tareks-denetimleri-i-thalatta-kar-la-lan-en-s-k-hatalar",
    "title": "TAREKS Denetimleri: İthalatta Karşılaşılan En Sık Hatalar",
    "date": "2026-01-27",
    "author": "Uzman Analist Ekibi",
    "category": "Tekstil ve Deri",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "helal-kozmetik-belgelendirmesinde-laboratuvar-testlerinin-rol",
    "title": "Helal Kozmetik Belgelendirmesinde Laboratuvar Testlerinin Rolü",
    "date": "2026-01-13",
    "author": "Uzman Analist Ekibi",
    "category": "Takviye Edici Gıda",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "vegan-etiketli-r-nlerde-hayvansal-dna-taramas",
    "title": "Vegan Etiketli Ürünlerde Hayvansal DNA Taraması",
    "date": "2026-02-27",
    "author": "Uzman Analist Ekibi",
    "category": "Belgelendirme",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "mikroplastik-analizleri-evremizdeki-gizli-tehlike",
    "title": "Mikroplastik Analizleri: Çevremizdeki Gizli Tehlike",
    "date": "2026-02-23",
    "author": "Uzman Analist Ekibi",
    "category": "Çevre ve Su",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "h-zland-r-lm-stabilite-vs-uzun-s-reli-stabilite-hangisini-se-meliyim",
    "title": "Hızlandırılmış Stabilite vs Uzun Süreli Stabilite: Hangisini Seçmeliyim?",
    "date": "2026-02-06",
    "author": "Uzman Analist Ekibi",
    "category": "Ambalaj ve Plastik",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  }
];
export const categories = [
  "Tümü",
  "Kozmetik",
  "İlaç ve Hammadde",
  "Tekstil ve Deri",
  "Takviye Edici Gıda",
  "Belgelendirme",
  "Çevre ve Su",
  "Ambalaj ve Plastik",
  "Mikrobiyoloji"
];
