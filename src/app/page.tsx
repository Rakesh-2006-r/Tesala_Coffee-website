import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MeetModelC from "@/components/MeetModelC";
import DesignedForPerformance from "@/components/DesignedForPerformance";
import Features from "@/components/Features";
import Specs from "@/components/Specs";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <MeetModelC />
      <DesignedForPerformance />
      <Features />
      <Specs />
      <Reviews />
      <Pricing />
      <Footer />
    </main>
  );
}
