/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/my-factory/",
  basePath: "/my-factory",
  images: {
    loader: 'imgix',
    path: 'https://na-3180.imgix.net',
  },
}

module.exports = nextConfig
