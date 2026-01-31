/**
 * Media Components
 *
 * Reusable components for displaying images, audio, video, and external links.
 *
 * Usage:
 * ---
 * import { MediaImage, MediaGallery, MediaAudio, MediaVideo, MediaLinks } from '../components/media';
 * ---
 *
 * Components:
 * - MediaImage: Single image with caption and credit
 * - MediaGallery: Grid of images with lightbox
 * - MediaAudio: Audio player with platform embed support (Spotify, SoundCloud, etc.)
 * - MediaVideo: Video player with YouTube/Vimeo embed support
 * - MediaLinks: External platform links with icons
 */

// Note: Astro components are imported directly in .astro files
// This file serves as documentation for the media component system

export const mediaComponents = {
  MediaImage: '../components/media/MediaImage.astro',
  MediaGallery: '../components/media/MediaGallery.astro',
  MediaAudio: '../components/media/MediaAudio.astro',
  MediaVideo: '../components/media/MediaVideo.astro',
  MediaLinks: '../components/media/MediaLinks.astro',
} as const;

// Type exports for use in content schemas
export type ImageItem = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  width?: number;
  height?: number;
};

export type AudioItem = {
  src: string;
  title: string;
  duration?: string;
  description?: string;
  platform?:
    | 'spotify'
    | 'apple-music'
    | 'soundcloud'
    | 'bandcamp'
    | 'youtube-music'
    | 'self-hosted'
    | 'other';
  embedUrl?: string;
};

export type VideoItem = {
  src: string;
  title: string;
  duration?: string;
  description?: string;
  thumbnail?: string;
  platform?: 'youtube' | 'vimeo' | 'self-hosted' | 'other';
  embedUrl?: string;
};

export type ExternalLink = {
  url: string;
  label: string;
  platform?:
    | 'spotify'
    | 'apple-music'
    | 'youtube'
    | 'vimeo'
    | 'soundcloud'
    | 'bandcamp'
    | 'amazon'
    | 'website'
    | 'other';
  icon?: string;
};
