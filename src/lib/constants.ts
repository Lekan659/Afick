export const WHATSAPP_NUMBER = '2348158475918';
export const WHATSAPP_DISPLAY = '+234 815 847 5918';

export function whatsappUrl(message = 'Hello Mafick Integrated, we would like to discuss a property service.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const BUSINESS = {
  name: 'Mafick Integrated',
  registration: 'Mafick Integrated Nig. Ltd. — registered real estate and property services company in Nigeria.',
};
