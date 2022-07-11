import { ButtonColorThemes } from '@app/enums';
import { Button, Slider } from '@components';
import CustomCalendarInput from '@components/custom-calendar-input/CustomCalendarInput';
import TextEditor from '@components/text-editor/TextEditor';
import TextField from '@components/text-fild/TextFild';
import { games, group, homeworkType, status, tarif } from '@mock/moks-data-select';
import { getRandomId } from '@utils/RandomId';

import CustomSelect from '../../components/custom-select/CustomSelect';

import BtnAddImg from './btn-add-img/BtnAddImg';
import styles from './Rates.module.scss';

const IndexPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.innerContent}>
      <div className={styles.nameTarif}>
        <h3>Имя тарифа</h3>
        <div className={styles.buttons}>
          <p>
            <span>Тип: </span>
          </p>
          <Slider
            size="long"
            options={[
              {
                text: 'Ментальная арифметика',
                isActive: true,
                id: getRandomId(),
              },
              {
                text: 'Скорочтение',
                id: getRandomId(),
              },
            ]}
          />
        </div>
      </div>
      <div className={styles.tarif}>
        <div>Статус</div>
        <CustomSelect options={status} placeholder="" size="normal" />
        <div>
          <p>Тариф после</p>
        </div>
        <CustomSelect options={tarif} placeholder="" size="xnormal" />
        <div>
          <p>Дата начала действия</p>
        </div>
        <CustomCalendarInput classNameTextField={styles.calendar} />
        <div>
          <p>Д/З</p>
        </div>
        <CustomSelect options={homeworkType} placeholder="" size="xnormal" />
        <div>
          <p>Дата окончания действия</p>
        </div>
        <CustomCalendarInput classNameTextField={styles.calendar} />
        <div>
          <p>Доступные игры</p>
        </div>
        <CustomSelect options={games} placeholder="" size="xnormal" />
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
        <TextEditor className={styles.textEditor} />
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

export default IndexPage;
