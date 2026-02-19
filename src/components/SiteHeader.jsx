import './SiteHeader.css';

export default function SiteHeader() {
  return (
    <header className="site-header">
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
