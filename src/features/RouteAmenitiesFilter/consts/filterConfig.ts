import { type RouteFilters } from '@entities/routes';
import { type IconName } from '@shared/ui/Icon';

interface Option {
  iconName: IconName;
  label: string;
}

export const options: Partial<Record<keyof RouteFilters, Option>> = {
  have_second_class: {
    iconName: 'icon-coupe',
    label: 'Купе',
  },
  have_third_class: {
    iconName: 'icon-berth',
    label: 'Плацкарт',
  },
  have_fourth_class: {
    iconName: 'icon-sitting',
    label: 'Сидячий',
  },
  have_first_class: {
    iconName: 'icon-luxe',
    label: 'Люкс',
  },
  have_wifi: {
    iconName: 'icon-wi-fi',
    label: 'Wi-Fi',
  },
  have_express: {
    iconName: 'icon-express',
    label: 'Экспресс',
  },
  have_air_conditioning: {
    iconName: 'icon-conditioner',
    label: 'Кондиционер',
  },
};
