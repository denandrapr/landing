import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⬅️ Ini yang penting untuk disable ESLint saat build
  },
};

export default nextConfig;
