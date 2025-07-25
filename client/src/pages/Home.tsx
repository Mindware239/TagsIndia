import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/HeroBanner";
import PopularProducts from "@/components/PopularProducts";
import { Printer, Tag, CreditCard, Shield, Truck, Award } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Printer,
      title: "Premium Printing Solutions",
      description: "High-quality thermal transfer ribbons and printing supplies for professional applications."
    },
    {
      icon: Tag,
      title: "Professional Labeling",
      description: "Comprehensive range of labels, tags, and stickers for all your business needs."
    },
    {
      icon: CreditCard,
      title: "RFID & Smart Cards",
      description: "Advanced identification solutions including PVC cards and RFID technology."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Industry-leading quality standards with rigorous testing and certification."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping across India with comprehensive logistics support."
    },
    {
      icon: Award,
      title: "Expert Support",
      description: "Professional technical support and consultation from our experienced team."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <HeroBanner />

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading Printing Solutions Provider Since 1997
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                TagsIndia is your trusted partner for premium printing solutions, specializing in 
                labels, tags, stickers, and ribbons. Based in New Delhi, we serve businesses 
                across India with comprehensive barcode printing, RFID solutions, and professional 
                labeling services.
              </p>
              <p className="text-gray-600 mb-8">
                Our product line features top brands and cutting-edge technology, ensuring 
                quality and reliability for industries ranging from retail and manufacturing 
                to healthcare and logistics.
              </p>
              <Link href="/about">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="TagsIndia Printing Solutions"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <PopularProducts />

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TagsIndia?
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive printing solutions with unmatched quality and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-gray-50 hover:bg-indigo-50 transition-colors duration-300"
              >
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Printing Solutions
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              From barcode printing to RFID implementation, we provide end-to-end solutions 
              for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Printer className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Barcode Printing</h3>
              <p className="text-indigo-100 mb-6">
                Professional barcode printing solutions with thermal transfer ribbons, 
                labels, and printers for inventory management and tracking.
              </p>
              <Link href="/services">
                <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors">
                  Learn More
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Tag className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Labeling Solutions</h3>
              <p className="text-indigo-100 mb-6">
                Custom labeling solutions for retail, manufacturing, and logistics 
                with high-quality materials and vibrant printing.
              </p>
              <Link href="/services">
                <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors">
                  Learn More
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">RFID & ID Cards</h3>
              <p className="text-indigo-100 mb-6">
                Advanced RFID solutions and PVC ID cards for access control, 
                identification, and smart tracking applications.
              </p>
              <Link href="/services">
                <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Printing Solutions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your printing needs and discover how TagsIndia 
              can help streamline your operations with our premium solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Get Quote
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Browse Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}