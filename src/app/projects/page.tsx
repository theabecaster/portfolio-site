import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FiExternalLink, FiGithub } from "react-icons/fi";

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
          From enterprise mobile platforms to multi-tenant SaaS, AI-powered tools,
          and hardware projects built for curiosity.
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
                {["Swift", "Kotlin", "SwiftUI", "Jetpack Compose", "REST APIs", "CI/CD"].map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Architected and shipped the Publix Pharmacy iOS and Android
                applications from greenfield to production — grew the app rating
                from 1.9 to 4.9 stars while growing the user base and total review
                count simultaneously. Designing mobile-first REST APIs powering
                pharmacy operations for millions of customers across the US.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Built an internal MCP server using XCUITest for AI-driven iOS automation — shipped months before Appium's official MCP",
                  "Own and manage all mobile CI/CD pipelines across the department on Azure DevOps and AWS",
                  "Senior technical lead across a multi-team department for mobile architecture decisions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-mono text-xs mt-1 shrink-0">&gt;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://apps.apple.com/us/app/publix-pharmacy/id1148770146"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary-dark transition-colors"
              >
                <FiExternalLink className="h-3.5 w-3.5" />
                View on App Store
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* MembershipIQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal delay={200} className="order-1 lg:order-2">
            <div className="rounded-lg border border-border bg-surface/50 h-80 flex items-center justify-center overflow-hidden relative">
              <Image
                src="/images/membershipiq-app.webp"
                alt="MembershipIQ Platform"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400} className="order-2 lg:order-1">
            <div>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-4">
                MembershipIQ
              </h2>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {["React", "Node.js", "PostgreSQL", "Supabase", "Twilio", "Multi-Tenant"].map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                A multi-tenant white-label SaaS platform currently serving 100+
                client apps from a single shared Node.js backend. Designed the full
                system from scratch: shared infrastructure, per-tenant isolation,
                auth boundaries, and deployment pipeline.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Built React manager dashboard with multi-tenant analytics, subscription management, and white-label configuration",
                  "White-label client app with dynamic theming, React Suspense, memoization, and virtualization for data-heavy views",
                  "PostgreSQL with row-level multi-tenancy, Supabase Auth, and Twilio SMS authentication",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-mono text-xs mt-1 shrink-0">&gt;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://membershipiq.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary-dark transition-colors"
              >
                <FiExternalLink className="h-3.5 w-3.5" />
                membershipiq.app
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Venli */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal delay={200}>
            <div className="rounded-lg border border-border bg-surface/50 h-80 flex items-center justify-center overflow-hidden relative">
              <Image
                src="/images/venli-app.webp"
                alt="Venli AI Tourist Guide"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-4">
                Venli — AI Tourist Guide
              </h2>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {["React", "Node.js", "OpenAI Realtime API", "gRPC", "WebSockets"].map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                An LLM-powered tourist guide that knows your real-time location and
                speaks to you as a natural person using OpenAI&apos;s Realtime API
                over gRPC. Built the complete web application in React and Node.js.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Implemented low-latency streaming voice responses with WebSocket state, audio chunking, and React rendering optimization",
                  "Built geolocation-aware React UI using custom hooks, context, and re-render optimization during continuous location polling",
                  "Integrated in-app payments end-to-end and served as system designer and tech lead for mobile development",
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

        {/* SoSecure */}
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
                {["Swift", "UIKit", "Core ML", "Speech-to-Text", "SDK"].map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                An iOS personal safety app featuring on-device speech-to-text,
                real-time location tracking, and geofencing. Required deep integration
                with iOS system APIs and careful battery/privacy trade-offs.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Developed the SoSecure SDK, adopted by Lyft as a core rider safety feature across their platform",
                  "Real enterprise SDK adoption — built and shipped during my time as a junior engineer",
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

        {/* Personal & Open Source Projects */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono text-primary tracking-widest uppercase">
                More
              </span>
              <div className="h-px flex-1 max-w-12 bg-primary/40" />
              <h2 className="text-3xl font-heading font-bold tracking-tight">
                Personal & Open Source
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Lumon MDR Terminal",
                description:
                  "A Rust + Ratatui TUI recreating the Macrodata Refinement interface from Severance — with loading sequences, data containers, mouse support, and an SSH server so anyone can connect.",
                tags: ["Rust", "Ratatui", "TUI", "SSH"],
                url: "https://github.com/theabecaster/lumon-mdr",
                delay: 100,
              },
              {
                title: "Raspberry Pi Rust Phone",
                description:
                  "A fully functional phone built from a Raspberry Pi in Rust — Twilio API for real calls and SMS, custom hardware programming for analog dial tones, busy signals, and ring patterns.",
                tags: ["Rust", "Raspberry Pi", "Twilio", "Hardware"],
                delay: 200,
              },
              {
                title: "OpenCode Contributor",
                description:
                  "Contributed transparent background support to OpenCode (the open-source terminal IDE) — implemented tui.transparent_background config with full theme and root container support.",
                tags: ["Go", "Open Source", "TUI"],
                url: "https://github.com/anomalyco/opencode/pull/8403",
                delay: 300,
              },
              {
                title: "AI-Controlled Robot Car",
                description:
                  "A WiFi-controlled mobile robot with live camera feed, driven via natural language through OpenClaw on a Mac mini backed by a local LLM on an RTX 5070. Full local inference.",
                tags: ["Python", "LLM", "Hardware", "Robotics"],
                delay: 400,
              },
              {
                title: "Traffic Light Detector",
                description:
                  "iOS app using on-device machine learning (Core ML) to detect traffic lights in real time and alert drivers — built as a driving safety assistant.",
                tags: ["Swift", "Core ML", "Vision", "iOS"],
                url: "https://github.com/theabecaster",
                delay: 500,
              },
              {
                title: "OMSA Practice Management",
                description:
                  "Complete oral surgery practice management system — patient records, inventory tracking, payments — running on a local office server with no external cloud dependency.",
                tags: ["Node.js", "LLM", "Local Server"],
                delay: 600,
              },
            ].map((project, i) => (
              <ScrollReveal key={i} delay={project.delay}>
                <div className="p-5 rounded-lg border border-border bg-surface/50 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-base font-heading font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary-dark transition-colors"
                    >
                      <FiGithub className="h-3.5 w-3.5" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
