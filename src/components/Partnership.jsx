import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Handshake, 
  Users, 
  TrendingUp, 
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  Building,
  GraduationCap,
  Heart,
  Globe,
  Target,
  Zap
} from 'lucide-react'

export default function Partnership() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    organizationType: '',
    partnershipType: '',
    description: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Partnership application:', formData)
    alert('Terima kasih! Aplikasi kemitraan Anda telah dikirim. Tim kami akan menghubungi Anda dalam 2-3 hari kerja.')
  }

  const partnershipTypes = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "Lembaga Pendidikan",
      description: "Sekolah, universitas, dan institusi pendidikan yang ingin mengintegrasikan program SkillUpKids",
      benefits: ["Kurikulum terintegrasi", "Pelatihan guru", "Platform pembelajaran", "Sertifikasi resmi"],
      color: "blue"
    },
    {
      icon: <Building className="w-8 h-8 text-green-600" />,
      title: "Pengajar & Instruktur",
      description: "Profesional berpengalaman yang ingin bergabung sebagai pengajar di platform kami",
      benefits: ["Fleksibilitas waktu", "Kompensasi menarik", "Pelatihan berkelanjutan", "Komunitas pengajar"],
      color: "green"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Organisasi Non-Profit",
      description: "Yayasan dan NGO yang fokus pada pendidikan dan pengembangan anak",
      benefits: ["Program CSR", "Akses gratis", "Kolaborasi program", "Dampak sosial"],
      color: "red"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Perusahaan & Korporasi",
      description: "Perusahaan yang ingin mendukung pendidikan anak melalui program CSR",
      benefits: ["Branding exposure", "Employee engagement", "Tax benefit", "Social impact"],
      color: "purple"
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "Pertumbuhan Bersama",
      description: "Berkembang bersama ekosistem pendidikan yang terus tumbuh"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Akses ke 40,000+ Keluarga",
      description: "Jangkauan luas ke komunitas orang tua dan anak di seluruh Indonesia"
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-600" />,
      title: "Sertifikasi & Pengakuan",
      description: "Program sertifikasi resmi dan pengakuan dari industri"
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "Teknologi Terdepan",
      description: "Akses ke platform teknologi pembelajaran terbaru"
    }
  ]

  const currentPartners = [
    { name: "Universitas Indonesia", type: "Pendidikan Tinggi", logo: "🎓" },
    { name: "Sekolah Alam Indonesia", type: "Sekolah Dasar", logo: "🌱" },
    { name: "Yayasan Pendidikan Anak", type: "Non-Profit", logo: "❤️" },
    { name: "PT. Teknologi Edukasi", type: "Korporasi", logo: "🏢" },
    { name: "Komunitas Guru Digital", type: "Komunitas", logo: "👥" },
    { name: "Lembaga Kursus Bahasa", type: "Lembaga Kursus", logo: "🗣️" }
  ]

  const requirements = [
    "Memiliki legalitas usaha/organisasi yang jelas",
    "Pengalaman minimal 2 tahun di bidang pendidikan/anak",
    "Komitmen terhadap kualitas dan keamanan anak",
    "Kemampuan untuk mengikuti standar dan prosedur SkillUpKids",
    "Visi yang sejalan dengan misi pendidikan SkillUpKids"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Handshake className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Bergabunglah Sebagai Mitra SkillUpKids
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Bersama-sama kita ciptakan masa depan pendidikan Indonesia yang lebih baik. 
              Jadilah bagian dari ekosistem pembelajaran yang mengubah hidup ribuan anak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Daftar Sebagai Mitra
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-white border-white hover:bg-white hover:text-purple-600">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Jenis Kemitraan yang Tersedia
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami membuka kesempatan kemitraan untuk berbagai jenis organisasi dan individu 
              yang memiliki visi sama dalam mengembangkan pendidikan anak Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-${type.color}-100 rounded-full`}>
                      {type.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 mt-4">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefit Kemitraan:</h4>
                    {type.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6" variant="outline">
                    Pelajari Lebih Lanjut
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mengapa Bermitra dengan SkillUpKids?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bergabung dengan SkillUpKids berarti menjadi bagian dari revolusi pendidikan 
              yang memberikan dampak nyata bagi masa depan anak-anak Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mitra Terpercaya Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bergabunglah dengan 90+ mitra terpercaya yang telah bersama kami 
              menciptakan dampak positif dalam dunia pendidikan anak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPartners.map((partner, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{partner.logo}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{partner.name}</h3>
                  <Badge variant="secondary">{partner.type}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Dan masih banyak mitra lainnya...</p>
            <Button variant="outline">
              Lihat Semua Mitra
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Persyaratan Kemitraan
            </h2>
            <p className="text-lg text-gray-600">
              Untuk memastikan kualitas dan keamanan terbaik bagi anak-anak, 
              kami memiliki beberapa persyaratan dasar untuk calon mitra.
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Catatan Penting:</h4>
                <p className="text-blue-800 text-sm">
                  Semua calon mitra akan melalui proses evaluasi dan verifikasi yang ketat. 
                  Kami juga menyediakan program onboarding dan pelatihan untuk memastikan 
                  standar kualitas yang konsisten.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Daftar Sebagai Mitra
            </h2>
            <p className="text-lg text-gray-600">
              Isi formulir di bawah ini untuk memulai proses aplikasi kemitraan. 
              Tim kami akan menghubungi Anda dalam 2-3 hari kerja.
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Organisasi/Lembaga *
                    </label>
                    <Input
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama organisasi"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Kontak Person *
                    </label>
                    <Input
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="08xxxxxxxxxx"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Organisasi *
                    </label>
                    <select
                      name="organizationType"
                      value={formData.organizationType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    >
                      <option value="">Pilih jenis organisasi</option>
                      <option value="sekolah">Sekolah</option>
                      <option value="universitas">Universitas</option>
                      <option value="lembaga-kursus">Lembaga Kursus</option>
                      <option value="yayasan">Yayasan/NGO</option>
                      <option value="perusahaan">Perusahaan</option>
                      <option value="individu">Pengajar Individu</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Kemitraan yang Diminati *
                    </label>
                    <select
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    >
                      <option value="">Pilih jenis kemitraan</option>
                      <option value="content-provider">Content Provider</option>
                      <option value="pengajar">Pengajar/Instruktur</option>
                      <option value="teknologi">Teknologi Partner</option>
                      <option value="distribusi">Distribusi Partner</option>
                      <option value="csr">CSR Program</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deskripsi Organisasi & Proposal Kemitraan *
                  </label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Ceritakan tentang organisasi Anda dan bagaimana Anda ingin bermitra dengan SkillUpKids..."
                    rows={6}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" required className="rounded" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    Saya setuju dengan{' '}
                    <a href="#" className="text-purple-600 hover:underline">
                      syarat dan ketentuan
                    </a>{' '}
                    serta{' '}
                    <a href="#" className="text-purple-600 hover:underline">
                      kebijakan privasi
                    </a>{' '}
                    SkillUpKids
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                  Kirim Aplikasi Kemitraan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Butuh Informasi Lebih Lanjut?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Tim Partnership kami siap membantu menjawab pertanyaan dan 
            mendiskusikan peluang kemitraan yang sesuai dengan kebutuhan Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Email Partnership Team
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
              Schedule Meeting
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-80">
            <p>partnership@skillupkids.id | +62 857-2663-1291</p>
          </div>
        </div>
      </section>
    </div>
  )
}

