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
              I&apos;m Abraham Gonzalez, a full stack engineer with 8 years building
              production software at scale — from enterprise mobile platforms to
              LLM-powered developer tools. I write TypeScript and Rust by preference,
              live in the terminal, and my GitHub is full of tools I built because I needed them.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              My passion is developer tooling — building the things that make other
              builders faster and more creative. I&apos;ve spent years developing React
              applications with a focus on architecture, performance, and the kinds of
              multi-tenant, high-complexity UIs that demand both.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              Currently a Senior Software Engineer at{" "}
              <span className="text-primary font-medium">Publix Super Markets</span>,
              where I shipped the Pharmacy iOS and Android apps from greenfield to
              production — growing the rating from 1.9 to 4.9 stars — and built an
              internal MCP server for AI-driven iOS automation before Appium released theirs.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              Based in{" "}
              <span className="text-primary font-medium">Miami, FL</span> and
              open to New York City, San Francisco, and Seattle.
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

      {/* Experience */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            EXP
          </span>
          <div className="h-px flex-1 max-w-12 bg-primary/40" />
          <h2 className="text-3xl font-heading font-bold tracking-tight">
            Experience
          </h2>
        </div>
      </ScrollReveal>
      <div className="space-y-4 mb-16">
        {[
          {
            role: "Senior Software Engineer",
            company: "Publix Super Markets",
            period: "2022 – Present",
            highlights: [
              "Shipped the Publix Pharmacy iOS and Android apps from greenfield to production — grew the rating from 1.9 to 4.9 stars",
              "Built an internal MCP server using XCUITest for AI-driven iOS automation, adopted by QA teams months before Appium's official MCP",
              "Own all mobile CI/CD pipelines across the department on Azure DevOps and AWS",
              "Senior technical lead across a multi-team department for mobile architecture decisions",
            ],
            delay: 100,
          },
          {
            role: "Software Developer",
            company: "Venli Aps",
            period: "2025",
            highlights: [
              "Built the complete web app — an LLM-powered tourist guide using OpenAI's Realtime API over gRPC",
              "Implemented low-latency streaming voice responses with WebSocket state management and React rendering optimization",
              "Integrated in-app payments end-to-end and served as system designer and tech lead for mobile",
            ],
            delay: 200,
          },
          {
            role: "Freelance Tech Lead",
            company: "Tier3Media",
            period: "2025 – Present",
            highlights: [
              "Architected MembershipIQ — a multi-tenant white-label SaaS serving 100+ client apps from a single Node.js backend",
              "Built React manager dashboard and white-label client app with dynamic theming, Suspense, and virtualization",
              "PostgreSQL with row-level multi-tenancy, Supabase Auth, and Twilio SMS authentication",
            ],
            delay: 300,
          },
          {
            role: "Freelance Developer",
            company: "OMSA Associates",
            period: "2022 – Present",
            highlights: [
              "Built a complete oral surgery practice management system from scratch running on a local office server",
              "Built a client-facing LLM chatbot with 0.03ms time-to-first-token through aggressive streaming optimization",
            ],
            delay: 400,
          },
          {
            role: "Junior Software Engineer",
            company: "TKLabs",
            period: "2017 – 2022",
            highlights: [
              "Built SoSecure — an iOS personal safety app with on-device speech-to-text, real-time location tracking, and geofencing",
              "Developed the SoSecure SDK, adopted by Lyft as a core rider safety feature across their platform",
            ],
            delay: 500,
          },
        ].map((job, i) => (
          <ScrollReveal key={i} delay={job.delay}>
            <div className="p-6 rounded-lg border border-border bg-surface/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-lg font-heading font-bold text-foreground">
                  {job.role} <span className="text-primary">@ {job.company}</span>
                </h3>
                <span className="text-xs font-mono text-muted-foreground tracking-wide">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-2">
                {job.highlights.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-text-body">
                    <span className="text-primary font-mono text-xs mt-1 shrink-0">&gt;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
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
          <p className="text-sm font-mono text-muted-foreground">
            2020
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
            title: "Languages",
            content: (
              <>
                <p className="text-sm text-text-body mb-1">
                  <span className="font-medium text-foreground">Preferred:</span>{" "}
                  TypeScript, Rust
                </p>
                <p className="text-sm text-text-body">
                  <span className="font-medium text-foreground">Proficient:</span>{" "}
                  Go, Swift, Kotlin, JavaScript, Python
                </p>
              </>
            ),
            delay: 100,
          },
          {
            title: "Frontend",
            content: (
              <>
                <p className="text-sm text-text-body mb-1">
                  <span className="font-medium text-foreground">Web:</span>{" "}
                  React (hooks, context, Suspense, virtualization, code splitting), Next.js
                </p>
                <p className="text-sm text-text-body">
                  <span className="font-medium text-foreground">Mobile:</span>{" "}
                  SwiftUI, UIKit, Jetpack Compose
                </p>
              </>
            ),
            delay: 200,
          },
          {
            title: "Backend & Infrastructure",
            content: (
              <>
                <p className="text-sm text-text-body mb-1">
                  <span className="font-medium text-foreground">Runtime:</span>{" "}
                  Node.js, REST, gRPC, PostgreSQL, Supabase
                </p>
                <p className="text-sm text-text-body">
                  <span className="font-medium text-foreground">DevOps:</span>{" "}
                  Azure DevOps, AWS, Vercel, CI/CD pipelines, GitHub Actions
                </p>
              </>
            ),
            delay: 300,
          },
          {
            title: "AI / LLM & Tooling",
            content: (
              <>
                <p className="text-sm text-text-body mb-1">
                  <span className="font-medium text-foreground">AI:</span>{" "}
                  OpenAI APIs (Realtime, Chat, Embeddings), MCP servers, prompt engineering, local LLM inference
                </p>
                <p className="text-sm text-text-body">
                  <span className="font-medium text-foreground">CLI/Terminal:</span>{" "}
                  TUI development (Rust/Ratatui, Go/Bubbletea), SSH tooling, terminal automation
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

      {/* Highlights */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            WINS
          </span>
          <div className="h-px flex-1 max-w-12 bg-primary/40" />
          <h2 className="text-3xl font-heading font-bold tracking-tight">
            Highlights
          </h2>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="space-y-3 mb-12">
          {[
            "Shipped Publix Pharmacy apps from greenfield to production — grew rating from 1.9 to 4.9 stars while growing the user base",
            "Built an MCP server for AI-driven iOS automation months before Appium released their official MCP",
            "Architected MembershipIQ, a multi-tenant SaaS serving 100+ client apps from a single backend",
            "Developed the SoSecure SDK, adopted by Lyft as a core rider safety feature",
            "Built a client-facing LLM chatbot achieving 0.03ms time-to-first-token through aggressive streaming optimization",
            "Contributed to OpenCode (open-source) — shipped transparent background support with full theme integration",
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
