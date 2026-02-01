export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string | string[];
  imageUrls: string[];
  imageHints?: string[];
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
}
