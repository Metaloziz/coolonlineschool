import { FC, FormHTMLAttributes } from 'react';
import { ButtonColorThemes } from '@app/enums';
import { Button, CustomSelect, TextFieldCalendar, Slider } from '@components';
import { getRandomId } from '@utils/RandomId';
import cl from './GetResultsForm.module.scss';

type IGetResultsForm = FormHTMLAttributes<HTMLFormElement>;

const GetResultsForm: FC<IGetResultsForm> = ({ ...attrs }) => {
  return (
    <form {...attrs} className={cl.form}>
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
        colorTheme={ButtonColorThemes.green}
        className={cl.submit}
      >
        Найти
      </Button>
    </form>
  );
};

export default GetResultsForm;
