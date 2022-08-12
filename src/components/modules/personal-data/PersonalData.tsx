import { BlockContacts } from '@components/elements';

import cl from './PersonalData.module.scss';

const PersonalData = () => (
  <div className={cl.innerContent}>
    <BlockContacts isEdit />
    <BlockContacts isEdit isDelete />
    <BlockContacts isEdit isBase />
    <BlockContacts blockAdd />
  </div>
);

export default PersonalData;
