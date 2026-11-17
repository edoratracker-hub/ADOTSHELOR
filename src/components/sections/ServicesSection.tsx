"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { SERVICE_PILLARS, WHATSAPP_HREF } from "@/data/portfolioData";
import {
  ChevronDown,
  CheckCircle2,
  Wrench,
  Sparkles,
  BookOpen,
  MessageCircle,
  MessageSquare,
  Phone,
  Monitor,
} from "lucide-react";
import ScrollFloat from "@/components/ScrollFloat";

export function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string>("problem-solving");
  const prefersReduced = useReducedMotion();

  // For Service 03 (Understand): Interactive architecture nodes
  const [activeNode, setActiveNode] = useState<string>("chat");

  const architectureNodes: Record<
    string,
    { label: string; icon: React.ReactNode; explanation: string }
  > = {
    chat: {
      label: "Chat",
      icon: <MessageSquare className="w-4 h-4 text-[#9FB3FF]" />,
      explanation:
        "Send a question and share context with the people who know your software.",
    },
    call: {
      label: "Calls",
      icon: <Phone className="w-4 h-4 text-[#9FB3FF]" />,
      explanation:
        "Talk through an issue and decide on a practical next step together.",
    },
    screen: {
      label: "Screen-sharing",
      icon: <Monitor className="w-4 h-4 text-[#9FB3FF]" />,
      explanation:
        "Show the issue on screen so the team can see what you mean.",
    },
    plainLanguage: {
      label: "Plain-language help",
      icon: <BookOpen className="w-4 h-4 text-[#9FB3FF]" />,
      explanation:
        "Get technical issues explained clearly, without unnecessary jargon.",
    },
  };

  return (
    <section
      id="services"
      className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--hair-soft)] relative scroll-mt-16"
    >
      {/* Background ambient cyan glow */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[350px] bg-[#3F63E6]/8 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(63, 99, 230, 0.12)] text-[#9FB3FF] border border-[rgba(63, 99, 230, 0.28)] mb-3">
          How we can help
        </span>
        <ScrollFloat containerClassName="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F6FB] tracking-tight">
          Take your business from offline to{" "}
          <em className="font-[var(--font-italic)] font-normal text-[#9FB3FF]">
            online.
          </em>
        </ScrollFloat>
        <p className="mt-4 text-base sm:text-lg text-[#F4F6FB]/70 leading-relaxed">
          We build your online identity and custom software, then support your
          team in plain language.
        </p>
      </div>

      {/* Core Services Cards / Accordion */}
      <div className="space-y-5">
        {SERVICE_PILLARS.map((service) => {
          const isExpanded = expandedId === service.id;

          return (
            <motion.article
              id={service.id}
              key={service.id}
              layout={!prefersReduced}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                isExpanded
                  ? "bg-[rgba(21, 29, 49, 0.7)] border-[#9FB3FF]/60 shadow-[0_12px_36px_rgba(63, 99, 230, 0.15)]"
                  : "bg-[rgba(21, 29, 49, 0.45)] hover:bg-[rgba(21, 29, 49, 0.65)] border-[var(--hair)]"
              }`}
            >
              {/* Accordion Trigger */}
              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? "" : service.id)}
                aria-expanded={isExpanded}
                aria-controls={`service-panel-${service.id}`}
                className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9FB3FF]"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span className="text-sm sm:text-base font-mono font-bold text-[#9FB3FF]">
                    {service.number} / {service.tag}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F4F6FB] tracking-tight">
                      {service.heading}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#F4F6FB]/60 mt-0.5">
                      {service.title}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-xs font-semibold text-[#9FB3FF]">
                    {isExpanded ? "Collapse Details" : "View Details"}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center text-[#F4F6FB] transition-transform duration-200 ${
                      isExpanded
                        ? "rotate-180 bg-[#3F63E6] border-[#9FB3FF]"
                        : "bg-[rgba(244, 246, 251, 0.06)] border-[var(--hair)]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    id={`service-panel-${service.id}`}
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: prefersReduced ? 0 : 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-t border-[var(--hair)]"
                  >
                    <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left: Narrative, What We Offer & Direct CTA */}
                      <div className="lg:col-span-7 space-y-6">
                        <div>
                          <p className="text-base sm:text-lg font-medium text-[#F4F6FB]/90 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#9FB3FF] mb-3">
                            What We Offer:
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {service.whatWeOffer.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F4F6FB]/90 bg-black/20 p-2.5 rounded-xl border border-[var(--hair)]"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#9FB3FF] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Direct Button */}
                        <div className="pt-2">
                          <a
                            href={service.buttonHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--cyan inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl shadow-[0_0_20px_rgba(63, 99, 230, 0.25)] hover:shadow-[0_0_25px_rgba(63, 99, 230, 0.4)] transition-all"
                          >
                            <span>{service.buttonText}</span>
                            <MessageCircle aria-hidden="true" className="size-4" />
                          </a>
                        </div>
                      </div>

                      {/* Right: Interactive Visual Illustration */}
                      <div className="lg:col-span-5 bg-[rgba(11, 16, 32, 0.75)] rounded-2xl border border-[var(--hair)] p-5 sm:p-6 flex flex-col justify-between">
                        {/* Service 01: Online identity visual */}
                        {service.id === "problem-solving" && (
                          <div>
                            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#9FB3FF]">
                              <Wrench className="w-3.5 h-3.5" />
                              <span>Business identity and online presence</span>
                            </div>
                            <div className="aspect-[4/3] rounded-xl bg-black/40 border border-[var(--hair)] p-4 flex flex-col justify-center items-center gap-3">
                              <div className="w-full bg-[rgba(21, 29, 49, 0.6)] p-3 rounded-lg border border-[var(--hair)] text-xs">
                                <span className="text-[#F4F6FB]/40 block text-[10px] uppercase font-mono">Your business</span>
                                <span className="text-[#F4F6FB]/80 font-mono">What you offer • Who you serve</span>
                              </div>
                              <div className="w-6 h-6 rounded-full bg-[#3F63E6]/20 text-[#9FB3FF] flex items-center justify-center text-xs font-bold">
                                ↓
                              </div>
                              <div className="w-full bg-[rgba(63, 99, 230, 0.12)] p-3 rounded-lg border border-[#9FB3FF]/40 text-xs">
                                <span className="text-[#9FB3FF] block text-[10px] uppercase font-mono font-bold">Online presence</span>
                                <span className="text-[#F4F6FB] font-semibold">Brand • Website • Digital presence</span>
                              </div>
                            </div>
                            <p className="mt-3 text-xs text-[#F4F6FB]/60 text-center">
                              Help customers see who you are and what your business does.
                            </p>
                          </div>
                        )}

                        {/* Service 02: Custom software visual */}
                        {service.id === "idea-to-product" && (
                          <div>
                            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#9FB3FF]">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Custom software for your business</span>
                            </div>
                            <div className="aspect-[4/3] rounded-xl bg-black/40 border border-[var(--hair)] p-4 flex flex-col justify-between">
                              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[var(--hair)]">
                                <span className="text-[#F4F6FB]/70">Your business need</span>
                                <span className="text-[#9FB3FF]">Plan</span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 my-2">
                                <div className="p-2 rounded bg-white/5 border border-[var(--hair)]">
                                  <span className="text-[10px] text-[#F4F6FB]/50 block">Customer tools</span>
                                  <span className="text-xs text-[#F4F6FB] font-medium">Apps and ordering</span>
                                </div>
                                <div className="p-2 rounded bg-white/5 border border-[var(--hair)]">
                                  <span className="text-[10px] text-[#F4F6FB]/50 block">Team tools</span>
                                  <span className="text-xs text-[#F4F6FB] font-medium">Dashboards and systems</span>
                                </div>
                              </div>
                              <div className="h-7 w-full rounded-lg bg-gradient-to-r from-[#3454CB] to-[#3F63E6] text-[#F4F6FB] flex items-center justify-center text-xs font-bold">
                                Build • Review • Improve
                              </div>
                            </div>
                            <p className="mt-3 text-xs text-[#F4F6FB]/60 text-center">
                              See working updates and agree what to improve next.
                            </p>
                          </div>
                        )}

                        {/* Service 03: Online support options */}
                        {service.id === "ongoing-support" && (
                          <div>
                            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#9FB3FF]">
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>Online support options (select one)</span>
                            </div>

                            {/* Node selector tabs */}
                            <div className="grid grid-cols-2 gap-2 mb-3">
                              {Object.entries(architectureNodes).map(([key, node]) => {
                                const isSelected = activeNode === key;
                                return (
                                  <button
                                    key={key}
                                    type="button"
                                    onClick={() => setActiveNode(key)}
                                    className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                                      isSelected
                                        ? "bg-[rgba(63, 99, 230, 0.2)] border-[#9FB3FF] shadow-sm"
                                        : "bg-black/30 border-[var(--hair)] hover:bg-black/50"
                                    }`}
                                  >
                                    {node.icon}
                                    <span
                                      className={`text-xs font-bold ${
                                        isSelected ? "text-[#9FB3FF]" : "text-[#F4F6FB]/80"
                                      }`}
                                    >
                                      {node.label}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Plain language explanation */}
                            <div
                              className="p-3.5 rounded-xl bg-black/50 border border-[#9FB3FF]/40 min-h-[85px]"
                              aria-live="polite"
                            >
                              <div className="text-[11px] font-bold uppercase tracking-wider text-[#9FB3FF] mb-1">
                                {architectureNodes[activeNode]?.label} Explained:
                              </div>
                              <p className="text-xs text-[#F4F6FB]/80 leading-relaxed">
                                {architectureNodes[activeNode]?.explanation}
                              </p>
                            </div>
                          </div>
                        )}

                        {service.id === "student-project-guidance" && (
                          <div>
                            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#9FB3FF]">
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>Student and portfolio project guidance</span>
                            </div>
                            <div className="aspect-[4/3] rounded-xl bg-black/40 border border-[var(--hair)] p-4 flex flex-col justify-center gap-3">
                              {["Plan your project", "Build it step by step", "Understand how it works", "Explain what you made"].map((step, index) => (
                                <div
                                  key={step}
                                  className="flex items-center gap-3 rounded-lg border border-[var(--hair)] bg-white/5 p-3"
                                >
                                  <span className="font-mono text-xs font-bold text-[#9FB3FF]">
                                    0{index + 1}
                                  </span>
                                  <span className="text-xs font-medium text-[#F4F6FB]/85">
                                    {step}
                                  </span>
                                </div>
                              ))}
                            </div>
                            <p className="mt-3 text-xs text-[#F4F6FB]/60 text-center">
                              Practical guidance for a college assignment or software portfolio.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>

      {/* Direct link to dedicated services page */}
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
