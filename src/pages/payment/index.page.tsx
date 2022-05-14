import { RatePlans } from '@app/enums/Enums';
import { Balance, RatePlan, RatesTable } from '@containers';
import styles from './Payment.module.scss';

export default function Payment() {
  return (
    <div className={styles.container}>
      <RatePlan ratePlan={RatePlans.personal} />
      <Balance
        balanceFunds={4200}
        lessonCount={4}
        ratePlanFirst="Тариф 1"
        ratePlanSecond="Тариф 2"
      />
      <RatesTable
        className={styles.ratesTable}
        rates={[
          {
            id: 1,
            moneyAmount: 5000,
            description: 'Оплата за март. Тариф “Индивидуальный”',
            paymentDate: new Date(),
            ratePlan: RatePlans.personal,
            status: 'success',
          },
          {
            id: 2,
            moneyAmount: 3300,
            description: 'Оплата за март. Тариф “Самостоятельный”',
            paymentDate: new Date(),
            ratePlan: RatePlans.personal,
            status: 'success',
          },
          {
            id: 3,
            moneyAmount: 4200,
            description: 'Оплата за март. Тариф “Продвинутый”',
            paymentDate: new Date(),
            ratePlan: RatePlans.personal,
            status: 'success',
          },
          {
            id: 4,
            moneyAmount: 500,
            description: 'Оплата за март. Тариф “Индивидуальный”',
            paymentDate: new Date(),
            ratePlan: RatePlans.personal,
            status: 'success',
          },
          {
            id: 5,
            moneyAmount: 5000,
            description: 'Оплата за март. Тариф “Индивидуальный”',
            paymentDate: new Date(),
            ratePlan: RatePlans.personal,
            status: 'success',
          },
          {
            id: 6,
            moneyAmount: 0,
            description: 'Оплата за март. Тариф “Индивидуальный”',
            paymentDate: new Date(),
            ratePlan: RatePlans.personal,
            status: 'success',
          },
        ]}
      />
    </div>
  );
}
