import './GoodsSection.css';

const systems = [
  { id: 'SYSTEM 01', title: 'Brand\nQuant' },
  { id: 'SYSTEM 02', title: 'Cultural\nVectors' },
  { id: 'SYSTEM 03', title: 'Visual\nSynthesis' },
];

export default function GoodsSection() {
  return (
    <section className="goods-section" id="goods">
      <div className="goods-header">
        <span>Goods &amp; Objects</span>
        <span>[AI CONSULTANCY]</span>
      </div>
      <div className="goods-grid">
        {systems.map((s) => (
          <div key={s.id} className="good-item">
            <span>{s.id}</span>
            <h3>{s.title.split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
