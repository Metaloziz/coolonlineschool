import { FC } from 'react';

import { SidebarNavSvg } from '@components/elements/svg';
import { files } from '@components/elements/svg/SidebarNavSvg';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  link: { label: string; href: string };
  className?: string;
  wrapperClassName?: string;
  activeClassName?: string;
  imageClassName?: string;
  svgId: keyof typeof files;
}

const SidebarNavItem: FC<Props> = ({
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
        <button type="button" className={linkClassNames}>
          <div className={imageClassName}>
            <SidebarNavSvg icon={svgId} />
          </div>
          {label}
        </button>
      </Link>
    </div>
  );
};

export default SidebarNavItem;
