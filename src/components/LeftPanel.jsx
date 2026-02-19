import './LeftPanel.css';

export default function LeftPanel() {
  return (
    <section className="panel-left">
      <div>
        <span className="meta-label">NY / 2025 / EST</span>
        <h1>KENNY<br />LLOYD.</h1>
        <p className="bio">
          Brand builder. Cultural strategist. Runner.<br /><br />
          Operating at the tension point of luxury scale and subculture craft. Not chasing relevance, but engineering the systems that define it.
        </p>
      </div>

      <div className="nav-block">
        <div className="nav-item">
          <span>CURRENT VENTURE</span>
          <a href="https://goodsandobjects.com" target="_blank" rel="noopener noreferrer" className="nav-link">
            GOODS &amp; OBJECTS
          </a><br />
          FOUNDER / PRINCIPAL
        </div>
        <div className="nav-item">
          <span>SPECIALIZATION</span>
          SEMANTICS / AI<br />
          BRAND ARCHITECTURE
        </div>
        <div className="nav-item">
          <span>LOCATION</span>
          LOWER MANHATTAN<br />
          NEW YORK
        </div>
        <div className="nav-item">
          <span>CONTACT</span>
          <a href="mailto:kenny@goodsandobjects.com" className="nav-link">
            KENNY@GOODSANDOBJECTS.COM
          </a>
        </div>
      </div>

      <div className="stamp-footer">
        <div className="stamp-box">ARCHIVE REF: 24-B</div>
        <div>SCROLL FOR WORK →</div>
      </div>
    </section>
  );
}
