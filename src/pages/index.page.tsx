import Head from 'next/head';
import { useEffect } from 'react';
import { ProgressBarColorThemes } from '@app/enums/Enums';
import CardStudent from '@containers/card-student/CardStudent';
import Homeworks from '@containers/homeworks/Homeworks';
import KeepPlaying from '@containers/keep-playing/KeepPlaying';
import SelectHomeworksForm from '@containers/select-homeworks-form/SelectHomeworksForm';
import TeacherComment from '@containers/teacher-comment/TeacherComment';
import { useAuthContext } from '@contexts/AuthContext';
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

  const { red, blue, green, violet, yellow, yellowLight } =
    ProgressBarColorThemes;

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CardStudent
          options={{
            studentName: 'Днепровский Александр Алексеевич',
            status: 'Новичок',
            geo: 'Москва',
            pointsNumber: 4,
            tag: 837212,
            chatsLinks: { telegramLink: './', whatsappLink: './' },
            nextLessonData: '01.02.2021 в 18:00',
          }}
        />
        <KeepPlaying
          className={styles.keepPlaying}
          games={[
            {
              title: 'Общий показатель',
              percentToComplete: 50,
              colorTheme: red,
              id: +new Date().toDateString(),
            },
            {
              title: 'Память и ритм',
              percentToComplete: 18,
              colorTheme: blue,
              id: +new Date().toDateString(),
            },
            {
              title: 'Число - фигура - слово',
              percentToComplete: 36,
              colorTheme: yellowLight,
              id: +new Date().toDateString(),
            },
            {
              title: 'Мухи в кубе',
              percentToComplete: 70,
              colorTheme: violet,
              id: +new Date().toDateString(),
            },
            {
              title: 'Антипазл',
              percentToComplete: 80,
              colorTheme: green,
              id: +new Date().toDateString(),
            },
            {
              title: 'Антипазл',
              percentToComplete: 99,
              colorTheme: yellow,
              id: +new Date().toDateString(),
            },
          ]}
        />
        <SelectHomeworksForm
          lessonNumbers={[1, 2, 3]}
          months={[1, 2, 3]}
          years={[2022, 2021, 2020]}
        />
        <Homeworks
          homeworks={[
            {
              gameTitle: 'Память и ритм',
              id: +new Date().toDateString(),
              description: {
                needToDo: '',
                minutesLeft: 10,
                tips: [
                  {
                    text: '1',
                    id: +new Date().toDateString(),
                  },
                  {
                    text: '2',
                    id: +new Date().toDateString(),
                  },
                  {
                    text: '3',
                    id: +new Date().toDateString(),
                  },
                ],
              },
            },
            {
              gameTitle: 'Число - фигура - слово',
              id: +new Date().toDateString(),
              description: {
                needToDo: 'Присесть 1070 раз и сделать 1200 отжиманий',
                minutesLeft: 120,
                tips: [
                  {
                    text: 'test',
                    id: +new Date().toDateString(),
                  },
                  {
                    text: 'test2',
                    id: +new Date().toDateString(),
                  },
                  {
                    text: 'test3',
                    id: +new Date().toDateString(),
                  },
                ],
              },
            },
          ]}
        />
        <TeacherComment
          comment="Значимость этих проблем настолько очевидна, что разбавленное изрядной долей эмпатии,   мышление в значительной степени обусловливает важность соответствующих условий активизации. Ясность нашей позиции очевидна: глубокий уровень погружения является качественно..."
          commentDate="7 октября 2021"
        />
      </main>
    </div>
  );
}
