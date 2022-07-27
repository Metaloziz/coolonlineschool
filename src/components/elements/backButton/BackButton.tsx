import { FC } from 'react';

import goBack from '@svgs/go-back-img.svg';
import cn from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from 'src/components/elements/backButton/BackButton.module.scss';

interface Props {
  className?: string;
}

const BackButton: FC<Props> = ({ className }) => {
  const router = useRouter();
  return (
    <div className={cn(styles.backButton, className)}>
      <button type="button" onClick={() => router.back()}>
        <span>
          <Image src={goBack} width={36} height={36} alt="goBack" />
        </span>
        <p>На предыдущую страницу</p>
      </button>
    </div>
  );
};

export default BackButton;
