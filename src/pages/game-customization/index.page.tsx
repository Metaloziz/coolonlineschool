import Image from 'next/image';
import { ButtonColorThemes } from '@app/enums';
import { Button, Slider } from '@components';
import goBack from '@svgs/go-back-img.svg';
import buttonAdd from '@svgs/settings-games-add.svg';
import { getRandomId } from '@utils/RandomId';
import styles from './GameСustomization.module.scss';

const IndexPage = () => {
  return (
    <div className={styles.innerContent}>
      <div className={styles.blockButtons}>
        <div className={styles.goBack}>
          <div className={styles.image}>
            <Image src={goBack} width={36} height={36} alt="goBack" />
          </div>
          <p>На предыдущую страницу</p>
        </div>
        <Slider
          size="long"
          className={styles.slider}
          options={[
            {
              text: 'Для младшей группы',
              isActive: true,
              id: getRandomId(),
            },
            {
              text: 'Скорочтение',
              id: getRandomId(),
            },
          ]}
        />
        <div className={styles.buttonAdd}>
          <Image src={buttonAdd} width={31} height={31} alt="goBack" />
        </div>
      </div>
      <div className={styles.pattern}>
        <div className={styles.patternNames}>
          <div className={styles.namePattern}>
            <h3>Наименование шаблона</h3>
            <div className={styles.namePatternText}>
              <input type="text" />
            </div>
          </div>
          <h3>Начисление баллов</h3>
        </div>
        <h3>Настройка уровней</h3>
        <div className={styles.levels}>
          <p className={styles.rangeLevels}>Уровней</p>
          <div className={styles.fromTo}>
            <p>От</p>
            <div className={styles.fromToText}>
              <input type="text" />
            </div>
          </div>
          <div className={styles.fromTo}>
            <p>До</p>
            <div className={styles.fromToText}>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className={styles.time}>
          <p>Время выполнения</p>
          <div className={styles.timeText}>
            <input type="text" />
          </div>
        </div>
      </div>
      <h3 className={styles.titleDescription}>Память и ритм</h3>
      <div className={styles.description}>{/* <TextEditor /> */}</div>
      <div className={styles.buttonSubmit}>
        <Button
          colorTheme={ButtonColorThemes.blueGradient}
          className={styles.button}
        >
          Сохранить
        </Button>
      </div>
    </div>
  );
};

export default IndexPage;
