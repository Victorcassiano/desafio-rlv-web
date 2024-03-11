/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { remotePatterns: [{ hostname: 'agenciadenoticias.ibge.gov.br', protocol: 'https' }] }
};

export default nextConfig;
