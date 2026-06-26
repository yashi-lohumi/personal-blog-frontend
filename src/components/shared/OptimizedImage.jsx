import React, { useState, useEffect } from 'react';
import { getOptimizedImageUrl, getImageSrcSet } from '../../utils/image';

export default function OptimizedImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
  loading = 'lazy',
  zoomOnHover = false,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [blurSrc, setBlurSrc] = useState('');

  useEffect(() => {
    if (src) {
      // Create a tiny 20px blur placeholder version on-the-fly
      setBlurSrc(getOptimizedImageUrl(src, 20));
    }
  }, [src]);

  const optimizedSrc = getOptimizedImageUrl(src, 1200); // default fallback width
  const srcSet = getImageSrcSet(src);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Tiny Blurred Placeholder */}
      {blurSrc && !isLoaded && (
        <img
          src={blurSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-[8px] scale-105 transition-opacity duration-500 z-10"
        />
      )}

      {/* Main High-res Image */}
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt || 'Blog article media'}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
        } ${zoomOnHover ? 'group-hover:scale-105 duration-500' : ''} ${className}`}
        {...props}
      />
    </div>
  );
}
