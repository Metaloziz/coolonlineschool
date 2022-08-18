import { useState } from 'react';

import { PaymentStatuses, TariffPlans } from '@app/enums';
import RateHeader from '@components/elements/rate/rate-header/RateHeader';
import RateTable from '@components/elements/rate/rate-table/RateTable';

import style from './Rate.module.scss';

const Rate = () => {
  const [a, b] = useState('');
  return (
    <div className={style.innerContainer}>
      <RateHeader />
      <RateTable
        rows={[
          {
            nameTariff: TariffPlans.demo,
            price: 5000,
            dateStartAction: new Date(),
            dateEndAction: new Date(),
            status: PaymentStatuses.success,
            settingLink: '',
          },
          {
            nameTariff: TariffPlans.demo,
            price: 6000,
            dateStartAction: new Date(),
            dateEndAction: new Date(),
            status: PaymentStatuses.success,
            settingLink: '',
          },
          {
            nameTariff: TariffPlans.demo,
            price: 7000,
            dateStartAction: new Date(),
            dateEndAction: new Date(),
            status: PaymentStatuses.success,
            settingLink: '',
          },
          {
            nameTariff: TariffPlans.demo,
            price: 8000,
            dateStartAction: new Date(),
            dateEndAction: new Date(),
            status: PaymentStatuses.success,
            settingLink: '',
          },
        ]}
      />
    </div>
  );
};

export default Rate;
