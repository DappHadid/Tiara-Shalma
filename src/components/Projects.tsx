import { useState } from "react";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import residentialImage1 from "@/assets/DI1-3.png";
import residentialImage2 from "@/assets/DI2-1.png";
import fujifilmImage from "@/assets/FUJI.png";
import spaImage from "@/assets/SC-6.png";

const projectCategories = [
  {
    id: "residential-1",
    label: "01",
    title: "Desain Interior Hunian I",
    description: "Prinsip-prinsip dasar perencanaan dan desain ruang hunian",
    workingDrawings: 1,
    perspectives: 4,
    image: residentialImage1,
    details: "Proyek kursus pengantar ini berfokus pada penciptaan ruang hunian yang fungsional dan estetis — menekankan hunian terbuka dengan perhatian cermat terhadap aliran cahaya alami dan hubungan spasial.",
  },
  {
    id: "residential-2",
    label: "02",
    title: "Desain Interior Hunian II",
    description: "Desain hunian tingkat lanjut dengan susunan ruang yang kompleks",
    workingDrawings: 2,
    perspectives: 10,
    image: residentialImage2,
    details: "Membangun pengetahuan dasar, proyek lanjutan ini mengeksplorasi desain hunian bertingkat dengan palet material yang canggih dan teknologi rumah pintar terintegrasi.",
  },
  {
    id: "fujifilm",
    label: "03",
    title: "Toko Spesialis – FUJIFILM",
    description: "Ruang ritel komersial untuk pameran peralatan fotografi",
    workingDrawings: 3,
    perspectives: 6,
    image: fujifilmImage,
    details: "Lingkungan ritel modern yang dirancang untuk memamerkan produk FUJIFILM dengan zona tampilan interaktif, sistem pencahayaan profesional, dan area pengalaman pelanggan yang mencerminkan semangat inovatif merek.",
  },
  {
    id: "spa",
    label: "04",
    title: "LILIN AROMATERAPI & SPA",
    description: "Desain ruang ritel dan perawatan yang berfokus pada kesehatan",
    workingDrawings: 2,
    perspectives: 6,
    image: spaImage,
    details: "Lingkungan spa dan ritel yang tenang menggabungkan ritel aromaterapi dengan ruang perawatan kesehatan — menampilkan bahan-bahan alami, pencahayaan lembut, dan elemen desain yang terinspirasi dari zen.",
  },
];

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '6rem 0', background: '#9d9faa', position: 'relative', overflow: 'hidden' }}>

      {/* Background grid lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(237,235,221,0.02) 1px, transparent 1px)',
        backgroundSize: '100% 80px',
        pointerEvents: 'none',
      }} />

      <div className="container mx-auto px-6" style={{ position: 'relative' }}>

        {/* ── Section Header ─────────────────────────── */}
        <div className="fade-in-up" style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '1px', background: '#3a020a' }} />
            <div className="tag">Selected Works</div>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
          }}>
            My Projects
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#000000', lineHeight: 1.8, maxWidth: '540px' }}>
            A curated collection of projects highlighting design concepts,
            working drawings, and final renderings.
          </p>
        </div>

        {/* ── Project List ───────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {projectCategories.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ── Stats Strip ────────────────────────────── */}
        <div style={{
          marginTop: '5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          borderTop: '1px solid #8a8c96',
          borderLeft: '1px solid #8a8c96',
        }}>
          {[
            { num: '7',  label: 'Working Drawings'   },
            { num: '26', label: 'Perspective Renders' },
            { num: '4',  label: 'Projects'     },
            { num: '9',  label: 'Software Tools'      },
          ].map(stat => (
            <div
              key={stat.label}
              style={{
                padding: '2rem 1.5rem',
                borderRight: '1px solid #8a8c96',
                borderBottom: '1px solid #8a8c96',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#3a020a',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}>
                {stat.num}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ffffff' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* ── Project Row Component ─────────────────────────────── */
const ProjectRow = ({ project, index }: { project: typeof projectCategories[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0',
        borderTop: '1px solid #8a8c96',
        transition: 'background 0.35s ease',
        background: hovered ? '#adb0ba' : 'transparent',
      }}
      className="flex-col md:grid"
    >
      {/* Image side — alternates */}
      <div
        style={{
          order: index % 2 === 1 ? 2 : 1,
          overflow: 'hidden',
          position: 'relative',
          aspectRatio: '16/9',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.65s cubic-bezier(0.22,1,0.36,1), filter 0.4s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            filter: hovered ? 'grayscale(0%) brightness(1)' : 'grayscale(25%) brightness(0.8)',
          }}
        />
        {/* Maroon tint on hover */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(99,0,0,0.25)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Link to={`/projects/${project.id}`}>
            <button className="btn-hero" style={{ fontSize: '0.8rem', padding: '0.6rem 1.5rem' }}>
              <Eye size={14} />
              Lihat Detail
            </button>
          </Link>
        </div>
      </div>

      {/* Content side */}
      <div
        style={{
          order: index % 2 === 1 ? 1 : 2,
          padding: '3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1.25rem',
          borderLeft: index % 2 === 1 ? 'none' : '1px solid #8a8c96',
          borderRight: index % 2 === 1 ? '1px solid #8a8c96' : 'none',
        }}
      >
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontSize: '3.5rem',
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: 1,
          userSelect: 'none',
        }}>
          {project.label}
        </span>

        <div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '0.5rem',
            transition: 'color 0.25s',
          }}>
            {project.title}
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#3a020a', fontWeight: 500, letterSpacing: '0.03em', marginBottom: '0.875rem' }}>
            {project.description}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#000000', lineHeight: 1.8 }}>
            {project.details}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#3a020a' }}>
              {project.workingDrawings}
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#000000', marginLeft: '0.4rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Gambar Kerja{project.workingDrawings > 1 ? 's' : ''}
            </span>
          </div>
          <div style={{ width: '1px', background: '#8a8c96' }} />
          <div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#3a020a' }}>
              {project.perspectives}
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#000000', marginLeft: '0.4rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Perspektif
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
