"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Kompetisi", href: "/kompetisi" },
  { name: "Jadwal", href: "/jadwal" },
  { name: "Materi", href: "/materi" },
  { name: "Hadiah", href: "/hadiah" },
  { name: "Cek Status", href: "/cek-status" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
            🌐
          </div>

          <div>
            <p className="text-sm font-bold tracking-wide text-white">
              ASO 2026
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-400">
              Culture Festival STMKG
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/pendaftaran"
          className="hidden rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 md:block"
        >
          Daftar Sekarang
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition hover:bg-white/10 md:hidden"
          aria-label="Buka menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#020617] md:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex flex-col">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/5 py-4 text-sm font-medium text-slate-300 transition hover:text-cyan-400"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/pendaftaran"
                onClick={() => setMenuOpen(false)}
                className="mt-4 rounded-xl bg-cyan-400 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Daftar Sekarang
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}