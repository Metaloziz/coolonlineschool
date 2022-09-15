import { FC } from 'react';

import { SidebarNavItem } from '@components';
import cl from '@components/modules/sidebar-nav/SidebarNav.module.scss';
import useComponentVisible from '@HOC/drop-down-hook/DropDownHook';
import { useMenu } from '@hooks';
import cn from 'classnames';
import styles from 'src/components/elements/drop-down-menu/DropDownMenu.module.scss';

interface Props {
  active: boolean;
  onClose: () => void;
}

const DropDownMenu: FC<Props> = ({ active, onClose }) => {
  const { ref, isComponentVisible } = useComponentVisible(true, 'burger', onClose, true);

  const links = useMenu();

  return (
    <>
      {active && <div className={styles.overlay} onClick={onClose} />}
      <aside className={cn(styles.dropDownMenu, active && styles.showDropDown)} ref={ref}>
        {isComponentVisible && (
          <nav>
            {links.map(link => (
              <SidebarNavItem
                onClose={onClose}
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
    </>
  );
};

export default DropDownMenu;
