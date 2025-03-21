import type { Metadata } from "next";
import { Playfair_Display, Cabin } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const cabin = Cabin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cabin",
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
    <html lang="en" className={`${playfair.variable} ${cabin.variable}`}>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
