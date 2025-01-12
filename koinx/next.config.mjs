/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.coingecko.com", "mywebsite.whatever.com"],
    //  loader: 'imgix',
    //  path: 'https://assets.coingecko.com/',
  },
  env: {
    COIN_URI: process.env.COIN_URI,
    API_KEY: process.env.API_KEY,
  }
};

export default nextConfig;
