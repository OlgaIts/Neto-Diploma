import { IconName } from '@shared/ui/Icon';

export interface Options {
  name: IconName;
  tooltip: string;
  active?: boolean;
  included: boolean;
  disabled: boolean;
  price?: number;
}
