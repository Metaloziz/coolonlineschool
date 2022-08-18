import { useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import Button from '@components/elements/button/Button';
import InformationItem from '@components/elements/information-item/InformationItem';
import TextFieldCalendar from '@components/elements/text-field-calendar/TextFieldCalendar';

import styles from './RateHeader.module.scss';

const RateHeader = () => {
  const [a, b] = useState('');
  return (
    <div className={styles.innerContent}>
      <div className={styles.wrapBlock}>
        <div className={styles.infoBlock1}>
          <div className={styles.nameTarif}>
            <p>Наименование/код тарифа</p>
            <InformationItem variant="input" size="large" className={styles.price} />
          </div>
          <div className={styles.startLesson}>
            <p>Дата начала действия</p>
            <TextFieldCalendar className={styles.calendarLessons} />
          </div>
          <div className={styles.blockEndLesson}>
            <p>Дата окончания действия</p>
            <TextFieldCalendar className={styles.endLesson} />
          </div>
        </div>
        <div className={styles.infoBlock2}>
          <div className={styles.blockStatus}>
            <p>Статус</p>
            <InformationItem
              variant="select"
              size="large"
              placeholder="Активен"
              className={styles.activeStatus}
            />
          </div>
          <div className={styles.blockPrice}>
            <p>Стоимость</p>
            <InformationItem
              variant="input"
              size="large"
              placeholder="От"
              className={styles.priceStart}
            />
            <InformationItem
              variant="input"
              size="large"
              placeholder="До"
              className={styles.endStart}
            />
          </div>
        </div>
        <div className={styles.infoBlock3}>
          <Button>Добавить</Button>
          <Button colorTheme={ButtonColorThemes.green} className={styles.btnGreen}>
            Найти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RateHeader;
