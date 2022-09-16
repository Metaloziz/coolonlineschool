import { ReactNode } from 'react';

import { Option } from '@app/types/Option';
import { MenuItem } from '@mui/material';

export const getOption = (value: string, label: string): Option => ({ value, label });

export const getOptionMui = (value: string, label: string) => (
  <MenuItem key={value} value={value}>
    {label}
  </MenuItem>
);

export const getAllOptionsMUI = (data: Option[]): ReactNode[] =>
  data.map(el => getOptionMui(el.value, el.label));
