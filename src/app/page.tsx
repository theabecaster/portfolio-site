import Hero from "@/components/sections/Hero";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/ui/ContactForm";
import Image from "next/image";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

export default function Home() {
  const skillCategories = [
    {
      title: "Mobile",
      label: "NATIVE",
      skills: ["Swift", "SwiftUI", "Kotlin", "UIKit", "Flutter", "Dart"],
    },
    {
      title: "Web",
      label: "FRONTEND",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      label: "SYSTEMS",
      skills: ["Node.js", "REST APIs", "Combine", "Coroutines", "RxSwift"],
    },
    {
      title: "Architecture",
      label: "PATTERNS",
      skills: ["MVVM", "TCA", "Bloc", "MVC", "Clean Architecture"],
    },
    {
      title: "Tools",
      label: "WORKFLOW",
      skills: ["Git", "Azure DevOps", "Figma", "XCTest", "Appium", "Jira"],
    },
  ];

  const projects = [
    {
      title: "Publix Pharmacy App",
      description:
        "Transitioned the Publix Pharmacy app from Xamarin to native Swift (iOS) and Kotlin (Android), boosting performance by 40%.",
      technologies: ["Swift", "Kotlin", "SwiftUI", "TCA", "Combine"],
      demoUrl: "https://apps.apple.com/us/app/publix-pharmacy/id1148770146",
      image: "/images/publix-pharmacy-app.webp",
      metric: "+40%",
      metricLabel: "Performance",
    },
    {
      title: "SoSecure by ADT",
      description:
        "Designed and implemented a safety-focused mobile app using Swift for iOS with geofencing and silent alarms.",
      technologies: ["Swift", "UIKit", "RxSwift", "MVVM"],
      demoUrl: "https://apps.apple.com/us/app/sosecure/id1495220820",
      image: "/images/sosecure-by-adt.webp",
      metric: "iOS",
      metricLabel: "Platform",
    },
    {
      title: "IOTAS Home App",
      description:
        "Developed a home automation app using Flutter, enabling users to control smart devices across connected ecosystems.",
      technologies: ["Flutter", "Dart", "Bloc"],
      demoUrl: "#",
      image: "/images/iotas-home-app.webp",
      metric: "-40%",
      metricLabel: "Dev Time",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <Hero />

      {/* Section divider */}
      <div className="section-divider" />

      {/* About Section */}
      <Section id="about">
        <div className="container mx-auto px-5 md:px-8">
          {/* Section header */}
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-xs font-mono text-primary tracking-widest uppercase">
                01
              </span>
              <div className="h-px flex-1 max-w-12 bg-primary/40" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                About
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <ScrollReveal className="lg:col-span-3">
              <div className="space-y-5">
                <p className="text-lg text-text-body leading-relaxed">
                  I&apos;m a Software Engineer with expertise in native mobile and web development.
                  With years of experience creating custom solutions for diverse clients,
                  I bring a versatile skill set focused on clean code, thoughtful architecture,
                  and exceptional user experiences.
                </p>
                <p className="text-lg text-text-body leading-relaxed">
                  Currently at{" "}
                  <span className="text-primary font-medium">Publix Technology</span>,
                  where I&apos;ve been instrumental in transitioning their Pharmacy app
                  from Xamarin to native platforms, significantly improving performance
                  and user satisfaction.
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[
                    { value: "5+", label: "Years Exp." },
                    { value: "40%", label: "Perf. Boost" },
                    { value: "85%", label: "Test Coverage" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="text-center p-4 rounded border border-border bg-surface/50"
                    >
                      <div className="text-2xl font-heading font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs font-mono text-muted-foreground mt-1 tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="lg:col-span-2">
              <div className="rounded-lg overflow-hidden border border-border bg-surface/50 aspect-[4/3] relative">
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

      <div className="section-divider" />

      {/* Skills Section */}
      <Section id="skills">
        <div className="container mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-primary tracking-widest uppercase">
                02
              </span>
              <div className="h-px flex-1 max-w-12 bg-primary/40" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                Skills
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xl mb-12 text-base">
              Technologies and tools I work with to build modern mobile and web applications.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {skillCategories.map((category, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group rounded-lg border border-border bg-surface/50 p-5 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-heading font-bold text-foreground">
                      {category.title}
                    </h3>
                    <span className="text-[10px] font-mono text-muted-foreground tracking-widest border border-border rounded px-1.5 py-0.5">
                      {category.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="tech-tag"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider" />

      {/* Projects Section */}
      <Section id="projects">
        <div className="container mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-primary tracking-widest uppercase">
                03
              </span>
              <div className="h-px flex-1 max-w-12 bg-primary/40" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                Projects
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xl mb-12 text-base">
              Featured work from my professional career. Each project represents
              a commitment to performance and user experience.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="group rounded-lg border border-border bg-surface/50 overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  {/* Project image */}
                  <div className="h-48 bg-muted relative overflow-hidden">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    {/* Metric overlay */}
                    <div className="absolute top-3 right-3 bg-code-bg/90 backdrop-blur-sm rounded px-2.5 py-1.5 border border-border/50">
                      <div className="text-sm font-mono font-bold text-primary leading-none">
                        {project.metric}
                      </div>
                      <div className="text-[9px] font-mono text-muted-foreground tracking-wider mt-0.5">
                        {project.metricLabel}
                      </div>
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech, j) => (
                        <span key={j} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary-dark transition-colors"
                      >
                        <FiExternalLink className="h-3.5 w-3.5" />
                        View on App Store
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* View all projects link */}
          <ScrollReveal delay={400}>
            <div className="mt-10 text-center">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-primary-dark transition-colors group"
              >
                View all projects
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <div className="section-divider" />

      {/* Contact Section */}
      <Section id="contact">
        <div className="container mx-auto px-5 md:px-8">
          <div className="max-w-xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary tracking-widest uppercase">
                  04
                </span>
                <div className="h-px flex-1 max-w-12 bg-primary/40" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                  Contact
                </h2>
              </div>
              <p className="text-muted-foreground mb-8 text-base">
                Interested in working together? Send a message and I&apos;ll get back to you.
              </p>

              <ContactForm predefinedSubject="Portfolio Website Inquiry" />
            </ScrollReveal>
          </div>
        </div>
      </Section>
    </div>
  );
}
