import Image from 'next/image';
import { Button } from '@components';
import btnEditImage from '@svgs/icons/edit.svg';
import styles from './Articles.module.scss';

type Props = {
  edit: boolean;
  title: string;
  description: string;
};

const Article = ({ edit, title, description }: Props) => {
  return (
    <div className={styles.article}>
      <div className={styles.heading}>
        <h3>{title}</h3>
        {edit && (
          <Image
            className={styles.image}
            src={btnEditImage}
            width={22}
            height={23}
            alt="edit"
          />
        )}
      </div>
      <div className={styles.content}>
        <p>{description}</p>
      </div>
      <div className={styles.button}>
        <Button className={styles.buttonRead}>Читать</Button>
      </div>
    </div>
  );
};

export default Article;
