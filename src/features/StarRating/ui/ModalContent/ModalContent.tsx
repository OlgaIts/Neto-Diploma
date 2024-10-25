import { memo } from 'react';
import classNames from 'classnames';
import { Icon } from '@shared/ui/Icon';
import styles from './ModalContent.module.scss';

interface ModalContentProps {
  className?: string;
}
export const ModalContent = memo(({ className }: ModalContentProps) => {
  return (
    <div className={classNames(styles.component, className)}>
      <p className={styles.text}>Спасибо, что оценили нас сервис!</p>
      <p>Мы работаем над тем, чтобы каждый клиент оставался доволен.</p>
      <p className={styles.text_3}>Ждём Вас снова!</p>
      <Icon
        iconName='icon-wagons'
        fontSize='30px'
        color='dark_gray'
        className={styles.icon}
      />
    </div>
  );
});
ModalContent.displayName = 'ModalContent';
