import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Pexels placeholders until real project photography arrives.
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
  },
};

export default nextConfig;
