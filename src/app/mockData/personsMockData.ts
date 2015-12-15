import {Person} from '../models/person';

export class PersonsMockData {
    mockPersons: Person[] =  [
        new Person(0, "Björn Sjögren", "bjorn@smail.com", "Stockholm"),
        new Person(1, "John Doe", "john.doe@nowhere.com", "New York"),
        new Person(2, "Sir Väs", "sir.vas@zoo.com", "London")
    ];
    mockPersons2: Person[] = [
        new Person(0, 'Donkey Kong', 'monkey@zoo.com', 'Stockholm'),
        new Person(1, 'Kalle Anka', 'kalle.anka@disney.com', 'Ankeborg'),
        new Person(2, 'Björn Sjögren', 'bjorn.sjogren@dev.org', 'New York')
    ];

    static clone(arr: Person[]) : Person[] {
        return [].concat(arr);
    }
}
