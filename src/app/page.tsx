"use client";

import React, { useState, useCallback, useEffect } from "react";
import { BrandIntro } from "@/components/brand/BrandIntro";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { Footer } from "@/components/layout/Footer";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_CONTACT } from "@/data/portfolioData";

export default function Home() {
  const [isSettled, setIsSettled] = useState<boolean>(false);
  const [introKey, setIntroKey] = useState<number>(0);

  useEffect(() => {
    try {
      if (
        sessionStorage.getItem("adotshelor_intro_seen") === "true" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setIsSettled(true);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const handleComplete = useCallback(() => {
    setIsSettled(true);
  }, []);

  const handleReplay = useCallback(() => {
    try {
      sessionStorage.removeItem("adotshelor_intro_seen");
    } catch {
      // Ignore storage errors if disabled
    }
    setIsSettled(false);
    setIntroKey((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const whatsappHref = `https://wa.me/${WHATSAPP_CONTACT.phoneNumber}?text=${encodeURIComponent(
    WHATSAPP_CONTACT.prefilledMessage,
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#060D17] text-white overflow-x-clip">
      {/* Brand Intro Animation */}
      <BrandIntro
        key={introKey}
        isSettled={isSettled}
        onComplete={handleComplete}
      />

      {/* Shared Responsive Sticky Navbar */}
      <Navbar isSettled={isSettled} />

      <main id="main" className="flex-1">
        {/* Home */}
        <HeroSection />

        {/* About */}
        <DifferenceSection />

        {/* Services */}
        <ServicesSection />

        {/* Projects */}
        <ProjectsSection />

        {/* Our Approach */}
        <ProcessSection />
      </main>

      {/* 11. Website Footer */}
      <Footer onReplayIntro={handleReplay} />

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AdotShelor on WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-[#062310] shadow-[0_12px_36px_rgba(37,211,102,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-[0_18px_44px_rgba(37,211,102,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] motion-reduce:transition-none"
      >
        <MessageCircle aria-hidden="true" className="h-5 w-5" />
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
}
