type Props = { kicker?:string; title:string; intro?:string; light?:boolean; className?:string };
export function SectionHeading({ kicker, title, intro, light=false, className='' }: Props) {
  return <div className={`max-w-3xl ${className}`}>
    {kicker && <p className={`mb-3 text-sm font-bold ${light ? 'text-[#D3AC67]' : 'text-[#8B4A35]'}`}>{kicker}</p>}
    <h2 className={`font-display text-4xl leading-[1.02] sm:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-[#17352C]'}`}>{title}</h2>
    {intro && <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${light ? 'text-white/70' : 'text-[#59635E]'}`}>{intro}</p>}
  </div>;
}
