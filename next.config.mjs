/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    
    ]
  },
  allowedDevOrigins: ['http://192.168.1.202:3000'],
};
export default nextConfig;
