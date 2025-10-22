import { milestones } from "@/data/milestones";

export const metadata = {
  title: "Roadmap Overview | Beginner App Guide",
  description:
    "Visualize the four-week cadence for planning, building, and launching your first application as a beginner."
};

export default function RoadmapPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200">Roadmap</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-slate-100 sm:text-5xl">
            A rhythm that respects your schedule
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Stay grounded with a cadence designed for aspiring developers balancing school, work, or
            family. Adjust the pace, but keep the order to maintain momentum.
          </p>
        </header>

        <section className="mt-12 space-y-8">
          {milestones.map((milestone) => (
            <article
              key={milestone.id}
              className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6"
            >
              <header className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                    {milestone.week}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-slate-100">
                    {milestone.focus}
                  </h2>
                </div>
                <span className="rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1 text-xs font-semibold text-primary-100">
                  Celebrate wins
                </span>
              </header>

              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {milestone.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 rounded-2xl border border-primary-500/30 bg-primary-500/10 p-4 text-xs text-primary-100">
                {milestone.celebration}
              </p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
