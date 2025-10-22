import Link from "next/link";
import { resources } from "@/data/resources";

const categoryDescriptions: Record<string, string> = {
  Learn: "Foundational knowledge to solidify key concepts.",
  Design: "Improve UX and visual communication without a design degree.",
  Build: "Code-focused tutorials, templates, and tools.",
  Launch: "Guidance to ship and celebrate with confidence."
};

export default function ResourceShowcase() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">
              Resource library
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-slate-100 sm:text-4xl">
              Only the links that move you forward
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-300">
            Curated tutorials and templates with clear effort levels. Bookmark this section for your
            weekly learning block.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <article
              key={resource.id}
              className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-soft"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.35em] text-slate-500">
                <span>{resource.category}</span>
                <span className="rounded-full border border-slate-700 px-3 py-1 text-[0.7rem] text-slate-400">
                  {resource.effort}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-slate-100">
                {resource.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{resource.description}</p>
              <p className="mt-4 text-xs text-slate-400">
                {categoryDescriptions[resource.category] ?? ""}
              </p>
              <Link
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-200 transition hover:text-primary-100"
              >
                Open resource →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
