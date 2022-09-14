import { ReactElement, useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { auth, Roles } from '@app/store';
import { Button } from '@components';

import style from './TempLogin.module.scss';

const ROLES = {
  student: '79608008080',
  teacher: '79606006060',
  // admin: '79601001010',
  admin: '79099999999', // todo for dev Andrew branch
};

const TempLogin = (): ReactElement => {
  const [iphone, setIphone] = useState('79601001010');

  const onLoginClick = async () => {
    await auth.login(7777, iphone);
  };

  return (
    <div className={style.wrap}>
      <h2>Временный вход</h2>
      <div className={style.box}>
        <Button
          className={style.button}
          onClick={() => {
            setIphone(ROLES[Roles.Student]);
          }}
        >
          Ученик
        </Button>
        <Button
          className={style.button}
          onClick={() => {
            setIphone(ROLES[Roles.Teacher]);
          }}
        >
          Учитель
        </Button>
        <Button
          className={style.button}
          onClick={() => {
            setIphone(ROLES[Roles.Admin]);
          }}
        >
          Администратор
        </Button>
      </div>
      <div>
        <Button
          onClick={onLoginClick}
          colorTheme={ButtonColorThemes.red}
          type="button"
          className={style.button}
        >
          login
        </Button>
      </div>
    </div>
  );
};

export default TempLogin;
