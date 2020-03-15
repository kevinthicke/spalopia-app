import { IScheduleModel } from '../models/schedule.model';

function adaptData(arr: any[]) {
    return arr.map(element => ({
        date: element.date,
        ranges: element.ranges.map(range => ({
            start: range.start,
            end: range.end
        }))
    }))
}

export function adaptToScheduleModel(schedule: any): IScheduleModel {

    return {
        id: schedule.id,
        spaServiceMini: { id: schedule.spaServiceId, name: null },
        data: adaptData(schedule.data)
    };
}