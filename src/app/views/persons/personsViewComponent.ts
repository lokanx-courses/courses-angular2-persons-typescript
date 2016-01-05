import {Component} from 'angular2/core';
import {Persons} from '../../components/persons/personsComponent';
import {PersonStorageService} from '../../services/personStorageService';
import {PersonDirectoryService} from '../../services/personDirectoryService';


@Component({
    templateUrl: 'app/views/persons/personsViewComponent.html',
    directives: [Persons]
})

export class PersonsView {}
