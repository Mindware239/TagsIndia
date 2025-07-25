import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ExternalLink, 
  Award, 
  Calendar, 
  MapPin, 
  Users,
  TrendingUp,
  Target,
  Briefcase
} from 'lucide-react';

const portfolioProjects = [
  {
    id: 1,
    title: "Retail Chain Barcode Implementation",
    category: "retail",
    client: "BigMart Retail Chain",
    year: "2024",
    location: "Delhi, India",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Complete barcode printing solution deployment across 150+ retail stores nationwide.",
    results: ["50% improvement in inventory accuracy", "30% reduction in checkout time", "Zero barcode scanning errors"],
    challenge: "Implementing standardized barcode printing across multiple locations with varying technical capabilities.",
    solution: "Deployed uniform thermal transfer printing systems with centralized design templates and local support.",
    featured: true,
    tags: ["Retail", "Barcode", "Multi-location", "Inventory"]
  },
  {
    id: 2,
    title: "Manufacturing RFID Tracking System",
    category: "manufacturing",
    client: "Industrial Solutions Ltd",
    year: "2024",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Advanced RFID system for real-time tracking of manufacturing components and finished goods.",
    results: ["99.8% tracking accuracy", "40% reduction in lost inventory", "Real-time visibility achieved"],
    challenge: "Tracking high-value components in harsh manufacturing environment with metal interference.",
    solution: "Implemented UHF RFID with specialized anti-metal tags and strategic reader placement.",
    featured: true,
    tags: ["Manufacturing", "RFID", "Tracking", "Industrial"]
  },
  {
    id: 3,
    title: "Healthcare Label Compliance Project",
    category: "healthcare",
    client: "MedCare Hospitals",
    year: "2023",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Specialized medical labels for patient identification and medication tracking.",
    results: ["100% regulatory compliance", "Zero patient identification errors", "25% faster processing"],
    challenge: "Meeting strict healthcare regulations while ensuring labels remain readable in various conditions.",
    solution: "Developed specialized medical-grade labels with waterproof and chemical-resistant properties.",
    featured: false,
    tags: ["Healthcare", "Compliance", "Safety", "Medical"]
  },
  {
    id: 4,
    title: "Textile Industry Garment Tagging",
    category: "textile",
    client: "Fashion Forward Exports",
    year: "2024",
    location: "Tirupur, India",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Comprehensive garment tagging solution for export-quality textile manufacturing.",
    results: ["International quality standards met", "Export compliance achieved", "Branding consistency maintained"],
    challenge: "Creating durable tags that maintain quality through multiple wash cycles and export handling.",
    solution: "Designed multi-layer tags with fade-resistant inks and reinforced attachment points.",
    featured: true,
    tags: ["Textile", "Export", "Durability", "Compliance"]
  },
  {
    id: 5,
    title: "Logistics Warehouse Optimization",
    category: "logistics",
    client: "Express Logistics Pvt Ltd",
    year: "2023",
    location: "Gurgaon, India",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Automated labeling system for high-volume package processing and tracking.",
    results: ["300% increase in processing speed", "99.9% label accuracy", "Reduced manual errors"],
    challenge: "Handling high-volume package labeling with varying sizes and surfaces in fast-paced environment.",
    solution: "Implemented automated print-and-apply systems with adaptive sizing and surface detection.",
    featured: false,
    tags: ["Logistics", "Automation", "High-volume", "Accuracy"]
  },
  {
    id: 6,
    title: "Educational Institution ID System",
    category: "education",
    client: "Tech University Campus",
    year: "2024",
    location: "Pune, India",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Comprehensive student and staff ID card system with access control integration.",
    results: ["50,000+ ID cards issued", "Secure campus access achieved", "Administrative efficiency improved"],
    challenge: "Creating secure, durable ID cards for large student population with multiple access levels.",
    solution: "Implemented PVC card system with embedded RFID chips and multi-level security features.",
    featured: true,
    tags: ["Education", "Security", "Access Control", "Large Scale"]
  }
];

const categories = [
  { id: "all", label: "All Projects", count: portfolioProjects.length },
  { id: "retail", label: "Retail", count: portfolioProjects.filter(p => p.category === "retail").length },
  { id: "manufacturing", label: "Manufacturing", count: portfolioProjects.filter(p => p.category === "manufacturing").length },
  { id: "healthcare", label: "Healthcare", count: portfolioProjects.filter(p => p.category === "healthcare").length },
  { id: "textile", label: "Textiles", count: portfolioProjects.filter(p => p.category === "textile").length },
  { id: "logistics", label: "Logistics", count: portfolioProjects.filter(p => p.category === "logistics").length },
  { id: "education", label: "Education", count: portfolioProjects.filter(p => p.category === "education").length }
];

const stats = [
  { icon: Award, label: "Projects Completed", value: "500+", description: "Successful implementations across India" },
  { icon: Users, label: "Happy Clients", value: "200+", description: "Businesses trust our solutions" },
  { icon: TrendingUp, label: "Success Rate", value: "99.8%", description: "Project completion satisfaction rate" },
  { icon: Target, label: "Industries Served", value: "15+", description: "Diverse industry expertise" }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = portfolioProjects.filter(project => 
    selectedCategory === "all" || project.category === selectedCategory
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
              Our Portfolio
            </h1>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Discover our successful projects across various industries. Each case study represents 
              our commitment to delivering innovative printing solutions that drive business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 mb-20 bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center p-6">
                  <stat.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                  <div className="font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="px-4 mb-12 bg-white py-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 lg:grid-cols-7 bg-gray-100 border border-gray-200">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-medium text-gray-700 text-sm"
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-1 text-xs bg-gray-200 text-gray-600">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-4 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8" layout>
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <Button 
                            size="sm" 
                            className="bg-indigo-600 hover:bg-indigo-700 text-white"
                          >
                            View Case Study
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-indigo-600 text-white font-bold">
                            <Award className="h-3 w-3 mr-1 fill-current" />
                            Featured
                          </Badge>
                        </div>
                      )}

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-black/50 text-white border-gray-500">
                          {project.year}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-indigo-600 font-semibold">{project.client}</p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6">
                        {project.description}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {project.year}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {project.location}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <Badge 
                              key={idx} 
                              variant="outline" 
                              className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm text-gray-900">Key Results:</h4>
                          {project.results.slice(0, 2).map((result, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Briefcase className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join our portfolio of successful businesses. Let us create a customized printing solution 
              that drives results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold"
              >
                Download Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}