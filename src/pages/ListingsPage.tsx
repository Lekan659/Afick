import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListingCard } from '../components/ListingCard';
import { Seo } from '../components/Seo';
import { listings } from '../data/listings';
import { WhatsAppButton } from '../components/WhatsAppButton';

export function ListingsPage() {
  const [propertyType,setPropertyType]=useState('all');
  const [location,setLocation]=useState('all');
  const [status,setStatus]=useState('all');
  const filtered=useMemo(()=>listings.filter(x=>{
    if(propertyType!=='all'&&x.propertyType!==propertyType) return false;
    if(location!=='all'&&!x.location.includes(location)) return false;
    if(status!=='all'&&x.status!==status) return false;
    return true;
  }),[propertyType,location,status]);
  return <>
    <Seo title="Property Listings" description="Browse residential, land, commercial and industrial property opportunities presented by Mafick Integrated across Nigeria."/>
    <section className="bg-[#17352C] px-5 py-16 text-white sm:px-8 lg:py-24"><div className="mx-auto max-w-[1200px]"><p className="mb-4 font-bold text-[#D3AC67]">Property listings</p><h1 className="font-display text-5xl sm:text-7xl">Opportunities for living, investment and business.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">Review current residential, commercial, land and industrial opportunities, then contact our team for availability, documentation and inspection details.</p></div></section>
    <section className="sticky top-[76px] z-30 border-b border-[#C5CEC7] bg-[#F7F8F5]/95 px-4 py-4 backdrop-blur"><div className="mx-auto flex max-w-[1350px] flex-wrap gap-3"><label className="text-xs font-bold text-[#59635E]">Property type<select className="ml-2 min-h-11 border border-[#AEB8B1] bg-white px-3 text-sm" value={propertyType} onChange={e=>setPropertyType(e.target.value)}><option value="all">All types</option><option value="land">Land</option><option value="house">Houses</option><option value="apartment">Apartments</option><option value="commercial">Commercial</option><option value="industrial">Industrial</option></select></label><label className="text-xs font-bold text-[#59635E]">Location<select className="ml-2 min-h-11 border border-[#AEB8B1] bg-white px-3 text-sm" value={location} onChange={e=>setLocation(e.target.value)}><option value="all">All locations</option><option value="Lekki">Lekki / Ibeju</option><option value="Ajah">Ajah</option><option value="Ikeja">Ikeja</option><option value="Abuja">Abuja</option><option value="Lagos">Lagos</option></select></label><label className="text-xs font-bold text-[#59635E]">Availability<select className="ml-2 min-h-11 border border-[#AEB8B1] bg-white px-3 text-sm" value={status} onChange={e=>setStatus(e.target.value)}><option value="all">Sale or rent</option><option value="For sale">For sale</option><option value="For rent">For rent</option></select></label></div></section>
    <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12"><div className="border-b border-[#AEB8B1] pb-6"><p className="font-display text-3xl text-[#17352C]">{filtered.length} {filtered.length===1?'property':'properties'}</p><p className="mt-1 text-sm text-[#68736D]">Confirm current availability, documentation and price directly with our team.</p></div>
      {filtered.length?<div className="mt-10 grid gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3">{filtered.map(x=><ListingCard key={x.slug} listing={x}/>)}</div>:<div className="my-20 border-y border-[#AEB8B1] py-16 text-center"><h2 className="font-display text-4xl text-[#17352C]">No property currently matches those filters.</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-[#59635E]">Share the preferred location, property type and budget. Our sourcing team can review the wider market.</p><Link className="mt-7 inline-flex min-h-11 items-center bg-[#17352C] px-6 font-bold text-white" to="/contact">Send a property brief</Link></div>}
      <div className="my-20 grid gap-7 bg-[#8B4A35] p-7 text-white sm:p-10 md:grid-cols-[1fr_auto] md:items-center"><div><h2 className="font-display text-4xl">Need a different property?</h2><p className="mt-3 text-white/75">Our team can source residential, commercial, industrial or investment opportunities around a defined brief.</p></div><WhatsAppButton className="bg-[#17352C] hover:bg-[#112920]" message="Hello Mafick Integrated, we would like to share a property sourcing brief." label="Share a property brief"/></div>
    </section>
  </>;
}
