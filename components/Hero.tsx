import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 sm:pt-28">
      <div className="absolute inset-0 -z-10 grid-overlay" aria-hidden />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-200">
              Complete guide
              <span className="h-2 w-2 rounded-full bg-primary-400" />
              Beginner friendly
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-slate-50 sm:text-5xl">
              Build your first app without the overwhelm
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              This playbook walks you from idea to deployed product with checklists, templates, and
              daily rhythms tailored for new developers. Understand the why behind each step so you
              can make confident decisions on your own.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
              <Link
                href="/phases"
                className="rounded-full bg-primary-500 px-6 py-3 font-semibold text-slate-50 shadow-soft transition hover:bg-primary-400"
              >
                View the build roadmap
              </Link>
              <Link
                href="#phases"
                className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-primary-500 hover:text-primary-200"
              >
                Explore the phases
              </Link>
            </div>

            <dl className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <dt className="text-xs uppercase tracking-[0.3em] text-slate-500">Time boxed</dt>
                <dd className="mt-3 font-display text-2xl font-semibold text-primary-200">4 weeks</dd>
                <p className="mt-2 text-xs text-slate-400">Suggested path to launch with small, repeatable wins.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <dt className="text-xs uppercase tracking-[0.3em] text-slate-500">Templates</dt>
                <dd className="mt-3 font-display text-2xl font-semibold text-primary-200">18+</dd>
                <p className="mt-2 text-xs text-slate-400">Checklists, briefs, retros, and launch prep docs included.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <dt className="text-xs uppercase tracking-[0.3em] text-slate-500">Confidence</dt>
                <dd className="mt-3 font-display text-2xl font-semibold text-primary-200">Step-by-step</dd>
                <p className="mt-2 text-xs text-slate-400">Know what good looks like at every milestone.</p>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="glass-panel relative rounded-3xl p-8 shadow-soft">
              <h2 className="font-display text-xl font-semibold text-slate-100">
                Your project command center
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Track progress with a single glance. Each phase includes a north-star outcome,
                meeting cadence, and ready-to-use checklist so you do not guess what comes next.
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                {["Intention", "Build", "Launch"].map((label, index) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-400" />
                    <div>
                      <p className="font-semibold text-slate-200">{label}</p>
                      <p className="text-slate-400">
                        {index === 0 && "Clarify the problem, audience, and value in one page."}
                        {index === 1 && "Ship vertical slices and watch your app come alive feature by feature."}
                        {index === 2 && "Launch with confidence and learn what to improve from real usage."}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-400">
                <p className="font-semibold uppercase tracking-[0.3em] text-slate-500">Quick win</p>
                <p className="mt-2 text-slate-300">
                  Download the starter checklist and knock out your first three tasks today. Momentum is
                  the best teacher.
                </p>
                <Link
                  href="/starter-kits"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 font-semibold text-slate-100 transition hover:bg-primary-500 hover:text-slate-950"
                >
                  Grab starter kits
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
