/*global System */
/*jshint es5: true */
(function () {
    System.config({
        packages: {
            'app': {
                defaultExtension: 'js'
            },
            '../node_modules': {
                defaultExtension: 'js'
            }
        },
        paths: {
            'rxjs/add/observable/*': '../node_modules/rxjs/add/observable/*.js',
            'rxjs/add/operator/*': '../node_modules/rxjs/add/operator/*.js',
            'rxjs/*': '../node_modules/rxjs/*.js'
        }
    });

    System.import('app/app').then(null, console.error.bind(console));
}());
