import {Injectable, Inject} from 'angular2/angular2';
import {Person} from '../models/person';
import {WINDOW} from './windowService';


@Injectable()
export class PersonStorageService {
    win: Window;

    constructor(win: WINDOW) {
        this.win = win.nativeWindow;
    }

    persistPersonDirectory (personDirectory: Person[]) {
            if (typeof (this.win.localStorage) !== 'undefined') {
                if (personDirectory != null  &&  personDirectory.length > 0) {
                    var data: any = [];
                    var i: number;
                    for(i = 0; i < personDirectory.length; i++) {
                        data[i] = personDirectory[i].toJSON();
                    }

                }
                this.win.localStorage.setItem('personDirectory', JSON.stringify(data));
            }
    }

    loadPersonDirectory  (callback: Function) {
            var jsonData: any;
            if (typeof (this.win.localStorage) !== 'undefined') {
                var pd = this.win.localStorage.getItem('personDirectory');
                if (pd) {
                    jsonData = JSON.parse(pd);
                } else {
                    jsonData = null;
                }

            } else {
                jsonData = null;
            }

            var data: Person[];
            data = [];
            if (jsonData != null) {
                var i: number;
                for(i = 0; i < jsonData.length; i++) {
                    data[i] = new Person(
                                    jsonData[i].id,
                                    jsonData[i].name,
                                    jsonData[i].email,
                                    jsonData[i].city);
                }
            }

            callback(data);
        }
}
