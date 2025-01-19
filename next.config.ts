import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Allow Sanity's image domain
  },
  // Add other configurations if needed
};

export default nextConfig;
