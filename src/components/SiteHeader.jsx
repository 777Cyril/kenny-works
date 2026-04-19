import { useEffect, useRef } from 'react';
import './SiteHeader.css';

export default function SiteHeader() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const onScroll = () => {
      const y = window.scrollY;
      const collapsed = header.classList.contains('scrolled');
      if (!collapsed && y > 100) header.classList.add('scrolled');
      else if (collapsed && y < 50) header.classList.remove('scrolled');
    };

    const ro = new ResizeObserver(() => {
      document.documentElement.style.setProperty('--header-h', `${header.offsetHeight}px`);
    });

    ro.observe(header);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="brand-block">
        <h1>Kenny Lloyd</h1>
      </div>

      <div className="sub-header border-top border-bottom">
        <div className="status-indicator">
          <div className="blink" />
          <span>LIVE FROM NYC</span>
        </div>
        <span>EST. 1989</span>
        <span>MENU [ + ]</span>
      </div>

      <nav className="nav-stack">
        <a href="#work" className="nav-item border-bottom">
          <span className="nav-text">Selected Work</span>
          <span className="nav-meta">01 / Index</span>
        </a>
        <a href="#goods" className="nav-item border-bottom">
          <span className="nav-text">Goods &amp; Objects</span>
          <span className="nav-meta">02 / Venture</span>
        </a>
        <a href="#about" className="nav-item border-bottom">
          <span className="nav-text">Intelligence</span>
          <span className="nav-meta">03 / About</span>
        </a>
      </nav>
    </header>
  );
}
