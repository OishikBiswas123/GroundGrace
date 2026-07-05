"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import FadeInView from "@/components/shared/fade-in-view";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Invalid email address";
    if (!subject.trim()) errs.subject = "Subject is required";
    if (!message.trim()) errs.message = "Message is required";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      await emailjs.send(
        "service_drlpe9h",
        "template_ip66pjt",
        { name, email, title: subject, message },
        "j_lVUGvXoX0suUG6a"
      );
      setSubmitted(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setErrors({ form: "Failed to send. Please try again later." });
    } finally {
      setSubmitting(false);
    }
  }

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
                {submitted ? (
                  <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">Message sent successfully! We&apos;ll get back to you soon.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-sm text-gg-gold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={`w-full px-4 py-3 bg-gray-50 border text-gg-black text-sm focus:outline-none focus:border-gg-gold transition-colors ${errors.name ? "border-red-400" : "border-black/5"}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`w-full px-4 py-3 bg-gray-50 border text-gg-black text-sm focus:outline-none focus:border-gg-gold transition-colors ${errors.email ? "border-red-400" : "border-black/5"}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className={`w-full px-4 py-3 bg-gray-50 border text-gg-black text-sm focus:outline-none focus:border-gg-gold transition-colors ${errors.subject ? "border-red-400" : "border-black/5"}`}
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                    <div>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your project..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={`w-full px-4 py-3 bg-gray-50 border text-gg-black text-sm focus:outline-none focus:border-gg-gold transition-colors resize-none ${errors.message ? "border-red-400" : "border-black/5"}`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    {errors.form && (
                      <p className="text-red-500 text-sm">{errors.form}</p>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className={`px-8 py-3.5 font-semibold text-sm uppercase tracking-widest transition-all ${
                        submitting
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-gg-gold text-gg-black hover:bg-gg-gold/90"
                      }`}
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </FadeInView>

            <FadeInView direction="right" delay={0.2}>
              <div>
                <h2 className="font-heading text-2xl font-bold text-gg-black mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <a href="https://maps.google.com/?q=Natagarh+Panihati+Kolkata+700113" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <MapPin size={20} className="text-gg-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gg-black text-sm">Address</h4>
                      <p className="text-gg-warm-gray text-sm mt-1 group-hover:text-gg-gold transition-colors">Natagarh, Panihati, Kolkata - 700113</p>
                    </div>
                  </a>
                  <a href="tel:+918981891586" className="flex items-start gap-4 group">
                    <Phone size={20} className="text-gg-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gg-black text-sm">Phone</h4>
                      <p className="text-gg-warm-gray text-sm mt-1 group-hover:text-gg-gold transition-colors">+91 89818 91586</p>
                    </div>
                  </a>
                  <a href="mailto:bagchisayan8@gmail.com" className="flex items-start gap-4 group">
                    <Mail size={20} className="text-gg-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gg-black text-sm">Email</h4>
                      <p className="text-gg-warm-gray text-sm mt-1 group-hover:text-gg-gold transition-colors">bagchisayan8@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/918981891586" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <MessageCircle size={20} className="text-gg-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gg-black text-sm">WhatsApp</h4>
                      <p className="text-gg-warm-gray text-sm mt-1 group-hover:text-gg-gold transition-colors">+91 89818 91586</p>
                    </div>
                  </a>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </div>
  );
}
