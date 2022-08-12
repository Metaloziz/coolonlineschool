import { useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button, Slider, TextEditor } from '@components';
import BackButton from '@components/elements/backButton/BackButton';
import buttonAdd from '@svgs/settings-games-add.svg';
import Image from 'next/image';

import styles from './GameSettings.module.scss';

const GameSettings = () => {
  const [isReady, setIsReady] = useState<number>(1);

  return (
    <div className={styles.innerContent}>
      <div className={styles.blockButtons}>
        <BackButton />
        <div className={styles.sliderBlock}>
          <Slider
            size="long"
            className={styles.slider}
            options={[
              {
                text: 'Для младшей группы',
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
          <div className={styles.buttonAdd}>
            <Image src={buttonAdd} width={31} height={31} alt="goBack" />
          </div>
        </div>
      </div>
      <div className={styles.pattern}>
        <div className={styles.patternNames}>
          <div className={styles.namePattern}>
            <h3>Наименование шаблона</h3>
            <div className={styles.namePatternText}>
              <input type="text" />
            </div>
          </div>
          <h3>Начисление баллов</h3>
        </div>
        <h3>Настройка уровней</h3>
        <div className={styles.levels}>
          <p className={styles.rangeLevels}>Уровней</p>
          <div className={styles.fromTo}>
            <p>От</p>
            <div className={styles.fromToText}>
              <input type="text" />
            </div>
          </div>
          <div className={styles.fromTo}>
            <p>До</p>
            <div className={styles.fromToText}>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className={styles.time}>
          <p>Время выполнения</p>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
      <h3 className={styles.titleDescription}>Память и ритм</h3>
      <div className={styles.description}>
        <TextEditor />
      </div>
      <div className={styles.buttonSubmit}>
        <Button colorTheme={ButtonColorThemes.blueGradient} className={styles.button}>
          Сохранить
        </Button>
      </div>
    </div>
  );
};

export default GameSettings;
