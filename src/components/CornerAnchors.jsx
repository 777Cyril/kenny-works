import { useEffect, useState } from 'react';

export default function CornerAnchors() {
  const [time, setTime] = useState('');
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: false };
      setTime(new Date().toLocaleTimeString('en-US', options) + ' EST');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollPct(height > 0 ? (winScroll / height) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Left */}
      <div className="corner-anchor top-8 left-8 flex flex-col gap-1">
        <span className="technical-label">Kenny Lloyd</span>
        <span className="technical-sub">Cultural Strategy / NYC</span>
      </div>

      {/* Top Right */}
      <div className="corner-anchor top-8 right-8 flex items-center gap-4">
        <div className="text-right hidden md:block">
          <span className="technical-label block">Goods &amp; Objects</span>
          <span className="technical-sub block">Consultancy Group</span>
        </div>
        <a
          href="https://goodsandobjects.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hairline-circle w-10 h-10 hover-target"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="dandelion-stem">
            <div className="dandelion-head" />
          </div>
        </a>
      </div>

      {/* Bottom Left */}
      <div className="corner-anchor bottom-8 left-8 flex flex-col gap-1">
        <a href="#contact" className="technical-label nav-link hover-target">Index / Contact</a>
        <span className="technical-sub">Available for 2025</span>
      </div>

      {/* Bottom Right */}
      <div className="corner-anchor bottom-8 right-8 text-right">
        <span className="technical-label block">Est. 2019</span>
        <span className="technical-sub block">First Edition</span>
      </div>

      {/* Scroll progress */}
      <div className="progress-line hidden md:block">
        <div className="progress-fill" style={{ height: `${scrollPct}%` }} />
      </div>
    </>
  );
}
