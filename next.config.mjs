/** @type {import('next').NextConfig} */
const withTM = import('next-transpile-modules')([
      '@mui/material',
      '@mui/system',
      '@mui/icons-material', 
]);

module.exports = withTM({
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
       '@mui/styled-engine': '@mui/styled-engine-sc',
       };
       return config;
     }
});

export default nextConfig;
