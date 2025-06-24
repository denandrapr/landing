import React from 'react';
import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
});

const Bride: React.FC = () => {
  return (
    <section
      className="flex flex-col min-h-screen relative"
      style={{
        backgroundImage: 'url("/v2/bella.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Container for bottom-aligned content */}
      <div className="mt-auto mb-16 px-8 w-full">
        {/* Mempelai Wanita */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className={`${playfairDisplay.className} text-white text-xs font-normal`}>
            Mempelai Wanita
          </p>
        </motion.div>

        {/* Nama Mempelai */}
        <motion.div
          className="w-full mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <p className={`${playfairDisplay.className} text-white text-3xl md:text-5xl leading-tight`}>
            BELLA RAMADHANTY <br /> MARUF S.Kom
          </p>
        </motion.div>

        {/* Garis pemisah */}
        <motion.div
          className="w-full my-3 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <div className="flex items-center w-full">
            <div className="flex-grow h-px bg-white"></div>
            <span className={`${playfairDisplay.className} text-white text-xs mx-2 whitespace-nowrap`}>
              Putri Dari
            </span>
            <div className="flex-grow h-px bg-white"></div>
          </div>
        </motion.div>

        {/* Orang Tua */}
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          <p className={`${playfairDisplay.className} text-white text-sm`}>
            Bapak Ali Maruf S.Sos, M.M <br/>dan<br/> Ibu Susiati Sumardi S.Sos
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Bride;