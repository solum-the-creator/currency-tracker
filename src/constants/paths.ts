export enum UrlPaths {
  HOME = '/',
  TIMELINE = '/timeline',
  BANK_CARD = '/bank-card',
  CONTACT = '/contact',
}

export const navLinks = [
  {
    name: 'Home',
    path: UrlPaths.HOME,
  },
  {
    name: 'Timeline',
    path: UrlPaths.TIMELINE,
  },
  {
    name: 'Bank card',
    path: UrlPaths.BANK_CARD,
  },
  {
    name: 'Contact',
    path: UrlPaths.CONTACT,
  },
];

export const footerLinks: Array<{ to: string; label: string }> = [
  { label: 'Market', to: 'market.com' },
  { label: 'Service', to: 'service.com' },
  { label: 'Sparks', to: 'sparks.com' },
  { label: 'Snaps', to: 'snaps.com' },
  { label: 'Ideas', to: 'ideas.com' },
  { label: 'Streams', to: 'streams.com' },
];
