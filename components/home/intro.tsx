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
                Building Excellence
                <br />
                <span className="text-gg-gold">Since Day One</span>
              </h2>
              <div className="mt-6 space-y-4 text-gg-warm-gray leading-relaxed">
                <p>
                  GroundGrace is a premier construction and interior solutions
                  company based in Kolkata, delivering end-to-end building
                  services that redefine quality and elegance.
                </p>
                <p>
                  From architectural planning to final handover, we manage every
                  stage with precision, ensuring your vision becomes a reality.
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
                    Experts & Craftsmen
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}