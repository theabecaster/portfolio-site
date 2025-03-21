import ContactForm from '@/components/ui/ContactForm';
import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <ScrollReveal delay={200}>
          <div>
            <p className="text-lg mb-6">
              I&apos;m interested in freelance opportunities, full-time positions, and collaborations. 
              If you have any questions or would like to discuss potential projects, feel free to 
              reach out through any of the channels below.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start space-x-4">
                <FiMail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-1">Email</h2>
                  <a 
                    href="mailto:developerabe0@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    developerabe0@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <FiPhone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-1">Phone</h2>
                  <a 
                    href="tel:+17864874788" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (786) 487-4788
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <FiMapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-1">Location</h2>
                  <p className="text-muted-foreground">Weston, FL</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <FiLinkedin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-1">LinkedIn</h2>
                  <a 
                    href="https://www.linkedin.com/in/abraham-1996-gonzalez/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/abraham-1996-gonzalez
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <FiGithub className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-1">GitHub</h2>
                  <a 
                    href="https://github.com/theabecaster/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/theabecaster
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-background rounded-lg overflow-hidden">
                  <ContactForm showSubjectField={true} />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}       

