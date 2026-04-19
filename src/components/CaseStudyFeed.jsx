import { useState } from 'react';
import './CaseStudyFeed.css';

const cases = [
  {
    client: 'Tiffany & Co.',
    years: '[2021–2023]',
    role: 'CULTURAL ARCHITECTURE',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Tiffany jewelry',
    summary: 'Repositioned a heritage luxury brand for a new generation without eroding the core.',
    context: 'A heritage luxury brand facing a generational relevance crisis. The challenge: how do you modernize without alienating the core?',
    tension: 'Legacy perception vs. cultural currency. The brand owned jewelry but had lost ownership of desire.',
    insight: 'A new generation doesn\'t reject heritage — they remix it. The archive was raw material, not the obstacle.',
    approach: 'Repositioned through culturally relevant partnerships across music, sports, and media. Shifted perception from legacy to culturally active.',
    outcome: 'Set the strategic and cultural foundation for the "Not Your Mother\'s Tiffany" pivot. Expanded brand desirability across target demographics without eroding core equity.',
    tags: ['Strategy', 'Legacy', 'Rebrand'],
  },
  {
    client: 'Apple',
    years: '[2018]',
    role: 'CULTURAL PROGRAMMING',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Apple minimal',
    summary: 'Connected product, retail, and culture to reposition stores as creative destinations.',
    context: 'Apple Stores as world-class retail environments — but losing their status as cultural destinations.',
    tension: 'Product excellence existed. The store experience had become transactional rather than inspirational.',
    insight: 'Culture doesn\'t enter through ads — it enters through rooms. Physical space is brand programming.',
    approach: 'Connected product, retail, and culture through programming. Contributed to repositioning stores as creative and cultural environments, not just retail.',
    outcome: 'Stores became destinations. Programming aligned product innovation with cultural identity at the point of experience.',
    tags: ['Programming', 'Retail', 'R&D'],
  },
  {
    client: 'White Claw',
    years: '[2019–2020]',
    role: 'MEMETIC ENGINEERING',
    image: 'https://images.unsplash.com/photo-1598155523122-38423bb4d6cf?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Water distortion',
    summary: 'Built participation-driven brand moments that seeded a cultural movement at scale.',
    context: 'A new beverage category entering culture with zero brand equity. No legacy, no relevance — just product.',
    tension: 'How do you build a brand moment when there\'s no brand yet?',
    insight: 'Virality isn\'t manufactured. It\'s seeded in the right networks at the right time, then amplified by behavior.',
    approach: 'Connected the brand to fashion, music, and festival ecosystems. Built participation-driven moments at scale. Seeded narratives underground and let organic behavior do the heavy lifting.',
    outcome: 'White Claw became cultural shorthand. The brand didn\'t just sell — it became a reference point for an entire movement.',
    tags: ['Viral Systems', 'FMCG', 'Culture'],
  },
  {
    client: 'Google Pixel',
    years: '[2020–2021]',
    role: 'CULTURAL CAMPAIGN',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Portrait photography',
    summary: 'Positioned product innovation through a human and cultural lens — identity as the feature.',
    context: 'Pixel needed to establish product identity against dominant competitors through a human lens, not a spec sheet.',
    tension: 'Technology marketing often erases the people it claims to serve. Representation in product innovation is still an afterthought.',
    insight: 'Identity is product value. For communities historically unseen, accurate representation is the feature.',
    approach: 'Developed a culturally grounded campaign highlighting Pixel\'s ability to accurately capture all skin tones, centered on Black and Brown communities. Used Giannis Antetokounmpo as a global cultural bridge between technology, identity, and representation.',
    outcome: 'Positioned product innovation through a human and cultural lens. Created work that felt like a truth statement, not a tagline.',
    tags: ['Campaign', 'Identity', 'Tech'],
  },
];

export default function CaseStudyFeed() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (i) => setExpanded(expanded === i ? null : i);

  return (
    <section className="feed" id="work">
      {cases.map((c, i) => (
        <article
          key={i}
          className={`case-study${expanded === i ? ' case-study--open' : ''}${i === cases.length - 1 && expanded !== i ? ' case-study--last' : ''}`}
          onClick={() => toggle(i)}
        >
          <div className="case-header">
            <h2 className="client-name">{c.client}</h2>
            <div className="case-header-right">
              <div className="case-role">
                <span>{c.years}</span>
                <br />
                <span>{c.role}</span>
              </div>
              <span className="case-toggle">{expanded === i ? '[ − ]' : '[ + ]'}</span>
            </div>
          </div>

          <div className="case-body">
            <img src={c.image} alt={c.imageAlt} className="case-image" />
            <div className="case-desc">
              <p>{c.summary}</p>
              <div className="tags">
                {c.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="case-expand">
            <div className="case-breakdown">
              {[
                ['CONTEXT', c.context],
                ['CULTURAL TENSION', c.tension],
                ['INSIGHT', c.insight],
                ['APPROACH', c.approach],
                ['OUTCOME', c.outcome],
              ].map(([label, text]) => (
                <div key={label} className="breakdown-row">
                  <span className="breakdown-label">{label}</span>
                  <p className="breakdown-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
