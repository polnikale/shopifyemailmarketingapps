import { allPaths, siteFromHost } from '../content';

export async function GET({ request }: { request: Request }) {
  const site = siteFromHost();
  const base = `https://www.${site.domain}`;
  const urls = allPaths().map((path) => `  <url><loc>${base}/${path}</loc><lastmod>2026-07-04</lastmod><changefreq>${path ? 'weekly' : 'daily'}</changefreq><priority>${path ? '0.7' : '1.0'}</priority></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
}
