import { memo } from 'react';
import classNames from 'classnames';
import { Title } from '@shared/ui/Title';
import styles from './About.module.scss';

export const About = memo(() => {
  return (
    <>
      <Title color='dark' weight='medium' uppercase>
        О нас
      </Title>
      <div className={styles.text_wrapper}>
        <p className={styles.text}>
          Мы рады видеть вас! Мы работаем для Вас с 2003 года. 21 год мы
          наблюдаем, как с каждым днем <br /> все больше людей заказывают жд
          билеты через интернет.
        </p>
        <p className={styles.text}>
          Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика,
          но стоит ли это делать?
          <br /> Мы расскажем о преимуществах заказа через интернет.
        </p>
        <p className={classNames(styles.text, styles.text_bold)}>
          Покупать жд билеты дешево можно за 90 суток до отправления поезда.
          <br />
          Благодаря динамическому ценообразованию цена на билеты в это время
          самая низкая.
        </p>
      </div>
    </>
  );
});
About.displayName = 'About';
