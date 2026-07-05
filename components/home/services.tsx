import { Building2, PencilRuler, Sofa, RotateCcw, Trees, Hammer } from "lucide-react";
import FadeInView from "@/components/shared/fade-in-view";

const services = [
  { icon: Building2, title: "Construction", description: "Residential, commercial, and turnkey construction with uncompromising quality.", image: "/Illustrations/Construction%20site/const.jpg" },
  { icon: PencilRuler, title: "Architecture", description: "Architectural planning, 2D/3D floor plans, elevation design, and structural drawings.", image: "/Illustrations/House%20indoor%20images/round%20stairs.jpg" },
  { icon: Sofa, title: "Interior Design", description: "Complete interior solutions, luxury design, space planning, and furniture layout.", image: "/Illustrations/House%20indoor%20images/modern%20interior.jpg" },
  { icon: Hammer, title: "Modular Solutions", description: "Modular kitchens, wardrobes, false ceilings, and custom joinery.", image: "/Illustrations/House%20indoor%20images/kitchen.jpg" },
  { icon: RotateCcw, title: "Renovation", description: "Home and office renovation, remodeling, and restoration services.", image: "/Illustrations/Construction%20site/Indoor%20cons%20(2).jpg" },
  { icon: Trees, title: "Landscaping", description: "Garden design, outdoor lighting, exterior facade, and landscape architecture.", image: "/Illustrations/House%20outdoor%20images/landscape.jpg" },
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container">
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gg-gold text-sm uppercase tracking-[0.2em] font-medium mb-4">What We Do</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gg-black leading-tight">
              Comprehensive
              <br />
              <span className="text-gg-gold">Building Solutions</span>
            </h2>
          </div>
        </FadeInView>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeInView key={service.title} delay={i * 0.1}>
                <div className="relative overflow-hidden group p-8 bg-white border border-black/5 hover:border-gg-gold/30 hover:shadow-lg transition-all h-full">
                  <div className="absolute inset-0">
                    <img src={service.image} alt="" className="w-full h-full object-cover opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
                  </div>
                  <div className="relative z-10">
                    <Icon size={32} className="text-gg-gold group-hover:scale-110 transition-transform" />
                    <h3 className="mt-6 font-heading text-xl font-bold text-gg-black">{service.title}</h3>
                    <p className="mt-3 text-sm text-gg-warm-gray leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}