'use client';

import { useEffect, useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

interface BackgroundMusicProps {
  isPlaying: boolean;
}

export default function BackgroundMusic({ isPlaying }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((error) => {
        console.error('Audio play failed:', error);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src="/makeumine.mp3" />
      <button
        onClick={toggleMute}
        className="fixed bottom-4 right-4 z-50 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition"
      >
        {isMuted ? (
          <FaVolumeMute size={24} color="#465F4B" />
        ) : (
          <FaVolumeUp size={24} color="#465F4B" />
        )}
      </button>
    </>
  );
}
