import { FC, FormHTMLAttributes } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button, CustomSelect, Input, TextFieldCalendar } from '@components';
import cn from 'classnames';
import cl from 'src/components/elements/schedule-search-form/ScheduleSearchForm.module.scss';

interface ISelectOption {
  label: string;
  value: string;
}

interface IScheduleSearchForm extends FormHTMLAttributes<HTMLFormElement> {
  groupList: ISelectOption[];
  cityList: ISelectOption[];
  className?: string;
}

const ScheduleSearchForm: FC<IScheduleSearchForm> = ({
  groupList,
  className,
  cityList,
  ...attrs
}) => (
  <form {...attrs} className={cn(cl.container, className)}>
    <TextFieldCalendar className={cl.calendar} text="Дата" />
    <CustomSelect
      size="normal"
      className={cl.groupSelect}
      options={groupList}
      placeholder="Группа"
    />
    <CustomSelect size="normal" options={cityList} placeholder="Город" />
    <Input className={cl.input} labelText="ФИО учителя" />
    <Button className={cl.submitBtn} colorTheme={ButtonColorThemes.green} type="submit">
      Найти
    </Button>
  </form>
);

export default ScheduleSearchForm;
