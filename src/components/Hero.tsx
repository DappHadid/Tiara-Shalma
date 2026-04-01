import { ArrowDown, FileText, Mail } from "lucide-react";
import tiaraPortrait from "@/assets/PICT_BARU.JPG.jpeg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#1B1717',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Atmospheric maroon radial glow — top left */}
      <div style={{
        position: 'absolute',
        top: '-15%', left: '-10%',
        width: '55vw', height: '55vw',
        background: 'radial-gradient(ellipse, rgba(99,0,0,0.22) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(237,235,221,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(237,235,221,0.015) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Right edge maroon strip */}
      <div style={{
        position: 'absolute',
        top: 0, right: 0,
        width: '3px', height: '100%',
        background: 'linear-gradient(to bottom, transparent, #630000 40%, transparent)',
        pointerEvents: 'none',
      }} />

      <div className="relative container mx-auto px-6" style={{ paddingTop: '7rem', paddingBottom: '5rem', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* ── Left: Copy ────────────────────────────── */}
          <div className="fade-in-up" style={{ maxWidth: '560px' }}>

            <div
              style={{
                display: 'inline-block',
                padding: '0.2rem 0.75rem',
                background: 'rgba(99, 0, 0, 0.2)',
                border: '1px solid rgba(99, 0, 0, 0.5)',
                color: '#EDEBDD',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                borderRadius: '1px',
                marginBottom: '1.5rem',
              }}
            >
              Interior Design Portfolio
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#EDEBDD',
              marginBottom: '0.25rem',
              letterSpacing: '-0.02em',
            }}>
              Tiara
            </h1>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              color: '#EDEBDD',
              marginBottom: '0.25rem',
              letterSpacing: '-0.02em',
            }}>
              Shalma
            </h1>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#630000',
              marginBottom: '2rem',
              letterSpacing: '-0.02em',
            }}>
              A Sakhra
            </h1>

            <div style={{ width: '48px', height: '2px', background: '#630000', marginBottom: '1.75rem' }} />

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: '#8A8A8A',
              marginBottom: '0.75rem',
            }}>
              Interior Design student at Institut Teknologi Nasional Bandung —
              transforming spaces through creative vision and technical mastery.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: '#EDEBDD',
              marginBottom: '2.5rem',
            }}>
              Passionate about designing harmonious environments that balance
              aesthetics with function.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.875rem 2rem',
                  background: '#630000', color: '#EDEBDD',
                  fontFamily: "'Inter', sans-serif", fontWeight: 600,
                  fontSize: '0.9375rem', letterSpacing: '0.04em', textTransform: 'uppercase',
                  border: '1px solid #630000', borderRadius: '2px', cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#7a0000'; e.currentTarget.style.borderColor = '#7a0000'; e.currentTarget.style.boxShadow = '0 0 24px rgba(99,0,0,0.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#630000'; e.currentTarget.style.borderColor = '#630000'; e.currentTarget.style.boxShadow = 'none'; }}
                onClick={() => scrollToSection("projects")}
              >
                <FileText size={16} />
                View Projects
              </button>
              <button
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.875rem 2rem',
                  background: 'transparent', color: '#EDEBDD',
                  fontFamily: "'Inter', sans-serif", fontWeight: 600,
                  fontSize: '0.9375rem', letterSpacing: '0.04em', textTransform: 'uppercase',
                  border: '1px solid rgba(237,235,221,0.35)', borderRadius: '2px', cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(237,235,221,0.07)'; e.currentTarget.style.borderColor = '#EDEBDD'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(237,235,221,0.35)'; }}
                onClick={() => scrollToSection("contact")}
              >
                <Mail size={16} />
                Get In Touch
              </button>
            </div>
          </div>

          {/* ── Right: Portrait ───────────────────────── */}
          <div
            className="slide-in-left"
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            {/* Maroon glow behind image */}
            <div style={{
              position: 'absolute',
              inset: '-2rem',
              background: 'radial-gradient(ellipse at center, rgba(99,0,0,0.3) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Corner frame decorators */}
            <div style={{ position: 'relative' }}>
              {/* Top-left bracket */}
              <div style={{ position: 'absolute', top: '-12px', left: '-12px', width: '36px', height: '36px', borderTop: '2px solid #630000', borderLeft: '2px solid #630000', zIndex: 2 }} />
              {/* Bottom-right bracket */}
              <div style={{ position: 'absolute', bottom: '-12px', right: '-12px', width: '36px', height: '36px', borderBottom: '2px solid #630000', borderRight: '2px solid #630000', zIndex: 2 }} />

              <img
                src={tiaraPortrait}
                alt="Tiara Shalma a Sakhra – Interior Design Student"
                style={{
                  width: '100%',
                  maxWidth: '440px',
                  height: '560px',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'grayscale(15%) contrast(1.05)',
                  borderRadius: '2px',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px #2e2828',
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-bounce"
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8A8A8A' }}>Scroll</span>
          <ArrowDown size={14} style={{ color: '#630000' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
