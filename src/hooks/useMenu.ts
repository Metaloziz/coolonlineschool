import { appStore } from '@app/store';
import { files } from '@components/elements/svg/SidebarNavSvg';
import { Routes } from '@constants/Routes';

type ItemMenuType = {
  label: string;
  href: string;
  svgId: keyof typeof files;
};

export const useMenu = () => {
  const {
    Index,
    Payment,
    Statistics,
    Achievements,
    PersonalData,
    Games,
    Schedule,
    Report,
    ReportTeacher,
    Rate,
    Settings,
    Class,
    Blogs,
  } = Routes;

  const { role } = appStore;

  const linksAdmin: ItemMenuType[] = [
    { label: 'Главная', href: Index, svgId: 'home' },
    {
      label: 'Расписание занятий',
      href: Schedule,
      svgId: 'schedule',
    },
    {
      label: 'Отчет',
      href: Report,
      svgId: 'report',
    },
    {
      label: 'Отчет учетеля',
      href: ReportTeacher,
      svgId: 'teacherReport',
    },
    {
      label: 'Группы',
      href: Class,
      svgId: 'groups',
    },
    {
      label: 'Статьи',
      href: Blogs,
      svgId: 'articles',
    },
    { label: 'Ваши результаты', href: Statistics, svgId: 'results' },
    { label: 'Игры', href: Games, svgId: 'games' },
    {
      label: 'Личные данные',
      href: PersonalData,
      svgId: 'personalData',
    },
    {
      label: 'Настройки',
      href: Settings,
      svgId: 'settingIcon',
    },
    { label: 'Тарифы', href: Rate, svgId: 'rate' },
  ];

  const linksTeacher: ItemMenuType[] = [
    { label: 'Главная', href: Index, svgId: 'home' },
    {
      label: 'Расписание занятий',
      href: Schedule,
      svgId: 'schedule',
    },
    {
      label: 'Группы',
      href: Class,
      svgId: 'groups',
    },
    {
      label: 'Статьи',
      href: Blogs,
      svgId: 'articles',
    },
    { label: 'Ваши результаты', href: Statistics, svgId: 'results' },
    { label: 'Игры', href: Games, svgId: 'games' },
    {
      label: 'Личные данные',
      href: PersonalData,
      svgId: 'personalData',
    },
  ];

  const linksTStudents: ItemMenuType[] = [
    { label: 'Главная', href: Index, svgId: 'home' },
    {
      label: 'Расписание занятий',
      href: Schedule,
      svgId: 'schedule',
    },
    {
      label: 'Статьи',
      href: Blogs,
      svgId: 'articles',
    },
    {
      label: 'Ваши достижения',
      href: Achievements,
      svgId: 'achievements',
    },
    { label: 'Ваши результаты', href: Statistics, svgId: 'results' },
    { label: 'Игры', href: Games, svgId: 'games' },
    {
      label: 'Личные данные',
      href: PersonalData,
      svgId: 'personalData',
    },
    { label: 'Оплата', href: Payment, svgId: 'payment' },
  ];

  const links: { [key: string]: ItemMenuType[] } = {
    student: linksTStudents,
    teacher: linksTeacher,
    admin: linksAdmin,
    unauthorized: [],
  };

  return links[role];
};
