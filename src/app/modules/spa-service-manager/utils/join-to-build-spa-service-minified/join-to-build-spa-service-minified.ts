import { ISpaServiceMinified } from '../../../../core/services/event-bus/spa-service-selected.service';
import { IListItem } from '../../../../shared/components/list/list.component';

export function joinToBuildSpaServiceMinified(
    [spaServiceId, spaServices]: [number, Array<IListItem>]
): ISpaServiceMinified {

    const [spaServiceSelected] = spaServices.filter(spaService => spaService.id === spaServiceId);

    return {
        id: spaServiceSelected.id,
        name: spaServiceSelected.header
    }
}