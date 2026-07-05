import FadeInView from "@/components/shared/fade-in-view";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 md:py-28 bg-gg-black text-white overflow-hidden">
        <video
          src="/Illustrations/Villa%20Animations/Villia%20Interior%20animation%202.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gg-black/70" />
        <FadeInView>
          <div className="container text-center relative z-10">
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
                &ldquo;We don&apos;t just build walls; we create beautiful, living masterpieces.&rdquo;
              </p>
              <p>
                GroundGrace was founded by <strong className="text-gg-black">Sayan Bagchi</strong>{' '}with a singular vision
                &mdash; to redefine construction and interior design in India by fusing
                raw structural strength with elegant design aesthetics.
              </p>
              <p>
                The name itself tells our story: <strong className="text-gg-black">Ground</strong>{' '}for the
                heavy-duty engineering &mdash; excavation, foundations, blueprints,
                brick, and mortar. <strong className="text-gg-black">Grace</strong>{' '}for the high-end
                artistry &mdash; space planning, lighting, textures, and premium finishes.
                Locked together, they represent a promise: you hire one company to
                handle everything from start to finish.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="relative overflow-hidden min-h-[20rem]">
              <img src="/Illustrations/Construction%20site/Indoor%20cons.jpg" alt="Ground - Construction" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gg-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-heading text-2xl font-bold text-gg-gold">Ground</h3>
                <p className="text-white/70 text-sm mt-1">Raw strength, solid foundations, engineering integrity.</p>
              </div>
            </div>
            <div className="relative overflow-hidden min-h-[20rem]">
              <img src="/Illustrations/House%20indoor%20images/hall.jpg" alt="Grace - Design" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gg-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-heading text-2xl font-bold text-gg-gold">Grace</h3>
                <p className="text-white/70 text-sm mt-1">Artistic vision, premium finishes, luxury aesthetics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-3xl">
          <FadeInView>
            <div className="p-10 bg-gray-50 border border-black/5">
              <p className="text-gg-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">Founder&apos;s Message</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gg-black">Sayan Bagchi</h2>
              <div className="mt-6 space-y-4 text-gg-warm-gray leading-relaxed">
                <p>
                  I started GroundGrace because I saw a gap in the market &mdash; too many companies
                  focused either solely on construction or solely on design. Clients were forced to
                  coordinate between multiple vendors, leading to delays, miscommunication, and
                  compromised visions.
                </p>
                <p>
                  I wanted to create a brand that could do it all &mdash; with mastery. From the
                  deepest foundation work to the finest curtain fold, we manage every detail
                  with precision and care.
                </p>
                <p className="text-gg-black font-heading font-bold text-lg">
                  &ldquo;Let&apos;s master your dreams from root to roof.&rdquo;
                </p>
                <p>
                  That&apos;s not just a tagline. It&apos;s our operational promise.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            <FadeInView delay={0}>
              <div className="text-center">
                <h3 className="font-heading text-2xl font-bold text-gg-gold mb-4">Mission</h3>
                <p className="text-gg-warm-gray text-sm leading-relaxed">
                  To deliver exceptional building solutions that blend structural integrity
                  with design elegance, ensuring every project exceeds expectations.
                </p>
              </div>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div className="text-center">
                <h3 className="font-heading text-2xl font-bold text-gg-gold mb-4">Vision</h3>
                <p className="text-gg-warm-gray text-sm leading-relaxed">
                  To become India&apos;s most trusted name in luxury construction and interior design,
                  known for mastering every detail from root to roof.
                </p>
              </div>
            </FadeInView>
            <FadeInView delay={0.3}>
              <div className="text-center">
                <h3 className="font-heading text-2xl font-bold text-gg-gold mb-4">Values</h3>
                <p className="text-gg-warm-gray text-sm leading-relaxed">
                  Integrity, craftsmanship, innovation, and client-centricity &mdash; these
                  principles guide everything we do, from the ground up.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </div>
  );
}