'use client';
import { Inter, Playfair_Display } from 'next/font/google';
import { FiBookOpen } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface CoverProps {
  onOpen: () => void;
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export default function CoverV2({ onOpen }: CoverProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-hidden min-h-screen">
      {/* Semi-transparent black overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("/gallery/photo10.webp")' }}
      ></div>

      {/* Content container (relative to position elements above overlay) */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Animasi "The wedding of" */}
        <motion.p
          className={`${inter.className} text-left ml-18 text-xs font-normal text-white mt-24`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          The Wedding Of
        </motion.p>

        {/* Animasi "Denandra & Bella" */}
        <motion.h1
          className={`${playfairDisplay.className} text-center text-3xl text-white break-words md:break-normal md:text-6xl font-normal italic`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          Denandra - Bella
        </motion.h1>

        {/* Animasi tanggal */}
        <motion.p
          className={`${inter.className} text-right mr-18 text-xs font-normal text-white`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          20 September 2025
        </motion.p>

        {/* Kontainer untuk tombol dan gambar */}
        <div className="relative flex-grow flex flex-col justify-end">
          {/* Kontainer tombol yang menggunakan flex untuk center */}
          <div className="absolute bottom-[110px] left-0 right-0 flex flex-col items-center justify-center gap-2">
            {/* Additional text with animation */}
            <motion.p
              className={`${playfairDisplay.className} text-white text-sm text-center max-w-xs italic`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
            >
              Dear Denandra
            </motion.p>
            <motion.p
              className={`${inter.className} text-white text-xs text-center max-w-xs`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
            >
              We apologize if there is any misspelling<br /> of name or title
            </motion.p>

            {/* Animasi tombol "Buka Undangan" */}
            <motion.button
              onClick={onOpen}
              className={`${inter.className} flex items-center gap-2 bg-stone-900 text-white mt-4 font-normal py-2 px-4 text-base`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
            >
              <FiBookOpen className="text-m" />
              Open Invitation
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}