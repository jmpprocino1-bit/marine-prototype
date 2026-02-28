import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Gallery from "@/components/Gallery";
import Estimator from "@/components/Estimator";
import SeasonalInsights from "@/components/SeasonalInsights";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Trust />
        <Gallery />
        <Estimator />
        <SeasonalInsights />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
