import {bootstrap, Component, View} from 'angular2/angular2';
import {Persons} from './components/persons/personsComponent';
import {PersonStorageService} from './services/personStorageService';
import {PersonDirectoryService} from './services/personDirectoryService';


@Component({
    selector: 'my-app'
})

@View({
    templateUrl: 'app/app.html',
    directives: [Persons]
})


class AppComponent { }

bootstrap(AppComponent);
