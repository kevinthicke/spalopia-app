import { ITimeRangeModel } from '../models/time-range.model';

export function adaptToTimeRangesModel(obj: any[]): ITimeRangeModel[] {
    return obj.map(range => ({ start: range.start, end: range.end }));
};