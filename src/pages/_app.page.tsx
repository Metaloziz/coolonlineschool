import { Layout } from '@components/modules/';
import '@styles/normalize.scss';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
