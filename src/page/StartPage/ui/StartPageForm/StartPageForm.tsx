import classNames from "classnames";
import {memo} from "react";
import {Title} from "../../../../shared/ui/Title";
import {Button} from "../../../../shared/ui/Button";
import styles from "./StartPageForm.module.scss";

interface StartPageFormProps {
  className?: string;
}
export const StartPageForm = memo(({className}: StartPageFormProps) => {
  return (
    <form className={styles.form}>
      <Title color='light' weight='light'>
        Направление
      </Title>
      <Title color='light' weight='light'>
        Дата
      </Title>
      <Button
        tag='Link'
        to='/train'
        color='black'
        bgColor='primary'
        uppercase
        size='m'
      >
        найти билеты
      </Button>
    </form>
  );
});
StartPageForm.displayName = "StartPageForm";
