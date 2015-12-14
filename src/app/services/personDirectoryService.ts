import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

import {Person} from '../models/person';
import {PersonStorageService} from '../services/personStorageService';

@Injectable()
export class PersonDirectoryService {
    mockPersons: Person[] =  [
        new Person(1, "Björn Sjögren", "lokanx@gmail.com", "Stockholm"),
        new Person(1, "John Doe", "john.doe@nowhere.com", "New York"),
        new Person(1, "Sir Väs", "sir.vas@zoo.com", "London")
    ];
    mockPersons2: Person[] = [
        new Person(0, 'Donkey Kong', 'monkey@zoo.com', 'New York'),
        new Person(1, 'Kalle Anka', 'kalle.anka@disney.com', 'Ankeborg'),
        new Person(2, 'Björn Sjögren', 'bjorn.sjogren@hiq.se', 'Stockholm')
    ];

    personStorageService: PersonStorageService = null;

    constructor(personStorageService: PersonStorageService) {
        this.personStorageService = personStorageService;
    }

    loadPersons(callback: Function) {
        var storageCallback = (data: Person[]) => {
            if (data != null && data.length > 0) {
                callback(data);
            } else {
                callback(this.mockPersons2);
            }

        };
        this.personStorageService.loadPersonDirectory(storageCallback);

        this.personStorageService.loadPersonDirectory2().subscribe((data: string) => {console.log(JSON.stringify(data))});

    }

    persistPersons(persons: Person[]) {
        this.personStorageService.persistPersonDirectory(persons);
    }
}
