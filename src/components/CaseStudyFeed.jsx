import './CaseStudyFeed.css';

const cases = [
  {
    client: 'Tiffany & Co.',
    years: '[2021-2023]',
    role: 'CULTURAL ARCHITECTURE',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Abstract silver texture',
    desc: 'Redefining heritage for a digital-native generation without eroding the core. A systematic audit of brand semiotics leading to the "Not Your Mother\'s Tiffany" pivot.',
    tags: ['Strategy', 'Legacy', 'Rebrand'],
    url: 'https://www.vanityfair.com/style/photos/2019/10/tiffany-mens-launch-party',
  },
  {
    client: 'White Claw',
    years: '[2019-2020]',
    role: 'MEMETIC ENGINEERING',
    image: 'https://images.unsplash.com/photo-1598155523122-38423bb4d6cf?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Water distortion',
    desc: "Harnessing organic volatility. We didn't buy ads; we seeded narratives in underground networks and let the algorithm do the heavy lifting.",
    tags: ['Viral Systems', 'FMCG'],
    url: 'https://lbbonline.com/news/white-claw-unveils-the-claw-bag-made-from-can-tabs-at-new-york-fashion-week',
  },
  {
    client: 'Never Ready',
    years: '[2016-PRESENT]',
    role: 'FOUNDER / CD',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Streetwear texture',
    desc: 'A study in Japanese craft and NY grit. Heavyweight cotton, raw denim, and zero marketing spend. Sold out drops via SMS only.',
    tags: ['Apparel', 'DTC', 'Craft'],
    url: null,
  },
  {
    client: 'Apple',
    years: '[2018]',
    role: 'SOUND DESIGN',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Tech minimal',
    desc: 'Consulting on audio interface logic for spatial computing prototypes. Where analog intuition meets silicon precision.',
    tags: ['R&D', 'Audio'],
    url: null,
  },
];

export default function CaseStudyFeed() {
  return (
    <section className="feed" id="work">
      {cases.map((c, i) => {
        const inner = (
          <>
            <div className="case-header">
              <h2 className="client-name">{c.client}</h2>
              <div className="case-role">
                <span>{c.years}</span><br />
                <span>{c.role}</span>
              </div>
            </div>
            <div className="case-body">
              <img
                src={c.image}
                alt={c.imageAlt}
                className="case-image"
              />
              <div className="case-desc">
                <p>{c.desc}</p>
                <div className="tags">
                  {c.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </>
        );

        return c.url ? (
          <a
            key={i}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`case-study${i === cases.length - 1 ? ' case-study--last' : ''}`}
          >
            {inner}
          </a>
        ) : (
          <article
            key={i}
            className={`case-study${i === cases.length - 1 ? ' case-study--last' : ''}`}
          >
            {inner}
          </article>
        );
      })}
    </section>
  );
}
