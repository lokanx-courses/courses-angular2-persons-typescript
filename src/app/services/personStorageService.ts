import {Injectable, Inject} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
//import 'rxjs/add/operator/map';

import {Person} from '../models/person';
import {WINDOW} from './windowService';



class PersonStorageServiceHelper {
    win: Window;
    constructor(win: WINDOW) {
        this.win = win.nativeWindow;
    }

    store(personDirectory: Person[]) : void {
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

    load(): any {
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

        return jsonData;
    }
}



@Injectable()
export class PersonStorageService {
    helper : PersonStorageServiceHelper;

    constructor(win: WINDOW) {
        this.helper = new PersonStorageServiceHelper(win);
    }

    persistPersonDirectory (personDirectory: Person[]) : void {
        this.helper.store(personDirectory);
    }

    loadPersonDirectory  (callback: Function) {
        var jsonData: any = this.helper.load();

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

    loadPersonDirectory2() : Observable<any> {
        let observer = new Observable<any>((obs:any) => {
            obs.next(this.helper.load());
            obs.complete();
        });

        let peopleMapper = (jsonData: Array<any>) => {
            let result:Array<Person> = [];
            if (jsonData) {
                jsonData.forEach((data) => {
                result.push(
                     new Person(data.id,
                              data.name,
                              data.email,
                              data.city));
                });
            }
            return result;
        };

        //observer.map(peopleMapper);
        map.call(observer, peopleMapper);

        return observer;
    }
}
