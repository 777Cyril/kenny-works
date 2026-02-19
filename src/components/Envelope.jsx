import './Envelope.css';

const navItems = ['Philosophy', 'Selected Works', 'Journal'];

export default function Envelope() {
  return (
    <div className="paper-envelope">
      <div className="envelope-flap">
        <span className="flap-text">cultural marketing consultancy</span>
      </div>
      <div className="envelope-body">
        <h1 className="tagline">
          "I like shaping culture into stories people actually feel."
        </h1>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item} className="nav-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
