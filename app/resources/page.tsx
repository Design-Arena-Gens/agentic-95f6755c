import Link from "next/link";
import { resources } from "@/data/resources";

const categories = ["Learn", "Design", "Build", "Launch"] as const;

export const metadata = {
  title: "Resource Library | Beginner App Guide",
  description:
    "Curated learning material, design inspiration, build tools, and launch guides to support every phase of your first app."
};

export default function ResourcesPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200">Library</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-slate-100 sm:text-5xl">
            Resources that respect your time
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            No endless bookmarks. Each item is picked for clarity, practicality, and alignment with
            the build phases outlined in the playbook.
          </p>
        </header>

        <section className="mt-14 space-y-12">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">{category}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-slate-100">
                  {category === "Learn" && "Understand the fundamentals"}
                  {category === "Design" && "Craft intuitive, inclusive interfaces"}
                  {category === "Build" && "Write resilient, maintainable code"}
                  {category === "Launch" && "Ship, measure, and iterate"}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {resources
                  .filter((resource) => resource.category === category)
                  .map((resource) => (
                    <article
                      key={resource.id}
                      className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-soft"
                    >
                      <header className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-slate-500">
                        <span>{resource.category}</span>
                        <span className="rounded-full border border-slate-700 px-3 py-1 text-[0.7rem] text-slate-400">
                          {resource.effort}
                        </span>
                      </header>
                      <h3 className="mt-4 font-display text-xl font-semibold text-slate-100">
                        {resource.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-300">{resource.description}</p>
                      <Link
                        href={resource.url}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-200 transition hover:text-primary-100"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit resource →
                      </Link>
                    </article>
                  ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
