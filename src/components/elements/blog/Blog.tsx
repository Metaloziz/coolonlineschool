import { Button } from '@components';
import { Routes } from '@constants/Routes';
import btnEditImage from '@svgs/icons/edit.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './Blog.module.scss';

type Props = {
  edit: boolean;
  title: string;
  description: string;
};

const Blog = ({ edit, title, description }: Props) => {
  const { push } = useRouter();
  const { BlogId } = Routes;

  const onReadClick = () => {
    push({
      pathname: BlogId,
      query: { blogId: title },
    });
  };

  return (
    <div className={styles.article}>
      <div className={styles.heading}>
        <h3>{title}</h3>
        {edit && (
          <Image className={styles.image} src={btnEditImage} width={22} height={23} alt="edit" />
        )}
      </div>
      <div className={styles.content}>
        <p>{description}</p>
      </div>
      <div className={styles.button}>
        <Button onClick={onReadClick} type="button" className={styles.buttonRead}>
          Читать
        </Button>
      </div>
    </div>
  );
};

export default Blog;
