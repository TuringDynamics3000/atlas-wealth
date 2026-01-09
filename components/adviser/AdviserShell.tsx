import type { ReactNode } from "react";
import Link from "next/link";
import AuthorityBar from "./AuthorityBar";

export default function AdviserShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="text-base font-semibold">Atlas Wealth</div>
            <div className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs">
              Adviser Console
            </div>
          </div>
          <AuthorityBar />
        </div>

        <nav className="mx-auto max-w-[1400px] px-6 pb-3 flex flex-wrap gap-2">
          <Link className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-sm hover:bg-neutral-900" href="/adviser">Work Queue</Link>
          <Link className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-sm hover:bg-neutral-900" href="/adviser/clients">Clients</Link>
          <Link className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-sm hover:bg-neutral-900" href="/adviser/acceptances">Acceptances</Link>
          <Link className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-sm hover:bg-neutral-900" href="/adviser/overrides">Overrides</Link>
          <Link className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-sm hover:bg-neutral-900" href="/adviser/evidence">Evidence</Link>
        </nav>
      </header>

      <main className="mx-auto max-w-[1400px] px-6 py-6">{children}</main>
    </div>
  );
}
