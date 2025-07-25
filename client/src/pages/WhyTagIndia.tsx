import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Leaf, Zap, Award } from "lucide-react";

const WhyTagIndia = () => {
  const reasons = [
    {
      icon: Lightbulb,
      title: "Innovation in ID",
      description: "Cutting-edge technology meets creative design solutions",
      features: [
        "Latest RFID technology",
        "Smart chip integration", 
        "AI-powered solutions",
        "Future-ready designs"
      ]
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Materials",
      description: "Sustainable practices for a better tomorrow",
      features: [
        "Recycled materials",
        "Biodegradable options",
        "Carbon-neutral production",
        "Green certifications"
      ]
    },
    {
      icon: Zap,
      title: "Fast Production & Delivery",
      description: "Quick turnaround without compromising quality",
      features: [
        "24-48 hour production",
        "Express shipping options",
        "Real-time tracking",
        "Same-day delivery available"
      ]
    },
    {
      icon: Award,
      title: "Case Studies / Success Stories",
      description: "Proven results across diverse industries",
      features: [
        "500+ successful projects",
        "99% client satisfaction",
        "Industry recognition",
        "Proven ROI improvements"
      ]
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Clients" },
    { number: "50K+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Why Choose MINDWARE?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what sets us apart in the identification solutions industry. 
            Innovation, sustainability, speed, and proven results.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">{reason.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {reason.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {reason.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Experience the Difference?</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Join thousands of satisfied customers who trust MINDWARE for their identification needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50">
              View Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyTagIndia;