import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {Person} from '../../models/person';
import {WINDOW, WINDOW_PROVIDERS} from '../../services/windowService';
import {PersonDirectoryService} from '../../services/personDirectoryService';
import {PersonStorageService} from '../../services/personStorageService';
import {FilterPipe} from '../../pipes/filterPipe';
import {OrderByPipe} from '../../pipes/orderByPipe';
import {PersonsForm} from '../../components/personsForm/personsFormComponent';

@Component({
    selector: 'persons',
    providers: [PersonDirectoryService, PersonStorageService, WINDOW_PROVIDERS]
})

@View({
    templateUrl: 'app/components/persons/personsComponent.html',
    directives: [CORE_DIRECTIVES,PersonsForm],
    pipes: [FilterPipe, OrderByPipe]
})

export class Persons {
    personsFilter: string = '';
    personsSort: string = 'name';
    persons: Person[] = [];
    personDirectoryService: PersonDirectoryService = null;
    isAddFormVisible: boolean = false;
    selectedPerson: Person = null;
    win: Window = null;
    constructor(personDirectoryService: PersonDirectoryService, win: WINDOW) {
        this.personDirectoryService = personDirectoryService;
        this.win = win.nativeWindow;
        var callback = (data: Person[]) => {
            this.persons = data;
        };
        personDirectoryService.loadPersons(callback);
    }

    handlePersonsFilterInputKeyEvents(value: string) {
        this.personsFilter = value;
    }

    handleSort(value: string) {
        var tmp: string = value;
        if (this.personsSort == tmp) {
            tmp = "-" + tmp;
        }
        this.personsSort = tmp;
    }


    handleDelete(person: Person) {
        if(this.win.confirm("Are you sure?")) {
            this.persons.splice(this.persons.indexOf(person), 1);
            this.personDirectoryService.persistPersons(this.persons);
        }
    }

    handleShowAddEdit(person: Person) {
        this.selectedPerson = person||new Person(-1, "", "", "");
        this.isAddFormVisible = true;
    }

    onAddEditFormHide(dataChanged: Boolean) {
        this.isAddFormVisible = false;
        if (dataChanged) {
            if (this.selectedPerson.id === -1) {
                this.selectedPerson.id = new Date().getTime();
                this.persons.push(this.selectedPerson);
            }
            this.personDirectoryService.persistPersons(this.persons);
        }
        return false;
    }
}
