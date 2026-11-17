import { MessageCircle } from "lucide-react";
import { StickyScroll } from "@/components/effects/sticky-scroll";
import ScrollFloat from "@/components/ScrollFloat";
import { WHATSAPP_HREF, WORK_STAGES } from "@/data/portfolioData";

const items = WORK_STAGES.map((stage) => ({
  title: `${stage.step}. ${stage.title}`,
  description: stage.description,
  content: (
    <div className="relative flex size-full flex-col justify-between overflow-hidden rounded-xl border border-[var(--hair)] bg-[#151D31]/90 p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F4F6FB]/50 sm:text-xs">
        <span>ADOT SHEL OR / Our Approach</span>
        <span className="rounded-full border border-[var(--hair)] px-3 py-1 text-[#9FB3FF]">
          {stage.timeline}
        </span>
      </div>

      <div>
        <span
          aria-hidden="true"
          className="block font-display text-[clamp(7rem,15vw,12rem)] leading-[0.8] font-semibold tracking-[-0.09em] text-[#F4F6FB]/[0.08]"
        >
          {stage.step}
        </span>
        <div className="mt-7 h-px w-full bg-gradient-to-r from-[#9FB3FF] via-[#9FB3FF] to-transparent" />
      </div>

      <div>
        <p className="text-sm font-medium text-[#9FB3FF]">
          Stage {stage.step}
        </p>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-[#F4F6FB] sm:text-3xl">
          {stage.title}
        </p>
      </div>
    </div>
  ),
}));

export function ProcessSection() {
  return (
    <section
      id="approach"
      className="relative scroll-mt-12 border-t border-[var(--hair-soft)] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl sm:mb-16">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[rgba(63, 99, 230, 0.28)] bg-[rgba(63, 99, 230, 0.12)] px-3 py-1 text-xs font-semibold text-[#9FB3FF]">
            A clear way to get started
          </span>
          <ScrollFloat containerClassName="text-3xl font-extrabold tracking-tight text-[#F4F6FB] sm:text-4xl lg:text-5xl">
            Build in steps. Stay{" "}
            <em className="font-[var(--font-italic)] font-normal text-[#9FB3FF]">
              involved.
            </em>
          </ScrollFloat>
          <p className="mt-4 text-base leading-relaxed text-[#F4F6FB]/70 sm:text-lg">
            We follow Discover, Plan, Build, Review, Improve, then Launch and
            Support. You see progress, share feedback, and set priorities as
            we go.
          </p>
        </div>

        <StickyScroll items={items} className="gap-8 lg:gap-16" />

        <div className="mt-8 max-w-3xl space-y-3 text-sm leading-relaxed text-[#F4F6FB]/70">
          <p>
            For your IT team: Each cycle follows a prioritised backlog (ordered
            task list) and produces a working increment (usable update). We
            review feedback and maintain version control and documentation.
          </p>
          <p>
            Cost depends on pages, online payments, admin features, and ongoing
            support. After we understand your needs, we share a clear quote and
            agree on a timeline before work starts.
          </p>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-[#9FB3FF] transition-colors hover:text-[#F4F6FB]"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
