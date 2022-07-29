import { useState, FC } from 'react';

import { Account, Logo, Burger, DropDownMenu } from '@components/elements';
import classNames from 'classnames';

import cl from './Header.module.scss';

type Props = {
  className: string;
  isActiveMenuBurger: boolean;
};

const Header: FC<Props> = ({ className, isActiveMenuBurger }) => {
  const [active, setActive] = useState<boolean>(false);

  const handleClose = () => {
    setActive(false);
  };

  return (
    <header className={classNames(cl.header, className)}>
      <div className={cl.accountBlock}>
        {!isActiveMenuBurger ? null : (
          <>
            <div className={cl.burgerBlock} onClick={() => setActive(!active)}>
              <Burger />
            </div>
            <DropDownMenu active={active} onClose={handleClose} />
          </>
        )}
        <Logo />
      </div>
      <Account />
    </header>
  );
};

export default Header;
