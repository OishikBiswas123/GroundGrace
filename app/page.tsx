import Hero from "@/components/home/hero";
import Intro from "@/components/home/intro";
import Services from "@/components/home/services";
import WhyUs from "@/components/home/why-us";
import Testimonials from "@/components/home/testimonials";
import Process from "@/components/home/process";
import Cta from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <WhyUs />
      <Testimonials />
      <Process />
      <Cta />
    </>
  );
}
