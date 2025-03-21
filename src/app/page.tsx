import Hero from "@/components/sections/Hero";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FiSmartphone, FiCode, FiLayers, FiServer, FiLayout, FiPackage } from "react-icons/fi";
import ContactForm from "@/components/ui/ContactForm";
import Image from "next/image";

export default function Home() {
  const skills = [
    { name: "Swift", icon: <FiSmartphone className="text-primary text-xl" /> },
    { name: "Kotlin", icon: <FiSmartphone className="text-primary text-xl" /> },
    { name: "JavaScript", icon: <FiCode className="text-primary text-xl" /> },
    { name: "TypeScript", icon: <FiCode className="text-primary text-xl" /> },
    { name: "SwiftUI", icon: <FiLayout className="text-primary text-xl" /> },
    { name: "UIKit", icon: <FiLayout className="text-primary text-xl" /> },
    { name: "React", icon: <FiLayers className="text-primary text-xl" /> },
    { name: "Next.js", icon: <FiLayers className="text-primary text-xl" /> },
    { name: "Node.js", icon: <FiServer className="text-primary text-xl" /> },
    { name: "Flutter", icon: <FiPackage className="text-primary text-xl" /> },
  ];

  const projects = [
    {
      title: "Publix Pharmacy App",
      description: "Transitioned the Publix Pharmacy app from Xamarin to native Swift (iOS) and Kotlin (Android), boosting performance by 40%.",
      technologies: ["Swift", "Kotlin", "SwiftUI"],
      demoUrl: "https://apps.apple.com/us/app/publix-pharmacy/id1148770146",
      sourceUrl: "#", 
      image: "/images/publix-pharmacy-app.webp"
    },
    {
      title: "SoSecure by ADT",
      description: "Designed and implemented a safety-focused mobile app using Swift for iOS with geofencing and silent alarms.",
      technologies: ["Swift", "UIKit", "RxSwift"],
      demoUrl: "https://apps.apple.com/us/app/sosecure/id1495220820",
      sourceUrl: "#", 
      image: "/images/sosecure-by-adt.webp"
    },
    {
      title: "IOTAS Home App",
      description: "Developed a home automation app using Flutter, enabling users to control smart devices across connected ecosystems.",
      technologies: ["Flutter", "Dart", "Bloc"],
      demoUrl: "#",
      sourceUrl: "#", 
      image: "/images/iotas-home-app.webp"
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <Hero />
      
      {/* About Section */}
      <Section id="about">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg mb-4">
                  I&apos;m a Software Engineer with expertise in native mobile and web development.
                </p>
                <p className="text-lg mb-4">
                  With years of experience in creating custom solutions for a diverse range of clients,
                  I bring a versatile skill set to every project. I&apos;m passionate about clean code,
                  thoughtful architecture, and delivering exceptional user experiences.
                </p>
                <p className="text-lg mb-6">
                  Currently working at Publix Technology, where I&apos;ve been instrumental in transitioning
                  their Pharmacy app from Xamarin to native platforms, significantly improving performance and user satisfaction.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="bg-muted rounded-lg h-64 overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/images/profile-poster.webp"
                  preload="auto"
                >
                  <source src="/videos/profile-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>
      
      {/* Skills Section */}
      <Section id="skills" className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I work with a variety of technologies and tools to build modern mobile and web applications.
            My expertise spans multiple platforms and programming languages.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <ScrollReveal 
              key={i} 
              delay={i * 100} // Staggered animation
              className="flex"
            >
              <div 
                className="bg-background rounded-lg p-6 text-center border border-gray-200 hover:border-primary transition-colors flex flex-col items-center justify-center w-full"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  {skill.icon}
                </div>
                <h3 className="font-medium">{skill.name}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
      
      {/* Projects Section */}
      <Section id="projects">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Check out my projects page for a more comprehensive portfolio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal 
              key={i}
              delay={i * 200} // Staggered animation
              className="flex"
            >
              <div 
                className="bg-background rounded-lg overflow-hidden border border-gray-200 hover:border-primary transition-colors flex flex-col w-full"
              >
                <div className="h-48 bg-muted flex items-center justify-center relative">
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-muted-foreground">Project Image</span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a href={project.demoUrl} className="text-primary hover:underline">View Demo</a>
                    )}
                    {project.sourceUrl && project.sourceUrl !== "#" && (
                      <a href={project.sourceUrl} className="text-primary hover:underline">Source Code</a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
      
      {/* Contact Section */}
      <Section id="contact" className="bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              Interested in working together? Have a question about my work? Feel free to reach out.
            </p>
            
            <ContactForm predefinedSubject="Portfolio Website Inquiry" />
          </ScrollReveal>
        </div>
      </Section>
    </div>
  );
}
