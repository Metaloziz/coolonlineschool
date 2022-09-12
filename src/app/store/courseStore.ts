import { ChangeEvent } from 'react';

import { GroupLevel } from '@app/enums/GroupLevel';
import { Status } from '@app/enums/Status';
import { CourseRepository } from '@app/services/CourseRepository';
import { appStore } from '@app/store/appStore';
import { StoreBase } from '@app/store/storeBase';
import { CourseFilterViewModel } from '@app/types/CourseFilterViewModel';
import { StatusItemMenuType } from '@app/types/StatusItemMenu';
import { STATUS_MENU } from '@app/value-objects/statusMenu';
import { CourseViewModel } from '@app/viewModels/CourseViewModel';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import { filterSelectMenu } from '@utils/filterSelectMenu';
import { makeObservable, observable, runInAction } from 'mobx';
import * as yup from 'yup';

export class CourseStore extends StoreBase {
  private _repository = new CourseRepository();

  private _defaultValue = (): CourseViewModel => ({
    title: '',
    level: GroupLevel.medium,
    createdAt: null!,
    status: Status.draft,
  });

  filters: CourseFilterViewModel = {
    status: null,
    level: null,
    created_since: null,
    created_until: null,
    title: null,
    sort: null,
  };

  pagination: {
    page: number;
    rowsPerPage: number;
    total: number;
  } = {
    page: 0,
    rowsPerPage: 5,
    total: 0,
  };

  menu: StatusItemMenuType[] = STATUS_MENU;

  editingEntity: CourseViewModel = this._defaultValue();

  entities: CourseViewModel[] = [];

  isDialogOpen: boolean = false;

  constructor() {
    super();

    makeObservable(this, {
      editingEntity: observable,
      entities: observable,
      isDialogOpen: observable,
      menu: observable,
      filters: observable,
    });
  }

  addWorks = (workId: string, checked: boolean) => {
    if (checked) {
      const index = this.editingEntity.works?.length;
      if (index) {
        runInAction(() => {
          this.editingEntity.works = [
            ...(this.editingEntity.works || []),
            {
              workId,
              index: index + 1,
            },
          ];
        });
      } else {
        runInAction(() => {
          this.editingEntity.works = [{ workId, index: 1 }];
        });
      }
    }
    if (!checked) {
      runInAction(() => {
        const currentWork = this.editingEntity.works?.find(work => work.workId === workId);

        this.editingEntity.works = this.editingEntity.works
          ?.filter(work => work.workId !== workId)
          .map(work =>
            currentWork && work.index > currentWork.index
              ? { ...work, index: work.index - 1 }
              : work,
          );
      });
    }
  };

  openDialog = async (editingEntity?: CourseViewModel) => {
    if (editingEntity?.id) {
      const { course } = await this._repository.course(editingEntity?.id);

      let newArray: { workId: string; index: number }[] = [];

      if (course.works) {
        newArray = course.works.map(({ index, work }) => ({
          workId: work.id,
          index: Number(index),
        }));
      }

      runInAction(() => {
        this.editingEntity = { ...editingEntity, works: [...newArray] };
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

      Object.keys(this.filters).forEach(key => {
        if (this.filters[key as keyof CourseFilterViewModel]) {
          params[key] = this.filters[key as keyof CourseFilterViewModel];
        }
      });

      const { page, perPage, total, items } = await this._repository.list(params);
      runInAction(() => {
        this.entities = items;
        this.pagination = {
          page,
          rowsPerPage: perPage,
          total,
        };
      });
    });

  addOrEdit = async () => {
    this.execute(async () => {
      const { error, createdAt } = await this._repository.addOrEdit(this.editingEntity);
      if (error) {
        appStore.setErrorMessage(error);
      }
      if (createdAt) {
        const message = this.editingEntity.id ? 'Курс изменен' : 'Курс создан';
        appStore.setSuccessMessage(message);
        this.closeDialog();
      }

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

  onChangeFilter = (filter: CourseFilterViewModel) => {
    runInAction(() => {
      this.filters = filter;
    });
    this.execute(async () => this.list());
  };

  changeTitle = (event: ChangeEvent<HTMLTextAreaElement>) => {
    runInAction(() => {
      this.editingEntity.title = event.currentTarget.value;
    });
  };

  changeStatus = (event: SelectChangeEvent<Status>) => {
    runInAction(() => {
      this.editingEntity.status = event.target.value as Status;
    });
  };

  changeLevel = (event: SelectChangeEvent<GroupLevel>) => {
    runInAction(() => {
      this.editingEntity.level = event.target.value as GroupLevel;
    });
  };

  changePage = async (page: number) => {
    this.pagination.page = page;
    this.execute(async () => this.list());
  };

  get validateSchema() {
    return yup.object<Record<keyof CourseViewModel, any>>().shape({
      title: yup.string().required('*'),
      level: yup.string().required('*'),
    });
  }
}

export const course = new CourseStore();
