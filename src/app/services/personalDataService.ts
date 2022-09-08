import { Paths } from '@app/enums/Paths';
import { ResponsePersonalData } from '@app/types/personalDataType';

import { instance } from './instance';

export const personalDataService = {
  loadme: () => instance.get<ResponsePersonalData>(Paths.LoadMe),
};
