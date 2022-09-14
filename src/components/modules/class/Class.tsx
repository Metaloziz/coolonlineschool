import { useEffect, useState } from 'react';

import { classStore } from '@app/store/classStore';
import { Homeworks } from '@components';
import { StudentsList, GroupsList, SearchForm } from '@components/elements';
import ModalAddGroup from '@components/elements/modals/modal-add-group/ModalAddGroup';
import { HOMEWORKS, STUDENTS } from '@mock/index';

import styles from './Class.module.scss';

const GROUPS = ['Группа 1А', 'Группа 1Б', 'Группа 1С', 'Группа 2А', 'Группа 2Б', 'Группа 2С'];

const Class = () => {
  const [isModalAddGroup, setIsModalAddGroup] = useState(false);

  const closeModalGroup = () => {
    setIsModalAddGroup(false);
  };

  const openModalGroup = () => {
    setIsModalAddGroup(true);
  };

  return (
    <>
      <div className={styles.innerContent}>
        <SearchForm />

        <div className={styles.wrapperList}>
          <div className={styles.wrapperHomeworks}>
            <GroupsList groups={GROUPS} openModalGroup={openModalGroup} />
            <Homeworks isEdit className={styles.homeworks} homeworks={HOMEWORKS} />
          </div>

          <StudentsList className={styles.studentsList} students={STUDENTS} />
        </div>
      </div>
      <ModalAddGroup
        open={isModalAddGroup}
        setOpen={setIsModalAddGroup}
        closeMode={closeModalGroup}
      />
    </>
  );
};

export default Class;
