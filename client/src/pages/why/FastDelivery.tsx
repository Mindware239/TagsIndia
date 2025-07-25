import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, Zap, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const FastDelivery = () => {
  const deliveryFeatures = [
    {
      title: "24-Hour Rush Production",
      description: "Emergency orders processed and manufactured within 24 hours for critical business needs.",
      icon: <Clock className="w-8 h-8" />,
      time: "24 Hours",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Same-Day Local Delivery",
      description: "Orders placed before 2 PM delivered the same day within metro areas.",
      icon: <Zap className="w-8 h-8" />,
      time: "Same Day",
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Express Shipping Network",
      description: "Global network of shipping partners ensuring fastest possible delivery worldwide.",
      icon: <Truck className="w-8 h-8" />,
      time: "1-3 Days",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-Time Tracking",
      description: "Live tracking from production to delivery with SMS and email notifications.",
      icon: <MapPin className="w-8 h-8" />,
      time: "Live Updates",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const productionSteps = [
    {
      step: "01",
      title: "Order Processing",
      description: "Automated order validation and queue assignment",
      time: "5 minutes"
    },
    {
      step: "02", 
      title: "Design & Setup",
      description: "Automated design generation and production setup",
      time: "30 minutes"
    },
    {
      step: "03",
      title: "Manufacturing",
      description: "High-speed production with quality checks",
      time: "2-4 hours"
    },
    {
      step: "04",
      title: "Quality Control",
      description: "Automated testing and manual inspection",
      time: "30 minutes"
    },
    {
      step: "05",
      title: "Packaging & Shipping",
      description: "Secure packaging and immediate dispatch",
      time: "15 minutes"
    }
  ];

  const stats = [
    { number: "99.8%", label: "On-Time Delivery" },
    { number: "<4hrs", label: "Avg Production Time" },
    { number: "200+", label: "Global Delivery Partners" },
    { number: "24/7", label: "Production Capability" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-800">Lightning Fast</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Fast Production & Delivery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When time is critical, we deliver. Industry-leading speed without compromising quality or precision.
          </p>
        </motion.div>

        {/* Delivery Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {deliveryFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-white`}>
                      {feature.icon}
                    </div>
                    <Badge variant="outline" className="font-bold">{feature.time}</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Production Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Production Timeline</h2>
          <div className="space-y-8">
            {productionSteps.map((step, index) => (
              <div key={step.step} className="flex items-center">
                <div className="flex items-center flex-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-6">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  <Badge variant="secondary" className="ml-4">{step.time}</Badge>
                </div>
                {index < productionSteps.length - 1 && (
                  <div className="w-full h-px bg-gray-200 mt-8"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-8 mb-16 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Delivery Performance</h2>
            <p className="text-xl opacity-90">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="opacity-90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <Card className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <CardTitle>Money-Back Guarantee</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                If we don't meet our delivery promise, you get a full refund - no questions asked.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CheckCircle className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <CardTitle>Quality Assurance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Every rushed order goes through the same rigorous quality checks as standard orders.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CheckCircle className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <CardTitle>24/7 Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Round-the-clock customer support to track your order and address any concerns.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Need It Fast?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the fastest production and delivery in the industry without compromising on quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="/bulk-orders">
              <button className="flex-1 bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-blue-600 transition-all flex items-center justify-center">
                Rush Order Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="flex-1 bg-transparent border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors">
                Get Quote
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FastDelivery;