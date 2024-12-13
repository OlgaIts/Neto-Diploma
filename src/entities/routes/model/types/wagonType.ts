import { type IconName } from '@shared/ui/Icon';

interface WagonTypeItem {
  label: string;
  iconName: IconName;
}

export interface WagonType {
  fourth: WagonTypeItem;
  third: WagonTypeItem;
  second: WagonTypeItem;
  first: WagonTypeItem;
}
