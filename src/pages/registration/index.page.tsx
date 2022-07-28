import { FC } from 'react';

import { TariffPlans as TariffPlansEnum } from '@app/enums';
import { TariffPlans } from '@components';
import RegistrationData from '@components/registration-data/RegistrationData';

import cl from './Registration.module.scss';

const Registration: FC = () => (
  <div className={cl.innerContainer}>
    <RegistrationData className={cl.dataBlock} />
    <TariffPlans
      className={cl.tariffBlock}
      tariffPlans={[
        {
          id: 1,
          moneyAmount: 'БЕСПЛАТНО',
          tariffPlan: TariffPlansEnum.demo,
        },
        {
          id: 2,
          moneyAmount: '4000',
          tariffPlan: TariffPlansEnum.introductory,
          percentDiscount: 50,
        },
        {
          id: 3,
          moneyAmount: '3300₽',
          tariffPlan: TariffPlansEnum.independent,
        },
        {
          id: 4,
          moneyAmount: '4200₽',
          tariffPlan: TariffPlansEnum.advanced,
          isExtraOption: true,
        },
        {
          id: 5,
          moneyAmount: '5000₽',
          tariffPlan: TariffPlansEnum.personal,
          isExtraOption: true,
        },
      ]}
    />
  </div>
);

export default Registration;
