import { Paths } from '@app/enums/Paths';
import { HttpClient } from '@app/rest/HttpClient';
import tokenService from '@app/services/tokenService';
import { TimeZoneType } from '@app/types/AuthType';
import { PaginationResponse } from '@app/types/PaginationResponse';
import { HomeworkViewModel } from '@app/viewModels/HomeworkViewModel';

type Work = {
  createdAt: TimeZoneType;
  id: string;
  text: string;
  title: string;
};

export type Error = {
  error: string;
};

export class HomeworkRepository {
  private readonly token = tokenService.getLocalAccessToken();

  readonly list = async (params: {}) =>
    new HttpClient(Paths.Works, 'GET')
      .withTimeout(10000)
      .withBearerAuthorization(this.token)
      .withUrlParamsRequest(params)
      .execute<PaginationResponse<HomeworkViewModel>>();

  readonly byId = async (id: string) =>
    new HttpClient(`${Paths.Works}/${id}`, 'GET')
      .withTimeout(10000)
      .withBearerAuthorization(this.token)
      .execute<HomeworkViewModel>();

  readonly addOrEdit = async (model: HomeworkViewModel) =>
    new HttpClient(model.id ? `${Paths.Works}/${model.id}` : Paths.Works, 'POST')
      .withTimeout(10000)
      .withBearerAuthorization(this.token)
      .withJsonRequest(model)
      .execute<Work & Error>();

  readonly remove = async (id: string) =>
    new HttpClient(`${Paths.Works}/${id}`, 'DELETE')
      .withTimeout(10000)
      .withBearerAuthorization(this.token)
      .execute();
}
