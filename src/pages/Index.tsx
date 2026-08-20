import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
