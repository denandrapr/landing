import React, { useEffect, useRef, useState } from 'react';
import { Great_Vibes, Playfair_Display } from 'next/font/google';
import { motion } from 'framer-motion';
import supabase from '@/config/supabaseclient';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });
type Ucapan = { id: string; nama: string; kehadiran: 'hadir' | 'tidak-hadir'; pesan: string | null; created_at: string };

const PAGE_SIZE = 5;

function formatTanggalID(dateString: string) {
  const date = new Date(dateString);

  // Format tanggal: 11 Agustus 2025
  const tgl = new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);

  // Format jam-menit: 23.00
  const jam = date
    .toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
    .replace(':', '.'); // ubah : jadi .

  return `${tgl} | ${jam}`;
}

const ListUcapan: React.FC = () => {
  const [items, setItems] = useState<Ucapan[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pending, setPending] = useState(false);
  const subscribedRef = useRef(false);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const fetchPage = async (p: number) => {
    setPending(true);
    const from = (p - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    const { data, error, count } = await supabase
      .from('ucapan')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, to);
    if (!error && data) {
      setItems(data as Ucapan[]);
      if (typeof count === 'number') setTotal(count);
    }
    setPending(false);
  };

  // initial load + subscribe
  useEffect(() => {
    (async () => {
      setLoading(true);
      await fetchPage(1);
      setPage(1);
      setLoading(false);
    })();

    if (subscribedRef.current) return;
    subscribedRef.current = true;

    const channel = supabase
      .channel('realtime-ucapan')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'ucapan' },
        async (payload) => {
          // Jika ada INSERT baru, segarkan halaman 1 supaya item baru langsung terlihat
          if (payload.eventType === 'INSERT') {
            setTotal((t) => t + 1);
            if (page === 1) await fetchPage(1);
          }
          if (payload.eventType === 'DELETE') {
            setTotal((t) => Math.max(0, t - 1));
            await fetchPage(page > totalPages ? 1 : page);
          }
          if (payload.eventType === 'UPDATE') {
            await fetchPage(page);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
      subscribedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fetch when page changes
  useEffect(() => { if (!loading) fetchPage(page); }, [page]);

  return (
    <section
      className="relative px-6 pt-8 pb-24 overflow-hidden"
      style={{
        backgroundImage: 'url("/whises.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* overlay gelap biar teks kebaca */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-white">
        {/* Header */}
        <h2 className={`${playfair.className} text-2xl md:text-2xl font-bold`}>Ucapan</h2>
        <hr className="mt-3 mb-8 border-white/40" />

        {loading && (
          <p className={`${playfair.className} text-white/80`}>Memuat ucapan…</p>
        )}

        {!loading && items.length === 0 && (
          <p className={`${playfair.className} text-white/80`}>
            Belum ada ucapan. Jadilah yang pertama ✨
          </p>
        )}

        <div className="space-y-8">
          {items.map((u, i) => (
            <motion.article
              key={u.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="max-w-2xl"
            >
              {/* Nama */}
              <h3 className={`${playfair.className} text-xl md:text-xl font-bold leading-tight`}>
                {u.nama}
              </h3>

              {/* Pesan */}
              {u.pesan && (
                <p className={`${playfair.className} text-base md:text-sm font-normal leading-relaxed mt-2 whitespace-pre-line`}>
                  {u.pesan}
                </p>
              )}

              {/* Tanggal + status */}
              <p className={`${playfair.className} text-sm md:text-base text-white/80`}>
                {formatTanggalID(u.created_at)}
                {u.kehadiran ? (
                  <>
                    {' '}–{' '}
                    <span className="font-semibold">
                      {u.kehadiran === 'hadir' ? 'Hadir' : 'Tidak Hadir'}
                    </span>
                  </>
                ) : null}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
      {/* Pagination */}
      {total > PAGE_SIZE && (
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="px-4 py-3 flex items-center justify-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1 || pending}
                className="px-3 py-1 border border-white/40 rounded disabled:opacity-50"
              >
                Sebelumnya
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const p = idx + 1;
                  return (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-9 h-9 rounded border ${p === page ? 'border-white bg-white text-black' : 'border-white/40 text-white'
                        }`}
                      disabled={pending}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages || pending}
                className="px-3 py-1 border border-white/40 rounded disabled:opacity-50"
              >
                Berikutnya
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ListUcapan;