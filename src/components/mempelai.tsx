import React from 'react';
import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Menambahkan berat font jika dibutuhkan
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
});

const Mempelai: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center pt-16 pb-40 px-6 overflow-hidden relative" style={{ backgroundImage: 'url("/bg.jpg")' }}>
        {/* Ornamen */}
        <motion.img
          src="/img/lmflower.png"
          alt="Bunga"
          className="absolute top-[5vh] left-[-50] w-[200px] h-[400px]"
          initial={{ opacity: 0, x: -50 }} // mulai dari atas sedikit & transparan
          animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.img
          src="/img/rmflower.png"
          alt="Bunga"
          className="absolute top-[5vh] right-[-50] w-[200px] h-[400px]"
          initial={{ opacity: 0, x: 50 }} // mulai dari atas sedikit & transparan
          animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.img
          src="/img/lmflower.png"
          alt="Bunga"
          className="absolute top-[30vh] left-[-30] w-[200px] h-[450px]"
          initial={{ opacity: 0, x: -50 }} // mulai dari atas sedikit & transparan
          animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.img
          src="/img/rmflower.png"
          alt="Bunga"
          className="absolute top-[30vh] right-[-30] w-[200px] h-[450px]"
          initial={{ opacity: 0, x: 50 }} // mulai dari atas sedikit & transparan
          animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.img
          src="/img/blflower.png"
          alt="Bunga"
          className="absolute bottom-0 left-0 w-[250px] h-[300px] object-cover z-60"
          initial={{ opacity: 0, x: -50 }} // mulai dari atas sedikit & transparan
          animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.img
          src="/img/brflower.png"
          alt="Bunga"
          className="absolute bottom-0 right-0 w-[250px] h-[300px] object-cover z-60"
          initial={{ opacity: 0, x: 50 }} // mulai dari atas sedikit & transparan
          animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        <motion.img
          src="/img/gunung.png"
          alt="Bunga"
          className="absolute bottom-0 right-15 w-[110px] h-[150px] object-cover z-40"
          initial={{ opacity: 0, x: 50 }} // mulai dari atas sedikit & transparan
          animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        <motion.img
          src="/img/gunung.png"
          alt="Bunga"
          className="absolute bottom-0 left-15 w-[110px] h-[150px] object-cover z-40"
          initial={{ opacity: 0, x: 50 }} // mulai dari atas sedikit & transparan
          animate={{ opacity: 1, x: 0 }}   // masuk ke posisi normal
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        <motion.p
          className={`${playfairDisplay.className} text-center text-2xl font-semibold text-[#5C3B33]`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
        </motion.p>

        <motion.p
          className={`${playfairDisplay.className} text-center text-l font-reguler mt-8 px-8 text-[#5C3B33]`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Dengan memohon Rahmat dan Ridho Allah Subhanahu Wa Ta&apos;ala, kami mengundang Bapak/Ibu/Saudara/Saudari, untuk menghadiri resepsi pernikahan kami.
        </motion.p>

        {/* Konten */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          {/* Mempelai Wanita */}
          <div className="relative text-center">
            {/* Gambar mempelai */}
            <motion.img
              src="/bellaa.png"
              alt="Mempelai Pria"
              className="w-42 h-42 rounded-full object-cover relative mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
            <h3 className={`${greatVibes.className} text-2xl font-bold mt-2 text-[#5C3B33]`}>Bella Ramadhanty Maruf</h3>
            <p className={`${playfairDisplay.className} text-l mt-2 text-[#5C3B33]`}>
              Putri dari Bapak Ali Maruf <br />& <br />Ibu Susiati
            </p>
          </div>


          {/* & */}
          <motion.div
            className={`${greatVibes.className} text-4xl font-bold text-[#5C3B33]`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            &
          </motion.div>

          {/* Mempelai Pria */}
          <div className="text-center">
            {/* Gambar mempelai */}
            <motion.img
              src="/adraa.png"
              alt="Mempelai Wanita"
              className="w-42 h-42 rounded-full object-cover relative mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
            <h3 className={`${greatVibes.className} text-xl font-semibold mt-2 text-[#5C3B33]`}>Denandra Prasetya Laksma Putra</h3>
            <p className={`${playfairDisplay.className} text-l mt-2 text-[#5C3B33]`}>
              Putra dari Bapak Rizki Mahendra <br />&<br />Ibu C. Yogi Laksmi Devi
            </p>
          </div>
        </div>
      </section>
    );
};

export default Mempelai;