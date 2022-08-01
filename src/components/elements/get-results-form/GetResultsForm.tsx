import { FC, FormHTMLAttributes, useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button, CustomSelect, TextFieldCalendar, Slider } from '@components';
import cn from 'classnames';
import cl from 'src/components/elements/get-results-form/GetResultsForm.module.scss';

type IGetResultsForm = FormHTMLAttributes<HTMLFormElement>;

const GetResultsForm: FC<IGetResultsForm> = ({ className, ...attrs }) => {
  const [isReady, setIsReady] = useState<number>(1);

  return (
    <form {...attrs} className={cn(cl.form, className)}>
      <Slider
        className={cl.slider}
        options={[
          {
            id: 1,
            text: 'Общий балл',
          },
          { id: 2, text: 'Танграм', onClick: setIsReady },
          { id: 3, text: 'Игра 1', onClick: setIsReady },
          { id: 4, text: 'Игра 2', onClick: setIsReady },
          { id: 5, text: 'Игра 3', onClick: setIsReady },
        ]}
      />
      <TextFieldCalendar className={cl.textFieldCalendar} text="Начало периода" />
      <CustomSelect
        options={[{ label: 'Шаблон', value: 'pattern' }]}
        placeholder="Шаблон"
        className={cl.formSelect}
      />
      <CustomSelect
        options={[{ label: 'ФИО ученика', value: 'studentFullName' }]}
        placeholder="ФИО ученика"
        className={cl.formSelect}
      />
      <CustomSelect
        options={[{ label: 'Группа', value: 'group' }]}
        placeholder="Группа"
        className={cl.formSelect}
      />
      <TextFieldCalendar text="Конец периода" />
      <Button type="submit" colorTheme={ButtonColorThemes.green} className={cl.submit}>
        Найти
      </Button>
    </form>
  );
};

export default GetResultsForm;
