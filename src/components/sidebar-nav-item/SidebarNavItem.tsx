import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { SidebarNavSvg } from '@components/svg';
import { files } from '@components/svg/SidebarNavSvg';

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
        <button className={linkClassNames}>
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
