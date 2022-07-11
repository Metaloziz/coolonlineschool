import { FC } from 'react';

import { SidebarNavItem } from '@components';
import cl from '@components/sidebar-nav/SidebarNav.module.scss';
import { Routes } from '@constants/Routes';
import useComponentVisible from '@HOC/drop-down-hook/DropDownHook';
import cn from 'classnames';

import styles from './DropDownMenu.module.scss';

interface Props {
  active: boolean;
  onClose: () => void;
}

const DropDownMenu: FC<Props> = ({ active, onClose }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(
    true,
    'burger',
    onClose,
    true,
  );
  const { Index, Payment, Results, Achievements, Contacts, Games, Schedule } = Routes;
  const links = [
    { label: 'Главная', href: Index, svgId: 'home' },
    {
      label: 'Расписание занятий',
      href: Schedule,
      svgId: 'schedule',
    },
    {
      label: 'Ваши достижения',
      href: Achievements,
      svgId: 'achievements',
    },
    { label: 'Ваши результаты', href: Results, svgId: 'results' },
    { label: 'Игры', href: Games, svgId: 'games' },
    {
      label: 'Личные данные',
      href: Contacts,
      svgId: 'personalData',
    },
    { label: 'Оплата', href: Payment, svgId: 'payment' },
  ] as const;
  return (
    <aside className={cn(styles.dropDownMenu, active && styles.showDropDown)} ref={ref}>
      {isComponentVisible && (
        <nav>
          {links.map(link => (
            <SidebarNavItem
              svgId={link.svgId}
              key={link.svgId}
              link={link}
              wrapperClassName={cl.linkWrapper}
              imageClassName={cl.linkImage}
              className={cl.link}
            />
          ))}
        </nav>
      )}

      <a href="https://sitetopic.ru" target="_blank" className={cl.anchor} rel="noreferrer">
        Разработка сайта - компания <span>“Sitetopic”</span>
      </a>
    </aside>
  );
};

export default DropDownMenu;
