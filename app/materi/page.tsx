import Link from "next/link";
import Navbar from "@/components/Navbar";

const materials = [
  {
    number: "01",
    icon: "🌦️",
    title: "Meteorologi Dasar",
    description:
      "Mempelajari dasar-dasar atmosfer dan berbagai fenomena yang berkaitan dengan cuaca.",
    topics: [
      "Struktur atmosfer",
      "Unsur-unsur cuaca",
      "Proses-proses cuaca",
      "Awan",
      "Curah hujan",
    ],
  },
  {
    number: "02",
    icon: "🌍",
    title: "Klimatologi",
    description:
      "Memahami pola iklim serta berbagai fenomena dan perubahan iklim yang terjadi.",
    topics: [
      "Pola iklim global",
      "Pola iklim regional",
      "Perubahan iklim",
      "El Niño",
      "La Niña",
    ],
  },
  {
    number: "03",
    icon: "🌋",
    title: "Geofisika Dasar",
    description:
      "Mengenal fenomena geofisika dasar dan upaya mitigasi terhadap bencana.",
    topics: [
      "Gempa bumi",
      "Tsunami",
      "Mitigasi bencana",
    ],
  },
  {
    number: "04",
    icon: "🌊",
    title: "Oseanografi Dasar",
    description:
      "Memahami hubungan dan interaksi antara laut dengan atmosfer.",
    topics: [
      "Interaksi laut dan atmosfer",
    ],
  },
  {
    number: "05",
    icon: "📊",
    title: "Interpretasi Data",
    description:
      "Melatih kemampuan membaca dan memahami informasi yang disajikan dalam bentuk grafik dan data.",
    topics: [
      "Grafik cuaca",
      "Grafik iklim",
      "Interpretasi data sederhana",
    ],
  },
  {
    number: "06",
    icon: "🌱",
    title: "Isu Lingkungan & Kebencanaan",
    description:
      "Mengenal berbagai isu lingkungan, kebencanaan, dan perubahan iklim yang terjadi saat ini.",
    topics: [
      "Isu lingkungan terkini",
      "Bencana",
      "Perubahan iklim",
    ],
  },
];

export default function MateriPage() {
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
            Ruang{" "}
            <span className="text-cyan-400">Materi.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Kenali cakupan materi yang akan menjadi bagian dari Atmospheric
            Science Olympiad 2026 dan persiapkan dirimu sebaik mungkin.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Cakupan Materi
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Apa yang Akan Dipelajari?
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            Materi ASO mencakup pengetahuan dasar meteorologi, klimatologi,
            geofisika, oseanografi, interpretasi data, serta isu lingkungan
            dan kebencanaan.
          </p>
        </div>
      </section>

      {/* MATERIAL CARDS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {materials.map((material) => (
            <article
              key={material.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              {/* NUMBER */}
              <div className="absolute right-6 top-5 text-5xl font-black text-white/[0.03]">
                {material.number}
              </div>

              {/* ICON */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl transition group-hover:bg-cyan-400/20">
                {material.icon}
              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-xl font-bold">
                {material.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                {material.description}
              </p>

              {/* TOPICS */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Topik
                </p>

                <ul className="space-y-2.5">
                  {material.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span className="mt-1 text-cyan-400">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STUDY TIPS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl">
                💡
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Persiapkan Dirimu
                </p>

                <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                  Pahami Konsep, Baca Data, dan Latih Analisis
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  Selain memahami konsep dasar, peserta juga perlu
                  mempersiapkan kemampuan membaca grafik dan melakukan
                  interpretasi data sederhana sesuai dengan cakupan materi
                  kompetisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
            📚
          </div>

          <h2 className="mt-6 text-2xl font-black sm:text-3xl">
            Referensi & Contoh Soal
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Referensi dan contoh soal ASO akan dibagikan melalui media resmi
            yang diinformasikan oleh panitia.
          </p>

          <div className="mt-8">
            <Link
              href="/kompetisi"
              className="inline-flex rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Lihat Mekanisme Kompetisi
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl bg-cyan-400 p-8 text-center text-slate-950 sm:p-12">
          <h2 className="text-3xl font-black sm:text-4xl">
            Siap Menguji Pengetahuanmu?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-800">
            Persiapkan dirimu dan jadilah bagian dari Atmospheric Science
            Olympiad 2026.
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