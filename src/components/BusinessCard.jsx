import './BusinessCard.css';

export default function BusinessCard() {
  return (
    <a
      className="paper-card"
      href="https://goodsandobjects.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="emboss-text">
        GOODS &amp;<br />OBJECTS
      </div>
      <div className="card-details">
        +1 (917) 555-0198<br />
        New York, NY<br />
        <span className="card-email">kenny@goodsandobjects.com</span>
      </div>
    </a>
  );
}
