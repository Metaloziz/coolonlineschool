import { DateTime } from '@app/enums/DateTime';
import groupsService from '@app/services/groupsService';
import { FranchiseT } from '@app/types/FranchiseTypes';
import { GroupParamsForServer } from '@app/types/GroupParamsForServer';
import { GroupParamsForUI } from '@app/types/GroupParamsForUI';
import { ResponseCourse } from '@app/types/ResponseCourse';
import { ResponseGroupsType } from '@app/types/ResponseGroupsType';
import { ResponseOneGroupType } from '@app/types/ResponseOneGroupType';
import { ScheduleType } from '@app/types/ScheduleType';
import { ResponseUserType } from '@app/types/UserTypes';
import { CreateGroupFroUI } from '@app/types/СreateGroupFroUI';
import { findElement } from '@utils/findIndexElement';
import { LessonType } from '@utils/scheduleItemToServerMapper';
import { AxiosError } from 'axios';
import { makeAutoObservable, runInAction } from 'mobx';
import moment from 'moment';

class GroupStore {
  // todo код скопирован и не адаптирован под этот проект, но очень похож
  groups: ResponseGroupsType[] = [];

  page = 0;

  perPage = 1;

  total = 1;

  selectedGroup = new ResponseOneGroupType();

  private defaultValues: CreateGroupFroUI = {
    name: '',
    franchiseId: '',
    dateSince: new Date(),
    dateUntil: new Date(),
    type: 'class',
    teacherId: '',
    level: 'medium',
    courseId: '',
    status: 'active',
  };

  private queryDefaultValues: GroupParamsForUI = {
    perPage: 10,
    page: 0,
    name: '',
    forGroupId: '',
    franchiseId: '',
    teacherId: '',
    dateSince: '',
    dateUntil: '',
    type: 'class',
    level: '',
  };

  private queryDefaultValuesOlympiads: GroupParamsForUI = {
    perPage: 10,
    page: 0,
    name: '',
    forGroupId: '',
    franchiseId: '',
    teacherId: '',
    dateSince: '',
    dateUntil: '',
    type: 'olympiad',
    level: '',
  };

  private defaultEditValues: Partial<CreateGroupFroUI> = {};

  modalFields = { ...this.defaultValues };

  queryFields = { ...this.queryDefaultValues };

  queryFieldsOlympiads = { ...this.queryDefaultValuesOlympiads };

  schedule: ScheduleType[] = [];

  franchise: FranchiseT[] = [new FranchiseT()];

  teachers: ResponseUserType[] = [];

  courses: ResponseCourse[] = [];

  isLoad = false;

  isModalOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  execute = async <T>(action: () => Promise<T>) => {
    try {
      this.isLoad = true;
      return await action();
    } catch (e) {
      // TODO: handle error
      return (e as AxiosError).message;
    } finally {
      this.isLoad = false;
    }
  };

  getGroups = async (paramsData?: GroupParamsForServer) => {
    const dateSince = this.queryFields.dateSince
      ? moment(this.queryFields.dateSince).format(DateTime.DdMmYyyy)
      : '';
    const dateUntil = this.queryFields.dateUntil
      ? moment(this.queryFields.dateUntil).format(DateTime.DdMmYyyy)
      : '';
    await this.execute(async () => {
      const res = await groupsService.getGroups(
        paramsData || {
          ...this.queryFields,
          dateSince,
          dateUntil,
        },
      );
      if (res.items.length && this.selectedGroup?.id) {
        // await this.getOneGroup(this.selectedGroup.id);
      }
      runInAction(() => {
        this.groups = res.items;
        this.page = res.page;
        this.perPage = res.perPage;
        this.total = res.total;
      });
    });
  };

  setEmptyScheduleItems = (count: number) =>
    count === 0
      ? []
      : Array(count)
          .fill(1)
          .map(el => new LessonType((Math.random() * 100).toString()));

  // getOneGroup = async (id: string) =>
  //   this.execute(async () => {
  //     const res = await groupsService.getOneGroup(id);
  //     runInAction(() => {
  //       this.selectedGroup = res;
  //       this.schedule =
  //         res.schedule && res.schedule.length
  //           ? res.schedule.map(el => scheduleItemToUIMapper(el))
  //           : this.setEmptyScheduleItems(res.course.worksCount);
  //     });
  //     return res;
  //   });

  getCurrentGroupFromLocalStorage = (groupId: string) => findElement(this.groups, groupId);

  nullableSelectedGroup = () => {
    this.selectedGroup = new ResponseOneGroupType();
  };

  clearQueryFields = () => {
    this.queryFields = { ...this.queryDefaultValues };
    this.getGroups();
  };
}

export default new GroupStore();
