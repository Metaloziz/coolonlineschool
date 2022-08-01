import { useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button, CustomSelect, Slider, TextField } from '@components';
import InputFile from '@components/elements/input-file/InputFile';
import { homework } from '@mock/moks-data-select';
import buttonAdd from '@svgs/settings-games-add.svg';
import Image from 'next/image';

import styles from './Settings.module.scss';

const IndexPage = () => {
  const [isReady, setIsReady] = useState<number>(1);
  return (
    <div className={styles.innerContent}>
      <h4 className={styles.systemTitle}>Система оплаты</h4>
      <h4 className={styles.settingsTitle}>Настройки</h4>
      <div className={styles.systemPay}>
        <p>ShopID</p>
        <TextField />
        <p>GUID</p>
        <TextField />
      </div>
      <div className={styles.settings}>
        <div className={styles.lessons}>
          <p>Минимальное количество уроков</p>
          <CustomSelect size="normal" options={homework} placeholder="" />
        </div>
        <div className={styles.typeGroup}>
          <p>Тип групп</p>
          <div className={styles.typeSlider}>
            <Slider
              className={styles.choiceSlider}
              size="normal"
              options={[
                {
                  text: 'Младшая',
                  id: 1,
                  onClick: setIsReady,
                },
                {
                  text: 'Старшая',
                  id: 2,
                  onClick: setIsReady,
                },
                {
                  text: 'Список1',
                  id: 3,
                  onClick: setIsReady,
                },
              ]}
            />
            <div className={styles.buttonAdd}>
              <Image src={buttonAdd} width={31} height={31} alt="goBack" />
            </div>
          </div>
        </div>
        <div className={styles.inputFile}>
          <InputFile />
        </div>
      </div>
      <div />
      <div className={styles.buttonSaveBlock}>
        <Button className={styles.buttonSave} colorTheme={ButtonColorThemes.blueGradient}>
          Сохранить
        </Button>
      </div>
    </div>
  );
};

export default IndexPage;
