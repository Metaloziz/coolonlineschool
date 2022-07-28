import { FC, useState } from 'react';

import { ButtonColorThemes } from '@app/enums';
import { ITariffCard } from '@app/types';
import { Button, CloseModalButton, TariffCard, Slider } from '@components';
import { getRandomId } from '@utils/RandomId';
import cn from 'classnames';

import cl from './TariffPlans.module.scss';

interface ITariffPlansItem extends ITariffCard {
  id: number;
}

interface ITariffsList {
  tariffPlans: ITariffPlansItem[];
  className?: string;
  isRender?: boolean;
}

const TariffsList: FC<ITariffsList> = ({ isRender, tariffPlans, className }) => {
  const [isReady, setIsReady] = useState<number>(1);

  const updateStatus = (id: number) => {
    setIsReady(id);
  };

  return (
    <div className={cn(cl.container, className)}>
      {isRender && <b className={cl.title}>Тарифные планы</b>}
      <div className={cl.tariffCards}>
        {tariffPlans.map(({ id, ...tariffPlansItem }) => (
          <TariffCard {...tariffPlansItem} key={id} />
        ))}
      </div>
      {isRender && (
        <div className={cl.bottom}>
          <Slider
            className={cl.innerSlider}
            options={[
              { id: 1, text: 'Ментальная арифметика', onClick: updateStatus },
              { id: 2, text: 'Скорочтение', onClick: updateStatus },
            ]}
          />
          <Button colorTheme={ButtonColorThemes.red} className={cl.btn}>
            Сохранить
          </Button>
        </div>
      )}
    </div>
  );
};

export default TariffsList;
