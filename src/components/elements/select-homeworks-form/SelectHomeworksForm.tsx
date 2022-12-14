import { FC, useState } from 'react';

import { CustomSelect, Slider } from '@components';
import { getRandomId } from '@utils/RandomId';

import cl from './SelectHomeworksForm.module.scss';

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
}) => {
  const [isReady, setIsReady] = useState<number>(1);

  return (
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
            onClick: setIsReady,
            id: 1,
          },
          {
            text: 'Скорочтение',
            id: 2,
            onClick: setIsReady,
          },
        ]}
      />
    </div>
  );
};

export default SelectHomeworksForm;
