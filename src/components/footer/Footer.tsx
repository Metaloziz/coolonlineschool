import { FC } from 'react';
import styles from './Footer.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const Footer: FC<Props> = ({}) => {
  const copyright = `© NextJS ${new Date().getFullYear()}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>{copyright}</div>

      <nav></nav>
    </footer>
  );
};

export default Footer;
