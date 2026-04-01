import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/components/Layouts";
import { X } from "lucide-react";

import DI1_1     from "@/assets/DI1-1.png";
import DI1_2     from "@/assets/DI1-2.png";
import DI1_3     from "@/assets/DI1-3.png";
import DI1_4     from "@/assets/DI1-4.png";
import DI1_gamker from "@/assets/DI1-gamker.png";
import DI2_1     from "@/assets/DI2-1.png";
import DI2_2     from "@/assets/DI2-2.png";
import DI2_4     from "@/assets/DI2-4.png";
import DI2_5     from "@/assets/DI2-5.png";
import DI2_6     from "@/assets/DI2-6.png";
import DI2_7     from "@/assets/DI2-7.png";
import DI2_8     from "@/assets/DI2-8.png";
import DI2_9     from "@/assets/DI2-9.png";
import DI2_10    from "@/assets/DI2-10.png";
import DI2_gamker from "@/assets/DI2-gamker.png";
import FUJI1     from "@/assets/FUJI-1.png";
import FUJI2     from "@/assets/FUJI-2.png";
import FUJI3     from "@/assets/FUJI-3.png";
import FUJI4     from "@/assets/FUJI-4.png";
import FUJI5     from "@/assets/FUJI-5.png";
import FUJI6     from "@/assets/FUJI-6.png";
import FUJI7     from "@/assets/FUJI-7.png";
import FUJI8     from "@/assets/FUJI-8.png";
import FUJI9     from "@/assets/FUJI-9.png";
import SC1  from "@/assets/SC-1.png";
import SC2  from "@/assets/SC-2.png";
import SC3  from "@/assets/SC-3.png";
import SC4  from "@/assets/SC-4.png";
import SC5  from "@/assets/SC-5.png";
import SC6  from "@/assets/SC-6.png";
import SC7  from "@/assets/SC-7.png";
import SC8  from "@/assets/SC-8.png";

const projectDetails: Record<string, {
  title: string;
  description: string;
  working: { src: string; label: string }[];
  perspective: { src: string; label: string }[];
}> = {
  "residential-1": {
    title: "Desain Interior Hunian I",
    description: "Dengan tema “Feel The Nature” yang diusung dengan gaya alam Jepang. Menggabungkan keindahan alam dan budaya Jepang. Desainnya menekankan kesederhanaan, keseimbangan, dan ketenangan, dengan penggunaan warna-warna netral dan perabotan alami. Ruang terbuka dengan jendela-jendela besar menciptakan suasana yang harmonis dan menghubungkan penghuni dengan alam.",
    working:     [{ src: DI1_gamker, label: "Gambar Kerja" }],
    perspective: [
      { src: DI1_1, label: "Area Makan dan Dapur" },
      { src: DI1_2, label: "Kamar Tidur dan Area Kerja"   },
      { src: DI1_3, label: "Ruang Keluarga"             },
      { src: DI1_4, label: "Kamar Mandi"                },
    ],
  },
  "residential-2": {
    title: "Desain Interior Hunian II",
    description: "Rumah ini dirancang dengan gaya Modern Midcentury dan mengusung tema “Warming Nature Wood”. Rumah ini dirancang untuk memenuhi kebutuhan keluarga klien akan hunian yang fungsional dan estetis, sekaligus tetap menghadirkan suasana alami di tengah kota. Penggunaan bahan-bahan alami seperti kayu menciptakan suasana yang hangat dan tenang, serta mendukung kenyamanan akustik.",
    working:     [{ src: DI2_gamker, label: "Gambar Kerja" }],
    perspective: [
      { src: DI2_1,  label: "Fasad"                      },
      { src: DI2_2,  label: "FL1. Area Depan"              },
      { src: DI2_4,  label: "FL1. Area Makan dan Dapur"     },
      { src: DI2_5,  label: "FL1. Ruang Keluarga"            },
      { src: DI2_6,  label: "FL1. Area Belakang"               },
      { src: DI2_7,  label: "FL2. Area Keluarga"            },
      { src: DI2_8,  label: "FL2. Balkon"                },
      { src: DI2_9,  label: "FL2. Kamar Tidur Utama"         },
      { src: DI2_10, label: "FL2. Kamar Mandi"               },
    ],
  },
  fujifilm: {
    title: "Desain Interior Toko Spesialis – FUJIFILM",
    description: "Desain interior toko Fujifilm mengusung gaya kontemporer yang minimalis dan fungsional, sehingga pengunjung dapat dengan mudah menjelajahi ruang tersebut dan fokus pada produk-produk yang ditawarkan. Penggunaan bahan-bahan alami dan warna-warna lembut menciptakan suasana yang tenang, yang mencerminkan kualitas gambar Fujifilm.",
    working: [
      { src: FUJI1, label: "Gambar Kerja FL.1" },
      { src: FUJI2, label: "Gambar Kerja FL.2" },
      { src: FUJI3, label: "Gambar Kerja FL.3" },
    ],
    perspective: [
      { src: FUJI4, label: "FL1. Area Depan dan Photobooth" },
      { src: FUJI5, label: "FL1. Area Tampilan"         },
      { src: FUJI6, label: "FL2. Studio Foto"         },
      { src: FUJI7, label: "FL2. Area Pameran"      },
      { src: FUJI8, label: "FL3. Kafe"          },
      { src: FUJI9, label: "FL3. Lokakarya"             },
    ],
  },
  spa: {
    title: "Pemodelan Digital Toko – LILIN AROMATERAPI & SPA",
    description: "Rumah toko ini dirancang dengan gaya Wabi-Sabi dan mengusung tema yang terinspirasi dari alam. Gaya desain yang minimalis dan fungsional memfasilitasi sirkulasi dan berfokus pada produk-produk yang ditawarkan. Penggunaan bahan-bahan alami dan warna-warna lembut menciptakan suasana yang tenang, yang mencerminkan kesederhanaan.",
    working: [
      { src: SC8, label: "Gambar Kerja FL.1" },
      { src: SC7, label: "Gambar Kerja FL.2" },
    ],
    perspective: [
      { src: SC6, label: "Fasad"                  },
      { src: SC4, label: "FL1. Area Display Island" },
      { src: SC5, label: "FL1. Area Display Rak"       },
      { src: SC2, label: "FL1. Area Cermin Selfie"  },
      { src: SC3, label: "FL1. Area Display"        },
      { src: SC1, label: "FL2. Area Spa"            },
    ],
  },
};

/* ── Image card with hover zoom + maroon label ──────────── */
const ImageCard = ({ img, onClick }: { img: { src: string; label: string }; onClick: () => void }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        cursor: 'zoom-in',
        overflow: 'hidden',
        borderRadius: '2px',
        border: '1px solid #8a8c96',
        background: '#adb0ba',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
      }}
    >
      <img
        src={img.src}
        alt={img.label}
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), filter 0.4s ease',
          transform: hov ? 'scale(1.07)' : 'scale(1)',
          filter: hov ? 'brightness(1)' : 'brightness(0.82) grayscale(10%)',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(99,0,0,0.82) 0%, transparent 58%)',
        opacity: hov ? 1 : 0,
        transition: 'opacity 0.35s ease',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '1.25rem',
        pointerEvents: 'none',
      }}>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '0.95rem',
          fontWeight: 600,
          color: '#ffffff',
          transform: hov ? 'translateY(0)' : 'translateY(8px)',
          transition: 'transform 0.35s ease',
        }}>
          {img.label}
        </span>
      </div>
    </div>
  );
};

/* ── Section heading with decorative lines ──────────────── */
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
    <div style={{ width: '32px', height: '1px', background: '#3a020a', flexShrink: 0 }} />
    <h2 style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.375rem',
      fontWeight: 700,
      color: '#ffffff',
      letterSpacing: '-0.01em',
      whiteSpace: 'nowrap',
    }}>
      {children}
    </h2>
    <div style={{ flex: 1, height: '1px', background: '#8a8c96' }} />
  </div>
);

/* ── Main component ─────────────────────────────────────── */
const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectDetails[id || ""];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string>("");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const openLightbox = (src: string, label: string) => {
    setSelectedImage(src);
    setSelectedLabel(label);
  };

  if (!project) {
    return (
      <Layout>
        <section style={{ paddingTop: '8rem', paddingBottom: '4rem', background: '#9d9faa', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <div className="container mx-auto px-6 text-center">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#ffffff' }}>
              Project not found
            </h2>
          </div>
        </section>
      </Layout>
    );
  }

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
    gap: '1.25rem',
  };

  return (
    <Layout>
      <section style={{ paddingTop: '7rem', paddingBottom: '6rem', background: '#9d9faa', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

        {/* Atmospheric maroon glow */}
        <div style={{
          position: 'absolute', top: '-15%', right: '-5%',
          width: '45vw', height: '45vw',
          background: 'radial-gradient(ellipse, rgba(99,0,0,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container mx-auto px-6" style={{ position: 'relative' }}>

          {/* Title block */}
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
            <div className="tag" style={{ marginBottom: '1.25rem' }}>Project Details</div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}>
              {project.title}
            </h1>
            <div style={{ width: '48px', height: '2px', background: '#3a020a', margin: '0 auto 1.5rem' }} />
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.975rem',
              lineHeight: 1.85,
              color: '#000000',
              textAlign: 'justify',
            }}>
              {project.description}
            </p>
          </div>

          {/* Architectural Drawings */}
          <div style={{ marginBottom: '4rem' }}>
            <SectionHeading>Gambar Kerja</SectionHeading>
            <div style={gridStyle}>
              {project.working.map((img, idx) => (
                <ImageCard key={idx} img={img} onClick={() => openLightbox(img.src, img.label)} />
              ))}
            </div>
          </div>

          {/* Perspective Drawings */}
          <div>
            <SectionHeading>Gambar Perspektif</SectionHeading>
            <div style={gridStyle}>
              {project.perspective.map((img, idx) => (
                <ImageCard key={idx} img={img} onClick={() => openLightbox(img.src, img.label)} />
              ))}
            </div>
          </div>

        </div>

        {/* ── Lightbox ──────────────────────────────────── */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed', inset: 0,
              zIndex: 600,
              background: 'rgba(10, 8, 8, 0.97)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              animation: 'fadeInLB 0.2s ease',
            }}
          >
            {/* Top bar */}
            <div
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                padding: '1.25rem 1.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #8a8c96',
                background: 'rgba(27,23,23,0.85)',
                backdropFilter: 'blur(10px)',
              }}
              onClick={e => e.stopPropagation()}
            >
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1rem', color: '#000000' }}>
                {selectedLabel}
              </span>
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  background: 'rgba(99,0,0,0.15)',
                  border: '1px solid rgba(99,0,0,0.4)',
                  borderRadius: '2px',
                  width: '2.25rem', height: '2.25rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#3a020a')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(99,0,0,0.15)')}
              >
                <X size={16} />
              </button>
            </div>

            {/* Image */}
            <div onClick={e => e.stopPropagation()}>
              <img
                src={selectedImage}
                alt={selectedLabel}
                style={{
                  maxWidth: '92vw',
                  maxHeight: '82vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '2px',
                  boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px #8a8c96',
                  animation: 'scaleInLB 0.3s cubic-bezier(0.22,1,0.36,1)',
                }}
              />
            </div>

            {/* <p style={{ marginTop: '1rem', fontFamily: "'Inter', sans-serif", fontSize: '0.725rem', color: '#000000', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Click outside or press ✕ to close
            </p> */}

            <style>{`
              @keyframes fadeInLB {
                from { opacity: 0; } to { opacity: 1; }
              }
              @keyframes scaleInLB {
                from { opacity: 0; transform: scale(0.88); }
                to   { opacity: 1; transform: scale(1); }
              }
            `}</style>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ProjectDetails;
