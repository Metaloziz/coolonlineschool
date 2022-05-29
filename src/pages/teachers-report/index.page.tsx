import { FC } from 'react';
import { ButtonColorThemes, RatePlans } from '@app/enums/Enums';
import { Button } from '@components';
import CustomPagination from '@components/custom-pagination/CustomPagination';
import InformationItem from '@components/information-item/InformationItem';
import { RatesTable } from '@containers';
import { city, group, status } from '@mock/moks-data-select';
import styles from './TeachersReport.module.scss';

const IndexPage: FC = () => {
  return (
    <div className={styles.innerContent}>
      <div className={styles.wrapBlock}>
        <div className={styles.infoBlock1}>
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
          <InformationItem title={'Дата рождения'} variant={'calendar'} />
          <InformationItem title={'Возраст'} variant={'input'} />
          <InformationItem
            title={'Статус'}
            variant={'select'}
            option={status}
          />
        </div>
        <div className={styles.infoBlock3}>
          <InformationItem title={'Дата начала периода'} variant={'calendar'} />
          <InformationItem
            title={'Дата окончания периода'}
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
      </div>
      <div className={styles.pagination}>
        <CustomPagination
          paginate={() => true}
          count={1}
          next={() => true}
          prev={() => true}
          total={5}
        />
      </div>
    </div>
  );
};

export default IndexPage;
