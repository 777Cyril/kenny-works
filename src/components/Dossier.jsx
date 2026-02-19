import './Dossier.css';

const clients = [
  {
    name: 'TIFFANY & CO.',
    role: 'Heritage & Modernity Campaign',
    url: 'https://www.vanityfair.com/style/photos/2019/10/tiffany-mens-launch-party',
  },
  {
    name: 'APPLE',
    role: 'Cultural Fluency Strategy',
    url: null,
  },
  {
    name: 'WHITE CLAW',
    role: 'Identity & Desire Narrative',
    url: 'https://lbbonline.com/news/white-claw-unveils-the-claw-bag-made-from-can-tabs-at-new-york-fashion-week',
  },
  {
    name: 'BEAMS JAPAN',
    role: 'Campaign US Op-Ed',
    url: 'https://www.campaignlive.com/article/18-trillion-reasons-care-black-consumers/1868722',
  },
];

const archiveTags = [
  'Vintage Denim',
  'Marathons',
  'Japanese Garments',
  'Sneaker Collecting',
  'Mid-Century Audio',
  'Print Media',
];

export default function Dossier() {
  return (
    <main className="dossier-sheet">
      {/* Clip decorations */}
      <div className="clip-deco clip-1" />
      <div className="clip-deco clip-2" />
      <div className="clip-deco clip-3" />

      {/* Header */}
      <header className="header-main reveal">
        <div className="label">KL—2024</div>
        <div className="label">Cultural Strategy</div>
        <a
          className="label"
          href="https://goodsandobjects.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >Goods &amp; Objects</a>
      </header>

      {/* Intro / Manifesto */}
      <section className="intro reveal delay-1">
        <h1 className="tagline">
          <strong>Manifesto</strong>
          I like shaping culture into stories people actually feel. Building narratives between emotion, identity, and desire.
        </h1>
      </section>

      {/* Consultancy */}
      <section className="consultancy reveal delay-2">
        <div className="section-header">
          <div><span className="paperclip-attachment" />CONSULTANCY</div>
          <div>EST. 2018</div>
        </div>
        <div className="consultancy-grid">
          <div className="consultancy-card">
            <h3>Goods &amp; Objects</h3>
            <p>
              A specialized practice bridging high culture and mass appeal. We don't just sell products; we encode objects with meaning. Deep ties to Japanese craft culture and global streetwear markets.
            </p>
          </div>
          <div className="consultancy-card">
            <h3>Methodology</h3>
            <p>
              Sophisticated but not pretentious. Confident and understated. We identify the pulse of a subculture and amplify it without exploiting it.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="work reveal delay-3">
        <div className="section-header">
          <div><span className="paperclip-attachment" />SELECTED WORK</div>
          <div>(2020 — 2024)</div>
        </div>
        <ul className="client-list">
          {clients.map((client) =>
            client.url ? (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="client-item"
              >
                <span className="client-name">{client.name}</span>
                <span className="client-role">{client.role}</span>
              </a>
            ) : (
              <li key={client.name} className="client-item">
                <span className="client-name">{client.name}</span>
                <span className="client-role">{client.role}</span>
              </li>
            )
          )}
        </ul>
      </section>

      {/* Archive / Interests */}
      <section className="personal reveal delay-3">
        <div className="section-header">
          <div><span className="paperclip-attachment" />ARCHIVE / INTERESTS</div>
          <div>PERSONAL</div>
        </div>
        <div className="archive-flex">
          {archiveTags.map((tag) => (
            <div key={tag} className="archive-tag">{tag}</div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer reveal delay-3">
        <div className="label">Let's build something</div>
        <a href="mailto:kenny@goodsandobjects.com" className="email-link">
          Get in Touch →
        </a>
      </footer>
    </main>
  );
}
