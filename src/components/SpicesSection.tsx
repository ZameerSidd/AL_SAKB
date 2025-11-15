import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { allImages } from "../assets/img";


const spices = [
  {
    name: "Turmeric",
    image: allImages.turmeric,
    description: "Premium golden turmeric powder"
  },
  {
    name: "Cumin",
    image: allImages.aromatic,
    description: "Aromatic cumin seeds"
  },
  {
    name: "Coriander",
    image: allImages.coriander,
    description: "Fresh coriander seeds"
  },
  {
    name: "Black Pepper",
    image: allImages.blackPepper,
    description: "Bold black pepper"
  },
  {
    name: "Cardamom",
    image: allImages.cardamom,
    description: "Premium cardamom pods"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-[#0D5257] px-4">
            Premium Spices – Our Core Specialty
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#C8102E] to-[#0D5257] mx-auto mb-6 sm:mb-8" />
          <p className="max-w-2xl mx-auto text-[#5a7a7d] text-sm sm:text-base px-4">
            Experience the finest quality spices sourced from the best regions around the world.
            Each product is carefully selected to meet the highest standards of purity and flavor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {spices.map((spice, index) => (
            <motion.div
              key={spice.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={spice.image}
                  alt={spice.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6 text-center bg-white">
                <h3 className="mb-1 sm:mb-2 text-[#0D5257]">{spice.name}</h3>
                <p className="text-xs sm:text-sm text-[#5a7a7d]">{spice.description}</p>
              </div>
              {/* Improved Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#C8102E] via-[#C8102E]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 sm:pb-8">
                <span className="text-white px-4 py-2 rounded-full border-2 border-white backdrop-blur-sm bg-white/10 text-xs sm:text-sm">
                  View Details
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}