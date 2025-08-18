import React from 'react';
import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display } from 'next/font/google';
import { useQRCode } from 'next-qrcode';

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const LocationV2: React.FC = () => {
    const openGoogleMaps = () => {
        window.open('https://www.google.com/maps/search/?api=1&query=Gedung+Graha+Wisata+Jawa+Timur', '_blank');
    };

    const { Canvas } = useQRCode();

    return (
        <section className="flex flex-col h-auto py-12 overflow-hidden relative">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                    poster="/covers.jpg"
                >
                    <source src="/video/preview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Black transparent overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
            ></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-start justify-center h-full text-left px-8">
                <div className="flex flex-col items-start max-w-md">
                    {/* Date */}
                    <motion.p
                        className={`${playfairDisplay.className} text-white text-2xl md:text-xl font-normal mb-6`}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    >
                        SABTU,<br />
                        20 September 2025
                    </motion.p>

                    {/* Akad */}
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                    >
                        <h3 className={`${playfairDisplay.className} text-white text-xl font-normal mb-2`}>
                            AKAD
                        </h3>
                        <p className={`${playfairDisplay.className} text-white text-base font-normal`}>
                            07.00 - 08.00 WIB
                        </p>
                    </motion.div>

                    {/* Resepsi */}
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.0 }}
                    >
                        <h3 className={`${playfairDisplay.className} text-white text-xl font-normal mb-2`}>
                            RESEPSI
                        </h3>
                        <p className={`${playfairDisplay.className} text-white text-base font-normal`}>
                            11.00 - 13.00 WIB
                        </p>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        className="w-full border-t border-white mb-8"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
                    ></motion.div>

                    {/* Location */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.4 }}
                    >
                        <h3 className={`${playfairDisplay.className} text-white text-lg font-bold mb-4`}>
                            GEDUNG GRAHA WISATA JAWA TIMUR
                        </h3>
                        <p className={`${playfairDisplay.className} text-white text-sm font-normal leading-relaxed`}>
                            Jl. Wisata Menanggal No.38, Dukuh Menanggal, Kecamatan Gayungan, Surabaya, Jawa Timur 60234
                        </p>
                    </motion.div>

                    {/* Google Maps Button */}
                    <motion.button
                        onClick={openGoogleMaps}
                        className="flex items-center justify-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 border border-white border-opacity-50 transition-all duration-300 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className={`${playfairDisplay.className} font-normal text-black`}>
                            BUKA GOOGLE MAP
                        </span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default LocationV2;