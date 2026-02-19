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
          style={{ transitionDelay: '100ms', fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          <span className="italic block mb-2" style={{ fontWeight: 300 }}>Shaping</span>
          <span className="block" style={{ fontWeight: 300 }}>culture into stories</span>
          <span className="italic text-4xl md:text-6xl block mt-4" style={{ opacity: 0.8, fontWeight: 300 }}>
            people actually feel.
          </span>
        </h1>
        <div
          className="mt-12 reveal-text"
          style={{ transitionDelay: '200ms', textAlign: 'center', width: '100%' }}
        >
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            textAlign: 'center',
            fontSize: '1.125rem',
            lineHeight: '1.75',
            color: '#4B5563',
            width: '100%',
          }}>
            Bridging high culture and street-level desire.<br />
            Sophisticated, not pretentious.
          </p>
        </div>
      </div>
    </section>
  );
}
