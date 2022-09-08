import { useEffect } from 'react';

import { personal } from '@app/store/personalDataStore';
import { BlockContacts } from '@components/elements';
import { observer } from 'mobx-react-lite';

import cl from './PersonalData.module.scss';

const PersonalData = () => {
  const { getPersonalData, personalData } = personal;

  useEffect(() => {
    getPersonalData();
  }, []);

  return (
    <div className={cl.innerContent}>
      {personalData && <BlockContacts isCanBeEdited userData={personalData} />}
      {/* <BlockContacts isEdit isDelete /> */}
      {/* <BlockContacts isEdit isBase /> */}
      {/* <BlockContacts blockAdd /> */}
    </div>
  );
};

export default observer(PersonalData);
