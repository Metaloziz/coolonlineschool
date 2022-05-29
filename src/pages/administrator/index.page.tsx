import { FC } from 'react';
import { ButtonColorThemes, RatePlans } from '@app/enums/Enums';
import { Button } from '@components';
import AdminInfoList from '@components/admin-info-list/AdminInfoList';
import InformationItem from '@components/information-item/InformationItem';
import { RatesTable } from '@containers';
import { city, group, homework, paidFor, status } from '@mock/moks-data-select';
import styles from './Administrator.module.scss';

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
              text="Найти"
            />
            <Button className={styles.buttonSize} text="Выгрузить в Excel" />
          </div>
        </div>
      </div>
      <div className={styles.tableBlock}>
        <div className={styles.tableContent}>
          <RatesTable
            rates={[
              {
                id: 1,
                moneyAmount: 5000,
                description: 'Оплата за март. Тариф “Индивидуальный”',
                paymentDate: new Date(),
                ratePlan: RatePlans.personal,
                status: 'success',
              },
            ]}
            className={styles.ratesTable}
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
