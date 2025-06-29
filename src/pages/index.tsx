import CareerflowHero from "@/components/CareerflowHero";
import CareerResults from "@/components/CareerResults";
import ComparisonSection from "@/components/ComparisonSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
        <CareerflowHero />
        <ComparisonSection />
        <CareerResults />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
