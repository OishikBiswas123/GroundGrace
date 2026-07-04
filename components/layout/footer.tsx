import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Services: [
    { href: "/services", label: "Construction" },
    { href: "/services", label: "Architecture" },
    { href: "/services", label: "Interior Design" },
    { href: "/services", label: "Renovation" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/process", label: "Our Process" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gg-black text-white">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="relative block w-64 h-20">
              <Image
                src="/images/logo.png"
                alt="GroundGrace"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-md">
              Premium construction and interior solutions. We transform your
              vision into reality with unparalleled craftsmanship and elegance.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gg-gold mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} GroundGrace. All rights reserved.</p>
          <p>Kolkata, India</p>
        </div>
      </div>
    </footer>
  );
}