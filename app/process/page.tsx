import FadeInView from "@/components/shared/fade-in-view";

const steps = [
  { num: "01", title: "Consultation", desc: "We begin by understanding your vision, requirements, budget, and timeline. This is where your dream starts taking shape." },
  { num: "02", title: "Planning", desc: "Our team creates detailed architectural plans, 3D visualizations, and material selections tailored to your needs." },
  { num: "03", title: "Design", desc: "We refine every detail -- from floor plans and elevations to interior layouts, lighting, and finishes." },
  { num: "04", title: "Construction", desc: "With approved designs in hand, our skilled craftsmen begin construction using premium materials and techniques." },
  { num: "05", title: "Interior", desc: "Once the structure is ready, we transform the space with furnishings, fixtures, lighting, and personalized touches." },
  { num: "06", title: "Handover", desc: "We walk you through every detail of your finished space, ensuring complete satisfaction before handing over the keys." },
];

export default function ProcessPage() {
  return (
    <div className="pt-20">
      <section className="py-20 md:py-28 bg-gg-black text-white">
        <FadeInView>
          <div className="container text-center">
            <p className="text-gg-gold text-sm uppercase tracking-[0.2em] font-medium mb-4">Our Process</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              A Seamless Journey
              <br />
              <span className="text-gg-gold">from Start to Finish</span>
            </h1>
          </div>
        </FadeInView>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-4xl">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gg-gold/20 hidden md:block" />
            {steps.map((s, i) => (
              <FadeInView key={s.num} delay={i * 0.12} direction="left">
                <div className="relative flex gap-8 pb-16 last:pb-0">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gg-gold/10 border-2 border-gg-gold flex items-center justify-center font-heading font-bold text-gg-gold z-10">
                      {s.num}
                    </div>
                  </div>
                  <div className="flex-1 pt-3">
                    <span className="md:hidden font-heading text-3xl font-bold text-gg-gold/30 block mb-2">{s.num}</span>
                    <h3 className="font-heading text-2xl font-bold text-gg-black">{s.title}</h3>
                    <p className="mt-3 text-gg-warm-gray leading-relaxed">{s.desc}</p>
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