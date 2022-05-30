import { FC, FormEvent, FormHTMLAttributes } from 'react';
import { ButtonColorThemes } from '@app/enums/Enums';
import { Button, CustomSelect, TextFieldCalendar } from '@components';
import { Slider } from '@containers';
import { getRandomId } from '@utils/RandomId';
import cl from './GetResultsForm.module.scss';

interface IGetResultsForm extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const GetResultsForm: FC<IGetResultsForm> = ({ onSubmit }) => {
  return (
    <form className={cl.form}>
      <Slider
        className={cl.slider}
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
        className={cl.textFieldCalendar}
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
      <Button
        type="submit"
        text="Найти"
        colorTheme={ButtonColorThemes.green}
        className={cl.submit}
      />
    </form>
  );
};

export default GetResultsForm;
