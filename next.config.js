/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: { domains: ["russianwarship.rip"] },
};

module.exports = nextConfig;
