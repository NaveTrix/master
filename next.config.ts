import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
    ],
    unoptimized: true, // Disable Image Optimization for static export
  },
  //output: "export", // Enable static export for cPanel deployment
};

export default nextConfig;
