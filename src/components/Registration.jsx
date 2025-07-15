import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Users,
  Shield,
  CheckCircle,
  Star,
  Gift
} from 'lucide-react'

export default function Registration() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    address: '',
    childName: '',
    childAge: '',
    childGender: '',
    interests: [],
    agreeTerms: false,
    agreeMarketing: false
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleInterestChange = (interest, checked) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Pendaftaran berhasil! Tim kami akan menghubungi Anda segera.')
  }

  const interests = [
    'Teknologi & Programming',
    'Seni & Kreativitas',
    'Musik & Tari',
    'Olahraga & Kesehatan',
    'Bahasa Asing',
    'Matematika & Sains',
    'Memasak & Life Skills',
    'Public Speaking',
    'Robotika',
    'Game Edukatif'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Daftar Sekarang di SkillUpKids
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan keluarga yang telah mempercayakan pengembangan potensi anak mereka kepada SkillUpKids
          </p>
        </div>

        {/* Benefits Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-teal-500 text-white">
            <CardContent className="p-6 text-center">
              <Gift className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Kelas Trial Gratis</h3>
              <p className="text-sm opacity-90">Coba dulu sebelum berkomitmen</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">100% Aman</h3>
              <p className="text-sm opacity-90">Platform terpercaya untuk anak</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
            <CardContent className="p-6 text-center">
              <Star className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Instruktur Bersertifikat</h3>
              <p className="text-sm opacity-90">Pengajar profesional dan berpengalaman</p>
            </CardContent>
          </Card>
        </div>

        {/* Registration Form */}
        <Card className="border-0 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Form Pendaftaran</CardTitle>
            <CardDescription className="text-purple-100">
              Lengkapi data di bawah ini untuk memulai perjalanan belajar anak Anda
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Parent Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <User className="w-6 h-6 mr-2 text-purple-600" />
                  Data Orang Tua
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="parentName">Nama Lengkap Orang Tua *</Label>
                    <Input
                      id="parentName"
                      type="text"
                      placeholder="Masukkan nama lengkap"
                      value={formData.parentName}
                      onChange={(e) => handleInputChange('parentName', e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="contoh@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Nomor Telepon *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Alamat</Label>
                    <Input
                      id="address"
                      type="text"
                      placeholder="Kota, Provinsi"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Child Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-purple-600" />
                  Data Anak
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="childName">Nama Anak *</Label>
                    <Input
                      id="childName"
                      type="text"
                      placeholder="Nama lengkap anak"
                      value={formData.childName}
                      onChange={(e) => handleInputChange('childName', e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="childAge">Usia Anak *</Label>
                    <Select onValueChange={(value) => handleInputChange('childAge', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Pilih usia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-5">3-5 tahun (PAUD)</SelectItem>
                        <SelectItem value="6-8">6-8 tahun (SD Kelas Rendah)</SelectItem>
                        <SelectItem value="9-12">9-12 tahun (SD Kelas Tinggi)</SelectItem>
                        <SelectItem value="13-15">13-15 tahun (SMP)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="childGender">Jenis Kelamin *</Label>
                    <Select onValueChange={(value) => handleInputChange('childGender', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Pilih jenis kelamin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="laki-laki">Laki-laki</SelectItem>
                        <SelectItem value="perempuan">Perempuan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Minat & Bakat Anak
                </h3>
                <p className="text-gray-600 mb-4">Pilih kategori yang diminati anak Anda (boleh lebih dari satu)</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interests.map((interest) => (
                    <div key={interest} className="flex items-center space-x-3">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked)}
                      />
                      <Label htmlFor={interest} className="text-sm font-medium">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange('agreeTerms', checked)}
                    required
                  />
                  <Label htmlFor="agreeTerms" className="text-sm">
                    Saya menyetujui <a href="#" className="text-purple-600 hover:underline">Syarat & Ketentuan</a> dan <a href="#" className="text-purple-600 hover:underline">Kebijakan Privasi</a> SkillUpKids *
                  </Label>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeMarketing"
                    checked={formData.agreeMarketing}
                    onCheckedChange={(checked) => handleInputChange('agreeMarketing', checked)}
                  />
                  <Label htmlFor="agreeMarketing" className="text-sm">
                    Saya ingin menerima informasi terbaru tentang program dan promo SkillUpKids
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-12 py-4 text-lg"
                  disabled={!formData.agreeTerms}
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Daftar Sekarang
                </Button>
                
                <p className="text-sm text-gray-600 mt-4">
                  Dengan mendaftar, Anda akan mendapatkan akses ke kelas trial gratis dan konsultasi dengan tim kami
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Butuh Bantuan?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-gray-700">0857-2663-1291</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-gray-700">skillupkidscontact@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

