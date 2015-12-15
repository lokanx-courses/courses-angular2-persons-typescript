import {FilterPipe} from './filterPipe';
import {Person} from '../models/person';

describe('FilterPipe', () => {
    let pipe:FilterPipe;
    let mockPersons: Person[];
    let mockPersons2: Person[];

    beforeEach(() => {
        pipe = new FilterPipe();
        mockPersons = [
            new Person(0, "Björn Sjögren", "lokanx@gmail.com", "Stockholm"),
            new Person(1, "John Doe", "john.doe@nowhere.com", "New York"),
            new Person(2, "Sir Väs", "sir.vas@zoo.com", "London")
        ];
        mockPersons2 = [
            new Person(0, 'Donkey Kong', 'monkey@zoo.com', 'New York'),
            new Person(1, 'Kalle Anka', 'kalle.anka@disney.com', 'Ankeborg'),
            new Person(2, 'Björn Sjögren', 'bjorn.sjogren@hiq.se', 'Stockholm')
        ];
    });



    it('Filter on "Bjö" gives one match', () => {
        expect(pipe.transform(mockPersons, ['Bjö'])).toEqual([mockPersons[0]]);
    });

    it('Filter on "abc123" gives zero matches', () => {
        expect(pipe.transform(mockPersons, ['abc123'])).toEqual([]);
    });

});
