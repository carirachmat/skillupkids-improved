import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle,
  Users,
  CreditCard,
  Shield,
  BookOpen,
  Settings,
  MessageCircle
} from 'lucide-react'

export default function FAQ() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openItems, setOpenItems] = useState({})

  const categories = [
    { id: 'all', name: 'Semua', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'general', name: 'Umum', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'account', name: 'Akun & Pendaftaran', icon: <Users className="w-4 h-4" /> },
    { id: 'payment', name: 'Pembayaran', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'safety', name: 'Keamanan', icon: <Shield className="w-4 h-4" /> },
    { id: 'technical', name: 'Teknis', icon: <Settings className="w-4 h-4" /> }
  ]

  const faqData = [
    {
      id: 1,
      category: 'general',
      question: 'Apa itu SkillUpKids dan bagaimana cara kerjanya?',
      answer: 'SkillUpKids adalah platform edukasi online yang menyediakan berbagai aktivitas pembelajaran interaktif untuk anak-anak usia 3-15 tahun. Platform kami menghubungkan anak-anak dengan pengajar berpengalaman melalui kelas virtual, workshop, dan aktivitas edukatif yang dirancang khusus untuk mengembangkan keterampilan akademik, kreativitas, dan karakter positif. Orang tua dapat memilih program yang sesuai dengan minat dan usia anak, memantau perkembangan melalui dashboard khusus, dan berinteraksi langsung dengan pengajar.'
    },
    {
      id: 2,
      category: 'general',
      question: 'Untuk usia berapa saja program SkillUpKids dirancang?',
      answer: 'Program kami dirancang untuk anak-anak usia 3-15 tahun dengan pembagian kategori yang disesuaikan dengan tahap perkembangan: Usia 3-5 tahun (PAUD), 6-8 tahun (SD Kelas Rendah), 9-12 tahun (SD Kelas Tinggi), dan 13-15 tahun (SMP). Setiap program memiliki metode pembelajaran yang disesuaikan dengan karakteristik dan kemampuan kognitif anak pada rentang usia tersebut.'
    },
    {
      id: 3,
      category: 'general',
      question: 'Apa saja jenis kegiatan yang tersedia di SkillUpKids?',
      answer: 'Kami menawarkan lebih dari 150 jenis kegiatan yang terbagi dalam berbagai kategori: Teknologi (coding, robotika, digital literacy), Seni & Kreativitas (melukis, musik, kerajinan), Bahasa (Inggris, Mandarin, Arab), Sains & Matematika (eksperimen, logika), Olahraga & Kesehatan (yoga anak, nutrisi), Karakter & Spiritual (mengaji, etika), dan Life Skills (memasak, berkebun). Semua kegiatan dirancang untuk learning by doing dengan pendekatan yang menyenangkan.'
    },
    {
      id: 4,
      category: 'account',
      question: 'Bagaimana cara mendaftar di SkillUpKids?',
      answer: 'Pendaftaran sangat mudah! Klik tombol "Daftar" di halaman utama, isi formulir dengan data orang tua dan anak, verifikasi email, dan akun Anda siap digunakan. Anda akan mendapat akses ke dashboard orang tua untuk memilih program, melihat jadwal, dan memantau perkembangan anak. Pendaftaran akun gratis dan Anda bisa langsung menjelajahi program yang tersedia.'
    },
    {
      id: 5,
      category: 'account',
      question: 'Apakah saya bisa mendaftarkan lebih dari satu anak?',
      answer: 'Ya, tentu saja! Satu akun orang tua dapat mengelola profil beberapa anak. Setiap anak akan memiliki profil terpisah dengan riwayat pembelajaran, progress tracking, dan rekomendasi program yang disesuaikan dengan usia dan minatnya. Anda dapat dengan mudah beralih antar profil anak melalui dashboard orang tua.'
    },
    {
      id: 6,
      category: 'account',
      question: 'Bagaimana cara mengubah informasi profil anak saya?',
      answer: 'Masuk ke dashboard orang tua, pilih profil anak yang ingin diubah, klik "Edit Profil". Anda dapat mengubah informasi seperti nama, usia, minat, foto profil, dan preferensi pembelajaran. Perubahan akan tersimpan otomatis dan membantu kami memberikan rekomendasi program yang lebih tepat untuk anak Anda.'
    },
    {
      id: 7,
      category: 'payment',
      question: 'Bagaimana sistem pembayaran di SkillUpKids?',
      answer: 'Kami menerima berbagai metode pembayaran: transfer bank (BCA, Mandiri, BRI, BNI), e-wallet (GoPay, OVO, DANA), kartu kredit/debit, dan virtual account. Pembayaran dapat dilakukan per kelas atau paket berlangganan bulanan/tahunan. Semua transaksi menggunakan sistem enkripsi SSL untuk keamanan maksimal. Anda akan menerima konfirmasi pembayaran dan invoice melalui email.'
    },
    {
      id: 8,
      category: 'payment',
      question: 'Apakah ada program gratis yang bisa dicoba?',
      answer: 'Ya! Kami menyediakan beberapa program gratis seperti Edukasi Kesehatan Gigi, webinar parenting, dan trial class untuk program premium. Anggota baru juga mendapat akses gratis 7 hari untuk mencoba berbagai fitur platform. Selain itu, kami rutin mengadakan event dan workshop gratis yang diumumkan melalui newsletter dan media sosial.'
    },
    {
      id: 9,
      category: 'payment',
      question: 'Bagaimana kebijakan refund jika tidak puas?',
      answer: 'Kami memiliki kebijakan refund 100% dalam 7 hari pertama jika Anda tidak puas dengan layanan kami (berlaku untuk pembelian pertama). Untuk kasus khusus seperti masalah teknis atau ketidaksesuaian program, tim customer service akan mengevaluasi dan memberikan solusi terbaik, termasuk penggantian kelas atau refund parsial.'
    },
    {
      id: 10,
      category: 'safety',
      question: 'Bagaimana SkillUpKids memastikan keamanan anak saat online?',
      answer: 'Keamanan anak adalah prioritas utama kami. Semua pengajar telah melalui background check dan sertifikasi. Platform menggunakan sistem monitoring real-time, fitur recording untuk transparansi, dan chat yang dimoderasi. Orang tua dapat memantau aktivitas anak secara langsung dan menerima laporan setelah setiap sesi. Kami juga memiliki protokol ketat untuk melaporkan dan menangani insiden yang tidak pantas.'
    },
    {
      id: 11,
      category: 'safety',
      question: 'Apakah data pribadi anak aman di platform ini?',
      answer: 'Absolutely! Kami menerapkan standar keamanan data internasional (ISO 27001) dan mematuhi regulasi perlindungan data anak. Informasi pribadi dienkripsi, akses dibatasi hanya untuk staff yang berwenang, dan kami tidak pernah membagikan data ke pihak ketiga tanpa persetujuan eksplisit. Server kami berlokasi di Indonesia dengan backup di multiple data center untuk keamanan maksimal.'
    },
    {
      id: 12,
      category: 'safety',
      question: 'Bagaimana cara melaporkan konten atau perilaku yang tidak pantas?',
      answer: 'Kami memiliki sistem pelaporan 24/7. Klik tombol "Report" yang tersedia di setiap sesi, atau hubungi hotline darurat kami. Tim safety akan merespons dalam maksimal 2 jam dan mengambil tindakan yang diperlukan. Semua laporan ditangani dengan serius dan kerahasiaan pelapor dijamin. Kami juga memberikan update status penanganan kepada pelapor.'
    },
    {
      id: 13,
      category: 'technical',
      question: 'Apa saja persyaratan teknis untuk menggunakan SkillUpKids?',
      answer: 'Persyaratan minimal: koneksi internet stabil minimal 5 Mbps, device (laptop/tablet/smartphone) dengan kamera dan mikrofon, browser Chrome/Firefox/Safari versi terbaru atau aplikasi mobile SkillUpKids. Untuk pengalaman optimal, kami merekomendasikan koneksi 10 Mbps, headset untuk audio yang jernih, dan ruangan yang tenang dengan pencahayaan yang cukup.'
    },
    {
      id: 14,
      category: 'technical',
      question: 'Bagaimana jika mengalami masalah teknis saat kelas berlangsung?',
      answer: 'Tim technical support kami standby selama jam operasional kelas. Anda dapat menggunakan fitur "Help" dalam platform untuk chat langsung dengan teknisi, atau hubungi hotline support. Jika masalah tidak dapat diselesaikan dan menyebabkan anak kehilangan kelas, kami akan memberikan sesi pengganti gratis atau refund sesuai kebijakan.'
    },
    {
      id: 15,
      category: 'technical',
      question: 'Apakah bisa menggunakan SkillUpKids di multiple device?',
      answer: 'Ya, satu akun dapat digunakan di maksimal 3 device secara bersamaan. Anda dapat login di laptop untuk monitoring, tablet untuk anak mengikuti kelas, dan smartphone untuk notifikasi. Semua data akan tersinkronisasi secara real-time. Namun, untuk keamanan, kami membatasi satu anak hanya dapat mengikuti satu kelas aktif pada satu waktu.'
    }
  ]

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Temukan jawaban untuk pertanyaan yang paling sering ditanyakan tentang SkillUpKids. 
            Jika tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi kami!
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Cari pertanyaan atau kata kunci..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 text-base bg-white/10 border-white/20 text-white placeholder-white/70"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 ${
                  activeCategory === category.id 
                    ? 'bg-purple-600 hover:bg-purple-700' 
                    : 'hover:bg-purple-50'
                }`}
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tidak ada hasil yang ditemukan
                </h3>
                <p className="text-gray-600 mb-4">
                  Coba ubah kata kunci pencarian atau pilih kategori yang berbeda.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('')
                    setActiveCategory('all')
                  }}
                >
                  Reset Pencarian
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <Card key={faq.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {categories.find(cat => cat.id === faq.category)?.name}
                          </Badge>
                        </div>
                        <CardTitle className="text-left text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </CardTitle>
                      </div>
                      <div className="flex-shrink-0">
                        {openItems[faq.id] ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  {openItems[faq.id] && (
                    <CardContent className="pt-0">
                      <div className="border-t pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <MessageCircle className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Tim customer service kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi 
              kami melalui berbagai channel yang tersedia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <MessageCircle className="mr-2 h-5 w-5" />
                Live Chat
              </Button>
              <Button variant="outline" size="lg">
                Email Support
              </Button>
              <Button variant="outline" size="lg">
                WhatsApp
              </Button>
            </div>
            
            <div className="mt-6 text-sm text-gray-500">
              <p>Rata-rata waktu respons: &lt; 2 jam</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Link Berguna Lainnya
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Panduan Orang Tua</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Pelajari cara memaksimalkan pengalaman belajar anak di SkillUpKids
                </p>
                <Button variant="outline" size="sm">
                  Baca Panduan
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Bantuan Teknis</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Solusi untuk masalah teknis dan troubleshooting
                </p>
                <Button variant="outline" size="sm">
                  Lihat Solusi
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Kebijakan Privasi</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Informasi tentang bagaimana kami melindungi data Anda
                </p>
                <Button variant="outline" size="sm">
                  Baca Kebijakan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

