'use client';

import { Great_Vibes, Playfair_Display } from 'next/font/google';
import { FiBookOpen } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface CoverProps {
  onOpen: () => void;
}

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Menambahkan berat font jika dibutuhkan
});

export default function Cover({ onOpen }: CoverProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 bg-cover bg-center" style={{ backgroundImage: 'url("/background.png")' }}>
      <div className="flex flex-col items-center space-y-4 bg-white/50 backdrop-blur p-6 rounded-xl w-[80%] sm:w-[500px]">
        {/* Animasi foto */}
        <motion.img
          src="/photo.jpeg"
          alt="Foto"
          className="w-80 h-90 object-cover rounded-full border-2 border-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Animasi "The wedding of" */}
        <motion.p
          className={`${playfairDisplay.className} text-center text-lg font-semibold text-[#4B5563]`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          The wedding of
        </motion.p>

        {/* Animasi "Denandra & Bella" */}
        <motion.h1
          className={`${greatVibes.className} text-center text-6xl text-stone-600 break-words md:break-normal md:text-6xl`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          Denandra <br /> & <br/>Bella
        </motion.h1>

        {/* Animasi tanggal */}
        <motion.p
          className={`${playfairDisplay.className} text-center text-m font-semibold text-[#4B5563]`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          20 . 09 . 2025
        </motion.p>

        {/* Animasi tombol "Buka Undangan" dengan efek lebih dinamis */}
        <motion.button
          onClick={onOpen}
          className={`${playfairDisplay.className} flex items-center gap-2 bg-[#7FBF7F] mt-7 hover:bg-[#6BAA6B] text-white font-bold py-3 px-6 rounded-full`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
        >
          <FiBookOpen className="text-xl" />
          Buka Undangan
        </motion.button>
      </div>
      {/* <Countdown targetDate="2025-09-20T00:00:00" /> */}
    </div>
  );
}
