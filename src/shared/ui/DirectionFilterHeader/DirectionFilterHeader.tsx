import { memo, ReactNode, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { Title } from '../Title';
import styles from './DirectionFilterHeader.module.scss';

interface DirectionFilterHeaderProps {
  className?: string;
  children: ReactNode;
  title?: string;
  iconName?: string;
  date?: string;
}

export const DirectionFilterHeader = memo(
  ({
    className,
    children,
    iconName,
    title,
    date,
  }: DirectionFilterHeaderProps) => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
      <>
        <header className={classNames(styles.header, className)}>
          <div className={styles.title_wrapper}>
            <div className={styles.icon_wrapper}>
              <Icon iconName={iconName} color='dark' fontSize='16px' />
            </div>
            <Title color='light' weight='regular'>
              {title}
            </Title>
          </div>

          {location.pathname !== '/seats' ? (
            <div className={styles.date}>{date}</div>
          ) : null}

          <button
            className={styles.open_btn}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <Icon iconName={'icon-minus'} color='white' />
            ) : (
              <Icon iconName={'icon-plus'} color='white' />
            )}
          </button>
        </header>
        {open && children}
      </>
    );
  },
);

DirectionFilterHeader.displayName = 'DirectionFilterHeader';
