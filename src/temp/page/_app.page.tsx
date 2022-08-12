// import { AuthGuard } from '@app/common/AuthGuard';
// import { UserAuth } from '@app/models/auth/UserAuth';
// import { Client } from '@app/models/user-home/Client';
// import { Guard, PageLoading } from '@components';
// import Layout from '@components/modules/layout/Layout';
// import '@styles/normalize.scss';
// import { AuthKey } from '@constants/Common';
// import { AppContext, stores } from '@contexts/AppContext';
// import AuthContext, { AuthContextValue } from '@contexts/AuthContext';
// import PageContext, { PageContextValue } from '@contexts/PageContext';
// import { useSocket } from '@contexts/SocketContext';
// import { checkUserAuthenticated } from '@utils/Auth';
// import { setCookie } from '@utils/Cookie';
// import { NextComponentType, NextPageContext } from 'next';
//
// import { FC, useEffect, useMemo, useState } from 'react';
//
// import { Manager } from 'socket.io-client';
//
// type AppProps<P = { auth?: UserAuth; profile?: Client | Manager }> = {
//   pageProps: P;
//   Component: NextComponentType<NextPageContext, any, P> & {
//     layout?: FC;
//     guard?: AuthGuard;
//   };
// } & Omit<NextAppProps<P>, 'pageProps'>;
//
// const App = ({ Component, pageProps }: AppProps) => {
//   const [auth, setAuth] = useState<UserAuth | undefined>(pageProps.auth);
//   const [profile, setProfile] = useState<Client | Manager | undefined>(pageProps.profile);
//
//   const setUserAuthenticated = (data: { auth: UserAuth; profile: Client | Manager }) => {
//     setCookie(AuthKey, data.auth.token, 24 * 60 * 60);
//     setAuth(data.auth);
//     setProfile(data.profile);
//   };
//   const clearUserAuthenticated = () => {
//     setCookie(AuthKey, '', -1);
//     setAuth(undefined);
//     setProfile(undefined);
//   };
//
//   const socket = useSocket(process.env.NEXT_PUBLIC_WS_URL ?? '', 'test');
//   useEffect(() => {
//     if (socket) {
//       socket.on('connect', () => {
//         console.log('Tracking channel is connected!');
//       });
//
//       socket.on('disconnect', () => {
//         console.log('Tracking channel is disconnected!');
//       });
//
//       socket.on('connect_error', (err: Error) => {
//         console.log('connect_error', err);
//       });
//     }
//   }, [socket]);
//
//   const authContextValue = useMemo<AuthContextValue>(
//     () => ({
//       auth,
//       profile,
//       setAuth,
//       setProfile,
//       setUserAuthenticated,
//       clearUserAuthenticated,
//     }),
//     [auth, profile, setAuth, setProfile, setUserAuthenticated, clearUserAuthenticated],
//   );
//   const pageContextValue = useMemo<PageContextValue>(() => ({}), []);
//
//   return (
//     <AppContext.Provider value={stores}>
//       <PageContext.Provider value={pageContextValue}>
//         <AuthContext.Provider value={authContextValue}>
//           <PageLoading />
//           <Guard guard={Component.guard}>
//             <Layout>
//               <Component {...pageProps} />
//             </Layout>
//           </Guard>
//         </AuthContext.Provider>
//       </PageContext.Provider>
//     </AppContext.Provider>
//   );
// };
//
// App.getInitialProps = async (appContext: NextAppContext) => {
//   // Server side render
//   const { isSsr } = appContext.router;
//   if (isSsr) {
//     const pageProps = await checkUserAuthenticated(appContext.ctx);
//     return { pageProps };
//   }
//   return { pageProps: {} };
// };
//
// export default App;
export {};
