import type { Metadata } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Abraham Gonzalez | Software Engineer",
  description: "Professional portfolio showcasing skills, projects, and experience as a Software Engineer",
  keywords: ["developer", "portfolio", "projects", "web development", "mobile development", "iOS", "Android", "Swift", "Kotlin"],
  authors: [{ name: "Abraham Gonzalez" }],
  creator: "Abraham Gonzalez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.abrahamgonzalez.dev",
    title: "Abraham Gonzalez | Software Engineer",
    description: "Professional portfolio showcasing skills, projects, and experience as a Software Engineer",
    siteName: "Abraham Gonzalez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abraham Gonzalez | Software Engineer",
    description: "Professional portfolio showcasing skills, projects, and experience as a Software Engineer",
    creator: "@abrahamgonzalez",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider>
          <AnimatedBackground />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
