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
  images: string[];
  featured?: boolean;
};

export const listings: Listing[] = [
  { slug:'five-bedroom-duplex-lekki', title:'5-bedroom detached duplex in Lekki', price:'₦285,000,000', location:'Lekki Phase 1, Lagos', propertyType:'house', status:'For sale', size:'450 sqm', bedrooms:5, featured:true, description:'A contemporary detached residence in a secure Lekki compound, planned for comfortable family living and long-term property value. The home includes en-suite bedrooms, generous living areas, covered parking and a service area.', features:['Five en-suite bedrooms','Family lounge','Fitted kitchen','Covered parking','Secure gated compound','Boys’ quarters'], images:['/images/listing-lekki-duplex.webp','/images/hero-lekki-estate.webp'] },
  { slug:'ibeju-lekki-residential-land', title:'Residential land in the Ibeju-Lekki growth corridor', price:'₦32,500,000', location:'Ibeju-Lekki, Lagos', propertyType:'land', status:'For sale', size:'600 sqm', featured:true, description:'A surveyed residential plot positioned within an emerging Lagos development corridor. Exact title documentation, coordinates, infrastructure obligations and physical boundaries are confirmed during due diligence and inspection.', features:['Surveyed residential plot','Graded access road','Defined boundary markers','Developing estate environment','Inspection by appointment'], images:['/images/listing-ibeju-land.webp'] },
  { slug:'three-bedroom-apartment-abuja', title:'3-bedroom serviced apartment in Abuja', price:'₦92,000,000', location:'Wuse II, Abuja', propertyType:'apartment', status:'For sale', size:'190 sqm', bedrooms:3, featured:true, description:'A well-proportioned serviced apartment in a managed Abuja residential compound, with en-suite bedrooms, dedicated parking and controlled access.', features:['Three en-suite bedrooms','Managed common areas','Dedicated parking','Controlled access','Central Abuja location'], images:['/images/listing-abuja-apartment.webp'] },
  { slug:'four-bedroom-terrace-ajah', title:'4-bedroom terrace homes in Ajah', price:'₦118,000,000', location:'Ajah, Lagos', propertyType:'house', status:'For sale', size:'260 sqm', bedrooms:4, featured:true, description:'Contemporary terrace homes within a secure residential estate in Ajah, offering practical family layouts, private parking and managed external spaces.', features:['Four en-suite bedrooms','Private parking','Secure estate','Fitted kitchen','Family lounge'], images:['/images/listing-ajah-terraces.webp'] },
  { slug:'ikeja-mixed-use-commercial', title:'Modern mixed-use commercial property', price:'₦650,000,000', location:'Ikeja, Lagos', propertyType:'commercial', status:'For sale', size:'1,200 sqm', featured:true, description:'A modern office and retail property in an established Ikeja business district, suitable for corporate occupation, professional services or income-producing commercial use.', features:['Office and retail floors','Secure perimeter','On-site parking','High-visibility location','Flexible internal layout'], images:['/images/listing-ikeja-commercial.webp'] },
  { slug:'lagos-industrial-warehouse', title:'Warehouse and logistics compound', price:'₦45,000,000 / year', location:'Lagos industrial corridor', propertyType:'industrial', status:'For rent', size:'3,500 sqm', featured:true, description:'A secure light-industrial facility with a clear-span warehouse, administrative block, loading access and a generous concrete yard for distribution or production operations.', features:['Clear-span warehouse','Administrative offices','Loading bays','Secure concrete yard','Generator house','Controlled gate access'], images:['/images/listing-lagos-warehouse.webp'] },
];

export const getListing = (slug?: string) => listings.find((listing) => listing.slug === slug);
export const listingSpecs = (listing: Listing) => [listing.location, listing.propertyType, listing.size, listing.bedrooms ? `${listing.bedrooms} bedrooms` : undefined].filter(Boolean) as string[];
