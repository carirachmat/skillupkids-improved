import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  Clock,
  Share2,
  BookOpen,
  Heart,
  MessageCircle,
  Eye,
  ChevronRight
} from 'lucide-react'

// Import blog illustrations
import blogTipsParenting from '../assets/blog_tips_parenting.png'
import blogPendidikanStem from '../assets/blog_pendidikan_stem.png'
import blogKreativitas from '../assets/blog_kreativitas.png'
import blogSuccessStory from '../assets/blog_success_story.png'
import blogCoding from '../assets/blog_coding.png'
import blogRutinBelajar from '../assets/blog_rutin_belajar.png'

export default function BlogArticle() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [relatedArticles, setRelatedArticles] = useState([])

  // Sample article data - in a real app, this would come from an API
  const articles = {
    '1': {
      id: 1,
      title: "5 Tips Memilih Kelas Online yang Tepat untuk Anak Anda",
      excerpt: "Panduan lengkap untuk orang tua dalam memilih platform pembelajaran online yang sesuai dengan kebutuhan dan minat anak.",
      content: `
        <p>Dalam era digital saat ini, pembelajaran online telah menjadi bagian integral dari pendidikan anak-anak. Sebagai orang tua, memilih platform pembelajaran online yang tepat untuk anak Anda adalah keputusan penting yang akan mempengaruhi perkembangan akademis dan personal mereka.</p>

        <h2>1. Pertimbangkan Usia dan Tingkat Perkembangan Anak</h2>
        <p>Setiap anak memiliki tahap perkembangan yang berbeda. Pastikan platform yang Anda pilih sesuai dengan usia dan kemampuan kognitif anak Anda. Platform yang baik akan menyediakan konten yang disesuaikan dengan berbagai kelompok usia, mulai dari balita hingga remaja.</p>

        <h2>2. Evaluasi Kualitas Konten dan Kurikulum</h2>
        <p>Periksa apakah konten pembelajaran disusun oleh ahli pendidikan yang berpengalaman. Kurikulum yang baik harus terstruktur, progresif, dan selaras dengan standar pendidikan nasional. Pastikan juga materi pembelajaran diperbarui secara berkala untuk mengikuti perkembangan zaman.</p>

        <h2>3. Perhatikan Metode Pembelajaran yang Digunakan</h2>
        <p>Anak-anak belajar dengan cara yang berbeda-beda. Beberapa lebih visual, sementara yang lain lebih auditori atau kinestetik. Pilih platform yang menawarkan berbagai metode pembelajaran seperti video interaktif, permainan edukatif, dan aktivitas hands-on.</p>

        <h2>4. Pastikan Keamanan dan Privasi Anak</h2>
        <p>Keamanan online adalah prioritas utama. Pastikan platform memiliki sistem keamanan yang kuat, kontrol orang tua yang memadai, dan kebijakan privasi yang jelas. Anak-anak harus dapat belajar dalam lingkungan yang aman dan terlindungi.</p>

        <h2>5. Pertimbangkan Fleksibilitas dan Dukungan</h2>
        <p>Pilih platform yang menawarkan fleksibilitas dalam jadwal belajar dan menyediakan dukungan teknis yang responsif. Kemampuan untuk mengakses materi kapan saja dan di mana saja sangat penting untuk mengakomodasi rutinitas keluarga yang sibuk.</p>

        <h2>Kesimpulan</h2>
        <p>Memilih platform pembelajaran online yang tepat membutuhkan penelitian dan pertimbangan yang matang. Dengan mengikuti tips di atas, Anda dapat memastikan bahwa anak Anda mendapatkan pengalaman belajar online yang berkualitas, aman, dan menyenangkan.</p>
      `,
      author: "Dr. Sarah Wijaya",
      date: "15 Juni 2025",
      category: "Tips Parenting",
      readTime: "5 menit",
      image: blogTipsParenting,
      views: 1250,
      likes: 89,
      comments: 23
    },
    '2': {
      id: 2,
      title: "Mengapa STEM Education Penting untuk Masa Depan Anak?",
      excerpt: "Memahami pentingnya pendidikan STEM dalam mempersiapkan anak menghadapi tantangan teknologi di masa depan.",
      content: `
        <p>STEM (Science, Technology, Engineering, and Mathematics) education telah menjadi fokus utama dalam dunia pendidikan modern. Pendekatan pembelajaran ini tidak hanya mengajarkan konsep-konsep akademis, tetapi juga mempersiapkan anak-anak untuk menghadapi tantangan masa depan yang semakin kompleks.</p>

        <h2>Apa itu STEM Education?</h2>
        <p>STEM education adalah pendekatan pembelajaran interdisipliner yang mengintegrasikan sains, teknologi, teknik, dan matematika dalam konteks yang relevan dengan kehidupan nyata. Pendekatan ini menekankan pada pembelajaran berbasis proyek, pemecahan masalah, dan berpikir kritis.</p>

        <h2>Mengapa STEM Penting?</h2>
        <p>Di era digital ini, hampir semua aspek kehidupan melibatkan teknologi. Anak-anak yang memiliki fondasi STEM yang kuat akan lebih siap menghadapi dunia kerja masa depan yang didominasi oleh teknologi dan inovasi.</p>

        <h2>Manfaat STEM untuk Perkembangan Anak</h2>
        <h3>1. Mengembangkan Kemampuan Berpikir Kritis</h3>
        <p>STEM mengajarkan anak untuk menganalisis masalah, mengevaluasi solusi, dan membuat keputusan berdasarkan data dan bukti.</p>

        <h3>2. Meningkatkan Kreativitas dan Inovasi</h3>
        <p>Melalui proyek-proyek STEM, anak-anak belajar untuk berpikir out-of-the-box dan mengembangkan solusi kreatif untuk berbagai masalah.</p>

        <h3>3. Mempersiapkan Karir Masa Depan</h3>
        <p>Banyak pekerjaan masa depan akan membutuhkan keterampilan STEM. Anak-anak yang terpapar STEM sejak dini akan memiliki keunggulan kompetitif.</p>

        <h2>Cara Menerapkan STEM di Rumah</h2>
        <p>Orang tua dapat mendukung pembelajaran STEM anak dengan menyediakan mainan edukatif, melakukan eksperimen sederhana, dan mendorong anak untuk bertanya dan mengeksplorasi dunia di sekitar mereka.</p>
      `,
      author: "Prof. Ahmad Fauzi",
      date: "12 Juni 2025",
      category: "Pendidikan",
      readTime: "7 menit",
      image: blogPendidikanStem,
      views: 2100,
      likes: 156,
      comments: 45
    }
    // Add more articles as needed
  }

  const relatedArticlesList = [
    {
      id: 3,
      title: "Cara Menumbuhkan Kreativitas Anak di Era Digital",
      category: "Kreativitas",
      readTime: "6 menit",
      image: blogKreativitas
    },
    {
      id: 4,
      title: "Kisah Sukses: Dari Pemalu Menjadi Confident Speaker",
      category: "Success Story",
      readTime: "4 menit",
      image: blogSuccessStory
    },
    {
      id: 5,
      title: "Manfaat Coding untuk Perkembangan Kognitif Anak",
      category: "Teknologi",
      readTime: "8 menit",
      image: blogCoding
    }
  ]

  useEffect(() => {
    const currentArticle = articles[id]
    if (currentArticle) {
      setArticle(currentArticle)
      setRelatedArticles(relatedArticlesList.filter(a => a.id !== parseInt(id)))
    }
  }, [id])

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel tidak ditemukan</h2>
          <Link to="/blog">
            <Button>Kembali ke Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Blog
          </Link>
          
          <div className="mb-4">
            <Badge variant="secondary" className="mb-2">
              {article.category}
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {article.excerpt}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{article.readTime} baca</span>
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-2" />
              <span>{article.views} views</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              {article.likes}
            </Button>
            <Button variant="outline" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              {article.comments}
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Bagikan
            </Button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-t-lg overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Author Bio */}
            <Card className="mt-8 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {article.author}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Ahli pendidikan anak dengan pengalaman lebih dari 15 tahun dalam mengembangkan 
                      kurikulum pembelajaran yang inovatif dan efektif untuk anak-anak Indonesia.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Articles */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Artikel Terkait
                </h3>
                
                <div className="space-y-4">
                  {relatedArticles.map((relatedArticle) => (
                    <Link 
                      key={relatedArticle.id}
                      to={`/blog/${relatedArticle.id}`}
                      className="block group"
                    >
                      <div className="flex space-x-3">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={relatedArticle.image} 
                            alt={relatedArticle.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Badge variant="secondary" className="text-xs mb-1">
                            {relatedArticle.category}
                          </Badge>
                          <h4 className="font-medium text-sm text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2 mb-1">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {relatedArticle.readTime} baca
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link to="/blog" className="block mt-6">
                  <Button variant="outline" className="w-full">
                    Lihat Semua Artikel
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="mt-6 border-0 shadow-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="text-center">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="font-bold text-lg mb-2">
                    Jangan Lewatkan Update Terbaru!
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    Berlangganan newsletter kami untuk mendapatkan artikel terbaru langsung di inbox Anda.
                  </p>
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 w-full">
                    Berlangganan Sekarang
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

