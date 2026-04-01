import { Instagram, Mail, MapPin } from "lucide-react";

const contactInfo = [
  { icon: <Instagram size={22} />, label: "Instagram", value: "@4lme0",                      link: "https://instagram.com/4lme0" },
  { icon: <Mail      size={22} />, label: "Email",     value: "inialmeo@gmail.com",           link: "mailto:inialmeo@gmail.com"  },
  { icon: <MapPin    size={22} />, label: "Location",  value: "Institut Teknologi Nasional",  link: null },
];

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '6rem 0', background: '#adb0ba', position: 'relative', overflow: 'hidden' }}>

      {/* Top-left glow */}
      <div style={{
        position: 'absolute',
        top: '-20%', left: '-10%',
        width: '50vw', height: '50vw',
        background: 'radial-gradient(ellipse, rgba(99,0,0,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container mx-auto px-6" style={{ position: 'relative' }}>

        {/* ── Header ─────────────────────────────────── */}
        <div className="fade-in-up" style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '1px', background: '#3a020a' }} />
            <div className="tag">Get In Touch</div>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}>
            Let's{' '}
            <em style={{ color: '#3a020a', fontStyle: 'italic' }}>Connect</em>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#000000', lineHeight: 1.8, maxWidth: '520px' }}>
            Always excited to discuss new projects, creative ideas, or collaboration opportunities.
            Feel free to reach out.
          </p>
        </div>

        {/* ── Two-column: Contact Cards + CTA ────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>

          {/* Contact Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {contactInfo.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.5rem 0',
                  borderBottom: '1px solid #8a8c96',
                  cursor: item.link ? 'pointer' : 'default',
                  transition: 'padding 0.25s ease',
                }}
                onClick={() => item.link && window.open(item.link, item.link.startsWith('mailto') ? '_self' : '_blank')}
                onMouseEnter={e => {
                  if (item.link) {
                    const el = e.currentTarget;
                    el.style.paddingLeft = '0.75rem';
                    el.querySelectorAll<HTMLElement>('[data-text]').forEach(t => t.style.color = '#ffffff');
                  }
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.paddingLeft = '0';
                  el.querySelectorAll<HTMLElement>('[data-text]').forEach(t => t.style.color = '');
                }}
                className="group"
              >
                <div style={{
                  width: '3rem', height: '3rem',
                  background: 'rgba(99,0,0,0.15)',
                  border: '1px solid rgba(99,0,0,0.3)',
                  borderRadius: '2px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#3a020a',
                  flexShrink: 0,
                  transition: 'all 0.25s ease',
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#000000', marginBottom: '0.25rem' }}>
                    {item.label}
                  </div>
                  <div
                    data-text
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.975rem', color: item.link ? '#ffffff' : '#000000', fontWeight: 500, transition: 'color 0.25s' }}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Block */}
          <div style={{
            background: '#9d9faa',
            border: '1px solid #8a8c96',
            borderTop: '2px solid #3a020a',
            padding: '2.5rem',
            borderRadius: '2px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '2rem',
          }}>
            <div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1rem',
              }}>
                Ready to Start a Project?
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#000000', lineHeight: 1.8 }}>
                Whether you're looking for interior design consultation, collaboration opportunities,
                or simply want to connect — I'd love to hear from you.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <a href="mailto:inialmeo@gmail.com" className="btn-hero" style={{ justifyContent: 'center' }}>
                <Mail size={15} />
                Send an Email
              </a>
              <a
                href="https://instagram.com/4lme0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ justifyContent: 'center' }}
              >
                <Instagram size={15} />
                Follow on Instagram
              </a>
            </div>

            <blockquote style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: '1rem',
              color: '#000000',
              borderLeft: '2px solid #3a020a',
              paddingLeft: '1rem',
              margin: 0,
            }}>
              "Great design begins with great conversation."
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
