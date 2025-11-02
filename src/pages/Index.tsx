import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero onContactClick={handleContactClick} />
      <About />
      <Services />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;