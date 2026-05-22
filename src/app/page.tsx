import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import References from "@/components/References";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Calculator />
        <References />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
