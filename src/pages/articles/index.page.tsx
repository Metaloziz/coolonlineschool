import { ButtonColorThemes } from '@app/enums/Enums';
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

const IndexPage = () => {
  return (
    <div className={styles.innerContent}>
      <div className={styles.buttonsTop}>
        <Button
          className={styles.buttonAdd}
          text="Добавить"
          colorTheme={ButtonColorThemes.blueGradient}
        />
        <p>
          <span>Тип</span>
        </p>
        <Slider
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
        <CustomSelect
          options={[{ label: 'ФИО автора', value: 'fio' }]}
          placeholder="ФИО автора"
        />
        <CustomSelect
          options={[{ label: 'Наименование статьи', value: 'articleName' }]}
          placeholder="Наименование статьи"
        />
        <Button
          type="submit"
          text="Найти"
          colorTheme={ButtonColorThemes.green}
          className={styles.search}
        />
      </div>
      <div className={styles.blockArticles}>
        {articlesInfo.map((item, index) => {
          return (
            <Article
              edit={item.edit}
              title={item.title}
              description={item.description}
              key={index}
            />
          );
        })}
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
};

export default IndexPage;
