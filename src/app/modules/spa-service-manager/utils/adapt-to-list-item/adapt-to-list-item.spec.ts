import { ISpaServiceModel } from '../../../../core/models/spa-service.model';
import { IListItem } from '../../../../shared/components/list/list.component';
import { adaptToListItem, adaptToListItemArray } from './adapt-to-list-item';

const spaServicesMocked: ISpaServiceModel[] = [
    {
        id: 1,
        name: 'name - 1',
        description: 'description - 1',
        price: 1
    },
    {
        id: 2,
        name: 'name - 2',
        description: 'description - 2',
        price: 2
    }
];

const listItemsMocked: IListItem[] = [
    {
        id: 1,
        header: 'name - 1',
        body: 'description - 1',
        extraInfo: '1$'
    },
    {
        id: 2,
        header: 'name - 2',
        body: 'description - 2',
        extraInfo: '2$'
    }
]

describe('AdaptToListItem', () => {

    it('Should return an object of type IListItem', () => {
        
        const listItem = adaptToListItem(spaServicesMocked[0]);
        expect(listItem).toEqual(listItemsMocked[0]);
    
    });

});

describe('AdaptToListItemArray', () => {

    it('Should return an array of type IListItem[]', () => {
        
        const listItems = adaptToListItemArray(spaServicesMocked);
        expect(listItems).toEqual(listItemsMocked);
    
    });

});