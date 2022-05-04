import { FC } from 'react';
import { SelectHomeworksFormProps } from '@app/types/Props';
import CustomSelect from '@components/select/CustomSelect';
import Slider from '@containers/slider/Slider';
import styles from './SelectHomeworksForm.module.scss';

const SelectHomeworksForm: FC<SelectHomeworksFormProps> = ({
  lessonNumbers,
  months,
  years,
}) => {
  return (
    <div className={styles.container}>
      <CustomSelect
        options={years.map((year) => ({
          label: `${year}`,
          value: `${year}`,
        }))}
        placeholder="Год"
      />
      <CustomSelect
        options={months.map((month) => ({
          label: `${month}`,
          value: `${month}`,
        }))}
        placeholder="Месяц"
      />
      <CustomSelect
        options={lessonNumbers.map((lessonNumber) => ({
          label: `${lessonNumber}`,
          value: `${lessonNumber}`,
        }))}
        placeholder="№ занятия"
      />
      <Slider
        size="long"
        className={styles.slider}
        options={[
          {
            text: 'Ментальная арифметика',
            isActive: true,
            id: +new Date().toDateString(),
          },
          {
            text: 'Скорочтение',
            id: +new Date().toDateString(),
          },
        ]}
      />
    </div>
  );
};

export default SelectHomeworksForm;
