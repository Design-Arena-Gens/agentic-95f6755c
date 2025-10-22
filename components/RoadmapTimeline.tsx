import { milestones } from "@/data/milestones";

export default function RoadmapTimeline() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">
              4-week roadmap
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-slate-100 sm:text-4xl">
              Build momentum week by week
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-300">
            Four themed weeks keep you anchored. Follow the focus statements and celebrate progress to
            build sustainable habits.
          </p>
        </div>

        <div className="relative mt-10">
          <div className="timeline relative mx-auto flex max-w-3xl flex-col gap-8">
            {milestones.map((milestone) => (
              <article
                key={milestone.id}
                className="timeline-item relative rounded-3xl border border-slate-800/70 bg-slate-950/70 px-8 py-6"
              >
                <header className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                      {milestone.week}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-slate-100">
                      {milestone.focus}
                    </h3>
                  </div>
                  <span className="rounded-full bg-primary-500/20 px-4 py-1 text-xs font-semibold text-primary-100">
                    Celebrate progress
                  </span>
                </header>

                <ul className="mt-4 space-y-3 text-sm text-slate-300">
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
          </div>
        </div>
      </div>
    </section>
  );
}
