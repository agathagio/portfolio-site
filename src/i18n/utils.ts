import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'pt') return 'pt';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Prefix a path with the locale (en has no prefix). */
export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'en' ? clean : `/pt${clean === '/' ? '' : clean}`;
}

/** Given the current URL, return the path to the same page in the other locale. */
export function altLangPath(url: URL, lang: Lang): string {
  const other: Lang = lang === 'en' ? 'pt' : 'en';
  let path = url.pathname;
  if (lang === 'pt') {
    path = path.replace(/^\/pt/, '') || '/';
  }
  return localizedPath(other, path);
}
