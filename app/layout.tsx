import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | GroundGrace",
    default: "GroundGrace — Luxury Interior Design & Construction in Kolkata",
  },
  description:
    "GroundGrace is Kolkata's premier interior design and construction company. Specializing in luxury villas, bungalows, residential & commercial spaces. Founded by Sayan Bagchi.",
  openGraph: {
    title: "GroundGrace — Luxury Interior Design & Construction in Kolkata",
    description:
      "Premium interior design and construction services in Kolkata. Luxury villas, bungalows, and dream spaces crafted with elegance.",
    url: "https://groundgrace.vercel.app",
    siteName: "GroundGrace",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-gg-black font-body antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "GroundGrace",
              founder: { "@type": "Person", name: "Sayan Bagchi" },
              description:
                "Luxury interior design and construction company in Kolkata. Specializing in luxury villas, bungalows, residential & commercial spaces.",
              url: "https://groundgrace.vercel.app",
              telephone: "+91 89818 91586",
              email: "bagchisayan8@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Natagarh, Panihati",
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                postalCode: "700113",
                addressCountry: "IN",
              },
              areaServed: [
                { "@type": "City", name: "Kolkata" },
                { "@type": "State", name: "West Bengal" },
                { "@type": "Country", name: "India" },
              ],
              sameAs: ["https://wa.me/918981891586"],
              knowsAbout: [
                "Luxury Interior Design",
                "Residential Construction",
                "Commercial Construction",
                "Architecture",
                "Villa Design",
                "Bungalow Construction",
                "Modular Kitchen",
                "Landscaping",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
