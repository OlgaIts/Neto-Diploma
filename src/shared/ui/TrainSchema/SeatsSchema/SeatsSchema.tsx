import { Fragment, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SeatsParams } from '../consts/seatsParams';
import styles from './SeatsSchema.module.scss';

interface SeatsSchemaProps {
  params: SeatsParams;
  wagonNumber: number;
}

export const SeatsSchema = memo(({ params, wagonNumber }: SeatsSchemaProps) => {
  return (
    <svg
      width='908'
      height='147'
      viewBox='0 0 908 147'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMaxYMin'
    >
      <svg x='41' y='2' width='33' height='24'>
        <rect
          x='0'
          y='0'
          width='33'
          height='24'
          stroke='#999999'
          strokeWidth='1'
          fill='#333333'
        ></rect>
        <text
          opacity='1'
          fill='#ffffff'
          x='50%'
          y='54%'
          fontSize={12}
          textAnchor='middle'
          dy={'0.3em'}
        >
          {wagonNumber}
        </text>
      </svg>
      {Object.tsKeys(params).map((row) => {
        const { gap, seats, y, width, height } = params[row];
        return (
          <Fragment key={row}>
            {seats.map((seat, i) => (
              <Fragment key={uuidv4()}>
                {seat && (
                  <svg
                    key={uuidv4()}
                    x={gap(i)}
                    y={y}
                    width={width}
                    height={height}
                    className={styles.svg}
                  >
                    <rect
                      x='0'
                      y='0'
                      width={width}
                      height={height}
                      stroke='none'
                      strokeWidth='4'
                      fill='none'
                    ></rect>
                    <text
                      opacity='1'
                      fill='#292929'
                      x='50%'
                      y='54%'
                      fontSize={12}
                      textAnchor='middle'
                      dy={'0.3em'}
                    >
                      {seat}
                    </text>
                  </svg>
                )}
              </Fragment>
            ))}
          </Fragment>
        );
      })}
    </svg>
  );
});
SeatsSchema.displayName = 'SeatsSchema';
