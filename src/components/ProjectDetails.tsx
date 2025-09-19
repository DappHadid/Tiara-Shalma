import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layouts";

// Import semua gambar yg dibutuhkan
import DI1_1 from "@/assets/DI1-1.png";
import DI1_2 from "@/assets/DI1-2.png";
import DI1_3 from "@/assets/DI1-3.png";
import DI1_4 from "@/assets/DI1-4.png";
import DI1_gamker from "@/assets/DI1-gamker.png";

import DI2_1 from "@/assets/DI2-1.png";
import DI2_2 from "@/assets/DI2-2.png";
import DI2_4 from "@/assets/DI2-4.png";
import DI2_5 from "@/assets/DI2-5.png";
import DI2_6 from "@/assets/DI2-6.png";
import DI2_7 from "@/assets/DI2-7.png";
import DI2_8 from "@/assets/DI2-8.png";
import DI2_9 from "@/assets/DI2-9.png";
import DI2_10 from "@/assets/DI2-10.png";
import DI2_gamker from "@/assets/DI2-gamker.png";

import FUJI1 from "@/assets/FUJI-1.png";
import FUJI2 from "@/assets/FUJI-2.png";
import FUJI3 from "@/assets/FUJI-3.png";
import FUJI4 from "@/assets/FUJI-4.png";
import FUJI5 from "@/assets/FUJI-5.png";
import FUJI6 from "@/assets/FUJI-6.png";
import FUJI7 from "@/assets/FUJI-7.png";
import FUJI8 from "@/assets/FUJI-8.png";
import FUJI9 from "@/assets/FUJI-9.png";

import SC1 from "@/assets/SC-1.png";
import SC2 from "@/assets/SC-2.png";
import SC3 from "@/assets/SC-3.png";
import SC4 from "@/assets/SC-4.png";
import SC5 from "@/assets/SC-5.png";
import SC6 from "@/assets/SC-6.png";
import SC7 from "@/assets/SC-7.png";
import SC8 from "@/assets/SC-8.png";

// Struktur data project
const projectDetails: Record<
  string,
  {
    title: string;
    description: string;
    working: { src: string; label: string }[];
    perspective: { src: string; label: string }[];
  }
> = {
  "residential-1": {
    title: "Residential Interior Design I",
    description:
      "With the theme Feel The Nature presented through Japanese Nature as its style. Combining the beauty of nature and Japanese culture. The design emphasizes simplicity, balance, and tranquility, with the use of neutral colors and natural furniture. Open spaces with large windows create a harmonious atmosphere and connect residents with nature.",
    working: [{ src: DI1_gamker, label: "Working Drawing" }],
    perspective: [
      { src: DI1_1, label: "Dining and Kitchen Area" },
      { src: DI1_2, label: "Bedroom and Workspace" },
      { src: DI1_3, label: "Living Room " },
      { src: DI1_4, label: "Bathroom" },
    ],
  },

  "residential-2": {
    title: "Residential Interior Design II",
    description:
      "This house is designed in a Modern Midcentury style with a Warming Nature Wood theme. It was created to meet the client's family's need for a functional, aesthetically pleasing home that still provides a natural atmosphere in the middle of the city. The use of natural materials such as wood creates a warm, calm atmosphere and supports acoustic comfort. In addition, natural lighting and large openings are designed to maintain a connection with nature and support a dynamic modern lifestyle that is still rooted in family values and the comfort of home.",
    working: [{ src: DI2_gamker, label: "Working Drawing" }],
    perspective: [
      { src: DI2_1, label: "Facade" },
      { src: DI2_2, label: "FL1. Frontyard" },
      { src: DI2_4, label: "FL1. Dining and Kitchen Area" },
      { src: DI2_5, label: "FL1. Living Room" },
      { src: DI2_6, label: "FL1. Backyard" },
      { src: DI2_7, label: "FL2. Family Area " },
      { src: DI2_8, label: "FL2. Balcony" },
      { src: DI2_9, label: "FL2. Master Bedroom" },
      { src: DI2_10, label: "FL2. Bathroom" },
    ],
  },

  fujifilm: {
    title: "Specialty Store Interior Design – FUJIFILM",
    description:
      "The interior design of the Fujifilm store features a minimalist and functional contemporary style to make the space easy to navigate and focus on the products. The use of natural materials and soft colors creates a calm atmosphere that reflects the quality of Fujifilm images. Optimal lighting highlights the products, while the photography workshop area supports community engagement and customer education. This style is also quite flexible and can be easily adapted to the latest design trends, keeping the store relevant and attractive over time.",
    working: [
      { src: FUJI1, label: "Working Drawing FL.1" },
      { src: FUJI2, label: "Working Drawing FL.2" },
      { src: FUJI3, label: "Working Drawing FL.3" },
    ],
    perspective: [
      { src: FUJI4, label: "FL1. Foyer and Photobooth" },
      { src: FUJI5, label: "FL1. Display Area" },
      { src: FUJI6, label: "FL2. Photo Studio" },
      { src: FUJI7, label: "FL2. Exhibition Area" },
      { src: FUJI8, label: "FL3. Coffee Shop" },
      { src: FUJI9, label: "FL3. Workshop" },
    ],
  },
  spa: {
    title: "Digital Modeling of Shops – SCENTED CANDLE & SPA",
    description:
      "This shop house is designed in the Wabi-Sabi style with a Natured-Inspired theme. The minimalist and functional style facilitates circulation and focuses on the products. The use of natural materials and soft colors creates a calm atmosphere, reflecting simplicity. The presence of plants and natural textures enhances customer comfort and experience.",
    working: [
      { src: SC8, label: "Working Drawing FL.1" },
      { src: SC7, label: "Working Drawing FL.2" },
    ],
    perspective: [
      { src: SC6, label: "Facade" },
      { src: SC4, label: "FL1. Island Display Area" },
      { src: SC5, label: "FL1. Shelf Display" },
      { src: SC2, label: "FL1. Mirror Selfie Area" },
      { src: SC3, label: "FL1. Display Area" },
      { src: SC1, label: "FL2. Spa Area" },
    ],
  },
};

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectDetails[id || ""];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <Layout>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-foreground">Project not found</h2>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-6">
          {/* Judul & Deskripsi */}
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-6 text-center">{project.title}</h2>
          <p className="text-lg text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto text-justify mb-12">{project.description}</p>

          {/* Working Drawings */}
          <h3 className="text-2xl font-bold mb-6 text-primary">Architectural Drawings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {project.working.map((img, idx) => (
              <div key={idx} className="relative group rounded-xl overflow-hidden shadow-lg">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-[350px] object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-playfair font-semibold">{img.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Perspective Drawings */}
          <h3 className="text-2xl font-bold mb-6 text-primary">Perspective Drawings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.perspective.map((img, idx) => (
              <div key={idx} className="relative group rounded-xl overflow-hidden shadow-lg">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-[350px] object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-playfair font-semibold">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetails;
