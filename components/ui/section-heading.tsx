interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  const cls = centered ? "mx-auto text-center" : "";
  return (
    <div className={"max-w-2xl " + cls}>
      <h2
        className={
          "font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight " +
          (light ? "text-white" : "text-gg-black")
        }
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={
            "mt-4 text-base md:text-lg leading-relaxed " +
            (light ? "text-white/70" : "text-gg-warm-gray")
          }
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}