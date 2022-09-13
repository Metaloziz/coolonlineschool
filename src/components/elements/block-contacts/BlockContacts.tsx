import { useState } from 'react';

import { ResponsePersonalData } from '@app/types/personalDataType';
import avatar from '@mock/public/avatar.png';
import { formatDate } from '@utils/FormateDate';
import Image from 'next/image';

import Input from '../input/Input';

import BaseImg from './base/BaseImg';
import cl from './BlockContacts.module.scss';
import BtnAddImg from './btn-add-img/BtnAddImg';
import BtnDeleteImg from './btn-delete-img/BtnDeleteImg';
import BtnEditImg from './btn-edit-img/BtnEditImg';

type BlockContactsProps = {
  blockAdd?: boolean;
  isDelete?: boolean;
  isBase?: boolean;
  userData: ResponsePersonalData;
  isCanBeEdited?: boolean;
};

const BlockContacts = ({
  blockAdd = false,
  isDelete = false,
  isBase = false,
  userData,
  isCanBeEdited = false,
}: BlockContactsProps) => {
  const birthdate = new Date(userData.birthdate.date).toLocaleDateString();
  const [isEdit, setIsEdit] = useState(false);

  const handleEditMode = () => {
    setIsEdit(!isEdit);
  };

  if (blockAdd) {
    return (
      <div className={cl.blockPersonal}>
        <div className={cl.avatarAdd} />
        <div className={cl.information}>
          <div className={cl.informationAdd}>
            <BtnAddImg />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cl.blockPersonal}>
      <div className={cl.avatar}>
        <Image src={avatar} width={173} height={165} alt="avatar" className={cl.avatarImg} />
      </div>
      <div className={cl.information}>
        {isEdit ? (
          <Input />
        ) : (
          <p className={cl.name}>
            {userData.firstName} {userData.middleName} {userData.lastName}
          </p>
        )}
        <p className={cl.informationItem}>
          Статус:<span>{userData.role}</span>
        </p>
        <p className={cl.informationItem}>
          Город:<span>{userData.city}</span>
        </p>
        <p className={cl.informationItem}>
          Телефон:<span>{userData.phone}</span>
        </p>
        <p className={cl.informationItem}>
          Дата рождения:<span>{birthdate}</span>
        </p>
        <p className={cl.informationItem}>
          Почта:<span>{userData.email}</span>
        </p>
      </div>
      <div className={cl.icons}>
        {isCanBeEdited && <BtnEditImg onClick={handleEditMode} />}
        {isDelete && <BtnDeleteImg />}
      </div>
      {isBase && <BaseImg />}
    </div>
  );
};

export default BlockContacts;
