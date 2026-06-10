import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import DesignSection from "../components/Sections/DesignSection";
import ContactSection from "../components/Sections/ContactSection";
import TestimonialsSection from "../components/Sections/TestimonialsSection";
import ConceptsSection from "../components/Sections/ConceptsSection";
import FooterSection from "../components/Sections/FooterSection";

function Home() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <DesignSection />
      <ContactSection />
      <TestimonialsSection />
      <ConceptsSection />
      <FooterSection />
    </div>
  );
}

export default Home;
