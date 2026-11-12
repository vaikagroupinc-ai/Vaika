import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const NEXT_APP_DIR = path.join(ROOT, '.next', 'server', 'app');

const REQUIRED_EDITIONS = [
  { route: '', htmlFile: '(global).html', fallbackFile: 'index.html', lang: 'en', canonical: 'https://vaikagroup.com' },
  { route: 'us', htmlFile: '(intl-us)/us.html', lang: 'en-US', canonical: 'https://vaikagroup.com/us' },
  { route: 'uk', htmlFile: '(intl-uk)/uk.html', lang: 'en-GB', canonical: 'https://vaikagroup.com/uk' },
  { route: 'ca', htmlFile: '(intl-ca)/ca.html', lang: 'en-CA', canonical: 'https://vaikagroup.com/ca' },
  { route: 'au', htmlFile: '(intl-au)/au.html', lang: 'en-AU', canonical: 'https://vaikagroup.com/au' },
  { route: 'de', htmlFile: '(intl-de)/de.html', lang: 'de-DE', canonical: 'https://vaikagroup.com/de' },
  { route: 'de/en', htmlFile: '(intl-de-en)/de/en.html', lang: 'en-DE', canonical: 'https://vaikagroup.com/de/en' },
  { route: 'nz', htmlFile: '(intl-nz)/nz.html', lang: 'en-NZ', canonical: 'https://vaikagroup.com/nz' },
];

const EXPECTED_HREFLANGS = [
  'x-default',
  'en-US',
  'en-GB',
  'en-CA',
  'en-AU',
  'de-DE',
  'en-DE',
  'en-NZ',
];

let failures = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    failures += 1;
  } else {
    console.log(`PASS: ${message}`);
  }
}

function findHtml(candidates) {
  for (const rel of candidates) {
    const full = path.join(NEXT_APP_DIR, rel);
    if (fs.existsSync(full)) {
      return full;
    }
  }
  return null;
}

function main() {
  assert(fs.existsSync(NEXT_APP_DIR), `Built Next.js app directory exists at ${NEXT_APP_DIR}`);
  if (!fs.existsSync(NEXT_APP_DIR)) {
    process.exit(1);
  }

  const seenTitles = new Set();
  const seenDescriptions = new Set();

  for (const edition of REQUIRED_EDITIONS) {
    const candidates = [
      edition.htmlFile,
      edition.fallbackFile,
      edition.route ? `${edition.route}.html` : 'index.html',
    ].filter(Boolean);

    const htmlPath = findHtml(candidates);
    assert(Boolean(htmlPath), `Rendered HTML exists for /${edition.route}`);
    if (!htmlPath) continue;

    const html = fs.readFileSync(htmlPath, 'utf8');

    // 1. <html lang="...">
    const langMatch = html.match(/<html[^>]*\slang="([^"]+)"/i);
    assert(
      langMatch && langMatch[1] === edition.lang,
      `/${edition.route} emits <html lang="${edition.lang}"> (got "${langMatch?.[1] || 'none'}")`
    );

    // 2. Self-referencing canonical
    const canonicalMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i) ||
      html.match(/<link[^>]*href="([^"]+)"[^>]*rel="canonical"/i);
    assert(
      canonicalMatch && canonicalMatch[1] === edition.canonical,
      `/${edition.route} has canonical="${edition.canonical}" (got "${canonicalMatch?.[1] || 'none'}")`
    );

    // 3. Reciprocal hreflang tags (check both hrefLang and hreflang casing)
    for (const hl of EXPECTED_HREFLANGS) {
      const re1 = new RegExp(`<link[^>]*hrefLang="${hl}"[^>]*>`, 'i');
      assert(re1.test(html), `/${edition.route} includes hreflang="${hl}"`);
    }
    assert(!/hrefLang="en-UK"/i.test(html), `/${edition.route} does NOT use invalid en-UK`);

    // 4. Unique <title> and <meta name="description">
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/i) ||
      html.match(/<meta[^>]*content="([^"]+)"[^>]*name="description"/i);

    assert(Boolean(titleMatch?.[1]), `/${edition.route} has <title>`);
    assert(Boolean(descMatch?.[1]), `/${edition.route} has <meta name="description">`);

    if (titleMatch?.[1]) {
      assert(!seenTitles.has(titleMatch[1]), `/${edition.route} title is unique`);
      seenTitles.add(titleMatch[1]);
    }
    if (descMatch?.[1]) {
      assert(!seenDescriptions.has(descMatch[1]), `/${edition.route} meta description is unique`);
      seenDescriptions.add(descMatch[1]);
    }

    // 5. JSON-LD presence & India HQ accuracy
    assert(
      html.includes('application/ld+json') && html.includes('"addressCountry":"IN"'),
      `/${edition.route} includes JSON-LD anchored to India HQ (IN)`
    );
  }

  // 6. Verify /de vs /de/en division routes render distinctly with proper lang
  const deDivPath = findHtml(['(intl-de)/de/services/real-estate.html', 'de/services/real-estate.html']);
  const deEnDivPath = findHtml(['(intl-de-en)/de/en/services/real-estate.html', 'de/en/services/real-estate.html']);
  assert(Boolean(deDivPath), 'Rendered HTML exists for /de/services/real-estate');
  assert(Boolean(deEnDivPath), 'Rendered HTML exists for /de/en/services/real-estate');

  if (deDivPath) {
    const deHtml = fs.readFileSync(deDivPath, 'utf8');
    assert(/<html[^>]*\slang="de-DE"/i.test(deHtml), '/de/services/real-estate has lang="de-DE"');
    assert(
      deHtml.includes('Immobilienmedien') && deHtml.includes('Hauptsitz in Indien'),
      '/de/services/real-estate renders genuine German copy'
    );
  }
  if (deEnDivPath) {
    const deEnHtml = fs.readFileSync(deEnDivPath, 'utf8');
    assert(/<html[^>]*\slang="en-DE"/i.test(deEnHtml), '/de/en/services/real-estate has lang="en-DE"');
  }

  // 7. Verify sitemap.xml and robots.txt were generated in .next/server/app
  const sitemapPath = findHtml(['sitemap.xml.body', 'sitemap.xml']);
  const robotsPath = findHtml(['robots.txt.body', 'robots.txt']);
  assert(Boolean(sitemapPath), 'Generated sitemap.xml artifact exists');
  assert(Boolean(robotsPath), 'Generated robots.txt artifact exists');

  if (sitemapPath) {
    const sitemap = fs.readFileSync(sitemapPath, 'utf8');
    for (const edition of REQUIRED_EDITIONS) {
      assert(sitemap.includes(edition.canonical), `sitemap.xml includes ${edition.canonical}`);
    }
    assert(
      sitemap.includes('https://vaikagroup.com/de/en/services/real-estate'),
      'sitemap.xml includes /de/en/services/real-estate'
    );
  }

  console.log(`\nValidation complete: ${failures} failure(s).`);
  if (failures > 0) {
    process.exit(1);
  }
}

main();

