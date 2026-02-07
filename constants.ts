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
    title: 'Jewellery haul',
    category: 'UGC Reel',
    thumbnailUrl: '/luxephoto1.jpeg',
    videoUrl: '/luxevideo1.mp4',
    type: 'video',
  },
  {
    id: '2',
    title: 'ASMR Video',
    category: 'Lifestyle',
    thumbnailUrl: '/luxephoto2.jpeg',
    videoUrl: '/luxevideo2.mp4',
    type: 'video',
  },
  {
    id: '3',
    title: 'Featuring: Toner',
    category: 'UGC Reel',
    thumbnailUrl: '/luxephoto3.jpeg',
    videoUrl: '/luxevideo3.mp4',
    type: 'video',
  },
  {
    id: '4',
    title: 'Lipstick glow up',
    category: 'Lifestyle Integration',
    thumbnailUrl: '/luxephoto4.jpeg',
    videoUrl: '/luxevideo4.mp4',
    type: 'video',
  },
  {
    id: '5',
    title: 'Jewelry Closeup',
    category: 'Aesthetic Shots',
    thumbnailUrl: '/luxephoto1.jpeg',
    videoUrl: '/luxevideo5.mp4',
    type: 'video',
  },
  // IMAGES
  {
    id: '7',
    title: 'Jewellery haul',
    category: 'Photography',
    thumbnailUrl: '/luxephoto1.jpeg',
    type: 'image',
  },
  {
    id: '6',
    title: 'Minimal asthetic',
    category: 'Photography',
    thumbnailUrl: '/luxephoto2.jpeg',
    type: 'image',
  },
  {
    id: '8',
    title: 'Product Stylized',
    category: 'Photography',
    thumbnailUrl: '/luxephoto3.jpeg',
    type: 'image',
  },
  {
    id: '9',
    title: 'Glow-up Vibes',
    category: 'Photography',
    thumbnailUrl: '/luxephoto4.jpeg',
    type: 'image',
  },
  {
    id: '10',
    title: 'Grwm',
    category: 'Photography',
    thumbnailUrl: '/luxephoto5.jpeg',
    type: 'image',
  },
  {
    id: '11',
    title: 'Makeup sorted',
    category: 'Photography',
    thumbnailUrl: '/luxephoto6.jpeg',
    type: 'image',
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