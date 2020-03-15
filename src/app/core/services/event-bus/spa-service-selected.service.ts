import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ISpaServiceModel } from '../../models/spa-service.model';

export interface ISpaServiceMinified {
  id: ISpaServiceModel['id'];
  name: ISpaServiceModel['name'];
}

export interface ISpaServiceEvent {
  existsSelected: boolean;
  spaService?: ISpaServiceMinified;
}

@Injectable({
  providedIn: 'root'
})
export class SpaServiceSelectedService {

  private spaServiceSelected$ = new BehaviorSubject<ISpaServiceEvent>(null);
  spaServiceSelectedChanged$ = this.spaServiceSelected$.asObservable();

  constructor() { }

  selectSpaService = (spaServiceMinified: ISpaServiceMinified): void => {
    
    this.spaServiceSelected$.next({ 
      existsSelected: true, 
      spaService: spaServiceMinified 
    });

  };

}
