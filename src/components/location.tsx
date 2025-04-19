import React from 'react';
import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display } from 'next/font/google';
import { FiMap } from 'react-icons/fi'; // icon lokasi

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: ['400'],
});

const Location: React.FC = () => {
    const openGoogleMaps = () => {
        window.open('https://www.google.com/maps/search/?api=1&query=Gedung+Graha+Wisata+Jawa+Timur', '_blank');
    };

    return (
        <section className="flex flex-col items-center justify-center py-14 px-6 bg-[#465F4B] relative">
            <div className="container flex flex-col items-center text-white">
                {/* Judul */}
                <motion.p
                    className={`${greatVibes.className} text-center text-5xl font-semibold`}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Resepsi
                </motion.p>

                {/* Subjudul */}
                <motion.p
                    className={`${playfairDisplay.className} text-center text-sm font-normal mt-4`}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    InsyaaAllah akan dilaksanakan pada
                </motion.p>

                {/* Detail Tanggal dan Waktu */}
                <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    <div className="flex items-center justify-center mb-6">
                        <div className="h-px w-24 bg-white"></div>
                    </div>

                    <p className={`${greatVibes.className} text-4xl font-extrabold`}>
                        Sabtu
                    </p>
                    <p className={`${playfairDisplay.className} text-lg mt-1`}>
                        20 September 2025
                    </p>
                    <p className={`${playfairDisplay.className} text-lg mt-1`}>
                        Pukul 09.00 WIB - Selesai
                    </p>

                    <div className="flex items-center justify-center mt-6">
                        <div className="h-px w-24 bg-white"></div>
                    </div>
                </motion.div>


                {/* Lokasi */}
                <motion.div
                    className="flex flex-col items-center text-center mt-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                >
                    <p className={`${playfairDisplay.className} text-lg font-semibold`}>
                        Bertempat di:
                    </p>
                    <p className={`${playfairDisplay.className} text-sm mt-2 leading-relaxed`}>
                        Gedung Graha Wisata Jawa Timur <br />
                        Jl. Wisata Menanggal No.38, Dukuh Menanggal,<br />
                        Kecamatan Gayungan, Surabaya, Jawa Timur 60234
                    </p>
                </motion.div>

                {/* Map iframe */}
                <motion.div
                    className="w-full mt-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                >
                    <iframe
                        title="Wedding Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0706208593206!2d112.7348571!3d-7.345966899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb4b0d8c2dff%3A0xb0e6098509d44856!2sGedung%20Graha%20Wisata!5e0!3m2!1sen!2sid!4v1745086170180!5m2!1sen!2sid"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                    ></iframe>
                </motion.div>

                {/* Button Google Maps */}
                <motion.button
                    onClick={openGoogleMaps}
                    className={`${playfairDisplay.className} flex items-center gap-2 bg-white text-[#465F4B] font-bold py-3 px-4 mt-4 text-base rounded-full`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
                >
                    <FiMap className="text-m" />
                    Buka di Google Maps
                </motion.button>
            </div>
        </section>
    );
};

export default Location;
