/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SECRET_KEY: process.env.SECRET_KEY,
    },
    images: {
        domains: ['offerja.ir', 'cdn.dummyjson.com', 'images.unsplash.com', 'www.melipayamak.com'],
        /*remotePatterns: [
            {
                protocol: "https",
                hostname: "offerja.ir",
                port: "",
                pathname: "/products/images/!**",
            },
        ],*/
    },
};

export default nextConfig;
