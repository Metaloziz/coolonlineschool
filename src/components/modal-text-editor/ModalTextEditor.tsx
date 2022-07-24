import { ReactElement } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button, ModalBasic, TextEditor } from '@components';

import styles from './ModalTextEditor.module.scss';

interface ModalAddPointsProps {
  isActive: boolean;
  closeModal: () => void;
  studentsName: string;
}

const ModalTextEditor = ({
  isActive,
  closeModal,
  studentsName,
}: ModalAddPointsProps): ReactElement => (
  <ModalBasic isVisibility={isActive} changeVisibility={closeModal} className={styles.container}>
    <p className={styles.title}>
      Обратная связь для ученика: <span>{studentsName}</span>
    </p>
    <div className={styles.wrapperTextEditor}>
      <TextEditor className={styles.textEditor} />
    </div>

    <div className={styles.wrapperButton}>
      <Button className={styles.button} type="button" colorTheme={ButtonColorThemes.blueGradient}>
        Изменить
      </Button>
      <Button className={styles.button} type="button" colorTheme={ButtonColorThemes.red}>
        Сохранить
      </Button>
    </div>
  </ModalBasic>
);

export default ModalTextEditor;
