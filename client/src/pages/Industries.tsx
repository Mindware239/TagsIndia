import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hospital, GraduationCap, Calendar, Store, Building } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Hospital,
      title: "Hospitals",
      description: "Medical identification and patient management solutions",
      features: ["Patient wristbands", "Medical equipment tags", "Staff ID badges", "Asset tracking"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: GraduationCap,
      title: "Schools & Colleges",
      description: "Educational institution identification systems",
      features: ["Student ID cards", "Staff badges", "Visitor management", "Library systems"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calendar,
      title: "Events & Conferences",
      description: "Professional event management and identification",
      features: ["Conference badges", "Access control", "Networking tags", "VIP identification"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Store,
      title: "Retail & Supermarkets",
      description: "Retail operations and inventory management",
      features: ["Product labels", "Inventory tags", "Price tags", "Security labels"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Building,
      title: "Government & Corporate",
      description: "Official identification and security solutions",
      features: ["Employee badges", "Security access", "Official IDs", "Document tags"],
      color: "from-orange-500 to-amber-500"
    }
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
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing specialized identification solutions across diverse industries. 
            From healthcare to education, we understand your unique requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${industry.color} rounded-full flex items-center justify-center mb-4`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">{industry.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full bg-gradient-to-r ${industry.color} hover:opacity-90`}>
                    Learn More
                  </Button>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Don't See Your Industry?</h2>
          <p className="text-gray-600 mb-6 text-lg">
            We work with businesses across all sectors. Contact us to discuss your specific requirements.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
            Contact Our Experts
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Industries;