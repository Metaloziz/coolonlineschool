import { ChangeEvent } from 'react';

import { Status } from '@app/enums/Status';
import { HomeworkRepository } from '@app/services/HomeworkRepository';
import { StoreBase } from '@app/store/storeBase';
import { Nullable } from '@app/types';
import { StatusItemMenuType } from '@app/types/StatusItemMenu';
import { STATUS_MENU } from '@app/value-objects/statusMenu';
import { HomeworkViewModel } from '@app/viewModels/HomeworkViewModel';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import { filterSelectMenu } from '@utils/filterSelectMenu';
import { makeObservable, observable, runInAction } from 'mobx';
import * as yup from 'yup';

export class HomeworkStore extends StoreBase {
  private _repository = new HomeworkRepository();

  isDialogOpen: boolean = false;

  entities: HomeworkViewModel[] = [];

  menu: StatusItemMenuType[] = STATUS_MENU;

  status: Nullable<Status> = null;

  pagination: {
    page: number;
    rowsPerPage: number;
    total: number;
  } = {
    page: 0,
    rowsPerPage: 5,
    total: 0,
  };

  private _defaultValue = (): HomeworkViewModel => ({
    text: '',
    title: '',
    gamePresets: [],
    status: Status.draft,
  });

  editingEntity: HomeworkViewModel = this._defaultValue();

  constructor() {
    super();
    makeObservable(this, {
      editingEntity: observable,
      entities: observable,
      isDialogOpen: observable,
    });
  }

  openDialog = (editingEntity?: HomeworkViewModel) => {
    if (editingEntity?.id) {
      runInAction(() => {
        this.editingEntity = { ...editingEntity };
        this.menu = filterSelectMenu(editingEntity.status, STATUS_MENU);
      });
    } else {
      runInAction(() => {
        this.editingEntity = this._defaultValue();
        this.menu = STATUS_MENU;
      });
    }

    runInAction(() => {
      this.isDialogOpen = true;
    });
  };

  closeDialog = () => {
    runInAction(() => {
      this.isDialogOpen = false;
    });
  };

  list = async () =>
    this.execute(async () => {
      const params: any = { page: this.pagination.page };
      if (this.status) {
        params.status = this.status;
      }

      const paginationResponse = await this._repository.list(params);
      runInAction(() => {
        this.entities = paginationResponse.items;
        this.pagination = {
          page: paginationResponse.page,
          rowsPerPage: paginationResponse.perPage,
          total: paginationResponse.total,
        };
      });
    });

  addOrEdit = async () => {
    this.closeDialog();

    this.execute(async () => {
      await this._repository.addOrEdit(this.editingEntity);
      await this.pull();
    });
  };

  remove = async (id: string) => {
    this.execute(async () => {
      await this._repository.remove(id);
      await this.pull();
    });
  };

  pull = async () => {
    this.execute(async () => this.list());
  };

  changeTitle = (event: ChangeEvent<HTMLTextAreaElement>) => {
    runInAction(() => {
      this.editingEntity.title = event.currentTarget.value;
    });
  };

  changeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    runInAction(() => {
      this.editingEntity.text = event.currentTarget.value;
    });
  };

  changeStatus = (event: SelectChangeEvent<Status>) => {
    runInAction(() => {
      this.editingEntity.status = event.target.value as Status;
    });
  };

  changeParamsStatus = (status: Nullable<Status>) => {
    runInAction(() => {
      this.status = status as Status;
    });
  };

  changePage = async (page: number) => {
    this.pagination.page = page;
    this.execute(async () => this.list());
  };

  get validateSchema() {
    return yup.object<Record<keyof HomeworkViewModel, any>>().shape({
      title: yup.string().required('*'),
      text: yup.string().required('*'),
    });
  }
}

export const homework = new HomeworkStore();
