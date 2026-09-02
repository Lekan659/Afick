import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../lib/constants';

type Props = { message?:string; label?:string; className?:string; compact?:boolean };

export function WhatsAppButton({ message, label='Chat with our team', className='', compact=false }: Props) {
  return <a className={`inline-flex min-h-11 items-center justify-center gap-2 bg-[#1f8f54] px-5 py-3 font-bold text-white transition hover:bg-[#187746] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C1913D] ${compact ? 'text-sm' : ''} ${className}`} href={whatsappUrl(message)} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true" />{label}</a>;
}

export function FloatingWhatsApp() {
  return <a className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1f8f54] text-white shadow-[0_8px_24px_rgba(20,48,39,.28)] transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C1913D]" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Chat with Mafick Integrated on WhatsApp"><MessageCircle size={25} /></a>;
}
