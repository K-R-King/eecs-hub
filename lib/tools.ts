import { siteUrl, type SiteId } from "@/lib/suite";

export type Tool = {
  id: SiteId;
  icon: string;
  name: string;
  tagline: string;
  features: string[];
  cta: string;
  url: string;
};

export const TOOLS: Tool[] = [
  {
    id: "planner",
    icon: "🗺️",
    name: "EECS Planner",
    tagline: "Map your whole degree, semester by semester.",
    features: ["Every 2026–27 requirement", "AP credit and focus tracks", "Drag and drop, plus an AI advisor"],
    cta: "Plan my degree",
    url: siteUrl("planner"),
  },
  {
    id: "prereqs",
    icon: "🧭",
    name: "EECS Prereqs",
    tagline: "What every course needs first, and what it unlocks.",
    features: ["Every undergrad EECS course", "Full prerequisite chains", "Checked against the Berkeley catalog"],
    cta: "Look up a course",
    url: siteUrl("prereqs"),
  },
  {
    id: "electives",
    icon: "🎯",
    name: "EECS Electives",
    tagline: "Find the upper-division electives made for you.",
    features: ["Five-question quiz", "Ranked picks with reasons", "The path of prerequisites to get there"],
    cta: "Find my electives",
    url: siteUrl("electives"),
  },
  {
    id: "links",
    icon: "🔗",
    name: "EECS Links",
    tagline: "Every important Berkeley link in one place.",
    features: ["Enrollment, course sites, tutoring", "Careers, research, campus life", "Search and star favorites"],
    cta: "Browse the links",
    url: siteUrl("links"),
  },
];

export const tool = (id: SiteId) => TOOLS.find((t) => t.id === id)!;

// common questions, each answered by one of the tools
export const QUESTIONS: { q: string; tool: SiteId }[] = [
  { q: "I'm an incoming student. What should my four years look like?", tool: "planner" },
  { q: "Can I graduate early with my AP credit?", tool: "planner" },
  { q: "Can I take CS 170 next semester?", tool: "prereqs" },
  { q: "What do I need before CS 189?", tool: "prereqs" },
  { q: "Which electives fit what I'm into?", tool: "electives" },
  { q: "I still need a design course. Which ones count?", tool: "electives" },
  { q: "Where do I enroll, or check my waitlist?", tool: "links" },
  { q: "Where can I get free tutoring?", tool: "links" },
];

// how the tools fit through the years
export const JOURNEY: { when: string; text: string; tool: SiteId }[] = [
  { when: "Before you arrive", text: "Plan all four years around your AP credit and interests.", tool: "planner" },
  { when: "Every enrollment period", text: "Check you've met the prerequisites before you sign up.", tool: "prereqs" },
  { when: "Sophomore year", text: "Pick upper-division electives that fit where you're headed.", tool: "electives" },
  { when: "All the time", text: "Find course sites, tutoring, internships and campus help.", tool: "links" },
];
