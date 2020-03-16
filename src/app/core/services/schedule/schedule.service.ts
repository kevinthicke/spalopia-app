import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { adaptToScheduleModel } from '../../adapters/adapt-to-schedule-model';
import { baseUrl } from '../../const/base-url';
import { Observable } from 'rxjs';
import { IScheduleModel } from '../../models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private url = baseUrl + '/schedules';

  constructor(private httpClient: HttpClient) { }

  getScheduleBySpaServiceId = (spaServiceId: number): Observable<IScheduleModel> => {

    const params = new HttpParams()
      .set('spaServiceId', spaServiceId.toString());

    return this.httpClient
      .get<any[]>(this.url, { params })
      .pipe(
        map(adaptToScheduleModel)
      );
  };

}
