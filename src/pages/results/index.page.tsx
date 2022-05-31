import { ProgressBarColorThemes, ProgressBarSizes } from '@app/enums/Enums';
import { ProgressBar, StudentsTable, VerticalSlider } from '@components';
import { StudentCard, Slider, GetResultsForm } from '@containers';
import { getRandomId } from '@utils/RandomId';
import cl from './Results.module.scss';

export default function Results() {
  return (
    <div className={cl.container}>
      <StudentCard
        options={{
          status: 'Новичок',
          studentName: 'Днепровский Александр Алексеевич',
          geo: 'Москва',
        }}
        className={cl.cardStudent}
      />
      <GetResultsForm
        onSubmit={function () {
          throw new Error('Function not implemented.');
        }}
      />
      <ProgressBar
        title="Общий балл"
        percentToComplete={50}
        colorTheme={ProgressBarColorThemes.red}
        size={ProgressBarSizes.big}
        className={cl.progressBar}
      />
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
      <StudentsTable
        students={[
          {
            fullName: 'Днепровский Александр Алексеевич',
            studyPeriodBeginning:
              '' + new Date().toISOString().substring(0, 10),
            studyPeriodEnd: '' + new Date().toISOString().substring(0, 10),
            group: 1,
            id: getRandomId(),
          },
          {
            fullName: 'Днепровский Александр Алексеевич',
            studyPeriodBeginning:
              '' + new Date().toISOString().substring(0, 10),
            studyPeriodEnd: '' + new Date().toISOString().substring(0, 10),
            group: 1,
            id: getRandomId(),
          },
          {
            fullName: 'Днепровский Александр Алексеевич',
            studyPeriodBeginning:
              '' + new Date().toISOString().substring(0, 10),
            studyPeriodEnd: '' + new Date().toISOString().substring(0, 10),
            group: 1,
            id: getRandomId(),
          },
          {
            fullName: 'Днепровский Александр Алексеевич',
            studyPeriodBeginning:
              '' + new Date().toISOString().substring(0, 10),
            studyPeriodEnd: '' + new Date().toISOString().substring(0, 10),
            group: 1,
            id: getRandomId(),
          },
        ]}
        className={cl.table}
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
        className={cl.verticalSlider}
      />
    </div>
  );
}
