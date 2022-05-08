import Head from 'next/head';
import { useEffect } from 'react';
import {
  CardStudent,
  KeepPlaying,
  SelectHomeworksForm,
  Homeworks,
  TeacherComment,
} from '@containers';
import { useAuthContext } from '@contexts/AuthContext';
import { homePageRendering } from '@mock/rendering-pages';
import { getProfile } from '@utils/Auth';
import styles from './Home.module.scss';

export default function Home() {
  const { auth } = useAuthContext();

  useEffect(() => {
    // Test
    async function test() {
      let profile;
      if (auth) {
        profile = await getProfile(auth.token, auth.roleId);
      }
      console.log('test', profile);
    }

    test();
  }, [auth]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CardStudent {...homePageRendering.cardStudent} />
        <KeepPlaying
          className={styles.keepPlaying}
          {...homePageRendering.keepPlaying}
        />
        <SelectHomeworksForm {...homePageRendering.selectHomeworksForm} />
        <Homeworks {...homePageRendering.homeworks} />
        <TeacherComment {...homePageRendering.teacherComment} />
      </main>
    </div>
  );
}
