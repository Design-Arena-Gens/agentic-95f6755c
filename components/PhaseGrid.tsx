import { phases } from "@/data/phases";
import Link from "next/link";

export default function PhaseGrid() {
  return (
    <section id="phases" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">Build phases</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-slate-100 sm:text-4xl">
              Ship in four focused phases
            </h2>
          </div>
          <Link
            href="/phases"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-200 transition hover:text-primary-100"
          >
            Read the phase playbook →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {phases.map((phase) => (
            <article
              key={phase.id}
              className="glass-panel flex h-full flex-col gap-6 rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.35em] text-slate-500">{phase.duration}</span>
                <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs font-semibold text-primary-100">
                  {phase.checkpoint.replace(/\.$/, "")}
                </span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-slate-100">{phase.title}</h3>
                <p className="mt-2 text-sm text-primary-100">{phase.subtitle}</p>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{phase.summary}</p>
              <div className="grid gap-4 text-sm text-slate-300 md:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Activities</h4>
                  <ul className="mt-2 space-y-2">
                    {phase.activities.slice(0, 3).map((activity) => (
                      <li key={activity} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Deliverables</h4>
                  <ul className="mt-2 space-y-2">
                    {phase.deliverables.slice(0, 3).map((deliverable) => (
                      <li key={deliverable} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
