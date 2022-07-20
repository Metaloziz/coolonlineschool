import { ButtonColorThemes } from '@app/enums';
import { Button, Slider, CustomSelect } from '@components';
import CustomPagination from '@components/custom-pagination/CustomPagination';
import Article from '@pages/articles/Article';
import { getRandomId } from '@utils/RandomId';

import styles from './Articles.module.scss';

const articlesInfo = [
  {
    edit: true,
    title: 'Статья 1',
    description:
      'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений. ',
  },
  {
    edit: false,
    title: 'Статья 2',
    description:
      'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений.',
  },
  {
    edit: true,
    title: 'Статья 3',
    description:
      'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений.',
  },
  {
    edit: false,
    title: 'Статья 4',
    description:
      'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений.',
  },
];

const IndexPage = () => (
  <div className={styles.innerContent}>
    <div className={styles.buttonsTop}>
      <div className={styles.leftBlock}>
        <Button className={styles.buttonAdd} colorTheme={ButtonColorThemes.blueGradient}>
          Добавить
        </Button>
        <p>
          <span>Тип</span>
        </p>
        <Slider
          className={styles.sliderBlock}
          size="long"
          options={[
            {
              text: 'Статья для учителя',
              isActive: true,
              id: getRandomId(),
            },
            {
              text: 'Урок для ученика',
              id: getRandomId(),
            },
          ]}
        />
      </div>
      <div className={styles.rightBlock}>
        <CustomSelect
          options={[{ label: 'ФИО автора', value: 'fio' }]}
          placeholder="ФИО автора"
          className={styles.selectBlock}
        />
        <CustomSelect
          options={[{ label: 'Наименование статьи', value: 'articleName' }]}
          placeholder="Наименование статьи"
          className={styles.selectBlock}
        />
        <Button type="submit" colorTheme={ButtonColorThemes.green} className={styles.search}>
          Найти
        </Button>
      </div>
    </div>
    <div className={styles.blockArticles}>
      {articlesInfo.map(({ edit, title, description }) => (
        <Article edit={edit} title={title} description={description} key={title} />
      ))}
    </div>
    <div className={styles.pagination}>
      <CustomPagination
        paginate={() => true}
        count={1}
        next={() => true}
        prev={() => true}
        total={5}
      />
    </div>
  </div>
);

export default IndexPage;
