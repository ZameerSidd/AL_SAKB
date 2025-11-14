import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const spices = [
  {
    name: "Turmeric",
    image: "https://images.unsplash.com/photo-1698556735172-1b5b3cd9d2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJtZXJpYyUyMHNwaWNlJTIwcG93ZGVyfGVufDF8fHx8MTc2MzEwNzE4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Premium golden turmeric powder"
  },
  {
    name: "Cumin",
    image: "https://images.unsplash.com/photo-1600791102844-208e695205f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdW1pbiUyMHNlZWRzJTIwc3BpY2V8ZW58MXx8fHwxNzYzMTM1NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Aromatic cumin seeds"
  },
  {
    name: "Coriander",
    image: "https://images.unsplash.com/photo-1608797178894-bf7c596932da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JpYW5kZXIlMjBzZWVkcyUyMHNwaWNlfGVufDF8fHx8MTc2MzEzNTU4NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Fresh coriander seeds"
  },
  {
    name: "Black Pepper",
    image: "https://images.unsplash.com/photo-1649951806971-ad0e00408773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBlcHBlciUyMHNwaWNlfGVufDF8fHx8MTc2MzEwMDMwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Bold black pepper"
  },
  {
    name: "Cardamom",
    image: "https://images.unsplash.com/photo-1592501054695-053ef5884468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkYW1vbSUyMHNwaWNlJTIwcG9kc3xlbnwxfHx8fDE3NjMwNDIwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
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