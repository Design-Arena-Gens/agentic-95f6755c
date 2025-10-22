import Link from "next/link";

type StarterKit = {
  id: string;
  title: string;
  description: string;
  includes: string[];
  outcome: string;
  url: string;
};

const starterKits: StarterKit[] = [
  {
    id: "project-brief",
    title: "Project Kickoff Brief",
    description:
      "Clarify the problem, audience, and constraints with a single collaborative canvas before you start writing code.",
    includes: ["Problem statement prompts", "Audience & value proposition grid", "Success metrics checklist"],
    outcome: "Shareable brief that gets the whole team aligned in under 30 minutes.",
    url: "https://www.atlassian.com/team-playbook/plays/project-poster"
  },
  {
    id: "wireframe-sprint",
    title: "Wireframe Sprint Toolkit",
    description:
      "Use structured exercises to map user journeys, storyboard screens, and convert ideas into testable wireframes.",
    includes: ["Journey mapping template", "Lo-fi wireframe sheets", "Usability test script"],
    outcome: "Clickable prototype that communicates flow and layout without pixel-perfect visuals.",
    url: "https://miro.com/templates/user-flow/"
  },
  {
    id: "nextjs-stack",
    title: "Next.js + Tailwind Starter Stack",
    description:
      "Opinionated Next.js example with Tailwind CSS, ESLint, and testing utilities wired for rapid iteration.",
    includes: ["Ready-to-use folder structure", "Pre-configured linting & formatting", "Sample component patterns"],
    outcome: "Skip boilerplate and start shipping features on day one.",
    url: "https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss"
  },
  {
    id: "launch-checklist",
    title: "Launch Planning Checklist",
    description:
      "Stay calm under pressure with a comprehensive release plan covering comms, tracking, and post-launch follow-up.",
    includes: ["Pre-launch QA grid", "Announcement messaging schedule", "Post-launch feedback tracker"],
    outcome: "Confident launch day with clear responsibilities and monitoring.",
    url: "https://www.productplan.com/templates/product-launch-plan-template/"
  }
];

export const metadata = {
  title: "Starter Kits | Beginner App Guide",
  description:
    "Download battle-tested templates for briefs, wireframes, code scaffolding, and launch planning to accelerate your first app."
};

export default function StarterKitsPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200">
            Templates & Kits
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-slate-100 sm:text-5xl">
            Grab a kit, start building tonight
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            These curated kits reduce decision fatigue. Duplicate them into your workspace and adapt
            to the scope of your project.
          </p>
        </header>

        <section className="mt-14 grid gap-6 md:grid-cols-2">
          {starterKits.map((kit) => (
            <article
              key={kit.id}
              className="flex h-full flex-col gap-5 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-soft"
            >
              <header>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Starter kit</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-slate-100">{kit.title}</h2>
              </header>
              <p className="text-sm text-slate-300">{kit.description}</p>
              <ul className="space-y-2 text-xs text-slate-400">
                {kit.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-primary-100">Outcome: {kit.outcome}</p>
              <Link
                href={kit.url}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary-200 transition hover:text-primary-100"
              >
                Duplicate kit →
              </Link>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
