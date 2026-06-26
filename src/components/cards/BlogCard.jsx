import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import OptimizedImage from '../shared/OptimizedImage';

export default function BlogCard({ image, category, title, description, date, readingTime, slug }) {
  return (
    <Link to={`/blogs/${slug}`} className="group block">
      <article className="bg-surface-container-lowest border border-outline-variant rounded-[16px] overflow-hidden hover:border-outline hover:shadow-md transition-all duration-300 flex flex-col h-full">
        {/* Image wrapper */}
        <div className="aspect-video overflow-hidden relative">
          <OptimizedImage
            wrapperClassName="w-full h-full"
            src={image}
            alt={`Cover photo for ${title}`}
            zoomOnHover={true}
          />
        </div>

        {/* Content block */}
        <div className="p-6 flex flex-col flex-grow gap-3">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider font-semibold block">
            {category}
          </span>
          <h3 className="font-headline-subsection text-[20px] text-on-surface leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="font-body-base text-body-base text-on-surface-variant line-clamp-3 mb-auto">
            {description}
          </p>

          {/* Meta line */}
          <div className="flex items-center justify-between pt-4 mt-2 border-t border-outline-variant/30 text-meta-info font-meta-info text-outline">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {date}
              </span>
              <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {readingTime}
              </span>
            </div>
            <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-bold text-xs uppercase tracking-widest">
              Read <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
