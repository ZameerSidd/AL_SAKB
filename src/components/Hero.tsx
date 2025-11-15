import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { allImages } from "../assets/img";


const carouselSlides = [
  {
    image: allImages.colorfulSpices,
    alt: "Colorful Spices",
    title: "Diverse Product Range",
    description: "A vibrant collection of aromatic spices and seasonings for global markets"
  },

  {
    image: allImages.traditionalExcellence,
    alt: "Spices Collection",
    title: "Traditional Excellence",
    description: "Preserving traditional methods while meeting international quality standards"
  },
  {
    image: allImages.organicSpices,
    alt: "Organic Spices",
    title: "Organic & Natural",
    description: "Certified organic herbs and spices for health-conscious consumers worldwide"
  },
  {
    image: allImages.exportShipping,
    alt: "Export Shipping",
    title: "Global Logistics Network",
    description: "Reliable shipping and delivery solutions to destinations across the world"
  },
  {
    image: allImages.spicesMarket,
    alt: "Spices Market",
    title: "Premium Quality Spices",
    description: "Sourced directly from the finest regions, our spices bring authentic flavors to your business"
  },
  {
    image: allImages.internationalTrade,
    alt: "International Trade",
    title: "Trusted Trading Partner",
    description: "Building strong partnerships with businesses across international markets"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#f4f8f8] via-white to-[#fef3f3]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0D5257 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Logo and Company Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 sm:mb-6"
          >
            <img
              src={allImages.logo}
              alt="AL SAKB Logo"
              className="h-12 sm:h-16 md:h-20 lg:h-24 mx-auto"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-[#0D5257] px-4 mb-4"
          >
            AL SAKB EXPORT IMPORT LLP
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#C8102E] to-[#0D5257] mx-auto mb-4"
          />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-[#5a7a7d] px-4"
          >
            Trusted global trading company specializing in the export and import of premium spices,
            engineering goods, and diverse commodities.
          </motion.p>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative mb-8 sm:mb-12"
        >
          {/* Carousel Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[21/9]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={carouselSlides[currentSlide].image}
                    alt={carouselSlides[currentSlide].alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Slide Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 lg:p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-white mb-2 sm:mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                        {carouselSlides[currentSlide].title}
                      </h3>
                      <p className="text-white/90 max-w-2xl text-sm sm:text-base md:text-lg">
                        {carouselSlides[currentSlide].description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-8 sm:w-12 bg-[#C8102E]'
                    : 'w-1.5 sm:w-2 bg-[#0D5257]/30 hover:bg-[#0D5257]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-[#C8102E] hover:bg-[#a00d25] text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full group text-sm sm:text-base"
            onClick={() => {
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Products
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}