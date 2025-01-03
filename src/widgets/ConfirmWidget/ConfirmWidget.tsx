import { memo } from 'react';
import classNames from 'classnames';
import { StarRating } from '@features/StarRating';
import { GoHomeButton } from '@features/GoHomeButton';
import { getPaymentPerson } from '@features/PassengerForm';
import { getRoutesTotalPrice } from '@entities/seats';
import { Icon } from '@shared/ui/Icon';
import { toLocalString } from '@shared/lib/utils';
import { useAppSelector } from '@shared/lib/hooks';
import styles from './ConfirmWidget.module.scss';

interface ConfirmWidgetProps {
  className?: string;
}

export const ConfirmWidget = memo(({ className }: ConfirmWidgetProps) => {
  const totalPrice = useAppSelector(getRoutesTotalPrice);
  const paymentPerson = useAppSelector(getPaymentPerson);

  return (
    <div className={classNames(styles.component, className)}>
      <section>
        <header className={styles.header}>
          <p className={styles.order}>№Заказа 285АА</p>
          <div className={styles.price_wrapper}>
            <p>сумма</p>
            <span>{toLocalString(totalPrice)}</span>
            <Icon iconName='icon-ruble' color='dark_gray' fontSize='26px' />
          </div>
        </header>

        <section className={styles.section}>
          <div className={styles.wrapper}>
            <div className={styles.icon_wrapper}>
              <Icon iconName='icon-ticket' fontSize='130px' />
            </div>
            <p className={styles.text}>билеты будут отправлены на ваш e-mail</p>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.icon_wrapper}>
              <Icon iconName='icon-two-tickets' fontSize='130px' />
            </div>
            <p className={styles.text}>
              <span>распечатайте</span> и сохраняйте билеты до даты поездки
            </p>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.icon_wrapper}>
              <Icon iconName='icon-conductor' fontSize='130px' />
            </div>
            <p className={styles.text}>
              <span>предъявите</span> распечатанные билеты при посадке
            </p>
          </div>
        </section>

        <section className={styles.main_section}>
          <p
            className={styles.name}
          >{`${paymentPerson.firstName} ${paymentPerson.middleName}!`}</p>
          <p>Ваш заказ успешно оформлен.</p>
          <p>
            В ближайшее время с вами свяжется наш оператор для подтверждения.
          </p>
          <p className={styles.thanks_text}>
            Благодарим Вас за оказанное доверие и желаем приятного путешествия!
          </p>
        </section>
        <footer className={styles.footer}>
          <div className={styles.rating}>
            <p>Оценить сервис</p>
            <StarRating count={5} />
          </div>
          <GoHomeButton />
        </footer>
      </section>
    </div>
  );
});
ConfirmWidget.displayName = 'ConfirmWidget';
