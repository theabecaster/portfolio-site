import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-5 md:px-8 py-28">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            About
          </span>
          <div className="h-px flex-1 max-w-12 bg-primary/40" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
            About Me
          </h1>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <ScrollReveal delay={200} className="md:col-span-2">
          <div className="space-y-5">
            <p className="text-lg text-text-body leading-relaxed">
              I&apos;m Abraham Gonzalez, a Software Engineer with a focus on creating
              exceptional mobile and web applications. With expertise in native iOS
              and Android development as well as modern web technologies, I build
              scalable, performant, user-centric applications that deliver outstanding
              digital experiences.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              My journey in software engineering has allowed me to work with diverse
              technologies and frameworks, from SwiftUI and Kotlin to React and
              Next.js. I&apos;m passionate about writing clean, maintainable code and
              leveraging the right tools and architectural patterns to solve complex
              problems.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              Currently, I&apos;m working at{" "}
              <span className="text-primary font-medium">Publix Technology</span>,
              where I&apos;ve been instrumental in transitioning their Pharmacy app
              from Xamarin to native platforms, significantly improving performance
              and user satisfaction.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              Outside of my professional life, I&apos;m dedicated to Brazilian Jiu
              Jitsu training, which has taught me discipline and problem-solving in
              ways that complement my engineering mindset. When I&apos;m not on the
              mats, you can find me exploring the open road on my motorcycle or
              cherishing quality time with my family, which keeps me grounded and
              inspired.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <div className="rounded-lg border border-border bg-surface/50 p-2 h-72 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/images/profile-photo.webp"
              alt="Abraham Gonzalez"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Education */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            EDU
          </span>
          <div className="h-px flex-1 max-w-12 bg-primary/40" />
          <h2 className="text-3xl font-heading font-bold tracking-tight">
            Education
          </h2>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="mb-16 p-6 rounded-lg border border-border bg-surface/50">
          <h3 className="text-xl font-heading font-bold text-foreground">
            Florida International University
          </h3>
          <p className="text-base text-text-body mb-1">
            Bachelor of Science in Computer Science
          </p>
          <p className="text-sm font-mono text-muted-foreground mb-4">
            GPA: 3.53/4.00
          </p>
          <p className="text-sm text-text-body">
            <span className="font-medium text-foreground">Relevant Coursework:</span>{" "}
            Data Structures, Algorithms, Operating Systems, Database Systems,
            Machine Learning Fundamentals
          </p>
        </div>
      </ScrollReveal>

      {/* Skills */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            TECH
          </span>
          <div className="h-px flex-1 max-w-12 bg-primary/40" />
          <h2 className="text-3xl font-heading font-bold tracking-tight">
            Skills
          </h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {[
          {
            title: "Programming Languages",
            content: (
              <>
                <p className="text-sm text-text-body mb-1">
                  <span className="font-medium text-foreground">Expertise:</span>{" "}
                  Swift, Kotlin, JavaScript, TypeScript
                </p>
                <p className="text-sm text-text-body">
                  <span className="font-medium text-foreground">Proficiency:</span>{" "}
                  Objective-C, Java, C#, Dart
                </p>
              </>
            ),
            delay: 100,
          },
          {
            title: "Mobile Development",
            content: (
              <>
                <p className="text-sm text-text-body mb-1">
                  <span className="font-medium text-foreground">Native:</span>{" "}
                  SwiftUI, UIKit, Kotlin, Objective-C
                </p>
                <p className="text-sm text-text-body">
                  <span className="font-medium text-foreground">Cross-Platform:</span>{" "}
                  Flutter
                </p>
              </>
            ),
            delay: 200,
          },
          {
            title: "Web Development",
            content: (
              <>
                <p className="text-sm text-text-body mb-1">
                  <span className="font-medium text-foreground">Frontend:</span>{" "}
                  React, Next.js
                </p>
                <p className="text-sm text-text-body">
                  <span className="font-medium text-foreground">Backend:</span>{" "}
                  Node.js
                </p>
              </>
            ),
            delay: 300,
          },
          {
            title: "Tools & Frameworks",
            content: (
              <>
                <p className="text-sm text-text-body mb-1">
                  <span className="font-medium text-foreground">UI/UX:</span>{" "}
                  Figma, Sketch, Zeplin
                </p>
                <p className="text-sm text-text-body mb-1">
                  <span className="font-medium text-foreground">VCS:</span>{" "}
                  Git, Jira
                </p>
                <p className="text-sm text-text-body mb-1">
                  <span className="font-medium text-foreground">CI/CD:</span>{" "}
                  Azure DevOps, Azure Pipelines
                </p>
                <p className="text-sm text-text-body">
                  <span className="font-medium text-foreground">Testing:</span>{" "}
                  XCTest, XCUITest, Appium, Nimble, Quick
                </p>
              </>
            ),
            delay: 400,
          },
        ].map((card, i) => (
          <ScrollReveal key={i} delay={card.delay}>
            <div className="p-6 rounded-lg border border-border bg-surface/50 h-full">
              <h3 className="text-base font-heading font-bold text-foreground mb-3">
                {card.title}
              </h3>
              {card.content}
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Specialized Knowledge */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            SPEC
          </span>
          <div className="h-px flex-1 max-w-12 bg-primary/40" />
          <h2 className="text-3xl font-heading font-bold tracking-tight">
            Specialized Knowledge
          </h2>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="p-6 rounded-lg border border-border bg-surface/50 mb-16">
          <p className="text-sm text-text-body mb-1">
            <span className="font-medium text-foreground">Frameworks:</span>{" "}
            RxSwift, Combine, Swift Composable Architecture (TCA), Flutter Bloc
          </p>
          <p className="text-sm text-text-body mb-1">
            <span className="font-medium text-foreground">
              Architectural Patterns:
            </span>{" "}
            MVC, MVVM, Composable Architecture, Bloc
          </p>
          <p className="text-sm text-text-body">
            Extensive experience with reactive programming and state management.
          </p>
        </div>
      </ScrollReveal>

      {/* Achievements */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            WINS
          </span>
          <div className="h-px flex-1 max-w-12 bg-primary/40" />
          <h2 className="text-3xl font-heading font-bold tracking-tight">
            Achievements
          </h2>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="space-y-3 mb-12">
          {[
            "Reduced operational costs and app load times by 25% through optimized architectures.",
            "Automated 85% of regression tests, ensuring faster release cycles.",
            "Enhanced user satisfaction by 30% through strategic UI/UX improvements.",
            "Boosted app performance by 40% by transitioning from cross-platform to native solutions.",
            "Implemented robust network layers using Combine (Swift) and Coroutines (Kotlin), reducing API response times by 20%.",
          ].map((achievement, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded border border-border bg-surface/50"
            >
              <span className="text-primary font-mono text-xs mt-0.5 shrink-0">
                0{i + 1}
              </span>
              <p className="text-sm text-text-body">{achievement}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
