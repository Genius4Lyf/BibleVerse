export interface Comment {
  id: string;
  user: string;
  text: string;
  timeAgo: string;
}

export interface Post {
  id: string;
  authorName: string;
  authorTitle: string;
  authorAvatar: string; // URL
  authorColor: string; // Tailwind color class for borders/accents
  verseReference: string;
  verseText: string;
  reflection: string; // The AI generated text
  timestamp: string;
  backgroundImage: string; // URL
  likes: number;
  comments: Comment[];
  tags: string[];
}