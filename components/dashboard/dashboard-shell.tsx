"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  ["Feed", "/dashboard/feed"],
  ["Housing", "/dashboard/housing"],
  ["Network", "/dashboard/network"],
  ["Groups", "/dashboard/groups"],
  ["Announcements", "/dashboard/announcements"],
  ["Profile", "/dashboard/profile"],
  ["Settings", "/dashboard/settings"]
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl gap-6 p-4 md:p-8">
      <aside className="glass hidden w-64 rounded-2xl p-4 md:block">
        <h2 className="mb-4 text-xl font-semibold text-brand-100">ENSAM Network</h2>
        <nav className="space-y-2">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`block rounded-xl px-3 py-2 transition ${pathname === href ? "bg-brand-500 text-white" : "hover:bg-white/10"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="w-full">{children}</main>
    </div>
  );
}
