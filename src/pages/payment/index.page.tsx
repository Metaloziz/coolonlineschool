import { useState } from 'react';
import { RatePlans as RatePlansEnum } from '@app/enums/Enums';
import { Balance, Modal, RatePlan, RatePlans, RatesTable } from '@containers';
import cl from './Payment.module.scss';

export default function Payment() {
  const [isModal, setIsModal] = useState(false);

  return (
    <div className={cl.container}>
      <RatePlan ratePlan={RatePlansEnum.personal} />
      <Balance
        balanceFunds={4200}
        lessonCount={4}
        ratePlanFirst="Тариф 1"
        ratePlanSecond="Тариф 2"
        openModal={() => {
          setIsModal(true);
        }}
      />
      <RatesTable
        className={cl.ratesTable}
        rates={[
          {
            id: 1,
            moneyAmount: 5000,
            description: 'Оплата за март. Тариф “Индивидуальный”',
            paymentDate: new Date(),
            ratePlan: RatePlansEnum.personal,
            status: 'success',
          },
          {
            id: 2,
            moneyAmount: 3300,
            description: 'Оплата за март. Тариф “Самостоятельный”',
            paymentDate: new Date(),
            ratePlan: RatePlansEnum.personal,
            status: 'success',
          },
          {
            id: 3,
            moneyAmount: 4200,
            description: 'Оплата за март. Тариф “Продвинутый”',
            paymentDate: new Date(),
            ratePlan: RatePlansEnum.personal,
            status: 'success',
          },
          {
            id: 4,
            moneyAmount: 500,
            description: 'Оплата за март. Тариф “Индивидуальный”',
            paymentDate: new Date(),
            ratePlan: RatePlansEnum.personal,
            status: 'success',
          },
          {
            id: 5,
            moneyAmount: 5000,
            description: 'Оплата за март. Тариф “Индивидуальный”',
            paymentDate: new Date(),
            ratePlan: RatePlansEnum.personal,
            status: 'success',
          },
          {
            id: 6,
            moneyAmount: 0,
            description: 'Оплата за март. Тариф “Индивидуальный”',
            paymentDate: new Date(),
            ratePlan: RatePlansEnum.personal,
            status: 'success',
          },
        ]}
      />

      <Modal isOpen={isModal}>
        <RatePlans
          closeModal={() => {
            setIsModal(false);
          }}
          ratePlans={[
            {
              id: 1,
              moneyAmount: 4547,
              ratePlan: RatePlansEnum.introductory,
              percentDiscount: 50,
            },
            {
              id: 2,
              moneyAmount: 3300,
              ratePlan: RatePlansEnum.independent,
            },
            {
              id: 3,
              moneyAmount: 4200,
              ratePlan: RatePlansEnum.advanced,
              isExtraOption: true,
            },
            {
              id: 4,
              moneyAmount: 5000,
              ratePlan: RatePlansEnum.personal,
              isExtraOption: true,
            },
          ]}
        />
      </Modal>
    </div>
  );
}
