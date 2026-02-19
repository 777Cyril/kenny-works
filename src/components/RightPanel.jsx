import './RightPanel.css';

const entries = [
  {
    id: '001',
    client: 'Tiffany & Co.',
    verticalTitle: 'TIFF',
    role: 'Brand Strategy / Cultural Positioning',
    years: '2021 — 2023',
    description: 'Re-contextualizing heritage assets for a post-streetwear luxury consumer. The challenge was not modernization, but translation. We developed a semantic framework that allowed 180-year-old iconography to exist natively within digital-first subcultures without losing the weight of the institution.',
    tags: ['STRATEGY', 'ARCHIVAL RESEARCH', 'CAMPAIGN'],
    url: 'https://www.vanityfair.com/style/photos/2019/10/tiffany-mens-launch-party',
  },
  {
    id: '002',
    client: 'Apple Inc.',
    verticalTitle: 'APPL',
    role: 'Retail Experience / Brand Semantics',
    years: '2019 — 2021',
    description: 'Narrative architecture for the Services ecosystem. Moving beyond the device to map the emotional resonance of the intangible. Worked directly with the Marcom leadership to define the verbal identity for privacy-focused features, turning technical specifications into a language of human rights and personal agency.',
    tags: ['COPYWRITING', 'NARRATIVE DESIGN', 'SYSTEMS'],
    url: null,
  },
  {
    id: '003',
    client: 'White Claw',
    verticalTitle: 'CLAW',
    role: 'Cultural Strategy / Market Entry',
    years: '2021 — 2022',
    description: 'Positioning a beverage brand at the intersection of subculture and mainstream without compromising either. Built the strategic framework for White Claw\'s entry into streetwear-adjacent culture — identifying the tension between authenticity and accessibility as the core brand opportunity.',
    tags: ['CPG', 'SUBCULTURE', 'STRATEGY'],
    url: 'https://lbbonline.com/news/white-claw-unveils-the-claw-bag-made-from-can-tabs-at-new-york-fashion-week',
  },
  {
    id: '004',
    client: 'Goods & Objects',
    verticalTitle: 'GOOD',
    role: 'Founder / Principal',
    years: '2020 —',
    description: 'A cultural consultancy and creative studio operating at the tension point of Japanese craft sensibility and American subculture. Built to serve brands that need to move between worlds — luxury and street, heritage and contemporary, local and global.',
    tags: ['VENTURE', 'CRAFT', 'JAPAN'],
    url: 'https://goodsandobjects.com',
  },
  {
    id: '005',
    client: 'Never Ready NY',
    verticalTitle: 'NRNY',
    role: 'Brand Identity / Editorial Direction',
    years: '2020 — 2021',
    description: 'Complete brand identity and editorial voice for a New York-based streetwear label rooted in the city\'s underground running culture. Developed naming, visual language, and the content strategy that positioned the brand within the NikeTalk and selvedge denim communities.',
    tags: ['STREETWEAR', 'EDITORIAL', 'NYC'],
    url: null,
  },
  {
    id: '006',
    client: 'Campaign Live Op-Ed',
    verticalTitle: 'CAMP',
    role: 'Campaign US Op-Ed',
    years: '2023',
    description: 'Op-ed published in Campaign US making the case for why brands can no longer afford to treat Black consumers as a monolith. Argued that the $18 trillion in collective spending power demands individual, culturally-literate engagement — not demographic buckets.',
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
              <div className="entry-vertical-title" aria-hidden="true">
                {entry.verticalTitle.split('').map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
              </div>
              <div className="entry-content">
                <div className="entry-top">
                  <span className="entry-label">CASE STUDY {entry.id}</span>
                  <span className="entry-years">{entry.years}</span>
                </div>
                <div className="entry-divider" />
                <div className="entry-body">
                  <h2 className="entry-client">{entry.client}</h2>
                  <p className="entry-description">{entry.description}</p>
                  <div className="entry-tags">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="entry-tag">[{tag}]</span>
                    ))}
                  </div>
                </div>
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
