import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["media.licdn.com", "static.licdn.com"],
  },
};

export default nextConfig;
