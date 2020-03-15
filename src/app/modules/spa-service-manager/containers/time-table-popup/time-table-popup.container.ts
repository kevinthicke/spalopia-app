import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject, combineLatest } from 'rxjs';
import { IScheduleModel } from '../../../../core/models/schedule.model';
import { ISpaServiceModel } from '../../../../core/models/spa-service.model';
import { IWithId } from '../../../../core/models/with-id.model';
import { SpaServiceSelectedService, ISpaServiceEvent, ISpaServiceMinified } from '../../../../core/services/event-bus/spa-service-selected.service';
import { ScheduleService } from '../../../../core/services/schedule/schedule.service';
import { SubSink } from 'subsink';
import { switchMap, tap, filter, withLatestFrom, pluck, map } from 'rxjs/operators';

function joinToAddSpaServiceName(
  [schedule, spaServiceEvent]: [IScheduleModel, ISpaServiceEvent]
  ): IScheduleModel {

    schedule.spaServiceMini.name = spaServiceEvent.spaService.name;
    return schedule;

} 

@Component({
  selector: 'app-time-table-popup-container',
  templateUrl: './time-table-popup.container.html'
})
export class TimeTablePopupContainer implements OnInit {

  hideTimeTableComponent$ = new Subject<void>();
  schedule$: Observable<IScheduleModel>;

  constructor(
    private spaServiceSelectedService: SpaServiceSelectedService,
    private scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
    
    const spaServiceSelectedId$ = this.spaServiceSelectedService
      .spaServiceSelectedChanged$
      .pipe(
        filter(Boolean),
        pluck('spaService'),
        pluck('id')
      );

    this.schedule$ = spaServiceSelectedId$.pipe(
      switchMap(this.scheduleService.getScheduleBySpaServiceId),
      withLatestFrom(this.spaServiceSelectedService.spaServiceSelectedChanged$),
      map(joinToAddSpaServiceName)
    );

  };

};

