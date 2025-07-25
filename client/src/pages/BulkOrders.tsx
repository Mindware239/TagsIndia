import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Cpu, Radio, Printer } from "lucide-react";

const BulkOrders = () => {
  const services = [
    {
      icon: Package,
      title: "Custom Labels/Tags",
      description: "Tailored identification solutions for your specific needs",
      features: ["Custom designs", "Various materials", "Bulk pricing", "Fast turnaround"]
    },
    {
      icon: Cpu,
      title: "Tech Behind Tags",
      description: "Advanced technology integration for smart identification",
      features: ["Smart chips", "NFC technology", "QR codes", "Barcode systems"]
    },
    {
      icon: Radio,
      title: "RFID Solutions",
      description: "Complete RFID systems for tracking and identification",
      features: ["Long-range reading", "Inventory management", "Access control", "Asset tracking"]
    },
    {
      icon: Printer,
      title: "Smart Printing Devices",
      description: "Professional printing solutions for all your tag needs",
      features: ["High resolution", "Various formats", "Durable prints", "Professional quality"]
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
            Bulk Orders
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our comprehensive bulk ordering solutions. 
            From custom labels to smart printing devices, we've got everything you need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    Get Quote
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Place a Bulk Order?</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Contact our team for custom pricing and solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              Request Quote
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50">
              Download Catalog
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BulkOrders;