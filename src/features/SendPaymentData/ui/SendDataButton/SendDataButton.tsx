import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@shared/ui/Button';
import { useSendOrderData } from '../../model/hooks/useSendOrderData';
import styles from './SendDataButton.module.scss';

export const SendDataButton = memo(() => {
  const { postData } = useSendOrderData();
  const navigate = useNavigate();

  const handleClick = () => {
    postData();
    navigate('/confirm');
    scroll(0, 0);
  };

  return (
    <Button
      className={styles.btn}
      tag='button'
      color='white'
      size='m'
      bgColor='primary'
      uppercase
      onClick={handleClick}
    >
      подтвердить
    </Button>
  );
});

SendDataButton.displayName = 'SendDataButton';
