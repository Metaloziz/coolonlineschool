import { FC } from 'react';
import { ButtonSubmit, CustomSelect, TextFieldCalendar } from '@components';
import { Slider } from '@containers';
import { getRandomId } from '@utils/RandomId';
import styles from './GetResultsForm.module.scss';

const GetResultsForm: FC = () => {
  return (
    <form className={styles.form} action="" method="post">
      <Slider
        className={styles.slider}
        options={[
          {
            id: getRandomId(),
            isActive: true,
            text: 'Общий балл',
          },
          { id: getRandomId(), text: 'Танграм' },
          { id: getRandomId(), text: 'Игра 1' },
          { id: getRandomId(), text: 'Игра 2' },
          { id: getRandomId(), text: 'Игра 3' },
        ]}
      />
      <TextFieldCalendar
        className={styles.textFieldCalendar}
        text="Начало периода"
      />
      <CustomSelect
        options={[{ label: 'Шаблон', value: 'pattern' }]}
        placeholder="Шаблон"
      />
      <CustomSelect
        options={[{ label: 'ФИО ученика', value: 'studentFullName' }]}
        placeholder="ФИО ученика"
      />
      <CustomSelect
        options={[{ label: 'Группа', value: 'group' }]}
        placeholder="Группа"
      />
      <TextFieldCalendar text="Конец периода" />

      <ButtonSubmit className={styles.submit} />
    </form>
  );
};

export default GetResultsForm;
