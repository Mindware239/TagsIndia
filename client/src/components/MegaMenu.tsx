import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { 
  ChevronDown, 
  Tag, 
  CreditCard, 
  Watch,
  Printer,
  Code,
  Building,
  School,
  Calendar,
  Store,
  Star,
  Truck,
  Recycle,
  Award,
  BookOpen,
  Quote,
  PenTool
} from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const megaMenuContent = {
    products: {
      title: "Products",
      sections: [
        {
          title: "Tag Solutions",
          icon: Tag,
          items: [
            { 
              title: "By Industry", 
              subitems: ["Healthcare", "Retail", "Events", "Logistics", "Education"]
            },
            { 
              title: "By Purpose", 
              subitems: ["People ID", "Inventory", "Access Control", "Branding"]
            },
            { 
              title: "Smart Tags", 
              subitems: ["RFID", "QR Code", "NFC", "Barcode"]
            }
          ]
        },
        {
          title: "Card Lab",
          icon: CreditCard,
          items: [
            "PVC Cards",
            "Smart ID Cards", 
            "Access & Security Cards",
            "Custom Card Printing"
          ]
        },
        {
          title: "Wrist & Wear",
          icon: Watch,
          items: [
            "Hospital Wristbands",
            "Event Bands",
            "Child ID Bands", 
            "Custom-Printed Wearables"
          ]
        },
        {
          title: "Print My Tag",
          icon: Printer,
          items: [
            "Upload Your Design",
            "Design Your Tag Online"
          ]
        },
        {
          title: "Tagging Software",
          icon: Code,
          items: [
            "IoT in Identification"
          ]
        }
      ]
    },
    industries: {
      title: "Industries We Serve",
      sections: [
        {
          title: "Our Industries",
          icon: Building,
          items: [
            { title: "Hospitals", icon: "🏥" },
            { title: "Schools & Colleges", icon: "🎓" },
            { title: "Events & Conferences", icon: "📅" },
            { title: "Retail & Supermarkets", icon: "🛒" },
            { title: "Government & Corporate", icon: "🏛️" }
          ]
        }
      ]
    },
    whyTagIndia: {
      title: "Why TagIndia",
      sections: [
        {
          title: "Our Advantages",
          icon: Star,
          items: [
            { title: "Innovation in ID", icon: "💡" },
            { title: "Eco-Friendly Materials", icon: "🌱" },
            { title: "Fast Production & Delivery", icon: "🚀" },
            { title: "Case Studies / Success Stories", icon: "📊" }
          ]
        }
      ]
    },
    tagTalk: {
      title: "Tag Talk (Blog)",
      sections: [
        {
          title: "Blog Categories",
          icon: BookOpen,
          items: [
            { title: "Trends in Tagging", icon: "📈" },
            { title: "RFID and Future of IDs", icon: "🔮" },
            { title: "Guides and How-Tos", icon: "📖" }
          ]
        }
      ]
    },
    getTagged: {
      title: "Get Tagged (Contact)",
      sections: [
        {
          title: "Contact Options",
          icon: Quote,
          items: [
            { title: "Instant Quote", icon: "⚡" },
            { title: "Design Request", icon: "🎨" }
          ]
        }
      ]
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={onClose}
          />
          
          {/* Mega Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50"
          >
            <div className="max-w-7xl mx-auto py-8 px-6">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                
                {/* Tag Solutions */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Tag className="h-6 w-6 text-indigo-600" />
                    <h3 className="text-lg font-bold text-gray-900">Tag Solutions</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">By Industry</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {["Healthcare", "Retail", "Events", "Logistics", "Education"].map((item, idx) => (
                          <Link key={idx} href={`/products/industry/${item.toLowerCase()}`}>
                            <div className="text-sm text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer py-1">
                              {item}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">By Purpose</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {["People ID", "Inventory", "Access Control", "Branding"].map((item, idx) => (
                          <Link key={idx} href={`/products/purpose/${item.toLowerCase().replace(' ', '-')}`}>
                            <div className="text-sm text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer py-1">
                              {item}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Smart Tags</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {["RFID", "QR Code", "NFC", "Barcode"].map((item, idx) => (
                          <Link key={idx} href={`/products/smart/${item.toLowerCase().replace(' ', '-')}`}>
                            <div className="text-sm text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer py-1">
                              {item}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Lab & Wrist & Wear */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="h-6 w-6 text-indigo-600" />
                      <h3 className="text-lg font-bold text-gray-900">Card Lab</h3>
                    </div>
                    <div className="space-y-2">
                      {["PVC Cards", "Smart ID Cards", "Access & Security Cards", "Custom Card Printing"].map((item, idx) => (
                        <Link key={idx} href={`/products/cards/${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                          <div className="text-sm text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer py-1">
                            {item}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Watch className="h-6 w-6 text-indigo-600" />
                      <h3 className="text-lg font-bold text-gray-900">Wrist & Wear</h3>
                    </div>
                    <div className="space-y-2">
                      {["Hospital Wristbands", "Event Bands", "Child ID Bands", "Custom-Printed Wearables"].map((item, idx) => (
                        <Link key={idx} href={`/products/wrist/${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                          <div className="text-sm text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer py-1">
                            {item}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Print My Tag & Tagging Software */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Printer className="h-6 w-6 text-indigo-600" />
                      <h3 className="text-lg font-bold text-gray-900">Print My Tag</h3>
                    </div>
                    <div className="space-y-2">
                      <Link href="/design/upload">
                        <div className="text-sm text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer py-1">
                          Upload Your Design
                        </div>
                      </Link>
                      <Link href="/design/online">
                        <div className="text-sm text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer py-1">
                          Design Your Tag Online
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Code className="h-6 w-6 text-indigo-600" />
                      <h3 className="text-lg font-bold text-gray-900">Tagging Software</h3>
                    </div>
                    <div className="space-y-2">
                      <Link href="/software/iot">
                        <div className="text-sm text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer py-1">
                          IoT in Identification
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bulk Orders */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Truck className="h-6 w-6 text-indigo-600" />
                      <h3 className="text-lg font-bold text-gray-900">Bulk Orders</h3>
                    </div>
                    <div className="space-y-2">
                      <Link href="/bulk/custom-labels">
                        <div className="text-sm text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer py-1">
                          Custom Labels/Tags
                        </div>
                      </Link>
                      <Link href="/bulk/tech-behind-tags">
                        <div className="text-sm text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer py-1">
                          Tech Behind Tags
                        </div>
                      </Link>
                      <Link href="/bulk/rfid-solutions">
                        <div className="text-sm text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer py-1">
                          RFID Solutions
                        </div>
                      </Link>
                      <Link href="/bulk/smart-printing">
                        <div className="text-sm text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer py-1">
                          Smart Printing Devices
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Featured Product */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-100">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="h-5 w-5 text-indigo-600" />
                      <h4 className="font-bold text-gray-900">Featured</h4>
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-2">Smart RFID Tags</h5>
                    <p className="text-sm text-gray-600 mb-4">
                      Next-generation RFID solutions for advanced tracking and identification.
                    </p>
                    <Link href="/products/featured/smart-rfid">
                      <button className="w-full bg-indigo-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;