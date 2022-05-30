import { FC } from 'react';
import { ButtonColorThemes } from '@app/enums/Enums';
import { Button } from '@components';
import { convertToString } from '@utils/Date';
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
        {convertToString(commentDate)}
      </p>
      <p className={cl.comment}>{comment}</p>
      <div className={cl.buttons}>
        <Button
          className={cl.btn}
          colorTheme={ButtonColorThemes.red}
          text="Есть вопросы, обсудить на уроке"
        />
        <Button
          className={cl.btn}
          colorTheme={ButtonColorThemes.red}
          text="Спасибо, всё понятно"
        />
      </div>
    </div>
  );
};

export default TeacherComment;
