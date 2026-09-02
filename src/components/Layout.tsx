import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { FloatingWhatsApp, WhatsAppButton } from './WhatsAppButton';

const nav = [['/','Home'],['/services','Services'],['/listings','Listings'],['/about','About'],['/blog','Guides'],['/contact','Contact']];

export function Layout() {
  const [open,setOpen] = useState(false);
  const location = useLocation();
  return <div className="min-h-screen bg-[#F7F8F5] text-[#202522]">
    <header className="sticky top-0 z-40 border-b border-[#D5DBD6] bg-[#F7F8F5]/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-4 sm:px-7 lg:px-12">
        <Link to="/" className="flex items-center gap-3" aria-label="Mafick Integrated home">
          <img src="/mafick-logo.jpg" alt="" className="h-12 w-12 object-cover object-top" />
          <span className="leading-none"><strong className="block font-display text-2xl tracking-wide text-[#17352C]">MAFICK</strong><small className="mt-1 block text-[9px] font-extrabold tracking-[.18em] text-[#8B4A35]">INTEGRATED</small></span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">{nav.map(([to,label]) => <NavLink key={to} to={to} className={({isActive}) => `border-b-2 py-2 text-sm font-bold ${isActive ? 'border-[#C1913D] text-[#17352C]' : 'border-transparent text-[#59635E] hover:text-[#17352C]'}`}>{label}</NavLink>)}</nav>
        <div className="hidden sm:block"><WhatsAppButton compact label="WhatsApp us" /></div>
        <button className="grid h-11 w-11 place-items-center text-[#17352C] lg:hidden" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
      </div>
      {open && <nav className="border-t border-[#D5DBD6] bg-white px-5 py-5 lg:hidden" aria-label="Mobile navigation">{nav.map(([to,label]) => <NavLink key={to} to={to} onClick={()=>setOpen(false)} className={({isActive}) => `block border-b border-[#E7EBE7] py-3 font-bold ${isActive ? 'text-[#8B4A35]' : 'text-[#17352C]'}`}>{label}</NavLink>)}<WhatsAppButton className="mt-5 w-full" /></nav>}
    </header>
    <main key={location.pathname}><Outlet/></main>
    <footer className="bg-[#112920] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_.8fr_.8fr] lg:px-12">
        <div><p className="font-display text-4xl">Property solutions, coordinated professionally.</p><p className="mt-4 max-w-md leading-7 text-white/65">Real estate, property management, maintenance, development support and advisory services across Nigeria.</p><a className="mt-5 flex items-center gap-2 font-bold text-[#D3AC67]" href="tel:+2348158475918"><Phone size={17}/>+234 815 847 5918</a></div>
        <div><p className="mb-4 font-bold text-[#D3AC67]">Explore</p>{nav.slice(1).map(([to,label])=><Link key={to} to={to} className="mb-3 block text-sm text-white/70 hover:text-white">{label}</Link>)}</div>
        <div><p className="mb-4 font-bold text-[#D3AC67]">Core services</p><p className="mb-3 text-sm text-white/70">Property marketing & transactions</p><p className="mb-3 text-sm text-white/70">Property & facility management</p><p className="text-sm text-white/70">Maintenance, renovation & development</p></div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45">© {new Date().getFullYear()} Mafick Integrated Nig. Ltd. All rights reserved.</div>
    </footer>
    <FloatingWhatsApp/>
  </div>;
}
