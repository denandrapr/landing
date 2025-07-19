import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Inter, Playfair_Display } from 'next/font/google';
import { FiCalendar } from 'react-icons/fi';
import CountdownV2 from './countdownv2';

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'], // Menambahkan berat font jika dibutuhkan
});

const addToCalendar = () => {
    const title = 'Undangan Pernikahan';
    const description = 'Merayakan bersama kami di hari spesial ini.';
    const location = 'Gedung Graha Wisata Jawa Timur'; // Lokasi event
    const startDate = '20250920T080000'; // Format: YYYYMMDDTHHMMSS
    const endDate = '20250920T110000'; // Optional, jam selesai

    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${description}&location=${location}`;

    window.open(calendarUrl, '_blank');
};


const CountingSectionV2: React.FC = () => {
    return (
        <section
            className="flex flex-col items-center justify-end px-6 overflow-hidden relative h-[300px] pb-12"
            style={{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 20%, transparent 100%), url("/bebek.webp")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Tanggal */}
            <motion.p
                className={`${playfairDisplay.className} text-center text-3xl font-base text-white`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Makin Dekat Nih
            </motion.p>
            <CountdownV2 targetDate="2025-09-20T00:00:00" />
            <motion.button
                onClick={() => { addToCalendar() }}
                className={`${playfairDisplay.className} flex items-center gap-2 bg-white text-black font-bold py-3 px-4 mt-4 text-base rounded-full`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
            >
                <FiCalendar className="text-m" />
                <span className={`${playfairDisplay.className} font-normal text-black`}>
                    Tambahkan ke Kalender
                </span>
            </motion.button>
        </section>
    );
};

export default CountingSectionV2;