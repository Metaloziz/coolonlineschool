import { useEffect } from 'react';

import { Status } from '@app/enums/Status';
import { CourseStore } from '@app/store/courseStore';
import { homework } from '@app/store/homeworkStore';
import { GROUP_LEVEL_MENU } from '@app/value-objects/grouplevelMenu';
import { Button } from '@components';
import { CustomDialog, CustomDialogTitle } from '@components/elements';
import {
  Checkbox,
  DialogActions,
  DialogContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from '@mui/material';
import { observer } from 'mobx-react-lite';

interface AddOrEditDialogProps {
  store: CourseStore;
}

export const AddOrEditDialog = observer((props: AddOrEditDialogProps) => {
  const { store } = props;

  useEffect(() => {
    homework.changeParamsStatus(Status.active);
    if (store.isDialogOpen) {
      homework.pull();
    }
  }, [store.isDialogOpen]);

  return (
    <CustomDialog
      PaperProps={{
        style: {
          borderRadius: '30px',
        },
      }}
      maxWidth="md"
      fullWidth
      onClose={store.closeDialog}
      open={store.isDialogOpen}
    >
      <CustomDialogTitle onClose={store.closeDialog}>
        {store.editingEntity?.id ? 'Редактирование курса' : 'Добавление нового курса'}
      </CustomDialogTitle>

      <DialogContent dividers>
        <Stack spacing={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Наименование"
                value={store.editingEntity.title}
                onChange={store.changeTitle}
                fullWidth
                variant="outlined"
                size="small"
                disabled={store.editingEntity.status !== Status.draft}
                error={!store.validateSchema.fields.title.isValidSync(store.editingEntity.title)}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel>Уровень</InputLabel>
                <Select
                  value={store.editingEntity.level}
                  label="Уровень"
                  onChange={store.changeLevel}
                  disabled={store.editingEntity.status !== Status.draft}
                >
                  {GROUP_LEVEL_MENU.map(({ name, value }) => (
                    <MenuItem value={value} key={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel>Статус</InputLabel>
                <Select
                  value={store.editingEntity.status}
                  label="Статус"
                  onChange={store.changeStatus}
                >
                  {store.menu.map(({ name, value }) => (
                    <MenuItem value={value} key={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow
                  sx={{
                    '& > th': {
                      backgroundColor: '#2e8dfd',
                      color: '#fff',
                      verticalAlign: 'top',
                    },
                  }}
                >
                  <TableCell role="checkbox" />
                  <TableCell>№ урока</TableCell>
                  <TableCell>Наименование</TableCell>
                  <TableCell width="auto">Описание</TableCell>
                  <TableCell>Колличество игр</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {homework.entities.length > 0 ? (
                  homework.entities.map(({ id, title, gamePresets, text }) => (
                    <TableRow
                      key={id}
                      hover
                      sx={{
                        '& > td': {
                          verticalAlign: 'top',
                        },
                      }}
                    >
                      <TableCell role="checkbox">
                        <Checkbox
                          checked={
                            store.editingEntity.works
                              ? store.editingEntity.works.some(({ workId }) => workId === id)
                              : false
                          }
                          disabled={store.editingEntity.status !== Status.draft}
                          size="small"
                          onChange={(_, checked) => {
                            if (id) {
                              store.addWorks(id, checked);
                            }
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        {(store.editingEntity.works || []).map(({ workId, index }) =>
                          workId === id ? index : null,
                        )}
                      </TableCell>
                      <TableCell>{title}</TableCell>
                      <TableCell width="auto">{text}</TableCell>
                      <TableCell>{(gamePresets || []).length}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4}>Данные отсутствуют...</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[homework.pagination.rowsPerPage]}
            component="div"
            count={homework.pagination.total}
            rowsPerPage={homework.pagination.rowsPerPage}
            page={homework.pagination.page}
            onPageChange={(_, page) => homework.changePage(page)}
            labelDisplayedRows={({ from, to, count }) =>
              `${from}–${to} из ${count !== -1 ? count : `больше чем ${to}`}`
            }
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          style={{ width: '200px' }}
          onClick={store.addOrEdit}
          disabled={!store.validateSchema.isValidSync(store.editingEntity)}
        >
          {store.editingEntity?.id ? 'Изменить' : 'Сохранить'}
        </Button>
      </DialogActions>
    </CustomDialog>
  );
});
