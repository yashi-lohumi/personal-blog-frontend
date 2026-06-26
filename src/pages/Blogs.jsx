import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import BlogCard from '../components/cards/BlogCard';
import SearchBar from '../components/forms/SearchBar';
import CategoryPill from '../components/shared/CategoryPill';
import Newsletter from '../components/sections/Newsletter';
import FadeIn from '../components/shared/FadeIn';
import { blogs } from '../data/blogs';
import { categories } from '../data/categories';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import OptimizedImage from '../components/shared/OptimizedImage';
import { BlogCardSkeleton } from '../components/shared/Skeletons';

export default function Blogs() {
  const location = useLocation();
  const navigate = useNavigate();

  // Search and Category states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const postsPerPage = 6;

  // Development-only simulated loading delay
  useEffect(() => {
    if (import.meta.env.DEV) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [selectedCategory, searchQuery, currentPage]);

  // Recover selected category from route state if user clicked a category pill on the home page
  useEffect(() => {
    if (location.state && location.state.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
      // Clear the state so refreshing doesn't lock it
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Handle resets when filters change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Filter logic
  const filteredBlogs = blogs.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Featured Story (the first matching blog post if no filters are active, or the absolute first blog)
  const featuredStory = blogs[0];

  // Exclude featured story from main grid ONLY if there are no search or category filters active, to avoid duplication.
  const isFiltering = searchQuery !== '' || selectedCategory !== 'All';
  const gridBlogs = isFiltering 
    ? filteredBlogs 
    : filteredBlogs.filter(post => post.slug !== featuredStory.slug);

  // Pagination calculations
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = gridBlogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(gridBlogs.length / postsPerPage) || 1;

  // Scroll to grid top on page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const gridElement = document.getElementById('blog-grid-section');
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Popular Topics (tags)
  const popularTopics = [
    "Artificial Intelligence",
    "UI Design",
    "Fintech Strategy",
    "Future of Work",
    "Crypto & Web3",
    "Engineering"
  ];

  // Recent Posts (excluding current ones if appropriate, show latest 3)
  const recentPosts = blogs.slice(0, 3);

  return (
    <div className="pt-8 md:pt-16 pb-12">
      {/* Page Header & Search */}
      <header className="max-w-container-max mx-auto px-gutter mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-stack-lg">
          <div className="max-w-2xl">
            <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface mb-stack-md leading-tight">
              Insights &amp; Perspectives
            </h1>
            <p className="font-body-large text-body-large text-on-surface-variant leading-relaxed">
              Deep dives into the future of technology, design, leadership, and startup strategy.
            </p>
          </div>
          
          <SearchBar
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search articles..."
          />
        </div>

        {/* Category Pills list */}
        <div className="flex flex-wrap gap-2 mt-10">
          <CategoryPill
            name="All posts"
            active={selectedCategory === 'All'}
            onClick={() => handleCategoryChange('All')}
          />
          {categories.map((cat, idx) => (
            <CategoryPill
              key={idx}
              name={cat}
              active={selectedCategory === cat}
              onClick={() => handleCategoryChange(cat)}
            />
          ))}
        </div>
      </header>

      {/* Featured Story - Display only when no search/filters are active */}
      {!isFiltering && featuredStory && (
        <FadeIn>
          <section className="max-w-container-max mx-auto px-gutter mb-section-v-space">
            <Link to={`/blogs/${featuredStory.slug}`} className="group block">
              <div className="relative bg-surface-container-lowest border border-outline-variant rounded-[16px] overflow-hidden flex flex-col lg:flex-row hover:shadow-xl transition-all duration-300">
                <div className="lg:w-3/5 h-80 lg:h-auto overflow-hidden">
                  <OptimizedImage
                    wrapperClassName="w-full h-full"
                    className="group-hover:scale-[1.02] transition-transform duration-700"
                    src={featuredStory.image}
                    alt={`Cover photo for featured article: ${featuredStory.title}`}
                  />
                </div>
                <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center gap-stack-md">
                  <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-semibold block">
                    Featured Story • {featuredStory.readTime}
                  </span>
                  <h2 className="font-headline-section text-headline-section text-on-surface leading-tight group-hover:text-primary transition-colors">
                    {featuredStory.title}
                  </h2>
                  <p className="font-body-base text-body-base text-on-surface-variant leading-relaxed line-clamp-4">
                    {featuredStory.description}
                  </p>
                  <div className="pt-4">
                    <span className="bg-primary text-on-primary px-8 py-3.5 rounded-[14px] font-bold text-meta-info hover:opacity-90 inline-flex items-center gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        </FadeIn>
      )}

      {/* Main Grid + Sidebar Section */}
      <section id="blog-grid-section" className="max-w-container-max mx-auto px-gutter mb-section-v-space scroll-mt-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Grid column */}
          <div className="lg:w-3/4 flex flex-col gap-12">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: postsPerPage }).map((_, idx) => (
                  <BlogCardSkeleton key={idx} />
                ))}
              </div>
            ) : currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
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
            ) : (
              <div className="border border-dashed border-outline-variant p-16 rounded-[16px] text-center max-w-lg mx-auto w-full bg-white">
                <p className="font-body-large text-body-large text-on-surface-variant mb-4">No articles found matching your criteria.</p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold text-meta-info"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center items-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="p-3 border border-outline-variant rounded-full text-on-surface hover:bg-surface-variant transition-colors disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-12 h-12 rounded-full font-bold flex items-center justify-center transition-colors ${
                      currentPage === page
                        ? 'bg-primary text-on-primary'
                        : 'border border-outline-variant text-on-surface hover:bg-surface-variant'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="p-3 border border-outline-variant rounded-full text-on-surface hover:bg-surface-variant transition-colors disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 flex flex-col gap-10">
              {/* Popular Topics */}
              <div className="bg-surface-container-lowest p-6 border border-outline-variant rounded-[16px] shadow-sm">
                <h4 className="font-headline-subsection text-headline-subsection text-on-surface mb-6">Popular Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {popularTopics.map((topic, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCategoryChange(topic)}
                      className={`px-3 py-1.5 rounded-full text-meta-info font-meta-info transition-colors ${
                        selectedCategory === topic
                          ? 'bg-primary text-on-primary'
                          : 'bg-surface-container text-on-surface-variant hover:text-primary'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-surface-container-lowest p-6 border border-outline-variant rounded-[16px] shadow-sm">
                <h4 className="font-headline-subsection text-headline-subsection text-on-surface mb-6">Recent Posts</h4>
                <ul className="flex flex-col gap-6">
                  {recentPosts.map((post) => (
                    <li key={post.slug}>
                      <Link to={`/blogs/${post.slug}`} className="group block">
                        <span className="font-meta-info text-meta-info text-primary block mb-1 font-semibold uppercase">{post.date}</span>
                        <span className="font-body-base text-body-base text-on-surface font-semibold group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}
