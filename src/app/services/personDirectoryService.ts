import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
//import 'rxjs/add/operator/map';

import {Person} from '../models/person';
import {PersonsMockData} from '../mockData/personsMockData';
import {PersonStorageService} from '../services/personStorageService';




@Injectable()
export class PersonDirectoryService {
    mockData : PersonsMockData = new PersonsMockData();

    personStorageService: PersonStorageService = null;


    constructor(personStorageService: PersonStorageService) {
        this.personStorageService = personStorageService;
    }

    loadPersons() : Observable<any> {
        let observer = this.personStorageService.loadPersonDirectory();

        var dataMapper = (data: Person[]) => {
            if (data != null && data.length > 0) {
                return data;
            } else {
                return this.mockData.mockPersons2;
            }
        };
        //return observer.map(dataMapper);
        return map.call(observer, dataMapper);
    }

    persistPersons(persons: Person[]) {
        this.personStorageService.persistPersonDirectory(persons);
    }
}
