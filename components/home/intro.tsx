import FadeInView from "@/components/shared/fade-in-view";

export default function Intro() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeInView direction="left">
            <div>
              <p className="text-gg-gold text-sm uppercase tracking-[0.2em] font-medium mb-4">
                Who We Are
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gg-black leading-tight">
                The Duality of
                <br />
                <span className="text-gg-gold">Ground &amp; Grace</span>
              </h2>
              <div className="mt-6 space-y-4 text-gg-warm-gray leading-relaxed">
                <p>
                  <strong className="text-gg-black">Ground</strong> represents
                  the raw, heavy-duty engineering side of our company.
                  Excavation, solid foundations, blueprints, brick, and mortar
                  &mdash; building a structure from absolute nothing. It conveys
                  strength, trust, and structural integrity.
                </p>
                <p>
                  <strong className="text-gg-black">Grace</strong> represents
                  the artistic, high-end design side. Elegance, space planning,
                  lighting, textures, premium finishes, and luxury aesthetics.
                  It conveys beauty, sophistication, and a high-end lifestyle.
                </p>
                <p>
                  By locking them together into one name, we tell our clients:
                  we don&apos;t just build walls; we create beautiful, living
                  masterpieces.
                </p>
              </div>
            </div>
          </FadeInView>

          <FadeInView direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gg-black p-6 md:p-8">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-gg-gold">
                    50+
                  </div>
                  <div className="mt-2 text-sm text-white/60 uppercase tracking-wider">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-gray-50 p-6 md:p-8">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-gg-black">
                    10+
                  </div>
                  <div className="mt-2 text-sm text-gg-warm-gray uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gray-50 p-6 md:p-8">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-gg-black">
                    100%
                  </div>
                  <div className="mt-2 text-sm text-gg-warm-gray uppercase tracking-wider">
                    Client Satisfaction
                  </div>
                </div>
                <div className="bg-gg-black p-6 md:p-8">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-gg-gold">
                    200+
                  </div>
                  <div className="mt-2 text-sm text-white/60 uppercase tracking-wider">
                    Experts &amp; Craftsmen
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>

        <FadeInView direction="up" delay={0.3}>
          <div className="mt-16 md:mt-20 p-8 md:p-10 bg-gray-50 border border-black/5 text-center max-w-3xl mx-auto">
            <p className="text-gg-gold text-xs uppercase tracking-[0.2em] font-medium mb-2">
              Founder &amp; Visionary
            </p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-gg-black">
              Sayan Bagchi
            </h3>
            <p className="mt-3 text-gg-warm-gray text-sm leading-relaxed max-w-xl mx-auto">
              Founded GroundGrace with a singular vision &mdash; to redefine
              how India builds and designs. Every project is a reflection of
              his commitment to craftsmanship, precision, and the belief that
              your space should tell your story.
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}