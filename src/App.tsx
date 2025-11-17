import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { SpicesSection } from "./components/SpicesSection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <SpicesSection />
      <ExpertiseSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}