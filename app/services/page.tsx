import FadeInView from "@/components/shared/fade-in-view";

const serviceCategories = [
  { title: "Construction", items: ["Residential Construction", "Commercial Construction", "Turnkey Construction", "Structural Engineering"] },
  { title: "Architecture", items: ["Architectural Planning", "2D & 3D Floor Plans", "Elevation Design", "Structural Drawings"] },
  { title: "Interior Design", items: ["Complete Interior Solutions", "Luxury Interior Design", "Space Planning", "Furniture Layout"] },
  { title: "Home Solutions", items: ["Modular Kitchen", "Wardrobes", "False Ceiling", "Lighting Design", "Wall Finishes"] },
  { title: "Engineering", items: ["Electrical Works", "Plumbing", "Waterproofing", "HVAC Coordination"] },
  { title: "Outdoor & Renovation", items: ["Landscaping & Garden Design", "Outdoor Lighting", "Exterior Facade Design", "Home & Office Renovation", "Remodeling & Restoration"] },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 md:py-28 bg-gg-black text-white">
        <FadeInView>
          <div className="container text-center">
            <p className="text-gg-gold text-sm uppercase tracking-[0.2em] font-medium mb-4">Our Services</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Everything You Need
              <br />
              <span className="text-gg-gold">Under One Roof</span>
            </h1>
          </div>
        </FadeInView>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat, i) => (
              <FadeInView key={cat.title} delay={i * 0.1}>
                <div className="p-8 bg-gray-50 border border-black/5 h-full">
                  <h2 className="font-heading text-xl font-bold text-gg-black">{cat.title}</h2>
                  <ul className="mt-4 space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="text-sm text-gg-warm-gray flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gg-gold rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}