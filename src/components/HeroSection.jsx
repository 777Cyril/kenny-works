import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal-text').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-screen" id="hero" ref={ref}>
      <div className="max-w-2xl text-center">
        <div className="technical-label mb-8 reveal-text">Ref. 01 — Philosophy</div>
        <h1
          className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-tight reveal-text"
          style={{ transitionDelay: '100ms', fontWeight: 300 }}
        >
          <span className="italic block mb-2">Shaping</span>
          culture into stories<br />
          <span className="italic text-4xl md:text-6xl block mt-4" style={{ opacity: 0.8 }}>
            people actually feel.
          </span>
        </h1>
        <div
          className="mt-12 max-w-md mx-auto reveal-text text-center"
          style={{ transitionDelay: '200ms' }}
        >
          <p className="font-serif-display text-lg md:text-xl leading-relaxed text-gray-600 text-center">
            Bridging high culture and street-level desire.<br />
            Sophisticated, not pretentious.
          </p>
        </div>
      </div>
    </section>
  );
}
