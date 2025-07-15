import React, { useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { 
  Users, 
  Target, 
  Heart, 
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

export default function AboutUs() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Cinta pada Anak",
      description: "Kami percaya setiap anak memiliki potensi luar biasa yang perlu dipupuk dengan kasih sayang dan perhatian penuh."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Fokus pada Kualitas",
      description: "Setiap program dan aktivitas dirancang dengan standar tinggi untuk memberikan pengalaman belajar terbaik."
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Kemitraan yang Kuat",
      description: "Kami bekerja sama dengan orang tua dan mitra terpercaya untuk menciptakan ekosistem pembelajaran yang holistik."
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Inovasi Berkelanjutan",
      description: "Terus berinovasi dalam metode pembelajaran untuk mengikuti perkembangan zaman dan kebutuhan anak."
    }
  ]

  const achievements = [
    { number: "40,000+", label: "Anak Terdaftar", description: "Telah bergabung dalam berbagai program kami" },
    { number: "150+", label: "Program Aktif", description: "Beragam aktivitas edukatif dan menyenangkan" },
    { number: "90+", label: "Mitra Terpercaya", description: "Lembaga dan pengajar berkualitas" },
    { number: "98%", label: "Kepuasan Orang Tua", description: "Rating positif dari para orang tua" }
  ]

  const team = [
    {
      name: "Dr. Sarah Wijaya",
      role: "Founder & CEO",
      description: "Ahli pendidikan anak dengan pengalaman 15+ tahun dalam pengembangan kurikulum inovatif.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Ahmad Rizki, M.Pd",
      role: "Head of Education",
      description: "Spesialis psikologi perkembangan anak dan desain pembelajaran interaktif.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Lisa Chen",
      role: "Technology Director",
      description: "Expert dalam EdTech dengan fokus pada platform pembelajaran yang aman dan engaging.",
      image: "/api/placeholder/150/150"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Tentang SkillUpKids
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Membangun masa depan cerah anak Indonesia melalui pendidikan berkualitas, 
              inovatif, dan menyenangkan sejak tahun 2020.
            </p>
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-sm sm:text-base lg:text-lg px-4 py-2 sm:px-6 sm:py-2 text-center max-w-full">
                Platform Edukasi Anak Terpercaya #1 di Indonesia
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-purple-600">Misi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Menyediakan platform pembelajaran yang aman, inovatif, dan menyenangkan 
                  untuk membantu setiap anak Indonesia mengembangkan potensi terbaiknya. 
                  Kami berkomitmen menciptakan pengalaman belajar yang holistik, 
                  menggabungkan teknologi modern dengan nilai-nilai karakter positif.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-600">Visi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Menjadi platform edukasi anak terdepan di Asia Tenggara yang dikenal 
                  karena kualitas, inovasi, dan dampak positifnya terhadap perkembangan 
                  generasi masa depan. Kami ingin setiap anak memiliki akses terhadap 
                  pendidikan berkualitas yang mempersiapkan mereka untuk masa depan yang cerah.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perjalanan Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dari ide sederhana hingga menjadi platform terpercaya ribuan keluarga Indonesia
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold">2020</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Awal Mula</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    SkillUpKids lahir dari keprihatinan terhadap terbatasnya akses pendidikan berkualitas 
                    untuk anak-anak Indonesia, terutama di masa pandemi. Tim founder yang terdiri dari 
                    para ahli pendidikan dan teknologi memutuskan untuk menciptakan solusi inovatif.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">2021</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Pertumbuhan Pesat</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Dalam tahun pertama, kami berhasil menarik 5,000+ keluarga dan menjalin 
                    kemitraan dengan 20+ lembaga pendidikan terpercaya. Program-program inovatif 
                    kami mulai mendapat pengakuan dari komunitas pendidikan Indonesia.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-6xl">📈</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">2025</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Masa Kini</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Hari ini, SkillUpKids telah menjadi rumah bagi 40,000+ anak Indonesia dengan 
                    150+ program aktif dan 90+ mitra terpercaya. Kami terus berinovasi untuk 
                    memberikan pengalaman belajar terbaik bagi generasi masa depan.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-6xl">🏆</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Prinsip-prinsip yang memandu setiap langkah perjalanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pencapaian Kami</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Angka-angka yang membanggakan dari perjalanan kami bersama keluarga Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-yellow-300">
                  {achievement.number}
                </div>
                <div className="text-xl font-semibold mb-2">{achievement.label}</div>
                <p className="text-sm opacity-80">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Para ahli berpengalaman yang berdedikasi untuk masa depan anak Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all text-center">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="text-4xl">👨‍🏫</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ingin Tahu Lebih Lanjut?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Kami selalu terbuka untuk berdiskusi tentang pendidikan anak dan 
              bagaimana SkillUpKids dapat membantu mengembangkan potensi si kecil.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Mail className="mr-2 h-5 w-5" />
                Hubungi Kami
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Konsultasi Gratis
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-600">
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                skillupkidscontact@gmail.com
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                0857-2663-1291
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                Yogyakarta, Indonesia
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

