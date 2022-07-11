import { useState, FC } from 'react';

import Account from '@components/account/Account';
import Burger from '@components/burger/Burger';
import DropDownMenu from '@components/drop-down-menu/DropDownMenu';
import Logo from '@components/logo/Logo';
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
    <header
      className={classNames(cl.header, className, {
        [cl.open]: isOpen,
      })}
    >
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
