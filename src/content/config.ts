import { defineCollection, z } from 'astro:content';

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
    // Optional rich content (for featured performances)
    coverImage: z.string().optional(),
    media: z
      .array(
        z.object({
          type: z.enum(['photo', 'video', 'audio']),
          url: z.string(),
          caption: z.string().optional(),
        })
      )
      .optional(),
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
    logo: z.string().optional(),
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
  }),
});

export const collections = {
  concerts,
  organizations,
  repertoire,
  press,
};
