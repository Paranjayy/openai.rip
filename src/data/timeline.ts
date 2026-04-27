export type TimelineSource = {
  title: string;
  url: string;
  icon: string;
};

export type TimelineEvent = {
  date: string;
  period: string;
  title: string;
  summary: string;
  sources: TimelineSource[];
  category: "Legal" | "Quality" | "Reliability" | "Safety" | "Policy";
};

export const timelineEvents: TimelineEvent[] = [
  {
    date: "2018-01-01",
    period: "2015–2018",
    title: "The “open” origin story cracks",
    summary: "Founded as nonprofit with mission for open AI research. By ~2018, safety is cited to reduce openness and competitive pressure increases. Shift begins: openness → controlled access.",
    sources: [],
    category: "Policy"
  },
  {
    date: "2019-01-01",
    period: "2019",
    title: "The capped-profit pivot",
    summary: "OpenAI LP created. Investors allowed capped returns, Microsoft invests $1B+. Criticism: Governance becomes hybrid and opaque, “Nonprofit controlling a for-profit” confusion.",
    sources: [],
    category: "Policy"
  },
  {
    date: "2019-02-01",
    period: "2019",
    title: "GPT-2 “too dangerous to release”",
    summary: "GPT-2 initially withheld. Backlash: Seen as overhyped risk framing and marketing via scarcity. Later fully released anyway.",
    sources: [],
    category: "Policy"
  },
  {
    date: "2020-01-01",
    period: "2020",
    title: "API-only future",
    summary: "GPT-3 released with no weights, no self-hosting, full platform control. Dev sentiment: “You don’t use the model, you rent it”.",
    sources: [],
    category: "Policy"
  },
  {
    date: "2021-01-01",
    period: "2021",
    title: "Codex + Copilot controversy",
    summary: "GitHub Copilot launched, trained on public code. Issues: Reproduces licensed code snippets, attribution missing, legal gray area.",
    sources: [],
    category: "Legal"
  },
  {
    date: "2022-01-01",
    period: "2022",
    title: "DALL·E + dataset ethics",
    summary: "DALL·E trained on large scraped datasets. Criticism: Artists’ work used without consent, style mimicry concerns.",
    sources: [],
    category: "Legal"
  },
  {
    date: "2022-11-01",
    period: "Nov 2022",
    title: "ChatGPT moment",
    summary: "ChatGPT goes viral. Immediate failures: Hallucinations, confident misinformation, jailbreak culture emerges (DAN etc.).",
    sources: [],
    category: "Quality"
  },
  {
    date: "2023-01-01",
    period: "Dec 2022–2023",
    title: "Education collapse panic",
    summary: "Schools ban ChatGPT. Plagiarism detection fails to keep up.",
    sources: [],
    category: "Policy"
  },
  {
    date: "2023-01-15",
    period: "Jan 2023",
    title: "Chat titles leak",
    summary: "UI bug exposes conversation titles to other users.",
    sources: [],
    category: "Reliability"
  },
  {
    date: "2023-03-20",
    period: "Mar 2023",
    title: "Redis bug data exposure",
    summary: "Cross-user data leakage: Chat fragments, billing info (partial).",
    sources: [],
    category: "Reliability"
  },
  {
    date: "2023-03-31",
    period: "2023",
    title: "Italy ban (GDPR shock)",
    summary: "Italian Data Protection Authority (Garante) bans ChatGPT for no legal basis for training data and no age gating.",
    sources: [],
    category: "Legal"
  },
  {
    date: "2023-04-01",
    period: "2023",
    title: "Plugin attack surface",
    summary: "ChatGPT plugins introduced. Problems: Prompt injection attacks, data exfiltration risks, tool misuse.",
    sources: [],
    category: "Safety"
  },
  {
    date: "2023-06-01",
    period: "2023",
    title: "Function calling hallucinations",
    summary: "Models fabricate tool outputs. Devs assume correctness → system failures.",
    sources: [],
    category: "Quality"
  },
  {
    date: "2023-07-01",
    period: "2023",
    title: "Copyright lawsuits pile up",
    summary: "Authors, artists, publishers vs OpenAI. Examples: Sarah Silverman lawsuit, News org lawsuits (NYT later escalates).",
    sources: [],
    category: "Legal"
  },
  {
    date: "2023-10-01",
    period: "Late 2023",
    title: "“GPT-4 is amazing… and weird”",
    summary: "GPT-4: Strong reasoning, but still hallucinates, is expensive, and slow.",
    sources: [],
    category: "Quality"
  },
  {
    date: "2023-11-17",
    period: "Nov 2023",
    title: "The board coup",
    summary: "Sam Altman fired. Chaos: Employees revolt, Microsoft steps in. Altman returns. Signal: governance failure at scale.",
    sources: [],
    category: "Policy"
  },
  {
    date: "2024-01-01",
    period: "2024",
    title: "GPT-4 Turbo & “laziness”",
    summary: "Reports: Shorter answers, less effort. OpenAI denies intentional downgrade.",
    sources: [],
    category: "Quality"
  },
  {
    date: "2024-02-01",
    period: "2024",
    title: "Alignment overshoot",
    summary: "Models refuse harmless prompts, over-censor edge cases. Trade-off becomes visible: Utility ↔ Safety.",
    sources: [],
    category: "Safety"
  },
  {
    date: "2024-05-15",
    period: "2024",
    title: "Voice model controversy",
    summary: "Human-like voices released. “Her”-like similarity concerns, especially with Scarlett Johansson.",
    sources: [],
    category: "Legal"
  },
  {
    date: "2024-06-01",
    period: "2024",
    title: "Memory feature concerns",
    summary: "Persistent memory introduced. Risks: Profiling, data retention ambiguity.",
    sources: [],
    category: "Safety"
  },
  {
    date: "2024-02-15",
    period: "2024",
    title: "Sora reveal vs reality",
    summary: "Sora text-to-video model demo shocks industry. Access: Extremely limited. Pattern: demo >> availability.",
    sources: [],
    category: "Policy"
  },
  {
    date: "2024-07-01",
    period: "2024",
    title: "Model spec opacity",
    summary: "Training data details vague. Eval benchmarks selective.",
    sources: [],
    category: "Policy"
  },
  {
    date: "2024-08-01",
    period: "2024",
    title: "API instability complaints",
    summary: "Model behavior changes silently. Same prompt ≠ same output over time.",
    sources: [],
    category: "Reliability"
  },
  {
    date: "2025-01-01",
    period: "2025",
    title: "Cost + rate limit frustration",
    summary: "Token pricing fluctuates, context windows gated. Dev pain: Hard to budget systems.",
    sources: [],
    category: "Policy"
  },
  {
    date: "2025-02-01",
    period: "2025",
    title: "Enterprise lock-in",
    summary: "Deep integration with APIs, fine-tuning, tooling. Switching cost ↑",
    sources: [],
    category: "Policy"
  },
  {
    date: "2025-03-01",
    period: "2025",
    title: "Distillation paranoia",
    summary: "OpenAI concerned about competitors copying outputs. Irony noted by critics.",
    sources: [],
    category: "Policy"
  },
  {
    date: "2025-04-01",
    period: "2025",
    title: "Safety incidents (misuse)",
    summary: "AI used for phishing, scams, automation of spam.",
    sources: [],
    category: "Safety"
  },
  {
    date: "2025-05-01",
    period: "2025",
    title: "Benchmark gaming accusations",
    summary: "Models tuned for eval performance, not real-world robustness.",
    sources: [],
    category: "Quality"
  },
  {
    date: "2025-06-01",
    period: "2025",
    title: "Open vs closed tension peaks",
    summary: "Competitors (Meta LLaMA, Mistral) go open. OpenAI stays closed.",
    sources: [],
    category: "Policy"
  },
  {
    date: "2025-07-01",
    period: "2025",
    title: "Developer trust erosion",
    summary: "Complaints: “model got worse”, silent updates, inconsistent outputs.",
    sources: [],
    category: "Quality"
  },
  {
    date: "2025-10-01",
    period: "2025–2026",
    title: "Reliability under load",
    summary: "High demand → degraded performance.",
    sources: [],
    category: "Reliability"
  },
  {
    date: "2026-01-01",
    period: "2026",
    title: "Agent push = new failure modes",
    summary: "Tool use + autonomy introduces loops, wrong actions, brittle workflows.",
    sources: [],
    category: "Safety"
  },
  {
    date: "2026-02-01",
    period: "2026",
    title: "Overdependence risk",
    summary: "Users rely on AI outputs blindly. Leads to incorrect decisions, automation errors.",
    sources: [],
    category: "Safety"
  },
  {
    date: "2026-03-01",
    period: "2026",
    title: "Competitive pressure escalates",
    summary: "Anthropic, Google DeepMind, others push rapid release cycles → stability trade-offs.",
    sources: [],
    category: "Reliability"
  }
];

export const categories = ["All", "Quality", "Reliability", "Legal", "Policy", "Safety"] as const;
