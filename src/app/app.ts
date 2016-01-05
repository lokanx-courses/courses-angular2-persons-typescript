import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';

import {PersonsView} from './views/persons/personsViewComponent';
import {AboutView} from './views/about/aboutViewComponent';
import {SomethingView} from './views/something/somethingViewComponent';


@Component({
    selector: 'my-app'
})

@View({
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
   {path: '/about',      name: 'About',      component: AboutView},
   {path: '/something',  name: 'Something',  component: SomethingView},
   {path: '/persons',    name: 'Persons',    component: PersonsView,     useAsDefault: true}
])

class AppComponent { }

bootstrap(AppComponent, [ROUTER_PROVIDERS]);
