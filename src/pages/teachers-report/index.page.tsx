import { FC } from 'react';
import { ButtonColorThemes, TeacherStatuses } from '@app/enums';
import { Button, TeachersTable } from '@components';
import CustomPagination from '@components/custom-pagination/CustomPagination';
import InformationItem from '@components/information-item/InformationItem';
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
            >
              Найти
            </Button>
            <Button className={styles.buttonSize}>Выгрузить в Excel</Button>
          </div>
        </div>
      </div>
      <div className={styles.tableBlock}>
        <div className={styles.tableContent}>
          <TeachersTable
            rows={[
              {
                id: 1,
                fullName: 'Днепровский А.А.',
                lessonsAmount: 122,
                registrationDate: new Date(),
                workedHoursAmount: 236,
                childrenNumber: 12,
                status: TeacherStatuses.active,
              },
              {
                id: 2,
                fullName: 'Днепровский А.А.',
                lessonsAmount: 122,
                registrationDate: new Date(),
                workedHoursAmount: 236,
                childrenNumber: 12,
                status: TeacherStatuses.active,
              },

              {
                id: 3,
                fullName: 'Днепровский А.А.',
                lessonsAmount: 122,
                registrationDate: new Date(),
                workedHoursAmount: 236,
                childrenNumber: 12,
                status: TeacherStatuses.active,
              },
              {
                id: 4,
                fullName: 'Днепровский А.А.',
                lessonsAmount: 122,
                registrationDate: new Date(),
                workedHoursAmount: 236,
                childrenNumber: 12,
                status: TeacherStatuses.active,
              },
              {
                id: 5,
                fullName: 'Днепровский А.А.',
                lessonsAmount: 122,
                registrationDate: new Date(),
                workedHoursAmount: 236,
                childrenNumber: 12,
                status: TeacherStatuses.active,
              },
              {
                id: 6,
                fullName: 'Днепровский А.А.',
                lessonsAmount: 122,
                registrationDate: new Date(),
                workedHoursAmount: 236,
                childrenNumber: 12,
                status: TeacherStatuses.active,
              },
              {
                id: 7,
                fullName: 'Днепровский А.А.',
                lessonsAmount: 122,
                registrationDate: new Date(),
                workedHoursAmount: 236,
                childrenNumber: 12,
                status: TeacherStatuses.active,
              },
              {
                id: 8,
                fullName: 'Днепровский А.А.',
                lessonsAmount: 122,
                registrationDate: new Date(),
                workedHoursAmount: 236,
                childrenNumber: 12,
                status: TeacherStatuses.active,
              },
              {
                id: 9,
                fullName: 'Днепровский А.А.',
                lessonsAmount: 122,
                registrationDate: new Date(),
                workedHoursAmount: 236,
                childrenNumber: 12,
                status: TeacherStatuses.active,
              },
              {
                id: 10,
                fullName: 'Днепровский А.А.',
                lessonsAmount: 122,
                registrationDate: new Date(),
                workedHoursAmount: 236,
                childrenNumber: 12,
                status: TeacherStatuses.active,
              },
            ]}
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
