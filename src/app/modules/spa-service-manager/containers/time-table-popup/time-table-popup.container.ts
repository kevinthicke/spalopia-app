import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map, pluck, switchMap, withLatestFrom } from 'rxjs/operators';
import { IScheduleModel } from '@app-core/models/schedule.model';
import { SpaServiceSelectedService } from '@app-core/services/event-bus/spa-service-selected.service';
import { ScheduleService } from '@app-core/services/schedule/schedule.service';
import { joinToAddSpaServiceName } from '../../utils/join-to-add-spa-service-name/join-to-add-spa-service-name';

@Component({
  selector: 'app-time-table-popup-container',
  templateUrl: './time-table-popup.container.html'
})
export class TimeTablePopupContainer implements OnInit {

  schedule$: Observable<IScheduleModel>;

  constructor(
    private spaServiceSelectedService: SpaServiceSelectedService,
    private scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
    
    const spaServiceSelectedId$ = this.getSpaServiceSelectedId();
    this.schedule$ = this.retrieveSchedule(spaServiceSelectedId$);

  };

  getSpaServiceSelectedId(): Observable<number> {

    return this.spaServiceSelectedService
      .spaServiceSelectedChanged$
      .pipe(
        filter(Boolean),
        pluck('spaService'),
        pluck('id')
      );

  }

  retrieveSchedule(spaServiceSelectedId$: Observable<number>): Observable<IScheduleModel> {

    return spaServiceSelectedId$.pipe(
      switchMap(this.scheduleService.getScheduleBySpaServiceId),
      withLatestFrom(this.spaServiceSelectedService.spaServiceSelectedChanged$),
      map(joinToAddSpaServiceName)
    );

  }

};

