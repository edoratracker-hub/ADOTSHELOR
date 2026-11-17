export type AccentColor = "teal" | "amber" | "navy" | "slate";

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface ServicePillar {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly heading: string;
  readonly subtitle: string;
  readonly tag: string;
  readonly description: string;
  readonly whatWeOffer: readonly string[];
  readonly buttonText: string;
  readonly buttonHref: string;
}

export interface WorkStage {
  readonly step: string;
  readonly title: string;
  readonly description: string;
  readonly timeline: string;
}

export interface ProjectItem {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly description: string;
  readonly features?: readonly string[];
  readonly status: "In Development";
}

export interface DifferenceItem {
  readonly title: string;
  readonly description: string;
  readonly icon?: string;
}

export interface ContactChannel {
  readonly label: string;
  readonly value: string;
  readonly href: string;
}

export interface SocialLink {
  readonly platform: string;
  readonly url?: string;
  readonly isConfigured: boolean;
}
