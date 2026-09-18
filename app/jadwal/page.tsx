import Link from "next/link";
import Navbar from "@/components/Navbar";

const timeline = [
  {
    date: "01",
    month: "SEP",
    year: "2026",
    title: "Pendaftaran Dibuka",
    description:
      "Peserta dapat melakukan pendaftaran Atmospheric Science Olympiad (ASO) 2026 secara online.",
    icon: "📝",
    status: "Pendaftaran",
  },
  {
    date: "30",
    month: "SEP",
    year: "2026",
    title: "Pendaftaran Ditutup",
    description:
      "Batas akhir pendaftaran peserta ASO 2026.",
    icon: "📋",
    status: "Batas Pendaftaran",
  },
  {
    date: "09",
    month: "OKT",
    year: "2026",
    title: "Technical Meeting",
    description:
      "Technical Meeting bagi peserta untuk mendapatkan informasi teknis pelaksanaan kompetisi.",
    icon: "🎓",
    status: "Technical Meeting",
  },
  {
    date: "23",
    month: "OKT",
    year: "2026",
    title: "Babak Penyisihan",
    description:
      "Babak penyisihan dilaksanakan menggunakan sistem Computer Based Test (CBT).",
    icon: "💻",
    status: "Penyisihan",
  },
  {
    date: "30",
    month: "OKT",
    year: "2026",
    title: "Pengumuman Finalis",
    description:
      "Pengumuman peserta yang berhasil melanjutkan ke babak final.",
    icon: "🏆",
    status: "Pengumuman",
  },
  {
    date: "12",
    month: "NOV",
    year: "2026",
    title: "Babak Final",
    description:
      "Babak final yang mencakup presentasi penyelesaian kasus dan buzzer quiz.",
    icon: "🎯",
    status: "Final",
  },
];

const upcomingEvents = [
  {
    title: "Pengumuman Akhir",
    description: "Informasi akan disampaikan oleh panitia.",
  },
  {
    title: "Seminar Nasional",
    description: "Informasi akan disampaikan oleh panitia.",
  },
  {
    title: "Tour STMKG",
    description: "Informasi akan disampaikan oleh panitia.",
  },
  {
    title: "Pengumuman Juara & Penghargaan",
    description: "Informasi akan disampaikan oleh panitia.",
  },
];

export default function JadwalPage() {
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
            Jadwal{" "}
            <span className="text-cyan-400">Kompetisi.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Ikuti setiap tahapan Atmospheric Science Olympiad 2026 dan
            persiapkan dirimu untuk menghadapi setiap tantangan.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Timeline
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Perjalanan Kompetisi
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Berikut rangkaian jadwal utama ASO 2026 berdasarkan Guidebook.
          </p>
        </div>

        <div className="relative">
          {/* GARIS TIMELINE */}
          <div className="absolute left-[30px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-cyan-400/40 to-transparent md:block" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <div
                key={item.title}
                className="relative grid gap-6 md:grid-cols-[100px_1fr]"
              >
                {/* TANGGAL */}
                <div className="relative z-10 flex h-[100px] w-[60px] flex-col items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#07111f] shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                  <span className="text-2xl font-black text-cyan-400">
                    {item.date}
                  </span>

                  <span className="text-[11px] font-bold tracking-widest text-slate-400">
                    {item.month}
                  </span>

                  <span className="text-[10px] text-slate-500">
                    {item.year}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">
                        {item.icon}
                      </div>

                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                          {item.status}
                        </span>

                        <h3 className="mt-1 text-xl font-bold">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                      Tahap {index + 1}
                    </span>
                  </div>

                  <p className="mt-5 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFORMASI TAMBAHAN */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Informasi Selanjutnya
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Akan Diinformasikan
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Beberapa agenda setelah babak final belum memiliki tanggal yang
              ditentukan dalam Guidebook dan akan diinformasikan oleh panitia.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="rounded-2xl border border-white/10 bg-[#07111f] p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-lg">
                  📅
                </div>

                <h3 className="font-bold text-white">{event.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REMINDER */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8 text-center sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
            ⏰
          </div>

          <h2 className="mt-6 text-2xl font-black sm:text-3xl">
            Jangan Lewatkan Setiap Tahapan
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
            Pastikan kamu mengikuti informasi terbaru dari panitia dan hadir
            tepat waktu pada setiap tahapan kompetisi.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/pendaftaran"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Daftar Sekarang
            </Link>

            <Link
              href="/kompetisi"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Lihat Kompetisi
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="font-bold text-white">Atmospheric Science Olympiad</p>
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