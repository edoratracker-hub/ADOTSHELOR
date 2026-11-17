import {
  NavItem,
  ServicePillar,
  WorkStage,
  ProjectItem,
  DifferenceItem,
  ContactChannel,
  SocialLink,
} from "@/types/portfolio";

export const WHATSAPP_NUMBER = "918138953814";
export const WHATSAPP_MESSAGE =
  "Hi ADOT SHEL OR, I'd like to discuss taking my business online.";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const NAVIGATION_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Our Approach", href: "#approach" },
];

export const BRAND_INFO = {
  name: "ADOT SHEL OR",
  domain: ".com",
  fullName: "ADOT SHEL OR",
  tagline: "Online growth for start-ups",
  headline: "Your next step is online.",
  subheadline:
    "We help start-ups move online with custom software, a clear business identity, and ongoing IT support.",
  primaryButtonText: "Contact Us",
  secondaryButtonText: "See Current Projects",
};

export const HERO_HIGHLIGHTS = [
  {
    title: "Business Identity",
    description: "A clear brand and online presence for your business.",
  },
  {
    title: "Custom Software",
    description: "Useful tools shaped around how your business works.",
  },
  {
    title: "Online IT Support",
    description: "Practical help for your team, explained in plain language.",
  },
] as const;

export const SERVICE_PILLARS: readonly ServicePillar[] = [
  {
    id: "problem-solving",
    number: "01",
    title: "Brand identity and online presence",
    heading: "Give your business a clear online home.",
    subtitle: "Brand identity & website",
    tag: "Build your presence",
    description:
      "Help customers understand who you are and what you offer with a clear business identity, website, and digital presence.",
    whatWeOffer: ["Brand identity", "Business websites", "Digital presence"],
    buttonText: "Discuss Your Online Presence",
    buttonHref: WHATSAPP_HREF,
  },
  {
    id: "idea-to-product",
    number: "02",
    title: "Custom software",
    heading: "Build around how your business works.",
    subtitle: "Software for your business",
    tag: "Build what you need",
    description:
      "Move key tasks online with custom software shaped around your business, your customers, and the way your team works.",
    whatWeOffer: [
      "Web apps and dashboards",
      "Ordering systems",
      "Business platforms",
    ],
    buttonText: "Discuss Custom Software",
    buttonHref: WHATSAPP_HREF,
  },
  {
    id: "ongoing-support",
    number: "03",
    title: "Ongoing IT support",
    heading: "Get support that makes sense.",
    subtitle: "Support for your team",
    tag: "Help after launch",
    description:
      "Get online help through chat, calls, and screen-sharing. Speak directly with the people who built your software, and get technical issues explained in plain language.",
    whatWeOffer: [
      "Support for your internal team",
      "Help by chat, call, or screen-sharing",
      "Plain-language explanations",
    ],
    buttonText: "Ask About IT Support",
    buttonHref: WHATSAPP_HREF,
  },
  {
    id: "student-project-guidance",
    number: "04",
    title: "Student and portfolio projects",
    heading: "Build a project you can explain.",
    subtitle: "Guidance for students",
    tag: "Learn by building",
    description:
      "Get guidance with a college or portfolio project. Work through the build step by step, with code walkthroughs and clear explanations.",
    whatWeOffer: [
      "Project planning",
      "Guided development",
      "Code walkthroughs",
      "Technical explanations",
    ],
    buttonText: "Discuss a Student Project",
    buttonHref: WHATSAPP_HREF,
  },
];

export const WORK_STAGES: readonly WorkStage[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "Tell us about your business, the people you serve, and the problem you want to solve.",
    timeline: "Understand your needs",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We agree on the scope, a clear quote, and a timeline before work starts.",
    timeline: "Agree on the plan",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We work in short cycles and share progress, so you can stay involved as the work takes shape.",
    timeline: "Build in steps",
  },
  {
    step: "04",
    title: "Review",
    description:
      "You review working updates and tell us what fits your business and what needs attention.",
    timeline: "Review together",
  },
  {
    step: "05",
    title: "Improve",
    description:
      "Changes are welcome. We agree priorities for each cycle and improve the work together.",
    timeline: "Adjust priorities",
  },
  {
    step: "06",
    title: "Launch & Support",
    description:
      "We prepare the agreed work for launch and support your team online after it goes live.",
    timeline: "Launch and support",
  },
];

export const PROJECTS_DATA: readonly ProjectItem[] = [
  {
    id: "supermarket-ordering-app",
    name: "Supermarket Ordering App",
    category: "Ordering system",
    description:
      "A mobile ordering app for supermarket customers and store teams.",
    features: [
      "Customer login",
      "Store and product listings",
      "Cart and checkout",
      "Order tracking",
      "Admin management",
    ],
    status: "In Development",
  },
  {
    id: "water-connect",
    name: "Water Connect",
    category: "Marketplace platform",
    description: "A marketplace platform for water suppliers.",
    status: "In Development",
  },
];

export const DIFFERENCE_ITEMS: readonly DifferenceItem[] = [
  {
    title: "Start with your business",
    description:
      "We learn how your business works before recommending a digital solution.",
    icon: "Target",
  },
  {
    title: "Keep things clear",
    description:
      "We explain choices, progress, and technical issues in plain language.",
    icon: "MessageSquare",
  },
  {
    title: "Build together",
    description:
      "You see progress, share feedback, and help set priorities as we work.",
    icon: "Cpu",
  },
  {
    title: "Stay connected",
    description:
      "Your team can get online support from the people who know the software.",
    icon: "Lightbulb",
  },
];

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    label: "Email",
    value: "contact@adotshelor.com",
    href: "mailto:contact@adotshelor.com",
  },
];

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/adotshelor",
    isConfigured: true,
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/company/adotshelor",
    isConfigured: true,
  },
  {
    platform: "X / Twitter",
    url: "https://x.com/adotshelor",
    isConfigured: true,
  },
];

export const FOOTER_SERVICES = [
  { label: "Brand & Online Presence", href: "#problem-solving" },
  { label: "Custom Software", href: "#idea-to-product" },
  { label: "Ongoing IT Support", href: "#ongoing-support" },
  { label: "Student & Portfolio Projects", href: "#student-project-guidance" },
];

export const FOOTER_NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Student & Portfolio Projects", href: "#student-project-guidance" },
  { label: "Our Approach", href: "#approach" },
  { label: "Contact", href: WHATSAPP_HREF },
];
