import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Shield, Building, ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "TechCorp International",
      industry: "Technology",
      challenge: "Managing 50,000+ employee IDs across 25 global offices",
      solution: "Implemented smart RFID employee cards with multi-level access control",
      results: [
        "95% reduction in security incidents",
        "40% faster employee onboarding",
        "$2M saved annually on security costs"
      ],
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      testimonial: "MINDWARE transformed our entire security infrastructure. The ROI was immediate and substantial.",
      person: "Sarah Chen, CTO"
    },
    {
      company: "MediHealth Systems",
      industry: "Healthcare",
      challenge: "Secure patient identification with HIPAA compliance",
      solution: "Biometric patient ID cards with encrypted medical data storage",
      results: [
        "100% HIPAA compliance achieved",
        "60% reduction in patient mix-ups",
        "99.9% data security uptime"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      testimonial: "Patient safety improved dramatically. The biometric accuracy is phenomenal.",
      person: "Dr. Michael Rodriguez, Chief Medical Officer"
    },
    {
      company: "EduPrime University",
      industry: "Education",
      challenge: "Student identification and campus access for 80,000 students",
      solution: "Multi-function student cards with payment, access, and tracking features",
      results: [
        "99% student adoption rate",
        "50% reduction in administrative overhead",
        "$5M increase in campus revenue"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      testimonial: "The campus transformation has been incredible. Students love the convenience.",
      person: "Jennifer Walsh, Director of Student Services"
    },
    {
      company: "RetailMax Chain",
      industry: "Retail",
      challenge: "Customer loyalty program across 500+ locations",
      solution: "Smart loyalty cards with real-time rewards and personalization",
      results: [
        "300% increase in customer retention",
        "45% boost in average transaction value",
        "$50M additional annual revenue"
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      testimonial: "Our customer engagement has never been higher. The personalization capabilities are game-changing.",
      person: "Mark Thompson, VP Marketing"
    }
  ];

  const metrics = [
    { number: "500+", label: "Success Stories" },
    { number: "99.2%", label: "Client Satisfaction" },
    { number: "$2.5B+", label: "Client Savings Generated" },
    { number: "150+", label: "Countries Served" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800">Success Stories</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Case Studies & Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients. See how MINDWARE has transformed identification systems across industries.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-12 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-full flex items-center justify-center text-white mr-6`}>
                        {study.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{study.company}</h3>
                        <Badge variant="outline">{study.industry}</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Results</h4>
                    <div className="space-y-3 mb-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center">
                          <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start">
                        <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                        <div>
                          <p className="text-gray-700 italic mb-2">"{study.testimonial}"</p>
                          <p className="text-sm text-gray-600 font-medium">- {study.person}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 mb-16 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">Measurable success across all verticals</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((metric, index) => (
              <div key={metric.label}>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {metric.number}
                </div>
                <div className="opacity-90 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "Healthcare", "Education", "Corporate", "Government", 
              "Retail", "Manufacturing", "Finance", "Hospitality"
            ].map((industry) => (
              <div key={industry} className="p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-800">{industry}</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results. Get a personalized consultation and see how MINDWARE can transform your identification needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="/contact">
              <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all flex items-center justify-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link href="/products">
              <button className="flex-1 bg-transparent border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-colors">
                View Solutions
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;