
export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  popular?: boolean;
  standards?: string;
  turnaroundTime?: string;
  sampleRequirement?: string;
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
    "id": "test-1-mo94bkn3",
    "title": "Mikrobiyolojik Patojen Taraması",
    "description": "İlaç ve Hammadde sektörüne yönelik: Toplam canlı sayımı ve spesifik patojenlerin (E. coli, S. aureus vb.) izolasyon ve identifikasyon işlemleri. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EN 6450",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-2-mo94bkn3",
    "title": "Koruyucu Etkinlik (Challenge) Testi",
    "description": "Tekstil ve Deri sektörüne yönelik: Ürünün raf ömrü boyunca mikrobiyal kontaminasyona karşı korunma kapasitesinin değerlendirilmesi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "ASTM 5474",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-3-mo94bkn3",
    "title": "Hızlandırılmış Stabilite Testi",
    "description": "Takviye Edici Gıda sektörüne yönelik: Farklı sıcaklık ve bağıl nem koşullarında (%75 RH, 40°C) ürünün fizikokimyasal bozunma kinetiğinin hesaplanması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EPA 3837",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-4-mo94bkn3",
    "title": "Organik Safsızlık Tayini",
    "description": "Belgelendirme sektörüne yönelik: HPLC ve GC-MS kullanılarak üründeki eser miktardaki bozunma ürünlerinin ve organik safsızlıkların tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "USP 4836",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-5-mo94bkn3",
    "title": "Fitalat (Plastifiyan) Taraması",
    "description": "Çevre ve Su sektörüne yönelik: Plastik ve ambalaj materyallerindeki yasaklı fitalat esterlerinin ekstraksiyonu ve GC-MS analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EP 8649",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-6-mo94bkn3",
    "title": "Azo Boyar Madde Testi",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Tekstil ve deri ürünlerinde kanserojen primer aromatik aminlerin tespiti (REACH uyumlu). Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "ISO 3783",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-7-mo94bkn3",
    "title": "Vitamin ve Mineral Profili",
    "description": "Mikrobiyoloji sektörüne yönelik: Takviye edici gıdalarda etiket beyanını doğrulamak üzere suda/yağda çözünen vitaminlerin LC-MS/MS ile analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EN 5980",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-8-mo94bkn3",
    "title": "Pestisit Kalıntı Analizi",
    "description": "Kozmetik sektörüne yönelik: Gıda ve bitkisel ekstraktlarda 600+ pestisit etken maddesinin QuEChERS metodu ile çoklu kalıntı taraması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "ASTM 2898",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-9-mo94bkn3",
    "title": "Spesifik Migrasyon Testi",
    "description": "İlaç ve Hammadde sektörüne yönelik: Gıda ile temas eden madde ve malzemelerden gıdaya geçen kimyasalların spesifik simulantlar kullanılarak tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EPA 7638",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-10-mo94bkn3",
    "title": "Nitrozamin Safsızlık Tayini",
    "description": "Tekstil ve Deri sektörüne yönelik: İlaç ve kisisel bakim urunlerinde genotoksik NDMA ve türevlerinin ultra hassas LC-MS/MS tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": true,
    "standards": "USP 6392",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-11-mo94bkn3",
    "title": "Yırtılma ve Kopma Mukavemeti",
    "description": "Takviye Edici Gıda sektörüne yönelik: Tekstil, plastik ve ambalaj malzemelerinin çekme ve kopma dirençlerinin dinamometrik cihazlarla ölçümü. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EP 1125",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-12-mo94bkn3",
    "title": "RoHS Uygunluk Analizi",
    "description": "Belgelendirme sektörüne yönelik: Elektrikli cihazlarda kurşun, cıva, kadmiyum ve alev geciktiricilerin (PBB, PBDE) tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "ISO 1607",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-13-mo94bkn3",
    "title": "Dioksin ve PCB Analizi",
    "description": "Çevre ve Su sektörüne yönelik: Çevresel numuneler ve gıdalarda yüksek çözünürlüklü kütle spektrometrisi (HRMS) ile toksik dioksin tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EN 4995",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-14-mo94bkn3",
    "title": "VOC (Uçucu Organik Bileşik) Emisyonu",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Kapalı ortam materyallerinden salınan uçucu organik bileşiklerin (formaldehit vb.) Headspace-GC-MS ile tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "ASTM 7345",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-15-mo94bkn3",
    "title": "Ağır Metal (Pb, Cd, Hg, As) Tayini",
    "description": "Mikrobiyoloji sektörüne yönelik: ICP-MS cihazı ile eser element ve ağır metallerin ppm/ppb seviyesinde kantitatif tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EPA 8030",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-16-mo94bkn3",
    "title": "Kozmetik için Mikrobiyolojik Patojen Taraması - Varyant 1",
    "description": "Kozmetik sektörüne yönelik: Toplam canlı sayımı ve spesifik patojenlerin (E. coli, S. aureus vb.) izolasyon ve identifikasyon işlemleri. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "USP 5508",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-17-mo94bkn3",
    "title": "İlaç ve Hammadde için Koruyucu Etkinlik (Challenge) Testi - Varyant 1",
    "description": "İlaç ve Hammadde sektörüne yönelik: Ürünün raf ömrü boyunca mikrobiyal kontaminasyona karşı korunma kapasitesinin değerlendirilmesi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EP 4328",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-18-mo94bkn3",
    "title": "Tekstil ve Deri için Hızlandırılmış Stabilite Testi - Varyant 1",
    "description": "Tekstil ve Deri sektörüne yönelik: Farklı sıcaklık ve bağıl nem koşullarında (%75 RH, 40°C) ürünün fizikokimyasal bozunma kinetiğinin hesaplanması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "ISO 5605",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-19-mo94bkn3",
    "title": "Takviye Edici Gıda için Organik Safsızlık Tayini - Varyant 1",
    "description": "Takviye Edici Gıda sektörüne yönelik: HPLC ve GC-MS kullanılarak üründeki eser miktardaki bozunma ürünlerinin ve organik safsızlıkların tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EN 2409",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-20-mo94bkn3",
    "title": "Belgelendirme için Fitalat (Plastifiyan) Taraması - Varyant 1",
    "description": "Belgelendirme sektörüne yönelik: Plastik ve ambalaj materyallerindeki yasaklı fitalat esterlerinin ekstraksiyonu ve GC-MS analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": true,
    "standards": "ASTM 4259",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-21-mo94bkn3",
    "title": "Çevre ve Su için Azo Boyar Madde Testi - Varyant 1",
    "description": "Çevre ve Su sektörüne yönelik: Tekstil ve deri ürünlerinde kanserojen primer aromatik aminlerin tespiti (REACH uyumlu). Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EPA 9160",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-22-mo94bkn3",
    "title": "Ambalaj ve Plastik için Vitamin ve Mineral Profili - Varyant 1",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Takviye edici gıdalarda etiket beyanını doğrulamak üzere suda/yağda çözünen vitaminlerin LC-MS/MS ile analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "USP 8080",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-23-mo94bkn3",
    "title": "Mikrobiyoloji için Pestisit Kalıntı Analizi - Varyant 1",
    "description": "Mikrobiyoloji sektörüne yönelik: Gıda ve bitkisel ekstraktlarda 600+ pestisit etken maddesinin QuEChERS metodu ile çoklu kalıntı taraması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EP 3093",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-24-mo94bkn3",
    "title": "Kozmetik için Spesifik Migrasyon Testi - Varyant 1",
    "description": "Kozmetik sektörüne yönelik: Gıda ile temas eden madde ve malzemelerden gıdaya geçen kimyasalların spesifik simulantlar kullanılarak tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "ISO 4995",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-25-mo94bkn3",
    "title": "İlaç ve Hammadde için Nitrozamin Safsızlık Tayini - Varyant 1",
    "description": "İlaç ve Hammadde sektörüne yönelik: İlaç ve kisisel bakim urunlerinde genotoksik NDMA ve türevlerinin ultra hassas LC-MS/MS tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EN 2451",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-26-mo94bkn3",
    "title": "Tekstil ve Deri için Yırtılma ve Kopma Mukavemeti - Varyant 1",
    "description": "Tekstil ve Deri sektörüne yönelik: Tekstil, plastik ve ambalaj malzemelerinin çekme ve kopma dirençlerinin dinamometrik cihazlarla ölçümü. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "ASTM 7155",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-27-mo94bkn3",
    "title": "Takviye Edici Gıda için RoHS Uygunluk Analizi - Varyant 1",
    "description": "Takviye Edici Gıda sektörüne yönelik: Elektrikli cihazlarda kurşun, cıva, kadmiyum ve alev geciktiricilerin (PBB, PBDE) tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EPA 8938",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-28-mo94bkn3",
    "title": "Belgelendirme için Dioksin ve PCB Analizi - Varyant 1",
    "description": "Belgelendirme sektörüne yönelik: Çevresel numuneler ve gıdalarda yüksek çözünürlüklü kütle spektrometrisi (HRMS) ile toksik dioksin tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "USP 5376",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-29-mo94bkn3",
    "title": "Çevre ve Su için VOC (Uçucu Organik Bileşik) Emisyonu - Varyant 1",
    "description": "Çevre ve Su sektörüne yönelik: Kapalı ortam materyallerinden salınan uçucu organik bileşiklerin (formaldehit vb.) Headspace-GC-MS ile tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EP 2176",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-30-mo94bkn3",
    "title": "Ambalaj ve Plastik için Ağır Metal (Pb, Cd, Hg, As) Tayini - Varyant 2",
    "description": "Ambalaj ve Plastik sektörüne yönelik: ICP-MS cihazı ile eser element ve ağır metallerin ppm/ppb seviyesinde kantitatif tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": true,
    "standards": "ISO 7178",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-31-mo94bkn3",
    "title": "Mikrobiyoloji için Mikrobiyolojik Patojen Taraması - Varyant 2",
    "description": "Mikrobiyoloji sektörüne yönelik: Toplam canlı sayımı ve spesifik patojenlerin (E. coli, S. aureus vb.) izolasyon ve identifikasyon işlemleri. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EN 1202",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-32-mo94bkn3",
    "title": "Kozmetik için Koruyucu Etkinlik (Challenge) Testi - Varyant 2",
    "description": "Kozmetik sektörüne yönelik: Ürünün raf ömrü boyunca mikrobiyal kontaminasyona karşı korunma kapasitesinin değerlendirilmesi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "ASTM 5345",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-33-mo94bkn3",
    "title": "İlaç ve Hammadde için Hızlandırılmış Stabilite Testi - Varyant 2",
    "description": "İlaç ve Hammadde sektörüne yönelik: Farklı sıcaklık ve bağıl nem koşullarında (%75 RH, 40°C) ürünün fizikokimyasal bozunma kinetiğinin hesaplanması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EPA 8918",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-34-mo94bkn3",
    "title": "Tekstil ve Deri için Organik Safsızlık Tayini - Varyant 2",
    "description": "Tekstil ve Deri sektörüne yönelik: HPLC ve GC-MS kullanılarak üründeki eser miktardaki bozunma ürünlerinin ve organik safsızlıkların tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "USP 1363",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-35-mo94bkn3",
    "title": "Takviye Edici Gıda için Fitalat (Plastifiyan) Taraması - Varyant 2",
    "description": "Takviye Edici Gıda sektörüne yönelik: Plastik ve ambalaj materyallerindeki yasaklı fitalat esterlerinin ekstraksiyonu ve GC-MS analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EP 8432",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-36-mo94bkn3",
    "title": "Belgelendirme için Azo Boyar Madde Testi - Varyant 2",
    "description": "Belgelendirme sektörüne yönelik: Tekstil ve deri ürünlerinde kanserojen primer aromatik aminlerin tespiti (REACH uyumlu). Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "ISO 3040",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-37-mo94bkn3",
    "title": "Çevre ve Su için Vitamin ve Mineral Profili - Varyant 2",
    "description": "Çevre ve Su sektörüne yönelik: Takviye edici gıdalarda etiket beyanını doğrulamak üzere suda/yağda çözünen vitaminlerin LC-MS/MS ile analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EN 7545",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-38-mo94bkn3",
    "title": "Ambalaj ve Plastik için Pestisit Kalıntı Analizi - Varyant 2",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Gıda ve bitkisel ekstraktlarda 600+ pestisit etken maddesinin QuEChERS metodu ile çoklu kalıntı taraması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "ASTM 8674",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-39-mo94bkn3",
    "title": "Mikrobiyoloji için Spesifik Migrasyon Testi - Varyant 2",
    "description": "Mikrobiyoloji sektörüne yönelik: Gıda ile temas eden madde ve malzemelerden gıdaya geçen kimyasalların spesifik simulantlar kullanılarak tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EPA 8690",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-40-mo94bkn3",
    "title": "Kozmetik için Nitrozamin Safsızlık Tayini - Varyant 2",
    "description": "Kozmetik sektörüne yönelik: İlaç ve kisisel bakim urunlerinde genotoksik NDMA ve türevlerinin ultra hassas LC-MS/MS tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": true,
    "standards": "USP 2885",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-41-mo94bkn3",
    "title": "İlaç ve Hammadde için Yırtılma ve Kopma Mukavemeti - Varyant 2",
    "description": "İlaç ve Hammadde sektörüne yönelik: Tekstil, plastik ve ambalaj malzemelerinin çekme ve kopma dirençlerinin dinamometrik cihazlarla ölçümü. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EP 3986",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-42-mo94bkn3",
    "title": "Tekstil ve Deri için RoHS Uygunluk Analizi - Varyant 2",
    "description": "Tekstil ve Deri sektörüne yönelik: Elektrikli cihazlarda kurşun, cıva, kadmiyum ve alev geciktiricilerin (PBB, PBDE) tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "ISO 4800",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-43-mo94bkn3",
    "title": "Takviye Edici Gıda için Dioksin ve PCB Analizi - Varyant 2",
    "description": "Takviye Edici Gıda sektörüne yönelik: Çevresel numuneler ve gıdalarda yüksek çözünürlüklü kütle spektrometrisi (HRMS) ile toksik dioksin tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EN 8637",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-44-mo94bkn3",
    "title": "Belgelendirme için VOC (Uçucu Organik Bileşik) Emisyonu - Varyant 2",
    "description": "Belgelendirme sektörüne yönelik: Kapalı ortam materyallerinden salınan uçucu organik bileşiklerin (formaldehit vb.) Headspace-GC-MS ile tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "ASTM 5796",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-45-mo94bkn3",
    "title": "Çevre ve Su için Ağır Metal (Pb, Cd, Hg, As) Tayini - Varyant 3",
    "description": "Çevre ve Su sektörüne yönelik: ICP-MS cihazı ile eser element ve ağır metallerin ppm/ppb seviyesinde kantitatif tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EPA 4427",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-46-mo94bkn3",
    "title": "Ambalaj ve Plastik için Mikrobiyolojik Patojen Taraması - Varyant 3",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Toplam canlı sayımı ve spesifik patojenlerin (E. coli, S. aureus vb.) izolasyon ve identifikasyon işlemleri. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "USP 3564",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-47-mo94bkn3",
    "title": "Mikrobiyoloji için Koruyucu Etkinlik (Challenge) Testi - Varyant 3",
    "description": "Mikrobiyoloji sektörüne yönelik: Ürünün raf ömrü boyunca mikrobiyal kontaminasyona karşı korunma kapasitesinin değerlendirilmesi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EP 2648",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-48-mo94bkn3",
    "title": "Kozmetik için Hızlandırılmış Stabilite Testi - Varyant 3",
    "description": "Kozmetik sektörüne yönelik: Farklı sıcaklık ve bağıl nem koşullarında (%75 RH, 40°C) ürünün fizikokimyasal bozunma kinetiğinin hesaplanması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "ISO 5868",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-49-mo94bkn3",
    "title": "İlaç ve Hammadde için Organik Safsızlık Tayini - Varyant 3",
    "description": "İlaç ve Hammadde sektörüne yönelik: HPLC ve GC-MS kullanılarak üründeki eser miktardaki bozunma ürünlerinin ve organik safsızlıkların tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EN 3235",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-50-mo94bkn3",
    "title": "Tekstil ve Deri için Fitalat (Plastifiyan) Taraması - Varyant 3",
    "description": "Tekstil ve Deri sektörüne yönelik: Plastik ve ambalaj materyallerindeki yasaklı fitalat esterlerinin ekstraksiyonu ve GC-MS analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": true,
    "standards": "ASTM 7082",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-51-mo94bkn3",
    "title": "Takviye Edici Gıda için Azo Boyar Madde Testi - Varyant 3",
    "description": "Takviye Edici Gıda sektörüne yönelik: Tekstil ve deri ürünlerinde kanserojen primer aromatik aminlerin tespiti (REACH uyumlu). Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EPA 1731",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-52-mo94bkn3",
    "title": "Belgelendirme için Vitamin ve Mineral Profili - Varyant 3",
    "description": "Belgelendirme sektörüne yönelik: Takviye edici gıdalarda etiket beyanını doğrulamak üzere suda/yağda çözünen vitaminlerin LC-MS/MS ile analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "USP 5846",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-53-mo94bkn3",
    "title": "Çevre ve Su için Pestisit Kalıntı Analizi - Varyant 3",
    "description": "Çevre ve Su sektörüne yönelik: Gıda ve bitkisel ekstraktlarda 600+ pestisit etken maddesinin QuEChERS metodu ile çoklu kalıntı taraması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EP 8755",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-54-mo94bkn3",
    "title": "Ambalaj ve Plastik için Spesifik Migrasyon Testi - Varyant 3",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Gıda ile temas eden madde ve malzemelerden gıdaya geçen kimyasalların spesifik simulantlar kullanılarak tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "ISO 2776",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-55-mo94bkn3",
    "title": "Mikrobiyoloji için Nitrozamin Safsızlık Tayini - Varyant 3",
    "description": "Mikrobiyoloji sektörüne yönelik: İlaç ve kisisel bakim urunlerinde genotoksik NDMA ve türevlerinin ultra hassas LC-MS/MS tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EN 9778",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-56-mo94bkn3",
    "title": "Kozmetik için Yırtılma ve Kopma Mukavemeti - Varyant 3",
    "description": "Kozmetik sektörüne yönelik: Tekstil, plastik ve ambalaj malzemelerinin çekme ve kopma dirençlerinin dinamometrik cihazlarla ölçümü. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "ASTM 3537",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-57-mo94bkn3",
    "title": "İlaç ve Hammadde için RoHS Uygunluk Analizi - Varyant 3",
    "description": "İlaç ve Hammadde sektörüne yönelik: Elektrikli cihazlarda kurşun, cıva, kadmiyum ve alev geciktiricilerin (PBB, PBDE) tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EPA 8002",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-58-mo94bkn3",
    "title": "Tekstil ve Deri için Dioksin ve PCB Analizi - Varyant 3",
    "description": "Tekstil ve Deri sektörüne yönelik: Çevresel numuneler ve gıdalarda yüksek çözünürlüklü kütle spektrometrisi (HRMS) ile toksik dioksin tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "USP 2084",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-59-mo94bkn3",
    "title": "Takviye Edici Gıda için VOC (Uçucu Organik Bileşik) Emisyonu - Varyant 3",
    "description": "Takviye Edici Gıda sektörüne yönelik: Kapalı ortam materyallerinden salınan uçucu organik bileşiklerin (formaldehit vb.) Headspace-GC-MS ile tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EP 4330",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-60-mo94bkn3",
    "title": "Belgelendirme için Ağır Metal (Pb, Cd, Hg, As) Tayini - Varyant 4",
    "description": "Belgelendirme sektörüne yönelik: ICP-MS cihazı ile eser element ve ağır metallerin ppm/ppb seviyesinde kantitatif tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": true,
    "standards": "ISO 1196",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-61-mo94bkn3",
    "title": "Çevre ve Su için Mikrobiyolojik Patojen Taraması - Varyant 4",
    "description": "Çevre ve Su sektörüne yönelik: Toplam canlı sayımı ve spesifik patojenlerin (E. coli, S. aureus vb.) izolasyon ve identifikasyon işlemleri. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EN 4799",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-62-mo94bkn3",
    "title": "Ambalaj ve Plastik için Koruyucu Etkinlik (Challenge) Testi - Varyant 4",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Ürünün raf ömrü boyunca mikrobiyal kontaminasyona karşı korunma kapasitesinin değerlendirilmesi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "ASTM 1408",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-63-mo94bkn3",
    "title": "Mikrobiyoloji için Hızlandırılmış Stabilite Testi - Varyant 4",
    "description": "Mikrobiyoloji sektörüne yönelik: Farklı sıcaklık ve bağıl nem koşullarında (%75 RH, 40°C) ürünün fizikokimyasal bozunma kinetiğinin hesaplanması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EPA 4644",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-64-mo94bkn3",
    "title": "Kozmetik için Organik Safsızlık Tayini - Varyant 4",
    "description": "Kozmetik sektörüne yönelik: HPLC ve GC-MS kullanılarak üründeki eser miktardaki bozunma ürünlerinin ve organik safsızlıkların tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "USP 1805",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-65-mo94bkn3",
    "title": "İlaç ve Hammadde için Fitalat (Plastifiyan) Taraması - Varyant 4",
    "description": "İlaç ve Hammadde sektörüne yönelik: Plastik ve ambalaj materyallerindeki yasaklı fitalat esterlerinin ekstraksiyonu ve GC-MS analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EP 2655",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-66-mo94bkn3",
    "title": "Tekstil ve Deri için Azo Boyar Madde Testi - Varyant 4",
    "description": "Tekstil ve Deri sektörüne yönelik: Tekstil ve deri ürünlerinde kanserojen primer aromatik aminlerin tespiti (REACH uyumlu). Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "ISO 2512",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-67-mo94bkn3",
    "title": "Takviye Edici Gıda için Vitamin ve Mineral Profili - Varyant 4",
    "description": "Takviye Edici Gıda sektörüne yönelik: Takviye edici gıdalarda etiket beyanını doğrulamak üzere suda/yağda çözünen vitaminlerin LC-MS/MS ile analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EN 3920",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-68-mo94bkn3",
    "title": "Belgelendirme için Pestisit Kalıntı Analizi - Varyant 4",
    "description": "Belgelendirme sektörüne yönelik: Gıda ve bitkisel ekstraktlarda 600+ pestisit etken maddesinin QuEChERS metodu ile çoklu kalıntı taraması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "ASTM 2392",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-69-mo94bkn3",
    "title": "Çevre ve Su için Spesifik Migrasyon Testi - Varyant 4",
    "description": "Çevre ve Su sektörüne yönelik: Gıda ile temas eden madde ve malzemelerden gıdaya geçen kimyasalların spesifik simulantlar kullanılarak tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EPA 6289",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-70-mo94bkn3",
    "title": "Ambalaj ve Plastik için Nitrozamin Safsızlık Tayini - Varyant 4",
    "description": "Ambalaj ve Plastik sektörüne yönelik: İlaç ve kisisel bakim urunlerinde genotoksik NDMA ve türevlerinin ultra hassas LC-MS/MS tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": true,
    "standards": "USP 9560",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-71-mo94bkn3",
    "title": "Mikrobiyoloji için Yırtılma ve Kopma Mukavemeti - Varyant 4",
    "description": "Mikrobiyoloji sektörüne yönelik: Tekstil, plastik ve ambalaj malzemelerinin çekme ve kopma dirençlerinin dinamometrik cihazlarla ölçümü. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EP 7338",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-72-mo94bkn3",
    "title": "Kozmetik için RoHS Uygunluk Analizi - Varyant 4",
    "description": "Kozmetik sektörüne yönelik: Elektrikli cihazlarda kurşun, cıva, kadmiyum ve alev geciktiricilerin (PBB, PBDE) tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "ISO 3712",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-73-mo94bkn3",
    "title": "İlaç ve Hammadde için Dioksin ve PCB Analizi - Varyant 4",
    "description": "İlaç ve Hammadde sektörüne yönelik: Çevresel numuneler ve gıdalarda yüksek çözünürlüklü kütle spektrometrisi (HRMS) ile toksik dioksin tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EN 4915",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-74-mo94bkn3",
    "title": "Tekstil ve Deri için VOC (Uçucu Organik Bileşik) Emisyonu - Varyant 4",
    "description": "Tekstil ve Deri sektörüne yönelik: Kapalı ortam materyallerinden salınan uçucu organik bileşiklerin (formaldehit vb.) Headspace-GC-MS ile tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "ASTM 6908",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-75-mo94bkn3",
    "title": "Takviye Edici Gıda için Ağır Metal (Pb, Cd, Hg, As) Tayini - Varyant 5",
    "description": "Takviye Edici Gıda sektörüne yönelik: ICP-MS cihazı ile eser element ve ağır metallerin ppm/ppb seviyesinde kantitatif tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EPA 2856",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-76-mo94bkn3",
    "title": "Belgelendirme için Mikrobiyolojik Patojen Taraması - Varyant 5",
    "description": "Belgelendirme sektörüne yönelik: Toplam canlı sayımı ve spesifik patojenlerin (E. coli, S. aureus vb.) izolasyon ve identifikasyon işlemleri. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "USP 3814",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-77-mo94bkn3",
    "title": "Çevre ve Su için Koruyucu Etkinlik (Challenge) Testi - Varyant 5",
    "description": "Çevre ve Su sektörüne yönelik: Ürünün raf ömrü boyunca mikrobiyal kontaminasyona karşı korunma kapasitesinin değerlendirilmesi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EP 6800",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-78-mo94bkn3",
    "title": "Ambalaj ve Plastik için Hızlandırılmış Stabilite Testi - Varyant 5",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Farklı sıcaklık ve bağıl nem koşullarında (%75 RH, 40°C) ürünün fizikokimyasal bozunma kinetiğinin hesaplanması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "ISO 8237",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-79-mo94bkn3",
    "title": "Mikrobiyoloji için Organik Safsızlık Tayini - Varyant 5",
    "description": "Mikrobiyoloji sektörüne yönelik: HPLC ve GC-MS kullanılarak üründeki eser miktardaki bozunma ürünlerinin ve organik safsızlıkların tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EN 1094",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-80-mo94bkn4",
    "title": "Kozmetik için Fitalat (Plastifiyan) Taraması - Varyant 5",
    "description": "Kozmetik sektörüne yönelik: Plastik ve ambalaj materyallerindeki yasaklı fitalat esterlerinin ekstraksiyonu ve GC-MS analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": true,
    "standards": "ASTM 6780",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "2 Adet Orijinal Ambalaj"
  },
  {
    "id": "test-81-mo94bkn4",
    "title": "İlaç ve Hammadde için Azo Boyar Madde Testi - Varyant 5",
    "description": "İlaç ve Hammadde sektörüne yönelik: Tekstil ve deri ürünlerinde kanserojen primer aromatik aminlerin tespiti (REACH uyumlu). Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EPA 6561",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-82-mo94bkn4",
    "title": "Tekstil ve Deri için Vitamin ve Mineral Profili - Varyant 5",
    "description": "Tekstil ve Deri sektörüne yönelik: Takviye edici gıdalarda etiket beyanını doğrulamak üzere suda/yağda çözünen vitaminlerin LC-MS/MS ile analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "USP 2335",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-83-mo94bkn4",
    "title": "Takviye Edici Gıda için Pestisit Kalıntı Analizi - Varyant 5",
    "description": "Takviye Edici Gıda sektörüne yönelik: Gıda ve bitkisel ekstraktlarda 600+ pestisit etken maddesinin QuEChERS metodu ile çoklu kalıntı taraması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EP 3857",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-84-mo94bkn4",
    "title": "Belgelendirme için Spesifik Migrasyon Testi - Varyant 5",
    "description": "Belgelendirme sektörüne yönelik: Gıda ile temas eden madde ve malzemelerden gıdaya geçen kimyasalların spesifik simulantlar kullanılarak tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "ISO 1933",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-85-mo94bkn4",
    "title": "Çevre ve Su için Nitrozamin Safsızlık Tayini - Varyant 5",
    "description": "Çevre ve Su sektörüne yönelik: İlaç ve kisisel bakim urunlerinde genotoksik NDMA ve türevlerinin ultra hassas LC-MS/MS tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EN 9050",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  },
  {
    "id": "test-86-mo94bkn4",
    "title": "Ambalaj ve Plastik için Yırtılma ve Kopma Mukavemeti - Varyant 5",
    "description": "Ambalaj ve Plastik sektörüne yönelik: Tekstil, plastik ve ambalaj malzemelerinin çekme ve kopma dirençlerinin dinamometrik cihazlarla ölçümü. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "ASTM 8659",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-87-mo94bkn4",
    "title": "Mikrobiyoloji için RoHS Uygunluk Analizi - Varyant 5",
    "description": "Mikrobiyoloji sektörüne yönelik: Elektrikli cihazlarda kurşun, cıva, kadmiyum ve alev geciktiricilerin (PBB, PBDE) tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EPA 9564",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-88-mo94bkn4",
    "title": "Kozmetik için Dioksin ve PCB Analizi - Varyant 5",
    "description": "Kozmetik sektörüne yönelik: Çevresel numuneler ve gıdalarda yüksek çözünürlüklü kütle spektrometrisi (HRMS) ile toksik dioksin tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "USP 1139",
    "turnaroundTime": "21-28 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-89-mo94bkn4",
    "title": "İlaç ve Hammadde için VOC (Uçucu Organik Bileşik) Emisyonu - Varyant 5",
    "description": "İlaç ve Hammadde sektörüne yönelik: Kapalı ortam materyallerinden salınan uçucu organik bileşiklerin (formaldehit vb.) Headspace-GC-MS ile tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EP 9120",
    "turnaroundTime": "10-15 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-90-mo94bkn4",
    "title": "Tekstil ve Deri için Ağır Metal (Pb, Cd, Hg, As) Tayini - Varyant 6",
    "description": "Tekstil ve Deri sektörüne yönelik: ICP-MS cihazı ile eser element ve ağır metallerin ppm/ppb seviyesinde kantitatif tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": true,
    "standards": "ISO 2909",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 10 ml"
  },
  {
    "id": "test-91-mo94bkn4",
    "title": "Takviye Edici Gıda için Mikrobiyolojik Patojen Taraması - Varyant 6",
    "description": "Takviye Edici Gıda sektörüne yönelik: Toplam canlı sayımı ve spesifik patojenlerin (E. coli, S. aureus vb.) izolasyon ve identifikasyon işlemleri. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EN 4188",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-92-mo94bkn4",
    "title": "Belgelendirme için Koruyucu Etkinlik (Challenge) Testi - Varyant 6",
    "description": "Belgelendirme sektörüne yönelik: Ürünün raf ömrü boyunca mikrobiyal kontaminasyona karşı korunma kapasitesinin değerlendirilmesi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": false,
    "standards": "ASTM 3568",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-93-mo94bkn4",
    "title": "Çevre ve Su için Hızlandırılmış Stabilite Testi - Varyant 6",
    "description": "Çevre ve Su sektörüne yönelik: Farklı sıcaklık ve bağıl nem koşullarında (%75 RH, 40°C) ürünün fizikokimyasal bozunma kinetiğinin hesaplanması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Çevre ve Su",
    "popular": false,
    "standards": "EPA 7031",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 1x1 Metre Kumaş"
  },
  {
    "id": "test-94-mo94bkn4",
    "title": "Ambalaj ve Plastik için Organik Safsızlık Tayini - Varyant 6",
    "description": "Ambalaj ve Plastik sektörüne yönelik: HPLC ve GC-MS kullanılarak üründeki eser miktardaki bozunma ürünlerinin ve organik safsızlıkların tespiti. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Ambalaj ve Plastik",
    "popular": false,
    "standards": "USP 9492",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-95-mo94bkn4",
    "title": "Mikrobiyoloji için Fitalat (Plastifiyan) Taraması - Varyant 6",
    "description": "Mikrobiyoloji sektörüne yönelik: Plastik ve ambalaj materyallerindeki yasaklı fitalat esterlerinin ekstraksiyonu ve GC-MS analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Mikrobiyoloji",
    "popular": false,
    "standards": "EP 6030",
    "turnaroundTime": "2-3 İş Günü",
    "sampleRequirement": "Ürüne Göre Değerlendirilir"
  },
  {
    "id": "test-96-mo94bkn4",
    "title": "Kozmetik için Azo Boyar Madde Testi - Varyant 6",
    "description": "Kozmetik sektörüne yönelik: Tekstil ve deri ürünlerinde kanserojen primer aromatik aminlerin tespiti (REACH uyumlu). Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Kozmetik",
    "popular": false,
    "standards": "ISO 9946",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-97-mo94bkn4",
    "title": "İlaç ve Hammadde için Vitamin ve Mineral Profili - Varyant 6",
    "description": "İlaç ve Hammadde sektörüne yönelik: Takviye edici gıdalarda etiket beyanını doğrulamak üzere suda/yağda çözünen vitaminlerin LC-MS/MS ile analizi. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "İlaç ve Hammadde",
    "popular": false,
    "standards": "EN 9233",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-98-mo94bkn4",
    "title": "Tekstil ve Deri için Pestisit Kalıntı Analizi - Varyant 6",
    "description": "Tekstil ve Deri sektörüne yönelik: Gıda ve bitkisel ekstraktlarda 600+ pestisit etken maddesinin QuEChERS metodu ile çoklu kalıntı taraması. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Tekstil ve Deri",
    "popular": false,
    "standards": "ASTM 5392",
    "turnaroundTime": "7-10 İş Günü",
    "sampleRequirement": "Minimum 500 ml"
  },
  {
    "id": "test-99-mo94bkn4",
    "title": "Takviye Edici Gıda için Spesifik Migrasyon Testi - Varyant 6",
    "description": "Takviye Edici Gıda sektörüne yönelik: Gıda ile temas eden madde ve malzemelerden gıdaya geçen kimyasalların spesifik simulantlar kullanılarak tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Takviye Edici Gıda",
    "popular": false,
    "standards": "EPA 4182",
    "turnaroundTime": "5-7 İş Günü",
    "sampleRequirement": "Minimum 100 gr"
  },
  {
    "id": "test-100-mo94bkn4",
    "title": "Belgelendirme için Nitrozamin Safsızlık Tayini - Varyant 6",
    "description": "Belgelendirme sektörüne yönelik: İlaç ve kisisel bakim urunlerinde genotoksik NDMA ve türevlerinin ultra hassas LC-MS/MS tayini. Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.",
    "category": "Belgelendirme",
    "popular": true,
    "standards": "USP 7594",
    "turnaroundTime": "3-5 İş Günü",
    "sampleRequirement": "Minimum 50 gr"
  }
];
export const blogs: BlogPost[] = [
  {
    "id": "kozmetik-r-nlerde-challenge-testi-neden-zorunludur",
    "title": "Kozmetik Ürünlerde Challenge Testi Neden Zorunludur?",
    "date": "2026-03-11",
    "author": "Uzman Analist Ekibi",
    "category": "Kozmetik",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "iso-17025-akreditasyonu-laboratuvar-se-iminde-neden-nemlidir",
    "title": "ISO 17025 Akreditasyonu Laboratuvar Seçiminde Neden Önemlidir?",
    "date": "2026-01-24",
    "author": "Uzman Analist Ekibi",
    "category": "İlaç ve Hammadde",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "tekstil-sekt-r-nde-reach-reg-lasyonu-ve-azo-boyar-maddeler",
    "title": "Tekstil Sektöründe REACH Regülasyonu ve Azo Boyar Maddeler",
    "date": "2026-01-15",
    "author": "Uzman Analist Ekibi",
    "category": "Tekstil ve Deri",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "g-da-takviyelerinde-a-r-metal-ve-pestisit-tehlikesi",
    "title": "Gıda Takviyelerinde Ağır Metal ve Pestisit Tehlikesi",
    "date": "2026-02-19",
    "author": "Uzman Analist Ekibi",
    "category": "Takviye Edici Gıda",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "ambalajlarda-spesifik-migrasyon-g-da-g-venli-inin-g-r-nmez-tehdidi",
    "title": "Ambalajlarda Spesifik Migrasyon: Gıda Güvenliğinin Görünmez Tehdidi",
    "date": "2026-04-13",
    "author": "Uzman Analist Ekibi",
    "category": "Belgelendirme",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "i-la-sekt-r-nde-nitrozamin-krizi-ve-yeni-analitik-yakla-mlar",
    "title": "İlaç Sektöründe Nitrozamin Krizi ve Yeni Analitik Yaklaşımlar",
    "date": "2026-04-11",
    "author": "Uzman Analist Ekibi",
    "category": "Çevre ve Su",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "rohs-direktifi-elektronik-r-n-i-hracat-nda-bilinmesi-gerekenler",
    "title": "RoHS Direktifi: Elektronik Ürün İhracatında Bilinmesi Gerekenler",
    "date": "2026-01-10",
    "author": "Uzman Analist Ekibi",
    "category": "Ambalaj ve Plastik",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "su-analizlerinde-legionella-pn-mofila-riski",
    "title": "Su Analizlerinde Legionella Pnömofila Riski",
    "date": "2026-02-21",
    "author": "Uzman Analist Ekibi",
    "category": "Mikrobiyoloji",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "kozmetikte-koruyucu-i-ermeyen-preservative-free-r-n-i-ddialar-n-n-kan-tlanmas",
    "title": "Kozmetikte Koruyucu İçermeyen (Preservative-Free) Ürün İddialarının Kanıtlanması",
    "date": "2026-03-04",
    "author": "Uzman Analist Ekibi",
    "category": "Kozmetik",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "laboratuvarlarda-dijital-raporlama-lims-sisteminin-m-teriye-faydalar",
    "title": "Laboratuvarlarda Dijital Raporlama (LIMS) Sisteminin Müşteriye Faydaları",
    "date": "2026-02-11",
    "author": "Uzman Analist Ekibi",
    "category": "İlaç ve Hammadde",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "tareks-denetimleri-i-thalatta-kar-la-lan-en-s-k-hatalar",
    "title": "TAREKS Denetimleri: İthalatta Karşılaşılan En Sık Hatalar",
    "date": "2026-03-29",
    "author": "Uzman Analist Ekibi",
    "category": "Tekstil ve Deri",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "helal-kozmetik-belgelendirmesinde-laboratuvar-testlerinin-rol",
    "title": "Helal Kozmetik Belgelendirmesinde Laboratuvar Testlerinin Rolü",
    "date": "2026-02-06",
    "author": "Uzman Analist Ekibi",
    "category": "Takviye Edici Gıda",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "vegan-etiketli-r-nlerde-hayvansal-dna-taramas",
    "title": "Vegan Etiketli Ürünlerde Hayvansal DNA Taraması",
    "date": "2026-04-01",
    "author": "Uzman Analist Ekibi",
    "category": "Belgelendirme",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "mikroplastik-analizleri-evremizdeki-gizli-tehlike",
    "title": "Mikroplastik Analizleri: Çevremizdeki Gizli Tehlike",
    "date": "2026-04-09",
    "author": "Uzman Analist Ekibi",
    "category": "Çevre ve Su",
    "excerpt": "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
    "content": "Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. \n      \nBu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.\n      \nLaboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz."
  },
  {
    "id": "h-zland-r-lm-stabilite-vs-uzun-s-reli-stabilite-hangisini-se-meliyim",
    "title": "Hızlandırılmış Stabilite vs Uzun Süreli Stabilite: Hangisini Seçmeliyim?",
    "date": "2026-03-31",
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
