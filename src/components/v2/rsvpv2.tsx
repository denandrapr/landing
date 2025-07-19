import { useState } from "react";
import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display } from 'next/font/google';
import Image from 'next/image';

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: ['400'],
});

export default function RsvpV2() {
    const [nama, setNama] = useState("");
    const [ucapan, setUcapan] = useState("");
    const [kehadiran, setKehadiran] = useState('');
    const [listUcapan, setListUcapan] = useState<{ nama: string; ucapan: string; timestamp: number }[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUcapan = {
            nama,
            ucapan,
            timestamp: Date.now(),  // Simpan timestamp saat ucapan dikirim
        };
        setListUcapan([newUcapan, ...listUcapan]);
        setNama("");
        setUcapan("");
    };

    const formatTimeAgo = (timestamp: number) => {
        const now = Date.now();
        const diff = now - timestamp;
        const minutes = Math.floor(diff / 60000); // convert to minutes
        const hours = Math.floor(minutes / 60);
        const day = new Date(timestamp);

        if (minutes < 60) {
            return `${minutes} menit yang lalu`;
        } else {
            const hoursString = day.getHours() > 12 ? day.getHours() - 12 : day.getHours();
            const minutesString = day.getMinutes() < 10 ? `0${day.getMinutes()}` : day.getMinutes();
            return `${hoursString}:${minutesString} WIB`;
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
            <form onSubmit={handleSubmit} className="rounded-lg shadow-lg w-full max-w-md space-y-4 mb-10 mt-8 z-90">
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
                                onChange={(e) => setKehadiran(e.target.value)}
                                className="sr-only"
                                required
                            />
                            <label
                                htmlFor="hadir"
                                className={`${playfairDisplay.className} block w-full px-4 py-2 text-center cursor-pointer border-2 transition-all ${kehadiran === 'hadir'
                                        ? 'bg-white text-black border-white'
                                        : 'bg-transparent text-white border-white hover:bg-white/10'
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
                                onChange={(e) => setKehadiran(e.target.value)}
                                className="sr-only"
                                required
                            />
                            <label
                                htmlFor="tidak-hadir"
                                className={`${playfairDisplay.className} block w-full px-4 py-2 text-center cursor-pointer border-2 transition-all ${kehadiran === 'tidak-hadir'
                                        ? 'bg-white text-black border-white'
                                        : 'bg-transparent text-white border-white hover:bg-white/10'
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
                        value={ucapan}
                        onChange={(e) => setUcapan(e.target.value)}
                        className={`${playfairDisplay.className} w-full border border-gray-300 px-3 py-2 text-white placeholder-white/50`}
                        rows={3}
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className={`${playfairDisplay.className} px-8 bg-[#FFF] text-black py-2`}
                >
                    Kirim
                </button>
            </form>

            {/* List ucapan */}
            <div className="w-full max-w-md space-y-4 z-90 overflow-y-auto max-h-[300px]">
                {listUcapan.map((item, idx) => (
                    <div
                        key={idx}
                        className={`p-4 rounded-lg shadow bg-white text-black`}  // Mengganti bg-red-600 ke bg-white dan text color ke text-black
                    >
                        <p className="font-bold">{item.nama}</p>
                        <p>{item.ucapan}</p>
                        <p className="text-sm text-gray-500 mt-4">{formatTimeAgo(item.timestamp)}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}
