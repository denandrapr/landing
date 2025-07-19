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

const ListUcapan: React.FC = () => {
  return (
    // <section className="flex flex-col items-center justify-center pt-16 pb-24 px-6 overflow-hidden relative" style={{ backgroundImage: 'url("/gallery/fotofooter.webp")'}}>

    <section
      className="flex flex-col min-h-screen items-center justify-center relative pt-16 pb-24 px-6 o"
      style={{
        backgroundImage: 'url("/whises.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

    </section>
  );
};

export default ListUcapan;