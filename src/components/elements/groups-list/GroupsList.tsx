import styles from 'src/components/elements/groups-list/GroupsList.module.scss';

interface GroupsListProps {
  groups: string[];
  openModalGroup: () => void;
}

const GroupsList = ({ groups, openModalGroup }: GroupsListProps) => (
  <div className={styles.wrapper}>
    {groups.map(group => (
      <button type="button" className={styles.button} key={group}>
        {group}
      </button>
    ))}
    <button onClick={openModalGroup} type="button" className={styles.buttonAdd}>
      Добавить +
    </button>
  </div>
);

export default GroupsList;
