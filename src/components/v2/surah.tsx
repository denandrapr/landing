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

const Surah: React.FC = () => {
  return (
    <section className="flex flex-col min-h-screen pt-16 pb-40 overflow-hidden relative">
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
      <div className="relative z-20">
        <motion.p
          className={`${playfairDisplay.className} text-left text-3xl font-reguler mt-4 px-8 text-white`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          QS Ar-Rum: 21
        </motion.p>
        <motion.p
          className={`${playfairDisplay.className} text-left text-xs font-reguler mt-4 px-8 text-white`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tentram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir."
        </motion.p>
      </div>
    </section>
  );
};

export default Surah;