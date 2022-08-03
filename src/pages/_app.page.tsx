import { Layout } from '@components/modules/';
import '@styles/normalize.scss';
import { configure } from 'mobx';
import type { AppProps } from 'next/app';

// configure({
//   reactionScheduler: f => {
//     setTimeout(f);
//   },
// });

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
