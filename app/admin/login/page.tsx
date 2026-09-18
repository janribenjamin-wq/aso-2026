"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      setErrorMessage("Email atau password salah.");
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <div className="flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          
          {/* LOGO */}
          <div className="text-center">
            <a
              href="/"
              className="text-2xl font-black tracking-wider text-cyan-300"
            >
              ASO<span className="text-white">2026</span>
            </a>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-500">
              Admin Panel
            </p>

            <h1 className="mt-3 text-3xl font-black">
              Login Admin
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Masuk untuk mengelola data peserta Atmospheric Science
              Olympiad 2026.
            </p>
          </div>

          {/* FORM */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl md:p-8">
            <form onSubmit={handleLogin}>
              
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-200"
              >
                Email Admin
              </label>

              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@email.com"
                className="w-full rounded-2xl border border-white/10 bg-[#0a1829] px-5 py-4 text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/50"
              />

              <label
                htmlFor="password"
                className="mb-2 mt-5 block text-sm font-semibold text-slate-200"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                className="w-full rounded-2xl border border-white/10 bg-[#0a1829] px-5 py-4 text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/50"
              />

              {errorMessage && (
                <div className="mt-5 rounded-2xl border border-red-400/20 bg-red-400/[0.05] p-4">
                  <p className="text-sm text-red-300">
                    {errorMessage}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full rounded-2xl bg-cyan-300 px-5 py-4 font-bold text-[#06111f] transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Memproses..." : "Masuk ke Dashboard →"}
              </button>
            </form>
          </div>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-slate-500 transition hover:text-cyan-300"
            >
              ← Kembali ke website
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}