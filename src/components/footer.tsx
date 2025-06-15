import React from 'react';
import { Great_Vibes, Playfair_Display } from 'next/font/google';
import { motion } from 'framer-motion';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const Footer: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-14 px-6 bg-[#465F4B] overflow-hidden relative">
        {/* Ornamen */}
        <motion.img
            src="/img/lmflower.webp"
            alt="Bunga"
            className="absolute top-[5vh] left-[-50] w-[200px] h-[400px]"
            initial={{ opacity: 0, x: -50 }} // mulai dari atas sedikit & transparan
            animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
            transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.img
            src="/img/rmflower.webp"
            alt="Bunga"
            className="absolute top-[5vh] right-[-50] w-[200px] h-[400px]"
            initial={{ opacity: 0, x: 50 }} // mulai dari atas sedikit & transparan
            animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
            transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.img
            src="/img/lmflower.webp"
            alt="Bunga"
            className="absolute top-[30vh] left-[-30] w-[200px] h-[450px]"
            initial={{ opacity: 0, x: -50 }} // mulai dari atas sedikit & transparan
            animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
            transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.img
            src="/img/rmflower.webp"
            alt="Bunga"
            className="absolute top-[30vh] right-[-30] w-[200px] h-[450px]"
            initial={{ opacity: 0, x: 50 }} // mulai dari atas sedikit & transparan
            animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
            transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.img
            src="/img/blflower.webp"
            alt="Bunga"
            className="absolute bottom-0 left-0 w-[250px] h-[300px] object-cover z-60"
            initial={{ opacity: 0, x: -50 }} // mulai dari atas sedikit & transparan
            animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
            transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.img
            src="/img/brflower.webp"
            alt="Bunga"
            className="absolute bottom-0 right-0 w-[250px] h-[300px] object-cover z-60"
            initial={{ opacity: 0, x: 50 }} // mulai dari atas sedikit & transparan
            animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
            transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      <div className="max-w-4xl mx-auto space-y-8 px-12">
        {/* Ucapan Terima Kasih */}
        <div className="text-center space-y-6">
          <p className={`${playfairDisplay.className} text-sm leading-relaxed text-gray-100 max-w-2xl mx-auto`}>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Saudara/Saudari berkenan hadir untuk memberikan doa restu.
          </p>
          <p className={`${playfairDisplay.className} text-sm leading-relaxed text-gray-100`}>
            Atas kehadiran dan doa restunya kami ucapkan terima kasih.
          </p>
          <p className={`${playfairDisplay.className} text-sm text-gray-100`}>
            Kami yang Berbahagia
          </p>
        </div>

        {/* Nama Pengantin */}
        <div className="text-center space-y-2">
          <h3 className={`${greatVibes.className} text-5xl text-white`}>
            Bella
          </h3>
          <p className={`${playfairDisplay.className} text-lg text-gray-200`}>
            &
          </p>
          <h3 className={`${greatVibes.className} text-5xl text-white`}>
            Denandra
          </h3>
        </div>

        {/* Info Lagu */}
        <div className={`${playfairDisplay.className} text-sm text-gray-200 text-center`}>
          Backsound by Shania Twain – <span className="italic">"You're Still The One"</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 space-y-1 text-center z-90">
        <div className={`${playfairDisplay.className} text-xs text-gray-300`}>
          &copy; 2025 Bella & Denandra. All rights reserved.
        </div>
        <div className={`${playfairDisplay.className} text-xs text-gray-300`}>
          Dibikin dengan ❤️ pake Next.js, biar kece!
        </div>
      </div>
    </section>
  );
};

export default Footer;