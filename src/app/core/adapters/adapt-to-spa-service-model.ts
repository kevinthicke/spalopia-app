import { ISpaServiceModel } from '../models/spa-service.model';

export function adaptToSpaServiceModel(spaServiceRaw: Partial<ISpaServiceModel>): ISpaServiceModel {
    const { 
        id,
        name,
        description,
        price 
    } = spaServiceRaw;

    return { 
        id,
        name,
        description,
        price 
    };
};

export function adaptToSpaceServiceModelList(spaServiceListRaw: Partial<ISpaServiceModel>[]): ISpaServiceModel[] {
    return spaServiceListRaw.map(adaptToSpaServiceModel);
}