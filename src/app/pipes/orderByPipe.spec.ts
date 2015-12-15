import {OrderByPipe} from './orderByPipe';
import {Person} from '../models/person';
import {PersonsMockData} from '../mockData/personsMockData';

describe('OrderByPipe', () => {
    let pipe:OrderByPipe;
    let mockData: PersonsMockData;

    beforeEach(() => {
        pipe = new OrderByPipe();
        mockData = new PersonsMockData();
    });



    it('Sort by on "name"', () => {

        expect(pipe.transform(PersonsMockData.clone(mockData.mockPersons2), ['name'])).toEqual([mockData.mockPersons2[2], mockData.mockPersons2[0], mockData.mockPersons2[1]]);
    });

    it('Sort by on "city"', () => {
        expect(pipe.transform(PersonsMockData.clone(mockData.mockPersons2), ['city'])).toEqual([mockData.mockPersons2[1], mockData.mockPersons2[2], mockData.mockPersons2[0]]);
    });

});
