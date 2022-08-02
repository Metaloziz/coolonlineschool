import { useEffect } from 'react';

import { appStore, Roles, auth } from '@app/store';
import { Layout } from '@components/modules/';
import { Routes } from '@constants/Routes';
import '@styles/normalize.scss';
import { observer } from 'mobx-react-lite';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

const App = observer(({ Component, pageProps }: AppProps) => {
  const { me, isLogin, loadMe } = auth;
  const { isInitialize } = appStore;
  const { push, asPath } = useRouter();
  const { Login, Index } = Routes;

  useEffect(() => {
    me();
  }, []);

  useEffect(() => {
    if (!isLogin && isInitialize) {
      push(Login);
    }
    if (asPath === Login && loadMe.role !== Roles.Unauthorized) {
      push(Index);
    }
  }, [isLogin, isInitialize]);

  if (!isInitialize || (!isLogin && asPath !== Login) || (isLogin && asPath === Login)) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
});

export default App;
