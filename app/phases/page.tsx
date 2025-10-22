import Link from "next/link";
import { phases } from "@/data/phases";

export const metadata = {
  title: "Build Phase Playbook | Beginner App Guide",
  description:
    "Dive deep into each step of the beginner app playbook with detailed activities, pitfalls to avoid, and success metrics."
};

const insightPrompts: Record<string, string[]> = {
  discover: [
    "What surprised you about user motivations?",
    "How will you measure if the problem is solved?",
    "Which assumptions require validation before build?"
  ],
  plan: [
    "Which user flow impacts the core value most?",
    "Where could you reuse existing tools instead of coding?",
    "What accessibility needs must be accounted for?"
  ],
  build: [
    "Can you demo this feature in under two minutes?",
    "What tests give you confidence to refactor?",
    "What feedback would you like from your next user session?"
  ],
  launch: [
    "How will you know the launch was successful?",
    "Who needs to be informed before and after the launch?",
    "What is the first metric you will monitor post-launch?"
  ]
};

export default function PhasesPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200">
            Deep dive
          </p>
          <h1 className="font-display text-4xl font-semibold text-slate-100 sm:text-5xl">
            Phase-by-phase game plan
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-300">
            Use this companion when you need clarity on what "done" looks like for each chapter of
            the journey. Pair it with the weekly roadmap to stay confident and intentional.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-200 transition hover:text-primary-100"
          >
            ← Back to overview
          </Link>
        </div>

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <article key={phase.id} className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-8">
              <header className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Phase {index + 1}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-semibold text-slate-100">
                    {phase.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-300">{phase.subtitle}</p>
                </div>
                <div className="rounded-2xl border border-primary-500/30 bg-primary-500/10 px-6 py-3 text-right">
                  <p className="text-xs uppercase tracking-[0.35em] text-primary-200">Duration</p>
                  <p className="mt-1 font-display text-xl font-semibold text-primary-100">{phase.duration}</p>
                </div>
              </header>

              <p className="text-sm leading-relaxed text-slate-300">{phase.summary}</p>

              <section>
                <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Core activities</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {phase.activities.map((activity) => (
                    <li key={activity} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Deliverables</h3>
                <ul className="mt-3 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
                  {phase.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Watch for
                  </h3>
                  <ul className="mt-3 space-y-3 text-xs text-slate-300">
                    {phase.pitfalls.map((pitfall) => (
                      <li key={pitfall}>{pitfall}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Metrics that matter
                  </h3>
                  <ul className="mt-3 space-y-3 text-xs text-slate-300">
                    {phase.metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="rounded-2xl border border-primary-500/30 bg-primary-500/10 p-5 text-xs text-primary-100">
                <h3 className="text-xs font-semibold uppercase tracking-[0.35em]">Reflection prompts</h3>
                <ul className="mt-3 space-y-2">
                  {(insightPrompts[phase.id] ?? []).map((prompt) => (
                    <li key={prompt}>{prompt}</li>
                  ))}
                </ul>
              </section>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
