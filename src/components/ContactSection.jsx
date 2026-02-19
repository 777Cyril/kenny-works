import { useEffect, useState } from 'react';

export default function ContactSection() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const options = { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: false };
      setTime(new Date().toLocaleTimeString('en-US', options) + ' EST');
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section-screen" id="contact" style={{ backgroundColor: '#DDDCD7' }}>
      <div className="text-center">
        <div className="technical-label mb-8">Ref. 04 — Correspondence</div>

        <a href="mailto:kenny@goodsandobjects.com" className="group block" style={{ textDecoration: 'none' }}>
          <h2 className="font-serif-display text-6xl md:text-8xl italic text-gray-800 group-hover:text-black transition-colors duration-300">
            Get in touch
          </h2>
          <div className="h-px w-0 bg-black mx-auto mt-2 transition-all duration-500 group-hover:w-1/3" />
        </a>

        <div className="mt-16 grid grid-cols-2 gap-8 max-w-xs mx-auto">
          <div className="text-left">
            <span className="technical-label block mb-2">Email</span>
            <a href="mailto:kenny@goodsandobjects.com" className="technical-sub hover:underline">
              kenny@goodsandobjects.com
            </a>
          </div>
          <div className="text-left">
            <span className="technical-label block mb-2">Web</span>
            <a
              href="https://goodsandobjects.com"
              target="_blank"
              rel="noopener noreferrer"
              className="technical-sub hover:underline"
            >
              goodsandobjects.com
            </a>
          </div>
          <div className="text-left">
            <span className="technical-label block mb-2">Office</span>
            <span className="technical-sub block">SoHo, New York</span>
          </div>
          <div className="text-left">
            <span className="technical-label block mb-2">Time</span>
            <span className="technical-sub block">{time}</span>
          </div>
        </div>

        <div className="mt-24 opacity-40">
          <span className="technical-sub">© 2025 GOODS &amp; OBJECTS LLC. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </section>
  );
}
