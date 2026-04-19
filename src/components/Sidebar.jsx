import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar" id="about">
      <p className="bio-text">
        Kenny shapes culture into narratives people feel. His work sits at the intersection of identity, desire, and technology — grounded in how culture actually moves.
        <br /><br />
        He leads brand and marketing strategy across luxury, tech, and consumer categories. Helping legacy brands stay relevant and building new ones from the ground up.
      </p>

      <ul className="meta-list">
        <li>
          <span className="label">ROLE</span>
          <span>Cultural Systems Architect</span>
        </li>
        <li>
          <span className="label">FOCUS</span>
          <span>Culture, Brand Strategy, AI Systems</span>
        </li>
        <li>
          <span className="label">BASE</span>
          <span>New York City</span>
        </li>
        <li>
          <span className="label">CURRENT</span>
          <span>Founder, G&amp;O</span>
        </li>
      </ul>

      <div className="stack-box">
        <span className="stack-title">The Stack</span>
        <p className="stack-body">
          5 World Major marathon runner.<br />
          Long-distance cycling.<br />
          Mining BTC.<br />
          Collector of fine goods —<br />
          heritage clothing &amp; Japanese denim.
        </p>
      </div>

      <div className="op-ed-box">
        <span className="op-ed-label">PUBLISHED</span>
        <a
          href="https://www.adweek.com/brand-marketing/1-8-trillion-reasons-to-care-about-black-consumers/"
          target="_blank"
          rel="noopener noreferrer"
          className="op-ed-link"
        >
          "$1.8 trillion reasons to care about Black consumers" →
        </a>
      </div>
    </aside>
  );
}
