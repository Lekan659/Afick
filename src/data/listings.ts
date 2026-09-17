export type PricingOption = { label: string; value: string };

export type Listing = {
  slug: string;
  title: string;
  price: string;
  location: string;
  propertyType: 'land' | 'house' | 'apartment' | 'commercial' | 'industrial';
  status: 'For sale' | 'For rent';
  size: string;
  bedrooms?: number;
  description: string;
  features: string[];
  pricing?: PricingOption[];
  titleDocument?: string;
  nearby?: string[];
  paymentPlan?: string;
  images: string[];
  imageNote?: string;
  featured?: boolean;
};

const representativeImageNote = 'Representative Nigerian property image. Contact our team for the current property photographs and inspection details.';

export const listings: Listing[] = [
  {
    slug: 'oranje-apartments-lekki-ajah',
    title: 'Oranje Apartments — 3-bedroom residences',
    price: 'From ₦130,000,000',
    location: 'Lekki–Ajah, Lagos',
    propertyType: 'apartment',
    status: 'For sale',
    size: '3-bedroom apartments',
    bedrooms: 3,
    featured: true,
    description: 'Oranje Apartments is a premium residential development in the Lekki–Ajah corridor, designed for buyers seeking a modern home as well as investors considering rental income and long-term appreciation potential. The layouts prioritise natural light, ventilation and practical use of space.',
    features: ['All bedrooms en-suite with modern bathroom fittings','Fully fitted kitchen with upper-grade cabinetry and appliances','Spacious living and dining areas','Space-efficient layouts for modern lifestyles','Private balconies for natural lighting and ventilation','Ample resident parking'],
    pricing: [
      { label: 'Outright payment', value: '₦130,000,000' },
      { label: '6-month plan', value: '₦135,000,000' },
      { label: '12-month plan', value: '₦147,500,000' },
    ],
    images: ['/images/listing-ajah-terraces.webp', '/images/hero-lekki-estate.webp'],
    imageNote: representativeImageNote,
  },
  {
    slug: 'emerald-haven-lekki-epe',
    title: 'Emerald Haven residential, investment and commercial land',
    price: 'From ₦38,250,000',
    location: 'Lekki–Epe Expressway, Lagos',
    propertyType: 'land',
    status: 'For sale',
    size: '450–1,200 sqm',
    featured: true,
    description: 'Emerald Haven offers residential, investment and commercial plots along the Lekki–Epe growth corridor. Its location provides access to major planned and operating economic landmarks, making it suitable for future living, land banking or commercial development.',
    features: ['Perimeter fencing','24/7 surveillance cameras','Smart access-controlled gate','Well-paved roads','Solar street lights','24/7 electricity with backup power','Recreational centre','Prices stated as all-inclusive'],
    pricing: [
      { label: 'Residential — 450 sqm', value: '₦38,250,000' },
      { label: 'Residential — 600 sqm', value: '₦51,000,000' },
      { label: 'Investment — 600 sqm', value: '₦57,000,000' },
      { label: 'Commercial — 1,200 sqm', value: '₦144,000,000' },
    ],
    titleDocument: 'Lagos State Government Allocation',
    nearby: ['Proposed Lekki International Airport','Alaro City','Fourth Mainland Bridge','Pan-Atlantic University','Lagos Deep Sea Port','Dangote Refinery','Lekki Free Trade Zone','La Campagne Tropicana'],
    paymentPlan: 'Outright payment within 0–3 months, or a flexible payment plan of up to 12 months.',
    images: ['/images/listing-ibeju-land.webp'],
    imageNote: representativeImageNote,
  },
  {
    slug: 'two-unit-bungalow-oke-afa-isolo',
    title: 'Two units of 3-bedroom bungalows with mini-flat BQ',
    price: '₦180,000,000 asking',
    location: 'Oke Afa, Jakande Estate, Isolo, Lagos',
    propertyType: 'house',
    status: 'For sale',
    size: '2 units + mini-flat BQ',
    bedrooms: 3,
    featured: true,
    description: 'A residential compound comprising two 3-bedroom bungalows and a mini-flat boys’ quarters within a serene, secured estate in Oke Afa, Isolo.',
    features: ['Two separate 3-bedroom bungalow units','Mini-flat boys’ quarters','All rooms en-suite','POP ceiling finish','Swimming pool','Generator house','Serene and secured estate setting'],
    images: ['/images/listing-lekki-duplex.webp'],
    imageNote: representativeImageNote,
  },
  {
    slug: 'mixed-residential-property-akesan-igando',
    title: '4-bedroom flat, 2-bedroom flat and shop',
    price: '₦105,000,000 asking',
    location: 'Akesan Bus Stop, Igando, Lagos',
    propertyType: 'house',
    status: 'For sale',
    size: 'Almost one full plot',
    description: 'A mixed residential and commercial property near Akesan Bus Stop, off LASU–Isheri Road, comprising an executive 4-bedroom flat, a separate 2-bedroom flat and a shop.',
    features: ['Executive 4-bedroom flat','Separate 2-bedroom flat','One shop','Close to Akesan Bus Stop','Off LASU–Isheri Road'],
    titleDocument: 'Receipt, survey plan and deed of assignment',
    images: ['/images/listing-ikeja-commercial.webp'],
    imageNote: representativeImageNote,
  },
  {
    slug: 'twelve-flat-investment-ago-palace-okota',
    title: '12-flat residential investment property',
    price: '₦400,000,000 asking',
    location: 'Off Ago Palace Way, Okota, Lagos',
    propertyType: 'apartment',
    status: 'For sale',
    size: '720 sqm',
    description: 'A large income-producing residential property in a serene area off Ago Palace Way, comprising twelve modern and spacious flats with dedicated power infrastructure.',
    features: ['Eight units of 3-bedroom flats','Four mini-flat units','Band A electricity supply','Separate transformer','Serene residential location'],
    pricing: [
      { label: 'Asking price', value: '₦400,000,000' },
      { label: 'Net price stated', value: '₦380,000,000' },
    ],
    titleDocument: 'Certificate of Occupancy (C of O)',
    images: ['/images/listing-abuja-apartment.webp'],
    imageNote: representativeImageNote,
  },
  {
    slug: 'shortlet-investment-lekki-phase-one',
    title: 'Six-unit furnished shortlet investment property',
    price: '₦1,300,000,000',
    location: 'Da Silva Street, Lekki Phase 1, Lagos',
    propertyType: 'commercial',
    status: 'For sale',
    size: '440 sqm',
    description: 'A maintained four-year-old building currently operated as an Airbnb in Lekki Phase 1. The six furnished units provide an established shortlet configuration for an investor seeking a hospitality or serviced-apartment asset.',
    features: ['Four furnished 2-bedroom apartments','Two furnished mini-flat apartments','All rooms en-suite','Guest toilets','Currently used for shortlets','65 kVA generator','Approximately four years old'],
    titleDocument: 'Certificate of Occupancy (C of O)',
    images: ['/images/hero-lekki-estate.webp', '/images/listing-ajah-terraces.webp'],
    imageNote: representativeImageNote,
  },
  {
    slug: 'three-bedroom-home-olowotedo',
    title: '3-bedroom home close to the expressway',
    price: '₦37,000,000',
    location: 'Olowotedo, Lagos',
    propertyType: 'house',
    status: 'For sale',
    size: 'One plot',
    bedrooms: 3,
    description: 'A 3-bedroom residential property on a plot of land in Olowotedo, positioned very close to the expressway for convenient access.',
    features: ['Three bedrooms','One plot of land','Very close to the expressway'],
    titleDocument: 'Receipt and deed of agreement',
    images: ['/images/listing-lekki-duplex.webp'],
    imageNote: representativeImageNote,
  },
];

export const getListing = (slug?: string) => listings.find((listing) => listing.slug === slug);
export const listingSpecs = (listing: Listing) => [listing.location, listing.propertyType, listing.size, listing.bedrooms ? `${listing.bedrooms} bedrooms` : undefined].filter(Boolean) as string[];
