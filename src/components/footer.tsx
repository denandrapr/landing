import React from 'react';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#465F4B] text-white py-12 px-4">
            <div className="max-w-4xl mx-auto space-y-10">
                {/* Nama Pengantin dan Sosial Media */}
                <div className="flex flex-row justify-center items-start gap-6 text-center">

                    {/* Bella */}
                    <div className="space-y-2">
                        <p className="text-lg font-semibold">Bella Ramadhanty</p>
                        <div className="flex justify-center gap-4 text-xl text-gray-200">
                            <a
                                href="https://instagram.com/bellabel12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#A3D9A5] transition-colors"
                            >
                                <FiInstagram />
                            </a>
                            <a
                                href="https://linkedin.com/in/bellaramadhanty/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#A3D9A5] transition-colors"
                            >
                                <FiLinkedin />
                            </a>
                        </div>
                    </div>
                    {/* Denandra */}
                    <div className="space-y-2">
                        <p className="text-lg font-semibold">Denandra Prasetya</p>
                        <div className="flex justify-center gap-4 text-xl text-gray-200">
                            <a
                                href="https://instagram.com/denandrapr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#A3D9A5] transition-colors"
                            >
                                <FiInstagram />
                            </a>
                            <a
                                href="https://linkedin.com/in/denandra-prasetya/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#A3D9A5] transition-colors"
                            >
                                <FiLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Info Lagu */}
                <div className="text-sm text-gray-200 text-center">
                    Backsound by Shania Twain – <span className="italic">"You're Still The One"</span>
                </div>
            </div>
            {/* Copyright */}
            <div className="mt-4 space-y-1 text-center">
                <div className="text-xs text-gray-300">&copy; 2025 Denandra & Bella. All rights reserved.</div>
                <div className="text-xs text-gray-300">Dibikin dengan ❤️ pake Next.js, biar kece!</div>
            </div>
        </footer>
    );
};

export default Footer;
