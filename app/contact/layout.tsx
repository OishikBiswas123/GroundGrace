import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Free Consultation | GroundGrace Interior Design & Construction Kolkata",
  description:
    "Ready to build your dream space? Contact GroundGrace in Kolkata for a free consultation. Call +91 89818 91586 or email bagchisayan8@gmail.com. Natagarh, Panihati, Kolkata - 700113.",
  openGraph: {
    title: "Contact GroundGrace | Free Consultation Kolkata",
    description:
      "Get in touch with GroundGrace for luxury interior design and construction in Kolkata. Free consultation available.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
