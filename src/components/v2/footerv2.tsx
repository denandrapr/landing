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

const FooterV2: React.FC = () => {
  return (
    // <section className="flex flex-col items-center justify-center pt-16 pb-24 px-6 overflow-hidden relative" style={{ backgroundImage: 'url("/gallery/fotofooter.webp")'}}>

    <section
      className="flex flex-col min-h-screen items-center justify-center relative pt-16 pb-24 px-6 o"
      style={{
        backgroundImage: 'url("/gallery/fotofooter.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Black transparent overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      ></div>

      <div className="max-w-4xl mx-auto space-y-8 px-12 z-30">
        {/* Ucapan Terima Kasih */}
        <div className="text-center space-y-6">
          <p className={`${playfairDisplay.className} text-sm leading-relaxed text-gray-100 max-w-2xl mx-auto`}>
            Kebahagiaan ini akan semakin lengkap dengan kehadiran kalian. Terima kasih sudah mau berbagi momen spesial bersama kami!
          </p>
          <p className={`${playfairDisplay.className} text-sm leading-relaxed text-gray-100`}>
            With love,
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
      </div>

      {/* Copyright */}
      <div className="mt-24 space-y-1 text-center z-90">
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

export default FooterV2;