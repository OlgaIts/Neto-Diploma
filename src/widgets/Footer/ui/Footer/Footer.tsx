import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Element, scroller } from 'react-scroll';
import { SubscribeForm } from '@features/SubscribeForm';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { socialLinks } from '../../consts/socialLinks';
import { contactInfo } from '../../consts/contactInfo';
import styles from './Footer.module.scss';

export const Footer = memo(() => {
  const scrollToTop = () => {
    scroller.scrollTo('top', {
      duration: 900,
      smooth: 'linear',
    });
  };

  return (
    <Element name='contact'>
      <footer className={classNames(styles.footer)}>
        <div className={styles.container}>
          <div className={styles.section_wrapper}>
            <section>
              <Title color='light' weight='medium'>
                Свяжитесь с нами
              </Title>
              <ul className={styles.content}>
                {contactInfo.map(({ id, iconName, text }) => (
                  <li className={styles.wrapper} key={id}>
                    <Icon iconName={iconName} color='primary' fontSize='30px' />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <Title color='light' weight='medium'>
                Подписка
              </Title>
              <p className={styles.text}>Будьте в курсе событий</p>
              <SubscribeForm />
              <section className={styles.subscribe_section}>
                <Title weight='medium' color='light'>
                  Подписывайтесь на нас
                </Title>
                <ul className={styles.links_wrapper}>
                  {socialLinks.map(({ id, href, iconName, fontSize }) => (
                    <li key={id}>
                      <a href={href} target='_blank' rel='noopener noreferrer'>
                        <Icon
                          iconName={iconName}
                          color='primary'
                          fontSize={fontSize}
                          className={styles.social_icon}
                        ></Icon>
                      </a>
                    </li>
                  ))}
                </ul>
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
              color='primary'
              fontSize='36px'
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
