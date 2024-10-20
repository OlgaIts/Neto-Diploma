import { memo, useState } from 'react';
import classNames from 'classnames';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { PassengerForm } from '@features/PassengerInfo';
import styles from './AddPassengerForm.module.scss';

export const AddPassengerForm = memo(() => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className={styles.component}>
      <header className={styles.header}>
        <div className={styles.title_wrapper}>
          <div
            className={classNames(
              styles.icon_wrapper,
              openForm ? styles.icon_active : '',
            )}
            onClick={() => setOpenForm(() => !openForm)}
          >
            <Icon
              iconName={openForm ? 'icon-minus' : 'icon-plus'}
              color={openForm ? 'dark_gray' : 'accent'}
              fontSize='16px'
            />
          </div>
          <Title color='dark' weight='regular'>
            Пассажир <span>1</span>
          </Title>
        </div>
        <Icon
          iconName={'icon-close'}
          fontSize='12px'
          color='grey'
          className={styles.passenger_icon}
        />
      </header>

      {openForm && <PassengerForm />}
    </div>
  );
});
AddPassengerForm.displayName = 'AddPassengerForm';
