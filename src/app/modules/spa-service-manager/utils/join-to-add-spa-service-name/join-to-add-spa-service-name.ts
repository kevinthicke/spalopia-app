import { IScheduleModel } from '../../../../core/models/schedule.model';
import { ISpaServiceEvent } from '../../../../core/services/event-bus/spa-service-selected.service';

export function joinToAddSpaServiceName(
  [schedule, spaServiceEvent]: [IScheduleModel, ISpaServiceEvent]
): IScheduleModel {

  schedule.spaServiceMini.name = spaServiceEvent.spaService.name;
  return schedule;

} 