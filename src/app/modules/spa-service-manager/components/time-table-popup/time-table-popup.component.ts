import { Component, Input } from '@angular/core';
import { IScheduleModel } from '../../../../core/models/schedule.model';
import { fadeInOut } from '../../../../shared/animations/fade-in-out.animation';

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
