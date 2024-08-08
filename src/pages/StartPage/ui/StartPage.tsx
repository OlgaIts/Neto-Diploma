import classNames from 'classnames';
import { Element } from 'react-scroll';
import { StartPageForm } from './StartPageForm/StartPageForm';
import { ReviewsCarousel } from '../../../widgets/ui/ReviewsCarousel';
import { Footer } from '../../../widgets/ui/Footer';
import { Title } from '../../../shared/ui/Title';
import { TransparentButton } from '../../../shared/ui/TransparentButton';
import { HeaderNav } from '../../../shared/ui/HeaderNav';
import ComputerIcon from '../../../shared/assets/svg/computer.svg?react';
import BuildingIcon from '../../../shared/assets/svg/building-2.svg?react';
import WorldIcon from '../../../shared/assets/svg/world.svg?react';
import styles from './StartPage.module.scss';

export const StartPage = () => {
  return (
    <>
      <header className={styles.header}>
        <HeaderNav />
        <div className={styles.container}>
          <div className={styles.title_wrap}>
            <h1 className={styles.title}>
              Вся жизнь - <span>путешествие!</span>
            </h1>
            <div className={styles.form_wrap}>
              <StartPageForm />
            </div>
          </div>
        </div>
      </header>
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
                    <ComputerIcon width="76px" height="76px" />
                  </div>
                  <p>
                    Удобный заказ <br /> на сайте
                  </p>
                </div>
                <div className={styles.benefit}>
                  <div className={styles.icon_wrap}>
                    <BuildingIcon width="76px" height="76px" />
                  </div>
                  <p>
                    Нет необходимости <br /> ехать в офис
                  </p>
                </div>
                <div className={styles.benefit}>
                  <div className={styles.icon_wrap}>
                    <WorldIcon width="76px" height="76px" />
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
      <Footer />
    </>
  );
};
