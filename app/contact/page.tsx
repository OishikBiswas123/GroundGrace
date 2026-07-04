import FadeInView from "@/components/shared/fade-in-view";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-20 md:py-28 bg-gg-black text-white">
        <FadeInView>
          <div className="container text-center">
            <p className="text-gg-gold text-sm uppercase tracking-[0.2em] font-medium mb-4">Get in Touch</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Let&apos;s Discuss
              <br />
              <span className="text-gg-gold">Your Project</span>
            </h1>
          </div>
        </FadeInView>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <FadeInView direction="left">
              <div>
                <h2 className="font-heading text-2xl font-bold text-gg-black mb-6">Send Us a Message</h2>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-50 border border-black/5 text-gg-black text-sm focus:outline-none focus:border-gg-gold transition-colors" />
                    <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-gray-50 border border-black/5 text-gg-black text-sm focus:outline-none focus:border-gg-gold transition-colors" />
                  </div>
                  <input type="text" placeholder="Subject" className="w-full px-4 py-3 bg-gray-50 border border-black/5 text-gg-black text-sm focus:outline-none focus:border-gg-gold transition-colors" />
                  <textarea rows={5} placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-gray-50 border border-black/5 text-gg-black text-sm focus:outline-none focus:border-gg-gold transition-colors resize-none" />
                  <button type="submit" className="px-8 py-3.5 bg-gg-gold text-gg-black font-semibold text-sm uppercase tracking-widest hover:bg-gg-gold/90 transition-all">Send Message</button>
                </form>
              </div>
            </FadeInView>

            <FadeInView direction="right" delay={0.2}>
              <div>
                <h2 className="font-heading text-2xl font-bold text-gg-black mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-gg-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gg-black text-sm">Address</h4>
                      <p className="text-gg-warm-gray text-sm mt-1">Natagarh, Panihati, Kolkata - 700113</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone size={20} className="text-gg-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gg-black text-sm">Phone</h4>
                      <p className="text-gg-warm-gray text-sm mt-1">+91 89818 91586</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail size={20} className="text-gg-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gg-black text-sm">Email</h4>
                      <p className="text-gg-warm-gray text-sm mt-1">bagchisayan8@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MessageCircle size={20} className="text-gg-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gg-black text-sm">WhatsApp</h4>
                      <p className="text-gg-warm-gray text-sm mt-1">+91 89818 91586</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <h3 className="font-heading font-bold text-gg-black mb-4">Office Hours</h3>
                  <div className="text-sm text-gg-warm-gray space-y-1">
                    <p>Monday -- Saturday: 10:00 AM -- 7:00 PM</p>
                    <p>Sunday: By appointment</p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </div>
  );
}