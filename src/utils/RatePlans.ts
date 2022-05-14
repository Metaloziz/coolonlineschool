import { RatePlans } from '@app/enums/Enums';

const ratePlansRus: Record<RatePlans, string> = {
  introductory: 'Вводный',
  independent: 'Самостоятельный',
  advanced: 'Продвинутый',
  personal: 'Индивидуальный',
};

export const getRatePlanRus = (ratePlan: RatePlans): string =>
  ratePlansRus[ratePlan];
