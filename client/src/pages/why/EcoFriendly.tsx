import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Recycle, Globe, Heart, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const EcoFriendly = () => {
  const ecoInitiatives = [
    {
      title: "Biodegradable Materials",
      description: "Our cards are made from plant-based plastics that naturally decompose without harming the environment.",
      icon: <Leaf className="w-8 h-8" />,
      impact: "90% reduction in plastic waste",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Recycled Components",
      description: "We use recycled metals and plastics in our RFID chips and card bodies whenever possible.",
      icon: <Recycle className="w-8 h-8" />,
      impact: "75% recycled materials used",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Carbon-Neutral Production",
      description: "Our manufacturing processes are powered by renewable energy with carbon offset programs.",
      icon: <Globe className="w-8 h-8" />,
      impact: "Zero net carbon emissions",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Sustainable Packaging",
      description: "All packaging materials are recyclable or compostable, reducing environmental impact.",
      icon: <Heart className="w-8 h-8" />,
      impact: "100% sustainable packaging",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const achievements = [
    { number: "50%", label: "Less Energy Consumption" },
    { number: "0", label: "Toxic Chemicals Used" },
    { number: "100%", label: "Renewable Energy" },
    { number: "25+", label: "Environmental Awards" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">Eco-Friendly</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Eco-Friendly Materials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to protecting our planet with sustainable practices, renewable materials, and environmentally responsible manufacturing.
          </p>
        </motion.div>

        {/* Eco Initiatives */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {ecoInitiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-r ${initiative.color} rounded-full flex items-center justify-center text-white mb-4`}>
                    {initiative.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{initiative.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">{initiative.impact}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {initiative.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Environmental Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 mb-16 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Environmental Impact</h2>
            <p className="text-xl opacity-90">Measurable results from our sustainability efforts</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={achievement.label}>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="opacity-90 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Environmental Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">ISO 14001</h3>
              <p className="text-gray-600 text-sm">Environmental Management System</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Energy Star</h3>
              <p className="text-gray-600 text-sm">Energy Efficient Manufacturing</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Carbon Trust</h3>
              <p className="text-gray-600 text-sm">Carbon Neutral Certification</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Join Our Green Mission</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose MINDWARE for identification solutions that protect both your identity and our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="/products">
              <button className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all flex items-center justify-center">
                View Eco Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="flex-1 bg-transparent border-2 border-green-500 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EcoFriendly;