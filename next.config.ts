import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Disables image optimization for static export (GitHub Pages doesn’t support Next.js image optimization)
  },
};

export default nextConfig;
