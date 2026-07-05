import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Luxury Villas, Interiors & Construction Projects | GroundGrace Kolkata",
  description:
    "Explore GroundGrace's portfolio of luxury villas, bungalows, residential projects, commercial spaces, and interior design work in Kolkata, West Bengal.",
  openGraph: {
    title: "Portfolio — Our Projects | GroundGrace Kolkata",
    description:
      "Browse GroundGrace's gallery of luxury villas, modern interiors, and construction projects across Kolkata.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
