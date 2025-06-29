'use client';
import { Inter, Playfair_Display } from 'next/font/google';
import { FiBookOpen } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
  const [guestName, setGuestName] = useState('Guest');

  useEffect(() => {
    // Disable scroll when component mounts
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Re-enable scroll when component unmounts
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const name = params.get('to');
      if (name) {
        setGuestName(decodeURIComponent(name.replace(/\+/g, ' ')));
      }
    }
  }, []);

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
          className={`${inter.className} text-center mr-34 text-xs font-normal text-white mt-24`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          The Wedding Of
        </motion.p>

        {/* Animasi "Denandra & Bella" */}
        <motion.h1
          className={`${playfairDisplay.className} text-center text-3xl text-white break-words md:break-normal md:text-6xl font-normal italic mt-2`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          Bella - Denandra
        </motion.h1>

        {/* Animasi tanggal */}
        <motion.p
          className={`${inter.className} text-center ml-36 text-xs font-normal text-white mt-2`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          20 . 09 . 2025
        </motion.p>

        {/* Kontainer untuk tombol dan gambar */}
        <div className="relative flex-grow flex flex-col justify-end">
          {/* Kontainer tombol yang menggunakan flex untuk center */}
          <div className="absolute bottom-[140px] left-0 right-0 flex flex-col items-center justify-center gap-2">
            {/* Additional text with animation */}
            <motion.p
              className={`${playfairDisplay.className} text-white text-xl text-center max-w-xs italic`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
            >
              Kepada Yth, {guestName}
            </motion.p>
            <motion.p
              className={`${inter.className} text-white text-xxs text-center max-w-xs`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1.3 }}
            >
              Kami mohon maaf jika ada kesalahan penulisan<br /> nama atau gelar
            </motion.p>

            {/* Animasi tombol "Buka Undangan" */}
            <motion.button
              onClick={onOpen}
              className={`${inter.className} flex items-center gap-2 bg-stone-900 text-white mt-4 font-normal py-2 px-4 text-base`}
              initial={{ opacity: 0, scale: 0.8 }} // Initial hidden state
              animate={{
                opacity: 1,
                scale: 1, // First animate to full size
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 1.5,
                // After initial animation completes, start pulsing
                onComplete: () => {
                  // This will be handled by the animation controls
                }
              }}
              // Continuous pulse animation after initial entrance
              whileInView={{
                scale: [1, 1.05, 1],
                transition: {
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0 // Start immediately after entrance
                }
              }}
              whileHover={{
                scale: 1.08,
                transition: { duration: 0.3 }
              }}
              whileTap={{
                scale: 0.98
              }}
            >
              <FiBookOpen className="text-m" />
              BUKA UNDANGAN
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}