import { motion } from "motion/react";
import { Globe, Award, Truck } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Strong international network across continents"
  },
  {
    icon: Award,
    title: "Trusted Quality",
    description: "Premium products with certified standards"
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description: "Efficient and timely delivery worldwide"
  }
];

export function About() {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-[#0D5257]">About Us</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#C8102E] to-[#0D5257] mx-auto mb-6 sm:mb-8" />
          <p className="max-w-3xl mx-auto text-[#5a7a7d] text-sm sm:text-base px-4">
            AL SAKB EXPORT IMPORT LLP ensures quality, competitive pricing, and reliable global logistics.
            With a strong network of partners, we help businesses expand across international markets
            with ease and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#f9fafa] to-white border border-[#0D5257]/10 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#C8102E] to-[#0D5257] flex items-center justify-center mb-4 sm:mb-6">
                <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-[#0D5257]">{feature.title}</h3>
              <p className="text-[#5a7a7d] text-sm sm:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}