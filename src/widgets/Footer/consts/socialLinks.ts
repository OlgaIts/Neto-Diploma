import { v4 as uuidv4 } from 'uuid';
import { type IconName } from '@shared/ui/Icon';

interface SocialLink {
  id: string;
  href: string;
  iconName: IconName;
  fontSize: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: uuidv4(),
    href: 'https://www.youtube.com/',
    iconName: 'icon-youtube',
    fontSize: '37px',
  },
  {
    id: uuidv4(),
    href: 'https://www.linkedin.com/',
    iconName: 'icon-linkedin',
    fontSize: '30px',
  },
  {
    id: uuidv4(),
    href: 'https://google.com/',
    iconName: 'icon-google',
    fontSize: '40px',
  },
  {
    id: uuidv4(),
    href: 'https://www.facebook.com/',
    iconName: 'icon-facebook',
    fontSize: '30px',
  },
  {
    id: uuidv4(),
    href: 'https://x.com/',
    iconName: 'icon-twitter',
    fontSize: '36px',
  },
];
