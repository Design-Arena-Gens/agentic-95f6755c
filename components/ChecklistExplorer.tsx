"use client";

import { useState } from "react";
import { checklistCategories } from "@/data/checklists";

export default function ChecklistExplorer() {
  const [activeCategory, setActiveCategory] = useState(checklistCategories[0]?.id ?? "");

  const currentCategory = checklistCategories.find((category) => category.id === activeCategory);

  return (
    <section id="checklists" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">
              Guided checklists
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-slate-100 sm:text-4xl">
              Know exactly what to complete next
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-300">
            Each checklist covers a project phase. Switch tabs to focus on the stage you are in right
            now and capture quick wins.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[240px_1fr]">
          <div className="space-y-3">
            {checklistCategories.map((category) => {
              const isActive = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full rounded-2xl border px-5 py-4 text-left transition ${
                    isActive
                      ? "border-primary-400 bg-primary-500/20 text-primary-50"
                      : "border-slate-800/80 bg-slate-900/60 text-slate-300 hover:border-primary-400/50"
                  }`}
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.35em]">
                    {category.title}
                  </span>
                  <span className="mt-2 block text-xs text-slate-400">{category.description}</span>
                </button>
              );
            })}
          </div>

          <div className="glass-panel relative overflow-hidden rounded-3xl p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary-500/20 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-2xl font-semibold text-slate-100">
                {currentCategory?.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{currentCategory?.description}</p>

              <ul className="mt-6 space-y-4 text-sm">
                {currentCategory?.items.map((item) => (
                  <li key={item.id} className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4">
                    <p className="font-semibold text-slate-100">{item.label}</p>
                    <p className="mt-2 text-xs text-slate-400">{item.tips}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
