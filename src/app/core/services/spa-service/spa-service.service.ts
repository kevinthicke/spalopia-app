import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { baseUrl } from '../../const/base-url';
import { adaptToSpaServiceModel, adaptToSpaceServiceModelList } from '../../adapters/adapt-to-spa-service-model';
import { ISpaServiceModel } from '../../models/spa-service.model';

export enum OrderType {
  ASC = 'asc',
  DESC = 'desc'
}

@Injectable({
  providedIn: 'root'
})
export class SpaService {

  private url = baseUrl + '/spa-services';

  constructor(private httpClient: HttpClient) { }

  getAll = (): Observable<ISpaServiceModel[]> => {
    
    return this.httpClient
      .get(this.url)
      .pipe(
        map(adaptToSpaceServiceModelList)
      );

  };

  getByName = (name: string): Observable<ISpaServiceModel[]> => {

    const params = new HttpParams()
      .set('name_like', name.toString());

    return this.httpClient
      .get(this.url, { params })
      .pipe(
        map(adaptToSpaceServiceModelList)
      );

  }

  getSortedBy = (method: keyof ISpaServiceModel) => (orderType: OrderType): Observable<ISpaServiceModel[]> => {
    
    const params = new HttpParams()
      .set('_sort', method.toString())
      .set('_order', orderType.toString());

    return this.httpClient
      .get<ISpaServiceModel[]>(this.url, { params })
      .pipe(
        map(adaptToSpaceServiceModelList)
      );

  }
  
}
