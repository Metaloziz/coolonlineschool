import BlockContacts from '@pages/contacts/BlockContacts';
import cl from '@pages/contacts/Contacts.module.scss';

const IndexPage = () => {
  return (
    <div className={cl.innerContent}>
      <BlockContacts isEdit />
      <BlockContacts isEdit isDelete />
      <BlockContacts isEdit isBase />
      <BlockContacts blockAdd />
    </div>
  );
};

export default IndexPage;
