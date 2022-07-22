import { ProgressBarColorThemes, ProgressBarSizes, StudentStatuses } from '@app/enums';
import {
  StudentCard,
  Slider,
  GetResultsForm,
  ProgressBar,
  StudentsTable,
  VerticalSlider,
} from '@components';
import { getRandomId } from '@utils/RandomId';

import cl from './Results.module.scss';

const Results = () => (
  <div className={cl.container}>
    <div className={cl.choiceBlock}>
      <StudentCard
        options={{
          status: StudentStatuses.beginner,
          studentName: 'Днепровский Александр Алексеевич',
          city: 'Москва',
        }}
        className={cl.cardStudent}
      />
      <GetResultsForm
        className={cl.resultForm}
        onSubmit={e => {
          e.preventDefault();
          console.log(e, 'Form has submitted');
        }}
      />
    </div>
    <div className={cl.botBlock}>
      <div className={cl.leftBlock}>
        <Slider
          options={[
            { id: getRandomId(), text: 'Таблица' },
            {
              id: getRandomId(),
              isActive: true,
              text: 'График',
            },
          ]}
          colorTheme="red"
          className={cl.bigSlider}
        />
        <VerticalSlider
          options={[
            {
              text: 'Параметр 1',
              id: getRandomId(),
              isActive: true,
            },
            { text: 'Параметр 2', id: getRandomId() },
            { text: 'Параметр 3', id: getRandomId() },
            { text: 'Параметр 4', id: getRandomId() },
            { text: 'Параметр 5', id: getRandomId() },
          ]}
        />
      </div>
      <div className={cl.rightBlock}>
        <StudentsTable
          students={[
            {
              fullName: 'Днепровский Александр Алексеевич',
              studyPeriodBeginning: `${new Date().toISOString().substring(0, 10)}`,
              studyPeriodEnd: `${new Date().toISOString().substring(0, 10)}`,
              group: 1,
              id: getRandomId(),
            },
            {
              fullName: 'Днепровский Александр Алексеевич',
              studyPeriodBeginning: `${new Date().toISOString().substring(0, 10)}`,
              studyPeriodEnd: `${new Date().toISOString().substring(0, 10)}`,
              group: 1,
              id: getRandomId(),
            },
            {
              fullName: 'Днепровский Александр Алексеевич',
              studyPeriodBeginning: `${new Date().toISOString().substring(0, 10)}`,
              studyPeriodEnd: `${new Date().toISOString().substring(0, 10)}`,
              group: 1,
              id: getRandomId(),
            },
            {
              fullName: 'Днепровский Александр Алексеевич',
              studyPeriodBeginning: `${new Date().toISOString().substring(0, 10)}`,
              studyPeriodEnd: `${new Date().toISOString().substring(0, 10)}`,
              group: 1,
              id: getRandomId(),
            },
          ]}
          className={cl.table}
        />
        <ProgressBar
          title="Общий балл"
          percentToComplete={50}
          colorTheme={ProgressBarColorThemes.red}
          size={ProgressBarSizes.big}
          className={cl.progressBar}
        />
      </div>
    </div>
  </div>
);

export default Results;
