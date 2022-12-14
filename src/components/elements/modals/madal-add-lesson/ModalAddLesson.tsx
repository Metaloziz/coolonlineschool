import React, { useState } from 'react';

import { ModalBasic } from '@components';
import InformationItem from '@components/elements/information-item/InformationItem';
import styles from '@components/elements/modals/madal-add-lesson/ModalAddLesson.module.scss';
import Select from 'react-select';
import CustomButton from 'src/components/elements/custom-button/CustomButton';

const moksDatas: Mock1[] = [
  {
    number: 'N1',
    valueCalendar: (
      <InformationItem className={styles.valueCalendar} title="Дата урока" variant="calendar" />
    ),
    valueStart: (
      <InformationItem className={styles.valueStart} title="Начало урока" variant="input" />
    ),
    valueEnd: <InformationItem className={styles.valueEnd} title="Конец урока" variant="input" />,
  },
  {
    number: 'N2',
    valueCalendar: (
      <InformationItem className={styles.valueCalendar} title="Дата урока" variant="calendar" />
    ),
    valueStart: (
      <InformationItem className={styles.valueStart} title="Начало урока" variant="input" />
    ),
    valueEnd: <InformationItem className={styles.valueEnd} title="Конец урока" variant="input" />,
  },
  {
    number: 'N3',
    valueCalendar: (
      <InformationItem className={styles.valueCalendar} title="Дата урока" variant="calendar" />
    ),
    valueStart: (
      <InformationItem className={styles.valueStart} title="Начало урока" variant="input" />
    ),
    valueEnd: <InformationItem className={styles.valueEnd} title="Конец урока" variant="input" />,
  },
  {
    number: 'N4',
    valueCalendar: (
      <InformationItem className={styles.valueCalendar} title="Дата урока" variant="calendar" />
    ),
    valueStart: (
      <InformationItem className={styles.valueStart} title="Начало урока" variant="input" />
    ),
    valueEnd: <InformationItem className={styles.valueEnd} title="Конец урока" variant="input" />,
  },
  {
    number: 'N5',
    valueCalendar: (
      <InformationItem className={styles.valueCalendar} title="Дата урока" variant="calendar" />
    ),
    valueStart: (
      <InformationItem className={styles.valueStart} title="Начало урока" variant="input" />
    ),
    valueEnd: <InformationItem className={styles.valueEnd} title="Конец урока" variant="input" />,
  },
  {
    number: 'N6',
    valueCalendar: (
      <InformationItem className={styles.valueCalendar} title="Дата урока" variant="calendar" />
    ),
    valueStart: (
      <InformationItem className={styles.valueStart} title="Начало урока" variant="input" />
    ),
    valueEnd: <InformationItem className={styles.valueEnd} title="Конец урока" variant="input" />,
  },
];

const ModalAddLesson = () => {
  const [open, setOpen] = useState(true);

  return (
    <ModalBasic isVisibility={open} changeVisibility={setOpen}>
      <div className={styles.modalAddLessons}>
        <h2>Добавление уроков</h2>
        <div className={styles.levelBlock}>
          <div className={styles.levelBlockItem}>
            <div>Уровень</div>
            <div>
              <Select className={styles.select} components={{ IndicatorSeparator: () => null }} />
            </div>
          </div>
          <div className={styles.levelBlockItem}>
            <div>Группа</div>
            <div>
              <Select className={styles.select} components={{ IndicatorSeparator: () => null }} />
            </div>
          </div>
        </div>
        {moksDatas.map(item => (
          <div key={item.number} className={styles.numberChoice}>
            <div className={styles.number}>{item.number}</div>
            {item.valueCalendar}
            {item.valueStart}
            {item.valueEnd}
          </div>
        ))}
        <div className={styles.addLevelBtn}>
          <CustomButton title="Сохранить" />
        </div>
      </div>
    </ModalBasic>
  );
};

export default ModalAddLesson;

type Mock1 = {
  number: string;
  valueCalendar: JSX.Element;
  valueStart: JSX.Element;
  valueEnd: JSX.Element;
};
