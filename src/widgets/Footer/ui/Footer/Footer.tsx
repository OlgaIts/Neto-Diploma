import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Element, scroller } from 'react-scroll';
import { Title } from '@shared/ui/Title';
import { TransparentButton } from '@shared/ui/TransparentButton';
import { Icon } from '@shared/ui/Icon';
import styles from './Footer.module.scss';

export const Footer = memo(() => {
  const scrollToTop = () => {
    scroller.scrollTo('top', {
      duration: 900,
      smooth: 'linear',
    });
  };

  return (
    <Element name="contact">
      <footer className={classNames(styles.footer)}>
        <div className={styles.container}>
          <div className={styles.section_wrapper}>
            <section>
              <Title color="light" weight="medium">
                Свяжитесь с нами
              </Title>
              <div className={styles.content}>
                <div className={classNames(styles.wrapper)}>
                  <Icon iconName={'icon-tel'} color="primary" fontSize="30px" />
                  <span>8 (800) 000 00 00</span>
                </div>
                <div className={classNames(styles.wrapper)}>
                  <Icon
                    iconName={'icon-envelope'}
                    color="primary"
                    fontSize="30px"
                  />
                  <span>inbox@mail.ru</span>
                </div>
                <div className={classNames(styles.wrapper)}>
                  <Icon
                    iconName={'icon-skype'}
                    color="primary"
                    fontSize="30px"
                  />
                  <span>tu.train.tickets</span>
                </div>
                <div className={classNames(styles.wrapper, styles.map_wrapper)}>
                  <Icon iconName={'icon-map'} color="primary" fontSize="30px" />
                  <span>
                    г. Москва <br />
                    ул. Московская 27-35
                    <br />
                    555 555
                  </span>
                </div>
              </div>
            </section>
            <section>
              <Title color="light" weight="medium">
                Подписка
              </Title>
              <p className={styles.text}>Будьте в курсе событий</p>
              <form action="" className={styles.form}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e-mail"
                  className={styles.input}
                />
                <TransparentButton
                  tag="button"
                  size="small"
                  weight="regular"
                  uppercase
                >
                  отправить
                </TransparentButton>
              </form>
              <section className={styles.subscribe_section}>
                <Title weight="medium" color="light">
                  Подписывайтесь на нас
                </Title>
                <div className={styles.links_wrapper}>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      iconName={'icon-youtube'}
                      color="primary"
                      fontSize="37px"
                      className={styles.social_icon}
                    ></Icon>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      iconName={'icon-linkedin'}
                      color="primary"
                      fontSize="30px"
                      className={styles.social_icon}
                    ></Icon>
                  </a>
                  <a
                    href="https://google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      iconName={'icon-google'}
                      color="primary"
                      fontSize="40px"
                      className={styles.social_icon}
                    ></Icon>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      iconName={'icon-facebook'}
                      color="primary"
                      fontSize="30px"
                      className={styles.social_icon}
                    ></Icon>
                  </a>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      iconName={'icon-twitter'}
                      color="primary"
                      fontSize="36px"
                      className={styles.social_icon}
                    ></Icon>
                  </a>
                </div>
              </section>
            </section>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.container}>
          <div className={styles.footer_bottom}>
            <Link to={'/'}>
              <span className={styles.logo}>Лого</span>
            </Link>
            <Icon
              iconName={'icon-chevron-circle'}
              color="primary"
              fontSize="36px"
              className={styles.scroller_btn}
              onClick={scrollToTop}
            />
            <p>2024 OlgaIts</p>
          </div>
        </div>
      </footer>
    </Element>
  );
});
Footer.displayName = 'Footer';
