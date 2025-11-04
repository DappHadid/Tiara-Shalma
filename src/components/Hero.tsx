import { ArrowDown, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import tiaraPortrait from "@/assets/photoprofile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft-white via-background to-soft-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="fade-in-up space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-foreground leading-tight">
                Tiara Shalma
                <span className="text-primary block">A Sakhra</span>
              </h1>
              <div className="section-divider ml-0"></div>
              <p className="text-xl text-muted-foreground font-inter leading-relaxed">
                Innovative Interior Design student at Institut Teknologi Nasional Bandung, dedicated to transforming spaces through creative vision
                and technical expertise.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-foreground font-inter">
                Passionate about designing harmonious environments that balance aesthetics and functionality, bringing ideas to life with thoughtful
                and impactful design.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection("projects")} className="btn-hero group">
                  <FileText className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  View Projects
                </Button>
                <Button onClick={() => scrollToSection("contact")} variant="outline" className="btn-outline">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Skills Preview */}
            {/* <div className="pt-8">
              <p className="text-sm text-muted-foreground font-inter mb-4">TECHNICAL EXPERTISE</p>
              <div className="flex flex-wrap gap-3">
                {["AutoCAD", "SketchUp", "3ds Max", "Revit", "Photoshop", "Lumion"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-inter font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right Content - Image */}
          <div className="slide-in-left lg:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl animate-glow"></div>
              <div className="relative bg-card rounded-2xl p-2 shadow-2xl">
                <img src={tiaraPortrait} alt="Tiara Shalma a Sakhra - Interior Design Student" className="w-full h-[600px] object-cover rounded-xl" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
