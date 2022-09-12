import { Paths } from '@app/enums/Paths';
import { Status } from '@app/enums/Status';
import { HttpClient } from '@app/rest/HttpClient';
import tokenService from '@app/services/tokenService';
import { TimeZoneType } from '@app/types/AuthType';
import { PaginationResponse } from '@app/types/PaginationResponse';
import { CourseViewModel } from '@app/viewModels/CourseViewModel';
import { HomeworkViewModel } from '@app/viewModels/HomeworkViewModel';

type Work = {
  id: string;
  index: string;
  work: Omit<HomeworkViewModel, 'gamePresets' | 'type'> & { id: string };
};

type Course = {
  createdAt: TimeZoneType;
  id: string;
  level: string;
  status: Status;
  title: string;
  works: Work[];
  worksCount: number;
};

export type Error = {
  error: string;
};

type CourseType = {
  course: Course;
  usedInGroups: [];
};

export class CourseRepository {
  private readonly token = tokenService.getLocalAccessToken();

  readonly list = async (params: {}) =>
    new HttpClient(Paths.Courses, 'GET')
      .withTimeout(10000)
      .withBearerAuthorization(this.token)
      .withUrlParamsRequest(params)
      .execute<PaginationResponse<CourseViewModel>>();

  readonly course = async (id: string) =>
    new HttpClient(`${Paths.Courses}/${id}`, 'GET')
      .withTimeout(10000)
      .withBearerAuthorization(this.token)
      .execute<CourseType>();

  readonly addOrEdit = async (model: CourseViewModel) =>
    new HttpClient(model.id ? `${Paths.Courses}/${model.id}` : Paths.Courses, 'POST')
      .withTimeout(10000)
      .withBearerAuthorization(this.token)
      .withJsonRequest(model)
      .execute<Course & Error>();

  readonly remove = async (id: string) =>
    new HttpClient(`${Paths.Courses}/${id}`, 'DELETE')
      .withTimeout(10000)
      .withBearerAuthorization(this.token)
      .execute();
}
