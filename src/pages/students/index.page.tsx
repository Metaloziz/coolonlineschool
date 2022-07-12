import { ButtonColorThemes, StudentStatuses } from '@app/enums';
import { Button, Homeworks, Input } from '@components';
import CustomPagination from '@components/custom-pagination/CustomPagination';
import { GroupsList } from '@pages/students/GroupsList/GroupsList';
import StudentsList, {
  IStudent,
} from '@pages/students/studentsList/StudentsList';
import goodJobClass from '@svgs/studentsIcon/goodJobClass.svg';
import participationCompetitions from '@svgs/studentsIcon/participationCompetitions.svg';
import participationOlympiad from '@svgs/studentsIcon/participationOlympiad.svg';
import tenHomeworks from '@svgs/studentsIcon/tenHomeworks.svg';
import { getRandomId } from '@utils/RandomId';
import CustomSelect from 'src/components/custom-select/CustomSelect';
import styles from 'src/pages/students/Students.module.scss';

const STUDENTS: IStudent[] = [
  {
    studentName: 'Днепровский Александр Алексеевич',
    city: 'Москва',
    status: StudentStatuses.beginner,
    pointsNumber: 1,
    achievements: [
      { title: 'tenHomeworks', imageUrl: tenHomeworks },
      { title: 'participationOlympiad', imageUrl: participationCompetitions },
      { title: 'goodJobClass', imageUrl: goodJobClass },
      { title: 'participationCompetitions', imageUrl: participationOlympiad },
      { title: 'tenHomeworks', imageUrl: tenHomeworks },
      { title: 'participationOlympiad', imageUrl: participationCompetitions },
      { title: 'goodJobClass', imageUrl: goodJobClass },
      { title: 'participationCompetitions', imageUrl: participationOlympiad },
    ],
    options: {
      isCheck: true,
      isQuestion: true,
      isCamera: true,
    },
  },
  {
    studentName: 'Днепровский Александр Алексеевич',
    city: 'Москва',
    status: StudentStatuses.beginner,
    pointsNumber: 1,
    achievements: [
      { title: 'tenHomeworks', imageUrl: tenHomeworks },
      { title: 'participationOlympiad', imageUrl: participationCompetitions },
      { title: 'goodJobClass', imageUrl: goodJobClass },
      { title: 'participationCompetitions', imageUrl: participationOlympiad },
    ],
    options: {
      isQuestion: false,
      isCamera: false,
    },
  },
  {
    studentName: 'Днепровский Александр Алексеевич',
    city: 'Москва',
    status: StudentStatuses.beginner,
    pointsNumber: 1,
    achievements: [],
    options: {},
  },
];
const OPTIONS = [{ label: '2022', value: '2022' }];

const IndexPage = () => {
  return (
    <div className={styles.innerContent}>
      <div style={{ display: 'flex', marginBottom: '23px' }}>
        <CustomSelect
          size={'normal'}
          className={styles.select}
          options={OPTIONS}
          placeholder={'год'}
        />
        <CustomSelect
          size={'normal'}
          className={styles.select}
          options={OPTIONS}
          placeholder={'месяц'}
        />
        <CustomPagination
          paginate={() => true}
          count={1}
          next={() => true}
          prev={() => true}
          total={12}
        />
      </div>
      <form style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={styles.wrapper}>
            <p className={styles.description}>Выполнил Д/З</p>
            <CustomSelect
              size={'normal'}
              className={styles.select}
              options={OPTIONS}
              placeholder={''}
            />
          </div>
          <div className={styles.wrapper}>
            <Input className={styles.input} labelText="Город" />
          </div>
          <div className={styles.wrapper}>
            <p className={styles.description}>Группа</p>
            <CustomSelect
              size={'normal'}
              className={styles.select}
              options={OPTIONS}
              placeholder={''}
            />
          </div>
          <div className={styles.wrapper}>
            <Input className={styles.input} labelText="ФИО ученика" />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={styles.wrapper}>
            <p className={styles.description}>Есть вопросы?</p>
            <CustomSelect
              size={'normal'}
              className={styles.select}
              options={OPTIONS}
              placeholder={''}
            />
          </div>
          <div className={styles.wrapper}>
            <p className={styles.description}>Сортировка</p>
            <CustomSelect
              size={'normal'}
              className={styles.select}
              options={OPTIONS}
              placeholder={''}
            />
          </div>
          <div className={styles.wrapper}>
            <p className={styles.description}>ФИО учителя</p>
            <CustomSelect
              size={'normal'}
              className={styles.select}
              options={OPTIONS}
              placeholder={''}
            />
          </div>
          <div className={styles.wrapper}>
            <Button
              className={styles.submitBtn}
              colorTheme={ButtonColorThemes.green}
              type="submit"
            >
              Найти
            </Button>
          </div>
        </div>
      </form>
      <div style={{ display: 'flex' }}>
        <GroupsList groups={['group1', 'group2', 'group3']} />
        <Homeworks
          className={styles.homeworks}
          homeworks={[
            {
              gameTitle: 'Память и ритм',
              id: getRandomId(),
              description: {
                needToDo: '',
                minutesLeft: 10,
                tips: [
                  {
                    text: '1',
                    id: getRandomId(),
                  },
                  {
                    text: '2',
                    id: getRandomId(),
                  },
                  {
                    text: '3',
                    id: getRandomId(),
                  },
                ],
              },
            },
            {
              gameTitle: 'Число - фигура - слово',
              id: getRandomId(),
              description: {
                needToDo: 'Присесть 1070 раз и сделать 1200 отжиманий',
                minutesLeft: 120,
                tips: [
                  {
                    text: 'test',
                    id: getRandomId(),
                  },
                  {
                    text: 'test2',
                    id: getRandomId(),
                  },
                  {
                    text: 'test3',
                    id: getRandomId(),
                  },
                ],
              },
            },
          ]}
        />
        <StudentsList students={STUDENTS} />
      </div>
    </div>
  );
};

export default IndexPage;
