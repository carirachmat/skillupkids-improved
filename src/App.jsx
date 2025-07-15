import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import {
  Users,
  Activity,
  Handshake,
  Search,
  Star,
  Shield,
  Heart,
  BookOpen,
  Palette,
  Code,
  Music,
  Leaf,
  ChevronRight,
  ChevronLeft,
  Menu,
  X
} from 'lucide-react'
import skillupkidsLogo from './assets/skillupkids_logo_new.png'
import heroImage from './assets/hero_image_new.png'
import testimonial1 from './assets/testimonial1.png'
import testimonial2 from './assets/testimonial2.png'
import testimonial3 from './assets/testimonial3.jpg'
import activitySystemAdmin from './assets/activity_system_admin.png'
import activityMengaji from './assets/activity_mengaji.png'
import activityLego from './assets/activity_lego.png'
import activityKesehatanGigi from './assets/activity_kesehatan_gigi.png'
import adindaPhoto from './assets/adinda_putri_sari.png'
import roboticsProject from './assets/robotics_project.png'
import './App.css'

import AboutUs from './components/AboutUs.jsx'
import FAQ from './components/FAQ.jsx'
import Partnership from './components/Partnership.jsx'
import Activities from './components/Activities.jsx'
import Blog from './components/Blog.jsx'
import BlogArticle from './components/BlogArticle.jsx'
import Registration from './components/Registration.jsx'
import ClassRegistration from './components/ClassRegistration.jsx'

function Home() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const featuredActivities = [
    {
      id: 1,
      title: "Kelas Junior System Administrator",
      category: "Teknologi",
      age: "10-15 tahun",
      duration: "90 menit",
      price: "Rp99.000",
      badge: "Populer",
      image: activitySystemAdmin
    },
    {
      id: 2,
      title: "Kelas Mengaji Anak-Anak",
      category: "Keagamaan",
      age: "3-15 tahun",
      duration: "60 menit",
      price: "Rp100.000",
      badge: null,
      image: activityMengaji
    },
    {
      id: 3,
      title: "Lego Brick 2 Dimensi",
      category: "Teknologi",
      age: "5-12 tahun",
      duration: "300 menit",
      price: "Rp350.000",
      badge: null,
      image: activityLego
    },
    {
      id: 4,
      title: "Edukasi Kesehatan Gigi",
      category: "Kesehatan",
      age: "4-12 tahun",
      duration: "60 menit",
      price: "Gratis",
      badge: "Gratis",
      image: activityKesehatanGigi
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Ibu Lina",
      text: "Kelas Edukasi Kesehatan Gigi Gratis di SkillUpKids sangat bermanfaat untuk anak saya. Dia jadi lebih rajin menyikat gigi dan paham pentingnya menjaga kesehatan mulut.",
      image: testimonial1,
      rating: 5
    },
    {
      id: 2,
      name: "Bapak Surya",
      text: "SkillUpKids membantu anak saya menemukan minatnya dalam dunia IT. Kelas Coding untuk anak benar-benar membuka wawasan dan membuatnya lebih bersemangat belajar.",
      image: testimonial2,
      rating: 5
    },
    {
      id: 3,
      name: "Siti",
      text: "SkillUpKids adalah tempat yang sempurna untuk anak-anak saya belajar sambil bermain. Kegiatan yang beragam membuat mereka selalu semangat dan antusias.",
      image: testimonial3,
      rating: 5
    }
  ]

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Anak Anda Akan Menemukan Passion Baru",
      description: "Dengan ratusan kegiatan edukatif dari berbagai kategori, anak Anda akan mengeksplorasi minat baru dan mengembangkan keterampilan masa depan yang berharga."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Ketenangan Pikiran untuk Orang Tua",
      description: "Platform kami 100% aman dengan kontrol penuh di tangan Anda. Pantau perkembangan anak tanpa khawatir akan konten yang tidak pantas."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Fleksibilitas Sesuai Jadwal Keluarga",
      description: "Kelola jadwal belajar anak dengan mudah melalui dashboard intuitif. Belajar kapan saja, di mana saja, sesuai ritme keluarga Anda."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Bimbingan Personal dari Ahli Terpercaya",
      description: "Setiap anak mendapat perhatian personal dari pengajar bersertifikat yang memahami cara terbaik mengembangkan potensi unik mereka."
    }
  ]

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "40+", label: "Ribu Anggota Aktif", description: "Ribuan keluarga telah mempercayakan pengembangan potensi anak mereka kepada kami" },
    { icon: <Activity className="w-6 h-6" />, number: "150+", label: "Kegiatan Edukatif", description: "Pilihan aktivitas yang terus bertambah, dirancang untuk setiap minat dan usia" },
    { icon: <Handshake className="w-6 h-6" />, number: "90+", label: "Mitra Terpercaya", description: "Berkolaborasi dengan lembaga dan pengajar terbaik untuk kualitas tanpa kompromi" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Wujudkan Potensi Terbaik Si Kecil
                  <br />
                  dengan Pengalaman Belajar yang
                  <span className="text-yellow-500"> Menyenangkan</span> dan
                  <span className="text-purple-600"> Aman</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Di SkillUpKids, kami percaya setiap anak memiliki bakat unik yang siap diasah. 
                  Kami hadir sebagai platform terpercaya yang menyediakan beragam aktivitas interaktif 
                  dan edukatif, dirancang khusus untuk membangun keterampilan masa depan, kreativitas, 
                  dan karakter positif anak Anda.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/activities">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                    Jelajahi Semua Kegiatan
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/daftar-kelas">
                  <Button variant="outline" size="lg" className="px-8 py-3">
                    Daftar Gratis Sekarang
                  </Button>
                </Link>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Cari kegiatan atau kelas yang menarik..."
                  className="pl-10 py-3 text-base"
                />
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Children learning with SkillUpKids" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kenali Lebih Dekat SkillUpKids
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tonton video profil kami dan jingle resmi SkillUpKids untuk memahami lebih dalam tentang misi dan visi kami dalam mengembangkan potensi anak Indonesia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Profile Video */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/gZnQgYK3_Xs"
                  title="Profile SkillUpKids"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Apa itu SkillUpKids?
                </h3>
                <p className="text-gray-600">
                  Pelajari lebih lanjut tentang platform pendidikan terpercaya yang telah membantu ribuan anak Indonesia mengembangkan potensi terbaik mereka.
                </p>
              </div>
            </div>

            {/* Official Jingle Video */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/ml459CiCUbI"
                  title="Official Jingle SkillUpKids"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Jingle Resmi SkillUpKids
                </h3>
                <p className="text-gray-600">
                  Dengarkan jingle resmi SkillUpKids yang penuh semangat dan inspirasi untuk perjalanan belajar anak-anak yang menyenangkan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Bergabunglah dengan Ribuan Keluarga yang Telah Mempercayakan Kami!
            </h2>
            <p className="text-xl opacity-90">Kami bangga dengan pencapaian bersama:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <p className="text-white/80 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Story Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Student Success Story
              </h2>
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3"
              >
                Bergabung dengan Kelas Trial
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right Content - Success Story Card */}
            <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={adindaPhoto} 
                    alt="Adinda Putri" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-600">Adinda Putri Sari</h3>
                  <p className="text-gray-600">SD Negeri 1 Jakarta</p>
                </div>
                <div className="ml-auto">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Juara 1 Kompetisi Robotika Nasional 2024
              </h4>

              <div className="mb-4">
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Kelas Robotika SkillUpKids
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed">
                "Berkat kelas robotika di SkillUpKids, saya belajar membangun robot dari nol. 
                Instruktur sangat sabar mengajarkan coding dan mekanik. Sekarang saya berhasil 
                menjuarai kompetisi tingkat nasional!"
              </p>

              <div className="mt-6 flex items-center">
                <div className="w-20 h-20 rounded-lg overflow-hidden">
                  <img 
                    src={roboticsProject} 
                    alt="Robot Project" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mengapa SkillUpKids adalah Pilihan Terbaik untuk Anak Anda?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami memahami kebutuhan orang tua modern. SkillUpKids hadir dengan berbagai fasilitas unggulan 
              yang dirancang untuk memberikan pengalaman belajar terbaik bagi anak Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Kegiatan Pilihan</h2>
              <p className="text-lg text-gray-600">Temukan aktivitas yang sempurna untuk anak Anda</p>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              Lihat Semua
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredActivities.map((activity) => (
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
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">{activity.category}</Badge>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{activity.title}</h3>
                  <div className="space-y-1 text-sm text-gray-600 mb-4">
                    <div>👥 {activity.age}</div>
                    <div>⏱️ {activity.duration}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`font-bold ${activity.price === 'Gratis' ? 'text-green-600' : 'text-purple-600'}`}>
                      {activity.price}
                    </span>
                    <Link to="/daftar-kelas">
                      <Button size="sm" variant="outline">
                        Daftar
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:hidden">
            <Button variant="outline">
              Lihat Semua Kegiatan
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Achievement & Partnership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pencapaian & Kemitraan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SkillUpKids bangga dengan berbagai pencapaian dan kemitraan strategis yang mendukung 
              misi kami dalam mengembangkan potensi anak Indonesia.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Penghargaan Pendidikan</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Siswa Berprestasi</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Mitra Institusi</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">98%</h3>
              <p className="text-gray-600">Tingkat Kepuasan</p>
            </div>
          </div>

          {/* Partnership Logos - Animated Slider */}
          <div className="bg-gray-50 rounded-2xl p-8 overflow-hidden">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Dipercaya oleh Institusi Terkemuka
            </h3>
            <div className="relative">
              <div className="flex animate-scroll space-x-8">
                {/* First set of logos */}
                <div className="flex space-x-8 min-w-full">
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">KEMENDIKBUD</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">UNIVERSITAS INDONESIA</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">ITB</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">UGM</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">BINUS UNIVERSITY</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">TELKOM INDONESIA</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">GOJEK</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">TOKOPEDIA</span>
                  </div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex space-x-8 min-w-full">
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">KEMENDIKBUD</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">UNIVERSITAS INDONESIA</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">ITB</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">UGM</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">BINUS UNIVERSITY</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">TELKOM INDONESIA</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">GOJEK</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16 min-w-[120px]">
                    <span className="text-gray-600 font-semibold text-sm">TOKOPEDIA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Single Row Slider with Navigation */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kisah Sukses Mereka, Inspirasi Kita Bersama
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dengarkan langsung dari para orang tua yang telah merasakan dampak positif SkillUpKids 
              dalam perjalanan belajar anak-anak mereka.
            </p>
          </div>
          
          {/* Single Row Slider with Navigation */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button 
              onClick={() => {
                const slider = document.getElementById('testimonial-slider');
                slider.scrollBy({ left: -320, behavior: 'smooth' });
              }}
              className="absolute left-0 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
            </button>
            
            <button 
              onClick={() => {
                const slider = document.getElementById('testimonial-slider');
                slider.scrollBy({ left: 320, behavior: 'smooth' });
              }}
              className="absolute right-0 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
            </button>

            {/* Slider Container */}
            <div 
              id="testimonial-slider"
              className="flex space-x-6 overflow-x-auto scrollbar-hide px-4 sm:px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Testimonial 1 */}
              <div className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <img src={testimonial1} alt="Ibu Lina" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ibu Lina</h4>
                    <p className="text-sm text-gray-600">Orang Tua SkillUpKids</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Kelas Edukasi Kesehatan Gigi Gratis di SkillUpKids sangat bermanfaat untuk anak saya. Dia jadi lebih rajin menyikat gigi dan paham pentingnya menjaga kesehatan mulut."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <img src={testimonial2} alt="Bapak Surya" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Bapak Surya</h4>
                    <p className="text-sm text-gray-600">Orang Tua SkillUpKids</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "SkillUpKids membantu anak saya menemukan minatnya dalam dunia IT. Kelas Coding untuk anak benar-benar membuka wawasan dan membuatnya lebih bersemangat belajar."
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <img src={testimonial3} alt="Siti" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Siti</h4>
                    <p className="text-sm text-gray-600">Orang Tua SkillUpKids</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "SkillUpKids adalah tempat yang sempurna untuk anak-anak saya belajar sambil bermain. Kegiatan yang beragam membuat mereka selalu semangat dan antusias."
                </p>
              </div>

              {/* Testimonial 4 */}
              <div className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <img src={testimonial1} alt="Pak Ahmad" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pak Ahmad</h4>
                    <p className="text-sm text-gray-600">Orang Tua SkillUpKids</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Anak saya jadi lebih percaya diri setelah mengikuti kelas public speaking di SkillUpKids. Terima kasih untuk program yang luar biasa!"
                </p>
              </div>

              {/* Testimonial 5 */}
              <div className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <img src={testimonial2} alt="Bu Rina" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Bu Rina</h4>
                    <p className="text-sm text-gray-600">Orang Tua SkillUpKids</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Platform yang sangat membantu dalam mengembangkan kreativitas anak. Instruktur profesional dan materi yang mudah dipahami."
                </p>
              </div>

              {/* Testimonial 6 */}
              <div className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <img src={testimonial3} alt="Pak Budi" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pak Budi</h4>
                    <p className="text-sm text-gray-600">Orang Tua SkillUpKids</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Kelas matematika interaktif membuat anak saya yang tadinya tidak suka matematika jadi senang belajar. Metode pembelajaran yang inovatif!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section - New */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mitra Terpercaya Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SkillUpKids bangga berkolaborasi dengan institusi pendidikan dan organisasi terkemuka 
              untuk memberikan pengalaman belajar terbaik bagi anak-anak Indonesia.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-2">🏫</div>
              <h3 className="font-semibold text-gray-900 mb-1">Sekolah Dasar</h3>
              <p className="text-sm text-gray-600">50+ SD Mitra</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-2">🎓</div>
              <h3 className="font-semibold text-gray-900 mb-1">Universitas</h3>
              <p className="text-sm text-gray-600">15+ Perguruan Tinggi</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-2">🏢</div>
              <h3 className="font-semibold text-gray-900 mb-1">Perusahaan</h3>
              <p className="text-sm text-gray-600">25+ Korporasi</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-2">🏛️</div>
              <h3 className="font-semibold text-gray-900 mb-1">Pemerintah</h3>
              <p className="text-sm text-gray-600">Dinas Pendidikan</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Ingin Bermitra dengan Kami?
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Memulai Perjalanan Belajar yang Menakjubkan?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Bergabunglah dengan ribuan keluarga yang telah mempercayakan pengembangan potensi anak mereka kepada SkillUpKids.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/daftar-kelas">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 px-8 py-3">
                Daftar Gratis Sekarang!
              </Button>
            </Link>
            <Link to="/activities">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-purple-600 px-8 py-3">
                Temukan Kelas Impian Anak Anda
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <img src={skillupkidsLogo} alt="SkillUpKids" className="h-12 w-auto" />
                </Link>
                <Badge variant="secondary" className="ml-2 bg-purple-100 text-purple-700">Indonesia</Badge>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="hidden md:flex items-center space-x-4">
                  <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Beranda</Link>
                  <Link to="/activities" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Daftar Kegiatan</Link>
                  <Link to="/about" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Tentang Kami</Link>
                  <Link to="/blog" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</Link>
                  <Link to="/faq" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</Link>
                  <Link to="/partnership" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Kemitraan</Link>
                  <Button variant="outline" size="sm">Masuk</Button>
                  <Link to="/daftar-kelas">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Daftar</Button>
                  </Link>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Beranda</Link>
                <Link to="/activities" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Daftar Kegiatan</Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Tentang Kami</Link>
                <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
                <Link to="/faq" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">FAQ</Link>
                <Link to="/partnership" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Kemitraan</Link>
                <div className="flex space-x-2 px-3 py-2">
                  <Button variant="outline" size="sm">Masuk</Button>
                  <Link to="/daftar-kelas" onClick={() => setIsMenuOpen(false)}>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Daftar</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogArticle />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/daftar-kelas" element={<ClassRegistration />} />
          {/* Add more routes as needed */}
        </Routes>

        {/* Footer - Moved outside Routes to be persistent */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">SkillUpKids</h3>
              <p className="text-sm leading-relaxed mb-4">
                Platform pilihan pertama orang tua untuk mengembangkan potensi Si Kecil lewat beragam
                aktivitas, kursus, dan konten berkualitas.
              </p>
              <div className="space-y-2 text-sm">
                <p>📍 Jl. Anyelir, Perumnas Condong Catur, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55584</p>
                <p>📧 skillupkidscontact@gmail.com</p>
                <p>📞 0857-2663-1291</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Tentang</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/partnership" className="hover:text-white transition-colors">Kemitraan</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">News & Events</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Event Terbaru</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 mt-8">
            © 2023-2025 SkillUpKids. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App


