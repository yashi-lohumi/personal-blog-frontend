import React from 'react';
import BlogCard from '../cards/BlogCard';
import { blogs } from '../../data/blogs';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedArticles() {
  // Select first 3 articles as "Editor's Picks"
  const featured = blogs.slice(0, 3);

  return (
    <section className="max-w-container-max mx-auto px-gutter py-section-v-space-mobile md:py-section-v-space">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-2 font-semibold">
            Curated Insights
          </span>
          <h2 className="font-headline-section text-headline-section text-on-surface leading-tight">
            Editor's Picks
          </h2>
        </div>
        <Link
          to="/blogs"
          className="text-primary hover:text-primary-container font-bold font-meta-info text-meta-info flex items-center gap-2 group transition-colors duration-200"
        >
          View All Articles
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((post) => (
          <BlogCard
            key={post.slug}
            image={post.image}
            category={post.category}
            title={post.title}
            description={post.description}
            date={post.date}
            readingTime={post.readTime}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
}
