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


export default function WeddingPage() {
  return (
    <div className="bg-[#e6f5ec]">
      {/* Section 1: Mempelai */}
      <section className="flex flex-col items-center justify-center py-16 px-6 overflow-hidden relative" style={{ backgroundImage: 'url("/bg.jpg")' }}>
        {/* Ornamen */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-green-100 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-100 rounded-full opacity-30 blur-2xl"></div>
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

        <motion.p
          className={`${playfairDisplay.className} text-center text-2xl font-semibold text-[#5C3B33]`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
        </motion.p>

        <motion.p
          className={`${playfairDisplay.className} text-center text-l font-reguler mt-8 text-[#5C3B33]`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Dengan Memohon Rahmat Dan Ridho Allah Subhanahu Wa Ta&apos;ala. Kami Mengundang Bapak/Ibu/Saudara/I, Untuk Menghadiri Resepsi Pernikahan Kami.
        </motion.p>

        {/* Konten */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          {/* Mempelai Pria */}
          <div className="relative text-center">
            {/* Gambar mempelai */}
            <motion.img
              src="/adraa.png"
              alt="Mempelai Pria"
              className="w-42 h-42 rounded-full object-cover relative mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
            <h3 className={`${greatVibes.className} text-2xl font-bold mt-2 text-[#5C3B33]`}>Denandra Prasetya Laksma Putra</h3>
            <p className={`${playfairDisplay.className} text-sm mt-2 text-[#5C3B33]`}>
              Putra dari Bapak Rizki Mahendra <br />&<br />Ibu C. Yogi Laksmi Devi
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

          {/* Mempelai Wanita */}
          <div className="text-center">
            {/* Gambar mempelai */}
            <motion.img
              src="/bellaa.png"
              alt="Mempelai Wanita"
              className="w-42 h-42 rounded-full object-cover relative mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
            <h3 className={`${greatVibes.className} text-xl font-semibold mt-2 text-[#5C3B33]`}>Bella Ramadhanty Maruf</h3>
            <p className={`${playfairDisplay.className} text-sm mt-2 text-[#5C3B33]`}>
              Putri dari Bapak Ali Maruf <br />& <br />Ibu Susiati
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Acara */}
      <section className="flex flex-col items-center justify-center py-20 px-6 bg-[#d8f3e2] relative">
        {/* Tanggal */}
        <motion.h2
          className="text-3xl font-bold mb-6 text-green-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          20 Juli 2025
        </motion.h2>

        {/* Image Dekorasi */}
        <motion.img
          src="/path/to/dekorasi.png"
          alt="Dekorasi Wedding"
          className="w-80 mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Countdown */}
        <div className="mb-8">
          <div className="simply-countdown simply-countdown-wedding"></div>
        </div>

        {/* Alamat dan Tombol */}
        <div className="text-center">
          <p className="text-lg mb-4">
            Lokasi Acara: Gedung Serbaguna Harmoni, Jakarta
          </p>
          <a
            href="https://maps.google.com/..."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition-all"
          >
            Lihat di Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}
