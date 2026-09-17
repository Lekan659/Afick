import { Link } from 'react-router-dom';
import { MapPin, MessageCircle } from 'lucide-react';
import type { Listing } from '../data/listings';
import { listingSpecs } from '../data/listings';
import { whatsappUrl } from '../lib/constants';

export function ListingCard({ listing }: {listing:Listing}) {
  const specs = listingSpecs(listing);
  return <article className="group border-t border-[#AEB8B1] pt-4">
    <Link to={`/listings/${listing.slug}`} className="block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C1913D]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#DDE3DE]">
        <img className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" src={listing.images[0]} alt={listing.title} loading="lazy" />
        <span className="absolute left-3 top-3 bg-[#17352C] px-3 py-1.5 text-xs font-bold text-white">{listing.status}</span>
        {listing.imageNote&&<span className="absolute bottom-3 left-3 bg-black/70 px-2.5 py-1 text-[10px] font-bold text-white">Representative image</span>}
      </div>
    </Link>
    <div className="pt-5">
      <p className="flex items-center gap-1.5 text-sm text-[#68736D]"><MapPin size={14}/>{listing.location}</p>
      <h3 className="mt-2 font-display text-2xl leading-tight text-[#17352C]"><Link to={`/listings/${listing.slug}`} className="hover:text-[#8B4A35]">{listing.title}</Link></h3>
      <p className="mt-2 text-lg font-extrabold text-[#202522]">{listing.price}</p>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-y border-[#D5DBD6] py-3 text-xs font-semibold text-[#68736D]">{specs.slice(0,3).map((spec) => <span key={spec}>{spec}</span>)}</div>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <Link className="inline-flex min-h-11 flex-1 items-center justify-center border border-[#17352C] px-4 text-sm font-bold text-[#17352C] hover:bg-[#17352C] hover:text-white" to={`/listings/${listing.slug}`}>View details</Link>
        <a className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 bg-[#1f8f54] px-4 text-sm font-bold text-white hover:bg-[#187746]" href={whatsappUrl(`Hello Mafick Integrated, we would like more information about ${listing.title}. Please share the current availability and inspection details.`)} target="_blank" rel="noreferrer"><MessageCircle size={16}/>Inquire on WhatsApp</a>
      </div>
    </div>
  </article>;
}
