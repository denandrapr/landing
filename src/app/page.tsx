'use client';

import { useState } from 'react';
import BackgroundMusic from '../components/backgroundmusic';
import CoverV2 from '@/components/v2/coverv2';
import Hero from '@/components/v2/hero';
import Bride from '@/components/v2/bride';
import Groom from '@/components/v2/groom';
import LocationV2 from '@/components/v2/locationv2';
import { motion } from 'framer-motion';
import CountingSectionV2 from '@/components/v2/countingv2';
import ImageGalleryV2 from '@/components/v2/imagegalleryv2';
import RsvpV2 from '@/components/v2/rsvpv2';
import ListUcapan from '@/components/v2/listucapan';
import GiftV2 from '@/components/v2/giftv2';
import FooterV2 from '@/components/v2/footerv2';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Ini Musik */}
      <BackgroundMusic isPlaying={isOpen && !isVideoPlaying} />

      {/* Ini Cover */}
      {!isOpen && <CoverV2 onOpen={() => setIsOpen(true)} />}

      {/* Ini Konten Setelah Buka */}
      <div className={`transition-all duration-1000 ${isOpen ? 'translate-y-0' : '-translate-y-full'} overflow-auto h-screen`}>
        {/* <section className="h-screen flex items-center justify-center bg-pink-100">
          <h1 className="text-4xl font-bold">Selamat Datang di Undangan Kami!</h1>
        </section> */}

        <Hero />

        {/* Section 2: Acara */}
        <Bride />
        <Groom />

        {/* Section 3: Location */}
        {/* <Location /> */}
        <LocationV2 />

        <motion.div
          className="w-full z-60"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          <iframe
            title="Wedding Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0706208593206!2d112.7348571!3d-7.345966899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb4b0d8c2dff%3A0xb0e6098509d44856!2sGedung%20Graha%20Wisata!5e0!3m2!1sen!2sid!4v1745086170180!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </motion.div>
        {/* Section 3: Counting */}
        <CountingSectionV2 />

        {/* Section 4: Gallery */}
        <ImageGalleryV2
          onVideoPlay={() => setIsVideoPlaying(true)}
          onVideoPause={() => setIsVideoPlaying(false)}
        />

        {/* Section 5: Rsvp */}
        <RsvpV2 />
        <ListUcapan />

        {/* Section 5: Rsvp */}
        <GiftV2 />

        {/* Section 5: Footer */}
        {/* <Footer /> */}
        <FooterV2 />
      </div>
    </div>
  );
}
