import { motion } from "motion/react";
import { Hammer, Wheat, Cog, Shirt, Smartphone, Car, Building } from "lucide-react";

const categories = [
  {
    icon: Hammer,
    title: "Metals & Minerals",
    color: "from-[#5a7a7d] to-[#0D5257]"
  },
  {
    icon: Wheat,
    title: "Agriculture & Food Products",
    color: "from-[#C8102E] to-[#a00d25]"
  },
  {
    icon: Cog,
    title: "Machinery Equipment",
    color: "from-[#0D5257] to-[#083a3d]"
  },
  {
    icon: Shirt,
    title: "Textiles & Apparel",
    color: "from-[#C8102E] to-[#0D5257]"
  },
  {
    icon: Smartphone,
    title: "Consumer Goods & Electronics",
    color: "from-[#1a6d73] to-[#0D5257]"
  },
  {
    icon: Car,
    title: "Automotive & Spare Parts",
    color: "from-[#C8102E] to-[#8b0d20]"
  },
  {
    icon: Building,
    title: "Construction Materials",
    color: "from-[#0D5257] to-[#C8102E]"
  }
];

export function ExpertiseSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
              className="group relative overflow-hidden rounded-xl p-6 sm:p-8 bg-gradient-to-br from-[#f9fafa] to-white border border-[#0D5257]/10 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${category.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-[#0D5257] text-sm sm:text-base">{category.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}