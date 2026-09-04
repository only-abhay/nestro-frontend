/** @type {import('next').NextConfig} */
const nextConfig = {

images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"res.cloudinary.com",
      },
    ],
},
async rewrites() {
  return [
    {
      source: "/api/:path*",
      destination: `${process.env.NEXT_PUBLIC_CATEGORY_URL}/:path*`,
    },
  ];
},
};

export default nextConfig;
