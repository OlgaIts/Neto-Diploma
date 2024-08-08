import { memo } from 'react';
import classNames from 'classnames';
import { Element, scroller } from 'react-scroll';
import { Title } from '@shared/ui/Title';
import { TransparentButton } from '@shared/ui/TransparentButton';
import TelIcon from '../../../shared/assets/svg/footer/tel.svg?react';
import MailIcon from '../../../shared/assets/svg/footer/envelope.svg?react';
import SkypeIcon from '../../../shared/assets/svg/footer/skype.svg?react';
import MapIcon from '../../../shared/assets/svg/footer/map.svg?react';
import YoutubeIcon from '../../../shared/assets/svg/footer/youtube-168-svgrepo-com.svg?react';
import LinkedinIcon from '../../../shared/assets/svg/footer/linkedin.svg?react';
import TwitterIcon from '../../../shared/assets/svg/footer/twitter.svg?react';
import GoogleIcon from '../../../shared/assets/svg/footer/google.svg?react';
import FacebookIcon from '../../../shared/assets/svg/footer/facebook.svg?react';
import ArrowIcon from '../../../shared/assets/svg/footer/chevron_circle.svg?react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

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
                  <TelIcon />
                  <span>8 (800) 000 00 00</span>
                </div>
                <div className={classNames(styles.wrapper)}>
                  <MailIcon />
                  <span>inbox@mail.ru</span>
                </div>
                <div className={classNames(styles.wrapper)}>
                  <SkypeIcon />
                  <span>tu.train.tickets</span>
                </div>
                <div className={classNames(styles.wrapper, styles.map_wrapper)}>
                  <MapIcon />
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
                    <YoutubeIcon
                      width="37px"
                      className={classNames(styles.social_icon, styles.youtube)}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className={styles.social_icon} />
                  </a>
                  <a
                    href="https://google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GoogleIcon className={styles.social_icon} />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon className={styles.social_icon} />
                  </a>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon className={styles.social_icon} />
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
            <ArrowIcon onClick={scrollToTop} className={styles.scroller_btn} />
            <p>2024 OlgaIts</p>
          </div>
        </div>
      </footer>
    </Element>
  );
});
Footer.displayName = 'Footer';
