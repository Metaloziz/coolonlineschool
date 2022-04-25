import { FC } from 'react';
import { TeacherCommentProps } from '@app/types/ComponentsProps';
import Button from '@components/button/Button';
import styles from './TeacherComment.module.scss';

const TeacherComment: FC<TeacherCommentProps> = ({ comment, commentDate }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Комментарий учителя к домашенму заданию на {commentDate}
      </p>
      <p className={styles.comment}>{comment}</p>
      <div className={styles.buttons}>
        <Button colorTheme="red" text="Есть вопросы, обсудить на уроке" />
        <Button colorTheme="red" text="Спасибо, всё понятно" />
      </div>
    </div>
  );
};

export default TeacherComment;
