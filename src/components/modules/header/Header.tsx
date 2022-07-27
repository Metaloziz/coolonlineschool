import { useState, FC } from 'react';

import { Account, Logo } from '@components';
import Burger from '@components/elements/burger/Burger';
import DropDownMenu from '@components/elements/drop-down-menu/DropDownMenu';
import classNames from 'classnames';

import cl from './Header.module.scss';

type Props = { className: string };

const Header: FC<Props> = ({ className }) => {
  const [active, setActive] = useState<boolean>(false);
  const [isOpen] = useState(false);
  const handleClose = () => {
    setActive(false);
  };
  return (
    <header className={classNames(cl.header, className)}>
      <div className={cl.accountBlock}>
        <div className={cl.burgerBlock} onClick={() => setActive(!active)}>
          <Burger />
        </div>
        <Logo />
      </div>
      <Account />
      <DropDownMenu active={active} onClose={handleClose} />
    </header>
  );
};

export default Header;
