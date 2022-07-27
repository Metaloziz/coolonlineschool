import { FC, FormHTMLAttributes } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button, CustomSelect, TextFieldCalendar, Slider } from '@components';
import { getRandomId } from '@utils/RandomId';
import cn from 'classnames';
import cl from 'src/components/elements/get-results-form/GetResultsForm.module.scss';

type IGetResultsForm = FormHTMLAttributes<HTMLFormElement>;

const GetResultsForm: FC<IGetResultsForm> = ({ className, ...attrs }) => (
  <form {...attrs} className={cn(cl.form, className)}>
    <Slider
      className={cl.slider}
      options={[
        {
          id: getRandomId(),
          text: 'Общий балл',
        },
        { id: getRandomId(), text: 'Танграм' },
        { id: getRandomId(), text: 'Игра 1' },
        { id: getRandomId(), text: 'Игра 2' },
        { id: getRandomId(), text: 'Игра 3' },
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

export default GetResultsForm;
