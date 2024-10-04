import { memo, useState } from 'react';
import classNames from 'classnames';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { GenderSwitch } from '@shared/ui/GenderSwitch';
import { Checkbox } from '@shared/ui/Checkbox';
import { DropdownButton } from '@shared/ui/DropdownButton';
import styles from './AddPassengerForm.module.scss';

const wagonType = ['Взрослый', 'Детский'];
const pass = [' Паспорт РФ', 'Свидетельство о рождении'];

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

      {openForm && (
        <section className={styles.section}>
          {/* // TODO: отдельный компонент */}
          <div className={styles.select_gender}>
            <DropdownButton list={wagonType} />
          </div>

          <form>
            <div className={styles.name_wrapper}>
              <div className={styles.input_wrapper}>
                <label className={styles.label} htmlFor='surname'>
                  Фамилия
                </label>
                <input type='text' id='surname' className={styles.input} />
              </div>

              <div className={styles.input_wrapper}>
                <label className={styles.label} htmlFor='firstname'>
                  Имя
                </label>
                <input type='text' id='firstname' className={styles.input} />
              </div>

              <div className={styles.input_wrapper}>
                <label className={styles.label} htmlFor='middlename'>
                  Отчество
                </label>
                <input type='text' id='middlename' className={styles.input} />
              </div>
            </div>

            <div className={styles.wrapper}>
              <GenderSwitch />

              <div className={styles.input_wrapper}>
                <label className={styles.label} htmlFor='birthday'>
                  Дата рождения
                </label>
                <input
                  type='text'
                  id='birthday'
                  className={styles.input}
                  placeholder='ДД/ММ/ГГ'
                />
              </div>
            </div>

            <div className={styles.mobility_wrapper}>
              <Checkbox labelText='ограниченная подвижность' id='mobility' />
            </div>
          </form>

          <article>
            <DropdownButton list={pass} id='pass' className={styles.pass} />
          </article>
        </section>
      )}
    </div>
  );
});
AddPassengerForm.displayName = 'AddPassengerForm';
