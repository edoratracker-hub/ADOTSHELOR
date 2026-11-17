"use client";

import React from "react";
import { DIFFERENCE_ITEMS, WHATSAPP_HREF } from "@/data/portfolioData";
import {
  Target,
  MessageSquare,
  Cpu,
  Lightbulb,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import ScrollFloat from "@/components/ScrollFloat";

export function DifferenceSection() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Target className="w-5 h-5 text-[#9FB3FF]" />;
      case 1:
        return <MessageSquare className="w-5 h-5 text-[#F4F6FB]" />;
      case 2:
        return <Cpu className="w-5 h-5 text-[#9FB3FF]" />;
      case 3:
      default:
        return <Lightbulb className="w-5 h-5 text-[#F4F6FB]" />;
    }
  };

  return (
    <section
      id="about"
      className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--hair-soft)] relative scroll-mt-12 overflow-hidden"
    >
      {/* Background cyan subtle glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#3F63E6]/6 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(63, 99, 230, 0.12)] text-[#9FB3FF] border border-[rgba(63, 99, 230, 0.28)] mb-3">
          How we work with you
        </span>
        <ScrollFloat containerClassName="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F6FB] tracking-tight">
          Start with your business. Build with{" "}
          <em className="font-[var(--font-italic)] font-normal text-[#9FB3FF]">
            purpose.
          </em>
        </ScrollFloat>
        <p className="mt-4 text-base sm:text-lg text-[#F4F6FB]/70 leading-relaxed">
          We first understand how your business works and what you need online.
          Then we make a clear plan, build together, and support your team.
        </p>
      </div>

      {/* 4 Difference Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DIFFERENCE_ITEMS.map((item, idx) => (
          <div
            key={item.title}
            className="p-6 sm:p-7 rounded-3xl bg-[rgba(21, 29, 49, 0.55)] backdrop-blur-xl border border-[var(--hair)] hover:border-[#9FB3FF]/50 hover:bg-[rgba(21, 29, 49, 0.7)] transition-all duration-300 shadow-lg flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-2xl bg-[rgba(63, 99, 230, 0.1)] border border-[rgba(63, 99, 230, 0.25)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(idx)}
                </div>
                <span className="text-xs font-mono font-bold text-[#F4F6FB]/40">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#F4F6FB] tracking-tight mb-2.5 group-hover:text-[#9FB3FF] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-[#F4F6FB]/70 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--hair)] flex items-center gap-2 text-[11px] text-[#9FB3FF]/80 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Core Principle</span>
            </div>
          </div>
        ))}
      </div>

      {/* Direct link to dedicated about page */}
      <div className="mt-14 text-center">
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--cyan px-7 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-[0_0_20px_rgba(63, 99, 230, 0.25)] hover:shadow-[0_0_30px_rgba(63, 99, 230, 0.4)] transition-all"
        >
          <span>Chat on WhatsApp</span>
          <MessageCircle aria-hidden="true" className="size-4" />
        </a>
      </div>
    </section>
  );
}
