import { useState } from "react";
import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import { Copy } from "lucide-react";
import { FiCopy } from "react-icons/fi";

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

export default function GiftV2() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="pt-16 pb-16 px-12 overflow-hidden relative bg-[#000]">
            {/* Section informasi bank BCA*/}
            <div className="relative inline-block">
                <img
                    src="/gift.png"
                    alt="Kado"
                    width={298}
                    height={308}
                />
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Centered text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className={`${playfairDisplay.className} text-white text-xl font-normal text-center`}>
                        Kado Pernikahan
                    </h2>
                </div>
            </div>

            <motion.p
                className={`${playfairDisplay.className} text-left text-xs mt-8 font-normal text-[#FFF]`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Apabila ingin berbagi tanda kasih untuk kami berdua, dengan senang hati dapat disampaikan melalui rekening berikut atau ke alamat yang tersedia.
            </motion.p>


            {/* Google Maps Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white bg-opacity-20 mt-4 hover:bg-opacity-30 text-white px-4 py-2 border border-white border-opacity-50 transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 1.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className={`${playfairDisplay.className} font-normal text-black`}>
                    {isOpen ? "TUTUP" : "BUKA"}
                </span>
            </motion.button>

            {isOpen && (
                <div className="mt-8 space-y-6">
                    <div>
                        <h3 className={`${playfairDisplay.className} text-base font-bold mb-2`}>
                            Rekening
                        </h3>

                        {/* BCA */}
                        <div className="flex items-center gap-2">
                            <p className={`${playfairDisplay.className} text-base font-normal`}>
                                1300333318
                            </p>
                            <button
                                onClick={() => copyToClipboard("1300333318")}
                                className="p-1 hover:bg-white/10 rounded"
                                title="Salin nomor rekening"
                            >
                                <FiCopy className="w-4 h-4 text-white" />
                            </button>
                        </div>
                        <p className={`${playfairDisplay.className} text-xs font-normal`}>
                            Bank BCA – Bella Ramadhanty Maruf
                        </p>

                        {/* Blu BCA */}
                        <div className="flex items-center gap-2 mt-4">
                            <p className={`${playfairDisplay.className} text-base font-normal`}>
                                007192686968
                            </p>
                            <button
                                onClick={() => copyToClipboard("007192686968")}
                                className="p-1 hover:bg-white/10 rounded"
                                title="Salin nomor rekening"
                            >
                                <FiCopy className="w-4 h-4 text-white" />
                            </button>
                        </div>
                        <p className={`${playfairDisplay.className} text-xs font-normal`}>
                            Blu By BCA Digital – Bella Ramadhanty Maruf
                        </p>
                    </div>

                    <div>
                        <h3 className={`${playfairDisplay.className} text-base font-bold mb-2`}>
                            Alamat
                        </h3>
                        <p className={`${playfairDisplay.className} text-xs font-normal`}>
                            Jl. Bratang Binangun VA-28, Gubeng, Kota Surabaya, Jawa Timur, 60284
                        </p>
                        <p className={`${playfairDisplay.className} text-xs font-normal`}>
                            Bella Ramadhanty Maruf
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}
