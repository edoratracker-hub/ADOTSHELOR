"use client";

import React, { useState, useEffect } from "react";
import { NAVIGATION_ITEMS } from "@/data/portfolioData";
import { Logo } from "@/components/brand/Logo";
import { ResizableNavbar } from "@/components/effects/resizable-navbar";

export interface NavbarProps {
  readonly isSettled?: boolean;
}

export function Navbar({ isSettled = true }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sectionIds = [
      "home",
      "services",
      "approach",
      "projects",
      "about",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ResizableNavbar
      items={[...NAVIGATION_ITEMS]}
      threshold={80}
      compactWidth={920}
      maxWidth={1280}
      activeHref={`#${activeSection}`}
      label="Primary"
      logo={
        <div id="navbar-logo-target">
          <Logo size="md" href="#home" textId="navbar-logo-text" />
        </div>
      }
      className={`!fixed !inset-x-0 !top-0 z-40 w-full transition-opacity duration-500 ${
        isSettled ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    />
  );
}
