import FadeInView from "@/components/shared/fade-in-view";

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <section className="py-20 md:py-28 bg-gg-black text-white">
        <FadeInView>
          <div className="container text-center">
            <p className="text-gg-gold text-sm uppercase tracking-[0.2em] font-medium mb-4">Portfolio</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Coming Soon
              <br />
              <span className="text-gg-gold">Stay Tuned</span>
            </h1>
            <p className="mt-6 text-white/60 text-base max-w-md mx-auto">
              We are crafting something extraordinary. Our project gallery will be live shortly.
            </p>
          </div>
        </FadeInView>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container text-center">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 rounded-full bg-gg-gold/10 flex items-center justify-center mx-auto">
              <span className="font-heading text-4xl text-gg-gold">GG</span>
            </div>
            <h2 className="mt-8 font-heading text-2xl font-bold text-gg-black">Projects Loading...</h2>
            <p className="mt-4 text-gg-warm-gray text-sm leading-relaxed">
              We are working on exciting projects that will be showcased here soon. Check back to see our latest work in residential, commercial, and interior design.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}