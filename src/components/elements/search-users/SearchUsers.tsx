import React, { FC } from 'react';

import { ButtonColorThemes } from '@app/enums';
import userStore from '@app/store/usersStore';
import { Button, SwitchButton } from '@components';
import InformationItem from '@components/elements/information-item/InformationItem';
import AddEditUserForm from '@components/elements/search-users/addEditUserForm/AddEditUserForm';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { ModalMUI } from './addEditUserForm/components/modalMUI/ModalMUI';
import cl from './SearchUsers.module.scss';

const usersRole = [
  { value: 'Ученик', label: 'Ученик' },
  { value: 'Учитель', label: 'Учитель' },
];

const userPaid = [
  { value: 'Оплачен', label: 'Оплачен' },
  { value: 'Не оплачен', label: 'Не оплачен' },
];

export const SearchUsers: FC = observer(() => {
  const { requestUsers, isLoading } = userStore;

  const { handleSubmit, control } = useForm({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<any> = data => {
    requestUsers(data);
  };

  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);

  return (
    <div>
      <ModalMUI open={isOpenModal} onClose={handleClose}>
        <AddEditUserForm onCloseModal={handleClose} />
      </ModalMUI>
      <form className={cl.innerContent} onSubmit={handleSubmit(onSubmit)}>
        <div className={cl.firstBlock}>
          <div className={cn(cl.block, cl.birthBlock)}>
            <p>Дата рождения</p>
            <Controller
              control={control}
              name="birthdate_since"
              render={({ field }) => (
                <InformationItem variant="calendar" className={cl.calendarBlock} {...field} />
              )}
            />
            <Controller
              control={control}
              name="birthdate_until"
              render={({ field }) => (
                <InformationItem variant="calendar" className={cl.calendarBlock} {...field} />
              )}
            />
          </div>
        </div>
        <div className={cl.secondBlock}>
          <div className={cn(cl.block, cl.paidBlock)}>
            <p>Оплачен</p>
            <Controller
              control={control}
              name="is_payed"
              render={({ field }) => (
                <InformationItem
                  option={userPaid}
                  placeholder="Оплачен"
                  variant="select"
                  className={cl.selectBlock}
                  {...field}
                />
              )}
            />
          </div>
          <div className={cn(cl.block, cl.roleBlock)}>
            <p>Роль</p>
            <Controller
              control={control}
              name="roleCode"
              render={({ field }) => (
                <InformationItem
                  placeholder="Ученик"
                  option={usersRole}
                  variant="select"
                  className={cl.selectBlock}
                  {...field}
                />
              )}
            />
          </div>
          <div className={cn(cl.block, cl.activeBlock)}>
            <p>Активен</p>
            <Controller
              control={control}
              name="is_active"
              defaultValue
              render={({ field }) => (
                <SwitchButton className={cl.switchBlock} size="large" props={field} />
              )}
            />
            <p>Заблокирован</p>
          </div>
        </div>
        <div className={cl.lastBlock}>
          <div className={cn(cl.block, cl.nameBlock)}>
            <p>Фамилия</p>
            <Controller
              control={control}
              name="last_name"
              render={({ field }) => (
                <InformationItem
                  placeholder="Фамилия"
                  id="10"
                  variant="input"
                  type="text"
                  className={cl.inputBlock}
                  {...field}
                />
              )}
            />
          </div>
          <div className={cn(cl.block, cl.nameBlock)}>
            <p>Имя</p>
            <Controller
              control={control}
              name="first_name"
              render={({ field }) => (
                <InformationItem
                  placeholder="Имя"
                  id="20"
                  variant="input"
                  type="text"
                  className={cl.inputBlock}
                  {...field}
                />
              )}
            />
          </div>
          <div className={cn(cl.block, cl.nameBlock)}>
            <p>Отчество</p>
            <Controller
              control={control}
              name="middle_name"
              render={({ field }) => (
                <InformationItem
                  placeholder="Отчество"
                  id="30"
                  variant="input"
                  type="text"
                  className={cl.inputBlock}
                  {...field}
                />
              )}
            />
          </div>
          <div className={cn(cl.block, cl.btnBlock)}>
            <Button
              colorTheme={ButtonColorThemes.green}
              className={cl.btnGreen}
              disabled={isLoading}
              type="submit"
            >
              Найти
            </Button>
            <Button colorTheme={ButtonColorThemes.blue} className={cl.btnBlue} onClick={handleOpen}>
              Добавить пользователя
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
});
