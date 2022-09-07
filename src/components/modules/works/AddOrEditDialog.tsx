import { HomeworkStore } from '@app/store/homeworkStore';
import { Button } from '@components';
import { CustomDialog, CustomDialogTitle } from '@components/elements';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  DialogActions,
  DialogContent,
  FormControl,
  Grid,
  IconButton,
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
  TableRow,
  TextField,
} from '@mui/material';
import { observer } from 'mobx-react-lite';

interface AddOrEditDialogProps {
  store: HomeworkStore;
}

export const AddOrEditDialog = observer((props: AddOrEditDialogProps) => {
  const { store } = props;

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
        {store.editingEntity?.id
          ? 'Редактирование домашнего задания'
          : 'Добавление нового домашнего задания'}
      </CustomDialogTitle>

      <DialogContent dividers>
        <Stack spacing={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Наименование"
                value={store.editingEntity.title}
                onChange={store.changeTitle}
                fullWidth
                variant="outlined"
                size="small"
                error={!store.validateSchema.fields.title.isValidSync(store.editingEntity.title)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth size="small">
                <InputLabel>Статус</InputLabel>
                <Select
                  value={store.editingEntity.status}
                  label="Уровень"
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

          <Grid container>
            <TextField
              label="Описание"
              value={store.editingEntity.text}
              onChange={store.changeText}
              fullWidth
              multiline
              maxRows={5}
              minRows={5}
              variant="outlined"
              size="small"
              error={!store.validateSchema.fields.text.isValidSync(store.editingEntity.text)}
            />
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
                  <TableCell>Игра</TableCell>
                  <TableCell>Шаблон</TableCell>
                  <TableCell align="right">
                    <IconButton
                      size="small"
                      onClick={() => {}}
                      sx={{
                        color: '#fff',
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(store.editingEntity.gamePresets || []).length > 0 ? (
                  (store.editingEntity.gamePresets || []).map(preset => (
                    <TableRow
                      key={preset}
                      hover
                      sx={{
                        '& > td': {
                          verticalAlign: 'top',
                        },
                      }}
                    >
                      <TableCell />
                      <TableCell />
                      <TableCell align="right">
                        <IconButton size="small" onClick={() => {}} color="error">
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3}>Данные отсутствуют...</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
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
