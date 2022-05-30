import { FC } from 'react';
import { RatePlans } from '@app/enums/Enums';
import { getRandomId } from '@utils/RandomId';
import { getRatePlanRus } from '@utils/RatePlans';

type Props = {
  ratePlan: RatePlans;
  className?: string;
  isExtraOption?: boolean;
  extraOptionClassName?: string;
};

const RatePlanOptions: FC<Props> = ({
  ratePlan,
  className,
  extraOptionClassName,
  isExtraOption = false,
}) => {
  const { introductory, independent, advanced, personal } = RatePlans;

  const options: string[] = [];
  const includedRatePlan: typeof independent | typeof advanced | null =
    isExtraOption
      ? ratePlan === advanced
        ? independent
        : ratePlan === personal
        ? advanced
        : null
      : null;

  switch (ratePlan) {
    case introductory:
      options.push(
        '6 видеоуроков “Разбор заданий”',
        'личный кабинет на сайте',
        'интерактивные тренажёры',
        'малое учебное пособие с возможностью самостоятельной печати',
        'доступ к платформе на 3 месяца',
      );
      break;
    case independent:
      options.push(
        '10 видеоуроков “Разбор заданий”',
        '3 бонусных видеоурока по развитию мелкой моторики рук',
        'личный кабинет на сайте',
        'полный учебный комплект',
        'интерактивные тренажёры',
        'техническая поддержка',
        'обратная связь на платформе',
        'диплом о прохождении курса',
        'дневник успеха',
        'доступ к платформе на 3 месяца',
      );
      break;
    case advanced:
      options.push(
        '8 часов в месяц групповых занятий (35 человек) с педагогом и своевременная корекция действий',
        'участие в олимпиадах',
        'доступ к платформе без ограничений на момент обучения',
      );
      break;
    case personal:
      options.push(
        '8 часов в месяц индивидуальных занятий с педагогом',
        'обратная связь педагога на самом занятии',
        'темп работы подстраивается под возможности ребёнка',
        'индивидуальный чат в What’s app родителей и педагога',
        'индивидуальная консультация',
        'доступ к платформе без ограничений на момент обучения',
      );
    default:
      break;
  }
  return (
    <>
      {includedRatePlan && (
        <span
          className={extraOptionClassName}
        >{`Всё, что включает тариф “${getRatePlanRus(
          includedRatePlan,
        )}”`}</span>
      )}
      <ul className={className || ''}>
        {options.map((option) => (
          <li key={getRandomId()}>{option}</li>
        ))}
      </ul>
    </>
  );
};

export default RatePlanOptions;
