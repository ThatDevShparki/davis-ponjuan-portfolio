# Content Management Guide

This guide explains how to add and manage content for the Davis Ponjuan portfolio website.

## Content Structure

All content is stored as **Markdown files** with **frontmatter metadata** in the `src/content/` directory. No CMS required—just edit the markdown files!

### Directory Organization

```
src/content/
├── concerts/          # All performances (past, upcoming, featured)
├── organizations/     # Current & past positions, guest conducting
├── repertoire/        # Works you've conducted
├── press/            # Reviews and press coverage
└── config.ts         # Schema definitions (don't edit unless changing structure)
```

---

## 📅 Adding Concerts

### Location

`src/content/concerts/`

### Types of Concerts

1. **Featured Performances** (`featured: true`): Rich detail with program notes, media, reviews
2. **Archived Performances** (`featured: false`): Standard format with essentials
3. **Upcoming Concerts** (`status: 'upcoming'`): Future engagements

### Template: Featured Concert

Create a new file: `src/content/concerts/YYYY-MM-DD-short-title.md`

```markdown
---
title: 'Mahler Symphony No. 5 - Opening Night Gala'
date: 2024-03-15
venue: 'Symphony Hall'
location: 'Boston, MA'
orchestra: 'Boston Symphony Orchestra'
status: 'past' # or 'upcoming'
featured: true
coverImage: '/images/concerts/mahler-5-gala.jpg' # optional
program:
  - composer: 'Gustav Mahler'
    work: 'Symphony No. 5 in C-sharp minor'
  - composer: 'Richard Strauss'
    work: 'Don Juan, Op. 20'
    soloist: 'Optional soloist name' # optional
media: # optional
  - type: 'video'
    url: 'https://youtube.com/watch?v=example'
    caption: 'Full performance video'
  - type: 'photo'
    url: '/images/concerts/rehearsal.jpg'
    caption: 'Rehearsal photo'
reviews: # optional
  - publication: 'The Boston Globe'
    author: 'Jane Critic' # optional
    excerpt: 'A stunning interpretation...'
    url: 'https://bostonglobe.com/review' # optional
---

## Program Notes

Your detailed program notes and artistic approach go here...

## Artistic Choices

Discuss your interpretation, rehearsal process, etc...
```

### Template: Archive Concert (Simple)

```markdown
---
title: 'Brahms Symphony No. 4'
date: 2024-01-20
venue: 'Powell Hall'
location: 'St. Louis, MO'
orchestra: 'St. Louis Symphony Orchestra'
status: 'past'
featured: false
program:
  - composer: 'Johannes Brahms'
    work: 'Symphony No. 4 in E minor, Op. 98'
  - composer: 'Wolfgang Amadeus Mozart'
    work: 'Piano Concerto No. 23'
    soloist: 'Maria Hernandez, piano'
---

Brief note if needed, or leave blank.
```

### Template: Upcoming Concert

```markdown
---
title: 'Beethoven Symphony No. 9'
date: 2025-05-10
venue: 'Carnegie Hall'
location: 'New York, NY'
orchestra: 'New York Philharmonic'
status: 'upcoming'
featured: true # if it's a major engagement
program:
  - composer: 'Ludwig van Beethoven'
    work: 'Symphony No. 9 in D minor, Op. 125 "Choral"'
---

## Upcoming Performance

Details about the upcoming performance...

**Ticket Info**: [Link]
```

---

## 🏛️ Adding Organizations

### Location

`src/content/organizations/`

### Types

- `current`: Current positions
- `past`: Previous appointments
- `guest`: Guest conducting engagements
- `educational`: Teaching/masterclass roles

### Template

Create a new file: `src/content/organizations/organization-name.md`

```markdown
---
name: 'Metropolitan Chamber Orchestra'
role: 'Music Director & Principal Conductor'
type: 'current' # current | past | guest | educational
startDate: 2022-09-01
endDate: 2024-06-30 # optional (omit for current positions)
location: 'Chicago, IL'
website: 'https://metrochamborch.org' # optional
logo: '/images/organizations/logo.png' # optional
order: 1 # lower numbers appear first
---

Description of your work with this organization...

**Key Achievements**:

- Achievement 1
- Achievement 2

**Notable Performances**:

- Performance 1
- Performance 2
```

---

## 🎼 Adding Repertoire

### Location

`src/content/repertoire/`

### Template

Create a new file: `src/content/repertoire/composer-work.md`

```markdown
---
composer: 'Gustav Mahler'
work: 'Symphony No. 5 in C-sharp minor'
genre: 'symphonic' # symphonic | operatic | chamber | contemporary | choral | ballet | other
timesPerformed: 8
firstPerformed: 2019-03-15 # optional
lastPerformed: 2024-03-15 # optional
notes: 'Optional short note about significance' # optional
---

Optional longer description of your relationship with this work...
```

---

## 📰 Adding Press/Reviews

### Location

`src/content/press/`

### Template

Create a new file: `src/content/press/YYYY-MM-DD-publication-slug.md`

```markdown
---
title: 'Ponjuan Brings Fresh Perspective to Mahler'
publication: 'The Boston Globe'
author: 'Jane Critic' # optional
date: 2024-03-16
excerpt: 'A one-paragraph excerpt from the review...'
url: 'https://bostonglobe.com/arts/review' # optional
concertId: 'example-featured' # optional - links to concert file
featured: true # optional - shows on homepage
---

Full review text or extended quotes...

> "Pull quotes can be formatted like this."

Additional context about the review...
```

---

## 📄 Static Pages

### Biography (`src/pages/about.astro`)

Edit the biography page directly in `/src/pages/about.astro`. Use **personal narrative** style:

- Tell your story (first-person recommended)
- How you became a conductor
- Your musical philosophy
- What drives your artistry
- Current focus areas

### CV/Timeline (`src/pages/cv.astro`)

Will be built as an **interactive timeline** drawing from:

- Organizations collection
- Education milestones
- Awards and honors
- Major performances

### Contact (`src/pages/contact.astro`)

Contact form and booking inquiry information.

---

## 🖼️ Media Files

### Image Storage

Store images in `public/images/` organized by category:

```
public/images/
├── concerts/         # Performance photos
├── organizations/    # Orchestra logos
├── press/           # Press headshots
└── gallery/         # Media gallery photos
```

### Image Optimization

- Use web-optimized formats (WebP recommended, with JPG fallback)
- Resize images appropriately (hero images: 3000x1500px, thumbnails: 800x600px)
- Use descriptive filenames: `mahler-5-symphony-hall-2024.jpg`

---

## ✍️ Writing Content Guidelines

### From the Portfolio Anatomy Article

**Show Personality**:

❌ "I'm a conductor with extensive experience..."
✅ "From the first moment I picked up a baton at age 12, I knew conducting was my calling. Twenty years later, I still feel that same electric thrill when an orchestra brings a score to life..."

**Focus on Value**:

- What can audiences expect from your performances?
- What's your unique approach or perspective?
- Why should orchestras book you?

**Tell Stories**:

- Behind-the-scenes rehearsal insights
- How you discovered a particular work
- Memorable performance moments
- Your artistic philosophy in practice

### Content Tips

1. **Keep featured concerts rich**: Tell the story, share insights, include media
2. **Keep archives lean**: Just the facts for reference
3. **Update regularly**: Add upcoming concerts, update past performances
4. **Link related content**: Connect concerts to press reviews, repertoire lists
5. **Use consistent dates**: YYYY-MM-DD format in frontmatter

---

## 🔄 Workflow

### Adding a New Concert

1. Create new markdown file in `src/content/concerts/`
2. Copy template (featured or archive)
3. Fill in frontmatter metadata
4. Add program notes if featured
5. Save and commit to git
6. Site will rebuild automatically

### Updating Organizations

1. Navigate to `src/content/organizations/`
2. Edit existing markdown file or create new one
3. Update dates, achievements, or description
4. Save and commit

### Managing Repertoire

1. Add new works as you perform them
2. Update `timesPerformed` count
3. Update `lastPerformed` date
4. Add notes about significant performances

---

## 📁 File Naming Conventions

**Concerts**: `YYYY-MM-DD-short-title.md`

- Example: `2024-03-15-mahler-symphony-5.md`

**Organizations**: `organization-name.md`

- Example: `metropolitan-chamber-orchestra.md`

**Repertoire**: `composer-work-slug.md`

- Example: `mahler-symphony-5.md`

**Press**: `YYYY-MM-DD-publication-slug.md`

- Example: `2024-03-16-boston-globe-mahler-review.md`

---

## 🚀 Next Steps

1. **Start with Biography**: Write your personal narrative in `/src/pages/about.astro`
2. **Add Current Organizations**: Create markdown files for your current positions
3. **Add Featured Concerts**: 3-5 of your most significant performances
4. **Build Repertoire**: Start with your most-performed works
5. **Gather Press**: Add notable reviews

The site will automatically:

- Sort concerts by date
- Filter upcoming vs. past
- Display featured performances prominently
- Build your repertoire list
- Organize organizations by type
- Showcase press coverage

---

_Questions? The content structure is flexible and can be adjusted as needed._
