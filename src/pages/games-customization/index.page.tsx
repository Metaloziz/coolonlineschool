import { useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button, Slider, TextEditor, TextField } from '@components';

import styles from './GamesCustomization.module.scss';

const IndexPage = () => {
  const [isReady, setIsReady] = useState<number>(1);

  return (
    <div className={styles.innerContent}>
      <div className={styles.buttonsTop}>
        <TextField className={styles.articleName} placeholder="Наименование статьи" />
        <p>
          <span>Тип</span>
        </p>
        <Slider
          size="long"
          options={[
            {
              text: 'Статья для учителя',
              id: 1,
              onClick: setIsReady,
            },
            {
              text: 'Урок для ученика',
              id: 2,
              onClick: setIsReady,
            },
          ]}
        />
      </div>
      <div className={styles.description}>
        <TextEditor className={styles.textEditor} />
      </div>
      <div className={styles.buttonSubmit}>
        <Button colorTheme={ButtonColorThemes.blueGradient} className={styles.button}>
          Сохранить
        </Button>
      </div>
    </div>
  );
};

export default IndexPage;
