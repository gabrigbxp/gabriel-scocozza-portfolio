/**
 * Returns the MUI spacing in px for a given multiplier by reading the CSS var `--mui-spacing`.
 * Falls back to undefined if cannot be resolved (e.g., SSR).
 */
export function getMuiSpacingPx(multiplier = 1): number | undefined {
  if (typeof window === 'undefined') return undefined;
  const root = document.documentElement;
  const cssValue = getComputedStyle(root).getPropertyValue('--mui-spacing').trim();
  if (!cssValue) return undefined;

  const value = parseFloat(cssValue);
  if (Number.isNaN(value)) return undefined;

  if (cssValue.endsWith('rem')) {
    const baseFontSize = parseFloat(getComputedStyle(root).fontSize);
    if (Number.isNaN(baseFontSize)) return undefined;
    return value * baseFontSize * multiplier;
  }

  return value * multiplier;
}
