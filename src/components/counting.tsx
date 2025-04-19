import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display } from 'next/font/google';
import Countdown from './countdown';
import { FiCalendar } from 'react-icons/fi';

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'], // Menambahkan berat font jika dibutuhkan
});

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: ['400'],
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


const CountingSection: React.FC = () => {
    return (
        <section
            className="flex flex-col items-center justify-end px-6 overflow-hidden relative h-[400px] pb-12"
            style={{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 20%, transparent 100%), url("/countdownbg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Tanggal */}
            <motion.p
                className={`${greatVibes.className} text-center text-3xl font-semibold text-white`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Counting The Days
            </motion.p>
            <Countdown targetDate="2025-09-20T00:00:00" />
            <motion.button
                onClick={() => { addToCalendar() }}
                className={`${playfairDisplay.className} flex items-center gap-2 bg-white text-[#465F4B] font-bold py-3 px-4 mt-4 text-base rounded-full`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
            >
                <FiCalendar className="text-m" />
                Tambahkan ke kalender
            </motion.button>
        </section>
    );
};

export default CountingSection;