import { CheckCircle2 } from "lucide-react";

const bulletPoints = [
  {
    title: "Make sense of the chaos",
    body: "Understand how research, design, coding, and launching connect so you never wonder what to do next."
  },
  {
    title: "Think like a team of one",
    body: "Build professional habits early: version control, feedback cycles, and measurable goals."
  },
  {
    title: "Bias toward shipping",
    body: "Every module ends with an action to ship something real – from a problem brief to a live product."
  }
];

export default function WhySection() {
  return (
    <section id="why" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">Why this exists</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-slate-100 sm:text-4xl">
              Designed for beginners who want more than tutorials
            </h2>
            <p className="mt-5 text-base text-slate-300">
              You have watched enough walkthroughs. This guide focuses on the missing link between
              learning concepts and shipping a real product. It highlights the non-obvious work:
              scoping, prioritizing, testing, and reflecting.
            </p>

            <div className="mt-8 space-y-6">
              {bulletPoints.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary-300" />
                  <div>
                    <h3 className="font-semibold text-slate-100">{point.title}</h3>
                    <p className="text-sm text-slate-400">{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">What you get</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-primary-100">
                  End-to-end support
                </h3>
              </div>
              <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs font-semibold text-primary-100">
                Action-first
              </span>
            </div>
            <ul className="mt-6 space-y-5 text-sm text-slate-300">
              <li>
                <span className="font-semibold text-slate-100">Clarity</span> – Roadmaps, checklists, meeting
                scripts, and rubrics to evaluate progress.
              </li>
              <li>
                <span className="font-semibold text-slate-100">Confidence</span> – Decision frameworks for picking
                tools, slicing features, and requesting feedback.
              </li>
              <li>
                <span className="font-semibold text-slate-100">Momentum</span> – Weekly rhythms and milestones that
                make consistent progress feel normal.
              </li>
              <li>
                <span className="font-semibold text-slate-100">Community</span> – Prompts to ask for help and share
                updates even if you are building solo.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
