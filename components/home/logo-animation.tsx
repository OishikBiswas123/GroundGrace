export default function LogoAnimation() {
  return (
    <section className="bg-gg-black">
      <video
        src="/videos/logo-animation.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto"
      />
    </section>
  );
}