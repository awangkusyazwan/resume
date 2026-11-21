import { colorModeQueryParamCheck } from 'braid-design-system/color-mode/query-param';

const STORAGE_KEY = 'resume:color-mode';

export type ColorMode = 'light' | 'dark';

/**
 * Braid applies dark mode via a generated class on the <html> element.
 * The class name is exposed in Braid's color-mode script, so extract it
 * rather than hard-coding a value that changes between Braid versions.
 */
const darkModeClassName = colorModeQueryParamCheck.match(
  /document\.documentElement\.classList\.add\('([^']+)'\)/,
)?.[1];

const isColorMode = (value: string | null): value is ColorMode =>
  value === 'light' || value === 'dark';

export const getColorMode = (): ColorMode => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (isColorMode(stored)) {
    return stored;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const applyColorMode = (mode: ColorMode) => {
  if (typeof document === 'undefined' || !darkModeClassName) {
    return;
  }

  document.documentElement.classList.toggle(darkModeClassName, mode === 'dark');
  document.documentElement.style.colorScheme = mode;
};

export const setColorMode = (mode: ColorMode) => {
  applyColorMode(mode);

  try {
    window.localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    // Ignore storage failures (e.g. private browsing restrictions).
  }
};

/**
 * Runs before paint to avoid a flash of the wrong color mode. The printable
 * route is always rendered in light mode so it prints correctly.
 */
export const colorModeInitializationScript = darkModeClassName
  ? `
(() => {
  try {
    if (/\\/printable(?:\\/|$)/.test(location.pathname)) {
      return;
    }

    const stored = localStorage.getItem('${STORAGE_KEY}');
    const isDark = stored
      ? stored === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;

    document.documentElement.classList.toggle('${darkModeClassName}', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  } catch {
    // Ignore storage/matchMedia failures.
  }
})();
`
  : '';
