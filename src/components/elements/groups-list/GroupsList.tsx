import styles from 'src/components/elements/groups-list/GroupsList.module.scss';

interface GroupsListProps {
  groups: string[];
}

const GroupsList = ({ groups }: GroupsListProps) => (
  <div className={styles.wrapper}>
    {groups.map(group => (
      <button type="button" className={styles.button} key={group}>
        {group}
      </button>
    ))}
    <button type="button" className={styles.buttonAdd}>
      Добавить +
    </button>
  </div>
);

export default GroupsList;
