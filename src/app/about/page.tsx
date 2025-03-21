import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <ScrollReveal delay={200} className="md:col-span-2">
          <div>
            <p className="text-lg mb-6">
              I'm Abraham Gonzalez, a Software Engineer with a focus on creating exceptional mobile and web applications.
              With expertise in native iOS and Android development as well as modern web technologies, I build
              scalable, performant, user-centric applications that deliver outstanding digital experiences.
            </p>
            <p className="text-lg mb-6">
              My journey in software engineering has allowed me to work with diverse technologies and frameworks,
              from SwiftUI and Kotlin to React and Next.js. I'm passionate about writing clean, maintainable code
              and leveraging the right tools and architectural patterns to solve complex problems.
            </p>
            <p className="text-lg mb-6">
              Currently, I'm working at Publix Technology, where I've been instrumental in transitioning 
              their Pharmacy app from Xamarin to native platforms, significantly improving performance and user satisfaction.
            </p>
            <p className="text-lg mb-6">
              Outside of my professional life, I'm dedicated to Brazilian Jiu Jitsu training, which has taught me discipline and problem-solving in ways that complement my engineering mindset. When I'm not on the mats, you can find me exploring the open road on my motorcycle or cherishing quality time with my family, which keeps me grounded and inspired.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <div className="bg-muted rounded-lg p-4 h-64 flex items-center justify-center relative overflow-hidden">
            <Image 
              src="/images/profile-photo.webp" 
              alt="Abraham Gonzalez"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
      
      <ScrollReveal>
        <h2 className="text-3xl font-bold mb-6">Education</h2>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="mb-12 bg-muted/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Florida International University</h3>
          <p className="text-lg mb-2">Bachelor of Science in Computer Science</p>
          <p className="text-muted-foreground mb-4">GPA: 3.53/4.00</p>
          <p className="text-md">
            <strong>Relevant Coursework:</strong> Data Structures, Algorithms, Operating Systems, Database Systems, Machine Learning Fundamentals
          </p>
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ScrollReveal delay={100}>
          <div className="bg-muted/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
            <p className="mb-2"><strong>Expertise:</strong> Swift, Kotlin, JavaScript, TypeScript</p>
            <p><strong>Proficiency:</strong> Objective-C, Java, C#, Dart</p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="bg-muted/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
            <p className="mb-2"><strong>Native:</strong> SwiftUI, UIKit, Kotlin, Objective-C</p>
            <p className="mb-2"><strong>Cross-Platform:</strong> Flutter</p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <div className="bg-muted/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="mb-2"><strong>Frontend:</strong> React, Next.js</p>
            <p><strong>Backend:</strong> Node.js</p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <div className="bg-muted/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Tools & Frameworks</h3>
            <p className="mb-2"><strong>UI/UX Design:</strong> Figma, Sketch, Zeplin</p>
            <p className="mb-2"><strong>Version Control & Collaboration:</strong> Git, Jira</p>
            <p className="mb-2"><strong>CI/CD:</strong> Azure DevOps, Azure Pipelines</p>
            <p><strong>Testing:</strong> XCTest, XCUITest, Appium, Nimble, Quick</p>
          </div>
        </ScrollReveal>
      </div>
      
      <ScrollReveal>
        <h2 className="text-3xl font-bold mb-6">Specialized Knowledge</h2>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="bg-muted/20 p-6 rounded-lg mb-12">
          <p className="mb-2"><strong>Frameworks:</strong> RxSwift, Combine, Swift Composable Architecture (TCA), Flutter Bloc</p>
          <p className="mb-2"><strong>Architectural Patterns:</strong> MVC, MVVM, Composable Architecture, Bloc</p>
          <p>Extensive experience with reactive programming and state management.</p>
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <h2 className="text-3xl font-bold mb-6">Achievements</h2>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <ul className="list-disc list-inside space-y-3 text-lg mb-12 pl-4">
          <li>Reduced operational costs and app load times by 25% through optimized architectures.</li>
          <li>Automated 85% of regression tests, ensuring faster release cycles.</li>
          <li>Enhanced user satisfaction by 30% through strategic UI/UX improvements.</li>
          <li>Boosted app performance by 40% by transitioning from cross-platform to native solutions.</li>
          <li>Implemented robust network layers using Combine (Swift) and Coroutines (Kotlin), reducing API response times by 20%.</li>
        </ul>
      </ScrollReveal>
    </div>
  );
}
