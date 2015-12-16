import {Component, View, Input, Output, EventEmitter, OnChanges, SimpleChange} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Person} from '../../models/person';
import {ModalDialog} from '../../components/modalDialog/modalDialogComponent';


@Component({
    selector: 'persons-form'
})

@View({
    templateUrl: 'app/components/personsForm/personsFormComponent.html',
    directives: [CORE_DIRECTIVES, ModalDialog]
})

export class PersonsForm implements OnChanges {
    @Output('onHideForm') onHideEvents = new EventEmitter();

    @Input() show: boolean;
    @Input() width: number;
    @Input() height: number;
    person: Person = new Person(-1, "", "", "");

    @Input() editPerson: Person;

    validateData: Function = null;

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        if (changes['editPerson']  &&  changes['editPerson'].currentValue) {
            this.person.copyFrom(changes['editPerson'].currentValue);
        } else if (this.editPerson) {
            this.person.copyFrom(this.editPerson);
        }
        this.validateData = ():boolean => {
            if (!this.person.name) {
                window.alert("Name is missing.");
                return false;
            }

            if (!this.person.email) {
                window.alert("E-mail is missing.");
                return false;
            }
            if (this.person.email.indexOf("@") === -1) {
                window.alert("Not a valid e-mail address.");
                return false;
            }

            if (!this.person.city) {
                window.alert("City is missing.");
                return false;
            }

            return true;
        };
    }

    onCloseDialog(isApply: boolean) {
        if (isApply) {
            this.editPerson.copyFrom(this.person);
            this.show = true;
            this.onHideEvents.next(true);
        } else {
            this.show = false;
            this.onHideEvents.next(false);
        }
        return false;
    }

}
