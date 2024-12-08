import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@shared/ui/Button';
import styles from './GoHomeButton.module.scss';

export const GoHomeButton = memo(() => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate('/');
    scroll(0, 0);
  };

  return (
    <Button
      tag='button'
      bgColor='primary'
      color='black'
      uppercase
      className={styles.btn}
      onClick={handleClick}
    >
      вернуться на главную
    </Button>
  );
});

GoHomeButton.displayName = 'GoHomeButton';
