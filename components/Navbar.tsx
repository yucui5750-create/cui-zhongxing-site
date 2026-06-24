"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/src/data/profile";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl min-w-0 items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3"
          aria-label="Go to home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white shadow-glow">
            CZ
          </span>
          <span className="hidden text-sm font-semibold text-graphite sm:block">
            {profile.englishName}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {profile.nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname === `${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "rounded-full bg-black/[0.06] px-4 py-2 text-sm font-semibold text-graphite"
                    : "rounded-full px-4 py-2 text-sm font-medium text-graphite/60 transition hover:bg-black/[0.04] hover:text-graphite"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/70 text-graphite md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-white/95 px-6 py-4 backdrop-blur-2xl md:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {profile.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-graphite/75 transition hover:bg-black/[0.04] hover:text-graphite"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
