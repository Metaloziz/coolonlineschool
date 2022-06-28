import { FC } from 'react';
import { ButtonColorThemes } from '@app/enums';
import { ITariffCard } from '@app/types';
import { Button, CloseModalButton, TariffCard, Slider } from '@components';
import { getRandomId } from '@utils/RandomId';
import cl from './TariffPlans.module.scss';

interface ITariffPlansItem extends ITariffCard {
  id: number;
}

interface ITariffsList {
  tariffPlans: ITariffPlansItem[];
  closeModal: () => void;
}

const TariffsList: FC<ITariffsList> = ({ tariffPlans, closeModal }) => {
  return (
    <div className={cl.container}>
      <CloseModalButton onClick={closeModal} />
      <b className={cl.title}>Тарифные планы</b>
      <div className={cl.tariffCards}>
        {tariffPlans.map(({ id, ...tariffPlansItem }) => (
          <TariffCard {...tariffPlansItem} key={id} />
        ))}
      </div>
      <div className={cl.bottom}>
        <Slider
          options={[
            {
              id: getRandomId(),
              text: 'Ментальная арифметика',
              isActive: true,
            },
            { id: getRandomId(), text: 'Скорочтение' },
          ]}
        />
        <Button colorTheme={ButtonColorThemes.red} className={cl.btn}>
          Сохранить
        </Button>
      </div>
    </div>
  );
};

export default TariffsList;
