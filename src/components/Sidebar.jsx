import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar" id="about">
      <p className="bio-text">
        Operating at the tension point between high luxury and deep subculture.
        <br /><br />
        Moving the needle by understanding the physics of culture, not just the aesthetics.
      </p>
      <ul className="meta-list">
        <li>
          <span className="label">ROLE</span>
          <span>Cultural Strategist</span>
        </li>
        <li>
          <span className="label">FOCUS</span>
          <span>Brand Systems / AI</span>
        </li>
        <li>
          <span className="label">BASE</span>
          <span>New York, NY</span>
        </li>
        <li>
          <span className="label">CURRENT</span>
          <span>Founder, G&amp;O</span>
        </li>
      </ul>
      <div className="stack-box">
        <span className="stack-title">The Stack</span>
        <p className="stack-body">
          Running 50 miles/week.<br />
          Mining BTC.<br />
          Reading Pynchon.<br />
          Collecting Japanese Denim.
        </p>
      </div>
    </aside>
  );
}
