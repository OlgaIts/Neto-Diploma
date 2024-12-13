import { Element } from 'react-scroll';
import { About, Benefits, StartHeader } from '@widgets/StartPageContent';
import { ReviewsCarousel } from '@entities/reviews';
import { Title } from '@shared/ui/Title';
import styles from './StartPage.module.scss';

export const StartPage = () => {
  return (
    <>
      <StartHeader />
      <div className={styles.line}></div>
      <main className={styles.main}>
        <Element name='about'>
          <section>
            <div className={styles.container}>
              <About />
            </div>
          </section>
        </Element>
        <Element name='how-it-works'>
          <section className={styles.about}>
            <div className={styles.container}>
              <Benefits />
            </div>
          </section>
        </Element>
        <div className={styles.container}>
          <Element name='reviews'>
            <section>
              <Title
                color='dark'
                weight='medium'
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
