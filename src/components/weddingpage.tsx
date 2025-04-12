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
    <div className="bg-[#e6f5ec] text-green-800">
      {/* Section 1: Mempelai */}
      <section className="flex flex-col items-center justify-center py-16 px-6 relative">
        {/* Ornamen */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-green-100 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-100 rounded-full opacity-30 blur-2xl"></div>

        <motion.p
          className={`${playfairDisplay.className} text-center text-3xl font-semibold text-[#4B5563]`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          We are Getting Married
        </motion.p>
        {/* Konten */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          {/* Mempelai Pria */}
          <div className="relative text-center">
            <motion.div
              className="w-78 h-78 rounded-full relative mx-auto"
              style={{ backgroundImage: 'url("/bgphoto.png")', backgroundSize: 'cover' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Gambar mempelai */}
              <motion.img
                src="/adra.jpeg"
                alt="Mempelai Pria"
                className="w-52 h-52 rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
            <h3 className={`${playfairDisplay.className} text-2xl font-semibold mt-2`}>Denandra Prasetya Laksma Putra S.Kom</h3>
            <p className={`${playfairDisplay.className} text-sm mt-2`}>
              Putra dari Bapak Rizki Mahendra & Yogi Laksmi Devi
            </p>
          </div>


          {/* & */}
          <motion.div
            className={`${greatVibes.className} text-9xl font-bold text-green-600`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            &
          </motion.div>

          {/* Mempelai Wanita */}
          <div className="text-center">
            <motion.div
              className="w-78 h-78 rounded-full relative mx-auto"
              style={{ backgroundImage: 'url("/bgphoto.png")', backgroundSize: 'cover' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Gambar mempelai */}
              <motion.img
                src="/bella.jpeg"
                alt="Mempelai Wanita"
                className="w-52 h-52 rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
            <h3 className={`${playfairDisplay.className} text-2xl font-semibold mt-2`}>Bella Ramadhanty Maruf S.Kom</h3>
            <p className={`${playfairDisplay.className} text-sm mt-2`}>
              Putri dari Bapak Ali Maruf & Ibu Susiati
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
