import { useState } from 'react';

import { PaymentStatuses, TariffPlans as TariffPlansEnum } from '@app/enums';
import { Balance, TariffPlan, TariffPlans, PaymentsTable, ModalBasic } from '@components';

import cl from './Payment.module.scss';

const Payment = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className={cl.container}>
      <div className={cl.topBlock}>
        <TariffPlan tariffPlan={TariffPlansEnum.personal} className={cl.planBlock} />
        <Balance
          isAutoRefill={false}
          className={cl.balanceBlock}
          balanceFunds={4200}
          lessonCount={4}
          tariffPlanFirst="Тариф 1"
          tariffPlanSecond="Тариф 2"
          openModal={() => {
            setShowModal(true);
          }}
        />
      </div>
      <PaymentsTable
        className={cl.paymentsTable}
        rows={[
          {
            id: 1,
            moneyAmount: 5000,
            description: 'Оплата за март. Тариф “Индивидуальный”',
            paymentDate: new Date(),
            tariffPlan: TariffPlansEnum.personal,
            status: PaymentStatuses.success,
            chequeLink: '',
          },
          {
            id: 2,
            moneyAmount: 3300,
            description: 'Оплата за март. Тариф “Самостоятельный”',
            paymentDate: new Date(),
            tariffPlan: TariffPlansEnum.personal,
            status: PaymentStatuses.success,
            chequeLink: '',
          },
          {
            id: 3,
            moneyAmount: 4200,
            description: 'Оплата за март. Тариф “Продвинутый”',
            paymentDate: new Date(),
            tariffPlan: TariffPlansEnum.personal,
            status: PaymentStatuses.success,
            chequeLink: '',
          },
          {
            id: 4,
            moneyAmount: 500,
            description: 'Оплата за март. Тариф “Индивидуальный”',
            paymentDate: new Date(),
            tariffPlan: TariffPlansEnum.personal,
            status: PaymentStatuses.success,
            chequeLink: '',
          },
          {
            id: 5,
            moneyAmount: 5000,
            description: 'Оплата за март. Тариф “Индивидуальный”',
            paymentDate: new Date(),
            tariffPlan: TariffPlansEnum.personal,
            status: PaymentStatuses.success,
            chequeLink: '',
          },
          {
            id: 6,
            moneyAmount: 0,
            description: 'Оплата за март. Тариф “Индивидуальный”',
            paymentDate: new Date(),
            tariffPlan: TariffPlansEnum.personal,
            status: PaymentStatuses.success,
            chequeLink: '',
          },
        ]}
      />

      <ModalBasic isVisibility={showModal} changeVisibility={setShowModal}>
        <div className={cl.tariffModal}>
          <TariffPlans
            className={cl.planModal}
            isRender
            tariffPlans={[
              {
                id: 1,
                moneyAmount: 4547,
                tariffPlan: TariffPlansEnum.introductory,
                percentDiscount: 50,
              },
              {
                id: 2,
                moneyAmount: '3300₽',
                tariffPlan: TariffPlansEnum.independent,
              },
              {
                id: 3,
                moneyAmount: '4200₽',
                tariffPlan: TariffPlansEnum.advanced,
                isExtraOption: true,
              },
              {
                id: 4,
                moneyAmount: '5000₽',
                tariffPlan: TariffPlansEnum.personal,
                isExtraOption: true,
              },
            ]}
          />
        </div>
      </ModalBasic>
    </div>
  );
};

export default Payment;
