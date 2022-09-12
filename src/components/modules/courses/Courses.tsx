import { useEffect } from 'react';

import { Status } from '@app/enums/Status';
import { course } from '@app/store/courseStore';
import { groupLevelObject } from '@app/value-objects/groupLevel';
import { statusObject } from '@app/value-objects/status';
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

import { AddOrEditDialog } from './AddOrEditDialog';
import { Filter } from './Filter';

const Courses = observer(() => {
  useEffect(() => {
    course.pull();
  }, []);

  return (
    <Box
      sx={{
        height: '100%',
        overflow: 'auto',
      }}
    >
      <AddOrEditDialog store={course} />

      <Box p={2}>
        <Box mb={1}>
          <Stack spacing={1}>
            <Button
              variant="contained"
              size="small"
              startIcon={<AddIcon fontSize="small" />}
              onClick={() => course.openDialog()}
              sx={{
                alignSelf: 'flex-start',
                backgroundColor: '#2e8dfd',
              }}
            >
              Добавить
            </Button>
            <Filter onChange={course.onChangeFilter} />
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
                <TableCell>Уровень</TableCell>
                <TableCell>Колличество работ</TableCell>
                <TableCell>Дата создания</TableCell>
                <TableCell>Статус</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {course.entities.length ? (
                course.entities.map(entity => {
                  const { level, createdAt, status, title, id, worksCount } = entity;
                  const date = new Date(createdAt.date).toLocaleDateString();
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
                      <TableCell>{title}</TableCell>
                      <TableCell>{groupLevelObject[level]}</TableCell>
                      <TableCell>{worksCount}</TableCell>
                      <TableCell>{date}</TableCell>
                      <TableCell>{statusObject[status]}</TableCell>
                      <TableCell>
                        <Stack direction="row" justifyContent="flex-end">
                          <IconButton
                            size="small"
                            onClick={() => course.openDialog(entity)}
                            color="primary"
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            size="small"
                            onClick={() => course.remove(id!)}
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
                  <TableCell colSpan={5}>Данные отсутствуют...</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[course.pagination.rowsPerPage]}
          component="div"
          count={course.pagination.total}
          rowsPerPage={course.pagination.rowsPerPage}
          page={course.pagination.page}
          onPageChange={(_, page) => course.changePage(page)}
          labelDisplayedRows={({ from, to, count }) =>
            `${from}–${to} из ${count !== -1 ? count : `больше чем ${to}`}`
          }
        />
      </Box>
    </Box>
  );
});

export default Courses;
