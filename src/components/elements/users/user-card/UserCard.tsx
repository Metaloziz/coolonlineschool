import React, { FC, useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import usersStore from '@app/store/usersStore';
import { ResponseUserType } from '@app/types/UserTypes';
import AddEditUserForm from '@components/elements/search-users/addEditUserForm/AddEditUserForm';
import { ModalMUI } from '@components/elements/search-users/addEditUserForm/components/modalMUI/ModalMUI';
import Settings from '@components/elements/settings/Settings';
import avatar from '@mock/public/avatar.png';
import buttonClose from '@svgs/button-close.svg';
import parents from '@svgs/button/parents.svg';
import Image from 'next/image';

import Button from '../../button/Button';

import cl from './UserCard.module.scss';

interface Props {
  user: ResponseUserType;
}

const UserCard: FC<Props> = ({ user }) => {
  const { firstName, middleName, lastName, id, roleCode, city, phone, groups, payed } = user;

  const { getUser, currentUser } = usersStore;

  const [showModal, setShowModal] = useState<boolean>(false);

  const onclickPaid = () => {
    if (payed) {
      setShowModal(true);
      console.log('Оплачено');
      return;
    }
    console.log('Не оплачен');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const handleOpen = () => {
    getUser(id);
    setIsOpenModal(true);
  };
  const handleClose = () => setIsOpenModal(false);

  return (
    <>
      <div className={cl.inner}>
        <div className={cl.container}>
          <div className={cl.img} onClick={handleOpen}>
            <Settings />
          </div>
          <div className={cl.leftBlock}>
            <div className={cl.imageBlock}>
              <Image src={avatar} width={171} height={163} alt="avatar" className={cl.avatarImg} />
            </div>
            <div className={cl.infoBlock}>
              <h3 className={cl.name}>
                {firstName} {middleName} {lastName}
              </h3>
              <p>
                Статус: <span>{roleCode}</span>
              </p>
              <p>
                Город: <span>{city}</span>
              </p>
              <p>
                Телефон: <span>{phone}</span>
              </p>
              <p>
                Группа: <span>{groups}</span>
              </p>
              <p>{/* Учитель: <span>{teacher}</span> */}</p>
            </div>
          </div>
          <div className={cl.btnBlock}>
            <Button
              className={cl.parentBtn}
              colorTheme={ButtonColorThemes.transparent}
              icon={<Image src={parents} width={20} height={16} alt="parents" />}
            >
              Родители
            </Button>
            <Button
              className={cl.paidFor}
              colorTheme={payed ? ButtonColorThemes.green : ButtonColorThemes.red}
              onClick={onclickPaid}
            >
              {payed ? 'Оплачен' : 'Не оплачен'}
            </Button>
          </div>
          {showModal && (
            <div className={cl.paidShow}>
              <div className={cl.btnClose} onClick={closeModal}>
                <Image src={buttonClose} width="14" height="14" alt="close" />
              </div>
              <h2>Состояние оплаты: Оплачен Оплачено до: 20.10.2022</h2>
            </div>
          )}
        </div>
      </div>
      <ModalMUI open={isOpenModal} onClose={handleClose}>
        <AddEditUserForm onCloseModal={handleClose} user={currentUser} />
      </ModalMUI>
    </>
  );
};

export default UserCard;
