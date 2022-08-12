import bad from '@svgs/404.svg';
import Image from 'next/image';

import cl from './404/404.module.scss';

const Custom404 = () => (
  <div className={cl.customInner}>
    <Image src={bad} width={641} height={565} alt="404" />
    <h3>Страница не найдена.</h3>
  </div>
);

export default Custom404;
