/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.dummyjson.com'], // هاست‌های مجاز برای بارگذاری تصاویر
    },
    trailingSlash: true,
    distDir: 'build',
    generateBuildId: async () => {
        return "develop"
    },
};

module.exports = nextConfig
