"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need to know JavaScript well before starting?",
    answer:
      "You should be comfortable with the basics (variables, functions, arrays). The guide links to refresher material and encourages you to learn while shipping."
  },
  {
    question: "How much time should I dedicate each week?",
    answer:
      "Plan for 6-8 focused hours. The roadmap suggests a minimum rhythm, but you can accelerate if you have more time."
  },
  {
    question: "Can I use this guide with a different tech stack?",
    answer:
      "Yes. The decision frameworks and habits are stack-agnostic. Swap in equivalent tools for your ecosystem."
  },
  {
    question: "What does success look like at the end?",
    answer:
      "A deployed MVP with documented learnings, instrumentation, and a plan for iteration. You will also have habits for shipping consistently."
  }
];

export default function FaqAccordion() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqs[0]?.question ?? null);

  return (
    <section className="pb-20 pt-10">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">
            FAQs
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-slate-100 sm:text-4xl">
            What beginners ask most
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => {
            const isOpen = openQuestion === faq.question;
            return (
              <details
                key={faq.question}
                open={isOpen}
                className="group rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6 text-left"
                onToggle={(event) => {
                  if ((event.target as HTMLDetailsElement).open) {
                    setOpenQuestion(faq.question);
                  } else {
                    setOpenQuestion(null);
                  }
                }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-semibold text-slate-200">
                  {faq.question}
                  <span className="text-xs uppercase tracking-[0.35em] text-primary-200">
                    {isOpen ? "Close" : "Open"}
                  </span>
                </summary>
                <p className="mt-4 text-sm text-slate-300">{faq.answer}</p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
