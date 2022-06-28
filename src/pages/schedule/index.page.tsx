import { StudentStatuses } from '@app/enums';
import {
  Schedule as ScheduleComponent,
  ScheduleSearchForm,
  StudentCard,
  TaskVisualizersList,
} from '@components';
import cl from './Schedule.module.scss';

export default function Schedule() {
  return (
    <div className={cl.container}>
      <StudentCard
        options={{
          studentName: 'Днепровский Александр Алексеевич',
          status: StudentStatuses.beginner,
          pointsNumber: 5,
          city: 'Москва',
        }}
      />
      <ScheduleSearchForm
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
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e, 'Form has submitted');
        }}
      />
      <TaskVisualizersList />
      <ScheduleComponent
        className={cl.schedule}
        searchedDate={new Date(0, 0, 4)}
      />
    </div>
  );
}
