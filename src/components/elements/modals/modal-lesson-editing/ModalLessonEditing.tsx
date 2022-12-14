import { useState } from 'react';

import { TextFieldCalendar } from '@components';
import CustomButton from '@components/elements/custom-button/CustomButton';
import InformationItem from '@components/elements/information-item/InformationItem';

import styles from './ModalLessonEditing.module.scss';

const ModalLessonEditing = () => {
  const [isShow, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!isShow);
  };
  return (
    <div className={styles.wrapperModal}>
      <h2>Редактирование урока</h2>
      <div className={styles.lesson}>
        <div>
          <p>Дата урока</p>
          <TextFieldCalendar className={styles.calendarLessons} placeholder="21/03/2021" />
        </div>
        <div>
          <p>Начало урока</p>
          <InformationItem variant="input" placeholder="14:00" className={styles.startLesson} />
        </div>
        <div>
          <p>Конец урока</p>
          <InformationItem variant="input" placeholder="14:00" className={styles.endLesson} />
        </div>
      </div>
      {!isShow && (
        <div className={styles.saveItem}>
          <div className={styles.saveSelect}>
            <p>Статус</p>
            <InformationItem variant="select" placeholder="Активен" />
          </div>
          <div className={styles.lessonBtn}>
            <CustomButton
              type="button"
              title="Редактировать урок"
              className={styles.btnEdit}
              onClick={toggleShow}
            />
            <CustomButton type="button" title="Сохранить" className={styles.btnSave} />
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
                className={styles.statusSelect}
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
            <CustomButton type="button" title="Сохранить" className={styles.btnSave} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalLessonEditing;
