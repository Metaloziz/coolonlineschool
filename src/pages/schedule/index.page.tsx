import { StudentStatuses } from '@app/enums';
import {
  Schedule as ScheduleComponent,
  ScheduleSearchForm,
  StudentCard,
  TaskVisualizersList,
} from '@components';

import cl from './Schedule.module.scss';

const Schedule = () => (
  <div className={cl.container}>
    <div className={cl.topBlock}>
      <StudentCard
        className={cl.cardBlock}
        options={{
          studentName: 'Днепровский Александр Алексеевич',
          status: StudentStatuses.beginner,
          pointsNumber: 5,
          city: 'Москва',
          id: '1',
        }}
      />
      <ScheduleSearchForm
        className={cl.searchBlock}
        groupList={[
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' },
          { label: '4', value: '4' },
          { label: '5', value: '5' },
        ]}
        cityList={[
          { label: 'Москва', value: 'Moscow' },
          { label: 'Санкт-Петербург', value: 'Saint-Petersburg' },
          { label: 'Новосибирск', value: 'Novosibirsk' },
        ]}
        onSubmit={e => {
          e.preventDefault();
          console.log(e, 'Form has submitted');
        }}
      />
      <TaskVisualizersList className={cl.blockVisualizer} />
    </div>
    <ScheduleComponent className={cl.schedule} searchedDate={new Date(0, 0, 4)} />
  </div>
);

export default Schedule;
