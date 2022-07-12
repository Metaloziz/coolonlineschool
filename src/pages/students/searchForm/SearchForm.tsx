import { ReactElement } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button } from '@components';
import CustomPagination from '@components/custom-pagination/CustomPagination';
import TextField from '@components/text-fild/TextFild';
import styles from '@pages/students/searchForm/SearchForm.module.scss';
import CustomSelect from 'src/components/custom-select/CustomSelect';

const OPTIONS = [{ label: '2022', value: '2022' }];

export const SearchForm = (): ReactElement => (
  <>
    <div className={styles.wrapperPagination}>
      <CustomSelect size="normal" className={styles.select} options={OPTIONS} placeholder="год" />
      <CustomSelect size="normal" className={styles.select} options={OPTIONS} placeholder="месяц" />
      <CustomPagination
        paginate={() => true}
        count={1}
        next={() => true}
        prev={() => true}
        total={12}
      />
    </div>
    <form className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperField}>
          <p className={styles.description}>Выполнил Д/З</p>
          <CustomSelect size="normal" className={styles.select} options={OPTIONS} placeholder="" />
        </div>
        <div className={styles.wrapperField}>
          <p className={styles.description}>Город</p>
          <TextField className={styles.input} />
        </div>
        <div className={styles.wrapperField}>
          <p className={styles.description}>Группа</p>
          <CustomSelect size="normal" className={styles.select} options={OPTIONS} placeholder="" />
        </div>
        <div className={styles.wrapperField}>
          <p className={styles.description}>ФИО ученика</p>
          <TextField className={styles.input} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.wrapperField}>
          <p className={styles.description}>Есть вопросы?</p>
          <CustomSelect size="normal" className={styles.select} options={OPTIONS} placeholder="" />
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
