import { useEffect } from 'react';

import { Status } from '@app/enums/Status';
import { homework } from '@app/store/homeworkStore';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { statusObject } from 'src/app/value-objects/status';

import { AddOrEditDialog } from './AddOrEditDialog';

export const Works = observer(() => {
  useEffect(() => {
    homework.changeParamsStatus(null);
    homework.pull();
  }, []);

  return (
    <Box
      sx={{
        height: '100%',
        overflow: 'auto',
      }}
    >
      <AddOrEditDialog store={homework} />

      <Box p={2}>
        <Box mb={1}>
          <Stack spacing={1}>
            <Button
              variant="contained"
              size="small"
              startIcon={<AddIcon fontSize="small" />}
              onClick={() => homework.openDialog()}
              sx={{
                alignSelf: 'flex-start',
                backgroundColor: '#2e8dfd',
              }}
            >
              Добавить
            </Button>
          </Stack>
        </Box>

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
                <TableCell>Наименование</TableCell>
                <TableCell width="auto">Описание</TableCell>
                <TableCell>Колличество игр</TableCell>
                <TableCell>Статус</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {homework.entities.length > 0 ? (
                homework.entities.map(entity => {
                  const { id, title, gamePresets, text, status } = entity;
                  return (
                    <TableRow
                      key={id}
                      hover
                      sx={{
                        '& > td': {
                          verticalAlign: 'top',
                        },
                      }}
                    >
                      <TableCell>{title || ''}</TableCell>
                      <TableCell>{typeof text === 'string' ? text : '-'}</TableCell>
                      <TableCell>{(gamePresets || []).length}</TableCell>
                      <TableCell>{statusObject[status]}</TableCell>
                      <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                          <IconButton
                            size="small"
                            onClick={() => homework.openDialog(entity)}
                            color="primary"
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            size="small"
                            onClick={() => homework.remove(id!)}
                            color="error"
                            disabled={status !== Status.draft}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })
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
      </Box>
    </Box>
  );
});
