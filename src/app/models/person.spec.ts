import {Person} from './person';

describe('Person', () => {

    it('has name, email, city given in the constructor', () => {
        var person =
            new Person(1, 'Test Testingsson', 'test.testingsson@testability.com', 'Tester Town');
        expect(person.name).toEqual('Test Testingsson');
        expect(person.email).toEqual('test.testingsson@testability.com');
        expect(person.city).toEqual('Tester Town');
    });

    it('has id set and being a number when created', () => {
        var person =
            new Person(1, 'Test Testingsson', 'test.testingsson@testability.com', 'Tester Town');
        expect(person.id).not.toBe(null);
        expect(person.id).not.toBe(undefined);
        expect(typeof(person.id)).toBe('number');
    });

});
