import { MessageCircle } from "lucide-react";
import { WHATSAPP_HREF } from "@/data/portfolioData";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ADOT SHEL OR on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#3F63E6] text-[#F4F6FB] shadow-lg transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9FB3FF] motion-reduce:transition-none"
    >
      <MessageCircle aria-hidden="true" className="size-6" />
    </a>
  );
}
