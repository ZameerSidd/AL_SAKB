import { motion } from "motion/react";
import { Award, DollarSign, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "High Quality Standards",
    description: "Certified products meeting international quality benchmarks and safety standards"
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Market-leading rates with transparent pricing and flexible payment terms"
  },
  {
    icon: Users,
    title: "Strong Global Network",
    description: "Established partnerships across continents for seamless trading operations"
  },
  {
    icon: Zap,
    title: "Fast & Reliable Shipping",
    description: "Efficient logistics ensuring timely delivery to destinations worldwide"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f9fafa] via-white to-[#fef3f3]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-[#0D5257]">Why Choose Us</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#C8102E] to-[#0D5257] mx-auto mb-6 sm:mb-8" />
          <p className="max-w-2xl mx-auto text-[#5a7a7d] text-sm sm:text-base px-4">
            We deliver excellence through quality products, competitive pricing, and exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-white border border-[#0D5257]/10 hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex p-3 sm:p-4 rounded-full bg-gradient-to-br from-[#C8102E] to-[#0D5257] mb-4 sm:mb-6"
                >
                  <benefit.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="mb-3 sm:mb-4 text-[#0D5257]">{benefit.title}</h3>
                <p className="text-[#5a7a7d] text-sm sm:text-base">{benefit.description}</p>

                {/* Animated Background Element */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#C8102E]/10 to-[#0D5257]/10 group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}