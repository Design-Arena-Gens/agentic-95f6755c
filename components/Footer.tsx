import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/80 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <h3 className="font-display text-xl font-semibold text-slate-100">
            Beginner App Playbook
          </h3>
          <p className="text-sm text-slate-400">
            Built to demystify the process of shipping your first web app. Save time, avoid
            dead ends, and learn industry-aligned habits from day one.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm text-slate-400 md:grid-cols-3">
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Guide
            </h4>
            <ul className="space-y-2">
              <li><Link href="/#phases">Build Phases</Link></li>
              <li><Link href="/phases">Detailed Plan</Link></li>
              <li><Link href="/#checklists">Checklists</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Learn
            </h4>
            <ul className="space-y-2">
              <li><Link href="/resources">Resource Library</Link></li>
              <li><Link href="/starter-kits">Starter Kits</Link></li>
              <li><Link href="/roadmap">Roadmap</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://vercel.com" target="_blank" rel="noreferrer">
                  Deploy with Vercel
                </Link>
              </li>
              <li>
                <Link href="https://nextjs.org/learn" target="_blank" rel="noreferrer">
                  Next.js Learn
                </Link>
              </li>
              <li>
                <Link href="https://roadmap.sh" target="_blank" rel="noreferrer">
                  Roadmap.sh
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-slate-500 md:text-right">
          Crafted for beginners. Everything on this site is free to read, share, and remix.
        </p>
      </div>
    </footer>
  );
}
