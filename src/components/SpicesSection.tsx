import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { allImages } from "../assets/img";

const spices = [
  {
    name: "Turmeric Powder",
    description: "Pure golden turmeric with powerful anti-inflammatory properties",
    image: allImages.turmeric,
  },
  {
    name: "Cardamom",
    description: "Aromatic green cardamom pods from premium plantations",
    image: allImages.cardamom,
  },
  {
    name: "Red Chili Powder",
    description: "Bold, vibrant heat from handpicked red chilies",
    image: allImages.RedChiliPowder,
  },
  {
    name: "Cumin Seeds",
    description: "Premium cumin for authentic earthy flavor",
    image: allImages.aromatic,
  },
  {
    name: "Coriander Seeds",
    description: "Fresh coriander seeds with citrusy, sweet notes",
    image: allImages.coriander,
  },
  {
    name: "Black Pepper",
    description: "Premium whole peppercorns for bold flavor",
    image: allImages.blackPepper,
  },
  {
    name: "Cinnamon Sticks",
    description: "Sweet, aromatic cinnamon from tropical regions",
    image: allImages.CinnamonSticks,
  },
  {
    name: "Whole Cloves",
    description: "Aromatic whole cloves for intense flavor",
    image: allImages.WholeCloves,
  }
];

export function SpicesSection() {
  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fef3f3] via-[#f9fafa] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-[#0D5257] px-4">
            Premium Spices – Our Core Specialty
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#C8102E] to-[#0D5257] mx-auto mb-6 sm:mb-8" />
          <p className="max-w-2xl mx-auto text-[#5a7a7d] text-sm sm:text-base px-4">
            Experience the finest quality spices sourced from the best regions around the world.
            Each product is carefully selected to meet the highest standards of purity and flavor.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {spices.map((spice, index) => (
            <motion.div
              key={spice.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer h-48 sm:h-64 md:h-72"
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img
                  src={spice.image}
                  alt={spice.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-end p-3 sm:p-4 md:p-6">
                <h3 className="text-white mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">
                  {spice.name}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm line-clamp-2">
                  {spice.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}