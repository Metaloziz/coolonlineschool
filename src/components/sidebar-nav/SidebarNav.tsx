import { FC } from 'react';
import { SidebarNavItem } from '@components';
import { Routes } from '@constants/Routes';
import cl from './SidebarNav.module.scss';

const SidebarNav: FC = () => {
  const { Index, Payment, Results, Achievements, Contacts, Games } = Routes;
  const links = [
    { label: 'Главная', href: Index, svgId: 'home' },
    {
      label: 'Расписание занятий',
      href: Index,
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
    <aside className={cl.sidebar}>
      <nav>
        {links.map((link) => (
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

      <a
        href="https://sitetopic.ru"
        target="_blank"
        className={cl.anchor}
        rel="noreferrer"
      >
        Разработка сайта - компания <span>“Sitetopic”</span>
      </a>
    </aside>
  );
};

export default SidebarNav;
