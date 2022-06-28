import { FC } from 'react';
import { ButtonColorThemes, TariffPlans, TariffStatuses } from '@app/enums';
import { Button, StudentTariffsTable } from '@components';
import AdminInfoList from '@components/admin-info-list/AdminInfoList';
import InformationItem from '@components/information-item/InformationItem';
import { city, group, homework, paidFor, status } from '@mock/moks-data-select';
import styles from './Admin.module.scss';

const IndexPage: FC = () => {
  return (
    <div className={styles.innerContent}>
      <div className={styles.wrapBlock}>
        <div className={styles.infoBlock1}>
          <InformationItem
            title={'Выполнил Д/З'}
            variant={'select'}
            option={homework}
          />
          <InformationItem
            size={'large'}
            title={'Город'}
            variant={'input'}
            option={city}
          />
          <InformationItem title={'Группа'} variant={'select'} option={group} />
          <InformationItem
            title={'ФИО ученика'}
            variant={'input'}
            size={'large'}
          />
        </div>
        <div className={styles.infoBlock2}>
          <InformationItem
            title={'Оплачен'}
            variant={'select'}
            option={paidFor}
          />
          <InformationItem title={'Дата рождения'} variant={'calendar'} />
          <InformationItem title={'Возраст'} variant={'select'} />
        </div>
        <div className={styles.infoBlock3}>
          <InformationItem
            title={'Статус'}
            variant={'select'}
            option={status}
          />
          <InformationItem
            title={'Дата начала действия'}
            variant={'calendar'}
          />
          <InformationItem
            title={'Дата окончания действия'}
            variant={'calendar'}
          />
          <div className={styles.btnBlock}>
            <Button
              className={styles.buttonSize}
              colorTheme={ButtonColorThemes.green}
            >
              Найти
            </Button>
            <Button className={styles.buttonSize}>Выгрузить в Excel</Button>
          </div>
        </div>
      </div>
      <div className={styles.tableBlock}>
        <div className={styles.tableContent}>
          <StudentTariffsTable
            rows={[
              {
                id: 1,
                fullName: 'Днепровский А.А.',
                age: 9,
                registrationDate: new Date(),
                tariffStartDate: new Date(),
                tariffEndDate: new Date(),
                tariffPlan: TariffPlans.personal,
                paymentDate: new Date(),
                status: TariffStatuses.active,
              },
              {
                id: 2,
                fullName: 'Днепровский А.А.',
                age: 9,
                registrationDate: new Date(),
                tariffStartDate: new Date(),
                tariffEndDate: new Date(),
                tariffPlan: TariffPlans.personal,
                paymentDate: new Date(),
                status: TariffStatuses.active,
              },
              {
                id: 3,
                fullName: 'Днепровский А.А.',
                age: 9,
                registrationDate: new Date(),
                tariffStartDate: new Date(),
                tariffEndDate: new Date(),
                tariffPlan: TariffPlans.personal,
                paymentDate: new Date(),
                status: TariffStatuses.active,
              },
              {
                id: 4,
                fullName: 'Днепровский А.А.',
                age: 9,
                registrationDate: new Date(),
                tariffStartDate: new Date(),
                tariffEndDate: new Date(),
                tariffPlan: TariffPlans.personal,
                paymentDate: new Date(),
                status: TariffStatuses.active,
              },
              {
                id: 5,
                fullName: 'Днепровский А.А.',
                age: 9,
                registrationDate: new Date(),
                tariffStartDate: new Date(),
                tariffEndDate: new Date(),
                tariffPlan: TariffPlans.personal,
                paymentDate: new Date(),
                status: TariffStatuses.active,
              },
              {
                id: 6,
                fullName: 'Днепровский А.А.',
                age: 9,
                registrationDate: new Date(),
                tariffStartDate: new Date(),
                tariffEndDate: new Date(),
                tariffPlan: TariffPlans.personal,
                paymentDate: new Date(),
                status: TariffStatuses.active,
              },
              {
                id: 7,
                fullName: 'Днепровский А.А.',
                age: 9,
                registrationDate: new Date(),
                tariffStartDate: new Date(),
                tariffEndDate: new Date(),
                tariffPlan: TariffPlans.personal,
                paymentDate: new Date(),
                status: TariffStatuses.active,
              },
              {
                id: 8,
                fullName: 'Днепровский А.А.',
                age: 9,
                registrationDate: new Date(),
                tariffStartDate: new Date(),
                tariffEndDate: new Date(),
                tariffPlan: TariffPlans.personal,
                paymentDate: new Date(),
                status: TariffStatuses.active,
              },
              {
                id: 9,
                fullName: 'Днепровский А.А.',
                age: 9,
                registrationDate: new Date(),
                tariffStartDate: new Date(),
                tariffEndDate: new Date(),
                tariffPlan: TariffPlans.personal,
                paymentDate: new Date(),
                status: TariffStatuses.active,
              },
              {
                id: 10,
                fullName: 'Днепровский А.А.',
                age: 9,
                registrationDate: new Date(),
                tariffStartDate: new Date(),
                tariffEndDate: new Date(),
                tariffPlan: TariffPlans.personal,
                paymentDate: new Date(),
                status: TariffStatuses.active,
              },
            ]}
          />
        </div>
        <div className={styles.rightBlock}>
          <AdminInfoList />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
