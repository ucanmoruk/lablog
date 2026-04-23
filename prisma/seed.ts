import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const categories = ["Kozmetik", "İlaç ve Hammadde", "Tekstil ve Deri", "Takviye Edici Gıda", "Belgelendirme", "Çevre ve Su", "Ambalaj ve Plastik", "Mikrobiyoloji"];
const stdPrefixes = ["ISO", "EN", "ASTM", "EPA", "USP", "EP"];
const tAts = ["2-3 İş Günü", "3-5 İş Günü", "5-7 İş Günü", "7-10 İş Günü", "10-15 İş Günü", "21-28 İş Günü"];
const sampleReqs = ["Minimum 50 gr", "Minimum 100 gr", "2 Adet Orijinal Ambalaj", "Minimum 10 ml", "Minimum 500 ml", "Minimum 1x1 Metre Kumaş", "Ürüne Göre Değerlendirilir"];

const bases = [
  { name: "Ağır Metal (Pb, Cd, Hg, As) Tayini", desc: "ICP-MS cihazı ile eser element ve ağır metallerin ppm/ppb seviyesinde kantitatif tespiti." },
  { name: "Mikrobiyolojik Patojen Taraması", desc: "Toplam canlı sayımı ve spesifik patojenlerin (E. coli, S. aureus vb.) izolasyon ve identifikasyon işlemleri." },
  { name: "Koruyucu Etkinlik (Challenge) Testi", desc: "Ürünün raf ömrü boyunca mikrobiyal kontaminasyona karşı korunma kapasitesinin değerlendirilmesi." },
  { name: "Hızlandırılmış Stabilite Testi", desc: "Farklı sıcaklık ve bağıl nem koşullarında (%75 RH, 40°C) ürünün fizikokimyasal bozunma kinetiğinin hesaplanması." },
  { name: "Organik Safsızlık Tayini", desc: "HPLC ve GC-MS kullanılarak üründeki eser miktardaki bozunma ürünlerinin ve organik safsızlıkların tespiti." },
  { name: "Fitalat (Plastifiyan) Taraması", desc: "Plastik ve ambalaj materyallerindeki yasaklı fitalat esterlerinin ekstraksiyonu ve GC-MS analizi." },
  { name: "Azo Boyar Madde Testi", desc: "Tekstil ve deri ürünlerinde kanserojen primer aromatik aminlerin tespiti (REACH uyumlu)." },
  { name: "Vitamin ve Mineral Profili", desc: "Takviye edici gıdalarda etiket beyanını doğrulamak üzere suda/yağda çözünen vitaminlerin LC-MS/MS ile analizi." },
  { name: "Pestisit Kalıntı Analizi", desc: "Gıda ve bitkisel ekstraktlarda 600+ pestisit etken maddesinin QuEChERS metodu ile çoklu kalıntı taraması." },
  { name: "Spesifik Migrasyon Testi", desc: "Gıda ile temas eden madde ve malzemelerden gıdaya geçen kimyasalların spesifik simulantlar kullanılarak tayini." },
  { name: "Nitrozamin Safsızlık Tayini", desc: "İlaç ve kisisel bakim urunlerinde genotoksik NDMA ve türevlerinin ultra hassas LC-MS/MS tayini." },
  { name: "Yırtılma ve Kopma Mukavemeti", desc: "Tekstil, plastik ve ambalaj malzemelerinin çekme ve kopma dirençlerinin dinamometrik cihazlarla ölçümü." },
  { name: "RoHS Uygunluk Analizi", desc: "Elektrikli cihazlarda kurşun, cıva, kadmiyum ve alev geciktiricilerin (PBB, PBDE) tayini." },
  { name: "Dioksin ve PCB Analizi", desc: "Çevresel numuneler ve gıdalarda yüksek çözünürlüklü kütle spektrometrisi (HRMS) ile toksik dioksin tayini." },
  { name: "VOC (Uçucu Organik Bileşik) Emisyonu", desc: "Kapalı ortam materyallerinden salınan uçucu organik bileşiklerin (formaldehit vb.) Headspace-GC-MS ile tespiti." }
];

const blogTitles = [
  "Kozmetik Ürünlerde Challenge Testi Neden Zorunludur?",
  "ISO 17025 Akreditasyonu Laboratuvar Seçiminde Neden Önemlidir?",
  "Tekstil Sektöründe REACH Regülasyonu ve Azo Boyar Maddeler",
  "Gıda Takviyelerinde Ağır Metal ve Pestisit Tehlikesi",
  "Ambalajlarda Spesifik Migrasyon: Gıda Güvenliğinin Görünmez Tehdidi",
  "İlaç Sektöründe Nitrozamin Krizi ve Yeni Analitik Yaklaşımlar",
  "RoHS Direktifi: Elektronik Ürün İhracatında Bilinmesi Gerekenler",
  "Su Analizlerinde Legionella Pnömofila Riski",
  "Kozmetikte Koruyucu İçermeyen (Preservative-Free) Ürün İddialarının Kanıtlanması",
  "Laboratuvarlarda Dijital Raporlama (LIMS) Sisteminin Müşteriye Faydaları",
  "TAREKS Denetimleri: İthalatta Karşılaşılan En Sık Hatalar",
  "Helal Kozmetik Belgelendirmesinde Laboratuvar Testlerinin Rolü",
  "Vegan Etiketli Ürünlerde Hayvansal DNA Taraması",
  "Mikroplastik Analizleri: Çevremizdeki Gizli Tehlike",
  "Hızlandırılmış Stabilite vs Uzun Süreli Stabilite: Hangisini Seçmeliyim?"
];

async function main() {
  console.log('Seeding data...');

  // 1. Clear existing data
  await prisma.analysis.deleteMany();
  await prisma.blogPost.deleteMany();

  // 2. Add Analyses (100)
  for (let i = 1; i <= 100; i++) {
    const base = bases[i % bases.length];
    const category = categories[i % categories.length];
    const std = `${stdPrefixes[i % stdPrefixes.length]} ${Math.floor(Math.random() * 9000) + 1000}`;
    const tat = tAts[Math.floor(Math.random() * tAts.length)];
    const req = sampleReqs[Math.floor(Math.random() * sampleReqs.length)];
    const titleVariant = i <= bases.length ? base.name : `${category} için ${base.name} - Varyant ${Math.floor(i/bases.length)}`;

    await prisma.analysis.create({
      data: {
        title: titleVariant,
        description: `${category} sektörüne yönelik: ${base.desc} Bu test, uluslararası kalite güvence programları ve yasal regülasyonlara uyum sağlamak amacıyla yüksek hassasiyetli analitik enstrümanlar ile gerçekleştirilir.`,
        category: category,
        popular: i % 10 === 0,
        standards: std,
        turnaroundTime: tat,
        sampleRequirement: req
      }
    });
  }

  // 3. Add Blog Posts (15)
  for (let i = 0; i < blogTitles.length; i++) {
    const title = blogTitles[i];
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    await prisma.blogPost.create({
      data: {
        slug: slug,
        title: title,
        date: new Date(Date.now() - Math.random() * 10000000000),
        author: "Uzman Analist Ekibi",
        category: categories[i % categories.length] || "Genel Laboratuvar",
        excerpt: "Bu makalede, sektördeki en son regülasyon güncellemeleri, uluslararası yasal gereklilikler ve laboratuvarımızda bu süreçlerin nasıl kusursuzca yönetildiği hakkında detaylı teknik bilgiler bulacaksınız.",
        content: `Yasal mevzuatların her geçen gün sıkılaştığı global pazarda, firmaların yasal yaptırımlarla karşılaşmamak ve tüketici sağlığını korumak adına test süreçlerine büyük önem vermesi gerekmektedir. 
      
Bu makalede inceleyeceğimiz konu, sadece bir yasal zorunluluk değil, aynı zamanda markanızın güvenilirliğini piyasada tescilleyen kritik bir kalite kontrol basamağıdır. Akredite laboratuvar analizleri, ürünlerinizin dünya çapında serbest dolaşımını sağlar.
      
Laboratuvarımız, en güncel cihaz parkuru (LC-MS/MS, GC-MS, ICP-MS) ve ISO 17025 standartlarında işleyen kalite sistemiyle size bu süreçte kesintisiz destek sunar. Detaylı bilgi ve danışmanlık için teknik satış temsilcilerimizle iletişime geçebilirsiniz.`
      }
    });
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
