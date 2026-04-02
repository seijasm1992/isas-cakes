import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.href ?? 'https://isascakes.com/';

  const robotsTxt = [
    'User-agent: *',
    'Allow: /',
    '',
    'Disallow: /api/',
    '',
    `Sitemap: ${siteUrl}sitemap-index.xml`,
  ].join('\n');

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
