"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Navbar from "@/components/Navbar";

type Participant = {
  participant_number: string;
  name: string;
  status: string;
};

export default function CekStatusPage() {
  const [participantNumber, setParticipantNumber] = useState("");
  const [participant, setParticipant] = useState<Participant | null>(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const supabase = createClient();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nomor = participantNumber.trim();

    if (!nomor) {
      setErrorMessage("Silakan masukkan nomor peserta.");
      setParticipant(null);
      setSearched(false);
      return;
    }

    setLoading(true);
    setSearched(false);
    setErrorMessage("");
    setParticipant(null);

    const { data, error } = await supabase.rpc(
      "check_participant_status",
      {
        p_participant_number: nomor,
      }
    );

    if (error) {
      setLoading(false);
      setErrorMessage(
        `Gagal mengecek status: ${error.message}`
      );
      return;
    }

    setLoading(false);
    setSearched(true);

    if (!data || data.length === 0) {
      setErrorMessage(
        "Nomor peserta tidak ditemukan. Periksa kembali nomor peserta kamu."
      );
      return;
    }

    setParticipant(data[0]);
  };

  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <Navbar />

      {/* CONTENT */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              ASO 2026
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Cek Status Pendaftaran
            </h1>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Masukkan nomor peserta yang kamu dapatkan setelah
              melakukan pendaftaran untuk melihat status pendaftaran.
            </p>
          </div>

          {/* FORM */}
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl md:p-8">
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="participantNumber"
                className="mb-3 block text-sm font-semibold text-slate-200"
              >
                Nomor Peserta
              </label>

              <input
                id="participantNumber"
                type="text"
                value={participantNumber}
                onChange={(e) =>
                  setParticipantNumber(e.target.value.toUpperCase())
                }
                placeholder="ASO26-00001"
                className="w-full rounded-2xl border border-white/10 bg-[#0a1829] px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-5 w-full rounded-2xl bg-cyan-300 px-5 py-4 font-bold text-[#06111f] transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Mengecek..." : "Cek Status →"}
              </button>
            </form>

            {/* ERROR */}
            {errorMessage && (
              <div className="mt-6 rounded-2xl border border-red-400/20 bg-red-400/[0.05] p-5">
                <p className="text-sm leading-6 text-red-300">
                  {errorMessage}
                </p>
              </div>
            )}

            {/* RESULT */}
            {searched && participant && (
              <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-6">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Nomor Peserta
                </p>

                <p className="mt-2 text-2xl font-black tracking-wider text-cyan-300">
                  {participant.participant_number}
                </p>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Nama Peserta
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">
                    {participant.name}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Status Pendaftaran
                  </p>

                  <p className="mt-2 font-bold text-cyan-300">
                    {participant.status === "pending"
                      ? "Menunggu Verifikasi"
                      : participant.status === "verified"
                      ? "Terverifikasi"
                      : "Ditolak"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-slate-500">
          © 2026 Atmospheric Science Olympiad — STMKG
        </div>
      </footer>
    </main>
  );
}