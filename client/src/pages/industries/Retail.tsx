import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, CreditCard, Users, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const Retail = () => {
  const solutions = [
    {
      title: "Customer Loyalty Cards",
      description: "Smart cards that track purchases, offer personalized rewards, and enhance customer engagement.",
      icon: <Users className="w-8 h-8" />,
      features: ["Point accumulation", "Tier-based rewards", "Personalized offers", "Multi-store compatibility"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Employee ID Badges",
      description: "Secure access control and employee identification with time tracking capabilities.",
      icon: <CreditCard className="w-8 h-8" />,
      features: ["Access control", "Time tracking", "Department identification", "Emergency information"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Inventory Management Tags",
      description: "RFID-enabled tags for real-time inventory tracking and automated stock management.",
      icon: <ShoppingCart className="w-8 h-8" />,
      features: ["Real-time tracking", "Automated alerts", "Theft prevention", "Data analytics"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "VIP Customer Cards",
      description: "Premium identification for high-value customers with exclusive benefits and services.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: ["Premium design", "Exclusive access", "Concierge services", "Priority support"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    { metric: "45%", label: "Increase in Customer Retention" },
    { metric: "60%", label: "Faster Checkout Process" },
    { metric: "30%", label: "Reduction in Theft" },
    { metric: "85%", label: "Inventory Accuracy" }
  ];

  const clientLogos = [
    "RetailMax", "SuperMart", "FashionHub", "TechStore", "GroceryPlus", "StyleWorld"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800">Retail Solutions</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Retail & Supermarkets
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your retail operations with smart identification solutions that boost customer loyalty, streamline operations, and drive sales growth.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center text-white mb-4`}>
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600">
                    {solution.description}
                  </CardDescription>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.features.map((feature) => (
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

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 mb-16 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl opacity-90">Average improvements across retail clients</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {benefits.map((benefit, index) => (
              <div key={benefit.label}>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {benefit.metric}
                </div>
                <div className="opacity-90 font-medium">{benefit.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Case Study Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Case Study</Badge>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">RetailMax Success Story</h3>
              <p className="text-gray-600 mb-6">
                How we helped RetailMax increase customer retention by 300% and boost average transaction value by 45% through our comprehensive loyalty card system.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">300% increase in customer retention</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">45% boost in average transaction value</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">$50M additional annual revenue</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <ShoppingCart className="w-24 h-24 text-purple-500 mx-auto mb-4" />
              <p className="text-gray-600 italic">
                "MINDWARE's loyalty cards transformed our customer experience. The personalization capabilities are incredible."
              </p>
              <p className="text-gray-800 font-semibold mt-4">- Mark Thompson, VP Marketing</p>
            </div>
          </div>
        </motion.div>

        {/* Trusted Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Trusted by Leading Retailers</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {clientLogos.map((client) => (
              <div key={client} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                <div className="text-gray-600 font-semibold">{client}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ready to Transform Your Retail Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of retailers who have revolutionized their operations with MINDWARE's identification solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="/contact">
              <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link href="/products">
              <button className="flex-1 bg-transparent border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-colors">
                View Products
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Retail;