import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We will get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-luxury-navy mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-luxury-navy/70 max-w-3xl mx-auto">
            Let's discuss how we can elevate your brand with our premium solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white rounded-2xl shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-luxury-navy mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-luxury-navy font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white border-luxury-navy/20 focus:border-luxury-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-luxury-navy font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white border-luxury-navy/20 focus:border-luxury-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-luxury-navy font-medium mb-2">
                      Company
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-white border-luxury-navy/20 focus:border-luxury-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-luxury-navy font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-white border-luxury-navy/20 focus:border-luxury-gold resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="luxury-button w-full py-3"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <Card className="bg-white rounded-2xl shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold text-luxury-navy mb-6">
                  Visit Our Atelier
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-luxury-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-luxury-navy">Address</p>
                      <p className="text-luxury-navy/70">
                        123 Luxury Lane, Fashion District
                        <br />
                        Paris, France 75001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-luxury-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-luxury-navy">Phone</p>
                      <p className="text-luxury-navy/70">+33 1 42 60 30 30</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-luxury-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-luxury-navy">Email</p>
                      <p className="text-luxury-navy/70">contact@luxetags.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="relative h-64 bg-gradient-to-br from-luxury-green to-luxury-navy rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                alt="Paris Location Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-luxury-navy/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Paris, France</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
