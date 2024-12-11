import { memo } from 'react';
import classNames from 'classnames';
import { Title } from '@shared/ui/Title';
import styles from './InfoPageContent.module.scss';
import { OrderInfoList } from '../OrderInfoList/OrderInfoList';
import { BenefitsList } from '../BenefitsList/BenefitsList';

interface InfoPageContentProps {
  className?: string;
}

export const InfoPageContent = memo(({ className }: InfoPageContentProps) => {
  return (
    <div className={classNames(styles.component, className)}>
      <Title color='dark' weight='medium' className={styles.title}>
        Как купить билет на поезд онлайн?
      </Title>
      <OrderInfoList />
      <Title color='dark' weight='medium' className={styles.title}>
        Преимущества бронирования билетов у нас
      </Title>
      <BenefitsList />

      <p>
        Всё включено: цена, представленная на сайте, окончательная и включает
        все комиссии и сборы; Размер сервисного сбора один из самых низких на
        рынке; Бесплатная доставка двух и более жд-билетов в центр Москвы, а
        также любые другие варианты курьерской доставки в пределах Москвы —
        особенно удобно, если покупаете сразу билет туда и обратно, для
        корпоративных поездок и путешествий семьёй; Мы работаем ежедневно,
        включая выходные. В случае возникновения вопросов, операторы ответят на
        любые вопросы и помогут правильно сформировать ваш online заказ; Опыт —
        более 15 лет работы в сфере продажи железнодорожных и авиабилетов — от
        традиционных до электронных, через интернет; Технология — собственная
        платформа продажи проездных документов с использованием современных
        систем защиты информации; Подбор сложных маршрутов — при необходимости
        мы разработаем для вас наиболее удобный маршрут следования и пересадок;
        Наглядно — можно выбрать дешёвый билет, подходящий вам класс вагона или
        поймать акции (часто действуют скидки и акции, мы стараемся, чтобы
        билеты стоили недорого).
      </p>
    </div>
  );
});

InfoPageContent.displayName = 'InfoPageContent';
