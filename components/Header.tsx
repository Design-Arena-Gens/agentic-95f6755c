import Link from "next/link";

const navItems = [
  { href: "/#why", label: "Why this guide" },
  { href: "/#phases", label: "Phases" },
  { href: "/#checklists", label: "Checklists" },
  { href: "/resources", label: "Resources" },
  { href: "/phases", label: "Detailed Plan" }
];

export default function Header() {
  return (
    <header id="top" className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-sm">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="rounded bg-primary-500/20 px-2 py-1 text-primary-200">App</span>
          Beginner Playbook
        </Link>

        <nav className="hidden items-center gap-6 text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-primary-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/starter-kits"
          className="hidden rounded-full border border-primary-500/40 bg-primary-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-100 transition hover:border-primary-400 hover:bg-primary-500/20 md:inline-flex"
        >
          Starter Kits
        </Link>
      </div>
    </header>
  );
}
