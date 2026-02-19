export default function AboutSection() {
  return (
    <section className="section-screen" id="about" style={{ backgroundColor: '#E3E1DD' }}>
      <div style={{
        maxWidth: '72rem',
        width: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'center',
      }}>

        {/* Text */}
        <div>
          <div className="technical-label" style={{ marginBottom: '1.5rem' }}>Ref. 03 — The Method</div>
          <h2 className="font-serif-display" style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            lineHeight: 1.2,
            marginBottom: '2.5rem',
            color: '#1f2937',
            fontWeight: 300,
          }}>
            The intersection of emotion, identity, and <span style={{ fontStyle: 'italic' }}>desire</span>.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#4B5563', fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.8, maxWidth: '28rem' }}>
            <p>
              Based in New York, deeply embedded in global subcultures. My practice is informed by the quiet discipline of Japanese craft, the endurance of marathon running, and the archival nature of collecting.
            </p>
            <p>
              We do not just market products; we build the invisible architecture that makes a brand feel inevitable.
            </p>
          </div>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '3rem' }}>
            <div>
              <span className="technical-label" style={{ display: 'block', marginBottom: '0.75rem', opacity: 0.5 }}>Focus</span>
              <ul style={{ fontSize: '0.75rem', lineHeight: 2, letterSpacing: '0.025em', listStyle: 'none' }}>
                <li>Brand Narrative</li>
                <li>Cultural Strategy</li>
                <li>Archival Research</li>
              </ul>
            </div>
            <div>
              <span className="technical-label" style={{ display: 'block', marginBottom: '0.75rem', opacity: 0.5 }}>Interests</span>
              <ul style={{ fontSize: '0.75rem', lineHeight: 2, letterSpacing: '0.025em', listStyle: 'none' }}>
                <li>Japanese Denim</li>
                <li>Endurance Sports</li>
                <li>Rare Sneakers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Diagram */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{
            width: '16rem',
            height: '20rem',
            border: '1px solid #9CA3AF',
            position: 'relative',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="technical-sub">FIG. 08</span>
              <span className="technical-sub">N.Y.C.</span>
            </div>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '8rem', height: '8rem', border: '1px solid #D1D5DB', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="font-serif-display" style={{ width: '6rem', height: '6rem', border: '1px solid #D1D5DB', borderRadius: '50%', fontStyle: 'italic', fontSize: '1.25rem', color: '#9CA3AF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 300 }}>
                  g&amp;o
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="technical-sub">OBJECT PERMANENCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
