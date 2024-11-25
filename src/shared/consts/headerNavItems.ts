import { v4 as uuidv4 } from 'uuid';

interface NavItem {
  id: string;
  title: string;
  to: string;
  duration: number;
}

export const navItems: NavItem[] = [
  { id: uuidv4(), title: 'О нас', to: 'about', duration: 800 },
  {
    id: uuidv4(),
    title: 'Как это работает',
    to: 'how-it-works',
    duration: 800,
  },
  { id: uuidv4(), title: 'Отзывы', to: 'reviews', duration: 700 },
  { id: uuidv4(), title: 'Контакты', to: 'contact', duration: 700 },
];
