import { memo } from 'react';
import classNames from 'classnames';
import styles from './PassengerPassInputs.module.scss';

interface PassengerPassInputsProps {
  className?: string;

}
export const PassengerPassInputs = memo(
  ({ className }: PassengerPassInputsProps) => {
    
    return (
      <article>
        <div>
          <label htmlFor=''></label>
          <input type='text' />
        </div>
      </article>
    );
  },
);
PassengerPassInputs.displayName = 'PassengerPassInputs';
