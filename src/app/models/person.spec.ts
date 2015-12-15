import {Person} from './person';

describe('Person', () => {

    it('has name given in the constructor', () => {
        var person =
            new Person(1, 'Test Testingsson', 'test.testingsson@testability.com', 'Tester Town');
        expect(person.name).toEqual('Test Testingsson');
    });

});
