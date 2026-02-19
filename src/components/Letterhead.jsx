import './Letterhead.css';

const clients = [
  { name: 'Tiffany & Co.', url: 'https://www.vanityfair.com/style/photos/2019/10/tiffany-mens-launch-party' },
  { name: 'Apple', url: null },
  { name: 'White Claw', url: 'https://lbbonline.com/news/white-claw-unveils-the-claw-bag-made-from-can-tabs-at-new-york-fashion-week' },
];

const interests = ['Japanese Garments', 'Marathons', 'Sneaker Collecting'];

export default function Letterhead() {
  return (
    <div className="paper-letterhead">
      <div className="letterhead-header">
        Goods &amp; Objects<br />
        Est. 2024<br />
        New York / Tokyo
      </div>

      <div className="letterhead-content">
        <div className="section-label">Selected Clients</div>
        <div className="client-list">
          {clients.map((client) =>
            client.url ? (
              <a
                key={client.name}
                className="client-item"
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {client.name}
              </a>
            ) : (
              <div key={client.name} className="client-item">
                {client.name}
              </div>
            )
          )}
        </div>

        <div className="section-label">Profile</div>
        <p className="bio-text">
          Kenny Lloyd is a cultural strategist bridging high culture and streetwear.
          Embedded in exclusive subcultures, he builds narratives between emotion, identity, and desire.
        </p>

        <div className="section-label">Personal Interests</div>
        <p className="bio-text">
          {interests.map((interest, i) => (
            <span key={interest}>
              {interest}
              {i < interests.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>

      <div className="letterhead-footer">
        <div className="brand-logo-large">KENNY LLOYD</div>
      </div>
    </div>
  );
}
