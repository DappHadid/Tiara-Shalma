import { GraduationCap, Award, Heart, Lightbulb } from "lucide-react";
import sketchup from "@/assets/sketchup-logo.png";
import autocad from "@/assets/autocad-logo.png";
import layout from "@/assets/layoutsketchup-logo.png";
import canva from "@/assets/canva-logo.jpeg";
import archicad from "@/assets/archicad-logo.png";
import d5render from "@/assets/D5-logo.png";
import enscape from "@/assets/enscape-logo.png";
import Adobe from "@/assets/adobe-logo.png";
import capcut from "@/assets/capcut-logo.svg";
import appa from "@/assets/appa-logo.svg";

const About = () => {
  const skills = [
    {
      name: "AutoCAD",
      logo: autocad,
    },
    {
      name: "ArchiCAD",
      logo: archicad,
    },
    {
      name: "SketchUp",
      logo: sketchup,
    },
    {
      name: "Layout SketchUp",
      logo: layout,
    },
    {
      name: "Canva",
      logo: canva,
    },
    {
      name: "Enscape",
      logo: enscape,
    },
    {
      name: "D5 Render",
      logo: d5render,
    },
    {
      name: "Adobe Photoshop",
      logo: Adobe,
    },
    {
      name: "Capcut",
      logo: capcut,
    },
    {
      name: "Fall in love with Appa",
      logo: appa,
    },
  ];

  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education",
      description: "Bachelor’s Degree in Interior Design, Institut Teknologi Nasional Bandung",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "Dedicated to pushing creative boundaries in every project",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "Transforming spaces into meaningful experiences",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Blending timeless design principles with modern aesthetics",
    },
  ];

  return (
    <section id="about" className="py-20 bg-soft-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">About Me</h2>
          <div className="section-divider mb-8"></div>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            As an Interior Design student, I believe every space has a story to tell. My mission is to design environments that are not only visually
            appealing but also improve the way people live, work, and connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="slide-in-left space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-playfair font-semibold text-foreground">Design Philosophy</h3>
              <p className="text-lg text-foreground font-inter leading-relaxed">
                I approach each project with the understanding that great design arises from the seamless balance between form and function. I believe
                that spaces should inspire, provide comfort, and enrich the human experience.
              </p>
              <p className="text-lg text-foreground font-inter leading-relaxed">
                Through my studies at Institut Teknologi Nasional, I have gained a solid foundation in spatial relationships, sustainable design
                practices, and the technical expertise required to transform creative ideas into reality.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="portfolio-card text-center group hover:bg-primary hover:text-primary-foreground">
                  <div className="text-primary group-hover:text-primary-foreground mb-4 flex justify-center">{item.icon}</div>
                  <h4 className="font-playfair font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="fade-in-up space-y-8">
            <h3 className="text-3xl font-playfair font-semibold text-foreground">Technical Skills</h3>
            <p className="text-lg text-muted-foreground font-inter">
              Proficient in industry-standard design software, with a strong emphasis on precision and creative innovation.{" "}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img src={skill.logo} alt={`${skill.name} logo`} className="h-8 w-8 flex-shrink-0 object-contain" loading="lazy" />
                  <span className="font-inter font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            {/* <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
              <blockquote className="text-lg font-playfair italic text-foreground">
                "my projects, A collection of projects highlighting design concepts, working drawings, and final renderings."
              </blockquote>
              <cite className="text-primary font-inter font-medium mt-2 block">- My Design Philosophy</cite>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
