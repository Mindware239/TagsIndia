import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Zap, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const Innovation = () => {
  const innovations = [
    {
      title: "Smart RFID Integration",
      description: "Advanced RFID chips that store vast amounts of data while remaining compact and durable.",
      icon: <Zap className="w-8 h-8" />,
      features: ["256-bit encryption", "Water resistant", "10-year lifespan"]
    },
    {
      title: "Biometric Authentication",
      description: "Fingerprint and facial recognition technology embedded in our premium identification cards.",
      icon: <Target className="w-8 h-8" />,
      features: ["99.9% accuracy", "Anti-spoofing", "Instant verification"]
    },
    {
      title: "Blockchain Security",
      description: "Immutable digital identity verification backed by blockchain technology.",
      icon: <Lightbulb className="w-8 h-8" />,
      features: ["Tamper-proof", "Global verification", "Real-time updates"]
    }
  ];

  const stats = [
    { number: "98%", label: "Customer Satisfaction" },
    { number: "500+", label: "Patents Filed" },
    { number: "50+", label: "R&D Engineers" },
    { number: "24/7", label: "Tech Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Innovation Hub</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Innovation in ID Technology
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the future of identification with cutting-edge technology, advanced materials, and revolutionary design approaches.
          </p>
        </motion.div>

        {/* Innovation Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {innovation.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{innovation.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-center">
                    {innovation.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {innovation.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Innovation?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our cutting-edge technology can transform your identification needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="/products">
              <button className="flex-1 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="flex-1 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Innovation;