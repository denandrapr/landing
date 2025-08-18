import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import supabase from "@/config/supabaseclient";

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const COOLDOWN_MS = 30_000;
const DUP_WINDOW_MS = 120_000;

export default function RsvpV2() {
    const [nama, setNama] = useState('');
    const [kehadiran, setKehadiran] = useState<'hadir' | 'tidak-hadir'>('hadir');
    const [pesan, setPesan] = useState('');
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState<string | null>(null);
    const [err, setErr] = useState<string | null>(null);
    const [cooldownLeft, setCooldownLeft] = useState(0);

    const timerRef = useRef<number | null>(null);

    // Atur countdown dari localStorage bila ada
    useEffect(() => {
        const tick = () => {
            const last = Number(localStorage.getItem('ucapan:lastSubmitAt') || 0);
            const now = Date.now();
            const remain = Math.max(0, last + COOLDOWN_MS - now);
            setCooldownLeft(remain);
            if (remain === 0 && timerRef.current) {
                window.clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
        tick();
        if (!timerRef.current) {
            timerRef.current = window.setInterval(tick, 250) as unknown as number;
        }
        return () => {
            if (timerRef.current) window.clearInterval(timerRef.current);
            timerRef.current = null;
        };
    }, []);

    const canSubmit = !loading && cooldownLeft === 0;

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setInfo(null);
        setErr(null);

        // Trim & validasi sederhana
        const n = nama.trim();
        const p = pesan.trim();
        if (!n) { setErr('Nama wajib diisi.'); return; }
        // Pesan boleh kosong; hapus baris di bawah jika ingin wajib isi pesan:
        // if (!p) { setErr('Pesan wajib diisi.'); return; }

        // Cek cooldown
        const last = Number(localStorage.getItem('ucapan:lastSubmitAt') || 0);
        const now = Date.now();
        if (now - last < COOLDOWN_MS) {
            const sisa = Math.ceil((COOLDOWN_MS - (now - last)) / 1000);
            setErr(`Tunggu ${sisa} detik sebelum mengirim lagi ya 🙏`);
            return;
        }

        // Cegah duplikat cepat (hash sederhana isi)
        const payloadStr = JSON.stringify({ n, k: kehadiran, p });
        const lastPayload = localStorage.getItem('ucapan:lastPayload') || '';
        const lastPayloadAt = Number(localStorage.getItem('ucapan:lastPayloadAt') || 0);
        if (payloadStr === lastPayload && now - lastPayloadAt < DUP_WINDOW_MS) {
            setErr('Kamu baru saja mengirim ucapan yang sama. Coba ubah sedikit atau kirim nanti ya 🙏');
            return;
        }

        setLoading(true);
        const { error } = await supabase.from('ucapan').insert([{ nama: n, kehadiran, pesan: p || null }]);
        setLoading(false);

        if (error) {
            setErr('Gagal mengirim. Coba lagi sebentar, ya.');
            return;
        }

        // Simpan jejak cooldown & duplikat
        localStorage.setItem('ucapan:lastSubmitAt', String(now));
        localStorage.setItem('ucapan:lastPayload', payloadStr);
        localStorage.setItem('ucapan:lastPayloadAt', String(now));

        // Clear field setelah sukses
        setNama('');
        setKehadiran('hadir');
        setPesan('');
        setInfo('Terima kasih! Ucapanmu sudah terkirim 💐');

        // Mulai ulang countdown
        if (!timerRef.current) {
            timerRef.current = window.setInterval(() => {
                const last2 = Number(localStorage.getItem('ucapan:lastSubmitAt') || 0);
                const now2 = Date.now();
                const remain2 = Math.max(0, last2 + COOLDOWN_MS - now2);
                setCooldownLeft(remain2);
                if (remain2 === 0 && timerRef.current) {
                    window.clearInterval(timerRef.current);
                    timerRef.current = null;
                }
            }, 250) as unknown as number;
        }
    };

    return (
        <section className="flex flex-col py-8 px-6 bg-[#000] overflow-hidden relative">
            <motion.p
                className={`${playfairDisplay.className} text-3xl mb-4 font-normal text-white]`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Berikan Ucapan
            </motion.p>

            {/* Form ucapan */}
            <form onSubmit={onSubmit} className="rounded-lg shadow-lg w-full max-w-md space-y-4 mb-10 mt-8 z-90">
                <div>
                    <label className={`${playfairDisplay.className} block text-white text-sm mb-2`}>
                        Nama
                    </label>
                    <input
                        type="text"
                        placeholder="Masukkan Nama Anda"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        className={`${playfairDisplay.className} w-full border border-gray-300 px-3 py-2 text-white placeholder-white/50`}
                        required
                    />
                </div>

                <div>
                    <label className={`${playfairDisplay.className} block text-white text-sm mb-2`}>
                        Konfirmasi Kehadiran
                    </label>
                    {/* Custom Button-Style Radio Buttons */}
                    <div className="flex space-x-2">
                        <div className="flex-1">
                            <input
                                type="radio"
                                id="hadir"
                                name="kehadiran"
                                value="hadir"
                                checked={kehadiran === 'hadir'}
                                onChange={() => setKehadiran('hadir')}
                                className="sr-only"
                                required
                            />
                            <label
                                htmlFor="hadir"
                                className={`${playfairDisplay.className} block w-full px-4 py-2 text-center cursor-pointer border-1 transition-all ${kehadiran === 'hadir'
                                    ? 'bg-white text-black border-gray-300'
                                    : 'bg-transparent text-white border-gray-300 hover:bg-white/10'
                                    }`}
                            >
                                Hadir
                            </label>
                        </div>

                        <div className="flex-1">
                            <input
                                type="radio"
                                id="tidak-hadir"
                                name="kehadiran"
                                value="tidak-hadir"
                                checked={kehadiran === 'tidak-hadir'}
                                onChange={() => setKehadiran('tidak-hadir')}
                                className="sr-only"
                                required
                            />
                            <label
                                htmlFor="tidak-hadir"
                                className={`${playfairDisplay.className} block w-full px-4 py-2 text-center cursor-pointer border-1 transition-all ${kehadiran === 'tidak-hadir'
                                    ? 'bg-white text-black border-gray-300'
                                    : 'bg-transparent text-white border-gray-300 hover:bg-white/10'
                                    }`}
                            >
                                Tidak Hadir
                            </label>
                        </div>
                    </div>
                </div>

                <div>
                    <label className={`${playfairDisplay.className} block text-white text-sm mb-2`}>
                        Ucapan
                    </label>
                    <textarea
                        placeholder="Masukkan Ucapan"
                        value={pesan}
                        onChange={(e) => setPesan(e.target.value)}
                        className={`${playfairDisplay.className} w-full border border-gray-300 px-3 py-2 text-white placeholder-white/50`}
                        rows={3}
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`${playfairDisplay.className} px-8 bg-[#FFF] text-black py-2`}
                >
                    {loading
                        ? 'Mengirim…'
                        : cooldownLeft > 0
                            ? `Tunggu ${Math.ceil(cooldownLeft / 1000)}s`
                            : 'Kirim'}
                </button>

                {info && <p className={`${playfairDisplay.className} text-white text-xs`}>{info}</p>}
                {err && <p className="text-red-400 text-sm">{err}</p>}
            </form>

        </section>
    );
}
