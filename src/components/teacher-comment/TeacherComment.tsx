import { FC } from 'react';
import { ButtonColorThemes } from '@app/enums';
import { Button } from '@components';
import { convertToDateString } from '@utils/Date';
import cl from './TeacherComment.module.scss';

interface ITeacherComment {
  className?: string;
  commentDate: Date;
  comment: string;
}

const TeacherComment: FC<ITeacherComment> = ({ comment, commentDate }) => {
  return (
    <div className={cl.container}>
      <p className={cl.title}>
        Комментарий учителя к домашенму заданию на{' '}
        {convertToDateString(commentDate, {
          dateStyle: 'long',
        })}
      </p>
      <p className={cl.comment}>{comment}</p>
      <div className={cl.buttons}>
        <Button className={cl.btn} colorTheme={ButtonColorThemes.red}>
          Есть вопросы, обсудить на уроке
        </Button>
        <Button className={cl.btn} colorTheme={ButtonColorThemes.red}>
          Спасибо, всё понятно
        </Button>
      </div>
    </div>
  );
};

export default TeacherComment;
