/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.rlogical.com", "pbs.twimg.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
