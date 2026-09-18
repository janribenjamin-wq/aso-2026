"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const schedule = [
  {
    date: "01–30",
    month: "SEP 2026",
    title: "Pendaftaran",
    description: "Pendaftaran peserta Atmospheric Science Olympiad.",
  },
  {
    date: "09",
    month: "OKT 2026",
    title: "Technical Meeting",
    description: "Penjelasan teknis dan ketentuan pelaksanaan kompetisi.",
  },
  {
    date: "23",
    month: "OKT 2026",
    title: "Babak Penyisihan",
    description: "Computer Based Test (CBT) berupa soal pilihan ganda.",
  },
  {
    date: "30",
    month: "OKT 2026",
    title: "Pengumuman Finalis",
    description: "Pengumuman peserta yang melanjutkan ke tahap final.",
  },
  {
    date: "12",
    month: "NOV 2026",
    title: "Babak Final",
    description: "Presentasi studi kasus dan sesi cerdas cermat.",
  },
];

const topics = [
  {
    number: "01",
    title: "Meteorologi",
    description:
      "Struktur atmosfer, unsur dan proses cuaca, awan, serta curah hujan.",
  },
  {
    number: "02",
    title: "Klimatologi",
    description:
      "Pola iklim global dan regional, perubahan iklim, El Niño dan La Niña.",
  },
  {
    number: "03",
    title: "Geofisika Dasar",
    description:
      "Gempa bumi, tsunami, dan mitigasi bencana kebumian.",
  },
  {
    number: "04",
    title: "Oseanografi",
    description:
      "Interaksi antara laut dan atmosfer.",
  },
  {
    number: "05",
    title: "Interpretasi Data",
    description:
      "Interpretasi grafik serta data cuaca dan iklim sederhana.",
  },
  {
    number: "06",
    title: "Isu Lingkungan",
    description:
      "Isu terkini mengenai lingkungan, kebencanaan, dan perubahan iklim.",
  },
];

const competitionStages = [
  {
    number: "01",
    title: "Penyisihan",
    tag: "CBT",
    description:
      "Computer Based Test berupa soal pilihan ganda. Jumlah soal, durasi, dan platform akan diinformasikan saat Technical Meeting.",
  },
  {
    number: "02",
    title: "Semifinal",
    tag: "CASE STUDY",
    description:
      "Analisis studi kasus dan data yang berkaitan dengan fenomena cuaca, iklim, dan kebencanaan.",
  },
  {
    number: "03",
    title: "Final",
    tag: "PRESENTATION",
    description:
      "Presentasi solusi studi kasus yang diberikan dilanjutkan dengan sesi cerdas cermat rebutan.",
  },
];

const scoring = [
  {
    stage: "Penyisihan",
    first: "Ketepatan jawaban CBT",
    second: "100%",
  },
  {
    stage: "Semifinal",
    first: "Ketepatan analisis studi kasus",
    second: "70%",
  },
  {
    stage: "Semifinal",
    first: "Sistematika & waktu pengerjaan",
    second: "30%",
  },
  {
    stage: "Final",
    first: "Presentasi & penguasaan materi",
    second: "50%",
  },
  {
    stage: "Final",
    first: "Cerdas cermat rebutan",
    second: "50%",
  },
];

function Countdown() {
  const targetDate = new Date("2026-10-23T00:00:00+07:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const difference = targetDate - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    ["Hari", timeLeft.days],
    ["Jam", timeLeft.hours],
    ["Menit", timeLeft.minutes],
    ["Detik", timeLeft.seconds],
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center"
        >
          <p className="text-3xl font-black text-white sm:text-4xl">
            {String(value).padStart(2, "0")}
          </p>

          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06111f] text-white">
     <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen px-5 pb-20 pt-32 sm:px-8 lg:flex lg:items-center lg:pt-24">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                Culture Festival STMKG 2026
              </span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 sm:text-sm">
              Atmospheric Science Olympiad
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-[86px]">
              Explore
              <span className="block text-cyan-300">The Atmosphere.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Kompetisi sains bagi siswa SMA/MA/SMK sederajat se-Indonesia
              untuk mengembangkan pengetahuan, kemampuan analisis, serta
              pemahaman mengenai cuaca, iklim, kebencanaan, dan lingkungan.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#daftar"
                className="rounded-full bg-cyan-400 px-7 py-3.5 text-center font-bold text-[#06111f] transition hover:bg-cyan-300"
              >
                Ikuti Kompetisi →
              </a>

              <a
                href="#tentang"
                className="rounded-full border border-white/15 px-7 py-3.5 text-center font-bold transition hover:bg-white/5"
              >
                Pelajari ASO
              </a>
            </div>

            {/* QUICK INFO */}
            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">
              <div>
                <p className="text-2xl font-black">01</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">
                  Individu
                </p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <p className="text-2xl font-black">NAS</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">
                  Skala
                </p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <p className="text-2xl font-black">2026</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">
                  Tahun
                </p>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-950 via-[#0b2039] to-cyan-950 shadow-2xl">
              {/* radar rings */}
              <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />

              <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15" />

              <div className="absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20" />

              <div className="absolute left-1/2 top-1/2 h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30" />

              <div className="absolute left-8 top-8 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                <p className="text-[10px] uppercase tracking-widest text-slate-500">
                  Focus
                </p>

                <p className="mt-1 font-bold text-cyan-300">
                  Weather • Climate
                </p>
              </div>

              <div className="absolute bottom-8 right-8 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                <p className="text-[10px] uppercase tracking-widest text-slate-500">
                  Scope
                </p>

                <p className="mt-1 font-bold">Indonesia</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-48 w-48 flex-col items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/5 shadow-[0_0_100px_rgba(34,211,238,0.12)]">
                  <p className="text-5xl font-black">ASO</p>

                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
                    2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COUNTDOWN ================= */}
      <section className="border-y border-white/10 bg-[#091827] px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Countdown
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Menuju Babak Penyisihan
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              23 Oktober 2026
            </p>
          </div>

          <Countdown />
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="tentang"
        className="scroll-mt-24 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                Tentang ASO
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Membangun rasa ingin tahu terhadap
                <span className="text-cyan-300"> atmosfer dan bumi.</span>
              </h2>
            </div>

            <div className="space-y-5 text-slate-300">
              <p className="leading-8">
                Atmospheric Science Olympiad merupakan kompetisi yang
                memperkenalkan dan mengembangkan pengetahuan mengenai cuaca
                dan iklim bagi siswa tingkat SMA/MA/SMK sederajat.
              </p>

              <p className="leading-8">
                Kompetisi ini menjadi bagian dari Culture Festival STMKG 2026
                dan diselenggarakan oleh HTMK STMKG.
              </p>

              <p className="leading-8">
                Peserta akan melalui rangkaian kompetisi yang menguji
                pengetahuan, analisis data, penyelesaian studi kasus, serta
                kemampuan mempresentasikan solusi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REQUIREMENTS ================= */}
      <section className="bg-[#091827] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Ketentuan Peserta
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Siapa yang dapat mengikuti?
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Siswa/siswi aktif SMA/MA/SMK sederajat se-Indonesia.",
              "Dibuktikan dengan kartu pelajar atau surat keterangan aktif.",
              "Peserta bersifat perorangan, bukan tim/kelompok.",
              "Setiap peserta hanya diperbolehkan mendaftar satu kali.",
              "Wajib mengikuti seluruh rangkaian kegiatan termasuk Technical Meeting.",
              "Setiap sekolah dapat mengirimkan lebih dari satu peserta.",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#06111f] p-6"
              >
                <span className="text-sm font-black text-cyan-300">
                  0{index + 1}
                </span>

                <p className="mt-5 leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPETITION ================= */}
      <section
        id="kompetisi"
        className="scroll-mt-24 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Competition
          </p>

          <div className="mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <h2 className="text-4xl font-black sm:text-5xl">
              Tiga tahap kompetisi.
            </h2>

            <p className="max-w-lg leading-7 text-slate-400">
              Dari penguasaan konsep hingga analisis dan presentasi solusi.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {competitionStages.map((item) => (
              <div
                key={item.number}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-cyan-300">
                    {item.number}
                  </span>

                  <span className="rounded-full border border-cyan-300/20 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-cyan-300">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SCHEDULE ================= */}
      <section
        id="jadwal"
        className="scroll-mt-24 bg-[#091827] px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Timeline
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Jadwal ASO 2026
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
              Jadwal bersifat tentatif dan dapat berubah. Informasi terbaru
              akan disampaikan melalui media resmi panitia.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-4xl">
            {schedule.map((item, index) => (
              <div
                key={item.title}
                className="relative grid gap-5 border-l border-white/10 pb-12 pl-8 last:border-transparent sm:grid-cols-[150px_1fr]"
              >
                <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />

                <div>
                  <p className="text-2xl font-black text-white">
                    {item.date}
                  </p>

                  <p className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                    {item.month}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOPICS ================= */}
      <section
        id="materi"
        className="scroll-mt-24 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Ruang Lingkup
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-5xl">
            Materi kompetisi
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <div
                key={topic.number}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-cyan-300/20 hover:bg-white/[0.04]"
              >
                <p className="text-xs font-black tracking-[0.25em] text-cyan-300">
                  {topic.number}
                </p>

                <h3 className="mt-5 text-xl font-black">
                  {topic.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SCORING ================= */}
      <section className="bg-[#091827] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Assessment
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Sistem penilaian
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            <div className="grid grid-cols-[1fr_1.5fr_auto] bg-white/5 px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 sm:px-7">
              <span>Babak</span>
              <span>Komponen</span>
              <span>Bobot</span>
            </div>

            {scoring.map((item, index) => (
              <div
                key={`${item.stage}-${item.first}`}
                className="grid grid-cols-[1fr_1.5fr_auto] border-t border-white/10 px-5 py-5 text-sm sm:px-7"
              >
                <span className="font-bold">{item.stage}</span>

                <span className="text-slate-400">
                  {item.first}
                </span>

                <span className="font-black text-cyan-300">
                  {item.second}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRIZES ================= */}
      <section
        id="hadiah"
        className="scroll-mt-24 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Awards
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Hadiah & penghargaan
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Juara 1"],
              ["02", "Juara 2"],
              ["03", "Juara 3"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/5 text-xl font-black text-cyan-300">
                  {number}
                </div>

                <h3 className="mt-6 text-2xl font-black">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Uang pembinaan + Sertifikat + Trofi
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-slate-600">
            Nominal uang pembinaan akan diinformasikan kemudian oleh panitia.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        id="daftar"
        className="scroll-mt-24 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8 text-center sm:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Registration
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-6xl">
            Ready to explore?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Pendaftaran ASO 2026 berlangsung pada 1–30 September 2026.
            Persiapkan data diri dan dokumen yang diperlukan.
          </p>

          <button
            type="button"
            className="mt-8 rounded-full bg-cyan-400 px-8 py-4 font-black text-[#06111f] transition hover:bg-cyan-300"
          >
            Daftar ASO 2026 →
          </button>

          <p className="mt-4 text-xs text-slate-600">
            Sistem pendaftaran online akan kita bangun pada tahap berikutnya.
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 bg-[#040c16] px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-sm font-black text-[#06111f]">
                ASO
              </div>

              <div>
                <p className="font-bold">
                  Atmospheric Science Olympiad
                </p>

                <p className="text-xs text-slate-500">
                  Culture Festival STMKG 2026
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
              Kompetisi sains atmosfer bagi siswa SMA/MA/SMK sederajat
              se-Indonesia.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Navigasi</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <a href="#tentang" className="block hover:text-cyan-300">
                Tentang ASO
              </a>

              <a href="#kompetisi" className="block hover:text-cyan-300">
                Kompetisi
              </a>

              <a href="#jadwal" className="block hover:text-cyan-300">
                Jadwal
              </a>

              <a href="#materi" className="block hover:text-cyan-300">
                Materi
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Informasi</h3>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Informasi Contact Person dan media resmi akan ditambahkan
              setelah data resmi panitia tersedia.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-slate-600">
          © 2026 Atmospheric Science Olympiad — Culture Festival STMKG
        </div>
      </footer>
    </main>
  );
}