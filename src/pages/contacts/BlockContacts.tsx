import Image from 'next/image';
import avatar from '@mock/public/avatar.png';
import BaseImg from '@pages/contacts/base/BaseImg';
import BtnAddImg from '@pages/contacts/btn-add-img/BtnAddImg';
import BtnDeleteImg from '@pages/contacts/btn-delete-img/BtnDeleteImg';
import BtnEditImg from '@pages/contacts/btn-edit-img/BtnEditImg';
import cl from '@pages/contacts/Contacts.module.scss';

type BlockContactsProps = {
  blockAdd?: boolean;
  isEdit?: boolean;
  isDelete?: boolean;
  isBase?: boolean;
};

const BlockContacts = ({
  blockAdd = false,
  isEdit = false,
  isDelete = false,
  isBase = false,
}: BlockContactsProps) => {
  return (
    <div className={cl.blockPersonal}>
      {blockAdd ? (
        <>
          <div className={cl.avatarAdd}> </div>
          <div className={cl.information}>
            <div className={cl.informationAdd}>
              <BtnAddImg />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={cl.avatar}>
            <Image
              src={avatar}
              width={173}
              height={165}
              alt="avatar"
              className={cl.avatarImg}
            />
          </div>
          <div className={cl.information}>
            <p className={cl.name}>Днепровский Александр Алексеевич</p>
            <p className={cl.informationItem}>
              Статус:<span>Новичок</span>
            </p>
            <p className={cl.informationItem}>
              Город:<span>Москва</span>
            </p>
            <p className={cl.informationItem}>
              Телефон:<span>+7 (950) 55-55-371</span>
            </p>
            <p className={cl.informationItem}>
              Дата рождения:<span>11.10.1993</span>
            </p>
            <p className={cl.informationItem}>
              Почта:<span>test@test.ru</span>
            </p>
          </div>
          <div className={cl.icons}>
            {isEdit && <BtnEditImg />}
            {isDelete && <BtnDeleteImg />}
          </div>
          {isBase && <BaseImg />}
        </>
      )}
    </div>
  );
};

export default BlockContacts;
