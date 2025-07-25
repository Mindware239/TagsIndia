import { motion } from "framer-motion";

export default function About() {
  const milestones = [
    {
      year: "1885",
      title: "Foundation",
      description: "LuxeTags founded in Paris by master craftsman Henri Dubois",
    },
    {
      year: "1920", 
      title: "Royal Recognition",
      description: "Awarded Royal Warrant by the British Royal Family",
    },
    {
      year: "1995",
      title: "Digital Innovation", 
      description: "Pioneer in luxury RFID tag technology",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Serving luxury brands worldwide with sustainable practices",
    },
  ];

  const team = [
    {
      name: "Antoine Dubois",
      role: "Master Craftsman",
      description: "4th generation artisan specializing in leather work",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Isabella Chen",
      role: "Design Director", 
      description: "Leading innovation in luxury tag design",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Marcus Thompson",
      role: "Technology Director",
      description: "Expert in RFID and smart tag solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-luxury-navy mb-6">
            Our Legacy
          </h1>
          <p className="text-xl text-luxury-navy/70 max-w-3xl mx-auto">
            A century of craftsmanship, innovation, and unwavering commitment to excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-serif font-bold text-luxury-navy mb-12 text-center">
            Milestones
          </h2>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-luxury-gold">
                    {milestone.year}
                  </span>
                </div>
                <div className="w-4 h-4 bg-luxury-gold rounded-full relative">
                  <div className="absolute inset-0 bg-luxury-gold rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-xl font-semibold text-luxury-navy">
                    {milestone.title}
                  </h3>
                  <p className="text-luxury-navy/70">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif font-bold text-luxury-navy mb-12 text-center">
            Our Artisans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold text-luxury-navy">
                  {member.name}
                </h3>
                <p className="text-luxury-gold font-medium">{member.role}</p>
                <p className="text-luxury-navy/70 mt-2">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brand Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-luxury-navy text-luxury-cream rounded-2xl p-12"
        >
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-luxury-cream/80">
                Uncompromising quality in every detail of our craftsmanship
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-luxury-cream/80">
                Responsible sourcing and eco-friendly production methods
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-luxury-cream/80">
                Blending traditional techniques with cutting-edge technology
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
