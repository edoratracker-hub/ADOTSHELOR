"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Clock, ExternalLink, GitBranch } from "lucide-react";
import { PROJECTS_DATA } from "@/data/portfolioData";
import "./ProjectsSection.css";

type ViewMode = "grid" | "detail";

interface ProjectDetailItem {
  id: string;
  name: string;
  category: string;
  categoryTab: string;
  metrics: string;
  problem: string;
  solution: string;
  description: string;
  architecture: string;
  technologies: readonly string[];
  status: string;
  screenshot: string;
  liveDemo?: string;
  githubRepo?: string;
  hueClass: string;
  kpiStats: [string, string, string];
  flowNodes: [string, string, string, string];
}

const ENRICHED_PROJECTS: ProjectDetailItem[] = [
  {
    id: "business-management-platform",
    name: "Business Management Platform",
    category: "Business Software",
    categoryTab: "Business Software",
    metrics: "Production Active • Real-Time Client Telemetry",
    problem:
      "Fragmented operations, scattered spreadsheets, and inefficient manual administrative overhead slowed team execution.",
    solution:
      "Engineered an integrated business management platform centralizing operations, client records, invoicing, and real-time operational reporting.",
    description:
      "Centralizes client operations, invoicing, administrative records, and real-time telemetry into a unified, high-performance platform.",
    architecture:
      "Edge-rendered Next.js · PostgreSQL · Real-Time Telemetry Rollups",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma"],
    status: "Active",
    screenshot: "/projects/business-platform.jpg",
    liveDemo: "https://adotshelor.com",
    githubRepo: "https://github.com/adotshelor",
    hueClass: "dv-h1",
    kpiStats: ["$148k", "212+", "41ms"],
    flowNodes: ["Client", "API", "Auth", "Postgres"],
  },
  {
    id: "workflow-automation-platform",
    name: "Workflow Automation Platform",
    category: "Workflow Systems",
    categoryTab: "Workflow Systems",
    metrics: "Event-Driven • Zero Payload Loss • Sub-20ms",
    problem:
      "Repetitive data entry and disconnected multi-step communication between departments caused recurring errors and delay.",
    solution:
      "Developed an automated pipeline engine that synchronizes event-driven triggers, formats payloads, and eliminates redundant manual steps.",
    description:
      "Event-driven automation engine that synchronizes department triggers, formats data payloads, and handles fail-safe retries at sub-20ms latency.",
    architecture:
      "Node.js Worker Queues · Redis Pub/Sub · Webhook Fan-Out · Dead-Letter Retry",
    technologies: ["React", "Node.js", "REST APIs", "Redis", "Docker"],
    status: "Active",
    screenshot: "/projects/workflow-automation.jpg",
    liveDemo: "https://adotshelor.com",
    githubRepo: "https://github.com/adotshelor",
    hueClass: "dv-h2",
    kpiStats: ["1.2M", "0% Loss", "18ms"],
    flowNodes: ["UI", "API", "Redis", "DB"],
  },
  {
    id: "ai-analytics-tool",
    name: "AI-Powered Analytics Tool",
    category: "AI Integration",
    categoryTab: "AI Integration",
    metrics: "Predictive Modeling • Anomaly Detection",
    problem:
      "Complex data streams and unstructured performance logs were too dense to interpret quickly without specialized analysts.",
    solution:
      "Created an intuitive analytics interface integrating AI assistance for automated trend summaries, anomaly detection, and actionable insights.",
    description:
      "High-throughput analytics console with embedded AI reasoning for real-time anomaly detection, log clustering, and automated trend synthesis.",
    architecture:
      "Next.js SPA · FastAPI Python Microservices · Streaming Claude/OpenAI · Chart.js",
    technologies: ["Next.js", "Python", "FastAPI", "OpenAI / Claude API", "Chart.js"],
    status: "In Development",
    screenshot: "/projects/ai-analytics.jpg",
    liveDemo: "https://adotshelor.com",
    githubRepo: "https://github.com/adotshelor",
    hueClass: "dv-h3",
    kpiStats: ["98.4%", "Stream", "32ms"],
    flowNodes: ["Ingest", "Vector", "LLM", "Viz"],
  },
];

const CATEGORY_TABS = [
  "All",
  "Business Software",
  "Workflow Systems",
  "AI Integration",
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
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[rgba(0,210,238,0.28)] bg-[rgba(0,210,238,0.12)] px-3 py-1 text-xs font-semibold text-[#00d2ee]">
          Projects and Portfolio
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Real Projects. Real Solutions.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">
          Showcasing our strongest projects built with disciplined software
          engineering, functional design, and maintainable architecture.
        </p>
      </div>

      {/* Controls Bar: Category Filter Pills + View Switcher */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#1c2430] pb-6">
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
                    ? "bg-[#1a2331] text-white shadow-sm ring-1 ring-[#00d2ee]/40"
                    : "text-[#8b98a9] hover:bg-[#111824] hover:text-white"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Dual-View Toggle: Grid View vs Detail View */}
        <div className="flex rounded-xl border border-[#1c2430] bg-[#0b1017] p-1">
          <button
            type="button"
            onClick={() => {
              setViewMode("grid");
              setHoveredIndex(null);
            }}
            aria-pressed={viewMode === "grid"}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
              viewMode === "grid"
                ? "bg-[#1a2331] text-white"
                : "text-[#8b98a9] hover:text-white"
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
                ? "bg-[#1a2331] text-white"
                : "text-[#8b98a9] hover:text-white"
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
                className="group flex flex-col justify-between rounded-2xl border border-[#1c2430] bg-[#0b1017]/90 p-4 transition-all duration-300 hover:border-[#00d2ee]/40 hover:shadow-[0_12px_40px_rgba(0,210,238,0.08)]"
              >
                <div>
                  {/* Media Viewport with Hover Interactive Simulated Video */}
                  <div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#1c2430] bg-[#0a0f17]"
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
                          REC
                        </span>
                      </div>

                      {/* Scene 1: Dashboard Telemetry */}
                      <div className="dv-scene dv-s1">
                        <span className="dv-lbl">01 · TELEMETRY</span>
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

                      {/* Scene 2: Workflow Pipeline Nodes */}
                      <div className="dv-scene dv-s2">
                        <span className="dv-lbl">02 · PIPELINE</span>
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
                          <span className="dv-g1">› request accepted</span>
                          <span className="dv-g2">› payload validated</span>
                          <span className="dv-g3">› cache write ok</span>
                          <span className="dv-g4">› persisted · 200</span>
                        </div>
                      </div>

                      {/* Scene 3: Live Equalizer Analytics */}
                      <div className="dv-scene dv-s3">
                        <div className="dv-kpi">
                          <b>Throughput</b>
                          <span>trending up</span>
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
                          fill="#fff"
                          stroke="#0a0f17"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="dv-toast">
                        <b />
                        Webhook delivered · 200
                      </div>

                      {/* Bottom Scrubber Progress Bar */}
                      <div className="dv-pgw">
                        <div className="dv-pg" />
                      </div>
                    </div>

                    {/* Static Screenshot Fallback (Fades out when hovered) */}
                    <div
                      className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                        isHovered ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.screenshot}
                        alt={`${project.name} preview`}
                        className="size-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f17]/80 via-transparent to-black/20" />
                    </div>

                    {/* Status Pill Badge: PREVIEW vs ● PLAYING */}
                    <span
                      className={`absolute top-3 left-3 z-10 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider transition-all duration-300 sm:text-xs ${
                        isHovered
                          ? "bg-[#22d3ee] text-[#041014] shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                          : "border border-white/10 bg-[#07090d]/80 text-[#c9d4e1] backdrop-blur-sm"
                      }`}
                    >
                      {isHovered ? "● PLAYING" : "PREVIEW"}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#00d2ee]">
                      {project.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-medium ${
                        project.status === "Active"
                          ? "text-[#38bdf8]"
                          : "text-[#fbbf24]"
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

                  <h3 className="mt-1.5 text-lg font-bold text-[#e6edf5] group-hover:text-white sm:text-xl">
                    {project.name}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#8b98a9] sm:text-sm">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[#1c2430] bg-[#111824] px-2 py-0.5 font-mono text-[11px] text-[#9fb0c3]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="rounded-md border border-[#1c2430] bg-[#111824] px-2 py-0.5 font-mono text-[11px] text-[#9fb0c3]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="mt-5 flex items-center justify-between border-t border-[#1c2430] pt-3 text-xs">
                  <a
                    href={project.liveDemo || "#contact"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#22d3ee] transition-colors hover:text-[#67e8f9]"
                  >
                    Live Demo
                    <ExternalLink className="size-3" />
                  </a>
                  <a
                    href={project.githubRepo || "#contact"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#8b98a9] transition-colors hover:text-white"
                  >
                    <GitBranch className="size-3" />
                    Repository
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
                className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-[#1c2430] bg-[#0b1017] p-6 lg:grid-cols-[1.2fr_1fr] lg:p-8"
              >
                {/* Large 16:9 Interactive Screen */}
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative aspect-video overflow-hidden rounded-2xl border border-[#1c2430] bg-[#0a0f17]"
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
                        REC
                      </span>
                    </div>

                    <div className="dv-scene dv-s1">
                      <span className="dv-lbl">01 · TELEMETRY</span>
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
                      <span className="dv-lbl">02 · WORKFLOW PIPELINE</span>
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
                        <span className="dv-g1">› request accepted</span>
                        <span className="dv-g2">› payload validated</span>
                        <span className="dv-g3">› cache write ok</span>
                        <span className="dv-g4">› persisted · 200</span>
                      </div>
                    </div>

                    <div className="dv-scene dv-s3">
                      <div className="dv-kpi">
                        <b>Throughput</b>
                        <span>trending up</span>
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
                        fill="#fff"
                        stroke="#0a0f17"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="dv-toast">
                      <b />
                      Webhook delivered · 200
                    </div>

                    <div className="dv-pgw">
                      <div className="dv-pg" />
                    </div>
                  </div>

                  {/* Fallback Static Screenshot */}
                  <div
                    className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                      isHovered ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.screenshot}
                      alt={`${project.name} preview`}
                      className="size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f17]/80 via-transparent to-black/20" />
                  </div>

                  <span
                    className={`absolute top-4 left-4 z-10 rounded-full px-3 py-1 font-mono text-xs font-semibold tracking-wider transition-all duration-300 ${
                      isHovered
                        ? "bg-[#22d3ee] text-[#041014] shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                        : "border border-white/10 bg-[#07090d]/80 text-[#c9d4e1] backdrop-blur-sm"
                    }`}
                  >
                    {isHovered ? "● PLAYING" : "PREVIEW"}
                  </span>
                </div>

                {/* Case Study Details */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#00d2ee]">
                      {project.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${
                        project.status === "Active"
                          ? "border-[#00d2ee]/30 bg-[#00d2ee]/10 text-[#38bdf8]"
                          : "border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#fbbf24]"
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

                  <h3 className="text-2xl font-bold tracking-tight text-[#e6edf5] sm:text-3xl">
                    {project.name}
                  </h3>

                  <p className="font-mono text-xs text-[#00d2ee]/90">
                    {project.metrics}
                  </p>

                  <p className="text-sm leading-relaxed text-[#c9d4e1] sm:text-base">
                    {project.solution}
                  </p>

                  <div className="rounded-xl border border-[#1c2430] bg-[#07090d]/60 p-3.5">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#8b98a9]">
                      Architecture
                    </span>
                    <p className="mt-1 font-mono text-xs text-[#9fb0c3]">
                      {project.architecture}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[#1c2430] bg-[#111824] px-2.5 py-1 font-mono text-xs text-[#9fb0c3]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-2 flex flex-wrap gap-3">
                    <a
                      href={project.liveDemo || "#contact"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#22d3ee] px-5 text-sm font-semibold text-[#041014] transition-all hover:bg-[#67e8f9] hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                    >
                      Live Demo
                      <ExternalLink className="size-4" />
                    </a>
                    <a
                      href={project.githubRepo || "#contact"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#2a3647] bg-transparent px-5 text-sm font-medium text-[#d5dee9] transition-colors hover:border-[#00d2ee]/50 hover:bg-[#111824] hover:text-white"
                    >
                      <GitBranch className="size-4" />
                      GitHub Repository
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
