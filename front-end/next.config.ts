import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,   // optional but recommended
  output: 'export',        // <-- enables static export
};

export default nextConfig;
