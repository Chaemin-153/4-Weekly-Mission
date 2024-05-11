/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'img1.daumcdn.net',
      'yt3.googleusercontent.com',
      'velog.velcdn.com',
      'avatars.githubusercontent.com',
      'codeit-images.codeit.com',
      'codeit-frontend.codeit.com',
      'reactjs.org',
      'assets.vercel.com',
      'storybook.js.org',
      'testing-library.com',
      'static.cdninstagram.com',
      's.pstatic.net',
      'tanstack.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'codeit-images.codeit.com',
        pathname: '/api/**', //**는 해당 경로 뒤에 모든 경로,
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
