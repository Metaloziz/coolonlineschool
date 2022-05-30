import Head from 'next/head';
import { useEffect } from 'react';
import { ProgressBarColorThemes } from '@app/enums/Enums';
import {
  StudentCard,
  KeepPlaying,
  SelectHomeworksForm,
  Homeworks,
  TeacherComment,
} from '@containers';
import { useAuthContext } from '@contexts/AuthContext';
import { getProfile } from '@utils/Auth';
import { getRandomId } from '@utils/RandomId';
import cl from './Home.module.scss';

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
    <div className={cl.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={cl.main}>
        <StudentCard
          options={{
            studentName: 'Днепровский Александр Алексеевич',
            status: 'Новичок',
            geo: 'Москва',
            pointsNumber: 4,
            tag: 837212,
            chatsLinks: { telegramLink: './', whatsappLink: './' },
            nextLessonData: new Date(),
          }}
        />
        <KeepPlaying
          className={cl.keepPlaying}
          games={[
            {
              title: 'Общий показатель',
              percentToComplete: 50,
              colorTheme: ProgressBarColorThemes.red,
              id: getRandomId(),
            },
            {
              title: 'Память и ритм',
              percentToComplete: 18,
              colorTheme: ProgressBarColorThemes.blue,
              id: getRandomId(),
            },
            {
              title: 'Число - фигура - слово',
              percentToComplete: 36,
              colorTheme: ProgressBarColorThemes.yellowLight,
              id: getRandomId(),
            },
            {
              title: 'Мухи в кубе',
              percentToComplete: 70,
              colorTheme: ProgressBarColorThemes.violet,
              id: getRandomId(),
            },
            {
              title: 'Антипазл',
              percentToComplete: 80,
              colorTheme: ProgressBarColorThemes.green,
              id: getRandomId(),
            },
            {
              title: 'Антипазл',
              percentToComplete: 99,
              colorTheme: ProgressBarColorThemes.yellow,
              id: getRandomId(),
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
              id: getRandomId(),
              description: {
                needToDo: '',
                minutesLeft: 10,
                tips: [
                  {
                    text: '1',
                    id: getRandomId(),
                  },
                  {
                    text: '2',
                    id: getRandomId(),
                  },
                  {
                    text: '3',
                    id: getRandomId(),
                  },
                ],
              },
            },
            {
              gameTitle: 'Число - фигура - слово',
              id: getRandomId(),
              description: {
                needToDo: 'Присесть 1070 раз и сделать 1200 отжиманий',
                minutesLeft: 120,
                tips: [
                  {
                    text: 'test',
                    id: getRandomId(),
                  },
                  {
                    text: 'test2',
                    id: getRandomId(),
                  },
                  {
                    text: 'test3',
                    id: getRandomId(),
                  },
                ],
              },
            },
          ]}
        />
        <TeacherComment
          commentDate={new Date()}
          comment="Значимость этих проблем настолько очевидна, что разбавленное изрядной долей эмпатии,   мышление в значительной степени обусловливает важность соответствующих условий активизации. Ясность нашей позиции очевидна: глубокий уровень погружения является качественно..."
        />
      </main>
    </div>
  );
}
