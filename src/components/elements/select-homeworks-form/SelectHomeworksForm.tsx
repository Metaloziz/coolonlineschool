import { FC } from 'react';

import { CustomSelect, Slider } from '@components';
import { getRandomId } from '@utils/RandomId';
import cl from 'src/components/elements/select-homeworks-form/SelectHomeworksForm.module.scss';

interface ISelectHomeworksForm {
  className?: string;
  years: number[];
  months: string[];
  lessonNumbers: number[];
}

const SelectHomeworksForm: FC<ISelectHomeworksForm> = ({
  lessonNumbers,
  months,
  years,
  className,
}) => (
  <div className={cl.container}>
    <CustomSelect
      options={years.map(year => ({
        label: `${year}`,
        value: `${year}`,
      }))}
      placeholder="Год"
    />
    <CustomSelect
      options={months.map(month => ({
        label: `${month}`,
        value: `${month}`,
      }))}
      placeholder="Месяц"
    />
    <CustomSelect
      options={lessonNumbers.map(lessonNumber => ({
        label: `${lessonNumber}`,
        value: `${lessonNumber}`,
      }))}
      placeholder="№ занятия"
    />
    <Slider
      size="long"
      className={cl.slider}
      options={[
        {
          text: 'Ментальная арифметика',
          id: getRandomId(),
        },
        {
          text: 'Скорочтение',
          id: getRandomId(),
        },
      ]}
    />
  </div>
);

export default SelectHomeworksForm;
