import { GraduationCap, Award, Heart, Lightbulb } from "lucide-react";
import sketchup from "@/assets/sketchup-logo.png";
import autocad from "@/assets/autocad-logo.png";
import layout from "@/assets/layoutsketchup-logo.png";
// import canva from "@/assets/canva-logo.jpeg";
import archicad from "@/assets/archicad-logo.png";
import d5render from "@/assets/D5-logo.png";
import enscape from "@/assets/enscape-logo.png";
// import Adobe from "@/assets/adobe-logo.png";
// import capcut from "@/assets/capcut-logo.svg";

const skills = [
  { name: "AutoCAD",         logo: autocad   },
  { name: "ArchiCAD",        logo: archicad  },
  { name: "SketchUp",        logo: sketchup  },
  { name: "Layout SketchUp", logo: layout    },
  // { name: "Canva",           logo: canva     },
  { name: "Enscape",         logo: enscape   },
  { name: "D5 Render",       logo: d5render  },
  // { name: "Adobe Photoshop", logo: Adobe     },
  // { name: "Capcut",          logo: capcut    },
];

const highlights = [
  { icon: <GraduationCap size={28} />, title: "Education",   description: "Bachelor's in Interior Design, Institut Teknologi Nasional Bandung" },
  { icon: <Award          size={28} />, title: "Excellence",  description: "Dedicated to pushing creative boundaries in every project" },
  { icon: <Heart          size={28} />, title: "Passion",     description: "Transforming spaces into meaningful human experiences" },
  { icon: <Lightbulb      size={28} />, title: "Innovation",  description: "Blending timeless principles with modern aesthetics" },
];

const About = () => {
  return (
    <section id="about" style={{ padding: '6rem 0', background: '#adb0ba', position: 'relative', overflow: 'hidden' }}>

      {/* Background accent — bottom right glow */}
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-5%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(ellipse, rgba(99,0,0,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container mx-auto px-6" style={{ position: 'relative' }}>

        {/* ── Section Header ─────────────────────────── */}
        <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="tag" style={{ marginBottom: '1rem' }}>----------------</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>
            About Me{' '}
            {/* <em style={{ color: '#3a020a', fontStyle: 'italic' }}>Shaping Lives</em> */}
          </h2>
          <div style={{ width: '48px', height: '2px', background: '#3a020a', margin: '0 auto 1.5rem' }} />
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: '#ffffff',
            maxWidth: '680px',
            margin: '0 auto',
          }}>
            As an Interior Design student, I believe every space has a story to tell. My mission is to
            design environments that are not only visually compelling but also enrich the way people live.
          </p>
        </div>

        {/* ── Two-Column Layout ──────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Left: Philosophy + Highlight Cards */}
          <div className="slide-in-left">
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.75rem',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1.25rem',
              }}>
                Design Philosophy
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', lineHeight: 1.85, color: '#ffffff', marginBottom: '1rem' }}>
Passionate about designing harmonious environments that balance aesthetics and functionality, bringing ideas to life with thoughtful and impactful design.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', lineHeight: 1.85, color: '#ffffff' }}>
As a creative individual, I am always eager to expand my knowledge and gain hands-on experience in the interior design field. I am deeply dedicated to contributing my skills wholeheartedly and remain steadfast in my commitment to growing within this industry.
              </p>
            </div>

            {/* Highlight Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {highlights.map((item, i) => (
                <div key={i} className="portfolio-card" style={{ textAlign: 'center' }}>
                  <div style={{ color: '#3a020a', marginBottom: '0.875rem', display: 'flex', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <h4 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#000000', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Skills */}
          <div className="fade-in-up">
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '0.75rem',
            }}>
              Technical Skills
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', lineHeight: 1.8, color: '#ffffff', marginBottom: '2rem' }}>
              Proficient in industry-standard design software, with emphasis on precision and creative innovation.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
              {skills.map((skill, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    padding: '0.875rem 1rem',
                    borderBottom: '1px solid #8a8c96',
                    borderRight: i % 2 === 0 ? '1px solid #8a8c96' : 'none',
                    transition: 'background 0.25s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(99,0,0,0.1)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    style={{ width: '1.75rem', height: '1.75rem', objectFit: 'contain', flexShrink: 0, filter: 'brightness(0.9)' }}
                  />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#ffffff', fontWeight: 500 }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
