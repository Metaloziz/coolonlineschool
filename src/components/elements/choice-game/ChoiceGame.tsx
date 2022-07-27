import { FC } from 'react';

import { Button } from '@components';
import BackButton from '@components/elements/backButton/BackButton';
import InformationItem from '@components/elements/information-item/InformationItem';
import Step from '@components/elements/step/Step';
import { group, months, template, year } from '@mock/moks-data/moks-data-choice-game';
import styles from 'src/components/elements/choice-game/ChoiceGame.module.scss';

const ChoiceGame: FC = () => (
  <div className={styles.container}>
    <div className={styles.backSelect}>
      <BackButton />
      <div className={styles.wrapperInfo}>
        <InformationItem
          size="normal"
          title=""
          variant="select"
          option={template}
          placeholder="Шаблон"
        />
        <InformationItem size="normal" title="" variant="select" option={year} placeholder="Год" />
        <InformationItem
          size="normal"
          title=""
          variant="select"
          option={months}
          placeholder="Месяц"
        />
        <InformationItem
          size="normal"
          title=""
          variant="select"
          option={group}
          placeholder="Группа"
        />
      </div>
    </div>
    <div className={styles.innerContainer}>
      <div className={styles.stepWrapper}>
        <p>Номер урока</p>
        <div>
          <Step countStep={4} />
        </div>
      </div>
      <div className={styles.wrapperBtn}>
        <Button className={styles.btnSettings}>Выбрать настройки</Button>
      </div>
    </div>
  </div>
);

export default ChoiceGame;
