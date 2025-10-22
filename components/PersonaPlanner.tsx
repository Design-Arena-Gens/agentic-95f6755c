"use client";

import { Fragment, useState } from "react";
import { personas } from "@/data/personas";

export default function PersonaPlanner() {
  const [activePersona, setActivePersona] = useState(personas[0]?.id ?? "");
  const persona = personas.find((candidate) => candidate.id === activePersona);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">
              Adapt the roadmap
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-slate-100 sm:text-4xl">
              Choose the path that matches your reality
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-300">
            Every builder has different constraints. Select the persona that feels closest to you and
            follow the tailored weekly rhythm.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="space-y-3">
            {personas.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setActivePersona(option.id)}
                className={`w-full rounded-2xl border px-5 py-4 text-left transition ${
                  option.id === activePersona
                    ? "border-primary-500 bg-primary-500/20 text-primary-50"
                    : "border-slate-800/80 bg-slate-900/60 text-slate-300 hover:border-primary-500/40"
                }`}
              >
                <span className="text-sm font-semibold text-slate-100">{option.name}</span>
                <p className="mt-2 text-xs text-slate-400">{option.description}</p>
              </button>
            ))}
          </div>

          <div className="glass-panel rounded-3xl p-8">
            <h3 className="font-display text-2xl font-semibold text-slate-100">{persona?.name}</h3>
            <p className="mt-3 text-sm text-slate-300">{persona?.description}</p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Focus areas
                </h4>
                <ul className="mt-3 space-y-3 text-xs text-slate-300">
                  {persona?.recommendedFocus.map((focus) => (
                    <li key={focus}>{focus}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Weekly rhythm
                </h4>
                <ol className="mt-3 space-y-3 text-xs text-slate-300">
                  {persona?.weeklyRhythm.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Success signals
                </h4>
                <ul className="mt-3 space-y-3 text-xs text-slate-300">
                  {persona?.successSignals.map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
