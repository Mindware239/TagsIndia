import { Link } from 'wouter';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Printer,
  Tag,
  CreditCard
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Tag className="w-8 h-8 text-indigo-400" />
              <h3 className="text-2xl font-bold">TagsIndia</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Established leader in premium printing solutions - Labels, Tags, Stickers, and Ribbons. 
              Operating since 1997, we provide comprehensive barcode printing, RFID solutions, and 
              professional labeling services across India.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Products</h4>
            <ul className="space-y-2">
              <li><Link href="/products?category=ribbons" className="text-gray-300 hover:text-indigo-400 transition-colors">Thermal Transfer Ribbons</Link></li>
              <li><Link href="/products?category=labels" className="text-gray-300 hover:text-indigo-400 transition-colors">Barcode Labels</Link></li>
              <li><Link href="/products?category=tags" className="text-gray-300 hover:text-indigo-400 transition-colors">Garment Tags</Link></li>
              <li><Link href="/products?category=cards" className="text-gray-300 hover:text-indigo-400 transition-colors">PVC Cards</Link></li>
              <li><Link href="/products?category=rfid" className="text-gray-300 hover:text-indigo-400 transition-colors">RFID Solutions</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-indigo-400 transition-colors">View All Products</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">Custom Printing</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">Barcode Solutions</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">RFID Implementation</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">Inventory Management</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">Technical Support</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-indigo-400 transition-colors">Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium">TagsIndia Headquarters</p>
                  <p>New Delhi, India</p>
                  <p>Serving nationwide</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-300">+91 (11) 1234-5678</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-300">info@tagsindia.com</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-4">
              <h5 className="font-medium text-white mb-2">Quick Links</h5>
              <div className="flex flex-wrap gap-2">
                <Link href="/about" className="text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded transition-colors">About</Link>
                <Link href="/gallery" className="text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded transition-colors">Gallery</Link>
                <Link href="/portfolio" className="text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded transition-colors">Portfolio</Link>
                <Link href="/contact" className="text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-semibold text-white mb-6 text-center">Our Solutions</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Printer className="w-8 h-8 text-indigo-400" />
              </div>
              <h5 className="font-medium text-white mb-2">Printing Solutions</h5>
              <p className="text-sm text-gray-300">
                Comprehensive barcode printing, thermal transfer, and desktop printing solutions for all industries.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag className="w-8 h-8 text-indigo-400" />
              </div>
              <h5 className="font-medium text-white mb-2">Labeling & Tagging</h5>
              <p className="text-sm text-gray-300">
                Professional labeling solutions for retail, manufacturing, and logistics with custom designs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-indigo-400" />
              </div>
              <h5 className="font-medium text-white mb-2">ID & Access Control</h5>
              <p className="text-sm text-gray-300">
                RFID cards, PVC ID cards, and access control systems for secure identification and tracking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 TagsIndia. All rights reserved. | Established 1997
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-indigo-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-indigo-400 transition-colors">Terms of Service</Link>
              <Link href="/support" className="text-gray-400 hover:text-indigo-400 transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;