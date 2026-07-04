import Link from "next/link";
import FadeInView from "@/components/shared/fade-in-view";

export default function Cta() {
  return (
    <section className="py-20 md:py-28 bg-gg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#c9a84c10,_transparent_60%)]" />
      <FadeInView>
        <div className="container relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to Build
            <br />
            <span className="text-gg-gold">Your Dream Space?</span>
          </h2>
          <p className="mt-6 text-white/60 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Let&apos;s discuss your project. Schedule a free consultation with our team today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-gg-gold text-gg-black font-semibold text-sm uppercase tracking-widest hover:bg-gg-gold/90 transition-all">
              Get a Free Quote
            </Link>
            <Link href="/portfolio" className="px-8 py-3.5 border border-white/20 text-white font-semibold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
              See Our Work
            </Link>
          </div>
        </div>
      </FadeInView>
    </section>
  );
}