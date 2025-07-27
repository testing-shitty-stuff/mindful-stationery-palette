import { Hero } from "@/components/Hero";
import { BundleShowcase } from "@/components/BundleShowcase";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BundleShowcase />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
