import styles from './GroupsList.module.scss';

interface GroupsListProps {
  groups: string[];
}

export const GroupsList = ({ groups }: GroupsListProps) => {
  return (
    <div className={styles.wrapper}>
      {groups.map((group) => {
        return (
          <button className={styles.button} key={group}>
            {group}
          </button>
        );
      })}
    </div>
  );
};
