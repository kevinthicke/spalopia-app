import { ISpaServiceModel } from '../../../core/models/spa-service.model';
import { IListItem } from '../../../shared/components/list/list.component';

export function adaptToListItem(spaService: ISpaServiceModel): IListItem {
    
    return {
        id: spaService.id,
        header: spaService.name,
        body: spaService.description,
        extraInfo: `${ spaService.price }$`
    }
}

export function adaptToListItemArray(spaServices: ISpaServiceModel[]): IListItem[] {
    return spaServices.map(adaptToListItem);
}