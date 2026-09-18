import Link from "next/link";
import Navbar from "@/components/Navbar";

const prizes = [
  {
    position: "01",
    title: "Juara 1",
    icon: "🥇",
    description:
      "Peserta dengan pencapaian terbaik dalam Atmospheric Science Olympiad 2026.",
  },
  {
    position: "02",
    title: "Juara 2",
    icon: "🥈",
    description:
      "Peserta dengan pencapaian terbaik kedua dalam Atmospheric Science Olympiad 2026.",
  },
  {
    position: "03",
    title: "Juara 3",
    icon: "🥉",
    description:
      "Peserta dengan pencapaian terbaik ketiga dalam Atmospheric Science Olympiad 2026.",
  },
];

const benefits = [
  {
    icon: "💰",
    title: "Uang Pembinaan",
    description:
      "Juara 1, 2, dan 3 memperoleh uang pembinaan sesuai ketentuan panitia.",
  },
  {
    icon: "📜",
    title: "Sertifikat",
    description:
      "Pemenang memperoleh sertifikat sebagai bentuk penghargaan atas pencapaian dalam kompetisi.",
  },
  {
    icon: "🏆",
    title: "Trofi",
    description:
      "Juara 1, 2, dan 3 memperoleh trofi sebagai penghargaan kompetisi.",
  },
  {
    icon: "🎓",
    title: "E-Certificate Peserta",
    description:
      "Seluruh peserta ASO 2026 memperoleh e-certificate keikutsertaan.",
  },
];

export default function HadiahPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            ASO 2026
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Penghargaan{" "}
            <span className="text-cyan-400">& Hadiah.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Apresiasi bagi para peserta yang berhasil menunjukkan kemampuan
            terbaiknya dalam Atmospheric Science Olympiad 2026.
          </p>
        </div>
      </section>

      {/* PRIZE PODIUM */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Top Achievers
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Raih Prestasi Terbaikmu
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Tiga peserta terbaik akan mendapatkan penghargaan sebagai Juara 1,
            Juara 2, dan Juara 3.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {prizes.map((prize) => (
            <article
              key={prize.position}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <div className="absolute right-6 top-5 text-6xl font-black text-white/[0.03]">
                {prize.position}
              </div>

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-cyan-400/10 text-5xl transition group-hover:bg-cyan-400/20">
                {prize.icon}
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                Peringkat {prize.position}
              </p>

              <h3 className="mt-2 text-2xl font-black">
                {prize.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {prize.description}
              </p>

              <div className="mt-7 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.04] px-4 py-4">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Uang Pembinaan
                </p>

                <p className="mt-1 text-sm font-semibold text-cyan-400">
                  Akan diinformasikan
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Award Benefits
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Apa yang Akan Diperoleh?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
              Penghargaan diberikan sebagai bentuk apresiasi terhadap
              pencapaian dan partisipasi dalam ASO 2026.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-white/10 bg-[#07111f] p-7 transition hover:border-cyan-400/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
                  {benefit.icon}
                </div>

                <h3 className="mt-6 font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOMINAL INFO */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8 text-center sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl">
            ℹ️
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Informasi Hadiah
          </p>

          <h2 className="mt-3 text-2xl font-black sm:text-3xl">
            Nominal Akan Diinformasikan
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Besaran uang pembinaan untuk Juara 1, Juara 2, dan Juara 3 belum
            tercantum dalam Guidebook dan akan diinformasikan oleh panitia.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl bg-cyan-400 p-8 text-center text-slate-950 sm:p-12">
          <h2 className="text-3xl font-black sm:text-4xl">
            Jadilah Bagian dari ASO 2026
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-800">
            Persiapkan dirimu, ikuti setiap tahapan, dan tunjukkan kemampuan
            terbaikmu.
          </p>

          <Link
            href="/pendaftaran"
            className="mt-8 inline-flex rounded-xl bg-[#020617] px-7 py-3 font-bold text-white transition hover:bg-slate-800"
          >
            Daftar Sekarang →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="font-bold text-white">
              Atmospheric Science Olympiad
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Culture Festival STMKG 2026
            </p>
          </div>

          <p className="text-xs text-slate-600">
            © 2026 ASO STMKG. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}