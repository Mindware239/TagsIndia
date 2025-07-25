import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Users, FileText, ArrowRight, CheckCircle, Activity } from "lucide-react";
import { Link } from "wouter";

const Healthcare = () => {
  const solutions = [
    {
      title: "Patient ID Wristbands",
      description: "HIPAA-compliant patient identification with embedded medical data and emergency information.",
      icon: <Heart className="w-8 h-8" />,
      features: ["HIPAA compliant", "Emergency data", "Allergy alerts", "Medical history"],
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Staff Credentials", 
      description: "Secure identification for medical professionals with role-based access and certification tracking.",
      icon: <Users className="w-8 h-8" />,
      features: ["Role-based access", "Certification tracking", "Department clearance", "Emergency protocols"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Visitor Management",
      description: "Temporary identification for visitors with time-limited access and location tracking.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Time-limited access", "Location tracking", "Health screening", "Contact tracing"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Medical Records Cards",
      description: "Secure digital storage of patient records with encrypted access and audit trails.",
      icon: <FileText className="w-8 h-8" />,
      features: ["Encrypted storage", "Audit trails", "Multi-provider access", "Emergency retrieval"],
      color: "from-purple-500 to-violet-500"
    }
  ];

  const compliance = [
    "HIPAA Compliant",
    "FDA Approved Materials", 
    "ISO 13485 Certified",
    "IEC 62304 Medical Software",
    "GDPR Privacy Protection",
    "21 CFR Part 820 Quality"
  ];

  const benefits = [
    { metric: "99.9%", label: "Patient ID Accuracy" },
    { metric: "60%", label: "Faster Patient Check-in" },
    { metric: "Zero", label: "HIPAA Violations" },
    { metric: "85%", label: "Reduction in Medical Errors" }
  ];

  const hospitalPartners = [
    "Mayo Clinic", "Johns Hopkins", "Cleveland Clinic", "Mass General", "UCSF Medical", "Cedars-Sinai"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">Healthcare Solutions</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Healthcare & Medical
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            HIPAA-compliant identification solutions designed for hospitals, clinics, and medical facilities with patient safety as the top priority.
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

        {/* Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Healthcare Compliance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {compliance.map((cert) => (
              <div key={cert} className="bg-gray-50 rounded-lg p-4 text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <span className="font-medium text-gray-800">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-red-500 to-blue-500 rounded-2xl p-8 mb-16 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Patient Safety Results</h2>
            <p className="text-xl opacity-90">Measurable improvements in healthcare outcomes</p>
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

        {/* Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Case Study</Badge>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">MediHealth Systems Success</h3>
              <p className="text-gray-600 mb-6">
                How we achieved 100% HIPAA compliance and eliminated patient mix-ups at a 500-bed hospital system serving 2 million patients annually.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">100% HIPAA compliance achieved</span>
                </div>
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">60% reduction in patient mix-ups</span>
                </div>
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">99.9% data security uptime</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <Heart className="w-24 h-24 text-red-500 mx-auto mb-4" />
              <p className="text-gray-600 italic">
                "Patient safety improved dramatically. The biometric accuracy is phenomenal and the HIPAA compliance is seamless."
              </p>
              <p className="text-gray-800 font-semibold mt-4">- Dr. Michael Rodriguez, Chief Medical Officer</p>
            </div>
          </div>
        </motion.div>

        {/* Hospital Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Trusted by Leading Medical Centers</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {hospitalPartners.map((hospital) => (
              <div key={hospital} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                <div className="text-gray-600 font-semibold text-sm">{hospital}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Protect Your Patients</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ensure patient safety and HIPAA compliance with our medical-grade identification solutions designed specifically for healthcare environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="/contact">
              <button className="flex-1 bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-blue-600 transition-all flex items-center justify-center">
                Schedule HIPAA Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link href="/products">
              <button className="flex-1 bg-transparent border-2 border-red-500 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-colors">
                View Medical Solutions
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Healthcare;