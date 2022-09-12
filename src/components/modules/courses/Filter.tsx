import { useState } from 'react';

import { GroupLevel } from '@app/enums/GroupLevel';
import { Status } from '@app/enums/Status';
import { Nullable } from '@app/types';
import { CourseFilterViewModel } from '@app/types/CourseFilterViewModel';
import { GROUP_LEVEL_MENU } from '@app/value-objects/grouplevelMenu';
import { STATUS_MENU } from '@app/value-objects/statusMenu';
import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import ru from 'dayjs/locale/ru';
import { observer } from 'mobx-react-lite';

interface FilterProps {
  onChange: (filter: CourseFilterViewModel) => void;
}

export const Filter = observer((props: FilterProps) => {
  const _defaultFilter = (): CourseFilterViewModel => ({
    title: null,
    level: null,
    created_until: null,
    created_since: null,
    status: null,
    sort: null,
  });

  const [filter, setFilter] = useState<CourseFilterViewModel>(_defaultFilter());
  const [open, setOpen] = useState(false);

  const applyFilter = () => {
    props.onChange(filter);
  };

  const clearFilter = () => {
    setOpen(false);

    setFilter(_defaultFilter());
    props.onChange(_defaultFilter());
  };

  const onCreatedSinceChange = (newValue: Dayjs | null) => {
    if (newValue?.toDate()) {
      setFilter(prev => ({ ...prev, created_since: newValue?.toDate() }));
    }
  };

  const onCreatedUntilChange = (newValue: Dayjs | null) => {
    if (newValue?.toDate()) {
      setFilter(prev => ({ ...prev, created_until: newValue?.toDate() }));
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={ru}>
      <Box>
        <Accordion
          expanded={open}
          onChange={(_, expanded) => setOpen(expanded)}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Фильтрация</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Наименование"
                  value={filter.title || ''}
                  onChange={({ target: { value } }) =>
                    setFilter(prev => ({ ...prev, title: value }))
                  }
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Уровень</InputLabel>
                  <Select
                    value={filter.level || ''}
                    label="Уровень"
                    onChange={({ target: { value } }) =>
                      setFilter(prev => ({ ...prev, level: value as Nullable<GroupLevel> }))
                    }
                  >
                    <MenuItem value="">Не выбрано</MenuItem>
                    {GROUP_LEVEL_MENU.map(({ value, name }) => (
                      <MenuItem key={value} value={value}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Статус</InputLabel>
                  <Select
                    value={filter.status || ''}
                    label="Статус"
                    onChange={({ target: { value } }) =>
                      setFilter(prev => ({ ...prev, status: value as Nullable<Status> }))
                    }
                  >
                    <MenuItem value="">Не выбрано</MenuItem>
                    {STATUS_MENU.map(({ value, name }) => (
                      <MenuItem key={value} value={value}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={2}>
                <DatePicker
                  label="Создано с"
                  inputFormat="DD.MM.YYYY"
                  mask="__.__.____"
                  value={filter.created_since}
                  onChange={onCreatedSinceChange}
                  renderInput={params => (
                    <TextField {...params} variant="outlined" size="small" fullWidth />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={2}>
                <DatePicker
                  label="Создано до"
                  inputFormat="DD.MM.YYYY"
                  mask="__.__.____"
                  value={filter.created_until}
                  onChange={onCreatedUntilChange}
                  renderInput={params => (
                    <TextField {...params} variant="outlined" size="small" fullWidth />
                  )}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
          <AccordionActions>
            <Stack
              spacing={1}
              direction="row"
              justifyContent="space-between"
              sx={{
                width: '100%',
                px: 1,
              }}
            >
              <Button
                variant="contained"
                size="small"
                startIcon={<SearchIcon fontSize="small" />}
                onClick={applyFilter}
                sx={{
                  alignSelf: 'flex-end',
                  backgroundColor: '#2e8dfd',
                }}
              >
                Применить
              </Button>
              <Button
                size="small"
                startIcon={<ClearIcon fontSize="small" />}
                onClick={clearFilter}
                sx={{
                  alignSelf: 'flex-end',
                }}
                color="error"
              >
                Сбросить
              </Button>
            </Stack>
          </AccordionActions>
        </Accordion>
      </Box>
    </LocalizationProvider>
  );
});
