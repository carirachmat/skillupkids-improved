import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Link } from 'react-router-dom'
import { 
  Calendar, 
  User, 
  ArrowRight, 
  BookOpen, 
  Lightbulb, 
  Heart,
  Star,
  TrendingUp
} from 'lucide-react'

// Import blog illustrations
import blogTipsParenting from '../assets/blog_tips_parenting.png'
import blogPendidikanStem from '../assets/blog_pendidikan_stem.png'
import blogKreativitas from '../assets/blog_kreativitas.png'
import blogSuccessStory from '../assets/blog_success_story.png'
import blogCoding from '../assets/blog_coding.png'
import blogRutinBelajar from '../assets/blog_rutin_belajar.png'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips Memilih Kelas Online yang Tepat untuk Anak Anda",
      excerpt: "Panduan lengkap untuk orang tua dalam memilih platform pembelajaran online yang sesuai dengan kebutuhan dan minat anak.",
      author: "Dr. Sarah Wijaya",
      date: "15 Juni 2025",
      category: "Tips Parenting",
      readTime: "5 menit",
      image: blogTipsParenting,
      featured: true
    },
    {
      id: 2,
      title: "Mengapa STEM Education Penting untuk Masa Depan Anak?",
      excerpt: "Memahami pentingnya pendidikan STEM dalam mempersiapkan anak menghadapi tantangan teknologi di masa depan.",
      author: "Prof. Ahmad Fauzi",
      date: "12 Juni 2025",
      category: "Pendidikan",
      readTime: "7 menit",
      image: blogPendidikanStem,
      featured: false
    },
    {
      id: 3,
      title: "Cara Menumbuhkan Kreativitas Anak di Era Digital",
      excerpt: "Strategi praktis untuk mengembangkan kreativitas anak sambil memanfaatkan teknologi secara positif.",
      author: "Ibu Dewi Sartika",
      date: "10 Juni 2025",
      category: "Kreativitas",
      readTime: "6 menit",
      image: blogKreativitas,
      featured: false
    },
    {
      id: 4,
      title: "Kisah Sukses: Dari Pemalu Menjadi Confident Speaker",
      excerpt: "Cerita inspiratif tentang Andi, siswa SkillUpKids yang berhasil mengatasi rasa malu dan menjadi pembicara yang percaya diri.",
      author: "Tim SkillUpKids",
      date: "8 Juni 2025",
      category: "Success Story",
      readTime: "4 menit",
      image: blogSuccessStory,
      featured: false
    },
    {
      id: 5,
      title: "Manfaat Coding untuk Perkembangan Kognitif Anak",
      excerpt: "Penelitian terbaru menunjukkan bagaimana pembelajaran coding dapat meningkatkan kemampuan berpikir logis dan problem solving anak.",
      author: "Dr. Rizki Pratama",
      date: "5 Juni 2025",
      category: "Teknologi",
      readTime: "8 menit",
      image: blogCoding,
      featured: false
    },
    {
      id: 6,
      title: "Membangun Rutina Belajar yang Menyenangkan di Rumah",
      excerpt: "Tips praktis untuk menciptakan lingkungan belajar yang kondusif dan menyenangkan bagi anak di rumah.",
      author: "Ibu Lina Kusuma",
      date: "3 Juni 2025",
      category: "Tips Parenting",
      readTime: "5 menit",
      image: blogRutinBelajar,
      featured: false
    }
  ]

  const categories = [
    { name: "Semua", count: 25, active: true },
    { name: "Tips Parenting", count: 8, active: false },
    { name: "Pendidikan", count: 6, active: false },
    { name: "Teknologi", count: 5, active: false },
    { name: "Kreativitas", count: 4, active: false },
    { name: "Success Story", count: 2, active: false }
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Blog SkillUpKids
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Temukan tips, panduan, dan inspirasi terbaru seputar pendidikan anak, 
            parenting, dan perkembangan teknologi pembelajaran.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`${category.active ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Badge className="bg-yellow-500 text-white mb-4">
                <Star className="w-4 h-4 mr-1" />
                Artikel Pilihan
              </Badge>
              <h2 className="text-2xl font-bold text-gray-900">Artikel Terbaru & Terpopuler</h2>
            </div>
            
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <span>{featuredPost.readTime} baca</span>
                  </div>
                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button className="bg-purple-600 hover:bg-purple-700 w-fit">
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Artikel Lainnya</h2>
            <div className="flex items-center text-sm text-gray-600">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span>Diurutkan berdasarkan tanggal terbaru</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <User className="w-3 h-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="w-3 h-3 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <span>{post.readTime} baca</span>
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Baca Artikel
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Muat Artikel Lainnya
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Jangan Lewatkan Artikel Terbaru!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Berlangganan newsletter kami dan dapatkan tips parenting, update program terbaru, 
            dan artikel inspiratif langsung di inbox Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda..."
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 px-6 py-3">
              Berlangganan
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

