import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './SidebarNavigationItem.module.scss';

interface Props {
  link: { label: string; href: string };
  className?: string;
  wrapperClassName?: string;
  activeClassName?: string;
  imageClassName?: string;
  svgId: string;
}

const NavigationLink: FC<Props> = ({
  link,
  className,
  wrapperClassName,
  imageClassName,
  activeClassName,
  svgId,
}) => {
  const router = useRouter();
  const { label, href } = link;
  const isActive = router.asPath === href;

  const linkClassNames = classNames(className, isActive && activeClassName);
  return (
    <div className={wrapperClassName}>
      <Link passHref href={href}>
        <button className={linkClassNames}>
          <div className={imageClassName}>
            <svg className={styles.icon}>
              <use xlinkHref={`#${svgId}`}></use>
            </svg>
          </div>
          {label}
        </button>
      </Link>
    </div>
  );
};

export default NavigationLink;
