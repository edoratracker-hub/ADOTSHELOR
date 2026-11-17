"use client";

import React, { useState } from "react";
import { CheckCircle2, Clock, ExternalLink, GitBranch } from "lucide-react";
import { PROJECTS_DATA, WHATSAPP_HREF } from "@/data/portfolioData";
import ScrollFloat from "@/components/ScrollFloat";
import "./ProjectsSection.css";

type ViewMode = "grid" | "detail";

interface ProjectDetailItem {
  id: string;
  name: string;
  category: string;
  categoryTab: string;
  metrics: string;
  solution: string;
  description: string;
  plannedScope: string;
  features?: readonly string[];
  technologies: readonly string[];
  status: string;
  screenshot?: string;
  liveDemo?: string;
  githubRepo?: string;
  hueClass: string;
  kpiStats: [string, string, string];
  flowNodes: [string, string, string, string];
}

const PROJECT_PRESENTATION: Record<
  string,
  {
    categoryTab: string;
    hueClass: string;
    kpiStats: [string, string, string];
    flowNodes: [string, string, string, string];
  }
> = {
  "supermarket-ordering-app": {
    categoryTab: "Ordering Systems",
    hueClass: "dv-h1",
    kpiStats: ["Orders", "Products", "Tracking"],
    flowNodes: ["Customer", "Store", "Cart", "Order"],
  },
  "water-connect": {
    categoryTab: "Marketplaces",
    hueClass: "dv-h2",
    kpiStats: ["Water", "Suppliers", "Listings"],
    flowNodes: ["Water", "Supplier", "Listing", "Market"],
  },
};

const ENRICHED_PROJECTS: ProjectDetailItem[] = PROJECTS_DATA.map((project) => ({
  id: project.id,
  name: project.name,
  category: project.category,
  ...PROJECT_PRESENTATION[project.id],
  metrics: "Current project",
  solution: project.description,
  description: project.description,
  plannedScope:
    project.id === "supermarket-ordering-app"
      ? "Customer ordering and store administration."
      : "",
  features: project.features,
  technologies: [],
  status: project.status,
}));

const CATEGORY_TABS = [
  "All",
  "Ordering Systems",
  "Marketplaces",
] as const;

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects = ENRICHED_PROJECTS.filter(
    (project) => activeTab === "All" || project.categoryTab === activeTab
  );

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl scroll-mt-12 border-t border-[var(--hair-soft)] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Section Header */}
      <div className="mb-10 max-w-3xl sm:mb-14">
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[rgba(63, 99, 230, 0.28)] bg-[rgba(63, 99, 230, 0.12)] px-3 py-1 text-xs font-semibold text-[#9FB3FF]">
          Projects in development
        </span>
        <ScrollFloat containerClassName="text-3xl font-extrabold tracking-tight text-[#F4F6FB] sm:text-4xl lg:text-5xl">
          See what we are building{" "}
          <em className="font-[var(--font-italic)] font-normal text-[#9FB3FF]">
            now.
          </em>
        </ScrollFloat>
        <p className="mt-3 text-base leading-relaxed text-[#F4F6FB]/70 sm:text-lg">
          The supermarket ordering app and Water Connect marketplace are both
          in development. For student and portfolio project guidance,{" "}
          <a
            href="#student-project-guidance"
            className="font-semibold text-[#9FB3FF] underline underline-offset-4 hover:text-[#F4F6FB]"
          >
            see how we help students build.
          </a>
        </p>
      </div>

      {/* Controls Bar: Category Filter Pills + View Switcher */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#151D31] pb-6">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setHoveredIndex(null);
                }}
                className={`h-10 rounded-xl px-4 text-xs font-medium transition-colors sm:text-sm ${
                  isActive
                    ? "bg-[#151D31] text-[#F4F6FB] shadow-sm ring-1 ring-[#9FB3FF]/40"
                    : "text-[#9FB3FF] hover:bg-[#0B1020] hover:text-[#F4F6FB]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Dual-View Toggle: Grid View vs Detail View */}
        <div className="flex rounded-xl border border-[#151D31] bg-[#0B1020] p-1">
          <button
            type="button"
            onClick={() => {
              setViewMode("grid");
              setHoveredIndex(null);
            }}
            aria-pressed={viewMode === "grid"}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
              viewMode === "grid"
                ? "bg-[#151D31] text-[#F4F6FB]"
                : "text-[#9FB3FF] hover:text-[#F4F6FB]"
            }`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              aria-hidden="true"
              className="size-3.5"
            >
              <rect
                x="1"
                y="1"
                width="5"
                height="5"
                rx="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <rect
                x="8"
                y="1"
                width="5"
                height="5"
                rx="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <rect
                x="1"
                y="8"
                width="5"
                height="5"
                rx="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <rect
                x="8"
                y="8"
                width="5"
                height="5"
                rx="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
            Grid View
          </button>

          <button
            type="button"
            onClick={() => {
              setViewMode("detail");
              setHoveredIndex(null);
            }}
            aria-pressed={viewMode === "detail"}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
              viewMode === "detail"
                ? "bg-[#151D31] text-[#F4F6FB]"
                : "text-[#9FB3FF] hover:text-[#F4F6FB]"
            }`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              aria-hidden="true"
              className="size-3.5"
            >
              <path
                d="M1 3h12M1 7h12M1 11h12"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            Detail View
          </button>
        </div>
      </div>

      {/* GRID VIEW */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <article
                key={project.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#151D31] bg-[#0B1020]/90 p-4 transition-all duration-300 hover:border-[#9FB3FF]/40 hover:shadow-[0_12px_40px_rgba(63, 99, 230, 0.08)]"
              >
                <div>
                  {/* Media Viewport with Hover Interactive Simulated Video */}
                  <div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#151D31] bg-[#0B1020]"
                  >
                    {/* Simulated Live Video / Screen (60fps Keyframe Simulation) */}
                    <div
                      className={`dv-screen ${project.hueClass} ${
                        isHovered ? "is-playing" : ""
                      }`}
                    >
                      <div className="dv-side">
                        <i className="dv-active" />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <div className="dv-top">
                        <i />
                        <span className="dv-rec">
                          <b />
                          CONCEPT
                        </span>
                      </div>

                      {/* Illustrative project interface */}
                      <div className="dv-scene dv-s1">
                        <span className="dv-lbl">01 · PROJECT OVERVIEW</span>
                        <div className="dv-tiles">
                          <div className="dv-tile">
                            <i />
                            <b>{project.kpiStats[0]}</b>
                          </div>
                          <div className="dv-tile">
                            <i />
                            <b>{project.kpiStats[1]}</b>
                          </div>
                          <div className="dv-tile">
                            <i />
                            <b>{project.kpiStats[2]}</b>
                          </div>
                        </div>
                        <div className="dv-rows">
                          <div className="dv-hl" />
                          <div className="dv-row">
                            <i style={{ width: "32%" }} />
                            <i style={{ width: "18%" }} />
                          </div>
                          <div className="dv-row">
                            <i style={{ width: "45%" }} />
                            <i style={{ width: "12%" }} />
                          </div>
                          <div className="dv-row">
                            <i style={{ width: "26%" }} />
                            <i style={{ width: "22%" }} />
                          </div>
                        </div>
                      </div>

                      {/* Illustrative project flow */}
                      <div className="dv-scene dv-s2">
                        <span className="dv-lbl">02 · USER FLOW</span>
                        <div className="dv-flow">
                          <div className="dv-ln">
                            <div className="dv-pl" />
                          </div>
                          <span className="dv-nd dv-n0">{project.flowNodes[0]}</span>
                          <span className="dv-nd dv-n1">{project.flowNodes[1]}</span>
                          <span className="dv-nd dv-n2">{project.flowNodes[2]}</span>
                          <span className="dv-nd dv-n3">{project.flowNodes[3]}</span>
                        </div>
                        <div className="dv-log">
                          <span className="dv-g1">› Discover</span>
                          <span className="dv-g2">› Plan</span>
                          <span className="dv-g3">› Build</span>
                          <span className="dv-g4">› Review</span>
                        </div>
                      </div>

                      {/* Decorative progress illustration */}
                      <div className="dv-scene dv-s3">
                        <div className="dv-kpi">
                          <b>Project</b>
                          <span>In development</span>
                        </div>
                        <div className="dv-bars">
                          <div className="dv-bar" style={{ height: "42%" }} />
                          <div className="dv-bar" style={{ height: "60%" }} />
                          <div className="dv-bar" style={{ height: "48%" }} />
                          <div className="dv-bar" style={{ height: "76%" }} />
                          <div className="dv-bar" style={{ height: "68%" }} />
                          <div className="dv-bar" style={{ height: "92%" }} />
                        </div>
                      </div>

                      {/* Interactive Ripple and Cursor */}
                      <div className="dv-rp" />
                      <svg
                        className="dv-cur"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 3l14 8-6 1.5L10 19z"
                          fill="#F4F6FB"
                          stroke="#0B1020"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="dv-toast">
                        <b />
                        Illustrative preview · not live
                      </div>

                      {/* Bottom Scrubber Progress Bar */}
                      <div className="dv-pgw">
                        <div className="dv-pg" />
                      </div>
                    </div>

                    {project.screenshot && (
                      <div
                        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                          isHovered ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.screenshot}
                          alt={`Illustrative interface concept for ${project.name}`}
                          className="size-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/80 via-transparent to-black/20" />
                      </div>
                    )}

                    {/* Illustrative preview badge */}
                    <span
                      className={`absolute top-3 left-3 z-10 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider transition-all duration-300 sm:text-xs ${
                        isHovered
                          ? "bg-[#3F63E6] text-[#F4F6FB] shadow-[0_0_12px_rgba(63, 99, 230, 0.5)]"
                          : "border border-white/10 bg-[#0B1020]/80 text-[#F4F6FB] backdrop-blur-sm"
                      }`}
                    >
                      {isHovered ? "● ANIMATING" : "ILLUSTRATIVE"}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#9FB3FF]">
                      {project.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-medium ${
                        project.status === "Active"
                          ? "text-[#F4F6FB]"
                          : "text-[#9FB3FF]"
                      }`}
                    >
                      {project.status === "Active" ? (
                        <CheckCircle2 className="size-3" />
                      ) : (
                        <Clock className="size-3" />
                      )}
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-1.5 text-lg font-bold text-[#F4F6FB] group-hover:text-[#F4F6FB] sm:text-xl">
                    {project.name}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#9FB3FF] sm:text-sm">
                    {project.description}
                  </p>

                  {project.features && (
                    <div className="mt-3">
                      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#9FB3FF]">
                        Planned features
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.features.slice(0, 4).map((feature) => (
                          <span
                            key={feature}
                            className="rounded-md border border-[#151D31] bg-[#0B1020] px-2 py-0.5 font-mono text-[11px] text-[#9FB3FF]"
                          >
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 4 && (
                          <span className="rounded-md border border-[#151D31] bg-[#0B1020] px-2 py-0.5 font-mono text-[11px] text-[#9FB3FF]">
                            +{project.features.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Links */}
                <div className="mt-5 flex items-center justify-between border-t border-[#151D31] pt-3 text-xs">
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#9FB3FF] transition-colors hover:text-[#F4F6FB]"
                  >
                    Ask About This Project
                    <ExternalLink className="size-3" />
                  </a>
                  <a
                    href="#approach"
                    className="inline-flex items-center gap-1 text-[#9FB3FF] transition-colors hover:text-[#F4F6FB]"
                  >
                    <GitBranch className="size-3" />
                    Our Approach
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* DETAIL VIEW (Full-Width Case Studies) */}
      {viewMode === "detail" && (
        <div className="flex flex-col gap-8">
          {filteredProjects.map((project, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <article
                key={project.id}
                className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-[#151D31] bg-[#0B1020] p-6 lg:grid-cols-[1.2fr_1fr] lg:p-8"
              >
                {/* Large 16:9 Interactive Screen */}
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative aspect-video overflow-hidden rounded-2xl border border-[#151D31] bg-[#0B1020]"
                >
                  <div
                    className={`dv-screen ${project.hueClass} ${
                      isHovered ? "is-playing" : ""
                    }`}
                  >
                    <div className="dv-side">
                      <i className="dv-active" />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="dv-top">
                      <i />
                      <span className="dv-rec">
                        <b />
                        CONCEPT
                      </span>
                    </div>

                    <div className="dv-scene dv-s1">
                      <span className="dv-lbl">01 · PROJECT OVERVIEW</span>
                      <div className="dv-tiles">
                        <div className="dv-tile">
                          <i />
                          <b>{project.kpiStats[0]}</b>
                        </div>
                        <div className="dv-tile">
                          <i />
                          <b>{project.kpiStats[1]}</b>
                        </div>
                        <div className="dv-tile">
                          <i />
                          <b>{project.kpiStats[2]}</b>
                        </div>
                      </div>
                      <div className="dv-rows">
                        <div className="dv-hl" />
                        <div className="dv-row">
                          <i style={{ width: "32%" }} />
                          <i style={{ width: "18%" }} />
                        </div>
                        <div className="dv-row">
                          <i style={{ width: "45%" }} />
                          <i style={{ width: "12%" }} />
                        </div>
                        <div className="dv-row">
                          <i style={{ width: "26%" }} />
                          <i style={{ width: "22%" }} />
                        </div>
                      </div>
                    </div>

                    <div className="dv-scene dv-s2">
                      <span className="dv-lbl">02 · USER FLOW</span>
                      <div className="dv-flow">
                        <div className="dv-ln">
                          <div className="dv-pl" />
                        </div>
                        <span className="dv-nd dv-n0">{project.flowNodes[0]}</span>
                        <span className="dv-nd dv-n1">{project.flowNodes[1]}</span>
                        <span className="dv-nd dv-n2">{project.flowNodes[2]}</span>
                        <span className="dv-nd dv-n3">{project.flowNodes[3]}</span>
                      </div>
                      <div className="dv-log">
                        <span className="dv-g1">› Discover</span>
                        <span className="dv-g2">› Plan</span>
                        <span className="dv-g3">› Build</span>
                        <span className="dv-g4">› Review</span>
                      </div>
                    </div>

                    <div className="dv-scene dv-s3">
                      <div className="dv-kpi">
                        <b>Project</b>
                        <span>In development</span>
                      </div>
                      <div className="dv-bars">
                        <div className="dv-bar" style={{ height: "42%" }} />
                        <div className="dv-bar" style={{ height: "60%" }} />
                        <div className="dv-bar" style={{ height: "48%" }} />
                        <div className="dv-bar" style={{ height: "76%" }} />
                        <div className="dv-bar" style={{ height: "68%" }} />
                        <div className="dv-bar" style={{ height: "92%" }} />
                      </div>
                    </div>

                    <div className="dv-rp" />
                    <svg
                      className="dv-cur"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 3l14 8-6 1.5L10 19z"
                        fill="#F4F6FB"
                        stroke="#0B1020"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="dv-toast">
                      <b />
                      Illustrative preview · not live
                    </div>

                    <div className="dv-pgw">
                      <div className="dv-pg" />
                    </div>
                  </div>

                  {project.screenshot && (
                    <div
                      className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                        isHovered ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.screenshot}
                        alt={`Illustrative interface concept for ${project.name}`}
                        className="size-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/80 via-transparent to-black/20" />
                    </div>
                  )}

                  <span
                    className={`absolute top-4 left-4 z-10 rounded-full px-3 py-1 font-mono text-xs font-semibold tracking-wider transition-all duration-300 ${
                      isHovered
                        ? "bg-[#3F63E6] text-[#F4F6FB] shadow-[0_0_12px_rgba(63, 99, 230, 0.5)]"
                        : "border border-white/10 bg-[#0B1020]/80 text-[#F4F6FB] backdrop-blur-sm"
                    }`}
                  >
                    {isHovered ? "● ANIMATING" : "ILLUSTRATIVE"}
                  </span>
                </div>

                {/* Case Study Details */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#9FB3FF]">
                      {project.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${
                        project.status === "Active"
                          ? "border-[#9FB3FF]/30 bg-[#3F63E6]/10 text-[#F4F6FB]"
                          : "border-[#9FB3FF]/30 bg-[#3F63E6]/10 text-[#9FB3FF]"
                      }`}
                    >
                      {project.status === "Active" ? (
                        <CheckCircle2 className="size-3" />
                      ) : (
                        <Clock className="size-3" />
                      )}
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-[#F4F6FB] sm:text-3xl">
                    {project.name}
                  </h3>

                  <p className="font-mono text-xs text-[#9FB3FF]/90">
                    {project.metrics}
                  </p>

                  <p className="text-sm leading-relaxed text-[#F4F6FB] sm:text-base">
                    {project.solution}
                  </p>

                  {project.plannedScope && (
                    <div className="rounded-xl border border-[#151D31] bg-[#0B1020]/60 p-3.5">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#9FB3FF]">
                        Planned scope
                      </span>
                      <p className="mt-1 font-mono text-xs text-[#9FB3FF]">
                        {project.plannedScope}
                      </p>
                    </div>
                  )}

                  {/* Planned features */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.features?.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-md border border-[#151D31] bg-[#0B1020] px-2.5 py-1 font-mono text-xs text-[#9FB3FF]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-2 flex flex-wrap gap-3">
                    <a
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#3F63E6] px-5 text-sm font-semibold text-[#F4F6FB] transition-all hover:bg-[#9FB3FF] hover:shadow-[0_0_20px_rgba(63, 99, 230, 0.35)]"
                    >
                      Ask About This Project
                      <ExternalLink className="size-4" />
                    </a>
                    <a
                      href="#approach"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#151D31] bg-transparent px-5 text-sm font-medium text-[#F4F6FB] transition-colors hover:border-[#9FB3FF]/50 hover:bg-[#0B1020] hover:text-[#F4F6FB]"
                    >
                      <GitBranch className="size-4" />
                      Our Approach
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
