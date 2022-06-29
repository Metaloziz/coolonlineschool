import Image from 'next/image';
import { ButtonColorThemes } from '@app/enums';
import { Button, Slider } from '@components';
import CustomSelect from '@components/custom-select/CustomSelect';
import InputFile from '@components/input-file/InputFile';
import TextField from '@components/text-fild/TextFild';
import { homework } from '@mock/moks-data-select';
import buttonAdd from '@svgs/settings-games-add.svg';
import { getRandomId } from '@utils/RandomId';
import styles from './Settings.module.scss';

const IndexPage = () => {
  return (
    <div className={styles.innerContent}>
      <h4>Система оплаты</h4>
      <h4>Настройки</h4>
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
          <Slider
            size="normal"
            options={[
              {
                text: 'Младшая',
                isActive: true,
                id: getRandomId(),
              },
              {
                text: 'Старшая',
                id: getRandomId(),
              },
              {
                text: 'Список1',
                id: getRandomId(),
              },
            ]}
          />
          <div className={styles.buttonAdd}>
            <Image src={buttonAdd} width={31} height={31} alt="goBack" />
          </div>
        </div>
        <div>
          <InputFile />
        </div>
      </div>
      <div></div>
      <div className={styles.buttonSaveBlock}>
        <Button
          className={styles.buttonSave}
          colorTheme={ButtonColorThemes.blueGradient}
        >
          Сохранить
        </Button>
      </div>
    </div>
  );
};

export default IndexPage;
