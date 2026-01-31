# Davis Ponjuan Portfolio - CLAUDE.md

This file contains design context and guidelines for AI-assisted development of this project.

## Design Context

### Users

**Primary Audience:**

- **Fellow Professional Musicians**: Peers in the classical music world evaluating artistry and musicianship
- **Potential Employers**: Orchestras, venues, and music organizations considering Davis for conducting engagements
- **Fans & Supporters**: Audience members and supporters following his work and performances

**User Context:**
Users visit to evaluate Davis's credibility as a professional conductor and musician, explore his repertoire and past performances, and potentially inquire about bookings or collaborations.

**Job to be Done:**

1. Assess musical credentials and experience
2. Understand artistic style and repertoire range
3. View past performances and collaborations
4. Contact for booking inquiries

**Emotional Goals:**

- **Confidence**: Trust in professional mastery and technical precision
- **Elegance**: Appreciation for classical sophistication and refined taste
- **Inspiration**: Interest piqued by distinctive artistic voice
- **Ease**: Effortless navigation to find relevant information

### Brand Personality

**Voice & Tone:**

- Professional yet distinctive
- Classically sophisticated without being stuffy
- Precise and detail-oriented
- Memorable and bold in presentation

**Three-Word Personality:**
**Bold • Sophisticated • Precise**

**Emotional Character:**

- Classical elegance meets modern polish
- Technical mastery presented with confidence
- Traditional excellence with a distinctive voice
- Approachable professionalism (not intimidating)

### Aesthetic Direction

**Visual Tone:**
A refined, modern take on classical sophistication. Think concert hall elegance translated into contemporary web design—generous whitespace, precise typography, subtle yet purposeful interactions.

**Color Strategy:**

- **Foundation**: Neutral monochrome base (sophisticated grays, deep blacks, clean whites)
- **Accent**: Forest/emerald green for personality, highlights, and CTAs
  - Sophisticated yet unexpected
  - Fresh take on classical aesthetics
  - Natural elegance without being traditional
- **Palette Mood**: Timeless classical concert program meets modern design refinement

**Typography Focus:**

- Exceptional readability (bios, program notes, credentials)
- Hierarchy that guides the eye effortlessly
- Classic proportions with modern refinement
- Generous line-height and spacing for comfortable reading

**Interaction Style:**

- Subtle, purposeful animations (respect reduced motion)
- Smooth, elegant transitions
- Sophisticated micro-interactions
- Nothing that distracts from content

**Reference Inspiration:**

Links:

- <https://larsonstudio.com/> - Gallery minimalism, "white cube" approach, metadata-rich organization
- <https://www.hellojadey.com/> - Warm sophistication, jade accents, dashed divider system, intimate photography
- <https://www.berliner-philharmoniker.de/en/> - Institutional prestige, calendar interface, documentary photography
- <https://www.arsis-artists.com/en/artists/kirill-petrenko/> - Cream backgrounds, sidebar information blocks, press quote integration
- <https://www.arsis-artists.com/en/> - Artist agency sophistication, 24-column grid system, carousel patterns
- <https://kristianalexander.com/> - Conductor portfolio with teal accents, rotating testimonials, fixed navigation

**Key Design Takeaways from References:**

_Visual Strategy:_

- "Contemporary-Classical" balance: institutional gravitas meets approachable sophistication
- Gallery-first presentation letting photography dominate
- Cream/off-white (#fefbf5) backgrounds for warmth, not stark white
- Deep charcoal (#242424) text instead of harsh black
- Forest green accent replacing typical blues/teals found in references

_Layout Patterns:_

- 24-column desktop / 8-column mobile grid system
- Asymmetric balance with sidebar anchoring for metadata
- Full-bleed hero sections alternating with contained columns
- Variable gaps (11px, 14px, 20px, 25px, 40px, 80px)

_Typography Approach:_

- Serif headings (Marcellus-style) for classical authority
- Contemporary sans-serif (Roboto/Open Sans) for body
- Uppercase navigation with lighter weights (300)
- Generous line spacing prevents density

_Photography Treatment:_

- Professional portraits with consistent neutral backgrounds
- 3000×1500px aspect ratio for hero images
- Documentary style for performance shots (16:9 or 3:2)
- Mixed aspect ratios in galleries (1:1, 4:3, 16:9)

_Signature Elements to Adapt:_

- Rotating testimonial slider over hero imagery (from Kristian Alexander)
- Dashed SVG divider lines in forest green (inspired by Hello Jadey's jade)
- Press quote sidebar blocks on cream background (from ARSIS)
- Calendar with category filtering (from Berliner Philharmoniker)
- Artist metadata integration (from ARSIS carousel)

**Dark Mode:**
Support both light and dark themes. Default to light (cream backgrounds) for classical concert program feel, offer dark mode as elegant alternative with deep charcoal base.

### Design Principles

These principles guide all design decisions for this portfolio:

#### 1. **Sophisticated Restraint**

Let excellence speak through precision, not decoration. Every element serves a purpose. Whitespace is a feature, not empty space.

_Example: A single, beautifully typeset bio paragraph carries more weight than busy layouts. Program listings with generous spacing show respect for each performance._

#### 2. **Elegant Hierarchy**

Guide the eye through clear, confident information architecture. The most important should be obvious, not shouted.

_Example: Featured performances get prominence through scale and positioning, not borders and boxes. Visual weight creates natural flow._

#### 3. **Refined Details**

Mastery lives in the margins. Precise spacing, considered transitions, perfect alignment—these details signal professional excellence.

_Example: Consistent rhythm in spacing (8px/16px/24px scale). Button states that feel crafted. Typography that breathes._

#### 4. **Purposeful Motion**

Movement should enhance understanding, not entertain. Every animation has a reason—revealing hierarchy, guiding attention, providing feedback.

_Example: Subtle fade-ins as content enters viewport. Smooth page transitions that maintain context. Micro-interactions that confirm actions._

#### 5. **Timeless Confidence**

Build for longevity. Trends fade, but classical excellence endures. Choose timeless over trendy, refined over flashy.

_Example: System fonts that render beautifully everywhere. Layouts that work in 5 years. Colors that don't age. Clean code that maintains easily._

---

## Technical Considerations

### Performance

- Optimize images (especially performance photos)
- Lazy load below-the-fold content
- Minimal JavaScript where possible (leverage Astro SSG)
- Fast initial page load critical for professional impression

### Accessibility

- WCAG AA compliance for text contrast
- Semantic HTML structure
- Keyboard navigation for all interactive elements
- Screen reader friendly content hierarchy
- Reduced motion support via `prefers-reduced-motion`
- Exceptional typography readability

### Content Strategy

Key sections to consider:

- **Bio/About**: Comprehensive yet scannable
- **Repertoire**: Organized, searchable if extensive
- **Performances**: Past and upcoming, with context
- **Media**: Photos, videos, recordings
- **Press/Reviews**: Credibility and recognition
- **Contact**: Clear booking/inquiry path

---

## Color Palette

### Foundation (Neutral)

**Refined from Reference Analysis:**

```css
/* Light Mode - Warm Classical Approach */
--background: oklch(0.985 0.005 85); /* Cream/off-white #fefbf5 (ARSIS) */
--foreground: oklch(0.22 0 0); /* Deep charcoal #242424 (Kristian) */
--card: oklch(0.98 0.003 85); /* Subtle cream for elevated surfaces */
--muted: oklch(0.94 0.005 85); /* Warm gray backgrounds */
--muted-foreground: oklch(0.5 0 0); /* Medium gray for secondary text */
--border: oklch(0.88 0.005 85); /* Subtle warm border */

/* Dark Mode - Sophisticated Alternative */
--background: oklch(0.18 0 0); /* Deep charcoal, not pure black */
--foreground: oklch(0.96 0.005 85); /* Warm off-white */
--card: oklch(0.22 0 0); /* Elevated surfaces slightly lighter */
--muted: oklch(0.28 0 0); /* Dark gray backgrounds */
--muted-foreground: oklch(0.65 0 0); /* Medium gray */
--border: oklch(1 0 0 / 8%); /* Subtle transparent */
```

**Rationale:**

- **Cream instead of white**: Warmer, more approachable (ARSIS #fefbf5)
- **Charcoal instead of black**: Professional without harshness (Kristian #242424)
- **Slight warmth in OKLCH**: Hue ~85 adds organic quality
- **Perceptual uniformity**: OKLCH ensures consistent perceived brightness

### Accent (Forest/Emerald Green)

**Core Values** (to be refined):

```css
/* Primary Accent */
--accent-green: oklch(0.55 0.15 145); /* Forest green - CTAs, highlights */
--accent-green-hover: oklch(0.45 0.18 145); /* Darker on hover */
--accent-green-muted: oklch(0.92 0.05 145); /* Subtle backgrounds */

/* Usage Examples */
--primary: var(--accent-green); /* CTA buttons */
--ring: var(--accent-green); /* Focus outlines */
```

**Characteristics:**

- Sophisticated and unexpected (not typical classical blue)
- Natural elegance (organic, grounded)
- Fresh take on classical palette
- Works in both light and dark modes
- Replaces teal/jade found in references (Kristian Alexander, Hello Jadey)
- Strategic use like Hello Jadey's jade accents (dashed dividers, icons, hover states)

**Application Strategy:**

- **Primary CTAs**: "Contact," "Book Performance" buttons
- **Interactive Elements**: Navigation hover states, focus rings
- **Visual Accents**: Dashed divider lines, progress indicators
- **Subtle Emphasis**: Sidebar borders, icon tints
- **Never Overuse**: Single accent color maintains sophistication (ARSIS principle)

---

## Typography

### Font Stack

System fonts for optimal performance and native feel:

```css
font-family:
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
```

**Serif/Sans Pairing Strategy** (from reference analysis):

Use **serif for classical authority**, **sans-serif for modern clarity**:

**Serif Usage** (Marcellus-style from ARSIS):

- Major headings: "Davis Ponjuan," section titles ("Biography," "Repertoire")
- Press quotes and testimonials (editorial quality)
- Featured performance titles (cultural prestige)

**Sans-Serif Usage** (Roboto/Open Sans from references):

- Body copy for readability
- Navigation (uppercase, weight 300 for elegance)
- Metadata (dates, venues, composers)
- Interface elements (buttons, labels, captions)

**Implementation Example:**

```css
/* Display/Headings - Serif */
--font-serif: 'Georgia', 'Cambria', 'Times New Roman', serif;
font-family: var(--font-serif);
font-weight: 400;

/* Body/Interface - Sans */
--font-sans: ui-sans-serif, system-ui, -apple-system, Roboto, 'Open Sans', sans-serif;
font-family: var(--font-sans);

/* Navigation - Sans Uppercase Light */
--font-nav: var(--font-sans);
font-weight: 300;
text-transform: uppercase;
letter-spacing: 0.05em;
```

### Scale & Hierarchy

- Generous base size (18px minimum for body text)
- Clear hierarchy through scale and weight
- Ample line-height (1.6-1.8 for body copy)
- Comfortable measure (60-75 characters per line)

---

## Animation Guidelines

### Motion Principles

- **Purposeful**: Every animation serves a function
- **Subtle**: Enhance, don't distract
- **Respectful**: Honor `prefers-reduced-motion`
- **Smooth**: 60fps or don't animate

### Timing

- Fast UI feedback: 100-200ms
- Content reveals: 300-400ms
- Page transitions: 400-600ms
- Never animate longer than necessary

### Safe Defaults

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Component Patterns

### Buttons & CTAs

**Primary Buttons** (Booking/Contact):

- Forest green background (--accent-green)
- White text for contrast
- 16px vertical padding, 32px horizontal (generous, not cramped)
- Hover: Darker green with smooth 400ms transition
- Focus: Green ring outline (--ring)
- Example: "Book Performance," "Contact for Inquiry"

**Secondary Buttons** (Navigation):

- Transparent background with charcoal border
- Charcoal text
- Hover: White background with charcoal text (Kristian Alexander pattern)
- Example: "View Repertoire," "See Calendar"

**Text Links**:

- Charcoal with subtle green underline on hover
- 400ms ease-out transition (Hello Jadey timing)

```css
/* Primary CTA */
.btn-primary {
  background: var(--accent-green);
  color: white;
  padding: 1rem 2rem;
  border-radius: var(--radius-md);
  transition: all 400ms ease-out;
}

.btn-primary:hover {
  background: var(--accent-green-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px oklch(0.55 0.15 145 / 20%);
}
```

### Cards (Performances, Media)

**Performance Cards** (inspired by Berliner Philharmoniker + ARSIS):

```css
.performance-card {
  background: var(--card); /* Subtle cream */
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem; /* 40px - Hello Jadey breathing room */
  transition: box-shadow 400ms ease-out;
}

.performance-card:hover {
  box-shadow: 0 8px 24px oklch(0.22 0 0 / 8%);
  border-color: var(--accent-green);
}
```

**Content Hierarchy** (within cards):

1. **Date/Venue** (uppercase sans-serif, muted color, small)
2. **Performance Title** (serif, larger, foreground color)
3. **Composer/Work** (sans-serif, medium, with middle-dot separators like ARSIS)
4. **Description** (sans-serif, body size, muted foreground)
5. **CTA** (green link or button)

**Spacing:**

- 1.5rem between hierarchical elements
- Consistent internal padding (2.5rem all sides)
- Cards in grid: 25px gutters (Larson Studio + ARSIS)

### Navigation

**Desktop Fixed Header** (Kristian Alexander + Berliner Philharmoniker approach):

```css
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px; /* ARSIS standard */
  background: var(--background);
  border-bottom: 1px solid var(--border);
  z-index: 100;
}

.nav-links {
  text-transform: uppercase;
  font-weight: 300; /* Roboto Condensed approach */
  letter-spacing: 0.05em;
  font-size: 0.875rem;
}

.nav-link:hover {
  background: white; /* Kristian Alexander hover state */
  color: var(--foreground);
}

.nav-link.active {
  border-bottom: 2px solid var(--accent-green); /* Active indicator */
}
```

**Menu Structure:**

- Logo (left): "DP" monogram or full name
- Navigation (center/right): About • Repertoire • Calendar • Media • Press • Contact
- Language selector (if needed, far right)

**Mobile Adaptation:**

- Hamburger at 768px breakpoint
- Full-screen overlay menu (not cramped drawer)
- Primary CTAs ("Contact") remain visible in collapsed header
- Smooth 400ms transitions

**Scroll Behavior:**

- Sticky header (always accessible for booking)
- Subtle shadow on scroll (depth indication)
- Maintains hierarchy: never obscures content unnecessarily

### Typography Components

- Pull quotes for reviews/testimonials
- Well-formatted lists for repertoire
- Clear headings that establish hierarchy
- Proper emphasis (bold sparingly, italic thoughtfully)

---

## File Organization

Keep design tokens centralized in `src/styles/global.css`.
Document color and spacing decisions inline.
Create reusable components for repeated patterns.

---

## Signature Design Elements

These standout features, adapted from references, make the portfolio memorable and distinctive:

### 1. **Hero Section with Rotating Testimonials**

Adapt Kristian Alexander's testimonial slider:

- Full-bleed conducting imagery (3000×1500px aspect ratio)
- Fade transitions between press quotes overlaid on hero
- Serif typography for quotes, sans-serif for attribution
- Forest green progress indicator or accent detail
- Example: _"Inspiring, carefully crafted and paced"_ — The Guardian

### 2. **Dashed Divider System**

Inspired by Hello Jadey's jade dashed lines:

```html
<svg class="section-divider" viewBox="0 0 100 1">
  <line
    x1="0"
    y1="0"
    x2="100"
    y2="0"
    stroke="var(--accent-green)"
    stroke-width="1"
    stroke-dasharray="2 4"
  />
</svg>
```

Use between major sections for visual rhythm without harshness.

### 3. **Biography Sidebar Blocks**

ARSIS Petrenko's cream-background information approach:

- Quick facts in sidebar: Current positions, education, notable collaborations
- Cream background (#fefbf5) distinguishes from main content
- Press quotes integrated seamlessly (not isolated testimonial section)
- Contact/booking info accessible without navigation

### 4. **Calendar with Category Filtering**

Berliner Philharmoniker's event discovery pattern:

- Filters: By venue, repertoire type, date range
- Visual treatment: Full-width featured events + 2-3 column upcoming cards
- Green accent on "View Details" or "Book Tickets" CTAs
- Taggable interface for easy browsing

### 5. **Repertoire with Hierarchical Listing**

ARSIS's sophisticated density approach:

- Middle-dot separators between composer names: Brahms · Beethoven · Mahler
- Expandable sections for detailed program notes (accordion pattern)
- Organized by category: Symphonic / Operatic / Chamber / Contemporary
- Generous line spacing prevents overwhelming feeling

### 6. **Press Quote Integration**

Scattered throughout, not in dedicated section:

- Cream-background blocks in biography sidebar
- Overlaid on hero imagery (rotating testimonials)
- Inline within performance descriptions where relevant
- Always attributed: Publication name + date

---

## Reference Site Synthesis

### Visual Shorthand

**"Gallery-worthy conductor portfolio with contemporary classical elegance"**

### What We're Taking From Each Reference:

**Larson Studio:**

- Minimalist "white cube" gallery approach
- High-resolution imagery dominance
- Metadata-rich organization (decades of work)
- 25px consistent gutters

**Hello Jadey:**

- Warm earth tones (cream/brown)
- Dashed SVG dividers for rhythm
- Intimate photography with natural lighting
- 400ms ease-out transitions (unhurried feel)
- 40-80px section padding (breathing room)

**Berliner Philharmoniker:**

- Institutional prestige balanced with accessibility
- Calendar interface with category filters
- Documentary photography style
- Full-width hero alternating with column grids

**ARSIS Artists (Petrenko):**

- Cream backgrounds (#fefbf5) for warmth
- Sidebar information blocks
- Press quote integration throughout
- 24-column grid system (desktop)
- Museum-like browsing experience

**ARSIS Artists (Main):**

- Artist carousel with metadata
- Hierarchical listing with middle-dot separators
- Variable gaps (11-25px)
- Disabled excessive animations (professional restraint)

**Kristian Alexander:**

- Deep charcoal (#242424) instead of black
- Teal accent system (→ we use forest green)
- Rotating testimonial slider on hero
- Fixed navigation with uppercase menu
- 3000×1500px hero aspect ratio

### What We're Avoiding:

- Pure white backgrounds (too stark → use cream)
- Harsh black text (too high contrast → use charcoal)
- Blue/teal accents (overdone → use forest green)
- Excessive parallax or 3D effects (distracting)
- Auto-advancing carousels without controls (accessibility)
- Busy layouts with competing visual elements

### The Davis Ponjuan Aesthetic:

**Color:** Cream and charcoal foundation with forest green precision
**Typography:** Serif authority meets sans-serif clarity
**Layout:** Asymmetric sophistication with generous breathing room
**Photography:** Documentary authenticity with intimate moments
**Interaction:** Unhurried, intentional, never flashy
**Memorable:** Rotating testimonials + dashed green dividers

This creates a portfolio that signals:

- **Technical Mastery**: Grid precision, typography hierarchy, refined details
- **Classical Pedigree**: Serif fonts, institutional influences, concert hall elegance
- **Modern Relevance**: Contemporary layout, warm color approach, accessible professionalism

Exactly what professional musicians, employers, and fans expect from a world-class conductor.

---

_This document will evolve as the project develops. Update it when design decisions are made or refined._
