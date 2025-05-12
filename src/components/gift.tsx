import { useState } from "react";
import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import { Copy } from "lucide-react";

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: ['400'],
});

const copyToClipboard = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";  // Hindari scroll
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
        document.execCommand("copy");
        alert("Nomor rekening disalin!");
    } catch (err) {
        alert("Gagal menyalin");
    }
    document.body.removeChild(textarea);
};

export default function Gift() {
    return (
        <section className="flex flex-col items-center justify-center pt-16 pb-16 px-6 overflow-hidden relative" style={{ backgroundImage: 'url("/bg.jpg")' }}>
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
                className={`${greatVibes.className} text-center text-3xl mb-12 font-semibold text-[#5C3B33]`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Support Cinta Kami di Sini ✨
            </motion.p>

            {/* Section informasi bank BCA*/}
            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mb-4 flex items-center gap-4 z-90">
                <Image
                    src="/bca.png"
                    alt="Logo Bank BCA"
                    width={50}
                    height={50}
                />
                <div className="flex-1">
                    <p className="text-gray-800 font-semibold">BCA</p>
                    <p className="text-gray-600 text-sm">a.n Bella Ramadhanty Maruf</p>
                </div>
                <button
                    onClick={() => copyToClipboard("1234567890")}
                    className="text-[#465F4B] hover:text-green-700 transition"
                    type="button"
                >
                    <Copy size={20} />
                </button>
            </div>

            {/* Section informasi bank BCA*/}
            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mb-8 flex items-center gap-4 z-90">
                <Image
                    src="/blu.jpg"
                    alt="Logo Bank BCA"
                    width={50}
                    height={50}
                />
                <div className="flex-1">
                    <p className="text-gray-800 font-semibold">Blu by BCA Digital</p>
                    <p className="text-gray-600 text-sm">a.n Bella Ramadhanty Maruf</p>
                </div>
                <button
                    onClick={() => copyToClipboard("1234567890")}
                    className="text-[#465F4B] hover:text-green-700 transition"
                    type="button"
                >
                    <Copy size={20} />
                </button>
            </div>


        </section>
    );
}
