import { MemoExoticComponent, memo } from 'react';
import { SeatsSchema } from './SeatsSchema/SeatsSchema';
import {
  FirstClassSeatsParams,
  FourthClassSeatsParams,
  SeatsParams,
  SecondClassSeatsParams,
  ThirdClassSeatsParams,
} from './consts/seatsParams';
import { FirstClassSchema } from '.';
import { ThirdClassSchema } from '.';
import { FourthClassSchema } from '.';
import styles from './TrainSchema.module.scss';

export type WagonClass = 'first' | 'second' | 'third' | 'fourth';

interface TrainSchemaProps {
  wagonClass: WagonClass;
  wagonNumber: number;
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
  ({ wagonClass, wagonNumber }: TrainSchemaProps) => {
    const Component = SchemaComponents[wagonClass].schema;

    return (
      <div className={styles.component}>
        <Component />
        <div className={styles.schema}>
          <SeatsSchema
            params={SchemaComponents[wagonClass].params}
            wagonNumber={wagonNumber}
          />
        </div>
      </div>
    );
  },
);

TrainSchema.displayName = 'TrainSchema';
