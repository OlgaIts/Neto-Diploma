import { memo, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';
import styles from './Modal.module.scss';

interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  className?: string;
}
export const Modal = memo(
  ({ className, children, setActive, active }: ModalProps) => {
    const [isHiding, setIsHiding] = useState(false);

    const handleClose = () => {
      setIsHiding(true);
      setTimeout(() => {
        setActive(false);
        setIsHiding(false);
      }, 500);
    };

    return (
      <div
        className={classNames(
          styles.modal,
          className,
          active ? styles.active : '',
          isHiding ? styles.hide : '',
        )}
        onClick={handleClose}
      >
        <div
          className={styles.modal_content}
          onClick={(e) => e.stopPropagation()}
        >
          <Icon
            fontSize='18px'
            iconName='icon-close'
            onClick={handleClose}
            className={styles.close_btn}
          />
          {children}
        </div>
      </div>
    );
  },
);
Modal.displayName = 'Modal';
