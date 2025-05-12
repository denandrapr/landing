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

export default function Rsvp() {
    const [nama, setNama] = useState("");
    const [ucapan, setUcapan] = useState("");
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
        <section className="flex flex-col items-center justify-center py-14 px-6 bg-[#465F4B] overflow-hidden relative">
            {/* Ornamen */}
            <motion.img
                src="/img/lmflower.png"
                alt="Bunga"
                className="absolute top-[5vh] left-[-50] w-[200px] h-[400px]"
                initial={{ opacity: 0, x: -50 }} // mulai dari atas sedikit & transparan
                animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.img
                src="/img/rmflower.png"
                alt="Bunga"
                className="absolute top-[5vh] right-[-50] w-[200px] h-[400px]"
                initial={{ opacity: 0, x: 50 }} // mulai dari atas sedikit & transparan
                animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.img
                src="/img/lmflower.png"
                alt="Bunga"
                className="absolute top-[30vh] left-[-30] w-[200px] h-[450px]"
                initial={{ opacity: 0, x: -50 }} // mulai dari atas sedikit & transparan
                animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.img
                src="/img/rmflower.png"
                alt="Bunga"
                className="absolute top-[30vh] right-[-30] w-[200px] h-[450px]"
                initial={{ opacity: 0, x: 50 }} // mulai dari atas sedikit & transparan
                animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.img
                src="/img/blflower.png"
                alt="Bunga"
                className="absolute bottom-0 left-0 w-[250px] h-[300px] object-cover z-60"
                initial={{ opacity: 0, x: -50 }} // mulai dari atas sedikit & transparan
                animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.img
                src="/img/brflower.png"
                alt="Bunga"
                className="absolute bottom-0 right-0 w-[250px] h-[300px] object-cover z-60"
                initial={{ opacity: 0, x: 50 }} // mulai dari atas sedikit & transparan
                animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            <motion.p
                className={`${greatVibes.className} text-center text-5xl mb-4 font-semibold text-white]`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Kartu Ucapan
            </motion.p>

            <motion.p
                className={`${playfairDisplay.className} text-center text-xs mb-12 font-semibold text-white px-12`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Kirimkan semangat dan kebahagiaan lewat kartu ucapan ini, yuk! 🥳
            </motion.p>

            {/* Form ucapan */}
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md space-y-4 mb-10 z-90">
                <input
                    type="text"
                    placeholder="Nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    required
                />
                <textarea
                    placeholder="Ucapan"
                    value={ucapan}
                    onChange={(e) => setUcapan(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    rows={3}
                    required
                ></textarea>
                <button type="submit" className="w-full bg-[#465F4B] text-white py-2 rounded">Kirim</button>
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
