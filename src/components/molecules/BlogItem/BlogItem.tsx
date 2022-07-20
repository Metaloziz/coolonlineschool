import { FC } from 'react';

import { IconVariants } from '@app/enums';
import { Button, IconButton } from '@components';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';

import styles from './BlogItem.module.scss';

interface Props {
  title: string;
  imgSrc?: string;
  text: string;
  id?: string | number;
}

const BlogItem: FC<Props> = observer(props => {
  const { title, imgSrc = '', text, id } = props;
  return (
    <div className={styles.containerItem}>
      <div className={styles.wrapperTeacherImg}>
        <Image src={imgSrc} width="300px" height="300px" alt="Book" />
      </div>
      <div className={styles.itemText}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={styles.buttonTest}>
          <div className={styles.containerButton}>
            <div className={styles.arrowImg}>
              <IconButton
                iconAttrs={{
                  width: 22,
                  height: 13,
                  fill: '#743ADC',
                  icon: IconVariants.arrow,
                }}
              />
            </div>
            <Button className={styles.btnTheory}>Прочитать теорию</Button>
          </div>
          <div className={cn(styles.containerButton, styles.testBtn)}>
            <div className={styles.arrowImg}>
              <IconButton
                iconAttrs={{
                  width: 22,
                  height: 13,
                  fill: '#743ADC',
                  icon: IconVariants.arrowTest,
                }}
              />
            </div>
            <Button className={styles.btnTest}>Пройти тест</Button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default BlogItem;
