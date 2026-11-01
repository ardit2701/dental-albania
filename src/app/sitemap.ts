import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.maxillodent.al';
const LOCALES = ['sq', 'en', 'it'];

const ROUTES = [
  '',
  '/about',
  '/contact',
  '/dental-tourism',
  '/doctors',
  '/how-it-works',
  '/before-after',
  '/treatments',
  '/treatments/dental-implants',
  '/treatments/veneers',
  '/treatments/crowns',
  '/treatments/all-on-6',
  '/treatments/orthodontics',
  '/treatments/whitening',
  '/treatments/cleaning',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const route of ROUTES) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    }
  }

  return entries;
}
