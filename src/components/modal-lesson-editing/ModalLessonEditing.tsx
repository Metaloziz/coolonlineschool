import { useState } from 'react';

import Button from '@components/button/Button';
import CustomButton from '@components/custom-button/CustomButton';
import InformationItem from '@components/information-item/InformationItem';

import styles, { nameGroup } from './ModalLessonEditing.module.scss';

const ModalLessonEditing = () => {
  const [isShow, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!isShow);
  };
  return (
    <div className={styles.wrapperModal}>
      <h2>Редактирование урока</h2>
      <div className={styles.lesson}>
        <div className={styles.dateLesson}>
          <p>Дата урока</p>
          <InformationItem
            variant="calendar"
            className={styles.calendarLessons}
            placeholder="21/03/2021"
          />
        </div>
        <div className={styles.startLesson}>
          <p>Начало урока</p>
          <InformationItem variant="input" className={styles.startInput} placeholder="14:00" />
        </div>
        <div className={styles.endLesson}>
          <p>Конец урока</p>
          <InformationItem variant="input" className={styles.endInput} placeholder="14:00" />
        </div>
      </div>
      {!isShow && (
        <div className={styles.saveItem}>
          <div className={styles.saveSelect}>
            <p>Статус</p>
            <InformationItem
              variant="select"
              placeholder="Активен"
              className={styles.activeSelect}
            />
          </div>
          <div className={styles.lessonBtn}>
            <CustomButton
              title="Редактировать урок"
              className={styles.btnEdit}
              onClick={toggleShow}
            />
            <CustomButton title="Сохранить" className={styles.btnSave} />
          </div>
        </div>
      )}
      {isShow && (
        <div className={styles.bottomContainer}>
          <div className={styles.statusLesson}>
            <div className={styles.btnStatus}>
              <p>Статус</p>
              <InformationItem
                variant="select"
                placeholder="Активен"
                className={styles.activeSelect}
              />
            </div>
            <div className={styles.btnTeacher}>
              <p>ФИО Учителя</p>
              <InformationItem variant="input" className={styles.teacherInput} />
            </div>
          </div>
          <div className={styles.groupSection}>
            <div className={styles.nameGroup}>
              <p>Название группы</p>
              <InformationItem variant="input" className={styles.nameInput} />
            </div>
            <div className={styles.lvlGroup}>
              <p>Уровень группы</p>
              <InformationItem variant="select" placeholder="Активен" className={styles.lvlGame} />
            </div>
            <CustomButton title="Сохранить" className={styles.btnSave} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalLessonEditing;
