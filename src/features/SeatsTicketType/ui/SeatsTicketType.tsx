import { memo, useState } from 'react';
import classNames from 'classnames';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { RadioGroup } from '@shared/ui/RadioGroup';
import { usePersonCount } from '../lib/hooks/usePersonCount';
import { useAppDispatch } from '@shared/lib/hooks/useReduxHooks';
import {
  PersonName,
  setPersonCount,
} from '@entities/seats/model/slice/ticketInfoSlice';
import { type Direction } from '@shared/types';
import styles from './SeatsTicketType.module.scss';

interface SeatsTicketTypeProps {
  direction: Direction;
}

export const SeatsTicketType = memo(({ direction }: SeatsTicketTypeProps) => {
  const dispatch = useAppDispatch();
  const [openTooltip, setOpenTooltip] = useState(false);
  const {
    options,
    handleChange,
    adultCount,
    childCount,
    childWithoutSeatCount,
  } = usePersonCount({ direction });

  const clearState = (name: string) => {
    dispatch(
      setPersonCount({
        data: { value: 0, name: name as PersonName },
        direction,
      }),
    );
  };

  return (
    <>
      <div className={styles.title_wrapper}>
        <Title color='dark' weight='bold'>
          Количество билетов
        </Title>
        <div
          className={styles.icon}
          onMouseEnter={() => setOpenTooltip(true)}
          onMouseLeave={() => setOpenTooltip(false)}
        >
          <Icon iconName='icon-question' color='dark_gray' fontSize='10px' />
        </div>
        {openTooltip && (
          <div
            className={classNames(
              styles.tooltip,
              openTooltip ? styles.active_tooltip : '',
            )}
          >
            <p className={styles.text}>
              По правилам РЖД в одном заказе может быть не более 4-х пассажиров,
              включая детских «без места».
            </p>
          </div>
        )}
      </div>
      <div className={styles.radio_group}>
        <RadioGroup
          name='adult'
          onChange={handleChange}
          options={options.adultOptions}
          title='Взрослый'
          value={adultCount.toString()}
          iconName='icon-person'
          clearFunction={clearState}
        />

        <RadioGroup
          options={options.childOptions}
          name='child'
          title='Детский'
          value={childCount.toString()}
          onChange={handleChange}
          iconName='icon-person-kid'
          clearFunction={clearState}
        />

        <RadioGroup
          options={options.childWithoutSeatOptions}
          name='childWithoutSeat'
          title='Младенец «без места»'
          value={childWithoutSeatCount.toString()}
          onChange={handleChange}
          iconName='icon-person-baby'
          clearFunction={clearState}
        />
      </div>
    </>
  );
});
SeatsTicketType.displayName = 'SeatsTicketType';
