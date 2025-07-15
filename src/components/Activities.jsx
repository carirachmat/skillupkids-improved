import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  ChevronDown,
  Heart,
  BookOpen,
  Code,
  Palette,
  Music,
  ChefHat,
  Leaf,
  Gamepad2,
  Calculator,
  Dumbbell,
  Globe,
  Zap
} from 'lucide-react'

// Import activity illustrations
import activitySystemAdmin from '../assets/activity_system_admin.png'
import activityMengaji from '../assets/activity_mengaji.png'
import activityLego from '../assets/activity_lego.png'
import activityKesehatanGigi from '../assets/activity_kesehatan_gigi.png'
import activityRobotika from '../assets/activity_robotika.png'
import activityMelukis from '../assets/activity_melukis.png'
import activityMusik from '../assets/activity_musik.png'
import activityMemasak from '../assets/activity_memasak.png'
import activityBahasaInggris from '../assets/activity_bahasa_inggris.png'
import activityMatematika from '../assets/activity_matematika.png'
import activityOlahraga from '../assets/activity_olahraga.png'
import activityAlam from '../assets/activity_alam.png'
import activityPermainanEdukatif from '../assets/activity_permainan_edukatif.png'

export default function Activities() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all')
  const [selectedPrice, setSelectedPrice] = useState('all')

  const categories = [
    { id: 'all', name: 'Semua Kategori', icon: <Zap className="w-4 h-4" /> },
    { id: 'teknologi', name: 'Teknologi', icon: <Code className="w-4 h-4" /> },
    { id: 'seni', name: 'Seni & Kreativitas', icon: <Palette className="w-4 h-4" /> },
    { id: 'bahasa', name: 'Bahasa', icon: <Globe className="w-4 h-4" /> },
    { id: 'matematika', name: 'Matematika', icon: <Calculator className="w-4 h-4" /> },
    { id: 'keagamaan', name: 'Keagamaan', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'kesehatan', name: 'Kesehatan', icon: <Heart className="w-4 h-4" /> },
    { id: 'olahraga', name: 'Olahraga', icon: <Dumbbell className="w-4 h-4" /> },
    { id: 'musik', name: 'Musik', icon: <Music className="w-4 h-4" /> },
    { id: 'memasak', name: 'Memasak', icon: <ChefHat className="w-4 h-4" /> },
    { id: 'alam', name: 'Alam & Lingkungan', icon: <Leaf className="w-4 h-4" /> },
    { id: 'game', name: 'Game Edukatif', icon: <Gamepad2 className="w-4 h-4" /> }
  ]

  const ageGroups = [
    { id: 'all', name: 'Semua Usia' },
    { id: '3-5', name: '3-5 tahun (PAUD)' },
    { id: '6-8', name: '6-8 tahun (SD Kelas Rendah)' },
    { id: '9-12', name: '9-12 tahun (SD Kelas Tinggi)' },
    { id: '13-15', name: '13-15 tahun (SMP)' }
  ]

  const priceFilters = [
    { id: 'all', name: 'Semua Harga' },
    { id: 'free', name: 'Gratis' },
    { id: 'under-100k', name: 'Di bawah Rp100.000' },
    { id: '100k-300k', name: 'Rp100.000 - Rp300.000' },
    { id: 'above-300k', name: 'Di atas Rp300.000' }
  ]

  const activities = [
    {
      id: 1,
      title: "Kelas Junior System Administrator",
      category: "teknologi",
      description: "Belajar dasar-dasar administrasi sistem komputer dengan cara yang menyenangkan dan mudah dipahami anak-anak.",
      age: "10-15 tahun",
      duration: "90 menit",
      price: 99000,
      priceText: "Rp99.000",
      rating: 4.8,
      students: 245,
      instructor: "Pak Budi Santoso",
      badge: "Populer",
      level: "Pemula",
      features: ["Sertifikat", "Materi Digital", "Live Session"],
      image: activitySystemAdmin
    },
    {
      id: 2,
      title: "Kelas Mengaji Anak-Anak",
      category: "keagamaan",
      description: "Pembelajaran Al-Quran dengan metode yang menyenangkan dan sesuai dengan perkembangan anak.",
      age: "3-15 tahun",
      duration: "60 menit",
      price: 100000,
      priceText: "Rp100.000",
      rating: 4.9,
      students: 567,
      instructor: "Ustadz Ahmad Fauzi",
      badge: null,
      level: "Semua Level",
      features: ["Sertifikat", "Buku Panduan", "Evaluasi Berkala"],
      image: activityMengaji
    },
    {
      id: 3,
      title: "Lego Brick 2 Dimensi",
      category: "teknologi",
      description: "Mengembangkan kreativitas dan kemampuan problem solving melalui permainan Lego yang terstruktur.",
      age: "5-12 tahun",
      duration: "300 menit",
      price: 350000,
      priceText: "Rp350.000",
      rating: 4.7,
      students: 189,
      instructor: "Ibu Sarah Wijaya",
      badge: null,
      level: "Pemula",
      features: ["Kit Lego", "Panduan Proyek", "Showcase Online"],
      image: activityLego
    },
    {
      id: 4,
      title: "Edukasi Kesehatan Gigi",
      category: "kesehatan",
      description: "Program edukasi kesehatan gigi yang interaktif untuk membangun kebiasaan hidup sehat sejak dini.",
      age: "4-12 tahun",
      duration: "60 menit",
      price: 0,
      priceText: "Gratis",
      rating: 4.6,
      students: 1234,
      instructor: "drg. Lisa Permata",
      badge: "Gratis",
      level: "Semua Level",
      features: ["Sertifikat", "Kit Sikat Gigi", "Panduan Orang Tua"],
      image: activityKesehatanGigi
    },
    {
      id: 5,
      title: "Kelas Robotika Dasar",
      category: "teknologi",
      description: "Pengenalan dunia robotika untuk anak-anak dengan hands-on experience membangun robot sederhana.",
      age: "8-14 tahun",
      duration: "120 menit",
      price: 450000,
      priceText: "Rp450.000",
      rating: 4.9,
      students: 28,
      instructor: "Pak Rudi",
      badge: "Populer",
      level: "Pemula",
      features: ["Kit Robot", "Software", "Kompetisi Mini"],
      image: activityRobotika
    },
    {
      id: 6,
      title: "Kelas Melukis Kreatif",
      category: "seni",
      description: "Mengembangkan kreativitas anak melalui seni melukis dengan berbagai teknik dan media.",
      age: "5-12 tahun",
      duration: "90 menit",
      price: 150000,
      priceText: "Rp150.000",
      rating: 4.8,
      students: 67,
      instructor: "Ibu Maya",
      badge: null,
      level: "Pemula",
      features: ["Peralatan Lukis", "Canvas", "Galeri Online"],
      image: activityMelukis
    },
    {
      id: 7,
      title: "Kelas Musik Anak",
      category: "musik",
      description: "Pembelajaran musik dasar dengan berbagai alat musik untuk mengembangkan bakat musikal anak.",
      age: "4-12 tahun",
      duration: "75 menit",
      price: 200000,
      priceText: "Rp200.000",
      rating: 4.7,
      students: 54,
      instructor: "Pak Andi",
      badge: null,
      level: "Pemula",
      features: ["Alat Musik", "Notasi Musik", "Rekaman"],
      image: activityMusik
    },
    {
      id: 8,
      title: "Kelas Memasak Cilik",
      category: "memasak",
      description: "Belajar memasak makanan sehat dan lezat dengan resep yang aman dan mudah untuk anak-anak.",
      age: "6-14 tahun",
      duration: "120 menit",
      price: 180000,
      priceText: "Rp180.000",
      rating: 4.8,
      students: 41,
      instructor: "Chef Nina",
      badge: null,
      level: "Pemula",
      features: ["Bahan Masakan", "Resep Digital", "Sertifikat Chef"],
      image: activityMemasak
    },
    {
      id: 9,
      title: "Kelas Bahasa Inggris Interaktif",
      category: "bahasa",
      description: "Pembelajaran bahasa Inggris yang fun dan interaktif dengan games dan aktivitas menarik.",
      age: "5-12 tahun",
      duration: "60 menit",
      price: 120000,
      priceText: "Rp120.000",
      rating: 4.9,
      students: 78,
      instructor: "Miss Jenny",
      badge: null,
      level: "Pemula",
      features: ["Materi Interaktif", "Speaking Practice", "Progress Report"],
      image: activityBahasaInggris
    },
    {
      id: 10,
      title: "Kelas Matematika Interaktif",
      category: "matematika",
      description: "Belajar matematika dengan cara yang menyenangkan menggunakan permainan dan visualisasi.",
      age: "6-12 tahun",
      duration: "75 menit",
      price: 110000,
      priceText: "Rp110.000",
      rating: 4.6,
      students: 92,
      instructor: "Pak Joko",
      badge: null,
      level: "Pemula",
      features: ["Games Matematika", "Worksheet", "Progress Tracking"],
      image: activityMatematika
    },
    {
      id: 11,
      title: "Kelas Olahraga & Kebugaran",
      category: "olahraga",
      description: "Program olahraga yang dirancang khusus untuk anak-anak dengan fokus pada kesehatan dan kebugaran.",
      age: "5-15 tahun",
      duration: "90 menit",
      price: 80000,
      priceText: "Rp80.000",
      rating: 4.7,
      students: 63,
      instructor: "Coach Dani",
      badge: null,
      level: "Pemula",
      features: ["Peralatan Olahraga", "Program Latihan", "Health Tracking"],
      image: activityOlahraga
    },
    {
      id: 12,
      title: "Kelas Eksplorasi Alam",
      category: "alam",
      description: "Mengajak anak-anak untuk mengenal dan mencintai alam melalui kegiatan eksplorasi outdoor.",
      age: "6-14 tahun",
      duration: "180 menit",
      price: 65000,
      priceText: "Rp65.000",
      rating: 4.5,
      students: 189,
      instructor: "Pak Tani Sukses",
      badge: null,
      level: "Pemula",
      features: ["Sertifikat", "Bibit Tanaman", "Pot Mini"],
      image: activityAlam
    },
    {
      id: 13,
      title: "Kelas Permainan Edukatif",
      category: "game",
      description: "Mengasah kemampuan logika dan problem solving melalui berbagai jenis permainan edukatif yang menyenangkan.",
      age: "4-10 tahun",
      duration: "60 menit",
      price: 0,
      priceText: "Gratis",
      rating: 4.3,
      students: 678,
      instructor: "Kak Puzzle Master",
      badge: "Gratis",
      level: "Semua Level",
      features: ["Sertifikat", "Games Digital", "Leaderboard"],
      image: activityPermainanEdukatif
    }
  ]

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || activity.category === selectedCategory
    
    const matchesAge = selectedAgeGroup === 'all' || 
                      (selectedAgeGroup === '3-5' && activity.age.includes('3') || activity.age.includes('4') || activity.age.includes('5')) ||
                      (selectedAgeGroup === '6-8' && activity.age.includes('6') || activity.age.includes('7') || activity.age.includes('8')) ||
                      (selectedAgeGroup === '9-12' && activity.age.includes('9') || activity.age.includes('10') || activity.age.includes('11') || activity.age.includes('12')) ||
                      (selectedAgeGroup === '13-15' && activity.age.includes('13') || activity.age.includes('14') || activity.age.includes('15'))
    
    const matchesPrice = selectedPrice === 'all' ||
                        (selectedPrice === 'free' && activity.price === 0) ||
                        (selectedPrice === 'under-100k' && activity.price > 0 && activity.price < 100000) ||
                        (selectedPrice === '100k-300k' && activity.price >= 100000 && activity.price <= 300000) ||
                        (selectedPrice === 'above-300k' && activity.price > 300000)
    
    return matchesSearch && matchesCategory && matchesAge && matchesPrice
  })

  const getCategoryIcon = (category) => {
    const categoryMap = {
      'teknologi': <Code className="text-purple-600" />,
      'seni': <Palette className="text-pink-600" />,
      'bahasa': <Globe className="text-blue-600" />,
      'matematika': <Calculator className="text-green-600" />,
      'keagamaan': <BookOpen className="text-emerald-600" />,
      'kesehatan': <Heart className="text-red-600" />,
      'olahraga': <Dumbbell className="text-orange-600" />,
      'musik': <Music className="text-indigo-600" />,
      'memasak': <ChefHat className="text-yellow-600" />,
      'alam': <Leaf className="text-green-500" />,
      'game': <Gamepad2 className="text-purple-500" />
    }
    return categoryMap[category] || <Zap className="text-gray-600" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Daftar Kegiatan SkillUpKids
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Temukan berbagai aktivitas edukatif yang menarik dan sesuai dengan minat serta usia anak Anda. 
            Dari teknologi hingga seni, semua dirancang untuk mengembangkan potensi si kecil.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Cari kegiatan yang menarik..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 text-base bg-white/10 border-white/20 text-white placeholder-white/70"
            />
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Age Group Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kelompok Usia</label>
              <select
                value={selectedAgeGroup}
                onChange={(e) => setSelectedAgeGroup(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {ageGroups.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rentang Harga</label>
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {priceFilters.map((filter) => (
                  <option key={filter.id} value={filter.id}>
                    {filter.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredActivities.length} Kegiatan Ditemukan
            </h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Filter className="w-4 h-4" />
              <span>Urutkan berdasarkan popularitas</span>
            </div>
          </div>

          {filteredActivities.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tidak ada kegiatan yang ditemukan
                </h3>
                <p className="text-gray-600 mb-4">
                  Coba ubah filter pencarian atau kata kunci untuk menemukan kegiatan yang sesuai.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                    setSelectedAgeGroup('all')
                    setSelectedPrice('all')
                  }}
                >
                  Reset Filter
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredActivities.map((activity) => (
                <Card key={activity.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={activity.image} 
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {activity.badge && (
                      <Badge className={`absolute top-2 right-2 ${
                        activity.badge === 'Gratis' ? 'bg-green-500' : 'bg-orange-500'
                      }`}>
                        {activity.badge}
                      </Badge>
                    )}
                    <Badge variant="secondary" className="absolute top-2 left-2">
                      {activity.level}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-2">
                        {categories.find(cat => cat.id === activity.category)?.name}
                      </Badge>
                      <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {activity.description}
                      </p>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {activity.age}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {activity.duration}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-500" />
                        {activity.rating} ({activity.students} siswa)
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Pengajar: {activity.instructor}</p>
                      <div className="flex flex-wrap gap-1">
                        {activity.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className={`font-bold text-lg ${
                        activity.price === 0 ? 'text-green-600' : 'text-purple-600'
                      }`}>
                        {activity.priceText}
                      </span>
                      <Link to="/daftar-kelas">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          Daftar Sekarang
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tidak Menemukan Kegiatan yang Sesuai?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Hubungi tim kami untuk mendapatkan rekomendasi kegiatan yang tepat untuk anak Anda, 
            atau ajukan permintaan kegiatan khusus sesuai minat si kecil.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-purple-800">
              Konsultasi Gratis
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-purple-600">
              Request Kegiatan Khusus
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

