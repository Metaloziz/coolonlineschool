import { ProgressBar, StudentsTable, VerticalSlider } from '@components';
import { CardStudent, Slider } from '@containers';
import GetResultsForm from '@containers/get-results-form/GetResultsForm';
import { resultsPageRendering } from '@mock/rendering-pages';
import styles from './Results.module.scss';

export default function Results() {
  return (
    <div className={styles.container}>
      <CardStudent
        {...resultsPageRendering.cardStudent}
        className={styles.cardStudent}
      />
      <GetResultsForm />
      <ProgressBar
        {...resultsPageRendering.progressBar}
        className={styles.progressBar}
      />
      <Slider {...resultsPageRendering.slider} className={styles.bigSlider} />
      <StudentsTable {...resultsPageRendering.table} className={styles.table} />
      <VerticalSlider
        {...resultsPageRendering.verticalSlider}
        className={styles.verticalSlider}
      />
    </div>
  );
}
