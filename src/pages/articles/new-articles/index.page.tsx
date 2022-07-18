import { ButtonColorThemes } from '@app/enums';
import Button from '@components/button/Button';
import CustomSelect from '@components/custom-select/CustomSelect';
import TextEditor from '@components/text-editor/TextEditor';
import TextField from '@components/text-fild/TextFild';

import styles from './NewArticle.module.scss';

const OPTIONS_SELECT = [
  {
    label: 'Ученик',
    value: '0',
  },
  {
    label: 'Учитель',
    value: '1',
  },
];

const IndexPage = () => (
  <div className={styles.innerContent}>
    <h2>Добавление статьи</h2>
    <div className={styles.wrapper}>
      <div className={styles.wrapperTextField}>
        <p className={styles.titleField}>Наименование теста</p>
        <TextField placeholder="Название" className={styles.textField} />
      </div>
      <div className={styles.wrapperSelect}>
        <p className={styles.titleField}>Роль:</p>
        <CustomSelect
          className={styles.select}
          options={OPTIONS_SELECT}
          placeholder="Доступно ролям"
        />
      </div>
      <Button className={styles.button} colorTheme={ButtonColorThemes.blueGradient}>
        Добавить
      </Button>
    </div>
    <div className={styles.wrapperTextEditor}>
      <p className={styles.titleField}>Описание урока</p>
      <TextEditor className={styles.textEditor} />
      <Button className={styles.button} colorTheme={ButtonColorThemes.green}>
        Сохранить
      </Button>
    </div>
  </div>
);

export default IndexPage;
