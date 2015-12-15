import {FilterPipe} from './filterPipe';
import {Person} from '../models/person';
import {PersonsMockData} from '../mockData/personsMockData';

describe('FilterPipe', () => {
    let pipe:FilterPipe;
    let mockData: PersonsMockData;

    beforeEach(() => {
        pipe = new FilterPipe();
        mockData = new PersonsMockData();
    });



    it('Filter on "Bjö" gives one match', () => {
        expect(pipe.transform(PersonsMockData.clone(mockData.mockPersons), ['Bjö', null])).toEqual([mockData.mockPersons[0]]);
    });

    it('Filter on "abc123" gives zero matches', () => {
        expect(pipe.transform(PersonsMockData.clone(mockData.mockPersons), ['abc123', null])).toEqual([]);
    });

    it('Filter on "Bjö" and field "name" gives one match', () => {
        expect(pipe.transform(PersonsMockData.clone(mockData.mockPersons), ['Bjö', 'name'])).toEqual([mockData.mockPersons[0]]);
    });

    it('Filter on "Bjö" and field "city" gives zero matches', () => {
        expect(pipe.transform(PersonsMockData.clone(mockData.mockPersons), ['abc123', 'city'])).toEqual([]);
    });

});
