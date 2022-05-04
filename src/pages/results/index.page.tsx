import { ProgressBarColorThemes, ProgressBarSizes } from '@app/enums/Enums';
import ButtonSubmit from '@components/button-submit/ButtonSubmit';
import ProgressBar from '@components/progress-bar/ProgressBar';
import CustomSelect from '@components/select/CustomSelect';
import Table from '@components/table/Table';
import TextFieldCalendar from '@components/text-field-calendar/TextFieldCalendar';
import VerticalSlider from '@components/vertical-slider/VerticalSlider';
import CardStudent from '@containers/card-student/CardStudent';
import Slider from '@containers/slider/Slider';
import styles from './Results.module.scss';

export default function Results() {
  return (
    <div className={styles.container}>
      <CardStudent
        options={{
          status: 'Новичок',
          studentName: 'Днепровский Александр Алексеевич',
          geo: 'Москва',
        }}
        className={styles.cardStudent}
      />
      <form className={styles.form} action="" method="post">
        <Slider
          className={styles.slider}
          options={[
            {
              id: +new Date().toDateString(),
              isActive: true,
              text: 'Общий балл',
            },
            { id: +new Date().toDateString(), text: 'Танграм' },
            { id: +new Date().toDateString(), text: 'Игра 1' },
            { id: +new Date().toDateString(), text: 'Игра 2' },
            { id: +new Date().toDateString(), text: 'Игра 3' },
          ]}
        />
        <TextFieldCalendar
          className={styles.textFieldCalendar}
          text="Начало периода"
        />
        <CustomSelect
          options={[{ label: 'Шаблон', value: 'pattern' }]}
          placeholder="Шаблон"
        />
        <CustomSelect
          options={[{ label: 'ФИО ученика', value: 'studentFullName' }]}
          placeholder="ФИО ученика"
        />
        <CustomSelect
          options={[{ label: 'Группа', value: 'group' }]}
          placeholder="Группа"
        />
        <TextFieldCalendar text="Конец периода" />

        <ButtonSubmit className={styles.submit} />
      </form>
      <ProgressBar
        title="Общий балл"
        percentToComplete={50}
        colorTheme={ProgressBarColorThemes.red}
        size={ProgressBarSizes.big}
        className={styles.progressBar}
      />
      <Slider
        options={[
          { id: +new Date().toDateString(), text: 'Таблица' },
          { id: +new Date().toDateString(), isActive: true, text: 'График' },
        ]}
        colorTheme="red"
        className={styles.bigSlider}
      />
      <Table
        students={[
          {
            fullName: 'Днепровский Александр Алексеевич',
            studyPeriodBeginning:
              '' + new Date().toISOString().substring(0, 10),
            studyPeriodEnd: '' + new Date().toISOString().substring(0, 10),
            group: 1,
            id: +new Date().toDateString(),
          },
          {
            fullName: 'Днепровский Александр Алексеевич',
            studyPeriodBeginning:
              '' + new Date().toISOString().substring(0, 10),
            studyPeriodEnd: '' + new Date().toISOString().substring(0, 10),
            group: 1,
            id: +new Date().toDateString(),
          },
          {
            fullName: 'Днепровский Александр Алексеевич',
            studyPeriodBeginning:
              '' + new Date().toISOString().substring(0, 10),
            studyPeriodEnd: '' + new Date().toISOString().substring(0, 10),
            group: 1,
            id: +new Date().toDateString(),
          },
          {
            fullName: 'Днепровский Александр Алексеевич',
            studyPeriodBeginning:
              '' + new Date().toISOString().substring(0, 10),
            studyPeriodEnd: '' + new Date().toISOString().substring(0, 10),
            group: 1,
            id: +new Date().toDateString(),
          },
        ]}
        className={styles.table}
      />
      <VerticalSlider
        options={[
          {
            text: 'Параметр 1',
            id: +new Date().toDateString(),
            isActive: true,
          },
          { text: 'Параметр 2', id: +new Date().toDateString() },
          { text: 'Параметр 3', id: +new Date().toDateString() },
          { text: 'Параметр 4', id: +new Date().toDateString() },
          { text: 'Параметр 5', id: +new Date().toDateString() },
        ]}
        className={styles.verticalSlider}
      />
    </div>
  );
}
