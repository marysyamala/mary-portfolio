import type { NextConfig } from "next";

// Static export hosted on a GitHub Pages project site:
// https://marysyamala.github.io/mary-portfolio
const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: "/mary-portfolio",
  images: { unoptimized: true },
};

export default nextConfig;
