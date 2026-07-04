import FadeInView from "@/components/shared/fade-in-view";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 md:py-28 bg-gg-black text-white">
        <FadeInView>
          <div className="container text-center">
            <p className="text-gg-gold text-sm uppercase tracking-[0.2em] font-medium mb-4">About Us</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Our Story
              <br />
              <span className="text-gg-gold">Our Passion</span>
            </h1>
          </div>
        </FadeInView>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-3xl">
          <FadeInView>
            <div className="space-y-6 text-gg-warm-gray leading-relaxed">
              <p className="text-lg text-gg-black font-heading font-semibold">
                GroundGrace was founded with a singular vision -- to redefine construction and interior design in India.
              </p>
              <p>
                Based in Kolkata, we bring together a team of passionate architects, engineers, and designers who believe that every space tells a story. Our mission is to help you tell yours.
              </p>
              <p>
                From luxury villas to commercial spaces, we approach every project with the same commitment to excellence, attention to detail, and dedication to craftsmanship.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            <FadeInView delay={0}>
              <div className="text-center">
                <h3 className="font-heading text-2xl font-bold text-gg-gold mb-4">Mission</h3>
                <p className="text-gg-warm-gray text-sm leading-relaxed">
                  To deliver exceptional building solutions that blend aesthetics with functionality, ensuring every project exceeds expectations.
                </p>
              </div>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div className="text-center">
                <h3 className="font-heading text-2xl font-bold text-gg-gold mb-4">Vision</h3>
                <p className="text-gg-warm-gray text-sm leading-relaxed">
                  To be India&apos;s most trusted name in luxury construction and interior design, known for innovation and excellence.
                </p>
              </div>
            </FadeInView>
            <FadeInView delay={0.3}>
              <div className="text-center">
                <h3 className="font-heading text-2xl font-bold text-gg-gold mb-4">Values</h3>
                <p className="text-gg-warm-gray text-sm leading-relaxed">
                  Integrity, craftsmanship, innovation, and client-centricity -- these principles guide everything we do.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </div>
  );
}