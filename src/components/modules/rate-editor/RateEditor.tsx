import { useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button, CustomSelect, Slider, TextEditor, TextField } from '@components';
import CustomCalendarInput from '@components/elements/custom-calendar-input/CustomCalendarInput';
import { games, group, homeworkType, status, tarif } from '@mock/moks-data-select';

import BtnAddImg from './btn-add-img/BtnAddImg';
import styles from './RateEditor.module.scss';

const RateEditor = () => {
  const [isReady, setIsReady] = useState<number>(1);

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerContent}>
        <div className={styles.nameTarif}>
          <TextField placeholder="Имя тарифа" className={styles.textFieldBlock} />
          <div className={styles.buttons}>
            <p>
              <span>Тип: </span>
            </p>
            <Slider
              size="long"
              options={[
                {
                  text: 'Ментальная арифметика',
                  id: 1,
                  onClick: setIsReady,
                },
                {
                  text: 'Скорочтение',
                  id: 2,
                  onClick: setIsReady,
                },
              ]}
            />
          </div>
        </div>
        <div className={styles.tarif}>
          <div>Статус</div>
          <CustomSelect
            options={status}
            className={styles.statusBlock}
            placeholder=""
            size="normal"
          />
          <div>
            <p>Тариф после</p>
          </div>
          <CustomSelect
            options={tarif}
            className={styles.statusBlock}
            placeholder=""
            size="xnormal"
          />
          <div>
            <p>Дата начала действия</p>
          </div>
          <CustomCalendarInput
            classNameTextField={styles.calendar}
            className={styles.calendarBlock}
          />
          <div>
            <p>Д/З</p>
          </div>
          <CustomSelect
            options={homeworkType}
            className={styles.statusBlock}
            placeholder=""
            size="xnormal"
          />
          <div>
            <p>Дата окончания действия</p>
          </div>
          <CustomCalendarInput
            classNameTextField={styles.calendar}
            className={styles.calendarBlock}
          />
          <div>
            <p>Доступные игры</p>
          </div>
          <CustomSelect
            options={games}
            className={styles.statusBlock}
            placeholder=""
            size="xnormal"
          />
          <div>
            <p>Код тарифа</p>
          </div>
          <TextField className={styles.textFieldSmall} />
          <div>
            <p>Скидка при автопополнении</p>
          </div>
          <TextField className={styles.textFieldNormal} />
        </div>
        <div className={styles.description}>Описание</div>
        <div className={styles.tarifDescription}>
          <div className={styles.editorBlock}>
            <TextEditor className={styles.textEditor} />
          </div>
          <div className={styles.informationTarif}>
            <div className={styles.radioButtons}>
              <div>
                <label>
                  <input type="radio" name="radio" />
                  <p>Тариф для второго ребёнка</p>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <p>Тариф для новых клиентов (активируется при регистрации)</p>
                </label>
              </div>
              <div className={styles.radioButtonsBottom}>
                <label>
                  <input type="radio" name="radio" />
                  <p>Тариф для новых клиентов (активируется при первой оплате)</p>
                </label>
                <div className={styles.month}>
                  <div className={styles.text}>Сколько месяцев действует</div>
                  <CustomSelect size="normal" options={group} placeholder="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonSubmit}>
        <Button colorTheme={ButtonColorThemes.blueGradient} className={styles.button}>
          Сохранить
        </Button>
      </div>
      <div className={styles.blockAdd}>
        <BtnAddImg />
      </div>
    </div>
  );
};

export default RateEditor;
