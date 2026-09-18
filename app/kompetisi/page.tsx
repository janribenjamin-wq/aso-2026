import Navbar from "@/components/Navbar";
export default function KompetisiPage() {
  const schedule = [
    {
      number: "01",
      title: "Pendaftaran",
      date: "1 – 30 September 2026",
      description: "Periode pendaftaran peserta Atmospheric Science Olympiad 2026.",
    },
    {
      number: "02",
      title: "Technical Meeting",
      date: "9 Oktober 2026",
      description:
        "Penjelasan teknis pelaksanaan kompetisi dan informasi yang belum ditentukan dalam guidebook.",
    },
    {
      number: "03",
      title: "Babak Penyisihan",
      date: "23 Oktober 2026",
      description:
        "Babak awal ASO dalam bentuk Computer Based Test (CBT).",
    },
    {
      number: "04",
      title: "Pengumuman Finalis",
      date: "30 Oktober 2026",
      description:
        "Pengumuman peserta yang melaju ke babak final sesuai ketentuan panitia.",
    },
    {
      number: "05",
      title: "Babak Final",
      date: "12 November 2026",
      description:
        "Presentasi hasil analisis dan sesi cerdas cermat (rebutan).",
    },
    {
      number: "06",
      title: "Pengumuman Babak Final",
      date: "Akan diinformasikan",
      description:
        "Waktu pelaksanaan akan diinformasikan melalui media resmi panitia.",
    },
    {
      number: "07",
      title: "Seminar Nasional & Tour STMKG",
      date: "Akan diinformasikan",
      description:
        "Rangkaian kegiatan lanjutan dalam Culture Festival STMKG 2026.",
    },
    {
      number: "08",
      title: "Pengumuman Juara & Penyerahan Hadiah",
      date: "Akan diinformasikan",
      description:
        "Pengumuman pemenang dan penyerahan penghargaan.",
    },
  ];

  const materials = [
    {
      title: "Meteorologi Dasar",
      description:
        "Struktur atmosfer, unsur dan proses cuaca, awan, serta curah hujan.",
      icon: "☁",
    },
    {
      title: "Klimatologi",
      description:
        "Pola iklim global dan regional, perubahan iklim, serta fenomena El Niño dan La Niña.",
      icon: "🌎",
    },
    {
      title: "Geofisika Dasar",
      description:
        "Gempa bumi, tsunami, dan mitigasi bencana kebumian.",
      icon: "◈",
    },
    {
      title: "Oseanografi Dasar",
      description:
        "Interaksi antara laut dan atmosfer.",
      icon: "≈",
    },
    {
      title: "Interpretasi Data",
      description:
        "Interpretasi data dan grafik cuaca atau iklim sederhana.",
      icon: "▥",
    },
    {
      title: "Isu Lingkungan",
      description:
        "Isu terkini terkait lingkungan, kebencanaan, dan perubahan iklim.",
      icon: "◎",
    },
  ];

  return (
    <main className="min-h-screen bg-[#06111f] text-white">
     <Navbar />
     
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
            Competition • ASO 2026
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight sm:text-6xl">
            Atmospheric Science
            <span className="block text-cyan-300">
              Olympiad.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            Kompetisi akademik bagi pelajar SMA/MA/SMK sederajat untuk
            mengembangkan kemampuan berpikir kritis, analitis, dan aplikatif
            dalam bidang ilmu atmosfer dan kebumian.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/pendaftaran"
              className="rounded-full bg-cyan-400 px-7 py-3.5 text-center font-bold text-[#06111f] transition hover:bg-cyan-300"
            >
              Daftar Sekarang →
            </a>

            <a
              href="/cek-status"
              className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-center font-bold text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-300"
            >
              Cek Status
            </a>
          </div>
        </div>
      </section>

      {/* TENTANG KOMPETISI */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-white/10 bg-[#091827] p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                Tentang ASO
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Mengenal Atmospheric Science Olympiad
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Atmospheric Science Olympiad merupakan kompetisi yang
                diselenggarakan dalam rangkaian Culture Festival STMKG 2026.
                Kegiatan ini menjadi wadah bagi pelajar untuk mengembangkan
                pengetahuan dan kemampuan berpikir dalam bidang cuaca, iklim,
                dan ilmu kebumian.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Kompetisi ini juga bertujuan menumbuhkan minat terhadap
                meteorologi, klimatologi, dan geofisika serta meningkatkan
                kesadaran terhadap isu kebencanaan dan perubahan iklim.
              </p>
            </div>

            <div className="rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                Peserta
              </p>

              <div className="mt-7 space-y-6">
                <div>
                  <p className="text-3xl font-black">SMA/MA/SMK</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Sederajat se-Indonesia
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <p className="text-3xl font-black">Individu</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Bukan tim atau kelompok
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <p className="text-3xl font-black">1×</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Kesempatan pendaftaran setiap peserta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KETENTUAN PESERTA */}
      <section className="border-y border-white/10 bg-[#040c16] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Ketentuan Peserta
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Siapa yang dapat mengikuti?
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Siswa/siswi aktif tingkat SMA/MA/SMK sederajat se-Indonesia.",
              "Dibuktikan dengan kartu pelajar atau surat keterangan aktif dari sekolah.",
              "Peserta bersifat perorangan (individu), bukan tim/kelompok.",
              "Setiap peserta hanya diperbolehkan mendaftar 1 kali dan tidak dapat diwakilkan.",
              "Wajib melakukan registrasi ulang pada hari pelaksanaan sesuai jadwal.",
              "Wajib mengikuti seluruh rangkaian kegiatan, termasuk Technical Meeting.",
              "Setiap sekolah dapat mengirimkan lebih dari 1 peserta.",
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-black text-cyan-300">
                  {index + 1}
                </div>

                <p className="text-sm leading-7 text-slate-400">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEKANISME */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Mekanisme Perlombaan
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Tiga tahap kompetisi
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-slate-400">
            Peserta mengikuti rangkaian kompetisi mulai dari babak penyisihan,
            semifinal, hingga final sesuai ketentuan panitia.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {/* PENYISIHAN */}
            <div className="rounded-[2rem] border border-white/10 bg-[#091827] p-7">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-cyan-300">01</span>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                  CBT
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-black">
                Babak Penyisihan
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Dilaksanakan dalam bentuk Computer Based Test (CBT) berupa
                soal pilihan ganda.
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Penilaian
                </p>

                <p className="mt-2 font-bold text-cyan-300">
                  Ketepatan jawaban — 100%
                </p>
              </div>

              <p className="mt-5 text-xs leading-6 text-slate-500">
                Jumlah soal, durasi pengerjaan, dan tautan/platform ujian akan
                diinformasikan saat Technical Meeting.
              </p>
            </div>

            {/* SEMIFINAL */}
            <div className="rounded-[2rem] border border-white/10 bg-[#091827] p-7">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-cyan-300">02</span>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                  ANALISIS
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-black">
                Babak Semifinal
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Peserta mengerjakan soal berbasis studi kasus atau analisis
                data yang berkaitan dengan fenomena cuaca, iklim, dan
                kebencanaan.
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Penilaian
                </p>

                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Ketepatan analisis
                    </span>
                    <span className="font-bold text-cyan-300">70%</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Sistematika & waktu
                    </span>
                    <span className="font-bold text-cyan-300">30%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FINAL */}
            <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-7">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-cyan-300">03</span>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                  FINAL
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-black">
                Babak Final
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Terdiri atas sesi presentasi/pemaparan solusi atas studi kasus
                yang diberikan serta sesi cerdas cermat (rebutan).
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Penilaian
                </p>

                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Presentasi & penguasaan materi
                    </span>
                    <span className="font-bold text-cyan-300">50%</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Cerdas cermat (rebutan)
                    </span>
                    <span className="font-bold text-cyan-300">50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERI */}
      <section className="border-y border-white/10 bg-[#040c16] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Ruang Lingkup Materi
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Apa yang dipelajari?
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-slate-400">
            Materi kompetisi mengacu pada kurikulum sains tingkat SMA/MA/SMK
            sederajat yang diperkaya dengan konsep dasar meteorologi,
            klimatologi, dan geofisika.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {materials.map((material) => (
              <div
                key={material.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/20 hover:bg-cyan-300/[0.03]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-300">
                  {material.icon}
                </div>

                <h3 className="mt-5 text-lg font-black">
                  {material.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {material.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.03] p-5">
            <p className="text-sm leading-7 text-slate-400">
              <span className="font-bold text-cyan-300">
                Catatan:
              </span>{" "}
              Referensi belajar yang disarankan dan contoh soal akan dibagikan
              melalui media informasi resmi panitia menjelang pelaksanaan.
            </p>
          </div>
        </div>
      </section>

      {/* JADWAL */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                Timeline
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Jadwal Kegiatan
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Jadwal berikut bersifat tentatif dan dapat berubah sewaktu-waktu.
              Informasi terbaru akan disampaikan melalui media resmi panitia.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {schedule.map((item) => (
              <div
                key={item.number}
                className="group grid gap-5 rounded-2xl border border-white/10 bg-[#091827] p-5 transition hover:border-cyan-300/20 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:p-6"
              >
                <div className="text-3xl font-black text-cyan-300/70 transition group-hover:text-cyan-300">
                  {item.number}
                </div>

                <div>
                  <h3 className="text-lg font-black">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-sm font-bold text-cyan-300">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TATA TERTIB */}
      <section className="border-y border-white/10 bg-[#040c16] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Peraturan & Tata Tertib
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Ketentuan selama kompetisi
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Peserta wajib hadir/bergabung 15 menit sebelum kegiatan dimulai.",
              "Peserta wajib menggunakan pakaian rapi dan sopan selama kegiatan berlangsung.",
              "Peserta dilarang bekerja sama, berdiskusi dengan pihak lain, atau menggunakan alat bantu di luar ketentuan selama ujian/babak kompetisi.",
              "Peserta yang terbukti melakukan kecurangan akan didiskualifikasi tanpa syarat.",
              "Peserta wajib menjaga kestabilan koneksi internet dan perangkat yang digunakan untuk babak yang dilaksanakan secara daring.",
              "Segala bentuk gangguan teknis wajib segera dilaporkan kepada panitia yang bertugas.",
              "Hal-hal yang belum diatur dalam guidebook akan diinformasikan kemudian oleh panitia.",
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="text-lg font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-7 text-slate-400">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HADIAH */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-7 sm:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                Penghargaan
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Apresiasi untuk para peserta
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Berdasarkan guidebook, penghargaan diberikan kepada tiga
                juara utama serta seluruh peserta.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Juara 1",
                  items: "Uang pembinaan + Sertifikat + Trofi",
                },
                {
                  title: "Juara 2",
                  items: "Uang pembinaan + Sertifikat + Trofi",
                },
                {
                  title: "Juara 3",
                  items: "Uang pembinaan + Sertifikat + Trofi",
                },
                {
                  title: "Seluruh Peserta",
                  items: "E-Sertifikat Partisipasi",
                },
              ].map((prize) => (
                <div
                  key={prize.title}
                  className="rounded-2xl border border-white/10 bg-[#06111f]/60 p-6"
                >
                  <div className="text-2xl">🏆</div>

                  <h3 className="mt-4 font-black">
                    {prize.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {prize.items}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-slate-500">
              * Nominal uang pembinaan akan diinformasikan lebih lanjut melalui
              media resmi panitia.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#091827] px-7 py-12 text-center sm:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Ready to Explore?
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Siap mengikuti ASO 2026?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
            Pastikan kamu telah memahami ketentuan dan rangkaian kompetisi
            sebelum melakukan pendaftaran.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/pendaftaran"
              className="rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-[#06111f] transition hover:bg-cyan-300"
            >
              Daftar Sekarang →
            </a>

            <a
              href="/"
              className="rounded-full border border-white/10 px-7 py-3.5 font-bold text-slate-300 transition hover:border-white/20 hover:text-white"
            >
              Kembali ke Beranda
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#040c16] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>
            © 2026 Atmospheric Science Olympiad — Culture Festival STMKG
          </p>

          <div className="flex gap-5">
            <a
              href="/"
              className="transition hover:text-cyan-300"
            >
              Beranda
            </a>

            <a
              href="/pendaftaran"
              className="transition hover:text-cyan-300"
            >
              Pendaftaran
            </a>

            <a
              href="/cek-status"
              className="transition hover:text-cyan-300"
            >
              Cek Status
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}