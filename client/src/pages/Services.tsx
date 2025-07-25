import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Printer, 
  Tag, 
  Shield, 
  Award, 
  Clock, 
  Sparkles,
  Target,
  Gem,
  Cog,
  Users,
  Globe,
  CreditCard
} from 'lucide-react';

const services = [
  {
    icon: Printer,
    title: "Barcode Printing Solutions",
    description: "Complete barcode printing setup with thermal transfer ribbons, labels, and professional printers.",
    features: [
      "Printer selection & setup",
      "Ribbon compatibility matching",
      "Label design & testing",
      "Staff training included"
    ],
    price: "Starting at ₹25,000",
    tier: "Professional",
    color: "indigo"
  },
  {
    icon: Tag,
    title: "Custom Label Production",
    description: "Specialized label manufacturing for unique business requirements and branding needs.",
    features: [
      "Custom sizes & materials",
      "Brand color matching",
      "Variable data printing",
      "Quick turnaround time"
    ],
    price: "Starting at ₹15,000",
    tier: "Custom",
    color: "blue"
  },
  {
    icon: CreditCard,
    title: "RFID Implementation",
    description: "Complete RFID system deployment for inventory tracking and access control applications.",
    features: [
      "System design & planning",
      "Hardware installation",
      "Software integration",
      "Performance optimization"
    ],
    price: "Starting at ₹75,000",
    tier: "Enterprise",
    color: "purple"
  },
  {
    icon: Shield,
    title: "Security Label Solutions",
    description: "Tamper-evident and security labels for product authentication and brand protection.",
    features: [
      "Anti-counterfeiting features",
      "Void message technology",
      "Holographic elements",
      "Custom security designs"
    ],
    price: "Starting at ₹35,000",
    tier: "Security",
    color: "red"
  },
  {
    icon: Clock,
    title: "Maintenance & Support",
    description: "Ongoing technical support and maintenance services for all printing equipment.",
    features: [
      "Regular maintenance visits",
      "Emergency support",
      "Parts replacement",
      "Performance monitoring"
    ],
    price: "Starting at ₹8,000/month",
    tier: "Support",
    color: "green"
  },
  {
    icon: Award,
    title: "Consultation Services",
    description: "Expert consultation for optimizing your printing workflow and reducing operational costs.",
    features: [
      "Process analysis",
      "Cost optimization",
      "Technology recommendations",
      "Implementation roadmap"
    ],
    price: "Starting at ₹12,000",
    tier: "Consulting",
    color: "orange"
  }
];

const additionalServices = [
  {
    icon: Target,
    title: "Training Programs",
    description: "Comprehensive training programs for your staff on equipment operation and maintenance."
  },
  {
    icon: Gem,
    title: "Quality Testing",
    description: "Professional quality testing and certification services for printed materials."
  },
  {
    icon: Cog,
    title: "System Integration",
    description: "Seamless integration with existing ERP and inventory management systems."
  },
  {
    icon: Users,
    title: "Project Management",
    description: "Dedicated project management for large-scale printing solution deployments."
  },
  {
    icon: Globe,
    title: "Multi-Location Setup",
    description: "Coordinated setup and standardization across multiple business locations."
  },
  {
    icon: Sparkles,
    title: "Innovation Lab",
    description: "Access to our innovation lab for testing new materials and printing technologies."
  }
];

export default function Services() {
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
              Our Services
            </h1>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Comprehensive printing solutions and services designed to meet your business needs. 
              From consultation to implementation, we provide end-to-end support for all your printing requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="px-4 mb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Core Service Offerings
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-${service.color}-100 border border-${service.color}-200`}>
                        <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`bg-${service.color}-50 text-${service.color}-700 border-${service.color}-200 font-bold`}
                      >
                        {service.tier}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-indigo-600">
                          {service.price}
                        </span>
                      </div>
                      
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white group-hover:scale-105 transition-transform duration-300">
                        Request Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="px-4 pb-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Additional Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-gray-50 border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-indigo-100 border border-indigo-200 group-hover:bg-indigo-200 transition-colors duration-300">
                        <service.icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Optimize Your Printing Solutions?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let our team of printing specialists design a comprehensive solution that meets 
              your specific business requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold"
              >
                Download Service Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}