export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  videoUrl?: string; // In a real app, this would be the video source
  type: 'video' | 'image';
}

export interface Brand {
  name: string;
  logoUrl?: string; // Optional if using text representation
  type: 'Domestic' | 'International';
}

export interface RatePackage {
  title: string;
  price: string;
  features: string[];
  isHighlight?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  platform: 'Instagram' | 'WhatsApp';
  text: string;
  avatarUrl?: string;
}
