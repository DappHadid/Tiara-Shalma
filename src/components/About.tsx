import { GraduationCap, Award, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'AutoCAD', level: 90 },
    { name: 'SketchUp', level: 85 },
    { name: '3ds Max', level: 80 },
    { name: 'Revit', level: 75 },
    { name: 'Photoshop', level: 88 },
    { name: 'Lumion', level: 82 },
  ];

  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Education',
      description: 'S1 Interior Design Program at Institut Teknologi Nasional',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Committed to pushing creative boundaries in every project',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion',
      description: 'Transforming spaces into meaningful experiences',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Blending traditional design principles with modern aesthetics',
    },
  ];

  return (
    <section id="about" className="py-20 bg-soft-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            As an Interior Design student, I believe that every space tells a story. 
            My mission is to create environments that not only look beautiful but also 
            enhance the way people live, work, and connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="slide-in-left space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-playfair font-semibold text-foreground">
                Design Philosophy
              </h3>
              <p className="text-lg text-foreground font-inter leading-relaxed">
                I approach each project with a deep understanding that great design 
                emerges from the perfect balance of form and function. My work is 
                driven by the belief that spaces should inspire, comfort, and elevate 
                the human experience.
              </p>
              <p className="text-lg text-foreground font-inter leading-relaxed">
                Through my studies at Institut Teknologi Nasional, I've developed 
                a comprehensive understanding of spatial relationships, sustainable 
                design practices, and the technical expertise needed to bring 
                creative visions to life.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="portfolio-card text-center group hover:bg-primary hover:text-primary-foreground"
                >
                  <div className="text-primary group-hover:text-primary-foreground mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-playfair font-semibold text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="fade-in-up space-y-8">
            <h3 className="text-3xl font-playfair font-semibold text-foreground">
              Technical Skills
            </h3>
            <p className="text-lg text-muted-foreground font-inter">
              Proficient in industry-standard software with a focus on precision 
              and creative excellence.
            </p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-inter font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-primary font-inter font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
              <blockquote className="text-lg font-playfair italic text-foreground">
                "Design is not just what it looks like and feels like. 
                Design is how it works and how it makes people feel."
              </blockquote>
              <cite className="text-primary font-inter font-medium mt-2 block">
                - My Design Philosophy
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;