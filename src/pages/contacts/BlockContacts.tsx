import Image from 'next/image';
import avatar from '@mock/public/avatar.png';
import BaseImg from '@pages/contacts/base/BaseImg';
import BtnAddImg from '@pages/contacts/btn-add-img/BtnAddImg';
import BtnDeleteImg from '@pages/contacts/btn-delete-img/BtnDeleteImg';
import BtnEditImg from '@pages/contacts/btn-edit-img/BtnEditImg';
import styles from '@pages/contacts/Contacts.module.scss';

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
    <div className={styles.blockPersonal}>
      {blockAdd ? (
        <>
          <div className={styles.avatarAdd}> </div>
          <div className={styles.information}>
            <div className={styles.informationAdd}>
              <BtnAddImg />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.avatar}>
            <Image
              src={avatar}
              width={173}
              height={165}
              alt="avatar"
              className={styles.avatarImg}
            />
          </div>
          <div className={styles.information}>
            <p className={styles.name}>Днепровский Александр Алексеевич</p>
            <p className={styles.informationItem}>
              Статус:<span>Новичок</span>
            </p>
            <p className={styles.informationItem}>
              Город:<span>Москва</span>
            </p>
            <p className={styles.informationItem}>
              Телефон:<span>+7 (950) 55-55-371</span>
            </p>
            <p className={styles.informationItem}>
              Дата рождения:<span>11.10.1993</span>
            </p>
            <p className={styles.informationItem}>
              Почта:<span>test@test.ru</span>
            </p>
          </div>
          <div className={styles.icons}>
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
