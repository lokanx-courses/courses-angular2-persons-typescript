/*global System, Promise */
/*jshint es5: true */
(function () {
    'use strict';
    System.config({
        packages: {
            'app': {
                defaultExtension: 'js'
            }
        }
    });

    Promise.all([
        System.import('app/models/person.spec'),
        System.import('app/pipes/filterPipe.spec')
    ]).then(window.onload).catch(console.error.bind(console));
}());
