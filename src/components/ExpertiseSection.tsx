import { motion } from "motion/react";
import { Hammer, Wheat, Cog, Shirt, Smartphone, Car, Building } from "lucide-react";
import{ allImages} from "../assets/img";


const categories = [
  {
    icon: Hammer,
    title: "Metals & Minerals",
    color: "from-[#5a7a7d] to-[#0D5257]",
    image: allImages.MetalsAndMinerals
  },
  {
    icon: Wheat,
    title: "Agriculture & Food Products",
    color: "from-[#C8102E] to-[#a00d25]",
    image: allImages.AgricultureAndFoodProducts
  },
  {
    icon: Cog,
    title: "Machinery Equipment",
    color: "from-[#0D5257] to-[#083a3d]",
    image: allImages.MachineryEquipment
  },
  {
    icon: Shirt,
    title: "Textiles & Apparel",
    color: "from-[#C8102E] to-[#0D5257]",
    image: allImages.TextilesAndApparel
  },
  {
    icon: Smartphone,
    title: "Consumer Goods & Electronics",
    color: "from-[#1a6d73] to-[#0D5257]",
    image: allImages.ConsumerGoodsAndElectronics
  },
  {
    icon: Car,
    title: "Automotive & Spare Parts",
    color: "from-[#C8102E] to-[#8b0d20]",
    image: allImages.AutomotiveAndSpareParts
  },
  {
    icon: Building,
    title: "Construction Materials",
    color: "from-[#0D5257] to-[#C8102E]",
    image: allImages.ConstructionMaterials
  }
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-[#0D5257] px-4">
            Our Export–Import Expertise
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#C8102E] to-[#0D5257] mx-auto mb-6 sm:mb-8" />
          <p className="max-w-2xl mx-auto text-[#5a7a7d] text-sm sm:text-base px-4">
            Beyond spices, we provide comprehensive trading solutions across diverse industries,
            connecting global markets with quality products and reliable service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer h-48 sm:h-64 md:h-72"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center">
                <div className="p-3 sm:p-4 rounded-xl bg-white/20 backdrop-blur-sm mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-white text-xs sm:text-sm md:text-base drop-shadow-lg">{category.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}