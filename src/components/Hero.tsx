import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import{ allImages} from "../assets/img";

const carouselSlides = [
  {
    image: allImages.spicesMarket,
    alt: "Spices Market",
    title: "Premium Quality Spices",
    description: "Sourced directly from the finest regions, our spices bring authentic flavors to your business"
  },
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D5257] to-[#083a3d] pt-16 sm:pt-20">
      {/* Carousel Background - Full Screen */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={carouselSlides[currentSlide].image}
              alt={carouselSlides[currentSlide].alt}
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Top Section - Logo and Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center sm:text-center"
              >
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white px-4 mb-4 sm:mb-6 drop-shadow-lg"
            >
              {carouselSlides[currentSlide].title}
            </motion.h1>
                
              </motion.div>
            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-[#C8102E] to-white mx-auto mb-4 sm:mb-6"
            />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 px-4 mb-6 sm:mb-8 drop-shadow-lg"
            >
              Trusted global trading company specializing in premium spices,
              engineering goods, and diverse commodities.
            </motion.p>

            </AnimatePresence>


        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl"
          >
          
          </motion.div>
        </div>

        {/* Bottom Section - Slide Info */}
        <div className="relative px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <div className="max-w-7xl mx-auto">

            {/* Navigation Controls */}
            <div className="mt-6 sm:mt-8">
              {/* Carousel Indicators - Center */}
              <div className="flex justify-center gap-2">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'w-8 sm:w-12 bg-[#C8102E]'
                        : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
          </div>
        </div>
          {/* CTA Button */}
          <div className="flex justify-center">
  <Button
    size="lg"
    className="bg-[#C8102E] hover:bg-[#a00d25] text-white px-6 sm:px-10 py-5 sm:py-7 rounded-full group text-base sm:text-lg shadow-2xl"
    onClick={() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    Explore Products
    <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
  </Button>
</div>


        {/* Arrow Buttons - Left Center and Right Center */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );

  // return (
  //   <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D5257] to-[#083a3d] pt-16 sm:pt-20">
  //     {/* Carousel Background - Full Screen */}
  //     <div className="absolute inset-0">
  //       <AnimatePresence mode="wait">
  //         <motion.div
  //           key={currentSlide}
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0 }}
  //           transition={{ duration: 0.8 }}
  //           className="absolute inset-0"
  //         >
  //           <img
  //             src={carouselSlides[currentSlide].image}
  //             alt={carouselSlides[currentSlide].alt}
  //             className="w-full h-full object-cover"
  //           />
  //           {/* Dark Overlay for readability */}
  //           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
  //         </motion.div>
  //       </AnimatePresence>
  //     </div>
  //     {/* Content Container */}
  //     <div className="relative z-10 w-full h-full flex flex-col">

  //       {/* Arrow Buttons - Left Center and Right Center */}
  //       <button
  //         onClick={prevSlide}
  //         className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group z-10"
  //         aria-label="Previous slide"
  //       >
  //         <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7 text-white group-hover:scale-110 transition-transform" />
  //       </button>
  //       <button
  //         onClick={nextSlide}
  //         className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group z-10"
  //         aria-label="Next slide"
  //       >
  //         <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-white group-hover:scale-110 transition-transform" />
  //       </button>

        
  //       {/* Center Section - Slide Info */}
  //       <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
  //         <motion.div
  //           initial={{ opacity: 0, y: 30 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 0.8 }}
  //           className="text-center max-w-5xl"
  //         >
  //           <AnimatePresence mode="wait">
  //             <motion.div
  //               key={currentSlide}
  //               initial={{ opacity: 0, y: 20 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               exit={{ opacity: 0, y: -20 }}
  //               transition={{ duration: 0.5 }}
  //             >
  //               <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
  //                 {carouselSlides[currentSlide].title}
  //               </h3>
  //               <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
  //                 {carouselSlides[currentSlide].description}
  //               </p>
  //             </motion.div>
  //           </AnimatePresence>
  //         </motion.div>
  //       </div>

  //       {/* Bottom Section - Indicators and Button */}
  //       <div className="relative px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
  //         <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
  //           {/* Carousel Indicators - Center */}
  //           <div className="flex justify-center gap-2">
  //             {carouselSlides.map((_, index) => (
  //               <button
  //                 key={index}
  //                 onClick={() => setCurrentSlide(index)}
  //                 className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
  //                   currentSlide === index
  //                     ? 'w-8 sm:w-12 bg-[#C8102E]'
  //                     : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/60'
  //                 }`}
  //                 aria-label={`Go to slide ${index + 1}`}
  //               />
  //             ))}
  //           </div>

  //           {/* CTA Button */}
  //           <motion.div
  //             initial={{ opacity: 0, y: 30 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             transition={{ duration: 0.8, delay: 0.8 }}
  //           >
  //             <Button
  //               size="lg"
  //               className="bg-[#C8102E] hover:bg-[#a00d25] text-white px-6 sm:px-10 py-5 sm:py-7 rounded-full group text-base sm:text-lg shadow-2xl"
  //               onClick={() => {
  //                 document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  //               }}
  //             >
  //               Explore Products
  //               <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
  //             </Button>
  //           </motion.div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}