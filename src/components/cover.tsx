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
    <div className="fixed inset-0 z-50 flex flex-col bg-black/50 bg-cover bg-center overflow-hidden min-h-screen" style={{ backgroundImage: 'url("/bg.webp")' }}>
      {/* Animasi "The wedding of" */}
      <motion.p
        className={`${playfairDisplay.className} text-center text-m font-semibold text-[#4B5563] mt-32 z-60`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        The Wedding Of
      </motion.p>

      {/* Animasi "Denandra & Bella" */}
      <motion.h1
        className={`${greatVibes.className} text-center text-4xl text-stone-600 break-words md:break-normal mt-4 md:text-6xl z-60`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      >
        Bella & Denandra
      </motion.h1>

      {/* Animasi tanggal */}
      <motion.p
        className={`${playfairDisplay.className} text-center text-m font-semibold text-[#4B5563] mt-2 z-60`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
      >
        20 . 09 . 2025
      </motion.p>

      {/* Gambar bunga di berbagai posisi */}
      <motion.img
        src="/img/ltflower.webp"
        alt="Bunga"
        className="absolute top-0 left-[-20] w-[200px] h-[200px] object-cover z-30"
        initial={{ opacity: 0, x: -50 }} // mulai dari atas sedikit & transparan
        animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.img
        src="/img/rtflower.webp"
        alt="Bunga"
        className="absolute top-0 right-[-20] w-[200px] h-[200px] object-cover z-30"
        initial={{ opacity: 0, x: 50 }} // mulai dari atas sedikit & transparan
        animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.img
        src="/img/lmflower.webp"
        alt="Bunga"
        className="absolute top-[30vh] left-0 w-[200px] h-[400px]"
        initial={{ opacity: 0, x: -50 }} // mulai dari atas sedikit & transparan
        animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.img
        src="/img/rmflower.webp"
        alt="Bunga"
        className="absolute top-[30vh] right-0 w-[200px] h-[400px]"
        initial={{ opacity: 0, x: 50 }} // mulai dari atas sedikit & transparan
        animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.img
        src="/img/blflower.webp"
        alt="Bunga"
        className="absolute bottom-0 left-0 w-[200px] h-[200px] object-cover z-60"
        initial={{ opacity: 0, x: -50 }} // mulai dari atas sedikit & transparan
        animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.img
        src="/img/brflower.webp"
        alt="Bunga"
        className="absolute bottom-0 right-0 w-[200px] h-[200px] object-cover z-60"
        initial={{ opacity: 0, x: 50 }} // mulai dari atas sedikit & transparan
        animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Kontainer untuk tombol dan gambar */}
      <div className="relative flex-grow flex flex-col justify-end">
        {/* Animasi foto sticky di bawah, align center horizontal */}
        <motion.img
          src="/bellaadra.png"
          alt="Foto"
          className="w-70 h-100 object-cover sticky bottom-0 mx-auto z-40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Kontainer tombol yang menggunakan flex untuk center */}
        <div className="absolute bottom-[110px] left-0 right-0 flex justify-center z-60">
          {/* Animasi tombol "Buka Undangan" */}
          <motion.button
            onClick={onOpen}
            className={`${playfairDisplay.className} flex items-center gap-2 bg-[#465F4B] text-white font-bold py-2 px-4 text-base rounded-full`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
          >
            <FiBookOpen className="text-m" />
            Buka Undangan
          </motion.button>
        </div>
      </div>
    </div>
  );
}
