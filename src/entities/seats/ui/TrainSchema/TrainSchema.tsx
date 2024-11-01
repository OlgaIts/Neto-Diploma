import { MemoExoticComponent, memo } from 'react';
import { FirstClassSchema, SeatsSchema } from '@shared/ui/WagonClassSchemes';
import { ThirdClassSchema } from '@shared/ui/WagonClassSchemes';
import { FourthClassSchema } from '@shared/ui/WagonClassSchemes';
import {
  FirstClassSeatsParams,
  FourthClassSeatsParams,
  SeatsParams,
  SecondClassSeatsParams,
  ThirdClassSeatsParams,
} from '@shared/ui/WagonClassSchemes/consts/seatsParams';
import { type SpecificPlace } from '@shared/types';
import { type WagonClass } from '../../model/types/wagonClass';
import styles from './TrainSchema.module.scss';

interface TrainSchemaProps {
  wagonClass: WagonClass;
  wagonNumber: number;
  seats?: Record<number, SpecificPlace>;
  onClick?: (seatNumber: number) => void;
}

interface SchemaComponents {
  schema: MemoExoticComponent<() => JSX.Element>;
  params: SeatsParams;
}

const SchemaComponents: Record<WagonClass, SchemaComponents> = {
  first: {
    schema: FirstClassSchema,
    params: FirstClassSeatsParams,
  },
  second: {
    schema: FirstClassSchema,
    params: SecondClassSeatsParams,
  },
  third: {
    schema: ThirdClassSchema,
    params: ThirdClassSeatsParams,
  },
  fourth: {
    schema: FourthClassSchema,
    params: FourthClassSeatsParams,
  },
};

export const TrainSchema = memo(
  ({ wagonClass, wagonNumber, seats, onClick }: TrainSchemaProps) => {
    const Component = SchemaComponents[wagonClass].schema;

    return (
      <div className={styles.component}>
        <Component />
        <div className={styles.schema}>
          <SeatsSchema
            params={SchemaComponents[wagonClass].params}
            wagonNumber={wagonNumber}
            seats={seats}
            onClick={onClick}
          />
        </div>
      </div>
    );
  },
);

TrainSchema.displayName = 'TrainSchema';
