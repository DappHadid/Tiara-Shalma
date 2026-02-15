import { Instagram, Mail, MapPin, Heart } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      value: "@4lme0",
      link: "https://instagram.com/4lme0",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "inialmeo@gmail.com",
      link: "mailto:inialmeo@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Institut Teknologi Nasional",
      link: null,
    },
    // {
    //   icon: <Heart className="h-6 w-6" />,
    //   label: "Status",
    //   value: "i'am taken >_<",
    //   link: null,
    // },
  ];

  return (
    <section id="contact" className="py-20 bg-soft-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">Let's Connect</h2>
          <div className="section-divider mb-8"></div>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate. Feel free to reach out and let's create
            something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <div key={index} className="portfolio-card text-center group hover:bg-primary hover:text-primary-foreground">
                <div className="text-primary group-hover:text-primary-foreground mb-4 flex justify-center">{item.icon}</div>
                <h4 className="font-playfair font-semibold text-lg mb-2">{item.label}</h4>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground group-hover:text-primary-foreground/80 hover:underline font-inter"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground group-hover:text-primary-foreground/80 font-inter">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-background p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Ready to Start a Project?</h3>
            <p className="text-lg text-muted-foreground font-inter mb-6 max-w-2xl mx-auto">
              Whether you're looking for interior design consultation, collaboration opportunities, or just want to connect with a passionate design
              student, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:inialmeo@gmail.com" className="btn-hero inline-flex items-center justify-center no-underline">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
              <a
                href="https://instagram.com/4lme0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center no-underline"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-12 text-center">
            <blockquote className="text-2xl font-playfair italic text-foreground mb-4">"Great design begins with great conversation."</blockquote>
            <cite className="text-primary font-inter font-medium">Let's start that conversation today.</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
