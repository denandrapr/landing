import React from 'react';
import { motion } from "framer-motion";
import { Great_Vibes, Inter, Playfair_Display } from 'next/font/google';
import { ChevronDown } from 'lucide-react';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col h-screen overflow-hidden relative">
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
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
        <div className="flex flex-col items-center">
          {/* Invitation Text */}
          <motion.p
            className={`${inter.className} text-white text-xs font-normal mb-6`}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            WE INVITE YOU TO CELEBRATE
          </motion.p>
          
          {/* Names */}
          <motion.h1
            className={`${playfairDisplay.className} text-white text-3xl md:text-7xl font-normal mb-6`}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            BELLA & DENANDRA
          </motion.h1>
          
          {/* Date */}
          <motion.p
            className={`${inter.className} text-white text-xs md:text-lg font-normal mb-24`}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          >
            SABTU, 20 SEPTEMBER 2025
          </motion.p>
          
          {/* Scroll Down Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:bg-opacity-20 transition-all duration-300">
              <ChevronDown className="w-4 h-4 text-white animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;