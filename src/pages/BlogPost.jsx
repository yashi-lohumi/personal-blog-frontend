import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Share2, Link as LinkIcon, ChevronLeft, ChevronRight, MessageSquare, ThumbsUp, Send } from 'lucide-react';
import SocialShare from '../components/shared/SocialShare';
import AuthorCard from '../components/cards/AuthorCard';
import BlogCard from '../components/cards/BlogCard';
import Newsletter from '../components/sections/Newsletter';
import FadeIn from '../components/shared/FadeIn';
import { blogs } from '../data/blogs';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  // Comments state
  const [commentsList, setCommentsList] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  // Table of contents active section tracking
  const [activeSection, setActiveSection] = useState('introduction');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Load post details and initialize comments
  useEffect(() => {
    const currentPost = blogs.find((b) => b.slug === slug) || blogs[0];
    setPost(currentPost);
    setCommentsList(currentPost.comments || []);
  }, [slug]);

  // Track progress bar width and Table of Contents highlights on scroll
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);

      // Section highlighters
      if (post && post.sections) {
        const headings = post.sections.filter(s => s.type.startsWith('heading') || s.id === 'introduction');
        let current = 'introduction';
        
        for (const heading of headings) {
          const el = document.getElementById(heading.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            // If heading top is near the top of the viewport
            if (rect.top <= 160) {
              current = heading.id;
            }
          }
        }
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  if (!post) {
    return (
      <div className="py-24 text-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="font-body-large text-body-large text-on-surface-variant">Loading article...</p>
      </div>
    );
  }

  // Related articles lookups
  const relatedArticles = blogs.filter((b) => post.relatedSlugs?.includes(b.slug));

  // Handle comment submit
  const handlePostComment = (e) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    setIsPosting(true);
    setTimeout(() => {
      const newComment = {
        id: Date.now(),
        name: "Anonymous Reader",
        time: "Just now",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8tEX9H_-zaZQLiZJS3i9Ez3_EoOqj6GXXBJ5eaPpXqczR0l0yc_SLCLDXBjX014iqgsZko6v4pelSNH8XI6at7ie3SHU5CwWNzaL0CPPfbibH_dq57YewtGvez0DhTstKtnxzzrGalhoGIS_kC-Fx1lOkJ_dZEFQKwIXHA2aDoOvwv2IabVmB2j9Iy8goJ5pdPm43Ou_tYg3aBAT1--5XAzY2MwtpnjkICKtSUk-0nz3MVGCXuxM2VlSC0VagOOH9mB9io0Ea-rVr", // Default placeholder
        comment: newCommentText,
        replies: []
      };

      setCommentsList((prev) => [...prev, newComment]);
      setNewCommentText('');
      setIsPosting(false);
    }, 800);
  };

  // Toc list extraction
  const tocSections = post.sections.filter(s => s.type === 'heading2' || s.id === 'introduction');

  // Related articles scroll handler
  const scrollRelated = (direction) => {
    const el = document.getElementById('related-articles-scroll');
    if (el) {
      const offset = direction === 'left' ? -320 : 320;
      el.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-12">
      {/* 1. Sticky top reading progress indicator */}
      <div className="article-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      <div className="max-w-container-max mx-auto px-gutter pt-8 md:pt-12">
        {/* 2. Blog Header */}
        <header className="max-w-[800px] mx-auto text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-surface-container-high text-primary font-label-caps text-label-caps rounded-full mb-6 uppercase tracking-widest font-semibold">
            {post.category}
          </span>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero mb-6 leading-tight text-on-surface">
            {post.title}
          </h1>
          <p className="font-body-large text-body-large text-on-surface-variant mb-8 max-w-2xl mx-auto leading-relaxed">
            {post.description}
          </p>
          
          <div className="flex items-center justify-center gap-4 text-meta-info font-meta-info text-on-surface-variant">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="w-1.5 h-1.5 bg-outline-variant rounded-full"></span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
            <span className="w-1.5 h-1.5 bg-outline-variant rounded-full"></span>
            <span className="font-bold text-on-surface">By {post.author.name}</span>
          </div>
        </header>

        {/* 3. Featured Image */}
        <div className="w-full aspect-[16/9] mb-12 md:mb-16 rounded-xl overflow-hidden border border-outline-variant shadow-sm">
          <img className="w-full h-full object-cover" src={post.image} alt={post.title} />
        </div>

        {/* 4. Two column content block */}
        <div className="flex flex-col lg:flex-row gap-12 relative items-start">
          {/* Sticky Left Sidebar (Table of Contents & share) */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-28 self-start">
            <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4 tracking-widest opacity-60 font-bold">
              In this article
            </h4>
            <nav className="flex flex-col gap-3 border-l border-outline-variant/60">
              {tocSections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={`pl-4 py-1 text-meta-info font-meta-info border-l-2 -ml-[1px] transition-all duration-200 block ${
                    activeSection === sec.id
                      ? 'text-primary font-bold border-primary'
                      : 'text-on-surface-variant border-transparent hover:text-primary'
                  }`}
                >
                  {sec.title}
                </a>
              ))}
            </nav>

            <div className="mt-12 p-6 bg-surface-container-low border border-outline-variant rounded-xl shadow-sm">
              <p className="font-meta-info text-meta-info text-on-surface mb-4 font-semibold">Share with your network</p>
              <SocialShare url={window.location.href} title={post.title} />
            </div>
          </aside>

          {/* Core Blog Content (max 700px readable width) */}
          <article className="flex-1 max-w-[700px] mx-auto overflow-hidden">
            <div className="space-y-6">
              {post.sections.map((section, idx) => {
                switch (section.type) {
                  case 'prose':
                    return (
                      <p
                        key={idx}
                        id={section.id}
                        className="font-body-large text-body-large text-on-surface-variant leading-relaxed mb-6"
                      >
                        {section.content}
                      </p>
                    );
                  case 'heading2':
                    return (
                      <h2
                        key={idx}
                        id={section.id}
                        className="font-headline-section text-[28px] md:text-headline-section text-on-surface mb-4 mt-8 font-bold leading-tight scroll-mt-28"
                      >
                        {section.content}
                      </h2>
                    );
                  case 'heading3':
                    return (
                      <h3
                        key={idx}
                        id={section.id}
                        className="font-headline-subsection text-headline-subsection text-on-surface mb-3 mt-6 font-semibold scroll-mt-28"
                      >
                        {section.content}
                      </h3>
                    );
                  case 'quote':
                    return (
                      <blockquote
                        key={idx}
                        className="relative pl-6 py-2 border-l-4 border-primary font-headline-subsection text-on-surface-variant italic leading-relaxed my-8"
                      >
                        "{section.content}"
                      </blockquote>
                    );
                  case 'callout':
                    return (
                      <div
                        key={idx}
                        className="bg-primary-container/10 border-l-4 border-primary p-8 rounded-r-xl my-8 shadow-sm"
                      >
                        <h4 className="font-headline-subsection text-body-large font-bold text-on-surface mb-2">
                          {section.title}
                        </h4>
                        <p className="font-body-base text-body-base text-on-surface-variant leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    );
                  case 'stats':
                    return (
                      <div key={idx} className="grid grid-cols-2 gap-stack-md my-8">
                        {section.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-surface p-6 border border-outline-variant rounded-xl text-center shadow-sm"
                          >
                            <span className="block text-primary font-display-hero-mobile text-display-hero-mobile font-bold">
                              {metric.value}
                            </span>
                            <span className="text-meta-info font-meta-info uppercase tracking-wider font-semibold text-on-surface-variant">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    );
                  case 'image':
                    return (
                      <figure key={idx} className="my-8 text-center">
                        <div className="w-full h-80 md:h-[400px] rounded-xl overflow-hidden border border-outline-variant shadow-sm">
                          <img
                            className="w-full h-full object-cover"
                            src={section.imageUrl}
                            alt={section.title}
                          />
                        </div>
                        {section.caption && (
                          <figcaption className="mt-3 font-meta-info text-meta-info text-on-surface-variant italic">
                            {section.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  case 'list':
                    return (
                      <ul key={idx} className="space-y-4 my-6 pl-2">
                        {section.items.map((item, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-4">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></span>
                            <span className="font-body-base text-body-base text-on-surface-variant leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>

            {/* Author Profile block */}
            <AuthorCard
              image={post.author.image}
              name={post.author.name}
              role={post.author.role}
              bio={post.author.bio}
            />
          </article>
        </div>

        {/* 5. Related Articles slider */}
        {relatedArticles.length > 0 && (
          <section className="mt-section-v-space border-t border-outline-variant pt-section-v-space">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline-section text-headline-section text-on-surface">
                Related Articles
              </h3>
              
              <div className="flex gap-2">
                <button
                  onClick={() => scrollRelated('left')}
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center bg-white hover:bg-primary hover:text-white transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollRelated('right')}
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center bg-white hover:bg-primary hover:text-white transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div
                id="related-articles-scroll"
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-4"
              >
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.slug}
                    className="shrink-0 w-[280px] md:w-[calc(33.33%-16px)] snap-start"
                  >
                    <BlogCard
                      image={rel.image}
                      category={rel.category}
                      title={rel.title}
                      description={rel.description}
                      date={rel.date}
                      readingTime={rel.readTime}
                      slug={rel.slug}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6. Comments Section */}
        <section className="mt-section-v-space max-w-[700px] mx-auto border-t border-outline-variant/30 pt-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-headline-section text-headline-section text-on-surface flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-primary" /> Comments ({commentsList.length})
            </h3>
          </div>

          <div className="space-y-8">
            {commentsList.map((comm) => (
              <div key={comm.id} className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <img className="w-full h-full object-cover" src={comm.avatar} alt={comm.name} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold font-meta-info text-meta-info text-on-surface">{comm.name}</span>
                      <span className="text-on-surface-variant font-meta-info text-meta-info text-xs opacity-60">
                        {comm.time}
                      </span>
                    </div>
                    <p className="font-body-base text-body-base text-on-surface-variant leading-relaxed">
                      {comm.comment}
                    </p>
                  </div>
                </div>

                {/* Sub-replies */}
                {comm.replies && comm.replies.map((rep) => (
                  <div
                    key={rep.id}
                    className="flex gap-4 ml-12 border-l-2 border-surface-container-high pl-6 mt-2"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <img className="w-full h-full object-cover" src={rep.avatar} alt={rep.name} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold font-meta-info text-meta-info text-on-surface">{rep.name}</span>
                        <span className="text-on-surface-variant font-meta-info text-meta-info text-xs opacity-60">
                          {rep.time}
                        </span>
                      </div>
                      <p className="font-body-base text-body-base text-on-surface-variant leading-relaxed">
                        {rep.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* New Comment Form Box */}
          <form onSubmit={handlePostComment} className="mt-8 p-6 bg-white border border-outline-variant rounded-xl shadow-sm">
            <textarea
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              placeholder="Join the conversation..."
              required
              rows="4"
              className="w-full bg-surface border border-outline-variant rounded-lg p-4 font-body-base text-body-base text-on-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
            />
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                disabled={isPosting || !newCommentText.trim()}
                className="bg-primary text-on-primary px-8 py-2.5 rounded-full font-meta-info text-meta-info font-bold hover:opacity-90 transition-opacity active:scale-95 disabled:opacity-50 flex items-center gap-1.5"
              >
                {isPosting ? 'Posting...' : <><Send className="w-3.5 h-3.5" /> Post Comment</>}
              </button>
            </div>
          </form>
        </section>
      </div>

      {/* Newsletter signup CTA banner */}
      <Newsletter />
    </div>
  );
}
