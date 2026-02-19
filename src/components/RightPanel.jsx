import './RightPanel.css';

const entries = [
  {
    id: '001',
    client: 'TIFFANY & CO.',
    role: 'Brand Strategy / Cultural Positioning',
    year: '2023',
    tags: ['LUXURY', 'HERITAGE', 'CULTURE'],
    url: 'https://www.vanityfair.com/style/2023/04/tiffany-and-co-reimagines-itself-for-a-new-generation',
  },
  {
    id: '002',
    client: 'APPLE',
    role: 'Retail Experience / Brand Semantics',
    year: '2022',
    tags: ['TECH', 'RETAIL', 'EXPERIENCE'],
    url: null,
  },
  {
    id: '003',
    client: 'WHITE CLAW',
    role: 'Cultural Strategy / Market Entry',
    year: '2022',
    tags: ['CPG', 'SUBCULTURE', 'STRATEGY'],
    url: 'https://lbbonline.com/news/white-claw-finds-its-wave-with-new-campaign',
  },
  {
    id: '004',
    client: 'GOODS & OBJECTS',
    role: 'Founder / Principal',
    year: '2020–',
    tags: ['VENTURE', 'CRAFT', 'JAPAN'],
    url: 'https://goodsandobjects.com',
  },
  {
    id: '005',
    client: 'NEVER READY NY',
    role: 'Brand Identity / Editorial Direction',
    year: '2021',
    tags: ['STREETWEAR', 'EDITORIAL', 'NYC'],
    url: null,
  },
  {
    id: '006',
    client: 'CAMPAIGN LIVE OP-ED',
    role: 'Campaign US Op-Ed',
    year: '2023',
    tags: ['EDITORIAL', 'OPINION', 'MEDIA'],
    url: 'https://www.campaignlive.com/article/18-trillion-reasons-care-black-consumers/1868722',
  },
];

export default function RightPanel() {
  return (
    <section className="panel-right">
      <div className="archive-header">
        <span className="meta-label">SELECTED WORK / ARCHIVE</span>
        <span className="meta-label">2020–2025</span>
      </div>

      <div className="archive-list">
        {entries.map((entry) => {
          const inner = (
            <>
              <div className="entry-top">
                <span className="entry-id">{entry.id}</span>
                <div className="entry-tags">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="entry-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="entry-body">
                <h2 className="entry-client">{entry.client}</h2>
                <p className="entry-role">{entry.role}</p>
              </div>
              <div className="entry-bottom">
                <span className="entry-year">{entry.year}</span>
                {entry.url && <span className="entry-cta">VIEW →</span>}
              </div>
            </>
          );

          return entry.url ? (
            <a
              key={entry.id}
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="archive-entry archive-entry--linked"
            >
              {inner}
            </a>
          ) : (
            <div key={entry.id} className="archive-entry">
              {inner}
            </div>
          );
        })}
      </div>

      <div className="panel-right-footer">
        <span className="meta-label">GOODSANDOBJECTS.COM</span>
        <span className="meta-label">© 2025 KENNY LLOYD</span>
      </div>
    </section>
  );
}
