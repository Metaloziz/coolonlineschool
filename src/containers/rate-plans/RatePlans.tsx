import { FC } from 'react';
import { ButtonColorThemes } from '@app/enums/Enums';
import { IRateCard } from '@app/types';
import { Button, CloseModalButton, RateCard, Slider } from '@components';
import { getRandomId } from '@utils/RandomId';
import cl from './RatePlans.module.scss';

interface IRatePlansItem extends IRateCard {
  id: number;
}

interface IRatesList {
  ratePlans: IRatePlansItem[];
  closeModal: () => void;
}

const RatesList: FC<IRatesList> = ({ ratePlans, closeModal }) => {
  return (
    <div className={cl.container}>
      <CloseModalButton onClick={closeModal} />
      <b className={cl.title}>Тарифные планы</b>
      <div className={cl.rateCards}>
        {ratePlans.map(({ id, ...ratePlansItem }) => (
          <RateCard {...ratePlansItem} key={id} />
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
        <Button
          text="Сохранить"
          colorTheme={ButtonColorThemes.red}
          className={cl.btn}
        />
      </div>
    </div>
  );
};

export default RatesList;
