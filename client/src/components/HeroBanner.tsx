import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerItems = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      title: 'Premium Thermal Transfer Ribbons',
      subtitle: 'High-quality printing solutions for all your labeling needs'
    },
    {
      type: 'image', 
      src: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      title: 'Professional Barcode Labels',
      subtitle: 'Durable labels for inventory management and tracking'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      title: 'PVC Cards & RFID Solutions',
      subtitle: 'Advanced identification and access control systems'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600',
      title: 'Garment Tags & Care Labels',
      subtitle: 'Professional textile labeling solutions'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [bannerItems.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerItems.length) % bannerItems.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerItems.length);
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-100">
      {/* Banner Items */}
      <div className="relative w-full h-full">
        {bannerItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="max-w-4xl px-6">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                    {item.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md">
                    {item.subtitle}
                  </p>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg">
                    Explore Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;