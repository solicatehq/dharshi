import { Brand, Project, RatePackage, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Brands', href: '#brands' },
  { name: 'Rates', href: '#rates' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  // VIDEOS
  {
    id: '1',
    title: 'Luxury Skincare Routine',
    category: 'Beauty',
    thumbnailUrl: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1080&auto=format&fit=crop', // Vertical skincare selfie
    videoUrl: '/luxevideo1.mp4',
    type: 'video',
  },
  {
    id: '2',
    title: 'Morning Aesthetic',
    category: 'Lifestyle',
    thumbnailUrl: 'https://images.unsplash.com/photo-1631557053545-200508103328?q=80&w=1080&auto=format&fit=crop', // Vertical coffee/bed
    videoUrl: '/luxevideo2.mp4',
    type: 'video',
  },
  {
    id: '3',
    title: 'Hydrating Toner Demo',
    category: 'Beauty',
    thumbnailUrl: 'https://images.unsplash.com/photo-1588611843235-5bd97be34f59?q=80&w=1080&auto=format&fit=crop', // Vertical face care
    videoUrl: '/luxevideo3.mp4',
    type: 'video',
  },
];

export const BRANDS: Brand[] = [
  // Domestic (National)
  { name: 'Dot n key', type: 'Domestic' },
  { name: 'Foxtale', type: 'Domestic' },
  { name: 'Bellavita', type: 'Domestic' },
  { name: 'Swiss beauty', type: 'Domestic' },
  { name: 'Dazzler', type: 'Domestic' },
  { name: 'Garnier', type: 'Domestic' },
  { name: 'Indus Valley', type: 'Domestic' },
  { name: 'Callidus', type: 'Domestic' },
  { name: 'Rudimentary', type: 'Domestic' },

  // International
  { name: 'Klairs', type: 'International' },
  { name: 'dA’lba', type: 'International' },
  { name: 'Kaine', type: 'International' },
  { name: 'Bioderma', type: 'International' },
  { name: 'Pixel pure', type: 'International' },
];

export const RATES: RatePackage[] = [
  {
    title: 'Collaboration Reel',
    price: '₹2,000',
    features: ['1 Instagram Reel (30-60s)', 'Story Mention', 'Product Integration', 'Rights: Organic usage'],
  },
  {
    title: 'Non-Collaboration Package',
    price: '₹5,000',
    features: ['One Reel (Non-Collab)', 'One Carousel', 'One Story'],
    isHighlight: true,
  },
  {
    title: 'Ad Usage Rights',
    price: '₹500',
    features: ['Per Month', 'Paid Ad Usage', 'Whitelisting Available'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'radiome',
    platform: 'Instagram',
    text: 'It was a really nice experience working with you Ayesha',
  },
  {
    id: '2',
    author: 'N4N',
    platform: 'Instagram',
    text: 'content with creativity in barter collab is so impressive will contact you for further collaborations❤️',
  },
  {
    id: '3',
    author: 'ossa perfume',
    platform: 'Instagram',
    text: 'We truly appreciate the effort you put into creating this amazing reel for our brand.It was wonderful collaborating with you!',
  },
  {
    id: '4',
    author: 'lascent perfume',
    platform: 'Instagram',
    text: 'Thank you so much for the wonderful collaboration. I’m really happy with the way you showcased my perfume-the content was creative, elegant, and perfectly aligned with the brand. The response has been very positive, and I truly appreciate the effort and professionalism you put into this project. Looking forward to working together again in the future 🌹✨',
  },
];