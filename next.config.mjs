/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['offerja.ir'],
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
