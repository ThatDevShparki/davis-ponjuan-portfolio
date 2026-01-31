import { defineCollection, z } from 'astro:content';

// =============================================================================
// SHARED MEDIA SCHEMAS
// Reusable schema definitions for media across all collections
// =============================================================================

/**
 * Image/Photo schema - for galleries, hero images, thumbnails
 */
const imageSchema = z.object({
  src: z.string(), // Path to image (local or URL)
  alt: z.string(), // Required for accessibility
  caption: z.string().optional(),
  credit: z.string().optional(), // Photographer credit
  width: z.number().optional(), // For optimization hints
  height: z.number().optional(),
});

/**
 * Flexible image schema - accepts either a string (legacy) or full image object
 * Use this for backward compatibility with existing content
 */
const flexibleImageSchema = z.union([
  z.string(), // Legacy: just the path
  imageSchema, // New: full image object with alt, caption, etc.
]);

/**
 * Audio schema - for recordings, clips, podcasts
 */
const audioSchema = z.object({
  src: z.string(), // URL to audio file or embed
  title: z.string(),
  duration: z.string().optional(), // e.g., "4:32" or "1:23:45"
  description: z.string().optional(),
  platform: z
    .enum([
      'spotify',
      'apple-music',
      'soundcloud',
      'bandcamp',
      'youtube-music',
      'self-hosted',
      'other',
    ])
    .optional(),
  embedUrl: z.string().optional(), // For embedded players
});

/**
 * Video schema - for performances, interviews, documentaries
 */
const videoSchema = z.object({
  src: z.string(), // URL to video or embed
  title: z.string(),
  duration: z.string().optional(),
  description: z.string().optional(),
  thumbnail: z.string().optional(), // Preview image
  platform: z.enum(['youtube', 'vimeo', 'self-hosted', 'other']).optional(),
  embedUrl: z.string().optional(),
});

/**
 * External link schema - for linking to media on other platforms
 */
const externalLinkSchema = z.object({
  url: z.string(),
  label: z.string(),
  platform: z
    .enum([
      'spotify',
      'apple-music',
      'youtube',
      'vimeo',
      'soundcloud',
      'bandcamp',
      'amazon',
      'website',
      'other',
    ])
    .optional(),
  icon: z.string().optional(), // Custom icon identifier
});

/**
 * Media gallery schema - collection of mixed media
 */
const _mediaGallerySchema = z.object({
  images: z.array(imageSchema).optional(),
  audio: z.array(audioSchema).optional(),
  video: z.array(videoSchema).optional(),
  externalLinks: z.array(externalLinkSchema).optional(),
});

// =============================================================================
// CONTENT COLLECTIONS
// =============================================================================

// Concerts collection - for all performances
const concerts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    venue: z.string(),
    location: z.string(),
    orchestra: z.string(),
    status: z.enum(['upcoming', 'past']),
    featured: z.boolean().default(false),
    program: z.array(
      z.object({
        composer: z.string(),
        work: z.string(),
        soloist: z.string().optional(),
      })
    ),
    // Media - enhanced with typed schemas (flexibleImageSchema for backward compat)
    coverImage: flexibleImageSchema.optional(),
    gallery: z.array(imageSchema).optional(),
    videos: z.array(videoSchema).optional(),
    audioClips: z.array(audioSchema).optional(),
    externalLinks: z.array(externalLinkSchema).optional(),
    // Reviews with optional media
    reviews: z
      .array(
        z.object({
          publication: z.string(),
          author: z.string().optional(),
          excerpt: z.string(),
          url: z.string().optional(),
        })
      )
      .optional(),
  }),
});

// Organizations collection - positions and affiliations
const organizations = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    type: z.enum(['current', 'past', 'guest', 'educational']),
    startDate: z.date(),
    endDate: z.date().optional(),
    location: z.string(),
    website: z.string().optional(),
    logo: flexibleImageSchema.optional(), // Accepts string or full image object
    gallery: z.array(imageSchema).optional(), // Photos from this organization
    order: z.number().default(0), // For manual sorting
  }),
});

// Repertoire collection - works conducted
const repertoire = defineCollection({
  type: 'content',
  schema: z.object({
    composer: z.string(),
    work: z.string(),
    genre: z.enum([
      'symphonic',
      'operatic',
      'chamber',
      'contemporary',
      'choral',
      'ballet',
      'other',
    ]),
    timesPerformed: z.number().default(1),
    firstPerformed: z.date().optional(),
    lastPerformed: z.date().optional(),
    notes: z.string().optional(),
    // Media links for this work
    recordings: z.array(audioSchema).optional(), // Links to recordings of this work
    videos: z.array(videoSchema).optional(), // Performance videos
    externalLinks: z.array(externalLinkSchema).optional(), // Spotify, Apple Music, etc.
  }),
});

// Press collection - reviews and media coverage
const press = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publication: z.string(),
    author: z.string().optional(),
    date: z.date(),
    excerpt: z.string(),
    url: z.string().optional(),
    concertId: z.string().optional(), // Link to related concert
    featured: z.boolean().default(false),
    // Media from the press coverage
    image: imageSchema.optional(), // Article header image or screenshot
    video: videoSchema.optional(), // Video interview or segment
    audio: audioSchema.optional(), // Radio interview or podcast
  }),
});

// Education collection - academic background
const education = defineCollection({
  type: 'content',
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    field: z.string(),
    location: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    honors: z.string().optional(),
    thesis: z.string().optional(),
    advisors: z.array(z.string()).optional(),
  }),
});

// Awards collection - honors and recognition
const awards = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    date: z.date(),
    location: z.string().optional(),
    category: z.enum(['competition', 'fellowship', 'grant', 'honor', 'residency', 'other']),
    amount: z.string().optional(), // For grants/fellowships
    url: z.string().optional(),
  }),
});

// Recordings collection - discography
const recordings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    composer: z.string().optional(),
    works: z.array(z.string()).optional(), // List of works on the recording
    orchestra: z.string(),
    label: z.string(),
    releaseDate: z.date(),
    format: z.enum(['CD', 'Digital', 'Vinyl', 'Streaming', 'DVD/Blu-ray']).array(),
    catalogNumber: z.string().optional(),
    awards: z.array(z.string()).optional(), // Grammy nominations, etc.
    featured: z.boolean().default(false),
    // Enhanced media fields (flexibleImageSchema for backward compat)
    coverImage: flexibleImageSchema.optional(), // Album artwork - string or full image object
    samples: z.array(audioSchema).optional(), // Audio samples/previews
    video: videoSchema.optional(), // Behind-the-scenes or promo video
    // Purchase and streaming links
    externalLinks: z
      .array(externalLinkSchema)
      .optional()
      .describe('Links to purchase or stream (Spotify, Apple Music, Amazon, etc.)'),
  }),
});

// Workshops collection - masterclasses, educational activities
const workshops = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    institution: z.string(),
    location: z.string(),
    date: z.date(),
    endDate: z.date().optional(), // For multi-day events
    type: z.enum(['masterclass', 'workshop', 'residency', 'lecture', 'clinic', 'seminar']),
    topic: z.string().optional(), // Main focus area
    participants: z.string().optional(), // e.g., "Graduate conducting students"
    // Media from the workshop
    gallery: z.array(imageSchema).optional(), // Photos from the event
    videos: z.array(videoSchema).optional(), // Recorded sessions or highlights
    externalLinks: z.array(externalLinkSchema).optional(),
  }),
});

export const collections = {
  concerts,
  organizations,
  repertoire,
  press,
  education,
  awards,
  recordings,
  workshops,
};
