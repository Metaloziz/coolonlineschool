import { ReactElement, useEffect, useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button } from '@components';
import Step from '@components/step/Step';
import TextField from '@components/text-fild/TextFild';
import { useWindowSize } from '@hooks/useWindowSize';
import CustomSelect from 'src/components/custom-select/CustomSelect';

import styles from './SearchForm.module.scss';

const OPTIONS = [{ label: '2022', value: '2022' }];
const WIDTH_BUTTON_STEP = 40;
const MAX_STEP = 12;

export const SearchForm = (): ReactElement => {
  const { width } = useWindowSize();

  const [countStep, setCountStep] = useState(0);

  const currentStep = Math.round((width - WIDTH_BUTTON_STEP) / WIDTH_BUTTON_STEP);

  useEffect(() => {
    if (currentStep > MAX_STEP) {
      setCountStep(MAX_STEP);
      return;
    }
    if (countStep !== currentStep) {
      setCountStep(currentStep);
    }
  }, [width]);

  return (
    <>
      <div className={styles.wrapperPagination}>
        <div className={styles.wrapperSelects}>
          <CustomSelect className={styles.select} options={OPTIONS} placeholder="год" />
          <CustomSelect className={styles.select} options={OPTIONS} placeholder="месяц" />
        </div>
        <Step countStep={countStep} />
      </div>
      <form className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.wrapperField}>
            <p className={styles.description}>Выполнил Д/З</p>
            <CustomSelect
              size="normal"
              className={styles.select}
              options={OPTIONS}
              placeholder=""
            />
          </div>
          <div className={styles.wrapperField}>
            <p className={styles.description}>Город</p>
            <TextField />
          </div>
          <div className={styles.wrapperField}>
            <p className={styles.description}>Группа</p>
            <CustomSelect
              size="normal"
              className={styles.select}
              options={OPTIONS}
              placeholder=""
            />
          </div>
          <div className={styles.wrapperField}>
            <p className={styles.description}>ФИО ученика</p>
            <TextField />
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.wrapperField}>
            <p className={styles.description}>Есть вопросы?</p>
            <CustomSelect
              size="normal"
              className={styles.select}
              options={OPTIONS}
              placeholder=""
            />
          </div>
          <div className={styles.wrapperField}>
            <p className={styles.description}>Сортировка</p>
            <CustomSelect
              size="xnormal"
              className={styles.select}
              options={OPTIONS}
              placeholder="По алфавиту"
            />
          </div>
          <div className={styles.wrapperField}>
            <p className={styles.description}>ФИО учителя</p>
            <CustomSelect size="large" className={styles.select} options={OPTIONS} placeholder="" />
          </div>
          <div className={styles.wrapperField}>
            <Button
              className={styles.submitButton}
              colorTheme={ButtonColorThemes.green}
              type="submit"
            >
              Найти
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
