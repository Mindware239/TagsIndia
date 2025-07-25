import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Building, FileText, ArrowRight, CheckCircle, Lock } from "lucide-react";
import { Link } from "wouter";

const Government = () => {
  const solutions = [
    {
      title: "Secure Government ID Cards",
      description: "High-security identification cards for government employees with advanced encryption and biometric features.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Military-grade encryption", "Biometric authentication", "Multi-level access", "Tamper detection"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Citizen ID Programs",
      description: "National ID card systems with centralized database integration and nationwide compatibility.",
      icon: <Users className="w-8 h-8" />,
      features: ["National database integration", "Cross-agency compatibility", "Digital verification", "Privacy protection"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Facility Access Cards",
      description: "Secure access control for government buildings, military bases, and restricted facilities.",
      icon: <Building className="w-8 h-8" />,
      features: ["Zone-based access", "Time restrictions", "Visitor management", "Audit trail"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Document Authentication",
      description: "Smart documents and certificates with embedded security features and digital verification.",
      icon: <FileText className="w-8 h-8" />,
      features: ["Digital signatures", "Holographic security", "Blockchain verification", "Anti-counterfeiting"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const securityFeatures = [
    {
      title: "Multi-Layer Security",
      description: "Combined physical and digital security features",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Biometric Integration",
      description: "Fingerprint, iris, and facial recognition support",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Real-Time Monitoring",
      description: "24/7 system monitoring and threat detection",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const compliance = [
    "FIPS 140-2 Level 3 Certified",
    "Common Criteria EAL5+ Evaluated",
    "ISO 27001 Compliant",
    "NIST Cybersecurity Framework",
    "Government Security Standards",
    "International Privacy Laws"
  ];

  const stats = [
    { number: "50+", label: "Government Agencies" },
    { number: "99.99%", label: "System Uptime" },
    { number: "Zero", label: "Security Breaches" },
    { number: "24/7", label: "Security Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">Government Solutions</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Government & Corporate
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure, compliant, and scalable identification solutions designed for government agencies and large corporations with the highest security requirements.
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
                  <div className="grid grid-cols-1 gap-2">
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

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Advanced Security Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 mb-16 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Compliance</h2>
            <p className="text-xl opacity-90">Meeting the highest security standards</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {compliance.map((cert) => (
              <div key={cert} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <Card key={stat.label} className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Case Study Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Success Story</Badge>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Department of Defense Implementation</h3>
              <p className="text-gray-600 mb-6">
                How we secured 500,000+ military personnel IDs across 200+ facilities with zero security incidents and 99.99% system uptime.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">500,000+ secure IDs deployed</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Zero security breaches in 5 years</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">99.99% system availability</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <Building className="w-24 h-24 text-blue-500 mx-auto mb-4" />
              <p className="text-gray-600 italic">
                "MINDWARE's security solutions exceed our most stringent requirements. Their reliability is unmatched."
              </p>
              <p className="text-gray-800 font-semibold mt-4">- General Patricia Hayes, DoD</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Secure Your Organization</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Protect your organization with the most secure identification solutions available. Our government-grade security meets the highest compliance standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="/contact">
              <button className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all flex items-center justify-center">
                Request Security Briefing
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link href="/products">
              <button className="flex-1 bg-transparent border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors">
                View Solutions
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Government;