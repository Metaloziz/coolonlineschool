import { FC } from 'react';

import { SidebarNavItem } from '@components';
import { useMenu } from '@hooks';

import cl from './SidebarNav.module.scss';

const SidebarNav: FC = () => {
  const links = useMenu();

  return (
    <aside className={cl.sidebar}>
      <nav>
        {links.map(link => (
          <SidebarNavItem
            svgId={link.svgId}
            key={link.label}
            link={link}
            wrapperClassName={cl.linkWrapper}
            imageClassName={cl.linkImage}
            className={cl.link}
          />
        ))}
      </nav>

      <a href="https://sitetopic.ru" target="_blank" className={cl.anchor} rel="noreferrer">
        Разработка сайта - компания <span>“Sitetopic”</span>
      </a>
    </aside>
  );
};

export default SidebarNav;
