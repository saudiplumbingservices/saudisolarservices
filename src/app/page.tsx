import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import CitiesSection from "@/components/CitiesSection";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Gallery />
        <CitiesSection />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
