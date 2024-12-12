import { memo } from 'react';
import classNames from 'classnames';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { OrderInfoList } from '../OrderInfoList/OrderInfoList';
import { BenefitsList } from '../BenefitsList/BenefitsList';
import { infoTexts } from '../../consts/infoTexts';
import styles from './InfoPageContent.module.scss';

interface InfoPageContentProps {
  className?: string;
}

export const InfoPageContent = memo(({ className }: InfoPageContentProps) => {
  return (
    <div className={classNames(styles.component, className)}>
      <Title color='dark' weight='medium' className={styles.title}>
        Как купить билет на поезд онлайн?
      </Title>
      <OrderInfoList />
      <Title color='dark' weight='medium' className={styles.title}>
        Преимущества бронирования билетов у нас
      </Title>
      <BenefitsList />
      <ul>
        {infoTexts.map((item) => (
          <li key={item.id} className={styles.list_item}>
            <Icon iconName='icon-check' color='accent' fontSize='20px' />
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});

InfoPageContent.displayName = 'InfoPageContent';
