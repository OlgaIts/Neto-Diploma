import { FormEvent, memo, useState } from 'react';
import { TransparentButton } from '@shared/ui/TransparentButton';
import { Modal } from '@shared/ui/Modal';
import { subscribe } from '@features/SubscribeForm/model/services/service';
import { SubscribeModalContent } from '../SubscribeModalContent/SubscribeModalContent';
import styles from './SubscribeForm.module.scss';
import { ErrorModalContent } from '../ErrorModalContent/ErrorModalContent';

export const SubscribeForm = memo(() => {
  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [errorModalOpen, setErrorModalOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    setErrorModalOpen(false);

    if (!email) {
      setErrorMessage('Пожалуйста, введите Email');
      setErrorModalOpen(true);
      return;
    }

    try {
      await subscribe(email);
      setModalOpen(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Произошла неизвестная ошибка',
      );
      setErrorModalOpen(true);
    }
  };

  const handleCloseErrorModal = () => {
    setErrorModalOpen(false);
    setErrorMessage(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='e-mail'
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <TransparentButton tag='button' size='small' weight='regular' uppercase>
          отправить
        </TransparentButton>
      </form>

      {errorMessage && (
        <Modal active={errorModalOpen} setActive={handleCloseErrorModal}>
          <ErrorModalContent errorMessage={errorMessage} />
        </Modal>
      )}

      {modalOpen && (
        <Modal active={modalOpen} setActive={() => setModalOpen(false)}>
          <SubscribeModalContent />
        </Modal>
      )}
    </>
  );
});
SubscribeForm.displayName = 'SubscribeForm';
