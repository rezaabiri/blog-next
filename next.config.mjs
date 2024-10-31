/** @type {import('next').NextConfig} */
const nextConfig = {
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
