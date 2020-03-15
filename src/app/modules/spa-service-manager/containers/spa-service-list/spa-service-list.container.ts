import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, merge, Observable, Subject, Subscription } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { ISpaServiceMinified, SpaServiceSelectedService } from '../../../../core/services/event-bus/spa-service-selected.service';
import { OrderType, SpaService } from '../../../../core/services/spa-service/spa-service.service';
import { IListItem } from '../../../../shared/components/list/list.component';
import { adaptToListItemArray } from '../../utils/adapt-to-list-item/adapt-to-list-item';
import { joinToBuildSpaServiceMinified } from '../../utils/join-to-build-spa-service-minified/join-to-build-spa-service-minified';



@Component({
  selector: 'app-spa-service-list-container',
  templateUrl: './spa-service-list.container.html',
  styleUrls: ['./spa-service-list.container.less']
})
export class SpaServiceListContainer implements OnInit, OnDestroy {

  totalSpaServices$   = new BehaviorSubject<void>(null);
  filterSpaServices$  = new Subject<string>();
  sortSpaServices$    = new Subject<OrderType>();
  selectSpaServiceId$ = new Subject<number>();

  spaServices$: Observable<IListItem[]>;

  subSink = new SubSink();
  
  constructor(
    private spaService: SpaService,
    private spaServiceSelectedService: SpaServiceSelectedService
  ) { }

  ngOnInit(): void {

    this.spaServices$ = this.getSpaServiceObs();
    this.subSink.sink = this.getSpaServiceSelectionSubscription(this.spaServices$);
    
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }


  getSpaServiceObs(): Observable<IListItem[]> {

    const spaServicesComplete$ = this.totalSpaServices$.pipe(
      switchMap(this.spaService.getAll),
    );
    
    const spaServicesFiltered$ = this.filterSpaServices$.pipe(
      switchMap(this.spaService.getByName)
    );

    const spaServicesSorted$ = this.sortSpaServices$.pipe(
      switchMap(this.spaService.getSortedBy('price'))
    )

    return merge(
        spaServicesComplete$,
        spaServicesFiltered$,
        spaServicesSorted$
      ).pipe(
        map(adaptToListItemArray)
      );

  }

  getSpaServiceSelectionSubscription(spaServices$: Observable<IListItem[]>): Subscription {

    return this.selectSpaServiceId$
      .pipe(
        withLatestFrom(spaServices$),
        map(joinToBuildSpaServiceMinified),
        tap(this.spaServiceSelectedService.selectSpaService)
      ).subscribe()
  }

}
