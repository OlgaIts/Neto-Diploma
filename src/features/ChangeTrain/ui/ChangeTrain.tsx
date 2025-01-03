import { memo } from 'react';
import classNames from 'classnames';
import { Button } from '@shared/ui/Button';
import { Icon, type IconName } from '@shared/ui/Icon';
import styles from './ChangeTrain.module.scss';

interface ChangeTrainProps {
  className?: string;
  iconName: IconName;
}

export const ChangeTrain = memo(({ className, iconName }: ChangeTrainProps) => {
  return (
    <div className={classNames(styles.btn_wrapper, className)}>
      <div className={styles.icon_wrapper}>
        <Icon iconName={iconName} color='white' fontSize='30px' />
      </div>
      <Button color='black' bgColor='light' tag='Link' to='/train' size='m'>
        Выбрать другой поезд
      </Button>
    </div>
  );
});
ChangeTrain.displayName = 'ChangeTrain';
