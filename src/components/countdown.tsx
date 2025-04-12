'use client';

import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [hasMounted, setHasMounted] = useState(false);

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!hasMounted) {
    return <div />; // atau bisa juga loading spinner, tapi tetap hook harus jalan dulu
  }

  return (
    <div className="flex gap-3 justify-center mt-6">
      <TimeCard value={timeLeft.days} label="Hari" />
      <TimeCard value={timeLeft.hours} label="Jam" />
      <TimeCard value={timeLeft.minutes} label="Menit" />
      <TimeCard value={timeLeft.seconds} label="Detik" />
    </div>
  );
}

function TimeCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl p-4 w-24">
      <div className="text-2xl font-bold text-[#87CEEB]">{value}</div>
      <div className="text-xs text-[#87CEEB]">{label}</div>
    </div>
  );
}
