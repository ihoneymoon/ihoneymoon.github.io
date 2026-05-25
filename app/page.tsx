"use client";

import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import CursorGlow from "@/components/CursorGlow";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import TechStackSection from "@/sections/TechStackSection";
import ProjectsSection from "@/sections/ProjectsSection";
import RoadmapSection from "@/sections/RoadmapSection";
import ExperienceSection from "@/sections/ExperienceSection";
import GithubStatsSection from "@/sections/GithubStatsSection";
import CurrentVibesSection from "@/sections/CurrentVibesSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background effects */}
      <ParticleBackground />
      <CursorGlow />

      {/* Noise overlay for texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Global background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-100/40 to-pink-200/20 blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-100/30 to-lavender-100/20 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-rose-100/30 to-pink-100/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-purple-100/25 to-pink-100/15 blur-3xl" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Page sections */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <RoadmapSection />
        <ExperienceSection />
        <GithubStatsSection />
        <CurrentVibesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
