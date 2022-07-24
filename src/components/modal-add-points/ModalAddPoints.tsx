import { ChangeEvent, ReactElement, useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button, CustomSelect, ModalBasic, TextField } from '@components';
import { ADD_POINTS_OPTIONS_SELECT } from '@mock/modal';

import styles from './ModalAddPoints.module.scss';

interface ModalAddPointsProps {
  isActive: boolean;
  closeModal: () => void;
  studentsName: string;
}

const INITIAL_POINT = '1';

const ModalAddPoints = ({
  isActive,
  closeModal,
  studentsName,
}: ModalAddPointsProps): ReactElement => {
  const [points, setPoints] = useState<string>(INITIAL_POINT);

  const onPointsChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;

    if (!Number.isFinite(Number(value))) {
      return;
    }
    setPoints(value);
  };

  return (
    <ModalBasic isVisibility={isActive} changeVisibility={closeModal} className={styles.container}>
      <p className={styles.title}>
        Баллы для ученика: <span>{studentsName}</span>
      </p>
      <div className={styles.wrapper}>
        <p>Баллы</p>
        <TextField
          type="text"
          value={points}
          onChange={onPointsChange}
          className={styles.textField}
        />
        <p>Выданы за:</p>
        <CustomSelect
          className={styles.select}
          options={ADD_POINTS_OPTIONS_SELECT}
          placeholder=""
        />
        <Button type="button" colorTheme={ButtonColorThemes.red}>
          Сохранить
        </Button>
      </div>
      <Button className={styles.button} type="button" colorTheme={ButtonColorThemes.blueGradient}>
        Изменить
      </Button>
    </ModalBasic>
  );
};

export default ModalAddPoints;
