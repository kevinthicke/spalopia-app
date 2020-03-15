import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { IScheduleModel } from '../../../../core/models/schedule.model';
import { zoomOut } from '../../../../shared/animations/zoom-out.animation';
import { fadeInOut } from '../../../../shared/animations/fade-in-out.animation';

interface ITimeTableSchedule {
  date: string;
  ranges: string[];
}

@Component({
  selector: 'app-time-table-popup',
  templateUrl: './time-table-popup.component.html',
  styleUrls: ['./time-table-popup.component.less'],
  animations: [ fadeInOut ]
})
export class TimeTablePopupComponent {

  @Input('schedule') schedule: IScheduleModel;
  
  closePopup(): void {  
    this.schedule = null;
  }

}
