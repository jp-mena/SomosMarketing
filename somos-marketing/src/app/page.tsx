import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import HoneycombServices from "@/components/HoneycombServices";
import Methodology from "@/components/Methodology";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <HoneycombServices />
        <Methodology />
        <WhyUs />
        <Clients />
        <Contact />
      </main>
    </>
  );
}
