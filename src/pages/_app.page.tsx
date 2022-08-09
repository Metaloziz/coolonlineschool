import { useEffect } from 'react';

import { appStore, Roles, auth } from '@app/store';
import { Layout } from '@components/modules/';
import { Routes } from '@constants/Routes';
import '@styles/normalize.scss';
import { observer } from 'mobx-react-lite';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

const App = observer(({ Component, pageProps }: AppProps) => {
  const { getMe, isLogin, me } = auth;
  const { isInitialize } = appStore;
  const { push, asPath } = useRouter();
  const { Login, Index, Registration } = Routes;

  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    if (!isLogin && isInitialize) {
      push(Login);
    }
    if ((asPath === Login || asPath === Registration) && me.roleCode !== Roles.Unauthorized) {
      push(Index);
    }
  }, [isLogin, isInitialize]);

  if (!isInitialize || (!isLogin && asPath !== Login && asPath !== Registration)) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
});

export default App;
