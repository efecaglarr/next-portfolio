/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static optimization for pages that use document
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};
