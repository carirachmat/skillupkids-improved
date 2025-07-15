import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Star,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Heart,
  Shield
} from 'lucide-react'

export default function ClassRegistration() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [selectedClass, setSelectedClass] = useState(null)
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    address: '',
    emergencyContact: '',
    specialNeeds: '',
    classId: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const availableClasses = [
    {
      id: 1,
      title: "Kelas Junior System Administrator",
      category: "Teknologi",
      ageRange: "10-15 tahun",
      duration: "90 menit",
      price: "Rp99.000",
      instructor: "Pak Andi Wijaya",
      rating: 4.9,
      students: 25,
      schedule: "Setiap Sabtu, 09:00-10:30",
      description: "Belajar dasar-dasar administrasi sistem komputer dengan cara yang menyenangkan dan mudah dipahami.",
      features: ["Materi interaktif", "Sertifikat", "Grup diskusi", "Project akhir"],
      badge: "Populer"
    },
    {
      id: 2,
      title: "Kelas Mengaji Anak-Anak",
      category: "Keagamaan",
      ageRange: "3-15 tahun",
      duration: "60 menit",
      price: "Rp100.000",
      instructor: "Ustadz Ahmad",
      rating: 5.0,
      students: 40,
      schedule: "Setiap Minggu, 08:00-09:00",
      description: "Pembelajaran Al-Qur'an dengan metode yang menyenangkan dan mudah dipahami untuk anak-anak.",
      features: ["Metode Iqro", "Hafalan surat pendek", "Akhlak mulia", "Bimbingan personal"],
      badge: null
    },
    {
      id: 3,
      title: "Lego Brick 2 Dimensi",
      category: "Teknologi",
      ageRange: "5-12 tahun",
      duration: "300 menit",
      price: "Rp350.000",
      instructor: "Bu Sarah",
      rating: 4.8,
      students: 18,
      schedule: "Setiap Sabtu, 13:00-18:00",
      description: "Mengembangkan kreativitas dan kemampuan problem solving melalui permainan Lego yang terstruktur.",
      features: ["Kit Lego lengkap", "Panduan step-by-step", "Kreativitas bebas", "Showcase hasil karya"],
      badge: null
    },
    {
      id: 4,
      title: "Edukasi Kesehatan Gigi",
      category: "Kesehatan",
      ageRange: "4-12 tahun",
      duration: "60 menit",
      price: "Gratis",
      instructor: "Dr. Lisa",
      rating: 4.9,
      students: 50,
      schedule: "Setiap Minggu, 10:00-11:00",
      description: "Pembelajaran pentingnya menjaga kesehatan gigi dan mulut dengan cara yang menyenangkan.",
      features: ["Pemeriksaan gratis", "Kit sikat gigi", "Edukasi interaktif", "Konsultasi dokter"],
      badge: "Gratis"
    }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleClassSelect = (classItem) => {
    setSelectedClass(classItem)
    setFormData({
      ...formData,
      classId: classItem.id
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center p-8">
            <CardContent className="space-y-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <h1 className="text-3xl font-bold text-gray-900">Pendaftaran Berhasil!</h1>
              <p className="text-lg text-gray-600">
                Terima kasih telah mendaftarkan anak Anda di SkillUpKids. 
                Tim kami akan menghubungi Anda dalam 1x24 jam untuk konfirmasi lebih lanjut.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Langkah Selanjutnya:</h3>
                <ul className="text-blue-800 text-left space-y-1">
                  <li>• Cek email Anda untuk konfirmasi pendaftaran</li>
                  <li>• Tim kami akan menghubungi untuk jadwal trial class</li>
                  <li>• Siapkan peralatan yang diperlukan sesuai panduan</li>
                  <li>• Bergabung dengan grup WhatsApp kelas</li>
                </ul>
              </div>
              <Button 
                onClick={() => window.location.href = '/'} 
                className="bg-purple-600 hover:bg-purple-700"
              >
                Kembali ke Beranda
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Daftar Kelas SkillUpKids
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pilih kelas yang sesuai dengan minat dan usia anak Anda, lalu lengkapi formulir pendaftaran. 
            Kami akan membantu anak Anda mengembangkan potensi terbaiknya!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Class Selection */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pilih Kelas</h2>
            
            {availableClasses.map((classItem) => (
              <Card 
                key={classItem.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedClass?.id === classItem.id ? 'ring-2 ring-purple-500 bg-purple-50' : ''
                }`}
                onClick={() => handleClassSelect(classItem)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg">{classItem.title}</CardTitle>
                        {classItem.badge && (
                          <Badge variant={classItem.badge === 'Gratis' ? 'secondary' : 'default'}>
                            {classItem.badge}
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-sm text-gray-600">
                        {classItem.category} • {classItem.ageRange}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-600">{classItem.price}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-700 mb-4">{classItem.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span>{classItem.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{classItem.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{classItem.rating} ({classItem.students} siswa)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-xs">{classItem.schedule}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {classItem.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Registration Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Formulir Pendaftaran</h2>
            
            {!selectedClass && (
              <Card className="border-yellow-200 bg-yellow-50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                    <p className="text-yellow-800">Silakan pilih kelas terlebih dahulu</p>
                  </div>
                </CardContent>
              </Card>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selected Class Info */}
              {selectedClass && (
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-purple-900 mb-2">Kelas Terpilih:</h3>
                    <p className="text-purple-800">{selectedClass.title}</p>
                    <p className="text-sm text-purple-600">{selectedClass.price} • {selectedClass.schedule}</p>
                  </CardContent>
                </Card>
              )}

              {/* Parent Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Informasi Orang Tua</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap Orang Tua *
                    </label>
                    <Input
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
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
                </CardContent>
              </Card>

              {/* Child Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Informasi Anak</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap Anak *
                      </label>
                      <Input
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama anak"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Usia Anak *
                      </label>
                      <Input
                        type="number"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleInputChange}
                        placeholder="Contoh: 8"
                        min="3"
                        max="17"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Alamat Lengkap *
                    </label>
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Jalan, Kelurahan, Kecamatan, Kota"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kontak Darurat
                    </label>
                    <Input
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      placeholder="Nama dan nomor telepon kontak darurat"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kebutuhan Khusus / Catatan
                    </label>
                    <Input
                      name="specialNeeds"
                      value={formData.specialNeeds}
                      onChange={handleInputChange}
                      placeholder="Alergi, kondisi medis, atau catatan khusus lainnya"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Keuntungan Bergabung dengan SkillUpKids:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                      <span className="text-sm">Kurikulum Terstruktur</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Lingkungan Aman</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-600" />
                      <span className="text-sm">Perhatian Personal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
                disabled={!selectedClass}
              >
                Daftar Sekarang
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Dengan mendaftar, Anda menyetujui syarat dan ketentuan SkillUpKids. 
                Data pribadi Anda akan dijaga kerahasiaannya.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

