# Global Components

Build reusable React components.

Use Tailwind CSS.

Keep components modular.

Avoid page-specific duplication.

---

# Navbar

Props:

currentPage

Contains:

Logo

Home

Blogs

About

Contact

Subscribe button

Features:

Sticky

Transparent initially

White background on scroll

Hamburger menu on mobile

---

# Footer

Contains:

Logo

Description

Quick Links

Social Links

Copyright

---

# HeroSection

Props:

title

description

primaryCTA

secondaryCTA

image

socialLinks

---

# StatCard

Props:

icon

number

label

---

# BlogCard

Props:

image

category

title

description

date

readingTime

slug

---

# FeaturedBlogCard

Props:

image

title

description

date

readingTime

---

# CategoryPill

Props:

name

active

---

# Timeline

Props:

milestones

---

# TestimonialCard

Props:

image

name

designation

quote

---

# NewsletterCard

Props:

title

description

---

# SearchBar

Props:

placeholder

value

onChange

---

# FilterBar

Props:

categories

selectedCategory

---

# AuthorCard

Props:

image

name

bio

---

# SocialShare

Props:

url

title

---

# RelatedBlogCard

Props:

image

title

readingTime

---

# CommentCard

Props:

avatar

name

comment

---

# ExpertiseCard

Props:

icon

title

description

---

# AchievementCard

Props:

icon

title

description

---

# ValueCard

Props:

icon

title

description

---

# ContactInfoCard

Props:

icon

title

value

---

# ContactForm

Fields:

name

email

subject

message

submit

---

# FAQAccordion

Props:

question

answer

---

# SocialIconCard

Props:

icon

platform

url

---

# Common Tailwind Rules

Use:

rounded-2xl

border

shadow-sm

hover:shadow-md

transition-all

duration-300

hover:-translate-y-1

space-y-8

gap-6

Avoid inline styles.

---

# Recommended Folder Structure

src/

components/

layout/

Navbar.jsx

Footer.jsx

sections/

HeroSection.jsx

TrustIndicators.jsx

FeaturedArticles.jsx

Timeline.jsx

Newsletter.jsx

cards/

BlogCard.jsx

StatCard.jsx

TestimonialCard.jsx

AuthorCard.jsx

ExpertiseCard.jsx

AchievementCard.jsx

ValueCard.jsx

forms/

SearchBar.jsx

ContactForm.jsx

FAQAccordion.jsx

shared/

CategoryPill.jsx

SocialShare.jsx

SocialIconCard.jsx

pages/

Home.jsx

Blogs.jsx

BlogPost.jsx

About.jsx

Contact.jsx

data/

blogs.js

testimonials.js

timeline.js

categories.js

constants.js

assets/

images/

icons/