import { useState, FC } from 'react';

import { Account, Logo, Burger, DropDownMenu } from '@components/elements';
import classNames from 'classnames';

import cl from './Header.module.scss';

type Props = {
  className: string;
  isActiveMenuBurger: boolean;
};

const Header: FC<Props> = ({ className, isActiveMenuBurger }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <header className={classNames(cl.header, className)}>
      <div className={cl.accountBlock}>
        {!isActiveMenuBurger ? null : (
          <>
            <div className={cl.burgerBlock} onClick={() => setIsActive(!isActive)}>
              <Burger />
            </div>
            <DropDownMenu active={isActive} onClose={handleClose} />
          </>
        )}
        <Logo />
      </div>
      <Account />
    </header>
  );
};

export default Header;
