# Portfolio Content Structure - Quick Reference

## ✅ What's Been Created

### 1. Content Collections (`src/content/`)

Four collections for managing all portfolio content:

- **`concerts/`** - All performances (past, upcoming, featured highlights)
- **`organizations/`** - Positions, appointments, guest conducting, teaching
- **`repertoire/`** - Works you've conducted, organized by composer
- **`press/`** - Reviews, press coverage, media mentions

### 2. Schema Definitions (`src/content/config.ts`)

TypeScript schemas that validate your content and provide:

- Type safety (catches errors before publishing)
- Required fields enforcement
- Date validation
- Enum options for categories

### 3. Example Templates

Working examples for each content type:

**Concerts:**

- `example-featured.md` - Rich detail (program notes, media, reviews)
- `example-archive.md` - Standard format (essentials only)
- `example-upcoming.md` - Future performances

**Organizations:**

- `example-current.md` - Current Music Director position
- `example-past.md` - Previous Associate Conductor role
- `example-guest.md` - Guest conducting engagement
- `example-educational.md` - Teaching/masterclass work

**Repertoire:**

- `mahler-5.md` - Frequently performed work
- `brahms-4.md` - Standard repertoire entry

**Press:**

- `example-review.md` - Featured review with full text

### 4. Content Guide (`src/content/CONTENT-GUIDE.md`)

Complete documentation on how to add and manage content.

---

## 📋 Content Structure Overview

### Concerts Collection

```yaml
# Frontmatter Fields
title: 'Concert title'
date: YYYY-MM-DD
venue: 'Venue name'
location: 'City, State/Country'
orchestra: 'Orchestra name'
status: 'upcoming' or 'past'
featured: true/false # Rich detail vs. archive entry

# Optional for featured concerts
program: # List of works
  - composer: 'Name'
    work: 'Title'
    soloist: 'Optional'
media: # Photos, videos, recordings
  - type: 'video/photo/audio'
    url: 'URL'
    caption: 'Description'
reviews: # Press coverage
  - publication: 'Name'
    excerpt: 'Quote'
```

### Organizations Collection

```yaml
name: 'Organization name'
role: 'Your title'
type: 'current/past/guest/educational'
startDate: YYYY-MM-DD
endDate: YYYY-MM-DD # Optional (omit for current)
location: 'City, State'
website: 'URL' # Optional
order: 1 # Sorting (lower = higher priority)
```

### Repertoire Collection

```yaml
composer: 'Composer name'
work: 'Work title'
genre: 'symphonic/operatic/chamber/contemporary/choral/ballet/other'
timesPerformed: 8
firstPerformed: YYYY-MM-DD # Optional
lastPerformed: YYYY-MM-DD # Optional
notes: 'Brief note' # Optional
```

### Press Collection

```yaml
title: 'Review headline'
publication: 'Publication name'
author: 'Author name' # Optional
date: YYYY-MM-DD
excerpt: 'One paragraph excerpt'
url: 'Review URL' # Optional
concertId: 'filename' # Links to concert
featured: true/false # Show on homepage
```

---

## 🎯 Applying Portfolio Principles

Based on the portfolio anatomy article you provided:

### ✅ Personality

**How we're implementing it:**

- Personal narrative biography (first-person, storytelling)
- Program notes in featured concerts (share your artistic thinking)
- "Behind the music" insights in concert descriptions
- Your unique perspective on works in repertoire notes

**Example:**

❌ "I conducted Mahler's Fifth Symphony with the Boston Symphony."
✅ "Mahler's Fifth has been a constant companion in my artistic journey. This performance with the BSO marked a turning point in how I approach the Adagietto—not as sentimental wallowing, but as profound meditation..."

### ✅ Capabilities

**How we're demonstrating it:**

- **Rich concert entries** show your approach and reasoning
- **Repertoire list** proves breadth and depth
- **Media gallery** (videos, photos) demonstrates your work
- **Reviews** validate your abilities through third-party voices

### ✅ Services/Offerings

**What people can hire you for:**

- Music Director/Principal Conductor positions
- Guest conducting engagements
- Masterclasses and educational workshops
- Repertoire specialties (Mahler, contemporary music, etc.)

**Implemented through:**

- Clear contact/booking page with CTA
- Current positions showing active work
- Educational section showing teaching experience

### ✅ Purpose & Call to Action

**Your stated purpose:** "Showcase artistry and build reputation"

**Primary CTAs:**

1. **View performances** → Portfolio-first landing page
2. **Explore media** → Videos and photos prominent
3. **Contact for bookings** → Clear throughout site

**Secondary CTAs:**

- Download CV (for formal submissions)
- View upcoming concerts (build anticipation)
- Read press coverage (social proof)

---

## 📁 File Organization

```
src/content/
├── concerts/
│   ├── 2024-03-15-mahler-symphony-5.md
│   ├── 2024-01-20-brahms-symphony-4.md
│   └── 2025-05-10-beethoven-symphony-9.md
├── organizations/
│   ├── metropolitan-chamber-orchestra.md
│   ├── austin-symphony.md
│   └── london-symphony-guest.md
├── repertoire/
│   ├── mahler-symphony-5.md
│   ├── brahms-symphony-4.md
│   └── beethoven-symphony-9.md
├── press/
│   ├── 2024-03-16-boston-globe-mahler.md
│   └── 2024-02-01-classical-review.md
└── config.ts
```

---

## 🚀 Getting Started

### Phase 1: Foundation (Start Here)

1. **Write your biography** (`/src/pages/about.astro`)
   - Personal narrative style
   - Tell your story
   - Show personality

2. **Add 1-2 current organizations**
   - Your primary Music Director role
   - Most recent guest engagement

3. **Add 3-5 featured concerts**
   - Your best/most significant performances
   - Include program notes
   - Add media if available

### Phase 2: Build Out

4. **Expand concert archive**
   - Add more past performances (standard format)
   - Add upcoming concerts

5. **Build repertoire list**
   - Start with most-performed works
   - Add notes for significant pieces

6. **Add press coverage**
   - Featured reviews
   - Notable mentions

### Phase 3: Polish

7. **Media gallery**
   - Performance photos
   - Conducting videos
   - Recordings

8. **Complete organizations**
   - All past positions
   - Guest conducting history
   - Educational work

---

## 💡 Content Writing Tips

### For Featured Concerts

**Include:**

- Why you chose this program
- Your interpretative approach
- Rehearsal insights
- Audience/critical reception
- What made it special

**Structure:**

```markdown
## Program Notes

[Your artistic vision for the program]

## Artistic Approach

[Specific interpretative choices]

## Reception

[Quotes, reviews, audience response]
```

### For Organizations

**Tell the story:**

- What you've accomplished
- Your vision for the ensemble
- Notable performances or initiatives
- Impact on the organization

### For Repertoire

**Share your connection:**

- How many times performed
- When you first conducted it
- What it means to you
- Interpretative philosophy

---

## 🔄 Maintenance

### Regular Updates

- **After each performance:** Add to concert archive
- **New positions:** Update organizations
- **Press coverage:** Add reviews as they publish
- **Repertoire:** Update performance counts

### Content Freshness

Keep the site alive with:

- Upcoming concerts (shows you're active)
- Recent press (builds credibility)
- New media (engaging visual content)

---

## 📊 What Astro Does Automatically

Once you add markdown files, Astro will:

- ✅ Parse frontmatter metadata
- ✅ Validate against schemas
- ✅ Generate pages/routes
- ✅ Sort by date
- ✅ Filter by status (upcoming/past)
- ✅ Group by type (current/past organizations)
- ✅ Build navigation
- ✅ Optimize images
- ✅ Create search functionality

**You just write markdown. Astro handles the rest.**

---

## 🎨 Design Integration

Content will be displayed following design principles from `CLAUDE.md`:

- **Cream backgrounds** for elevated content (featured concerts)
- **Forest green accents** for CTAs and highlights
- **Serif typography** for concert titles and quotes
- **Generous whitespace** between entries
- **Dashed dividers** between major sections

---

## Next Steps

1. Review the example files in `src/content/`
2. Read the full guide: `src/content/CONTENT-GUIDE.md`
3. Start writing your biography
4. Add your first real concert entry
5. Build from there!

**No CMS needed. Just markdown files. Simple and powerful.** ✨
