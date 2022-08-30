import React, { FC, useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { Button, SwitchButton } from '@components';
import InformationItem from '@components/elements/information-item/InformationItem';
import cn from 'classnames';

import ModalAddUser from '../modals/modal-add-user/ModalAddUser';
import TextFieldCalendar from '../text-field-calendar/TextFieldCalendar';

import cl from './SearchUsers.module.scss';

interface Props {
  isAutoRefill?: boolean;
}

const SearchUsers: FC<Props> = ({ isAutoRefill }) => {
  const [isAddUserModal, setIsAddUserModal] = useState(false);
  const [isChecked, setIsChecked] = useState(isAutoRefill);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const inclusionModal = () => {
    setIsAddUserModal(true);
  };
  const closeModal = () => {
    setIsAddUserModal(false);
  };

  return (
    <>
      <div className={cl.innerContent}>
        <div>
          <div className={cn(cl.block, cl.dataBlock)}>
            <p>Дата</p>
            <TextFieldCalendar className={cl.dataCalendar} />
          </div>
          <div className={cn(cl.block, cl.choiceBlock)}>
            <p>Юр. лицо</p>
            <InformationItem variant="select" className={cl.selectBlock} />
          </div>
          <div className={cn(cl.block, cl.addressBlock)}>
            <p>Юр. адрес</p>
            <InformationItem variant="select" className={cl.selectBlock} />
          </div>
        </div>
        <div>
          <div className={cn(cl.block, cl.paidBlock)}>
            <p>Оплачен</p>
            <InformationItem variant="select" className={cl.selectBlock} />
          </div>
          <div className={cn(cl.block, cl.roleBlock)}>
            <p>Роль</p>
            <InformationItem variant="select" className={cl.selectBlock} />
          </div>
          <div className={cn(cl.block, cl.activeBlock)}>
            <p>Активен</p>
            <SwitchButton
              className={cl.switchBlock}
              size="large"
              name="auto-replenishment"
              isChecked={isChecked}
              onChange={handleChange}
            />
            <p>Заблокирован</p>
          </div>
        </div>
        <div>
          <div className={cn(cl.block, cl.birthBlock)}>
            <p>Дата рождения</p>
            <TextFieldCalendar className={cl.birthTextField} />
          </div>
          <div className={cn(cl.block, cl.nameBlock)}>
            <p>ФИО</p>
            <InformationItem variant="input" className={cl.inputBlock} />
          </div>
          <div className={cn(cl.block, cl.hideBlock)} />
          <div className={cn(cl.block, cl.btnBlock)}>
            <Button colorTheme={ButtonColorThemes.green} className={cl.btnGreen}>
              Найти
            </Button>
            <Button
              onClick={inclusionModal}
              colorTheme={ButtonColorThemes.blue}
              className={cl.btnBlue}
            >
              Добавить пользователя
            </Button>
          </div>
        </div>
      </div>
      <ModalAddUser
        setting="add"
        open={isAddUserModal}
        setOpen={setIsAddUserModal}
        closeMode={closeModal}
      />
    </>
  );
};

export default SearchUsers;
