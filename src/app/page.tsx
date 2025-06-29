'use client';

import { useState } from 'react';
import Cover from '../components/cover';
import BackgroundMusic from '../components/backgroundmusic';
import WeddingPage from '@/components/weddingpage';
import CoverV2 from '@/components/v2/coverv2';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Ini Musik */}
      <BackgroundMusic isPlaying={isOpen} /> 

      {/* Ini Cover */}
      {!isOpen && <CoverV2 onOpen={() => setIsOpen(true)} />}

      {/* Ini Konten Setelah Buka */}
      <div className={`transition-all duration-1000 ${isOpen ? 'translate-y-0' : '-translate-y-full'} overflow-auto h-screen`}>
        {/* <section className="h-screen flex items-center justify-center bg-pink-100">
          <h1 className="text-4xl font-bold">Selamat Datang di Undangan Kami!</h1>
        </section> */}

        <WeddingPage />
        {/* Tambahkan section lain di bawah sini */}
      </div>
    </div>
  );
}
