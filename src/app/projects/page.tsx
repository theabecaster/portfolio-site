import React from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Here&apos;s a showcase of my professional work and projects. My focus is on creating intuitive, 
          high-performance mobile and web applications with clean code and thoughtful architecture.
        </p>
      </ScrollReveal>
      
      <div className="space-y-24">
        {/* Publix Pharmacy App */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={200}>
            <div className="bg-muted rounded-lg h-80 flex items-center justify-center overflow-hidden relative">
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
              <h2 className="text-3xl font-bold mb-4">Publix Pharmacy App</h2>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Swift</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Kotlin</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Composable Architecture</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">SwiftUI</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Combine</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Coroutines</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Transitioned the Publix Pharmacy app from Xamarin to native Swift (iOS) and Kotlin (Android), 
                boosting performance by 40% and user satisfaction by 30%. Implemented a robust network layer 
                using Combine (Swift) and Coroutines (Kotlin), reducing API response times by 20%.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Designed platform-specific navigation frameworks and integrated the Composable Architecture (TCA) for scalability</li>
                <li>Implemented Quick Refill feature using App Clips (iOS) and Instant Apps (Android)</li>
                <li>Created reliable medication reminders using UserNotifications (Swift) and WorkManager (Kotlin)</li>
                <li>Enhanced accessibility with dynamic interfaces using SwiftUI and Jetpack Compose</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
        
        {/* SoSecure by ADT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={200} className="order-1 lg:order-2">
            <div className="bg-muted rounded-lg h-80 flex items-center justify-center overflow-hidden relative">
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
              <h2 className="text-3xl font-bold mb-4">SoSecure by ADT</h2>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Swift</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">UIKit</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">SwiftUI</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">RxSwift</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">MVVM</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Designed and implemented a safety-focused mobile app using Swift for iOS, incorporating geofencing, 
                voice-activated silent alarms, and push notifications. Built using RxSwift and MVVM architecture 
                to ensure maintainability and scalability.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Gained extensive experience implementing SwiftUI and UIKit for navigation</li>
                <li>Started with UIKit as the foundation and gradually integrated SwiftUI components</li>
                <li>Maintained UIKit-based navigation for stability and production-tested reliability</li>
                <li>Leveraged RxSwift for reactive programming and state management</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
        
        {/* IOTAS App */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={200}>
            <div className="bg-muted rounded-lg h-80 flex items-center justify-center overflow-hidden relative">
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
              <h2 className="text-3xl font-bold mb-4">IOTAS Home Automation App</h2>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Flutter</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Dart</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Bloc</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Cross-Platform</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Developed a home automation app for IOTAS using Flutter, enabling users to control smart devices 
                across connected ecosystems. Focused on optimizing cross-platform performance, reducing development 
                time by 40%.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Enhanced user engagement with personalized notifications and dynamic UI features</li>
                <li>Implemented Flutter Bloc pattern for robust state management</li>
                <li>Created consistent user experience across iOS and Android platforms</li>
                <li>Integrated with various smart home device APIs for comprehensive device control</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Other Projects */}
        <div>
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8">Other Projects</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-muted/20 p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">Pipol Pay Mobile by Facebank</h3>
                <p className="text-muted-foreground mb-4">
                  Developed secure, encrypted web services with QR-based payment features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Swift</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">UIKit</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Payments</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-muted/20 p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">Metricle Mobile</h3>
                <p className="text-muted-foreground mb-4">
                  Built stock prediction app with SwiftUI and Combine for real-time sentiment analysis.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">SwiftUI</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Combine</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Financial</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-muted/20 p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">OMSA Gallery</h3>
                <p className="text-muted-foreground mb-4">
                  Engineered a Node.js backend to optimize inventory management and payment processing,
                  reducing costs by 20% and increasing transaction speed by 25%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Node.js</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">AWS</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">iOS</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
