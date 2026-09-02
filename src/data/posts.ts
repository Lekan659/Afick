export type BlogPost = { slug:string; title:string; excerpt:string; date:string; readTime:string; image:string; sections:{heading:string; paragraphs:string[]}[] };

export const posts: BlogPost[] = [
  { slug:'what-to-check-before-buying-land-in-lagos', title:'What to check before buying land in Lagos', excerpt:'A practical first-pass checklist for title documents, location claims, physical inspection and professional verification.', date:'20 August 2026', readTime:'6 min read', image:'/images/listing-ibeju-land.webp', sections:[
    {heading:'Confirm the seller’s right to transact', paragraphs:['Before discussing payment plans, establish who owns the land and whether the person presenting it has authority to sell. Request the available title documents and confirm that names align with the owner or a valid power of attorney.','A receipt or allocation letter does not replace professional verification. Engage a qualified property lawyer and surveyor before transferring funds.']},
    {heading:'Inspect the exact plot', paragraphs:['Visit the land or appoint a trusted representative to inspect it. Confirm the coordinates, access road, surrounding development, drainage, boundary markers and whether any other party occupies or claims the plot.','Diaspora buyers should request live video inspections, timestamped location information and written reports rather than relying only on promotional clips.']},
    {heading:'Understand the total acquisition cost', paragraphs:['Request a breakdown of survey, legal, agency, development, documentation and infrastructure charges. A complete cost picture makes comparison easier and prevents unexpected obligations after a deposit.']},
  ]},
  { slug:'property-maintenance-plan-nigeria', title:'Why every managed property needs a maintenance plan', excerpt:'How preventive inspections, service schedules and clear reporting protect property value and reduce emergency repairs.', date:'12 August 2026', readTime:'5 min read', image:'/images/property-maintenance-team.webp', sections:[
    {heading:'Move from reaction to prevention', paragraphs:['Waiting for a major failure usually increases disruption and cost. A practical maintenance plan identifies electrical, plumbing, air-conditioning, roofing and structural checks before problems escalate.']},
    {heading:'Keep one reliable property record', paragraphs:['Inspection findings, quotations, approvals, completed work and service dates should be recorded consistently. This gives property owners a clearer view of condition, spending and upcoming priorities.']},
    {heading:'Coordinate vendors with accountability', paragraphs:['Defined scopes, agreed timelines, progress updates and completion checks help artisans and contractors deliver more consistently while owners retain visibility.']},
  ]},
  { slug:'renovation-before-renting-property', title:'Renovation priorities before putting a property on the market', excerpt:'Where repairs, presentation and practical upgrades can improve buyer or tenant confidence without wasting capital.', date:'2 August 2026', readTime:'7 min read', image:'/images/property-development-consultation.webp', sections:[
    {heading:'Start with condition, not decoration', paragraphs:['Resolve water ingress, electrical faults, plumbing problems, damaged finishes and safety issues before focusing on styling. Buyers and tenants notice unresolved maintenance quickly.']},
    {heading:'Improve the spaces people use most', paragraphs:['Kitchens, bathrooms, entrances, lighting and floor finishes strongly influence how a property is perceived. Prioritise durable, maintainable improvements that suit the target market.']},
    {heading:'Document the work', paragraphs:['Use a clear scope, quotations, progress photographs and completion checks. Good records help owners control cost and make future maintenance decisions with better information.']},
  ]},
];

export const getPost = (slug?: string) => posts.find((post) => post.slug === slug);
