import { Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ background: '#3a020a', borderTop: '1px solid #8a8c96', padding: '3.5rem 0 2rem' }}>
      <div className="container mx-auto px-6">

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '3rem', alignItems: 'start' }}>

          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}>
              <span style={{ color: '#3a020a' }}>✦</span>
              Tiara Shalma
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#ffffff', lineHeight: 1.7 }}>
              Interior Design Student<br />
              Institut Teknologi Nasional
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '1rem', fontWeight: 600 }}>
              Navigation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { label: 'Home',     href: '/#home'     },
                { label: 'About',    href: '/#about'    },
                { label: 'Projects', href: '/#projects' },
                { label: 'Contact',  href: '/#contact'  },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    color: '#ffffff',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '1rem', fontWeight: 600 }}>
              Connect
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <Instagram size={16} />, href: 'https://instagram.com/4lme0', label: 'Instagram' },
                { icon: <Mail      size={16} />, href: 'mailto:inialmeo@gmail.com',   label: 'Email'     },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: '2.5rem', height: '2.5rem',
                    background: '#adb0ba',
                    border: '1px solid #8a8c96',
                    borderRadius: '2px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#000000',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#3a020a';
                    e.currentTarget.style.borderColor = '#3a020a';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#adb0ba';
                    e.currentTarget.style.borderColor = '#8a8c96';
                    e.currentTarget.style.color = '#000000';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid #8a8c96',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            © 2024 Tiara Shalma a Sakhra. Made with
            <Heart size={12} style={{ color: '#c40f2aff', fill: '#c40f2aff' }} />
            by Grove
          </p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '0.8rem', color: '#8a8c96' }}>
            "Shaping Space, Shaping Lives"
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
