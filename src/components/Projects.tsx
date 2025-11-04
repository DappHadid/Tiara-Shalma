import { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import residentialImage1 from "@/assets/DI1-3.png";
import residentialImage2 from "@/assets/DI2-1.png";
import fujifilmImage from "@/assets/FUJI.png";
import spaImage from "@/assets/SC-6.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projectCategories = [
    {
      id: "residential-1",
      title: "Residential Interior Design I",
      description: "Fundamental principles of residential space planning and design",
      workingDrawings: 1,
      perspectives: 4,
      image: residentialImage1,
      details:
        "This introductory course project focuses on creating functional and aesthetically pleasing residential spaces. The design emphasizes open-plan living with careful attention to natural light flow and spatial relationships.",
    },
    {
      id: "residential-2",
      title: "Residential Interior Design II",
      description: "Advanced residential design with complex spatial arrangements",
      workingDrawings: 2,
      perspectives: 10,
      image: residentialImage2,
      details:
        "Building upon foundational knowledge, this advanced project explores multi-level residential design with sophisticated material palettes and integrated smart home technologies.",
    },
    {
      id: "fujifilm",
      title: "Specialty Store Interior Design – FUJIFILM",
      description: "Commercial retail space design for photography equipment showcase",
      workingDrawings: 3,
      perspectives: 6,
      image: fujifilmImage,
      details:
        "A modern retail environment designed to showcase FUJIFILM products with interactive display zones, professional lighting systems, and customer experience areas that reflect the brand's innovative spirit.",
    },
    {
      id: "spa",
      title: "Digital Modeling of Shops – SCENTED CANDLE & SPA",
      description: "Wellness-focused retail and treatment space design",
      workingDrawings: 2,
      perspectives: 6,
      image: spaImage,
      details:
        "A tranquil spa and retail environment that combines aromatherapy retail with wellness treatment spaces, featuring natural materials, soft lighting, and zen-inspired design elements.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">My Projects</h2>
          <div className="section-divider mb-8"></div>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            A collection of projects highlighting design concepts, working drawings, and final renderings.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projectCategories.map((project, index) => (
            <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
              {/* Image Section */}
              <div className={`project-image ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative group">
                  <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover rounded-xl shadow-lg" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                    <Link to={`/projects/${project.id}`}>
                      <Button variant="secondary" className="bg-white/90 text-primary hover:bg-white">
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="space-y-4">
                  <h3 className="text-3xl font-playfair font-bold text-foreground">{project.title}</h3>
                  <p className="text-lg text-muted-foreground font-inter leading-relaxed">{project.description}</p>
                  <p className="text-base text-foreground font-inter leading-relaxed">{project.details}</p>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <div className="text-2xl font-playfair font-bold text-primary">{project.workingDrawings}</div>
                    <div className="text-sm text-muted-foreground font-inter">Working Drawing{project.workingDrawings > 1 ? "s" : ""}</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <div className="text-2xl font-playfair font-bold text-primary">{project.perspectives}</div>
                    <div className="text-sm text-muted-foreground font-inter">Perspective Drawing{project.perspectives > 1 ? "s" : ""}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Categories Summary */}
        <div className="mt-20 bg-soft-white p-8 rounded-2xl">
          <h3 className="text-2xl font-playfair font-bold text-foreground mb-6 text-center">Project Portfolio Summary</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-primary mb-2">7</div>
              <div className="text-sm text-muted-foreground font-inter">Total Working Drawings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-primary mb-2">26</div>
              <div className="text-sm text-muted-foreground font-inter">Perspective Drawings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground font-inter">Course Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground font-inter">Software Tools Used</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
