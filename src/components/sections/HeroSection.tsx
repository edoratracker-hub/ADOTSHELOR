"use client";

import {
  BRAND_INFO,
  HERO_HIGHLIGHTS,
  WHATSAPP_HREF,
} from "@/data/portfolioData";
import { CheckCircle2, Layers, MessageCircle, ShieldCheck } from "lucide-react";
import { WavyBackground } from "@/components/effects/wavy-background";
import SplitText from "@/components/SplitText";

const HIGHLIGHT_ICONS = [CheckCircle2, Layers, ShieldCheck] as const;

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero__waves" aria-hidden="true">
        <WavyBackground
          waves={6}
          blur={22}
          opacity={0.32}
          colors={["--brand-from", "--brand-via", "--brand-to"]}
        />
      </div>
      <div className="hero__ambient" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__lead">
          <h1 className="hero__title" aria-label="Your next step is online.">
            <span className="hero__title-line" aria-hidden="true">
              <SplitText
                text="Your next step"
                tag="span"
                className="hero__split"
                delay={35}
                duration={0.85}
                effect="blur"
                trigger="load"
              />
            </span>{" "}
            <span className="hero__title-line" aria-hidden="true">
              <SplitText
                text="is"
                tag="span"
                className="hero__split"
                delay={35}
                duration={0.85}
                effect="blur"
                trigger="load"
              />{" "}
              <em>
                <SplitText
                  text="online."
                  tag="span"
                  className="hero__split"
                  delay={35}
                  duration={0.85}
                  effect="blur"
                  trigger="load"
                />
              </em>
            </span>
          </h1>

          <p className="hero__sub">{BRAND_INFO.subheadline}</p>

          <div className="hero__cta">
            <a
              className="btn btn--cyan hero__go"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{BRAND_INFO.primaryButtonText}</span>
            </a>
            <a className="btn btn--ghost-cyan hero__secondary" href="#projects">
              {BRAND_INFO.secondaryButtonText}
            </a>
          </div>
        </div>

        <div className="hero__highlights">
          <p className="hero__highlights-label">Built around what matters</p>
          <ul className="hero__highlights-grid">
            {HERO_HIGHLIGHTS.map((item, index) => {
              const Icon = HIGHLIGHT_ICONS[index];

              return (
                <li key={item.title} className="hero__highlight">
                  <Icon className="hero__highlight-icon" aria-hidden="true" />
                  <div>
                    <h2 className="hero__highlight-title">{item.title}</h2>
                    <p className="hero__highlight-desc">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
