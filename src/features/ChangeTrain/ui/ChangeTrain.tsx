import { memo } from 'react';
import classNames from 'classnames';
import styles from './ChangeTrain.module.scss';
import { Icon } from '@shared/ui/Icon';
import { Button } from '@shared/ui/Button';

interface ChangeTrainProps {
  className?: string;
  iconName: string;
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

