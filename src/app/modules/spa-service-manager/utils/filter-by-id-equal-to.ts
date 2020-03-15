import { IWithId } from '../../../core/models/with-id.model';
import { filter } from 'rxjs/operators';

export function filterByIdEqualTo<T extends IWithId>(id: number) {
    return (arr: T[]) => {
        const [ elementFiltered ] = arr.filter(e => e.id === id);
        return elementFiltered;
    };
}