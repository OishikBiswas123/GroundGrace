"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import FadeInView from "@/components/shared/fade-in-view";
import { projects, categories } from "@/data/projects";
import type { Project } from "@/data/projects";

function VideoTile({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = observerRef.current;
    if (!el || !videoRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={observerRef} className="absolute inset-0">
      <video
        ref={videoRef}
        src={project.image}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="py-20 md:py-28 bg-gg-black text-white">
        <FadeInView>
          <div className="container text-center">
            <p className="text-gg-gold text-sm uppercase tracking-[0.2em] font-medium mb-4">Our Portfolio</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Crafting Excellence
              <br />
              <span className="text-gg-gold">in Every Project</span>
            </h1>
          </div>
        </FadeInView>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-medium uppercase tracking-wider border transition-colors ${
                  activeCategory === cat
                    ? "border-gg-gold text-gg-gold bg-gg-gold/5"
                    : "border-black/10 text-gg-warm-gray hover:border-gg-gold hover:text-gg-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((p, i) => (
              <FadeInView key={p.title + i} delay={Math.min(i * 0.05, 0.3)}>
                <button
                  onClick={() => setSelectedProject(p)}
                  className="group relative w-full overflow-hidden bg-gray-100 block text-left"
                >
                  <div className="relative w-full" style={{ minHeight: "12rem" }}>
                    {p.type === "video" ? (
                      <>
                        <VideoTile project={p} />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                          <h3 className="text-white font-heading font-bold text-sm">{p.title}</h3>
                          <p className="text-white/70 text-xs">{p.category} &middot; {p.location}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                          <h3 className="text-white font-heading font-bold text-sm">{p.title}</h3>
                          <p className="text-white/70 text-xs">{p.category} &middot; {p.location}</p>
                        </div>
                      </>
                    )}
                  </div>
                </button>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 text-white/60 hover:text-white z-10"
          >
            <X size={32} />
          </button>

          {selectedProject.type === "video" ? (
            <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <video
                src={selectedProject.image}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-h-[80vh]"
              />
            </div>
          ) : (
            <div className="relative w-full max-w-4xl aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          )}

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white">
            <h3 className="font-heading font-bold text-lg">{selectedProject.title}</h3>
            <p className="text-white/60 text-sm">{selectedProject.category} &middot; {selectedProject.location}</p>
          </div>
        </div>
      )}
    </div>
  );
}