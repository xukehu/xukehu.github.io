export const prerender = true;

export async function GET() {
  const site = (import.meta.env.PUBLIC_SITE_URL || import.meta.env.SITE || 'https://uhuohuy.github.io').replace(/\/$/, '');
  const base = (import.meta.env.PUBLIC_BASE_PATH || '/').replace(/\/$/, '');
  const basePath = base && base !== '/' ? base : '';
  const effectiveBase = basePath && site.endsWith(basePath) ? '' : basePath;

  const routes = [
    '/',
    '/about/',
    '/publications/',
    '/projects/',
    '/teaching/',
    '/service/',
    '/awards/',
    '/cv/',
    '/contact/'
  ];

  const withBase = (path: string) => {
    if (!effectiveBase) return path;
    return `${effectiveBase}${path}`;
  };

  const urls = routes.map((route) => `${site}${withBase(route)}`);

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n') +
    `\n</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
