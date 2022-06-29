import { ButtonColorThemes } from '@app/enums';
import { Button, Slider } from '@components';
import TextEditor from '@components/text-editor/TextEditor';
import TextField from '@components/text-fild/TextFild';
import { getRandomId } from '@utils/RandomId';
import styles from './GamesCustomization.module.scss';

const IndexPage = () => {
  return (
    <div className={styles.innerContent}>
      <div className={styles.buttonsTop}>
        <TextField
          className={styles.articleName}
          placeholder="Наименование статьи"
        />
        <p>
          <span>Тип</span>
        </p>
        <Slider
          size="long"
          options={[
            {
              text: 'Статья для учителя',
              isActive: true,
              id: getRandomId(),
            },
            {
              text: 'Урок для ученика',
              id: getRandomId(),
            },
          ]}
        />
      </div>
      <div className={styles.description}>
        <TextEditor className={styles.textEditor} />
      </div>
      <div className={styles.buttonSubmit}>
        <Button
          colorTheme={ButtonColorThemes.blueGradient}
          className={styles.button}
        >
          Сохранить
        </Button>
      </div>
    </div>
  );
};

export default IndexPage;
