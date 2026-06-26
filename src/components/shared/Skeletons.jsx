import React from 'react';

export function Skeleton({ className = '', variant = 'rect' }) {
  const baseClasses = 'bg-outline-variant/30 animate-pulse';
  const variantClasses = variant === 'circle' ? 'rounded-full' : 'rounded-[12px]';
  return <div className={`${baseClasses} ${variantClasses} ${className}`} />;
}

export function BlogCardSkeleton() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-[16px] overflow-hidden flex flex-col h-full">
      {/* Thumbnail Skeleton */}
      <Skeleton className="aspect-video w-full" />

      {/* Content Skeleton */}
      <div className="p-6 flex flex-col flex-grow gap-4">
        {/* Category tag */}
        <Skeleton className="h-4 w-1/4" />
        
        {/* Title */}
        <Skeleton className="h-6 w-5/6" />
        
        {/* Description lines */}
        <div className="space-y-2.5">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        {/* Footer meta lines */}
        <div className="flex items-center justify-between pt-4 mt-auto border-t border-outline-variant/30">
          <div className="flex items-center gap-3">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="w-1 h-1 rounded-full" />
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="h-4 w-8" />
        </div>
      </div>
    </div>
  );
}

export function BlogPostSkeleton() {
  return (
    <div className="pb-12 max-w-container-max mx-auto px-gutter pt-8 md:pt-12">
      {/* Header Skeleton */}
      <div className="max-w-[800px] mx-auto text-center mb-10 flex flex-col items-center">
        <Skeleton className="h-6 w-24 rounded-full mb-6" />
        <Skeleton className="h-12 w-4/5 mb-4" />
        <Skeleton className="h-12 w-2/3 mb-6" />
        <Skeleton className="h-4 w-3/4 mb-8" />
        
        <div className="flex gap-4 items-center">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="w-1.5 h-1.5 rounded-full bg-outline-variant/20" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="w-1.5 h-1.5 rounded-full bg-outline-variant/20" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>

      {/* Featured Cover Image Skeleton */}
      <Skeleton className="w-full aspect-[16/9] mb-12 md:mb-16 rounded-[16px]" />

      {/* Body Columns Skeleton */}
      <div className="flex flex-col lg:flex-row gap-12 relative items-start">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 space-y-4">
          <Skeleton className="h-4 w-1/2 mb-6" />
          <Skeleton className="h-6 w-5/6" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-4/5" />
          <Skeleton className="h-6 w-2/3" />
        </aside>

        {/* Article Body */}
        <article className="flex-1 max-w-[700px] mx-auto space-y-8">
          <div className="space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-11/12" />
            <Skeleton className="h-5 w-full" />
          </div>

          <Skeleton className="h-8 w-1/2 my-8" />

          <div className="space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
          </div>

          <blockquote className="border-l-4 border-outline-variant/30 pl-6 py-2 my-8">
            <Skeleton className="h-6 w-5/6 mb-2" />
            <Skeleton className="h-6 w-2/3" />
          </blockquote>

          <div className="space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
          </div>
        </article>
      </div>
    </div>
  );
}
