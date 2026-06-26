/**
 * Generates an optimized Google User Content URL with custom width and WebP format format.
 * Falls back to original URL if it's not a Google User Content host.
 * 
 * @param {string} url - Original image URL
 * @param {number} width - Requested width in pixels
 * @returns {string} Optimized URL
 */
export function getOptimizedImageUrl(url, width) {
  if (!url) return '';
  if (url.includes('googleusercontent.com')) {
    // Strip any existing query params or format specifiers
    const baseUrl = url.split('=')[0];
    return `${baseUrl}=w${width}-rw`;
  }
  return url;
}

/**
 * Generates a responsive srcset string for Google User Content URLs.
 * 
 * @param {string} url - Original image URL
 * @returns {string|undefined} srcset string or undefined
 */
export function getImageSrcSet(url) {
  if (!url || !url.includes('googleusercontent.com')) return undefined;
  const baseUrl = url.split('=')[0];
  return `
    ${baseUrl}=w400-rw 400w,
    ${baseUrl}=w800-rw 800w,
    ${baseUrl}=w1200-rw 1200w,
    ${baseUrl}=w1600-rw 1600w
  `.trim().replace(/\s+/g, ' ');
}
