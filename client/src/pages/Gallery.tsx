import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Heart, Share2, ZoomIn } from 'lucide-react';

const categories = ['All', 'Ribbons', 'Labels', 'Tags', 'RFID', 'Cards'];

const galleryItems = [
  {
    id: 1,
    title: "Premium Thermal Ribbons",
    category: "Ribbons",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "High-quality wax-resin ribbons for professional printing",
    likes: 247,
    featured: true
  },
  {
    id: 2,
    title: "Barcode Labels Collection",
    category: "Labels",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Durable barcode labels for inventory management",
    likes: 189,
    featured: true
  },
  {
    id: 3,
    title: "Garment Care Tags",
    category: "Tags",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Soft taffeta care labels for apparel industry",
    likes: 312,
    featured: false
  },
  {
    id: 4,
    title: "RFID Smart Solutions",
    category: "RFID",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Advanced UHF RFID labels for tracking systems",
    likes: 156,
    featured: true
  },
  {
    id: 5,
    title: "PVC ID Cards",
    category: "Cards",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Premium PVC cards for identification systems",
    likes: 203,
    featured: false
  },
  {
    id: 6,
    title: "Specialty Labels",
    category: "Labels",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Tamper-evident and security labels for protection",
    likes: 278,
    featured: true
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Product Gallery
            </h1>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Explore our comprehensive collection of printing solutions, from thermal transfer ribbons 
              to advanced RFID systems, showcasing quality and innovation in every product.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 mb-12 bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white border border-gray-300 hover:border-indigo-500 text-gray-700 hover:text-indigo-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <Card className="overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-200 text-sm mb-4">
                            {item.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <Badge 
                              variant="secondary" 
                              className="bg-indigo-100 text-indigo-800 border-indigo-200"
                            >
                              {item.category}
                            </Badge>
                            
                            <div className="flex items-center gap-2 text-white">
                              <Heart className="h-4 w-4" />
                              <span className="text-sm">{item.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="bg-black/50 hover:bg-indigo-600/80 text-white backdrop-blur-sm"
                        >
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="bg-black/50 hover:bg-indigo-600/80 text-white backdrop-blur-sm"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="bg-black/50 hover:bg-indigo-600/80 text-white backdrop-blur-sm"
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Featured Badge */}
                      {item.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-indigo-600 text-white font-bold">
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Our expert team can create customized printing solutions tailored to your specific requirements. 
              Contact us to discuss your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
                Request Custom Quote
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold">
                View All Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}