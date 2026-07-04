import { Shield, Gem, Clock, Award } from "lucide-react";
import FadeInView from "@/components/shared/fade-in-view";

const reasons = [
  { icon: Gem, title: "Premium Quality", description: "We use only the finest materials and work with skilled craftsmen to deliver exceptional results." },
  { icon: Shield, title: "End-to-End Service", description: "From concept to completion, we handle every aspect of your project so you do not have to." },
  { icon: Clock, title: "On-Time Delivery", description: "We respect your time. Our streamlined processes ensure projects are delivered as promised." },
  { icon: Award, title: "Award-Winning Team", description: "Our team of architects, engineers, and designers bring award-winning expertise to every project." },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-gg-black text-white">
      <div className="container">
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gg-gold text-sm uppercase tracking-[0.2em] font-medium mb-4">Why GroundGrace</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Built on
              <br />
              <span className="text-gg-gold">Trust &amp; Excellence</span>
            </h2>
          </div>
        </FadeInView>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <FadeInView key={reason.title} delay={i * 0.15} direction="up">
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gg-gold/10 border border-gg-gold/20">
                    <Icon size={28} className="text-gg-gold" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold">{reason.title}</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">{reason.description}</p>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}