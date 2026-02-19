import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-5 md:px-8 py-28">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            Work
          </span>
          <div className="h-px flex-1 max-w-12 bg-primary/40" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
            My Projects
          </h1>
        </div>
        <p className="text-base text-muted-foreground mb-16 max-w-2xl">
          A showcase of my professional work and projects. My focus is on creating
          intuitive, high-performance mobile and web applications with clean code
          and thoughtful architecture.
        </p>
      </ScrollReveal>

      <div className="space-y-24">
        {/* Publix Pharmacy App */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal delay={200}>
            <div className="rounded-lg border border-border bg-surface/50 h-80 flex items-center justify-center overflow-hidden relative">
              <Image
                src="/images/publix-pharmacy-app.webp"
                alt="Publix Pharmacy App"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-4">
                Publix Pharmacy App
              </h2>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {["Swift", "Kotlin", "Composable Architecture", "SwiftUI", "Combine", "Coroutines"].map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Transitioned the Publix Pharmacy app from Xamarin to native Swift
                (iOS) and Kotlin (Android), boosting performance by 40% and user
                satisfaction by 30%. Implemented a robust network layer using
                Combine (Swift) and Coroutines (Kotlin), reducing API response
                times by 20%.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Designed platform-specific navigation frameworks and integrated the Composable Architecture (TCA) for scalability",
                  "Implemented Quick Refill feature using App Clips (iOS) and Instant Apps (Android)",
                  "Created reliable medication reminders using UserNotifications (Swift) and WorkManager (Kotlin)",
                  "Enhanced accessibility with dynamic interfaces using SwiftUI and Jetpack Compose",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-mono text-xs mt-1 shrink-0">&gt;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* SoSecure by ADT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal delay={200} className="order-1 lg:order-2">
            <div className="rounded-lg border border-border bg-surface/50 h-80 flex items-center justify-center overflow-hidden relative">
              <Image
                src="/images/sosecure-by-adt.webp"
                alt="SoSecure by ADT"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400} className="order-2 lg:order-1">
            <div>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-4">
                SoSecure by ADT
              </h2>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {["Swift", "UIKit", "SwiftUI", "RxSwift", "MVVM"].map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Designed and implemented a safety-focused mobile app using Swift
                for iOS, incorporating geofencing, voice-activated silent alarms,
                and push notifications. Built using RxSwift and MVVM architecture
                to ensure maintainability and scalability.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Gained extensive experience implementing SwiftUI and UIKit for navigation",
                  "Started with UIKit as the foundation and gradually integrated SwiftUI components",
                  "Maintained UIKit-based navigation for stability and production-tested reliability",
                  "Leveraged RxSwift for reactive programming and state management",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-mono text-xs mt-1 shrink-0">&gt;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* IOTAS App */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal delay={200}>
            <div className="rounded-lg border border-border bg-surface/50 h-80 flex items-center justify-center overflow-hidden relative">
              <Image
                src="/images/iotas-home-app.webp"
                alt="IOTAS Home Automation App"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-4">
                IOTAS Home Automation App
              </h2>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {["Flutter", "Dart", "Bloc", "Cross-Platform"].map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Developed a home automation app for IOTAS using Flutter, enabling
                users to control smart devices across connected ecosystems. Focused
                on optimizing cross-platform performance, reducing development
                time by 40%.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Enhanced user engagement with personalized notifications and dynamic UI features",
                  "Implemented Flutter Bloc pattern for robust state management",
                  "Created consistent user experience across iOS and Android platforms",
                  "Integrated with various smart home device APIs for comprehensive device control",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-mono text-xs mt-1 shrink-0">&gt;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Other Projects */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono text-primary tracking-widest uppercase">
                More
              </span>
              <div className="h-px flex-1 max-w-12 bg-primary/40" />
              <h2 className="text-3xl font-heading font-bold tracking-tight">
                Other Projects
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Pipol Pay Mobile by Facebank",
                description:
                  "Developed secure, encrypted web services with QR-based payment features.",
                tags: ["Swift", "UIKit", "Payments"],
                delay: 100,
              },
              {
                title: "Metricle Mobile",
                description:
                  "Built stock prediction app with SwiftUI and Combine for real-time sentiment analysis.",
                tags: ["SwiftUI", "Combine", "Financial"],
                delay: 200,
              },
              {
                title: "OMSA Gallery",
                description:
                  "Engineered a Node.js backend to optimize inventory management and payment processing, reducing costs by 20% and increasing transaction speed by 25%.",
                tags: ["Node.js", "AWS", "iOS"],
                delay: 300,
              },
            ].map((project, i) => (
              <ScrollReveal key={i} delay={project.delay}>
                <div className="p-5 rounded-lg border border-border bg-surface/50 hover:border-primary/30 transition-all duration-300 h-full">
                  <h3 className="text-base font-heading font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
