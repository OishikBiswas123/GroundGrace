import FadeInView from "@/components/shared/fade-in-view";

const steps = [
  { step: "01", title: "Consultation", desc: "We discuss your vision, requirements, and budget." },
  { step: "02", title: "Planning", desc: "Detailed architectural plans, 3D visualization, and material selection." },
  { step: "03", title: "Design", desc: "Refining designs with precision -- interiors, elevations, and layouts." },
  { step: "04", title: "Construction", desc: "Execution begins with skilled craftsmanship and quality materials." },
  { step: "05", title: "Interior", desc: "Furnishings, finishes, lighting, and final touches." },
  { step: "06", title: "Handover", desc: "A complete walkthrough and delivery of your dream space." },
];

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container">
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gg-gold text-sm uppercase tracking-[0.2em] font-medium mb-4">Our Process</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gg-black leading-tight">
              From Vision
              <br />
              <span className="text-gg-gold">to Reality</span>
            </h2>
          </div>
        </FadeInView>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <FadeInView key={s.step} delay={i * 0.1}>
              <div className="relative p-8 bg-white border border-black/5">
                <span className="font-heading text-5xl font-bold text-gg-gold/20 absolute top-4 right-6 leading-none">{s.step}</span>
                <div className="w-10 h-10 rounded-full bg-gg-gold/10 flex items-center justify-center font-heading font-bold text-gg-gold text-sm">{s.step}</div>
                <h3 className="mt-4 font-heading text-xl font-bold text-gg-black">{s.title}</h3>
                <p className="mt-2 text-sm text-gg-warm-gray leading-relaxed">{s.desc}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}