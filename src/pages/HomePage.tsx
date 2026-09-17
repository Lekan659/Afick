import { Link } from 'react-router-dom';
import { Building2, ClipboardCheck, Hammer, Handshake, MessagesSquare, ShieldCheck, Wrench } from 'lucide-react';
import { listings } from '../data/listings';
import { ListingCard } from '../components/ListingCard';
import { SectionHeading } from '../components/SectionHeading';
import { Seo } from '../components/Seo';
import { WhatsAppButton } from '../components/WhatsAppButton';

const pillars = [
  { icon:Building2, title:'Property marketing & transactions', text:'We source, position, list and market residential, commercial and industrial property, while coordinating buyers, sellers, tenants and inspections.' },
  { icon:ShieldCheck, title:'Property & facility management', text:'We supervise properties, coordinate occupants and service providers, plan maintenance and provide clear condition and activity reports.' },
  { icon:Hammer, title:'Development & improvement', text:'We coordinate renovation, architectural support, contractors, cleaning, repairs and property upgrades from planning through completion.' },
];
const reasons = [
  ['End-to-end coordination','One accountable property-services relationship across sourcing, marketing, management, maintenance and improvement.'],
  ['Professional communication','Clear inspection updates, quotations, maintenance schedules, transaction reports and project progress information.'],
  ['Practical market knowledge','Property decisions are grounded in location, condition, buyer expectations, investment objectives and current market positioning.'],
  ['Reliable service network','Architects, engineers, artisans, contractors, cleaners and facility providers are coordinated around defined scopes.'],
  ['Owner and investor visibility','Property owners receive organised information that supports approvals, budgeting and long-term asset decisions.'],
  ['Integrity and accountability','We communicate what is confirmed, identify what requires professional verification and keep responsibilities clear.'],
];

export function HomePage() {
  return <>
    <Seo title="Real Estate & Property Services in Nigeria" description="Mafick Integrated provides property marketing, buying, management, maintenance, renovation, development support and advisory services across Nigeria." />
    <section className="relative overflow-hidden bg-[#17352C] text-white">
      <div className="mx-auto grid min-h-[690px] max-w-[1440px] lg:grid-cols-[1.02fr_.98fr]">
        <div className="hero-enter flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <p className="mb-6 flex items-center gap-3 text-sm font-bold text-[#D3AC67]"><span className="h-px w-10 bg-[#C1913D]"/>Real estate and property services across Nigeria</p>
          <h1 className="max-w-3xl font-display text-5xl leading-[.98] sm:text-7xl lg:text-[82px]">Property solutions built around lasting value.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/72">Mafick Integrated provides reliable, professional support across the property lifecycle—from sourcing, marketing, buying and selling to management, maintenance, renovation and development coordination.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><WhatsAppButton label="Discuss a property need"/><Link className="inline-flex min-h-11 items-center justify-center border border-white/35 px-5 py-3 font-bold hover:bg-white hover:text-[#17352C]" to="/services">Explore our services</Link></div>
        </div>
        <div className="relative min-h-[460px] lg:min-h-full"><img src="/images/hero-lekki-estate.webp" alt="Contemporary residential estate in Lekki, Lagos" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-[#17352C]/75 via-transparent to-transparent"/><div className="absolute bottom-6 left-5 right-5 border-l-4 border-[#C1913D] bg-[#112920]/92 p-5 text-sm leading-6 text-white/80 sm:left-8 sm:right-auto sm:max-w-sm"><strong className="mb-1 block text-white">Reliable from brief to handover.</strong>Professional coordination, transparent updates and practical solutions for owners, buyers, investors and corporate organisations.</div></div>
      </div>
    </section>

    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <SectionHeading kicker="Our property lifecycle" title="One company across every stage of the property journey." intro="Our services are structured to protect property value, simplify coordination and give clients a dependable route from opportunity to operation."/>
      <div className="mt-12 grid border-y border-[#AEB8B1] md:grid-cols-3">{pillars.map(({icon:Icon,title,text},i)=><article key={title} className={`py-8 md:px-7 ${i<2?'border-b border-[#D5DBD6] md:border-b-0 md:border-r':''}`}><Icon className="text-[#8B4A35]"/><h3 className="mt-8 font-display text-3xl text-[#17352C]">{title}</h3><p className="mt-3 leading-7 text-[#59635E]">{text}</p><Link className="mt-6 inline-block border-b border-[#C1913D] pb-1 text-sm font-bold text-[#17352C]" to="/services">View service details</Link></article>)}</div>
    </section>

    <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading kicker="Selected opportunities" title="Residential, commercial and investment property." intro="Availability, documentation and pricing are confirmed directly before inspection or commitment."/><Link to="/listings" className="shrink-0 border-b-2 border-[#C1913D] pb-1 font-bold text-[#17352C]">View all listings</Link></div><div className="mt-12 grid gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3">{listings.map(x=><ListingCard key={x.slug} listing={x}/>)}</div></div></section>

    <section className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:px-12 lg:py-28"><div><SectionHeading kicker="Why Mafick Integrated" title="Professional responsibility at every touchpoint." intro="Property owners and investors need more than promises. They need clear scopes, accountable coordination and timely information."/><img src="/images/property-development-consultation.webp" alt="Nigerian property development team reviewing project plans" className="mt-8 aspect-[16/10] w-full object-cover"/></div><div className="grid border-t border-[#AEB8B1] sm:grid-cols-2">{reasons.map(([title,text],i)=><article key={title} className={`py-6 sm:px-6 ${i%2===0?'sm:border-r':''} border-b border-[#D5DBD6]`}><div className="flex items-start gap-3">{i===0?<Handshake className="mt-1 shrink-0 text-[#8B4A35]"/>:i===1?<MessagesSquare className="mt-1 shrink-0 text-[#8B4A35]"/>:i===3?<Wrench className="mt-1 shrink-0 text-[#8B4A35]"/>:<ClipboardCheck className="mt-1 shrink-0 text-[#8B4A35]"/>}<div><h3 className="font-display text-2xl text-[#17352C]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#59635E]">{text}</p></div></div></article>)}</div></section>

    <section className="bg-[#E8EDE8] py-20 lg:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><SectionHeading kicker="How we work" title="A structured route from consultation to delivery."/><ol className="mt-12 grid gap-px bg-[#B9C4BC] md:grid-cols-4">{[['Consultation','We define the property, objective, priority, budget, timeline and reporting requirements.'],['Assessment & plan','We inspect, review available information and prepare a practical scope or marketing strategy.'],['Coordination & delivery','Our team coordinates people, property activity, contractors, viewings or project execution.'],['Reporting & follow-through','We provide updates, records and recommendations so decisions remain informed after delivery.']].map(([title,text],i)=><li key={title} className="bg-[#F7F8F5] p-7"><span className="font-display text-4xl text-[#C1913D]">{i+1}</span><h3 className="mt-8 font-display text-2xl text-[#17352C]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#59635E]">{text}</p></li>)}</ol></div></section>

    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><SectionHeading kicker="Corporate communication" title="Clear information throughout every engagement." intro="Our communication approach is professional, transparent and responsive, helping property owners, buyers, tenants, investors, contractors and other stakeholders stay informed."/><div className="mt-12 grid gap-px bg-[#C4CCC6] md:grid-cols-2">{[
      ['Property reports','Organised findings, condition notes and practical recommendations for informed property decisions.'],
      ['Inspection & transaction updates','Timely information on inspections, viewings, negotiations, documentation and agreed next steps.'],
      ['Maintenance schedules & quotations','Clear scopes, service priorities, cost information and approval requirements before work proceeds.'],
      ['Project progress reports','Structured updates on work completed, current activity, issues requiring attention and upcoming milestones.'],
    ].map(([title,text])=><article key={title} className="bg-white p-7 sm:p-10"><h3 className="font-display text-3xl text-[#17352C]">{title}</h3><p className="mt-4 leading-7 text-[#59635E]">{text}</p></article>)}</div></section>

    <section className="bg-[#8B4A35] px-5 py-16 text-white sm:px-8"><div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div><h2 className="font-display text-4xl sm:text-5xl">What property challenge can we solve?</h2><p className="mt-3 text-white/75">Share the property type, location, objective and preferred timeline with our team.</p></div><WhatsAppButton className="shrink-0 bg-[#17352C] hover:bg-[#112920]" label="Speak with our team"/></div></section>
  </>;
}
