import {bootstrap, Component, View, Input, Output, EventEmitter, CORE_DIRECTIVES} from 'angular2/angular2';
import {Person} from '../../models/person';

@Component({
    selector: 'modal-dialog'
})

@View({
    templateUrl: 'app/components/modalDialog/modalDialogComponent.html',
    directives: [CORE_DIRECTIVES],
})

export class ModalDialog {
    @Input() show: boolean;
    @Input() width: number;
    @Input() height: number;
    @Input() cancelLabel: string;
    @Input() applyLabel: string;
    @Input() validate: Function;

    @Output('onCloseDialog') onCloseEvents = new EventEmitter();

    cancelCloseModal() {
        if (this.cancelLabel) {
            this.show = false;
            this.onCloseEvents.next(false);
        }
        return false;
    }

    applyCloseModal() {
        if (this.validate()) {
            this.show = false;
            this.onCloseEvents.next(true);
        }
    }
}
