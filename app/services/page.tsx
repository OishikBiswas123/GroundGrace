import type { Metadata } from "next";
import FadeInView from "@/components/shared/fade-in-view";

export const metadata: Metadata = {
  title: "Interior Design, Construction & Architecture Services | GroundGrace Kolkata",
  description:
    "GroundGrace offers comprehensive services: luxury interior design, residential & commercial construction, architectural planning, landscaping, and turnkey solutions in Kolkata, India.",
  openGraph: {
    title: "Services — Interior Design & Construction | GroundGrace Kolkata",
    description:
      "From structural engineering to luxury interiors — GroundGrace handles everything under one roof in Kolkata.",
  },
};

const groundServices = [
  { title: "Construction", items: ["Residential Construction", "Commercial Construction", "Turnkey Construction", "Structural Engineering"], image: "/Illustrations/Construction%20site/big%20const.jpg" },
  { title: "Engineering", items: ["Electrical Works", "Plumbing", "Waterproofing", "HVAC Coordination"], image: "/Illustrations/Construction%20site/Indoor%20cons.jpg" },
  { title: "Outdoor", items: ["Landscaping & Garden Design", "Outdoor Lighting", "Exterior Facade Design"], image: "/Illustrations/Construction%20site/appartment%20construction.jpg" },
];

const graceServices = [
  { title: "Architecture", items: ["Architectural Planning", "2D & 3D Floor Plans", "Elevation Design", "Structural Drawings"], image: "/Illustrations/House%20indoor%20images/modern%20interior.jpg" },
  { title: "Interior Design", items: ["Complete Interior Solutions", "Luxury Interior Design", "Space Planning", "Furniture Layout"], image: "/Illustrations/House%20indoor%20images/hall.jpg" },
  { title: "Home Solutions", items: ["Modular Kitchen", "Wardrobes", "False Ceiling", "Lighting Design", "Wall Finishes"], image: "/Illustrations/House%20indoor%20images/Kitchen%20(2).jpg" },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 md:py-28 bg-gg-black text-white">
        <FadeInView>
          <div className="container text-center">
            <p className="text-gg-gold text-sm uppercase tracking-[0.2em] font-medium mb-4">Our Services</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Everything You Need
              <br />
              <span className="text-gg-gold">Under One Roof</span>
            </h1>
            <p className="mt-4 text-white/60 text-sm max-w-lg mx-auto">
              From structural foundations to the finest interior finishes &mdash;
              we master every detail from root to roof.
            </p>
          </div>
        </FadeInView>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <FadeInView>
            <div className="relative overflow-hidden mb-12 p-10 md:p-14 bg-gg-black text-center">
              <div className="absolute inset-0">
                <img src="/Illustrations/Construction%20site/cons%20worker.jpg" alt="" className="w-full h-full object-cover opacity-20" />
              </div>
              <div className="relative z-10">
                <h2 className="font-heading text-2xl font-bold text-white">
                  <span className="text-gg-gold">Ground</span> &mdash; Structural Excellence
                </h2>
                <p className="text-white/60 text-sm mt-2">Raw strength, solid foundations, engineering integrity.</p>
              </div>
            </div>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {groundServices.map((cat, i) => (
              <FadeInView key={cat.title} delay={i * 0.1}>
                <div className="relative overflow-hidden p-8 bg-gray-50 border border-black/5 h-full group">
                  <div className="absolute inset-0">
                    <img src={cat.image} alt="" className="w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-heading text-xl font-bold text-gg-black">{cat.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="text-sm text-gg-warm-gray flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gg-gold rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView>
            <div className="relative overflow-hidden mb-12 p-10 md:p-14 bg-gg-black text-center">
              <div className="absolute inset-0">
                <img src="/Illustrations/House%20indoor%20images/green%20indoor.jpg" alt="" className="w-full h-full object-cover opacity-20" />
              </div>
              <div className="relative z-10">
                <h2 className="font-heading text-2xl font-bold text-white">
                  <span className="text-gg-gold">Grace</span> &mdash; Design Elegance
                </h2>
                <p className="text-white/60 text-sm mt-2">Artistic vision, premium finishes, luxury aesthetics.</p>
              </div>
            </div>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-8">
            {graceServices.map((cat, i) => (
              <FadeInView key={cat.title} delay={i * 0.1}>
                <div className="relative overflow-hidden p-8 bg-gray-50 border border-black/5 h-full group">
                  <div className="absolute inset-0">
                    <img src={cat.image} alt="" className="w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-heading text-xl font-bold text-gg-black">{cat.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="text-sm text-gg-warm-gray flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gg-gold rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}