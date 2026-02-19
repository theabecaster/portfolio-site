import ContactForm from "@/components/ui/ContactForm";
import React from "react";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-5 md:px-8 py-28">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            Reach Out
          </span>
          <div className="h-px flex-1 max-w-12 bg-primary/40" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
            Contact Me
          </h1>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <ScrollReveal delay={200}>
          <div>
            <p className="text-base text-text-body mb-8 leading-relaxed">
              I&apos;m interested in freelance opportunities, full-time positions,
              and collaborations. If you have any questions or would like to discuss
              potential projects, feel free to reach out through any of the channels
              below.
            </p>

            <div className="space-y-4 mt-8">
              {[
                {
                  icon: <FiMail className="w-4 h-4 text-primary mt-0.5" />,
                  title: "Email",
                  content: (
                    <a
                      href="mailto:inquiries@abrahamgonzalez.dev"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                    >
                      inquiries@abrahamgonzalez.dev
                    </a>
                  ),
                },
                {
                  icon: <FiPhone className="w-4 h-4 text-primary mt-0.5" />,
                  title: "Phone",
                  content: (
                    <a
                      href="tel:+17864874788"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                    >
                      (786) 487-4788
                    </a>
                  ),
                },
                {
                  icon: <FiMapPin className="w-4 h-4 text-primary mt-0.5" />,
                  title: "Location",
                  content: (
                    <p className="text-sm text-muted-foreground font-mono">
                      Miami, FL
                    </p>
                  ),
                },
                {
                  icon: <FiLinkedin className="w-4 h-4 text-primary mt-0.5" />,
                  title: "LinkedIn",
                  content: (
                    <a
                      href="https://www.linkedin.com/in/abraham-1996-gonzalez/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                    >
                      abraham-1996-gonzalez
                    </a>
                  ),
                },
                {
                  icon: <FiGithub className="w-4 h-4 text-primary mt-0.5" />,
                  title: "GitHub",
                  content: (
                    <a
                      href="https://github.com/theabecaster/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                    >
                      theabecaster
                    </a>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded border border-border bg-surface/50"
                >
                  {item.icon}
                  <div>
                    <h2 className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      {item.title}
                    </h2>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <ContactForm showSubjectField={true} />
        </ScrollReveal>
      </div>
    </div>
  );
}
