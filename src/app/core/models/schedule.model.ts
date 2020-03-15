import { ITimeRangeModel } from './time-range.model';
import { IWithId } from './with-id.model';
import { ISpaServiceMinified } from '../services/event-bus/spa-service-selected.service';

export interface IScheduleModel extends IWithId {
    spaServiceMini: ISpaServiceMinified;
    data: {
        date: string;
        ranges: ITimeRangeModel[];
    }[]
}
