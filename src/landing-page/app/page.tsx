import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Opportunity from "@/components/Opportunity";
import DevelopmentSummary from "@/components/DevelopmentSummary";
import ProForma from "@/components/ProForma";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import EmailCapture from "@/components/EmailCapture";
import AirbnbCarousel from "@/components/AirbnbCarousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
      <Opportunity />
      <DevelopmentSummary />
      <ProForma />
      <AirbnbCarousel />
      <Gallery />
      <Location />
      <EmailCapture />
      <Contact />
      <Footer />
    </main>
  );
}
