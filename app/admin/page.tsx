"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Participant = {
  id: number;
  participant_number: string;
  name: string;
  email: string;
  whatsapp: string;
  school: string;
  city: string;
  province: string;
  document_url: string | null;
  status: "pending" | "verified" | "rejected";
  created_at: string;
};

export default function AdminDashboard() {
  const router = useRouter();
  const supabase = createClient();

  const [participants, setParticipants] = useState<Participant[]>([]);
const [loading, setLoading] = useState(true);
const [email, setEmail] = useState("");
const [search, setSearch] = useState("");
const [statusFilter, setStatusFilter] = useState<
  "all" | "pending" | "verified" | "rejected"
>("all");

const [selectedParticipant, setSelectedParticipant] =
  useState<Participant | null>(null);
const [documentUrl, setDocumentUrl] = useState<string | null>(null);
const [documentType, setDocumentType] = useState<
  "image" | "pdf" | "unknown" | null
>(null);
const [documentLoading, setDocumentLoading] = useState(false);
  
useEffect(() => {
    checkAdmin();
  }, []);

  async function checkAdmin() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/admin/login");
      return;
    }
const { data: isAdmin, error: adminError } = await supabase.rpc(
  "is_admin"
);

if (adminError || !isAdmin) {
  await supabase.auth.signOut();
  router.replace("/admin/login");
  return;
}
    setEmail(user.email || "");
    await loadParticipants();
  }

  async function loadParticipants() {
    const { data, error } = await supabase
      .from("participants")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    setParticipants(data || []);
    setLoading(false);
  }

  async function logout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }
async function updateStatus(
  id: number,
  status: "verified" | "rejected"
) {
  const action =
    status === "verified"
      ? "memverifikasi"
      : "menolak";

  const confirmed = window.confirm(
    `Apakah kamu yakin ingin ${action} peserta ini?`
  );

  if (!confirmed) return;

  const { error } = await supabase
    .from("participants")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error(error);
    alert(`Gagal mengubah status: ${error.message}`);
    return;
  }

  await loadParticipants();
}
function getDocumentType(path: string) {
  const extension = path.split(".").pop()?.toLowerCase();

  if (["jpg", "jpeg", "png", "webp"].includes(extension ?? "")) {
    return "image";
  }

  if (extension === "pdf") {
    return "pdf";
  }

  return "unknown";
}

async function viewDocument(documentPath: string | null) {
  if (!documentPath) {
    alert("Dokumen peserta tidak tersedia.");
    return;
  }

  setDocumentLoading(true);

  const { data, error } = await supabase.storage
    .from("participant-documents")
    .createSignedUrl(documentPath, 300);

  setDocumentLoading(false);

  if (error || !data?.signedUrl) {
    console.error(error);
    alert("Gagal membuka dokumen peserta.");
    return;
  }

  setDocumentType(getDocumentType(documentPath));
  setDocumentUrl(data.signedUrl);

}
  const filteredParticipants = participants.filter((participant) => {
  const keyword = search.toLowerCase().trim();

  const matchesSearch =
    keyword === "" ||
    participant.name.toLowerCase().includes(keyword) ||
    participant.participant_number.toLowerCase().includes(keyword) ||
    participant.school.toLowerCase().includes(keyword);

  const matchesStatus =
    statusFilter === "all" ||
    String(participant.status).toLowerCase() ===
      statusFilter.toLowerCase();

  return matchesSearch && matchesStatus;
});
const total = participants.length;

  const pending = participants.filter(
    (p) => p.status === "pending"
  ).length;

  const verified = participants.filter(
    (p) => p.status === "verified"
  ).length;

  const rejected = participants.filter(
    (p) => p.status === "rejected"
  ).length;

  return (
    <main className="min-h-screen bg-[#06111f] text-white">

      {/* HEADER */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <p className="text-xl font-black tracking-wider text-cyan-300">
              ASO<span className="text-white">2026</span>
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Admin Dashboard
            </p>
          </div>

          <div className="flex items-center gap-4">

            <span className="hidden text-sm text-slate-400 md:block">
              {email}
            </span>

            <button
              onClick={logout}
              className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-red-400/30 hover:text-red-300"
            >
              Keluar
            </button>

          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Panel Panitia
          </p>

          <h1 className="mt-3 text-3xl font-black md:text-4xl">
            Dashboard Peserta
          </h1>

          <p className="mt-3 text-slate-400">
            Kelola dan pantau data pendaftaran Atmospheric Science
            Olympiad 2026.
          </p>
        </div>

        {/* STATISTICS */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-slate-500">
              Total Peserta
            </p>

            <p className="mt-3 text-3xl font-black text-white">
              {total}
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-300/10 bg-yellow-300/[0.03] p-6">
            <p className="text-sm text-slate-500">
              Menunggu Verifikasi
            </p>

            <p className="mt-3 text-3xl font-black text-yellow-300">
              {pending}
            </p>
          </div>

          <div className="rounded-2xl border border-green-300/10 bg-green-300/[0.03] p-6">
            <p className="text-sm text-slate-500">
              Terverifikasi
            </p>

            <p className="mt-3 text-3xl font-black text-green-300">
              {verified}
            </p>
          </div>

          <div className="rounded-2xl border border-red-300/10 bg-red-300/[0.03] p-6">
            <p className="text-sm text-slate-500">
              Ditolak
            </p>

            <p className="mt-3 text-3xl font-black text-red-300">
              {rejected}
            </p>
          </div>

        </div>

        {/* TABLE */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">

          <div className="border-b border-white/10 px-6 py-5">

  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

    <div>
      <h2 className="text-lg font-bold">
        Daftar Peserta
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Cari dan filter data peserta.
      </p>
    </div>

    <div className="flex flex-col gap-3 sm:flex-row">

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cari nama, nomor, sekolah..."
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/40 sm:w-72"
      />

      <select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(
            e.target.value as
              | "all"
              | "pending"
              | "verified"
              | "rejected"
          )
        }
        className="rounded-xl border border-white/10 bg-[#0b1929] px-4 py-3 text-sm text-slate-300 outline-none focus:border-cyan-300/40"
      >
        <option value="all">Semua Status</option>
        <option value="pending">Menunggu Verifikasi</option>
        <option value="verified">Terverifikasi</option>
        <option value="rejected">Ditolak</option>
      </select>

    </div>

  </div>

</div>

          {loading ? (

            <div className="px-6 py-12 text-center text-slate-500">
              Memuat data peserta...
            </div>

          ) : participants.length === 0 ? (

            <div className="px-6 py-12 text-center text-slate-500">
              Belum ada peserta.
            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full min-w-[900px] text-left">

                <thead className="border-b border-white/10 bg-white/[0.02]">

                  <tr>

                    <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500">
                      Nomor
                    </th>

                    <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500">
                      Nama
                    </th>

                    <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500">
                      Sekolah
                    </th>

                    <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500">
                      Kota
                    </th>

                    <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500">
                      Status
                    </th> 
                    <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500">
  Aksi
</th>

                  </tr>

                </thead>

                <tbody>
{filteredParticipants.length === 0 && (
  <tr>
    <td
      colSpan={6}
      className="px-6 py-12 text-center text-slate-500"
    >
      Peserta yang dicari tidak ditemukan.
    </td>
  </tr>
)}
                  {filteredParticipants.map((participant) => (

                    <tr
                      key={participant.id}
                      className="border-b border-white/5 last:border-0"
                    >

                      <td className="px-6 py-5 font-semibold text-cyan-300">
                        {participant.participant_number}
                      </td>

                      <td className="px-6 py-5">

                        <p className="font-semibold text-white">
                          {participant.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {participant.email}
                        </p>

                      </td>

                      <td className="px-6 py-5 text-slate-300">
                        {participant.school}
                      </td>

                      <td className="px-6 py-5 text-slate-400">
                        {participant.city}
                      </td>

                      <td className="px-6 py-5">

                        {participant.status === "pending" && (
                          <span className="rounded-full bg-yellow-300/10 px-3 py-1 text-xs font-semibold text-yellow-300">
                            Menunggu Verifikasi
                          </span>
                        )}

                        {participant.status === "verified" && (
                          <span className="rounded-full bg-green-300/10 px-3 py-1 text-xs font-semibold text-green-300">
                            Terverifikasi
                          </span>
                        )}

                        {participant.status === "rejected" && (
                          <span className="rounded-full bg-red-300/10 px-3 py-1 text-xs font-semibold text-red-300">
                            Ditolak
                          </span>
                        )}

                      </td>
                      <td className="px-6 py-5">
  <div className="flex flex-wrap gap-2">

    {/* DETAIL - SEMUA STATUS */}
    <button
      onClick={() =>
        setSelectedParticipant(participant)
      }
      className="rounded-lg bg-cyan-400/10 px-3 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
    >
      Detail
    </button>

    {/* AKSI KHUSUS PESERTA PENDING */}
    {participant.status === "pending" && (
      <>
        <button
          onClick={() =>
            updateStatus(participant.id, "verified")
          }
          className="rounded-lg bg-green-400/10 px-3 py-2 text-xs font-semibold text-green-300 transition hover:bg-green-400/20"
        >
          Verifikasi
        </button>

        <button
          onClick={() =>
            updateStatus(participant.id, "rejected")
          }
          className="rounded-lg bg-red-400/10 px-3 py-2 text-xs font-semibold text-red-300 transition hover:bg-red-400/20"
        >
          Tolak
        </button>
      </>
    )}

  </div>
</td>


                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </section>

            {/* DETAIL MODAL */}
      {selectedParticipant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">

          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0b1929] shadow-2xl">

            {/* HEADER MODAL */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Detail Peserta
                </p>

                <h2 className="mt-2 text-xl font-bold text-white">
                  {selectedParticipant.participant_number}
                </h2>
              </div>

              <button
                onClick={() => setSelectedParticipant(null)}
                className="rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-400 transition hover:border-white/20 hover:text-white"
              >
                ✕
              </button>

            </div>

            {/* DATA PESERTA */}
            <div className="grid gap-5 p-6 sm:grid-cols-2">

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Nama Lengkap
                </p>

                <p className="mt-2 font-semibold text-white">
                  {selectedParticipant.name}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Email
                </p>

                <p className="mt-2 text-slate-300">
                  {selectedParticipant.email}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  WhatsApp
                </p>

                <p className="mt-2 text-slate-300">
                  {selectedParticipant.whatsapp}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Sekolah
                </p>

                <p className="mt-2 text-slate-300">
                  {selectedParticipant.school}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Kota / Kabupaten
                </p>

                <p className="mt-2 text-slate-300">
                  {selectedParticipant.city}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Provinsi
                </p>

                <p className="mt-2 text-slate-300">
                  {selectedParticipant.province}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Status
                </p>

                <p className="mt-2 text-slate-300">
                  {selectedParticipant.status === "pending"
                    ? "Menunggu Verifikasi"
                    : selectedParticipant.status === "verified"
                    ? "Terverifikasi"
                    : "Ditolak"}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Waktu Pendaftaran
                </p>

                <p className="mt-2 text-slate-300">
                  {new Date(
                    selectedParticipant.created_at
                  ).toLocaleString("id-ID")}
                </p>
              </div>

            </div>
{/* DOKUMEN PESERTA */}
<div className="border-t border-white/10 px-6 py-5">
  <p className="text-xs uppercase tracking-wider text-slate-500">
    Dokumen Persyaratan
  </p>

  {selectedParticipant.document_url ? (
    <button
      onClick={() =>
        viewDocument(selectedParticipant.document_url)
      }
      disabled={documentLoading}
      className="mt-3 rounded-xl bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {documentLoading ? "Membuka Dokumen..." : "📄 Lihat Dokumen"}
    </button>
  ) : (
    <p className="mt-3 text-sm text-slate-500">
      Dokumen belum tersedia.
    </p>
  )}
</div>
            {/* FOOTER MODAL */}
            <div className="border-t border-white/10 px-6 py-5 text-right">

              <button
                onClick={() => setSelectedParticipant(null)}
                className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:text-white"
              >
                Tutup
              </button>

            </div>

          </div>

        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto max-w-7xl text-center text-sm text-slate-500">
          ASO 2026 — Admin Panel
        </div>

      </footer>
 {/* DOCUMENT PREVIEW */}
      {/* DOCUMENT PREVIEW */}
{documentUrl && (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
    <div className="relative max-h-[95vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b1929] shadow-2xl">

      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Dokumen Peserta
          </p>

          <p className="mt-1 text-sm text-slate-400">
            {selectedParticipant?.participant_number}
          </p>
        </div>

        <div className="flex items-center gap-2">

          {/* BUKA TAB BARU */}
          <a
            href={documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10"
          >
            ↗ Buka
          </a>

          {/* TUTUP */}
          <button
            onClick={() => {
              setDocumentUrl(null);
              setDocumentType(null);
            }}
            className="rounded-xl bg-white/5 px-3 py-2 text-slate-300 transition hover:bg-white/10"
          >
            ✕
          </button>

        </div>
      </div>

      {/* DOCUMENT CONTENT */}
      <div className="max-h-[80vh] overflow-auto p-4">

        {/* IMAGE */}
        {documentType === "image" && (
          <img
            src={documentUrl}
            alt="Dokumen peserta"
            className="mx-auto max-h-[75vh] w-auto rounded-xl object-contain"
          />
        )}

        {/* PDF */}
        {documentType === "pdf" && (
          <iframe
            src={documentUrl}
            title="Dokumen PDF peserta"
            className="h-[75vh] w-full rounded-xl border border-white/10"
          />
        )}

        {/* FORMAT LAIN */}
        {documentType === "unknown" && (
          <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
            <div className="text-5xl">📄</div>

            <p className="mt-4 text-lg font-semibold text-white">
              Format dokumen tidak dapat dipratinjau
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Silakan buka dokumen melalui tombol di atas.
            </p>

            <a
              href={documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Buka Dokumen
            </a>
          </div>
               )}
      </div>
    </div>
  </div>
)}

</main>
  );
}