import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // basePath: "/portfolio-se", // Uncomment and set to your repo name if deploying to username.github.io/repo-name
};

export default nextConfig;
