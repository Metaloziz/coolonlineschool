import React, { FC, useState } from 'react';

import settings from '@svgs/settings.svg';
import Image from 'next/image';

import styles from './Settings.module.scss';

type Props = {
  onClick?: () => void;
};

const Settings: FC<Props> = props => {
  const { onClick } = props;
  const [isShowHover, setShowHover] = useState(false);

  return (
    <div
      className={styles.settings}
      onMouseOver={() => setShowHover(true)}
      onMouseOut={() => setShowHover(false)}
      onClick={onClick}
    >
      <Image src={settings} alt="setting" width="30" height="30" className={styles.img} />
    </div>
  );
};

export default Settings;
