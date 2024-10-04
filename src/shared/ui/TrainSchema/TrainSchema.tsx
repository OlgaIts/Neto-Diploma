import { MemoExoticComponent, memo } from 'react';
import { SeatsSchema } from './SeatsSchema/SeatsSchema';
import { FirstClassSchema } from '.';
import { ThirdClassSchema } from '.';
import { FourthClassSchema } from '.';
import styles from './TrainSchema.module.scss';
import {
  FirstClassSeatsParams,
  FourthClassSeatsParams,
  SeatsParams,
  SecondClassSeatsParams,
  ThirdClassSeatsParams,
} from './consts/seatsParams';

type WagonClass = 'first' | 'second' | 'third' | 'fourth';

interface TrainSchemaProps {
  wagonClass: WagonClass;
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

export const TrainSchema = memo(({ wagonClass }: TrainSchemaProps) => {
  const Component = SchemaComponents[wagonClass].schema;

  return (
    <div className={styles.component}>
      <Component />
      <div className={styles.schema}>
        <SeatsSchema params={SchemaComponents[wagonClass].params} wagonNumber={12}/>
      </div>
    </div>
  );
});

TrainSchema.displayName = 'TrainSchema';
