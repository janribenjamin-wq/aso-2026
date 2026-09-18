"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Navbar from "@/components/Navbar";

export default function PendaftaranPage() {
const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState("");
const [participantNumber, setParticipantNumber] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  setLoading(true);
  setErrorMessage("");

  const form = event.currentTarget;
  const formData = new FormData(form);

  const nama = String(formData.get("nama") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const whatsapp = String(formData.get("whatsapp") || "").trim();
  const sekolah = String(formData.get("sekolah") || "").trim();
  const kota = String(formData.get("kota") || "").trim();
  const provinsi = String(formData.get("provinsi") || "").trim();

  const dokumen = formData.get("dokumen");

  if (!(dokumen instanceof File) || dokumen.size === 0) {
    setErrorMessage("Silakan pilih kartu pelajar atau surat keterangan aktif.");
    setLoading(false);
    return;
  }

  // Batas ukuran 5 MB sesuai pengaturan Storage
  if (dokumen.size > 5 * 1024 * 1024) {
    setErrorMessage("Ukuran dokumen maksimal 5 MB.");
    setLoading(false);
    return;
  }

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "application/pdf",
  ];

  if (!allowedTypes.includes(dokumen.type)) {
    setErrorMessage("Format dokumen harus JPG, PNG, atau PDF.");
    setLoading(false);
    return;
  }

  const supabase = createClient();

  try {
    // Ambil ekstensi file
    const extension =
      dokumen.name.split(".").pop()?.toLowerCase() || "pdf";

    // Buat nama file unik
    const filePath = `participants/${crypto.randomUUID()}.${extension}`;

    // Upload dokumen ke Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("participant-documents")
      .upload(filePath, dokumen, {
        contentType: dokumen.type,
        upsert: false,
      });

    if (uploadError) {
      throw new Error(
        `Dokumen gagal diupload: ${uploadError.message}`
      );
    }

    // Simpan data peserta melalui fungsi aman Supabase
const { data: newParticipantNumber, error: registerError } =
  await supabase.rpc("register_participant", {
    p_name: nama,
    p_email: email,
    p_whatsapp: whatsapp,
    p_school: sekolah,
    p_city: kota,
    p_province: provinsi,
    p_document_url: filePath,
  });

if (registerError) {
  throw new Error(
    `Data peserta gagal disimpan: ${registerError.message}`
  );
}

setParticipantNumber(newParticipantNumber);
setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } catch (error) {
    console.error(error);

    setErrorMessage(
      error instanceof Error
        ? error.message
        : "Terjadi kesalahan saat mengirim pendaftaran."
    );
  } finally {
    setLoading(false);
  }
};

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#06111f] px-5 py-10 text-white sm:px-8">
        <div className="mx-auto flex min-h-[90vh] max-w-3xl items-center justify-center">
          <div className="w-full rounded-[2rem] border border-cyan-300/20 bg-[#091827] p-8 text-center shadow-2xl sm:p-14">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/10 text-4xl">
              ✓
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Pendaftaran Berhasil
            </p>

            <h1 className="mt-4 text-3xl font-black sm:text-5xl">
              Terima kasih!
            </h1>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
  Data pendaftaran kamu telah berhasil diterima. Simpan nomor
  peserta berikut untuk keperluan verifikasi dan informasi
  pendaftaran selanjutnya.
</p>

<div className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-6">
  <p className="text-xs uppercase tracking-widest text-slate-500">
    Nomor Peserta
  </p>

  <p className="mt-3 text-3xl font-black tracking-wider text-cyan-300">
    {participantNumber}
  </p>
</div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Status
              </p>

              <p className="mt-2 font-bold text-cyan-300">
                Menunggu Verifikasi
              </p>
            </div>

            <a
              href="/"
              className="mt-8 inline-block rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-[#06111f] transition hover:bg-cyan-300"
            >
              Kembali ke Beranda
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#06111f] text-white">
 <Navbar />
 
      {/* ================= PAGE INTRO ================= */}
      <section className="relative overflow-hidden px-5 pb-12 pt-16 sm:px-8 sm:pt-20">
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
            Registration • ASO 2026
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
            Daftar sebagai peserta
            <span className="block text-cyan-300">
              Atmospheric Science Olympiad.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Lengkapi data diri dan dokumen yang diperlukan untuk mengikuti
            rangkaian Atmospheric Science Olympiad Culture Festival STMKG
            2026.
          </p>

          {/* INFO BOX */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Pendaftaran
              </p>

              <p className="mt-2 font-bold">1–30 September 2026</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Peserta
              </p>

              <p className="mt-2 font-bold">Individu</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Wilayah
              </p>

              <p className="mt-2 font-bold">Se-Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMessage && (
  <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5 text-sm leading-6 text-red-300">
    {errorMessage}
  </div>
)}
            {/* DATA PESERTA */}
            <div className="rounded-[2rem] border border-white/10 bg-[#091827] p-6 sm:p-10">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                  01 • Data Peserta
                </p>

                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  Identitas peserta
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Masukkan data sesuai dengan dokumen identitas siswa.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* NAMA */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="nama"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Nama Lengkap <span className="text-cyan-300">*</span>
                  </label>

                  <input
                    id="nama"
                    name="nama"
                    type="text"
                    required
                    placeholder="Masukkan nama lengkap"
                    className="w-full rounded-xl border border-white/10 bg-[#06111f] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email <span className="text-cyan-300">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="nama@email.com"
                    className="w-full rounded-xl border border-white/10 bg-[#06111f] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50"
                  />
                </div>

                {/* WHATSAPP */}
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Nomor WhatsApp <span className="text-cyan-300">*</span>
                  </label>

                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="08xxxxxxxxxx"
                    className="w-full rounded-xl border border-white/10 bg-[#06111f] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50"
                  />
                </div>

                {/* SEKOLAH */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="sekolah"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Asal Sekolah <span className="text-cyan-300">*</span>
                  </label>

                  <input
                    id="sekolah"
                    name="sekolah"
                    type="text"
                    required
                    placeholder="Contoh: SMA Negeri 1 Ambon"
                    className="w-full rounded-xl border border-white/10 bg-[#06111f] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50"
                  />
                </div>

                {/* KOTA */}
                <div>
                  <label
                    htmlFor="kota"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Kabupaten / Kota <span className="text-cyan-300">*</span>
                  </label>

                  <input
                    id="kota"
                    name="kota"
                    type="text"
                    required
                    placeholder="Contoh: Ambon"
                    className="w-full rounded-xl border border-white/10 bg-[#06111f] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50"
                  />
                </div>

                {/* PROVINSI */}
                <div>
                  <label
                    htmlFor="provinsi"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Provinsi <span className="text-cyan-300">*</span>
                  </label>

                  <select
                    id="provinsi"
                    name="provinsi"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-[#06111f] px-4 py-3.5 text-white outline-none transition focus:border-cyan-300/50"
                  >
                    <option value="" disabled>
                      Pilih provinsi
                    </option>

                    <option>ACEH</option>
                    <option>SUMATERA UTARA</option>
                    <option>SUMATERA BARAT</option>
                    <option>RIAU</option>
                    <option>JAMBI</option>
                    <option>SUMATERA SELATAN</option>
                    <option>BENGKULU</option>
                    <option>LAMPUNG</option>
                    <option>KEPULAUAN BANGKA BELITUNG</option>
                    <option>KEPULAUAN RIAU</option>
                    <option>DKI JAKARTA</option>
                    <option>JAWA BARAT</option>
                    <option>JAWA TENGAH</option>
                    <option>DI YOGYAKARTA</option>
                    <option>JAWA TIMUR</option>
                    <option>BANTEN</option>
                    <option>BALI</option>
                    <option>NUSA TENGGARA BARAT</option>
                    <option>NUSA TENGGARA TIMUR</option>
                    <option>KALIMANTAN BARAT</option>
                    <option>KALIMANTAN TENGAH</option>
                    <option>KALIMANTAN SELATAN</option>
                    <option>KALIMANTAN TIMUR</option>
                    <option>KALIMANTAN UTARA</option>
                    <option>SULAWESI UTARA</option>
                    <option>SULAWESI TENGAH</option>
                    <option>SULAWESI SELATAN</option>
                    <option>SULAWESI TENGGARA</option>
                    <option>GORONTALO</option>
                    <option>SULAWESI BARAT</option>
                    <option>MALUKU</option>
                    <option>MALUKU UTARA</option>
                    <option>PAPUA</option>
                    <option>PAPUA BARAT</option>
                    <option>PAPUA SELATAN</option>
                    <option>PAPUA TENGAH</option>
                    <option>PAPUA PEGUNUNGAN</option>
                    <option>PAPUA BARAT DAYA</option>
                  </select>
                </div>
              </div>
            </div>

            {/* DOKUMEN */}
            <div className="rounded-[2rem] border border-white/10 bg-[#091827] p-6 sm:p-10">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                  02 • Dokumen
                </p>

                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  Bukti status siswa
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Unggah kartu pelajar atau surat keterangan aktif sebagai
                  bukti bahwa peserta merupakan siswa aktif.
                </p>
              </div>

              <label
                htmlFor="dokumen"
                className="block cursor-pointer rounded-2xl border border-dashed border-cyan-300/30 bg-cyan-300/[0.03] p-8 text-center transition hover:bg-cyan-300/[0.06]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 text-2xl">
                  ↑
                </div>

                <p className="mt-4 font-bold">
                  Pilih kartu pelajar / surat aktif
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  Format yang disarankan: JPG, JPEG, PNG, atau PDF
                </p>

                <input
                  id="dokumen"
                  name="dokumen"
                  type="file"
                  required
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="hidden"
                />
              </label>
            </div>

            {/* PERNYATAAN */}
            <div className="rounded-[2rem] border border-white/10 bg-[#091827] p-6 sm:p-10">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                  03 • Pernyataan
                </p>

                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  Konfirmasi peserta
                </h2>
              </div>

              <label className="flex cursor-pointer gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-5 w-5 accent-cyan-400"
                />

                <span className="text-sm leading-7 text-slate-400">
                  Saya menyatakan bahwa data yang saya isi adalah benar dan
                  saya merupakan siswa aktif SMA/MA/SMK sederajat. Saya
                  bersedia mengikuti ketentuan dan seluruh rangkaian
                  Atmospheric Science Olympiad 2026.
                </span>
              </label>
            </div>

            {/* SUBMIT */}
            <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-6 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-black">
                    Siap mengirim pendaftaran?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Pastikan semua data dan dokumen sudah benar sebelum
                    dikirim.
                  </p>
                </div>

                <button
  type="submit"
  disabled={loading}
  className="shrink-0 rounded-full bg-cyan-400 px-8 py-4 font-black text-[#06111f] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
>
  {loading ? "Mengirim..." : "Kirim Pendaftaran →"}
</button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 bg-[#040c16] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>
            © 2026 Atmospheric Science Olympiad — Culture Festival STMKG
          </p>

          <a href="/" className="hover:text-cyan-300">
            Kembali ke Beranda
          </a>
        </div>
      </footer>
    </main>
  );
}