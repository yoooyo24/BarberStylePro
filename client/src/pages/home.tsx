import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Star,
  Menu,
  X
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  // Smooth scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('bg-black/95');
          nav.classList.remove('bg-black/80');
        } else {
          nav.classList.remove('bg-black/95');
          nav.classList.add('bg-black/80');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // TODO: Implement actual booking submission
    alert('Thank you for your booking request! We will contact you soon.');
  };

  const services = [
    {
      name: "Signature Cut",
      description: "Precision cutting tailored to your face shape and lifestyle. Includes consultation, wash, cut, and styling.",
      price: "$65",
      duration: "45 minutes",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Royal Shave",
      description: "Traditional hot towel treatment with straight razor shave. The ultimate in luxury grooming.",
      price: "$55",
      duration: "30 minutes",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Beard Sculpting",
      description: "Expert beard trimming and shaping with premium oils and balms for the perfect finish.",
      price: "$40",
      duration: "25 minutes",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Crown Treatment",
      description: "Complete grooming experience: cut, shave, styling, and scalp treatment with premium products.",
      price: "$120",
      duration: "90 minutes",
      image: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Father & Son",
      description: "Bond over grooming with our signature cuts for both father and son. A tradition to cherish.",
      price: "$110",
      duration: "75 minutes",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Grooming Products",
      description: "Take home our premium line of pomades, oils, and styling products to maintain your look.",
      price: "$25+",
      duration: "Retail",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    }
  ];

  const galleryImages = [
    { name: "Classic Fade", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
    { name: "Beard Sculpt", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
    { name: "Vintage Style", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
    { name: "Executive Cut", image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
    { name: "Royal Shave", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
    { name: "Creative Style", image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
    { name: "Traditional", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
    { name: "Full Service", image: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-playfair font-bold text-yellow-500">The Crown</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-stone-200 hover:text-yellow-500 transition duration-300"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-stone-200 hover:text-yellow-500 transition duration-300"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-stone-200 hover:text-yellow-500 transition duration-300"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')} 
                  className="text-stone-200 hover:text-yellow-500 transition duration-300"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-stone-200 hover:text-yellow-500 transition duration-300"
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-200 hover:text-yellow-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block px-3 py-2 text-stone-200 hover:text-yellow-500 transition duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block px-3 py-2 text-stone-200 hover:text-yellow-500 transition duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block px-3 py-2 text-stone-200 hover:text-yellow-500 transition duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="block px-3 py-2 text-stone-200 hover:text-yellow-500 transition duration-300"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block px-3 py-2 text-stone-200 hover:text-yellow-500 transition duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-shadow">
            The Crown Barbershop
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-stone-200 text-shadow">
            Where Tradition Meets Modern Sophistication
          </p>
          <div className="space-x-4">
            <Button 
              onClick={() => scrollToSection('services')}
              className="gold-gradient text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              Our Services
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
              Premium Services
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Experience the finest in men's grooming with our expertly crafted services, 
              delivered by master barbers with decades of combined experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-oswald font-semibold text-black mb-2">{service.name}</h3>
                  <p className="text-gray-700 mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yellow-600">{service.price}</span>
                    <span className="text-sm text-gray-600">{service.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-stone-200">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-yellow-500">
                Craftsmanship & Tradition
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Since 1952, The Crown Barbershop has been the cornerstone of traditional men's grooming. 
                Our master barbers combine time-honored techniques with modern precision to deliver an 
                unparalleled grooming experience.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                We believe that a great haircut is more than just trimming hair—it's about understanding 
                your lifestyle, enhancing your natural features, and giving you the confidence to take on the world.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">70+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">15K+</div>
                  <div className="text-sm">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">5</div>
                  <div className="text-sm">Master Barbers</div>
                </div>
              </div>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="gold-gradient text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
              >
                Meet Our Team
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
                alt="Master barber at work" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
              Our Masterpieces
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Witness the transformation. Every cut tells a story of precision, artistry, and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((item, index) => (
              <Card key={index} className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h4 className="font-oswald font-semibold text-black">{item.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-yellow-500 mb-4">
              Visit The Crown
            </h2>
            <p className="text-lg text-stone-200 max-w-2xl mx-auto">
              Ready to experience the finest in men's grooming? Book your appointment today and discover 
              why generations of gentlemen trust The Crown.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-stone-200">
              <div className="mb-8">
                <h3 className="text-2xl font-playfair font-semibold text-yellow-500 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-playfair font-semibold text-yellow-500 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="text-yellow-500 mr-3 h-5 w-5" />
                    <span>123 Heritage Street, Downtown District, NY 10001</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-yellow-500 mr-3 h-5 w-5" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-yellow-500 mr-3 h-5 w-5" />
                    <span>info@thecrownbarbershop.com</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-playfair font-semibold text-yellow-500 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Instagram className="text-stone-200 hover:text-yellow-500 transition-colors duration-300 h-8 w-8 cursor-pointer" />
                  <Facebook className="text-stone-200 hover:text-yellow-500 transition-colors duration-300 h-8 w-8 cursor-pointer" />
                  <Star className="text-stone-200 hover:text-yellow-500 transition-colors duration-300 h-8 w-8 cursor-pointer" />
                </div>
              </div>
            </div>

            <Card className="bg-white shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-black mb-6">Book Your Appointment</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Preferred Service
                    </label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="signature-cut">Signature Cut</SelectItem>
                        <SelectItem value="royal-shave">Royal Shave</SelectItem>
                        <SelectItem value="beard-sculpting">Beard Sculpting</SelectItem>
                        <SelectItem value="crown-treatment">Crown Treatment</SelectItem>
                        <SelectItem value="father-son">Father & Son</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Special Requests
                    </label>
                    <Textarea
                      placeholder="Any special requests or preferred appointment times?"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full"
                      rows={4}
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full gold-gradient text-black font-semibold py-3 px-4 rounded-lg hover:scale-105 transition-transform duration-300"
                  >
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-stone-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-playfair font-bold text-yellow-500 mb-4">The Crown Barbershop</h3>
            <p className="mb-4">Where Tradition Meets Modern Sophistication</p>
            <div className="flex justify-center space-x-6 mb-4">
              <button onClick={() => scrollToSection('home')} className="hover:text-yellow-500 transition-colors duration-300">Home</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-yellow-500 transition-colors duration-300">Services</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-yellow-500 transition-colors duration-300">About</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-yellow-500 transition-colors duration-300">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-yellow-500 transition-colors duration-300">Contact</button>
            </div>
            <p className="text-sm text-stone-400">
              © 2024 The Crown Barbershop. All rights reserved. | Proudly serving the community since 1952.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
