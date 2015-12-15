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

    var tests = [
        System.import('app/models/person.spec'),
        System.import('app/pipes/filterPipe.spec')
    ];

    Promise.all(tests).then(window.onload).catch(console.error.bind(console));
}());
