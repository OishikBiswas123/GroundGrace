import FadeInView from "@/components/shared/fade-in-view";

export default function Testimonials() {
  const testimonials = [
    { quote: "GroundGrace transformed our vision into a stunning reality. Their attention to detail and commitment to quality exceeded our expectations.", author: "Priya Sharma", role: "Homeowner, Kolkata" },
    { quote: "Professional, punctual, and passionate about their craft. Our office space has never looked better. Highly recommended!", author: "Rahul Mehta", role: "CEO, TechVentures" },
    { quote: "From the initial consultation to the final handover, the experience was seamless. True craftsmen with an eye for elegance.", author: "Ananya Bose", role: "Architect, Bose Designs" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <FadeInView>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gg-gold text-sm uppercase tracking-[0.2em] font-medium mb-4">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gg-black leading-tight">
              What Our
              <br />
              <span className="text-gg-gold">Clients Say</span>
            </h2>
          </div>
        </FadeInView>

        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeInView key={t.author} delay={i * 0.15}>
              <div className="p-8 bg-gray-50 border border-black/5">
                <div className="text-gg-gold text-4xl font-heading leading-none mb-4">&ldquo;</div>
                <p className="text-gg-warm-gray text-sm leading-relaxed">{t.quote}</p>
                <div className="mt-6 pt-4 border-t border-black/5">
                  <div className="font-heading font-bold text-gg-black text-sm">{t.author}</div>
                  <div className="text-xs text-gg-warm-gray mt-1">{t.role}</div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}