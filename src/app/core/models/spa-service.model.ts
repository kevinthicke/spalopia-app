import { IWithId } from './with-id.model';

export interface ISpaServiceModel extends IWithId {
    name: string
    description: string
    price: number
};