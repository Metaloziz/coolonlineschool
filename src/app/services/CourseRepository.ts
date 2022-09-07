import { Paths } from '@app/enums/Paths';
import { Status } from '@app/enums/Status';
import { HttpClient } from '@app/rest/HttpClient';
import tokenService from '@app/services/tokenService';
import { PaginationResponse } from '@app/types/PaginationResponse';
import { CourseViewModel } from '@app/viewModels/CourseViewModel';
import { HomeworkViewModel } from '@app/viewModels/HomeworkViewModel';

type Work = {
  id: string;
  index: string;
  work: Omit<HomeworkViewModel, 'gamePresets' | 'type'> & { id: string };
};

type CourseType = {
  course: { id: string; level: string; status: Status; title: string; works: Work[] };
  usedInGroups: [];
};

export class CourseRepository {
  private readonly token = tokenService.getLocalAccessToken();

  readonly list = async (page: number = 0) =>
    new HttpClient(Paths.Courses, 'GET')
      .withTimeout(10000)
      .withBearerAuthorization(this.token)
      .withUrlParamsRequest({ page })
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
      .execute();

  readonly remove = async (id: string) =>
    new HttpClient(`${Paths.Courses}/${id}`, 'DELETE')
      .withTimeout(10000)
      .withBearerAuthorization(this.token)
      .execute();
}
