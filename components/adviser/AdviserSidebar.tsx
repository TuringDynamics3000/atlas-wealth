"use client";
import Link from "next/link";

export default function AdviserSidebar() {
  return (
    <aside className="w-64 bg-gray-100 h-screen p-6 space-y-4">
      <h2 className="text-xl font-bold">Adviser Menu</h2>
      <nav className="space-y-2">
        <Link className="block px-2 py-1 hover:bg-gray-200 rounded" href="/adviser">
          Dashboard
        </Link>
        <Link className="block px-2 py-1 hover:bg-gray-200 rounded" href="/adviser/clients">
          Clients
        </Link>
        <Link className="block px-2 py-1 hover:bg-gray-200 rounded" href="/adviser/advice/new">
          New Advice
        </Link>
      </nav>
    </aside>
  );
}
