import { useState } from "react";
import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display } from 'next/font/google';
import Image from 'next/image'

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'], // Menambahkan berat font jika dibutuhkan
});

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: ['400'],
});

const images = [
    "/gallery/photo1.webp",
    "/gallery/photo2.webp",
    "/gallery/photo3.webp",
    "/gallery/photo4.webp",
    "/gallery/photo5.webp",
    "/gallery/photo6.webp",
    "/gallery/photo7.webp",
    "/gallery/photo8.webp",
    "/gallery/photo10.webp",
    "/gallery/photo9.webp",
    "/gallery/photo12.webp",
    "/gallery/photo11.webp",
];

export default function ImageGalleryV2() {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <section
            className="flex flex-col min-h-screen items-center justify-center relative pt-16 pb-24 px-6 o"
            style={{
                backgroundImage: 'url("/sepatu.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <motion.p
                className={`${playfairDisplay.className} text-center text-3xl mb-4 text-white z-20]`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Galeri Cinta Kita
            </motion.p>

            <motion.p
                className={`${playfairDisplay.className} text-center text-xs mb-8 font-semibold text-white px-12 z-20`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Setiap foto menyimpan cerita yang tak akan pernah kami lupakan 💫
            </motion.p>

            {/* Video YouTube */}
            <div className="w-full max-w-md mb-4 z-90 relative">
                <iframe
                    width="100%"
                    height="250"
                    src="https://www.youtube.com/embed/i7hD84j2FdU?modestbranding=1&controls=0&rel=0&fs=0&cc_load_policy=0&iv_load_policy=3"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                />
                {/* Overlay to hide title area */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-transparent pointer-events-none z-10"></div>
            </div>

            {/* Gambar utama */}
            <div className="w-full max-w-md h-120 rounded-xl overflow-hidden shadow-lg mb-4 z-90">
                <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full h-full object-cover transition-all duration-300"
                />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2 w-full max-w-md z-90">
                {images.map((img, idx) => (
                    <Image
                        key={idx}
                        src={img}
                        alt={`Thumbnail ${idx}`}
                        width={300} // sesuaikan dengan kebutuhan kamu
                        height={300}
                        className={`w-full aspect-square rounded-lg cursor-pointer object-cover border-2 ${selectedImage === img ? "border-[#465F4B]" : "border-transparent"
                            }`}
                        onClick={() => setSelectedImage(img)}
                        loading="lazy"
                    />
                ))}
            </div>
        </section>
    );
}