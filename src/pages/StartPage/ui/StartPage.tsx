import classNames from 'classnames';
import { Element } from 'react-scroll';
import { Title } from '@shared/ui/Title';
import { TransparentButton } from '@shared/ui/TransparentButton';
import { Icon } from '@shared/ui/Icon';
import { ReviewsCarousel } from '@entities/reviews';
import { StartHeader } from './StartHeader/StartHeader';
import styles from './StartPage.module.scss';

export const StartPage = () => {
  return (
    <>
      <StartHeader />
      <div className={styles.line}></div>
      <main className={styles.main}>
        <Element name="about">
          <section>
            <div className={styles.container}>
              <Title color="dark" weight="medium" uppercase>
                О нас
              </Title>
              <div className={styles.text_wrapper}>
                <p className={styles.text}>
                  Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы
                  наблюдаем, как с каждым днем <br /> все больше людей
                  заказывают жд билеты через интернет.
                </p>
                <p className={styles.text}>
                  Сегодня можно заказать железнодорожные билеты онлайн всего в 2
                  клика, но стоит ли это делать?
                  <br /> Мы расскажем о преимуществах заказа через интернет.
                </p>
                <p className={classNames(styles.text, styles.text_bold)}>
                  Покупать жд билеты дешево можно за 90 суток до отправления
                  поезда.
                  <br />
                  Благодаря динамическому ценообразованию цена на билеты в это
                  время самая низкая.
                </p>
              </div>
            </div>
          </section>
        </Element>
        <Element name="how-it-works">
          <section className={styles.about}>
            <div className={styles.container}>
              <div className={styles.section_top}>
                <Title color="light" weight="medium" uppercase>
                  Как это работает
                </Title>
                <TransparentButton tag="button" size="big" weight="bold">
                  Узнать больше
                </TransparentButton>
              </div>
              <div className={styles.benefits_wrapper}>
                <div className={styles.benefit}>
                  <div className={styles.icon_wrap}>
                    <Icon
                      iconName={'icon-computer'}
                      color="accent"
                      fontSize="76px"
                    />
                  </div>
                  <p>
                    Удобный заказ <br /> на сайте
                  </p>
                </div>
                <div className={styles.benefit}>
                  <div className={styles.icon_wrap}>
                    <Icon
                      iconName={'icon-building'}
                      color="accent"
                      fontSize="76px"
                    />
                  </div>
                  <p>
                    Нет необходимости <br /> ехать в офис
                  </p>
                </div>
                <div className={styles.benefit}>
                  <div className={styles.icon_wrap}>
                    <Icon
                      iconName={'icon-world'}
                      color="accent"
                      fontSize="76px"
                    />
                  </div>
                  <p>
                    Огромный выбор <br /> направлений
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Element>
        <div className={styles.container}>
          <Element name="reviews">
            <section>
              <Title
                color="dark"
                weight="medium"
                uppercase
                className={styles.reviews_title}
              >
                Отзывы
              </Title>
              <ReviewsCarousel />
            </section>
          </Element>
        </div>
      </main>
    </>
  );
};
