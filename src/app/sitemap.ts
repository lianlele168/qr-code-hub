import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://qr-code-hub.app';

  const routes = [
    '',
    '/wifi-qr-code-generator',
    '/vcard-qr-code-generator',
    '/vector-svg-qr-code-generator',
    '/custom-logo-qr-code-generator',
    '/bulk-qr-code-generator',
    '/whatsapp-qr-code-generator',
    '/dynamic-vs-static-qr-code',
    '/privacy-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
