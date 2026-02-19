import { useEffect, useState } from 'react';

export default function ContactSection() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const options = { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: false };
      setTime(new Date().toLocaleTimeString('en-US', options) + ' EST');
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section-screen" id="contact" style={{ backgroundColor: '#DDDCD7' }}>
      <div style={{ textAlign: 'center', width: '100%' }}>

        <div className="technical-label" style={{ marginBottom: '2.5rem' }}>Ref. 04 — Correspondence</div>

        <a href="mailto:kenny@goodsandobjects.com" className="contact-heading-link" style={{ textDecoration: 'none', display: 'inline-block', position: 'relative' }}>
          <h2 className="font-serif-display" style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: '#1f2937',
            transition: 'color 0.3s ease',
            lineHeight: 1.1,
          }}>
            Get in touch
          </h2>
          <span className="contact-underline" />
        </a>

        {/* Contact grid */}
        <div style={{
          marginTop: '5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem 4rem',
          maxWidth: '28rem',
          margin: '5rem auto 0',
          textAlign: 'left',
        }}>
          <div>
            <span className="technical-label" style={{ display: 'block', marginBottom: '0.75rem' }}>Email</span>
            <a href="mailto:kenny@goodsandobjects.com" className="technical-sub" style={{ textDecoration: 'none' }}>
              kenny@goodsandobjects.com
            </a>
          </div>
          <div>
            <span className="technical-label" style={{ display: 'block', marginBottom: '0.75rem' }}>Web</span>
            <a href="https://goodsandobjects.com" target="_blank" rel="noopener noreferrer" className="technical-sub" style={{ textDecoration: 'none' }}>
              goodsandobjects.com
            </a>
          </div>
          <div>
            <span className="technical-label" style={{ display: 'block', marginBottom: '0.75rem' }}>Office</span>
            <span className="technical-sub">SoHo, New York</span>
          </div>
          <div>
            <span className="technical-label" style={{ display: 'block', marginBottom: '0.75rem' }}>Time</span>
            <span className="technical-sub">{time}</span>
          </div>
        </div>

        <div style={{ marginTop: '6rem', opacity: 0.4 }}>
          <span className="technical-sub">© 2025 GOODS &amp; OBJECTS LLC. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </section>
  );
}
