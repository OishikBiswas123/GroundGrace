import type { Metadata } from "next";
import Hero from "@/components/home/hero";
import Intro from "@/components/home/intro";
import LogoAnimation from "@/components/home/logo-animation";
import Services from "@/components/home/services";
import WhyUs from "@/components/home/why-us";
import Testimonials from "@/components/home/testimonials";
import Process from "@/components/home/process";
import Cta from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Luxury Interior Design & Construction in Kolkata | GroundGrace",
  description:
    "GroundGrace is Kolkata's premier interior design and construction company. Specializing in luxury villas, bungalows, residential & commercial spaces. From root to roof — we craft dream spaces with structural integrity and design elegance.",
  openGraph: {
    title: "Luxury Interior Design & Construction in Kolkata | GroundGrace",
    description:
      "Premium interior design and construction in Kolkata. Luxury villas, bungalows, and dream spaces crafted with structural Ground and design Grace.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <LogoAnimation />
      <Services />
      <WhyUs />
      <Testimonials />
      <Process />
      <Cta />
    </>
  );
}