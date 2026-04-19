import './GoodsSection.css';

const pillars = [
  {
    id: 'CONSULTANCY',
    title: 'Strategy &\nPartnerships',
    desc: 'Culture-first strategy, partnership development, and narrative architecture for brands that want to move with culture — not after it.',
  },
  {
    id: 'OBJECTS',
    title: 'Physical\nGoods',
    desc: 'Limited-run products as expressions of taste and point of view. Objects with meaning.',
  },
  {
    id: 'SYSTEMS',
    title: 'AI\nIntelligence',
    desc: 'Tools that track and translate cultural signals into strategic direction. Real-time intelligence for brand decisions.',
  },
];

export default function GoodsSection() {
  return (
    <section className="goods-section" id="goods">
      <div className="goods-header">
        <div className="goods-header-left">
          <span className="goods-title">Goods &amp; Objects</span>
          <span className="goods-tag">[AI CONSULTANCY]</span>
        </div>
        <p className="goods-desc">
          A culture-first platform combining strategy, product, and technology. Exploring how brands move through culture via narrative systems, physical objects, and AI-driven intelligence.
        </p>
      </div>
      <div className="goods-grid">
        {pillars.map((p) => (
          <div key={p.id} className="good-item">
            <span className="good-id">{p.id}</span>
            <h3 className="good-title">
              {p.title.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h3>
            <p className="good-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
